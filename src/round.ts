import { WAVES } from './config';
import { rng, shuffle } from './random';
import type { Question, Theme } from './types';

/**
 * Sorteia uma rodada: 7 temas diferentes e uma pergunta de cada.
 * A mesma semente sempre dá a mesma rodada (diário, arquivo e duelo).
 * `avoid` tira perguntas já vistas (no modo infinito), se ainda sobrar opção.
 */
export function pickRound(themes: Theme[], questions: Question[], seed: string, avoid: Set<string> = new Set()): Question[] {
  const r = rng(seed);
  const byTheme = new Map<string, Question[]>();
  for (const q of questions) {
    const list = byTheme.get(q.theme) ?? [];
    list.push(q);
    byTheme.set(q.theme, list);
  }
  const usable = themes.filter((t) => byTheme.has(t.id));
  // temas com pergunta ainda não vista vêm primeiro
  const fresh = (t: Theme) => byTheme.get(t.id)!.some((q) => !avoid.has(q.id));
  const order = shuffle(usable, r).sort((a, b) => Number(fresh(b)) - Number(fresh(a)));
  return order.slice(0, WAVES).map((t) => {
    const qs = byTheme.get(t.id)!;
    const pool = qs.filter((q) => !avoid.has(q.id));
    const from = pool.length ? pool : qs;
    return from[Math.floor(r() * from.length)];
  });
}
