import { describe, expect, it } from 'vitest';
import { animalFor, decodeLevels, encodeLevels, waveBars } from '../src/animals';
import { BANK } from '../src/data';
import { stretch } from '../src/data/parse';
import { dayNumber, isoOfDay, todayISO } from '../src/day';
import { levelFor, levelFromPct } from '../src/rarity';
import { pickRound } from '../src/round';
import { streaks } from '../src/streaks';

describe('banco de perguntas', () => {
  it('tem os 21 temas e pelo menos uma pergunta em cada', () => {
    expect(BANK.themes).toHaveLength(21);
    for (const t of BANK.themes) expect(BANK.questions.some((q) => q.theme === t.id), t.id).toBe(true);
  });
  it('toda pergunta tem respostas óbvias (nível 1 ou 2) e a mais rara vale 1000 km', () => {
    for (const q of BANK.questions) {
      const tiers = q.answers.map((a) => a.tier);
      expect(Math.min(...tiers), q.id).toBeLessThanOrEqual(2);
      expect(Math.max(...tiers), q.id).toBe(10);
    }
  });
  it('a pergunta das cidades do litoral aceita Angra dos Reis', () => {
    const q = BANK.questions.find((x) => x.id === 'turismo/litoral')!;
    expect(q.answers.some((a) => a.name === 'Angra dos Reis')).toBe(true);
  });
});

describe('stretch', () => {
  it('leva o topo de uma lista curta a 10 sem inflar as respostas comuns', () => {
    const r = stretch([1, 2, 3, 4, 5, 6].map((t) => ({ name: String(t), aliases: [], tier: t })));
    expect(r.map((a) => a.tier)).toEqual([1, 2, 4, 6, 8, 10]);
  });
});

describe('rodada', () => {
  it('a mesma semente dá a mesma rodada, com 7 temas diferentes', () => {
    const a = pickRound(BANK.themes, BANK.questions, 'dia-1');
    const b = pickRound(BANK.themes, BANK.questions, 'dia-1');
    expect(a.map((q) => q.id)).toEqual(b.map((q) => q.id));
    expect(new Set(a.map((q) => q.theme)).size).toBe(7);
  });
  it('dias diferentes dão rodadas diferentes', () => {
    const a = pickRound(BANK.themes, BANK.questions, 'dia-1').map((q) => q.id);
    const b = pickRound(BANK.themes, BANK.questions, 'dia-2').map((q) => q.id);
    expect(a).not.toEqual(b);
  });
  it('o infinito evita perguntas já vistas', () => {
    const seen = new Set(BANK.questions.slice(0, 20).map((q) => q.id));
    const r = pickRound(BANK.themes, BANK.questions, 'inf-x', seen);
    expect(r.filter((q) => seen.has(q.id))).toHaveLength(0);
  });
});

describe('raridade', () => {
  const q = BANK.questions[0];
  const a = q.answers.find((x) => x.tier === 1)!;
  it('sem jogadores usa a estimativa', () => {
    expect(levelFor(q, a)).toBe(1);
  });
  it('com 250+ respostas usa a % real', () => {
    const stats = { get: () => ({ total: 1000, counts: { [a.name]: 2 } }) };
    expect(levelFor(q, a, stats)).toBe(10);
  });
  it('entre 100 e 249 mistura as duas', () => {
    const stats = { get: () => ({ total: 175, counts: { [a.name]: 0 } }) };
    expect(levelFor(q, a, stats)).toBe(6);
  });
  it('tabela de %', () => {
    expect(levelFromPct(35)).toBe(1);
    expect(levelFromPct(1.5)).toBe(8);
    expect(levelFromPct(0.1)).toBe(10);
  });
});

describe('dias', () => {
  it('25/11/2026 é o desafio #1', () => {
    expect(dayNumber('2026-11-25')).toBe(1);
    expect(dayNumber('2026-12-25')).toBe(31);
    expect(isoOfDay(31)).toBe('2026-12-25');
  });
  it('usa o fuso de Brasília', () => {
    // 02:00 UTC de 26/11 ainda é 25/11 em Brasília
    expect(todayISO(new Date('2026-11-26T02:00:00Z'))).toBe('2026-11-25');
  });
});

describe('resultado', () => {
  it('animal pelo total', () => {
    expect(animalFor(0)[1]).toBe('Carapanã');
    expect(animalFor(4230)[1]).toBe('Preguiça');
    expect(animalFor(7000)[1]).toBe('Boto-cor-de-rosa');
  });
  it('barras e código do duelo', () => {
    expect(waveBars([1, 10, 0])).toBe('▁█·');
    expect(decodeLevels(encodeLevels([1, 10, 0, 5, 3, 2, 9]))).toEqual([1, 10, 0, 5, 3, 2, 9]);
    expect(decodeLevels('12')).toBeNull();
  });
  it('sequência de dias', () => {
    const r = (day: number) => ({ day, picks: [], done: true });
    expect(streaks([r(1), r(2), r(4), r(5), r(6)], 6)).toEqual({ current: 3, max: 3 });
    expect(streaks([r(1), r(2)], 3)).toEqual({ current: 2, max: 2 });
    expect(streaks([r(1)], 3)).toEqual({ current: 0, max: 1 });
  });
});
