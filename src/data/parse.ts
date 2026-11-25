import type { Answer, Question, QuestionDef, Theme, ThemeDef } from '../types';

/** Lê o formato compacto "nível: Nome|sinônimo; Outro" em uma lista de respostas. */
export function parseAnswers(src: string, where = ''): Answer[] {
  const out: Answer[] = [];
  for (const raw of src.split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const m = /^(\d+)\s*:\s*(.*)$/.exec(line);
    if (!m) throw new Error(`${where}: linha sem nível: "${line}"`);
    const tier = Number(m[1]);
    if (tier < 1 || tier > 10) throw new Error(`${where}: nível fora de 1..10: "${line}"`);
    for (const entry of m[2].split(';')) {
      const parts = entry.split('|').map((p) => p.trim()).filter(Boolean);
      if (!parts.length) continue;
      out.push({ name: parts[0], aliases: parts.slice(1), tier });
    }
  }
  return out;
}

export function buildBank(defs: ThemeDef[]): { themes: Theme[]; questions: Question[] } {
  const themes: Theme[] = [];
  const questions: Question[] = [];
  for (const t of defs) {
    themes.push({ id: t.id, name: t.name });
    for (const q of t.questions as QuestionDef[]) {
      questions.push({ id: `${t.id}/${q.id}`, theme: t.id, text: q.t, rule: q.r, answers: parseAnswers(q.a, `${t.id}/${q.id}`), excluded: (q.x ?? '').split(/[;|]/).map((s) => s.trim()).filter(Boolean), since: q.desde ?? 1 });
    }
  }
  return { themes, questions };
}
