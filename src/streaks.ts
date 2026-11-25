import type { SavedRound } from './storage';

/** Dias seguidos jogando o desafio (atual e recorde). */
export function streaks(done: SavedRound[], todayN: number) {
  const set = new Set(done.map((r) => r.day));
  let max = 0;
  let run = 0;
  for (let d = 1; d <= todayN; d++) {
    run = set.has(d) ? run + 1 : 0;
    max = Math.max(max, run);
  }
  let current = 0;
  let d = set.has(todayN) ? todayN : todayN - 1;
  while (d >= 1 && set.has(d)) {
    current++;
    d--;
  }
  return { current, max };
}
