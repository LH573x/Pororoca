import { buildBank } from './parse';
import { ciencia, corpo } from './temas/ciencia';
import { comidas } from './temas/comidas';
import { desenhos, folclore, novelas } from './temas/cultura';
import { esportes } from './temas/esportes';
import { futebol } from './temas/futebol';
import { cidades, litoral } from './temas/lugares';
import { paises } from './temas/mundo';
import { bairros, carros, historia, linguas, marcas, mitologia, musica, natureza } from './temas/outros';
import { filmes, games } from './temas/telas';

/** Os temas do jogo. Só entram perguntas com universo fechado de respostas, que dá para conferir. */
export const THEME_DEFS = [
  comidas, cidades, litoral, bairros, paises, futebol, esportes, novelas, folclore, desenhos, filmes, games,
  musica, natureza, marcas, carros, historia, linguas, mitologia, ciencia, corpo,
];

export const BANK = buildBank(THEME_DEFS);
