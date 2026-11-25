import { buildBank } from './parse';
import { cidades, comidas, futebol, novelas } from './temas/parte1';
import { marcas, musica, natureza } from './temas/parte2';
import { diaadia, folclore } from './temas/parte3';
import { ciencia, esportes, famosos, filmes, historia, paises } from './temas/parte4';
import { carros, desenhos, games } from './temas/parte5';
import { doces, internet, moda, nomes, turismo } from './temas/parte6';

/** Os 23 temas, na ordem do documento de design. */
export const THEME_DEFS = [
  comidas, cidades, futebol, novelas, musica, natureza, marcas, diaadia, folclore, famosos, filmes, paises,
  esportes, historia, ciencia, carros, games, desenhos, moda, doces, internet, turismo, nomes,
];

export const BANK = buildBank(THEME_DEFS);
