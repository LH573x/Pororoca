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
escrito na própria lista. Cada lista é esticada para ir de 1 a 10.

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

As cidades vêm do Censo 2022 do IBGE (`npm run gen-cidades -- populacao-2022.csv`), com a raridade pela população
e ajustes para cidades pequenas mas famosas.

## Estrutura

- `src/main.ts`: telas e modos de jogo
- `src/match.ts`, `src/normalize.ts`: conferência das respostas
- `src/rarity.ts`: nível de cada resposta
- `src/round.ts`, `src/random.ts`, `src/day.ts`: sorteio da rodada e número do dia
- `src/scene.ts`, `src/map.ts`, `src/sprites.ts`: pixel art (Capi, onda e mapa do rio)
- `scripts/e2e-smoke.ts`: joga uma rodada inteira no Chrome (opcional)
