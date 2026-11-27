/**
 * Duelo ao vivo: uma sala no servidor com as 7 perguntas, os dois jogadores e a hora de início de cada pergunta.
 * Quem criou a sala ("a") marca a hora da próxima pergunta quando os dois responderam (ou o tempo acabou),
 * e os dois começam juntos. Se quem criou sumir, quem entrou ("b") marca no lugar dele, um pouco depois.
 */
import { SECS, WAVES } from './config';
import { listen, put, putWithClock, SERVER_TIME, get } from './online';
import { randomSeed } from './random';

export type Role = 'a' | 'b';
export interface LivePick {
  /** nível da resposta (0 = errou ou acabou o tempo) */
  l: number;
  /** resposta reconhecida */
  n?: string | null;
}
export interface RoomData {
  criada?: number;
  /** ids das perguntas, separados por vírgula */
  qids?: string;
  jog?: Partial<Record<Role, { on: number }>>;
  /** hora (do servidor) em que cada pergunta começa */
  q?: Record<number, number> | number[];
  r?: Partial<Record<Role, Record<number, LivePick> | LivePick[]>>;
}

/** Quanto esperar depois que os dois responderam: dá tempo de ver a onda. */
export const GAP_MS = 3800;
/** Contagem antes da primeira pergunta. */
export const COUNTDOWN_MS = 3500;
/** Folga depois do fim do tempo antes de seguir sem o outro (ele pode ter saído). */
export const LATE_A_MS = 4000;
export const LATE_B_MS = 10000;

export const other = (r: Role): Role => (r === 'a' ? 'b' : 'a');
const at = <T>(x: Record<number, T> | T[] | undefined, i: number): T | undefined => (x ? (x as any)[i] ?? undefined : undefined);

export const startOf = (room: RoomData | null, i: number) => at(room?.q, i);
export const pickOf = (room: RoomData | null, role: Role, i: number) => at(room?.r?.[role], i);
export const picksOf = (room: RoomData | null, role: Role) =>
  Array.from({ length: WAVES }, (_, i) => pickOf(room, role, i)).filter((p): p is LivePick => !!p);

/** Última pergunta que já tem hora marcada (-1 = ainda não começou). */
export function scheduled(room: RoomData | null): number {
  let i = -1;
  while (i + 1 < WAVES && startOf(room, i + 1) !== undefined) i++;
  return i;
}

/**
 * O que este jogador deve marcar agora: [índice da pergunta, hora de início] ou null.
 * Função pura, para dar para testar.
 */
export function toSchedule(room: RoomData | null, role: Role, serverNow: number): [number, number] | null {
  if (!room) return null;
  const i = scheduled(room);
  if (i < 0) {
    if (role === 'a' && room.jog?.a && room.jog?.b) return [0, serverNow + COUNTDOWN_MS];
    return null;
  }
  if (i >= WAVES - 1) return null;
  const end = startOf(room, i)! + SECS * 1000;
  const both = pickOf(room, 'a', i) && pickOf(room, 'b', i);
  if (role === 'a' && (both || serverNow > end + LATE_A_MS)) return [i + 1, serverNow + (both ? GAP_MS : 1500)];
  if (role === 'b' && serverNow > end + LATE_B_MS) return [i + 1, serverNow + 1500];
  return null;
}

/** O outro jogador terminou (ou já passou da hora de terminar). */
export function rivalDone(room: RoomData | null, role: Role, serverNow: number): boolean {
  const o = other(role);
  if (picksOf(room, o).length >= WAVES) return true;
  const last = startOf(room, WAVES - 1);
  return last !== undefined && serverNow > last + SECS * 1000 + LATE_B_MS;
}

export class LiveDuel {
  room: RoomData | null = null;
  private stop: (() => void) | null = null;
  private marked = -1;
  private constructor(
    readonly id: string,
    readonly role: Role,
    /** hora do servidor - hora daqui */
    readonly offset: number,
  ) {}

  static async create(qids: string[]): Promise<LiveDuel> {
    const id = randomSeed();
    const offset = await putWithClock(`salas/${id}`, { qids: qids.join(','), jog: { a: { on: SERVER_TIME } } }, 'criada');
    return new LiveDuel(id, 'a', offset);
  }

  /** Lê a sala antes de entrar (para dizer se ela existe ou se está cheia). */
  static peek = (id: string) => get<RoomData | null>(`salas/${id}`);

  static async join(id: string): Promise<LiveDuel> {
    const offset = await putWithClock(`salas/${id}/jog/b`, {}, 'on');
    return new LiveDuel(id, 'b', offset);
  }

  serverNow = () => Date.now() + this.offset;
  toLocal = (serverMs: number) => serverMs - this.offset;

  watch(onChange: () => void, onError: () => void) {
    this.stop = listen(
      `salas/${this.id}`,
      (v) => {
        this.room = v;
        onChange();
      },
      onError,
    );
  }

  /** Chamado várias vezes por segundo: marca a próxima pergunta quando for a vez deste jogador. */
  tick() {
    const s = toSchedule(this.room, this.role, this.serverNow());
    if (!s || s[0] <= this.marked) return;
    this.marked = s[0];
    put(`salas/${this.id}/q/${s[0]}`, Math.round(s[1])).catch(() => {
      this.marked = s[0] - 1;
    });
  }

  sendPick(i: number, pick: LivePick) {
    put(`salas/${this.id}/r/${this.role}/${i}`, pick).catch(() => {
      // sem rede: tenta mais uma vez
      setTimeout(() => put(`salas/${this.id}/r/${this.role}/${i}`, pick).catch(() => {}), 1500);
    });
  }

  close() {
    this.stop?.();
    this.stop = null;
  }
}
