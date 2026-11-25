# Pororoca

Jogo de trivia de respostas raras, em português. A capivara **Capi** surfa a pororoca do Rio Amazonas,
da foz até os Andes: quanto mais rara a resposta, maior a onda e mais longe ela vai.

- 7 perguntas (7 ondas) por rodada, cada uma de um tema diferente, 45 segundos por resposta.
- Cada resposta vale de 100 a 1.000 km. O total (até 7.000 km) define o animal que a Capi encontrou.
- Modos: desafio do dia (igual para todos), arquivo (dias anteriores), infinito e duelo (link para um amigo jogar as mesmas perguntas).

## Rodar

```bash
npm install
npm run dev        # site em http://localhost:5173
npm test           # testes
npm run check-data # confere as listas de respostas
npm run build      # gera a pasta dist/
```

O site é estático. A cada push na `main`, o GitHub Actions testa e publica no GitHub Pages
(ative em *Settings → Pages → Source: GitHub Actions*).

## Como as respostas são conferidas

1. O texto é padronizado: sem acento, maiúsculas, pontuação, artigos e plural.
2. Só vale o que está na lista da pergunta (com sinônimos). Texto digitado ao acaso é recusado.
3. Erro pequeno de digitação mostra "Você quis dizer ...?", e o jogador confirma.
4. Respostas proibidas pela regra (como a capital em "que não seja a capital") são recusadas.
5. Respostas recusadas ficam guardadas no navegador (`pororoca:v1:recusadas`) para revisar as listas.

## Raridade

No começo ainda não há jogadores suficientes, então cada resposta tem um **nível estimado** (1 = comum, 10 = raríssima),
escrito na própria lista. Cada nível vale 100 km. A resposta mais rara de cada lista sempre vale 1000 km:
uma lista que para antes (os países da América vão até o nível 6) é esticada com uma curva que puxa o topo
mais do que a base, então as respostas comuns continuam valendo pouco (`stretch` em `src/data/parse.ts`).

Como a estimativa é decidida:

- nível 1 e 2: o que quase todo mundo escreve primeiro (Marte, Pelé, Copacabana);
- 3 a 5: conhecido, mas já exige lembrar (Ganimedes, Zico, Urca);
- 6 a 8: só quem conhece bem o assunto (Encélado, Zito, Vaz Lobo);
- 9 e 10: o fundo da lista completa, que quase ninguém vai lembrar.

Nas cidades o nível é o maior entre o da população (Censo 2022) e o da posição no ranking do estado,
com exceções para cidades pequenas e famosas (Ouro Preto, Paraty, Jericoacoara).

A estrutura para usar a frequência real já está pronta em `src/rarity.ts`, seguindo o documento de design:

- menos de 100 respostas na pergunta: só a estimativa;
- de 100 a 249: mistura a estimativa com a % real;
- 250 ou mais: só a % real.

Para ligar, basta um servidor que receba as respostas (`ANSWER_LOG_URL`) e devolva as contagens (`STATS_URL`), em `src/config.ts`.

## Perguntas

Ficam em `src/data/temas/`, uma linha por nível:

```ts
{
  id: 'samba',
  t: 'Um instrumento usado no samba',
  r: 'regra opcional',          // aparece entre parênteses
  x: 'Proibida|sinônimo',       // opcional: respostas que a regra proíbe
  a: `
1: Pandeiro; Cavaquinho|Cavaco
2: Surdo; Tamborim
...
10: Repique de mão
`,
}
```

Só entram perguntas com um universo fechado de respostas, que dá para conferir numa fonte, e cada lista tenta
ter todas as respostas possíveis. Fontes usadas:

- cidades: Censo 2022 do IBGE (`scripts/dados/populacao-2022.csv`, gerado com `npm run gen-cidades`);
- cidades do litoral: calculadas pelos limites municipais do IBGE e a linha da costa, tirando as que só têm
  rio ou lagoa (`scripts/dados/litoral.csv`);
- países e capitais: lista da ONU; elementos: IUPAC; constelações: União Astronômica Internacional;
- futebol: listas de convocados de todas as Copas e participações no Brasileirão, da Wikipédia;
- Fórmula 1, novelas, raças de cães, bairros do Rio, presidentes e companhias aéreas: listas da Wikipédia;
- Pokémon: as 1025 espécies oficiais.
- países sem litoral e de língua inglesa: pacote world-countries; OTAN, estados dos EUA e do México, sedes olímpicas,
  presidentes dos EUA, reis de Portugal e da Inglaterra, imperadores romanos, Oscar, MCU, Premier League, Libertadores,
  Champions, Bola de Ouro, nº 1 da ATP/WTA, universidades federais (MEC): listas oficiais de cada entidade.

Pergunta nova entra com `desde: <dia>` para não mudar as rodadas que já foram jogadas.

`npm run check-data` confere nomes repetidos e listas curtas. `npm run export-review -- arquivo.md` gera um
arquivo com todas as perguntas, respostas e pontos, para revisão.

## Estrutura

- `src/main.ts`: telas e modos de jogo
- `src/match.ts`, `src/normalize.ts`: conferência das respostas
- `src/rarity.ts`: nível de cada resposta
- `src/round.ts`, `src/random.ts`, `src/day.ts`: sorteio da rodada e número do dia
- `src/scene.ts`, `src/map.ts`, `src/sprites.ts`: pixel art (Capi, onda e mapa do rio)
- `scripts/e2e-smoke.ts`: joga uma rodada inteira no Chrome (opcional)
