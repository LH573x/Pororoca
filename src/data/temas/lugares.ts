import type { ThemeDef } from '../../types';
import {
  CIDADES_AL, CIDADES_BA, CIDADES_CE, CIDADES_ES, CIDADES_GO, CIDADES_MA, CIDADES_MG, CIDADES_MS, CIDADES_MT, CIDADES_NE,
  CIDADES_NORTE, CIDADES_PA, CIDADES_PB, CIDADES_PE, CIDADES_PI, CIDADES_PR, CIDADES_RJ, CIDADES_RN, CIDADES_RS, CIDADES_SC, CIDADES_SP,
} from '../gerado/cidades';
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
    { id: 'ba', t: 'Uma cidade da Bahia', r: 'que não seja a capital', a: CIDADES_BA, x: 'Salvador', desde: 2 },
    { id: 'ce', t: 'Uma cidade do Ceará', r: 'que não seja a capital', a: CIDADES_CE, x: 'Fortaleza', desde: 2 },
    { id: 'pe', t: 'Uma cidade de Pernambuco', r: 'que não seja a capital', a: CIDADES_PE, x: 'Recife', desde: 2 },
    { id: 'pb', t: 'Uma cidade da Paraíba', r: 'que não seja a capital', a: CIDADES_PB, x: 'João Pessoa', desde: 2 },
    { id: 'rn', t: 'Uma cidade do Rio Grande do Norte', r: 'que não seja a capital', a: CIDADES_RN, x: 'Natal', desde: 2 },
    { id: 'al', t: 'Uma cidade de Alagoas', r: 'que não seja a capital', a: CIDADES_AL, x: 'Maceió', desde: 2 },
    { id: 'ma', t: 'Uma cidade do Maranhão', r: 'que não seja a capital', a: CIDADES_MA, x: 'São Luís', desde: 2 },
    { id: 'pi', t: 'Uma cidade do Piauí', r: 'que não seja a capital', a: CIDADES_PI, x: 'Teresina', desde: 2 },
    { id: 'pa', t: 'Uma cidade do Pará', r: 'que não seja a capital', a: CIDADES_PA, x: 'Belém', desde: 2 },
    { id: 'es', t: 'Uma cidade do Espírito Santo', r: 'que não seja a capital', a: CIDADES_ES, x: 'Vitória', desde: 2 },
    { id: 'mt', t: 'Uma cidade de Mato Grosso', r: 'que não seja a capital', a: CIDADES_MT, x: 'Cuiabá', desde: 2 },
    { id: 'ms', t: 'Uma cidade de Mato Grosso do Sul', r: 'que não seja a capital', a: CIDADES_MS, x: 'Campo Grande', desde: 2 },
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
