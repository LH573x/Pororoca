# Pororoca

Jogo de trivia de respostas raras, em português. A capivara **Capi** surfa a pororoca do Rio Amazonas,
da foz até os Andes: quanto mais rara a resposta, maior a onda e mais longe ela vai.

- 7 perguntas (7 ondas) por rodada, cada uma de um tema diferente, 45 segundos por resposta.
- Cada resposta vale de 100 a 1.000 km. O total (até 7.000 km) define o animal que a Capi encontrou.
- Modos: desafio do dia (igual para todos), arquivo (dias anteriores), infinito e duelo ao vivo (um link, os dois jogam ao mesmo tempo).
- Ranking do dia: no fim de qualquer partida o jogador pode escrever o nome e entrar no ranking daquele dia.

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

## Duelo ao vivo e ranking do dia

Os dois usam o Firebase Realtime Database (plano gratuito), sem biblioteca: só REST e EventSource (`src/online.ts`).

1. Em console.firebase.google.com, crie um projeto e, nele, um **Realtime Database**.
2. Na aba **Regras** do banco, cole o conteúdo de `database.rules.json` e publique.
3. Coloque o endereço do banco em `ONLINE_URL` (`src/config.ts`).

Com `ONLINE_URL` vazio, o duelo volta a ser por link (um joga, depois o outro) e o botão do ranking some.

- Duelo (`src/live.ts`): quem cria a sala sorteia as 7 perguntas; quando o amigo entra pelo link, os dois veem uma contagem
  e começam juntos. Cada pergunta começa na mesma hora (do servidor) para os dois; a próxima só vem quando os dois
  responderam, ou 4 s depois do fim do tempo se um sumiu.
- Ranking (`src/ranking.ts`): `ranking/<número do dia>`, com nome, km, modo e hora, e uma cópia em `historia/` (com o dia)
  para o ranking de todos os tempos. Cada partida entra uma vez. O botão do troféu mostra o 1º colocado do dia.

Para testar sem conta: `npm run servidor-teste` (imitação do Firebase na porta 9000) e
`VITE_ONLINE_URL=http://localhost:9000 npm run dev`. `scripts/e2e-duelo.ts` joga um duelo com duas janelas.

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
- filmes brasileiros: busca avançada do IMDb (`src/data/gerado/filmes.ts`), todos os longas com país Brasil,
  língua portuguesa e pelo menos 100 avaliações; nível pelo número de avaliações.
- canais do YouTube: os 100 maiores do Brasil na Social Blade (todos com 14 milhões de inscritos ou mais).

### Mínimo adotado

Quando a lista não é fechada (filmes, canais, raças...), a pergunta usa um mínimo objetivo: o menor número em
que a fonte lista **todos** acima dele, e entram todos. O mínimo de cada pergunta fica em `src/data/criterios.ts`
(`npm run check-data` falha se faltar). Listas que ainda não têm número de corte começam com `SEM MÉTRICA`.

### Contestações

Quando o jogo recusa uma resposta, aparece o botão **contestar**. No fim da rodada, **Enviar contestações** abre
uma issue no GitHub já preenchida com a pergunta e o que foi digitado. Para aprovar: conferir a resposta na fonte
da pergunta (ou numa fonte do mesmo tipo), incluir na lista com o nível certo, rodar `npm run check-data` e fechar
a issue. Se a resposta não passa do mínimo da pergunta, responder com o mínimo e fechar.

Pergunta nova entra com `desde: <dia>` para não mudar as rodadas que já foram jogadas.

`npm run check-data` confere nomes repetidos e listas curtas. `npm run export-review -- arquivo.md` gera um
arquivo com todas as perguntas, respostas e pontos, para revisão.

## Estrutura

- `src/main.ts`: telas e modos de jogo
- `src/match.ts`, `src/normalize.ts`: conferência das respostas
- `src/rarity.ts`: nível de cada resposta
- `src/round.ts`, `src/random.ts`, `src/day.ts`: sorteio da rodada e número do dia
- `src/scene.ts`, `src/map.ts`, `src/sprites.ts`: pixel art (Capi, onda e mapa do rio)
- `src/live.ts`, `src/online.ts`, `src/ranking.ts`: duelo ao vivo e ranking do dia
- `scripts/e2e-smoke.ts`: joga uma rodada inteira no Chrome (opcional)
