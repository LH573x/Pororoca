import type { QuestionDef, ThemeDef } from '../../types';
import { FILMES_BR } from '../gerado/filmes';

/**
 * Perguntas com um mínimo objetivo (a partir do dia 3): entra tudo o que passa do mínimo, para o
 * jogo conhecer até as respostas mais raras. O mínimo é o menor número em que a fonte lista todos.
 */
const DESDE = 3;
const novas = (qs: QuestionDef[]) => qs.map((q) => ({ ...q, desde: DESDE }));

// "Confissões" é o jeito como muita gente lembra o título do filme de 2010 com Selton Mello
const filmesBr = FILMES_BR.replace('Reflexões de um Liquidificador', 'Reflexões de um Liquidificador|Confissões de um Liquidificador');

export const cinemaMinimos: QuestionDef[] = novas([
  {
    // busca avançada do IMDb (novembro de 2026): longas com país Brasil e língua principal português,
    // com pelo menos 100 avaliações (1.668 filmes). Nível pelo número de avaliações no IMDb.
    id: 'filmebr',
    t: 'Um filme brasileiro',
    r: 'longa com pelo menos 100 avaliações no IMDb',
    a: filmesBr,
  },
]);

export const internet: ThemeDef = {
  id: 'internet',
  name: 'Internet',
  questions: novas([
    {
      // os 100 maiores canais do Brasil no YouTube pela Social Blade (novembro de 2026): todos têm
      // pelo menos 14 milhões de inscritos. Nível pela fama do canal fora do YouTube, não só pelos inscritos.
      id: 'youtube',
      t: 'Um canal brasileiro do YouTube',
      r: 'com pelo menos 14 milhões de inscritos',
      a: `
1: Felipe Neto; Whindersson Nunes|whinderssonnunes|Whindersson; Luccas Neto|LUCCAS NETO
2: Rezende Evil|rezendeevil|Rezende; Porta dos Fundos; Galinha Pintadinha; Turma da Mônica; KondZilla|Canal KondZilla; Manual do Mundo; Enaldinho; CazéTV|Cazé TV; Marília Mendonça; Gusttavo Lima|Gusttavo Lima Oficial
3: AuthenticGames|Authentic Games; Você Sabia?; Natan por Aí; Maria Clara & JP|Maria Clara e JP; Gato Galáctico|Gato Galactico; Nobru|NOBRU; T3ddy; Jorge & Mateus|Jorge e Mateus|Jorge & Mateus Oficial; Henrique e Juliano; Wesley Safadão; Zé Neto e Cristiano; Netflix Brasil; SBT; Fatos Desconhecidos; Canal Nostalgia|Nostalgia; Mundo Bita; Luluca|Crescendo com Luluca; The Noite com Danilo Gentili|The Noite; Ei Nerd; Bispo Bruno Leonardo
4: Lucan Pevidor; GR6 Explode|GR6|GR6 EXPLODE; ge tv|GE TV; Spider Slack; Rafa & Luiz|Rafa e Luiz; Dudu e Carol|DUDU e CAROL; Emilly Vick; Valentina Pontes|Valentina Pontes ofc; Gabriel Miranda|Gabrielmiranda_ofc; Masha e o Urso; Peppa Pig|Peppa Pig em Português Brasil - Canal Oficial; Robin Hood Gamer; TazerCraft; Lucas Guedes; Camila Loures; Mayca Brasil|Mayca; PlayHard; Hungria; Bolofofos; MC Divertida; FitDance; Giuliana Mafra; Planeta das Gêmeas; Monica Toy; RedeTV|Rede TV; Canal Canalha; MK Music|MK MUSIC; Athos; Brancoala; Jooj Natu|Jooj
5: Renato Garcia; Painzeiro; Anninha; Cadres; Matheus Kriwat; José Totoy|José Totoy em Português (BR); Neagle; Juliana Baltar; Spiderbritto; Ju Araújo; Dan-Sa|Daniel Saboya|Dan-Sa / Daniel Saboya; Marulho; Katlenof; Incrível|INCRÍVEL; Leozinn 077|Leozinn; O Que Não Dizer|O Que Não Dizer Oficial; Walace Freerunner; Little Angel|Little Angel - Músicas Infantis em Português; LuCr4zy|Lucrazy; Tales Bento; Maloucos|MALOUCOS; O Reino Infantil; Gustavo Paródias; Pastor Antônio Júnior; Canal IN; Canal Clash War|Clash War; Net Jogos Online; João Caetano; Legenda Funk|LEGENDA FUNK; 7 Minutoz; Ideias Incríveis|IDEIAS INCRÍVEIS; AM3NlC|Amenic; Biel GEN TV|Biel Gen; Invento na Hora; LipaoGamer|Lipão Gamer; Mateus Erd; Mussa|MUSSA
`,
    },
  ]),
};
