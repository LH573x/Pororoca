import type { Answer, Question } from './types';

/**
 * Raridade em três fases, como no documento de design:
 * - menos de 100 respostas na pergunta: só a estimativa (nível da lista);
 * - de 100 a 249: mistura a estimativa com a % real dos jogadores;
 * - 250 ou mais: só a % real.
 * No lançamento não há contagens, então vale sempre a estimativa.
 */

/** Contagem de respostas por pergunta, vinda do servidor quando ele existir. */
export interface QuestionStats {
  total: number;
  /** nome da resposta -> quantas pessoas deram */
  counts: Record<string, number>;
}

export interface StatsSource {
  get(qid: string): QuestionStats | undefined;
}

export const noStats: StatsSource = { get: () => undefined };

export const BLEND_FROM = 100;
export const PLAYERS_ONLY_FROM = 250;

/** % mínima de jogadores para cada nível (nível 1 = 30% ou mais ... nível 10 = menos de 0,3%). */
const PCT_FLOORS = [30, 20, 13, 8, 5, 3, 2, 1, 0.3];

export function levelFromPct(pct: number): number {
  for (let i = 0; i < PCT_FLOORS.length; i++) if (pct >= PCT_FLOORS[i]) return i + 1;
  return 10;
}

export function levelFor(q: Question, a: Answer, stats: StatsSource = noStats): number {
  const est = clamp(a.tier);
  const s = stats.get(q.id);
  if (!s || s.total < BLEND_FROM) return est;
  const pct = ((s.counts[a.name] ?? 0) / s.total) * 100;
  const real = levelFromPct(pct);
  if (s.total >= PLAYERS_ONLY_FROM) return real;
  const w = (s.total - BLEND_FROM) / (PLAYERS_ONLY_FROM - BLEND_FROM);
  return clamp(Math.round(est * (1 - w) + real * w));
}

const clamp = (n: number) => Math.max(1, Math.min(10, Math.round(n)));
