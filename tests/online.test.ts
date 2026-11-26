import { describe, expect, it } from 'vitest';
import { SECS } from '../src/config';
import { COUNTDOWN_MS, GAP_MS, LATE_A_MS, LATE_B_MS, rivalDone, scheduled, toSchedule, type RoomData } from '../src/live';
import { applyEvent } from '../src/online';
import { cleanName, sortRanking } from '../src/ranking';

describe('cópia local do servidor', () => {
  it('put troca o valor no caminho e patch só os filhos listados', () => {
    let v = applyEvent(null, 'put', '/', { qids: 'x', jog: { a: { on: 1 } } });
    v = applyEvent(v, 'put', '/jog/b', { on: 2 });
    expect(v.jog).toEqual({ a: { on: 1 }, b: { on: 2 } });
    v = applyEvent(v, 'patch', '/r', { 'a/0': { l: 5 }, b: [{ l: 3 }] });
    expect(v.r.a[0].l).toBe(5);
    expect(v.r.b[0].l).toBe(3);
    v = applyEvent(v, 'put', '/jog', null);
    expect(v.jog).toBeUndefined();
    expect(v.qids).toBe('x');
  });
});

describe('duelo ao vivo', () => {
  const T = 1_000_000;
  const both: RoomData = { jog: { a: { on: 1 }, b: { on: 2 } } };
  it('quem criou marca a primeira pergunta quando o amigo entra', () => {
    expect(toSchedule({ jog: { a: { on: 1 } } }, 'a', T)).toBeNull();
    expect(toSchedule(both, 'b', T)).toBeNull();
    expect(toSchedule(both, 'a', T)).toEqual([0, T + COUNTDOWN_MS]);
  });
  it('a próxima pergunta só vem quando os dois responderam', () => {
    const room: RoomData = { ...both, q: { 0: T }, r: { a: { 0: { l: 4 } } } };
    expect(toSchedule(room, 'a', T + 5000)).toBeNull();
    room.r!.b = { 0: { l: 2 } };
    expect(toSchedule(room, 'a', T + 6000)).toEqual([1, T + 6000 + GAP_MS]);
    expect(toSchedule(room, 'b', T + 6000)).toBeNull();
  });
  it('se um sumir, o jogo segue depois do tempo', () => {
    const room: RoomData = { ...both, q: [T], r: { b: [{ l: 2 }] } };
    const end = T + SECS * 1000;
    expect(toSchedule(room, 'a', end + LATE_A_MS - 1)).toBeNull();
    expect(toSchedule(room, 'a', end + LATE_A_MS + 1)?.[0]).toBe(1);
    expect(toSchedule(room, 'b', end + LATE_B_MS + 1)?.[0]).toBe(1);
  });
  it('depois da 7ª não marca mais nada', () => {
    const q = [0, 1, 2, 3, 4, 5, 6].map((i) => T + i);
    expect(scheduled({ q })).toBe(6);
    expect(toSchedule({ ...both, q }, 'a', T + 999999)).toBeNull();
  });
  it('sabe quando o amigo terminou', () => {
    const seven = Array.from({ length: 7 }, () => ({ l: 1 }));
    expect(rivalDone({ r: { b: seven } }, 'a', T)).toBe(true);
    expect(rivalDone({ r: { b: seven.slice(1) } }, 'a', T)).toBe(false);
  });
});

describe('ranking', () => {
  it('limpa o nome', () => {
    expect(cleanName('  Luiz \n  Hong  ')).toBe('Luiz Hong');
    expect(cleanName('   ')).toBe('');
    expect(cleanName('x'.repeat(40))).toHaveLength(20);
  });
  it('mais km primeiro, no empate quem chegou antes', () => {
    const e = (nome: string, km: number, em: number) => ({ nome, km, em, modo: 'diario' as const });
    expect(sortRanking([e('a', 100, 1), e('b', 300, 5), e('c', 300, 2)]).map((x) => x.nome)).toEqual(['c', 'b', 'a']);
  });
});
