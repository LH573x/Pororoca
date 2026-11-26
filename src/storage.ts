import type { Pick } from './types';

const P = 'pororoca:v1:';

export interface SavedRound {
  /** número do desafio (diário/arquivo) */
  day: number;
  picks: Pick[];
  done: boolean;
  /** pergunta que estava na tela e quando ela apareceu (o relógio não para se a pessoa sair) */
  pendingIdx?: number;
  /** perguntas sorteadas para o dia, guardadas para a rodada não mudar se o banco mudar */
  qids?: string[];
  pendingAt?: number;
  /** terminado pelo arquivo, depois do dia (não conta na sequência) */
  late?: boolean;
  /** já entrou no ranking do dia */
  ranked?: boolean;
}

function read<T>(k: string): T | null {
  try {
    const v = localStorage.getItem(P + k);
    return v ? (JSON.parse(v) as T) : null;
  } catch {
    return null;
  }
}
function write(k: string, v: unknown) {
  try {
    localStorage.setItem(P + k, JSON.stringify(v));
  } catch {
    /* armazenamento cheio ou bloqueado: o jogo segue sem salvar */
  }
}

export const loadDay = (n: number) => read<SavedRound>(`dia:${n}`);
export const saveDay = (r: SavedRound) => write(`dia:${r.day}`, r);

export function allDays(upTo: number): SavedRound[] {
  const out: SavedRound[] = [];
  for (let n = 1; n <= upTo; n++) {
    const r = loadDay(n);
    if (r) out.push(r);
  }
  return out;
}

/** Perguntas já vistas no modo infinito, para não repetir logo. */
export const loadSeen = () => new Set(read<string[]>('vistas') ?? []);
export const saveSeen = (s: Set<string>) => write('vistas', [...s].slice(-200));

export interface Refused {
  qid: string;
  text: string;
  at: string;
  /** o jogador apertou "contestar": acha que a resposta vale */
  contested?: boolean;
  /** a contestação já foi enviada para revisão */
  sent?: boolean;
}
/** Respostas recusadas ficam guardadas para revisarmos as listas depois. */
export function logRefused(r: Refused) {
  const list = read<Refused[]>('recusadas') ?? [];
  list.push(r);
  write('recusadas', list.slice(-300));
}
export const loadRefused = () => read<Refused[]>('recusadas') ?? [];

/** Marca como contestada a última recusa dessa resposta nessa pergunta. */
export function contestRefused(qid: string, text: string) {
  const list = loadRefused();
  for (let i = list.length - 1; i >= 0; i--) {
    if (list[i].qid === qid && list[i].text === text) {
      list[i].contested = true;
      break;
    }
  }
  write('recusadas', list);
}
export const pendingContests = () => loadRefused().filter((r) => r.contested && !r.sent);
export function markContestsSent() {
  write('recusadas', loadRefused().map((r) => (r.contested ? { ...r, sent: true } : r)));
}

export const totalKm = (picks: Pick[]) => picks.reduce((s, p) => s + p.level * 100, 0);

/** Nome usado no ranking da última vez, para não precisar digitar de novo. */
export const loadName = () => read<string>('nome') ?? '';
export const saveName = (n: string) => write('nome', n);
