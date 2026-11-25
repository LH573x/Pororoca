import type { ThemeDef } from '../../types';
import { CIDADES_GO, CIDADES_MG, CIDADES_NE, CIDADES_NORTE, CIDADES_PR, CIDADES_RJ, CIDADES_RS, CIDADES_SC, CIDADES_SP } from '../gerado/cidades';
import { CIDADES_LITORAL } from '../gerado/litoral';

/** Todas as cidades vêm da lista oficial de municípios do IBGE (Censo 2022). */
export const cidades: ThemeDef = {
  id: 'cidades',
  name: 'Cidades do Brasil',
  questions: [
    { id: 'mg', t: 'Uma cidade de Minas Gerais', r: 'que não seja a capital', a: CIDADES_MG, x: 'Belo Horizonte|BH|Beagá' },
    { id: 'sp', t: 'Uma cidade do estado de São Paulo', r: 'que não seja a capital', a: CIDADES_SP, x: 'São Paulo|Sampa|SP' },
    { id: 'ne', t: 'Uma cidade do Nordeste', r: 'que não seja capital', a: CIDADES_NE, x: 'Salvador; Fortaleza; Recife; São Luís; Maceió; João Pessoa; Teresina; Natal; Aracaju' },
    { id: 'rj', t: 'Uma cidade do estado do Rio de Janeiro', r: 'que não seja a capital', a: CIDADES_RJ, x: 'Rio de Janeiro|Rio|RJ' },
    { id: 'rs', t: 'Uma cidade do Rio Grande do Sul', r: 'que não seja a capital', a: CIDADES_RS, x: 'Porto Alegre|POA' },
    { id: 'pr', t: 'Uma cidade do Paraná', r: 'que não seja a capital', a: CIDADES_PR, x: 'Curitiba' },
    { id: 'sc', t: 'Uma cidade de Santa Catarina', r: 'que não seja a capital', a: CIDADES_SC, x: 'Florianópolis|Floripa' },
    { id: 'go', t: 'Uma cidade de Goiás', r: 'que não seja a capital', a: CIDADES_GO, x: 'Goiânia' },
    { id: 'norte', t: 'Uma cidade da Região Norte', r: 'que não seja capital', a: CIDADES_NORTE, x: 'Manaus; Belém; Porto Velho; Rio Branco; Macapá; Boa Vista; Palmas' },
  ],
};

export const litoral: ThemeDef = {
  id: 'turismo',
  name: 'Litoral e natureza',
  questions: [
    {
      id: 'litoral',
      t: 'Uma cidade brasileira banhada pelo mar',
      r: 'município do litoral',
      a: CIDADES_LITORAL,
    },
  ],
};
