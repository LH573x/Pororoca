/** Ranking do dia: cada partida terminada pode entrar com o nome do jogador. */
import { get, post, SERVER_TIME } from './online';
import type { Mode } from './types';

export interface RankEntry {
  nome: string;
  km: number;
  modo: Mode;
  /** hora do servidor em que entrou */
  em: number;
}

export const MAX_NAME = 20;

/** Tira espaços sobrando e caracteres de controle; devolve '' se não sobrar nada. */
export const cleanName = (s: string) =>
  s
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, MAX_NAME);

/** Mais km primeiro; no empate, quem chegou antes. */
export const sortRanking = (list: RankEntry[]) => list.slice().sort((a, b) => b.km - a.km || a.em - b.em);

export async function loadRanking(day: number): Promise<RankEntry[]> {
  const data = await get<Record<string, RankEntry> | null>(`ranking/${day}`, { orderBy: '"km"', limitToLast: '100' });
  return sortRanking(Object.values(data ?? {}).filter((e) => e && typeof e.km === 'number'));
}

/** Grava e devolve a posição (1 = primeiro). */
export async function submitScore(day: number, nome: string, km: number, modo: Mode): Promise<number> {
  const { name } = await post<{ name: string }>(`ranking/${day}`, { nome, km, modo, em: SERVER_TIME });
  const list = await loadRanking(day);
  const all = await get<Record<string, RankEntry> | null>(`ranking/${day}/${name}`).catch(() => null);
  const mine = all as RankEntry | null;
  const pos = mine ? list.findIndex((e) => e.em === mine.em && e.nome === mine.nome && e.km === mine.km) : -1;
  return pos >= 0 ? pos + 1 : list.filter((e) => e.km > km).length + 1;
}

export const MODE_LABEL: Record<Mode, string> = { diario: 'Desafio', arquivo: 'Arquivo', infinito: 'Infinito', duelo: 'Duelo' };
