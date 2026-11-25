import type { Answer, Question } from './types';
import { compact, norm } from './normalize';

export type MatchResult =
  | { kind: 'exact'; answer: Answer }
  | { kind: 'suggest'; answer: Answer }
  | { kind: 'invalid'; reason: 'curta' | 'desconhecida' | 'regra' };

interface Index {
  excluded: Set<string>;
  exact: Map<string, Answer>;
  keys: { key: string; answer: Answer }[];
}

const cache = new WeakMap<Question, Index>();

function indexOf(q: Question): Index {
  let ix = cache.get(q);
  if (ix) return ix;
  ix = { excluded: new Set(q.excluded.flatMap((x) => [norm(x), compact(norm(x))])), exact: new Map(), keys: [] };
  for (const a of q.answers) {
    for (const raw of [a.name, ...a.aliases]) {
      const n = norm(raw);
      if (!n) continue;
      for (const k of new Set([n, compact(n)])) {
        // se dois nomes colidem, fica o mais comum (menor nível)
        const prev = ix.exact.get(k);
        if (!prev || a.tier < prev.tier) ix.exact.set(k, a);
      }
      ix.keys.push({ key: compact(n), answer: a });
    }
  }
  cache.set(q, ix);
  return ix;
}

/** Distância de edição com transposição (Damerau-Levenshtein restrita), com corte em max. */
export function distance(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const prev2 = new Array(b.length + 1).fill(0);
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, prev2[j - 2] + 1);
      cur.push(v);
      if (v < rowMin) rowMin = v;
    }
    if (rowMin > max) return max + 1;
    for (let j = 0; j <= b.length; j++) prev2[j] = prev[j];
    prev = cur;
  }
  return prev[b.length];
}

/** Quantos erros de digitação toleramos, pelo tamanho da palavra. */
export const tolerance = (len: number) => (len < 5 ? 0 : len < 9 ? 1 : 2);

/**
 * Verifica a resposta digitada contra a lista da pergunta.
 * - exata (depois de padronizar) -> vale
 * - parecida (erro pequeno de digitação) -> sugere "Você quis dizer...?"
 * - qualquer outra coisa -> recusada (vale zero se o tempo acabar)
 */
export function matchAnswer(q: Question, input: string): MatchResult {
  const n = norm(input);
  const c = compact(n);
  if (!c) return { kind: 'invalid', reason: 'curta' };
  const ix = indexOf(q);
  if (ix.excluded.has(n) || ix.excluded.has(c)) return { kind: 'invalid', reason: 'regra' };
  const hit = ix.exact.get(n) ?? ix.exact.get(c);
  if (hit) return { kind: 'exact', answer: hit };
  if (c.length < 2) return { kind: 'invalid', reason: 'curta' };
  const tol = tolerance(c.length);
  if (tol > 0 && ![...ix.excluded].some((x) => distance(c, compact(x), tol) <= tol)) {
    let best: Answer | null = null;
    let bestD = tol + 1;
    for (const { key, answer } of ix.keys) {
      // o limite vale para os dois lados: palavra curta na lista não aceita erro
      const allowed = Math.min(tol, tolerance(key.length));
      if (allowed === 0) continue;
      const d = distance(c, key, allowed);
      if (d > allowed) continue;
      if (d < bestD || (d === bestD && best && answer.tier < best.tier)) {
        best = answer;
        bestD = d;
      }
    }
    if (best && bestD <= tol) return { kind: 'suggest', answer: best };
  }
  return { kind: 'invalid', reason: 'desconhecida' };
}
