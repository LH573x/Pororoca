import { describe, expect, it } from 'vitest';
import { BANK } from '../src/data';
import { distance, matchAnswer } from '../src/match';
import { norm } from '../src/normalize';
import type { Question } from '../src/types';

const q = (id: string) => BANK.questions.find((x) => x.id === id) as Question;

describe('norm', () => {
  it('tira acento, maiúscula, artigo e plural', () => {
    expect(norm('As Bananas')).toBe('banana');
    expect(norm('Pé-de-Moleque')).toBe('pe moleque');
    expect(norm('  UBERLÂNDIA ')).toBe('uberlandia');
  });
});

describe('distance', () => {
  it('conta trocas de letra vizinha como um erro', () => {
    expect(distance('abacaxi', 'abacxai', 2)).toBe(1);
    expect(distance('uberlandia', 'uberlandai', 2)).toBe(1);
    expect(distance('casa', 'mesa', 1)).toBe(2);
  });
});

describe('matchAnswer', () => {
  it('aceita a resposta certa, com ou sem acento e maiúscula', () => {
    const r = matchAnswer(q('cidades/mg'), 'uberlandia');
    expect(r.kind).toBe('exact');
    expect(matchAnswer(q('cidades/mg'), 'ITABIRITO').kind).toBe('exact');
    expect(matchAnswer(q('folclore/personagem'), 'saci-pererê').kind).toBe('exact');
  });

  it('aceita sinônimos', () => {
    const r = matchAnswer(q('folclore/junina'), 'mungunzá');
    expect(r.kind === 'exact' && r.answer.name).toBe('Canjica');
  });

  it('sugere quando há um erro pequeno de digitação', () => {
    const r = matchAnswer(q('cidades/mg'), 'Uberlândai');
    expect(r.kind).toBe('suggest');
    expect(r.kind === 'suggest' && r.answer.name).toBe('Uberlândia');
  });

  it('recusa a capital quando a regra diz "que não seja a capital"', () => {
    expect(matchAnswer(q('cidades/mg'), 'Belo Horizonte')).toEqual({ kind: 'invalid', reason: 'regra' });
    expect(matchAnswer(q('cidades/mg'), 'belo horisonte').kind).toBe('invalid');
    expect(matchAnswer(q('cidades/ne'), 'Recife').kind).toBe('invalid');
  });

  it('recusa texto digitado ao acaso em todas as perguntas', () => {
    const mash = ['asdfgh', 'qwerty', 'kkkkkkk', 'sdlkfjsdf', 'aaaaaa', 'hjkl', 'xyzw', 'qweasdzxc', 'lalala', 'teste', 'nada', 'zzzz', 'ksksks', 'oiuytr', 'mnbvcx', 'pooooo', 'wwwww', 'asdkjhasd', 'jdjdjdjd', 'aksjdhaksjd', 'fdsafdsa'];
    for (const question of BANK.questions) {
      for (const m of mash) {
        const r = matchAnswer(question, m);
        expect(r.kind, `${question.id} aceitou "${m}"`).toBe('invalid');
      }
    }
  });

  it('recusa texto vazio ou só pontuação', () => {
    expect(matchAnswer(q('cidades/mg'), '   ').kind).toBe('invalid');
    expect(matchAnswer(q('cidades/mg'), '!!!').kind).toBe('invalid');
  });
});
