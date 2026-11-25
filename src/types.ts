/** Uma resposta aceita, com seus sinônimos e o nível estimado de raridade (1 = comum, 10 = raríssima). */
export interface Answer {
  name: string;
  aliases: string[];
  tier: number;
}

export interface Question {
  id: string;
  theme: string;
  text: string;
  rule?: string;
  answers: Answer[];
  /** respostas que a regra proíbe, como a capital em "(que não seja a capital)" */
  excluded: string[];
  /** primeiro desafio do dia em que a pergunta pode aparecer */
  since: number;
}

export interface Theme {
  id: string;
  name: string;
}

/** Formato compacto em que as perguntas são escritas nos arquivos de tema. */
export interface QuestionDef {
  id: string;
  /** texto da pergunta */
  t: string;
  /** regra entre parênteses, opcional */
  r?: string;
  /**
   * Respostas, uma linha por nível: "7: Nome|sinônimo|erro comum; Outro nome".
   * Linhas vazias e linhas começando com # são ignoradas.
   */
  a: string;
  /** proibidas pela regra, separadas por ";" (sinônimos com "|") */
  x?: string;
  /**
   * Número do primeiro desafio do dia em que a pergunta entra (padrão: 1).
   * Pergunta nova precisa de um dia futuro, senão muda o sorteio de dias que já foram jogados.
   */
  desde?: number;
}

export interface ThemeDef {
  id: string;
  name: string;
  questions: QuestionDef[];
}

/** O que o jogador respondeu em uma onda. level 0 = errou ou o tempo acabou. */
export interface Pick {
  qid: string;
  text: string | null;
  answer: string | null;
  level: number;
}

export type Mode = 'diario' | 'arquivo' | 'infinito' | 'duelo';
