/**
 * Gera as listas de cidades a partir de dados públicos do IBGE.
 *
 * Fonte: população do Censo 2022 por município (IBGE), CSV "uf,codigo_uf,codigo_municipio,municipio,populacao",
 * copiado em scripts/dados/populacao-2022.csv de
 * https://raw.githubusercontent.com/turicas/censo-ibge/main/data/output/populacao-2022_2023-06-22.csv
 *
 * Uso: npm run gen-cidades
 *
 * Raridade estimada (mesma régua de todas as perguntas, ver README):
 * o nível é o MAIOR entre o nível pela população e o nível pela posição no estado/região,
 * para que só cidades pequenas e pouco lembradas cheguem a 900 ou 1000 km.
 * Cidades famosas por turismo ou história têm o nível ajustado à mão (FAME).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { compact, norm } from '../src/normalize';

const csvPath = process.argv[2] ?? new URL('./dados/populacao-2022.csv', import.meta.url);

interface City { uf: string; name: string; pop: number }
const rows: City[] = readFileSync(csvPath, 'utf8')
  .trim()
  .split('\n')
  .slice(1)
  .map((l) => {
    const p = l.split(',');
    return { uf: p[0], name: p[3], pop: Number(p[4]) };
  });

/** população mínima para cada nível: 1 milhão ou mais = nível 1 ... menos de 10 mil = nível 10 */
const POP_FLOORS = [1_000_000, 500_000, 300_000, 200_000, 120_000, 70_000, 40_000, 20_000, 10_000];
const tierOfPop = (pop: number) => {
  for (let i = 0; i < POP_FLOORS.length; i++) if (pop >= POP_FLOORS[i]) return i + 1;
  return 10;
};
/** posição máxima (por população, sem a capital) para cada nível */
const RANK_CUTS = [2, 5, 10, 18, 30, 50, 80, 130, 220];
const tierOfRank = (rank: number) => {
  for (let i = 0; i < RANK_CUTS.length; i++) if (rank <= RANK_CUTS[i]) return i + 1;
  return 10;
};

const CAPITALS = new Set([
  'Belo Horizonte', 'São Paulo', 'Rio de Janeiro', 'Vitória', 'Porto Alegre', 'Curitiba', 'Florianópolis', 'Goiânia',
  'Salvador', 'Fortaleza', 'Recife', 'São Luís', 'Maceió', 'João Pessoa', 'Teresina', 'Natal', 'Aracaju',
  'Manaus', 'Belém', 'Porto Velho', 'Rio Branco', 'Macapá', 'Boa Vista', 'Palmas',
]);

// cidades que as pessoas lembram mais (ou menos) do que o tamanho sugere
const FAME: Record<string, number> = {
  // MG
  Uberlândia: 1, 'Juiz de Fora': 1, Contagem: 2, 'Montes Claros': 2, Uberaba: 2, Betim: 3, 'Ouro Preto': 2,
  Tiradentes: 3, Diamantina: 4, 'Poços de Caldas': 3, 'São João del Rei': 4, Mariana: 4, Congonhas: 5,
  Brumadinho: 4, Capitólio: 5, 'São Lourenço': 6, Caxambu: 6, Sabará: 5, 'Lagoa Santa': 6, Araxá: 5,
  Varginha: 4, 'Três Corações': 5, Barbacena: 4, Carrancas: 7, 'São Thomé das Letras': 6, 'Governador Valadares': 3,
  Ipatinga: 3, Divinópolis: 3, 'Sete Lagoas': 3, 'Pouso Alegre': 4, 'Teófilo Otoni': 4, 'Patos de Minas': 4,
  // SP
  Santos: 1, Campinas: 1, Guarulhos: 2, 'Ribeirão Preto': 2, 'São José dos Campos': 2, Sorocaba: 3,
  'São Bernardo do Campo': 2, 'Santo André': 3, Osasco: 3, Guarujá: 3, Ubatuba: 3, 'Campos do Jordão': 3,
  Ilhabela: 4, Aparecida: 3, 'Águas de Lindóia': 6, 'Serra Negra': 6, Brotas: 6, Holambra: 6, Bertioga: 4,
  Caraguatatuba: 4, 'São Sebastião': 4, Itu: 4, 'Embu das Artes': 5, Olímpia: 5, Barretos: 4, Atibaia: 5,
  'Praia Grande': 3, 'São Vicente': 4, Jundiaí: 3, Piracicaba: 3, Bauru: 3, 'São José do Rio Preto': 3,
  // RJ
  Niterói: 1, Petrópolis: 2, 'Cabo Frio': 2, 'Angra dos Reis': 2, 'Armação dos Búzios': 3, Paraty: 3,
  'Arraial do Cabo': 3, Teresópolis: 3, 'Volta Redonda': 3, 'Nova Iguaçu': 3, 'Duque de Caxias': 3,
  'São Gonçalo': 3, 'Campos dos Goytacazes': 3, 'Nova Friburgo': 3, Macaé: 4, Itatiaia: 6, 'Rio das Ostras': 5,
  Saquarema: 5, Resende: 5, Mangaratiba: 6, Maricá: 4, 'Barra Mansa': 5, 'Belford Roxo': 4,
  // RS
  'Caxias do Sul': 1, Gramado: 2, Canela: 3, Pelotas: 2, 'Santa Maria': 2, Canoas: 3, 'Bento Gonçalves': 3,
  Torres: 4, 'Capão da Canoa': 5, Tramandaí: 5, Uruguaiana: 4, "Sant'Ana do Livramento": 5, 'Passo Fundo': 3,
  'Novo Hamburgo': 3, 'Rio Grande': 3, 'Nova Petrópolis': 5, 'Cambará do Sul': 6, 'São Miguel das Missões': 6,
  // PR
  Londrina: 1, Maringá: 1, 'Foz do Iguaçu': 1, 'Ponta Grossa': 2, Cascavel: 2, Paranaguá: 4, Morretes: 5,
  Guaratuba: 5, Antonina: 6, Matinhos: 5, 'São José dos Pinhais': 3,
  // SC
  Joinville: 1, Blumenau: 1, 'Balneário Camboriú': 2, Chapecó: 3, Criciúma: 3, Itajaí: 3, Bombinhas: 4,
  Lages: 4, Garopaba: 5, Pomerode: 5, Urubici: 6, 'São Joaquim': 5, Laguna: 5, Imbituba: 5, Penha: 5,
  'São José': 3, Palhoça: 4, 'Jaraguá do Sul': 4, Brusque: 4,
  // GO
  Anápolis: 1, 'Aparecida de Goiânia': 1, 'Caldas Novas': 2, Pirenópolis: 3, 'Rio Verde': 3, 'Goiás': 4,
  'Alto Paraíso de Goiás': 5, Trindade: 4, Catalão: 5, Luziânia: 5, 'Valparaíso de Goiás': 5, Formosa: 5,
  Jataí: 5, Itumbiara: 5,
  // Norte
  Parintins: 2, Santarém: 2, Ananindeua: 3, Marabá: 3, Altamira: 4, Castanhal: 5, 'Ji-Paraná': 5,
  Tabatinga: 5, Itacoatiara: 5, Oiapoque: 4, Araguaína: 3, Gurupi: 5, 'Cruzeiro do Sul': 5, Parauapebas: 5,
  Bragança: 6, Salinópolis: 5, Soure: 6, 'Presidente Figueiredo': 5, Barcelos: 6, Manacapuru: 5, Tefé: 6,
  // Nordeste
  'Porto Seguro': 2, Ilhéus: 3, 'Porto de Galinhas': 4, Olinda: 2, 'Juazeiro do Norte': 3,
  'Campina Grande': 2, Caruaru: 2, Petrolina: 3, 'Feira de Santana': 2, Mossoró: 3, Lençóis: 4,
  Barreirinhas: 4, 'Mata de São João': 6, Ipojuca: 5, Tamandaré: 5, 'Tibau do Sul': 6,
  Maragogi: 4, Aracati: 5, 'Jijoca de Jericoacoara': 4, Cairu: 6, Itacaré: 4, 'Fernando de Noronha': 3,
  Canudos: 5, Cachoeira: 5, Mucugê: 7, Piranhas: 6, Penedo: 5, 'São Cristóvão': 6, Parnaíba: 4, Sobral: 4,
  Crato: 4, Garanhuns: 4, Gravatá: 5, Triunfo: 7, 'Paulo Afonso': 4, Juazeiro: 3, 'Vitória da Conquista': 3,
  'Jaboatão dos Guararapes': 3, Caucaia: 4, Camaçari: 3, 'Lauro de Freitas': 4,
};

// apelidos, grafias comuns e lugares conhecidos que ficam dentro do município
const ALIASES: Record<string, string[]> = {
  'São João del Rei': ['São João del-Rei', "São João d'El-Rei", 'São João del Rey'],
  'Embu das Artes': ['Embu'],
  'Jijoca de Jericoacoara': ['Jericoacoara', 'Jeri'],
  Ipojuca: ['Porto de Galinhas'],
  'Tibau do Sul': ['Pipa', 'Praia da Pipa'],
  Cairu: ['Morro de São Paulo'],
  Aracati: ['Canoa Quebrada'],
  'São José dos Campos': ['SJC'],
  'São José do Rio Preto': ['Rio Preto'],
  'São Bernardo do Campo': ['São Bernardo', 'SBC'],
  'Ribeirão Preto': ['Ribeirão'],
  'Governador Valadares': ['Valadares'],
  'Juiz de Fora': ['JF'],
  'Feira de Santana': ['Feira'],
  'Jaboatão dos Guararapes': ['Jaboatão'],
  'Vitória da Conquista': ['Conquista'],
  'Fernando de Noronha': ['Noronha'],
  'Armação dos Búzios': ['Búzios'],
  'Campos dos Goytacazes': ['Campos'],
  "Sant'Ana do Livramento": ['Santana do Livramento', 'Livramento'],
  'Alto Paraíso de Goiás': ['Alto Paraíso'],
  'Goiás': ['Goiás Velho', 'Cidade de Goiás'],
  'Aparecida de Goiânia': ['Aparecida'],
  'Balneário Camboriú': ['BC'],
  'Paraty': ['Parati'],
  'Mata de São João': ['Praia do Forte'],
  'Porto Seguro': ['Trancoso', "Arraial d'Ajuda"],
  'Angra dos Reis': ['Angra'],
};

const NE = ['MA', 'PI', 'CE', 'RN', 'PB', 'PE', 'AL', 'SE', 'BA'];
const NORTE = ['AM', 'PA', 'AC', 'RO', 'RR', 'AP', 'TO'];

/** Listas geradas: nome da constante -> estados incluídos. */
const REGIONS: Record<string, string[]> = {
  MG: ['MG'], SP: ['SP'], RJ: ['RJ'], RS: ['RS'], PR: ['PR'], SC: ['SC'], GO: ['GO'], NE, NORTE,
};

function build(cities: City[]): string[] {
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
    const tier = FAME[c.name] ?? Math.max(tierOfPop(c.pop), tierOfRank(i + 1));
    const entry = [c.name, ...(ALIASES[c.name] ?? [])].join('|');
    (byTier.get(tier) ?? byTier.set(tier, []).get(tier)!).push(entry);
  });
  return [...byTier.keys()].sort((a, b) => a - b).map((t) => `${t}: ${byTier.get(t)!.join('; ')}`);
}

let file = `// Arquivo gerado por scripts/gen-cidades.ts a partir do Censo 2022 do IBGE. Não edite à mão.\n`;
for (const [k, ufs] of Object.entries(REGIONS)) {
  const lines = build(rows.filter((c) => ufs.includes(c.uf)));
  file += `export const CIDADES_${k} = ${JSON.stringify(lines.join('\n'))};\n`;
  console.log(k, lines.map((l) => l.split(';').length).join(' '));
}
writeFileSync(new URL('../src/data/gerado/cidades.ts', import.meta.url), file);

// ---------- municípios banhados pelo mar ----------
// scripts/dados/litoral.csv: municípios cujo território encosta na linha da costa (oceano e baías),
// calculado com as malhas municipais (github.com/tbrugz/geodata-br) e a linha de costa do Natural Earth,
// conferido à mão (saem os que só têm margem de rio ou de lagoa, como Porto Alegre e Pelotas).
// Aqui as capitais valem: Rio de Janeiro, Salvador e Florianópolis são respostas certas.
const BEACH_FAME: Record<string, number> = {
  'Rio de Janeiro': 1, Salvador: 2, Florianópolis: 2, Fortaleza: 3, Recife: 3, Santos: 3, Natal: 4, Maceió: 4,
  'Balneário Camboriú': 4, Guarujá: 4, Ubatuba: 4, 'Armação dos Búzios': 4, 'Cabo Frio': 4, 'Porto Seguro': 4,
  'João Pessoa': 4, Vitória: 5, 'São Luís': 5, Aracaju: 5, Niterói: 5, 'Angra dos Reis': 5, Paraty: 5,
  'Arraial do Cabo': 5, Ilhabela: 5, 'Praia Grande': 5, 'Fernando de Noronha': 5, Ipojuca: 5, Ilhéus: 5,
  'Jijoca de Jericoacoara': 6, Maragogi: 6, Itacaré: 6, Bombinhas: 6, Caraguatatuba: 6, 'São Vicente': 6,
  'São Sebastião': 6, Bertioga: 6, Guarapari: 6, Tramandaí: 6, Torres: 6, 'Capão da Canoa': 6, Olinda: 6,
  Garopaba: 6, Itapema: 6, Paranaguá: 6, 'Vila Velha': 6, 'Mata de São João': 7, Cairu: 7, 'Tibau do Sul': 7,
  Aracati: 7, Imbituba: 7, Laguna: 7, Penha: 7, 'Porto Belo': 7, Matinhos: 7, Guaratuba: 7, Peruíbe: 7,
  Itanhaém: 7, Mongaguá: 7, 'Rio Grande': 7, Barreirinhas: 7, Parnaíba: 7, Tamandaré: 7, Salinópolis: 7,
  Caucaia: 7, Cabedelo: 7, 'Lauro de Freitas': 7, Camaçari: 7, Macaé: 6, Saquarema: 7, Maricá: 7,
  'Rio das Ostras': 7, Mangaratiba: 8, 'Itajaí': 7, 'Cananéia': 8, Iguape: 8, 'Ilha Comprida': 8,
  'Santa Cruz Cabrália': 8, Prado: 8, Caravelas: 8, Canavieiras: 8, Maraú: 8, 'Ilha de Itamaracá': 7,
  'São Miguel dos Milagres': 8, Japaratinga: 8, 'Barra de São Miguel': 8, 'Marechal Deodoro': 8,
  'Baía Formosa': 8, 'São Miguel do Gostoso': 8, Galinhos: 8, Beberibe: 8, Camocim: 8,
  'Cabo de Santo Agostinho': 7, 'Jaboatão dos Guararapes': 7, 'Luís Correia': 8, 'Cajueiro da Praia': 8,
  Soure: 8, Alcântara: 8, 'Xangri-lá': 8, Imbé: 8, Cidreira: 8, 'Santa Vitória do Palmar': 8,
};

const coastal = readFileSync(new URL('./dados/litoral.csv', import.meta.url), 'utf8')
  .trim().split('\n').slice(1).map((l) => l.split(';'));
const popOf = new Map(rows.map((c) => [`${c.uf};${c.name}`, c.pop]));
const coast = coastal.map(([uf, name]) => ({ uf, name, pop: popOf.get(`${uf};${name}`)! })).sort((a, b) => b.pop - a.pop);
const seenCoast = new Set<string>();
const byTier = new Map<number, string[]>();
coast.forEach((c, i) => {
  const k = compact(norm(c.name));
  if (seenCoast.has(k)) return; // mesmo nome em dois estados: fica um só
  seenCoast.add(k);
  const tier = BEACH_FAME[c.name] ?? Math.max(tierOfPop(c.pop), tierOfRank(i + 1), 6);
  (byTier.get(tier) ?? byTier.set(tier, []).get(tier)!).push([c.name, ...(ALIASES[c.name] ?? [])].join('|'));
});
const coastLines = [...byTier.keys()].sort((a, b) => a - b).map((t) => `${t}: ${byTier.get(t)!.join('; ')}`);
writeFileSync(
  new URL('../src/data/gerado/litoral.ts', import.meta.url),
  `// Arquivo gerado por scripts/gen-cidades.ts (municípios banhados pelo mar). Não edite à mão.\nexport const CIDADES_LITORAL = ${JSON.stringify(coastLines.join('\n'))};\n`,
);
console.log('LITORAL', coast.length, coastLines.map((l) => l.split(';').length).join(' '));
