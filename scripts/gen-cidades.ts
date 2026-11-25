/**
 * Gera as listas de cidades a partir de dados públicos do IBGE.
 *
 * Fontes (baixe e passe o caminho dos arquivos):
 *  - População do Censo 2022 por município (IBGE), CSV "uf,codigo_uf,codigo_municipio,municipio,populacao"
 *    https://raw.githubusercontent.com/turicas/censo-ibge/main/data/output/populacao-2022_2023-06-22.csv
 *
 * Uso: npm run gen-cidades -- caminho/populacao-2022.csv
 *
 * Raridade estimada: posição por população (a maior cidade é a mais lembrada),
 * com ajustes manuais para cidades pequenas mas famosas (turismo, história).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { compact, norm } from '../src/normalize';

const [csvPath] = process.argv.slice(2);
if (!csvPath) throw new Error('passe o caminho do CSV de população');

interface City { uf: string; name: string; pop: number }
const rows: City[] = readFileSync(csvPath, 'utf8')
  .trim()
  .split('\n')
  .slice(1)
  .map((l) => {
    const p = l.split(',');
    return { uf: p[0], name: p[3], pop: Number(p[4]) };
  });

// posição -> nível (1 = comum). Até a 3ª maior é nível 1, depois da 500ª é nível 10.
const RANK_CUTS = [3, 8, 15, 30, 50, 90, 160, 300, 500];
const tierOfRank = (rank: number) => {
  for (let i = 0; i < RANK_CUTS.length; i++) if (rank <= RANK_CUTS[i]) return i + 1;
  return 10;
};

const CAPITALS = new Set(['Belo Horizonte', 'São Paulo', 'Salvador', 'Fortaleza', 'Recife', 'São Luís', 'Maceió', 'João Pessoa', 'Teresina', 'Natal', 'Aracaju']);

// cidades famosas que as pessoas lembram mais do que o tamanho sugere
const FAME: Record<string, number> = {
  // MG
  'Ouro Preto': 2, Tiradentes: 3, Diamantina: 4, 'Poços de Caldas': 3, 'São João del Rei': 4, Mariana: 4,
  Congonhas: 5, Brumadinho: 4, Capitólio: 5, 'São Lourenço': 6, Caxambu: 6, 'Monte Verde': 6, Sabará: 5,
  'Lagoa Santa': 6, Itabirito: 8, Araxá: 5, Varginha: 4, 'Três Corações': 5, Barbacena: 4,
  'Carrancas': 7, 'São Thomé das Letras': 6, 'Conceição do Mato Dentro': 8, Cataguases: 7,
  // SP
  Santos: 1, Campinas: 1, 'Ribeirão Preto': 2, Guarujá: 3, Ubatuba: 3, 'Campos do Jordão': 3, Ilhabela: 4,
  Aparecida: 3, 'Águas de Lindóia': 6, 'Serra Negra': 6, Brotas: 6, Holambra: 6, Bertioga: 4, Caraguatatuba: 4,
  'São Sebastião': 4, Itu: 4, 'Embu das Artes': 5, 'Olímpia': 5, 'Barretos': 4, 'Atibaia': 5,
  // Nordeste
  'Porto Seguro': 2, 'Ilhéus': 3, 'Jericoacoara': 4, 'Porto de Galinhas': 4, Olinda: 2, 'Juazeiro do Norte': 3,
  'Campina Grande': 2, Caruaru: 2, Petrolina: 3, 'Feira de Santana': 2, Mossoró: 3, 'Lençóis': 4,
  'Barreirinhas': 4, 'Mata de São João': 6, 'Ipojuca': 5, 'Tamandaré': 5, 'Pipa': 4, 'Tibau do Sul': 6,
  'Maragogi': 4, 'Canoa Quebrada': 5, 'Aracati': 5, 'Jijoca de Jericoacoara': 4, 'Morro de São Paulo': 5,
  'Cairu': 6, 'Itacaré': 4, 'Trancoso': 5, 'Arraial d\'Ajuda': 5, 'Fernando de Noronha': 3, 'Canudos': 5,
  'Cachoeira': 5, 'Mucugê': 7, 'Piranhas': 6, 'Penedo': 5, 'São Cristóvão': 6, 'Parnaíba': 4, 'Sobral': 4,
  'Crato': 4, 'Garanhuns': 4, 'Gravatá': 5, 'Triunfo': 7, 'Paulo Afonso': 4, 'Juazeiro': 3,
};

// apelidos e grafias comuns
const ALIASES: Record<string, string[]> = {
  'São João del Rei': ['São João del-Rei', 'São João d\'El-Rei', 'São João del Rey'],
  'Embu das Artes': ['Embu'],
  'Jijoca de Jericoacoara': ['Jericoacoara', 'Jeri'],
  'Ipojuca': ['Porto de Galinhas'],
  'Tibau do Sul': ['Pipa', 'Praia da Pipa'],
  'Cairu': ['Morro de São Paulo'],
  'Aracati': ['Canoa Quebrada'],
  'São José dos Campos': ['SJC', 'São José'],
  'São José do Rio Preto': ['Rio Preto'],
  'São Bernardo do Campo': ['São Bernardo', 'SBC'],
  'Ribeirão Preto': ['Ribeirão'],
  'Governador Valadares': ['Valadares'],
  'Juiz de Fora': ['JF'],
  'Feira de Santana': ['Feira'],
  'Jaboatão dos Guararapes': ['Jaboatão'],
  'Vitória da Conquista': ['Conquista'],
  'Campos do Jordão': ['Campos'],
  'Fernando de Noronha': ['Noronha'],
};

function build(cities: City[], label: string): string {
  const seen = new Map<string, City>();
  for (const c of cities) {
    if (CAPITALS.has(c.name)) continue;
    const k = compact(norm(c.name));
    const prev = seen.get(k);
    if (!prev || c.pop > prev.pop) seen.set(k, c);
  }
  const sorted = [...seen.values()].sort((a, b) => b.pop - a.pop);
  const byTier = new Map<number, string[]>();
  sorted.forEach((c, i) => {
    const tier = FAME[c.name] ?? tierOfRank(i + 1);
    const entry = [c.name, ...(ALIASES[c.name] ?? [])].join('|');
    (byTier.get(tier) ?? byTier.set(tier, []).get(tier)!).push(entry);
  });
  const lines = [...byTier.keys()].sort((a, b) => a - b).map((t) => `${t}: ${byTier.get(t)!.join('; ')}`);
  return `// ${label}: ${sorted.length} municípios (IBGE, Censo 2022). Gerado por scripts/gen-cidades.ts, não edite à mão.\n` + lines.join('\n');
}

const NE = new Set(['MA', 'PI', 'CE', 'RN', 'PB', 'PE', 'AL', 'SE', 'BA']);
const out = {
  mg: build(rows.filter((c) => c.uf === 'MG'), 'Minas Gerais'),
  sp: build(rows.filter((c) => c.uf === 'SP'), 'São Paulo'),
  ne: build(rows.filter((c) => NE.has(c.uf)), 'Nordeste'),
};

const file = `// Arquivo gerado por scripts/gen-cidades.ts a partir do Censo 2022 do IBGE. Não edite à mão.\n` +
  Object.entries(out).map(([k, v]) => `export const CIDADES_${k.toUpperCase()} = ${JSON.stringify(v.split('\n').slice(1).join('\n'))};`).join('\n') + '\n';
writeFileSync(new URL('../src/data/gerado/cidades.ts', import.meta.url), file);
for (const [k, v] of Object.entries(out)) console.log(k, v.split('\n')[0]);
