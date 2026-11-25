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

/**
 * A resposta mais rara de cada lista vale sempre 1000 km (nível 10). Listas que param antes
 * (os países da América, por exemplo, vão só até o nível 6) são esticadas com uma curva que
 * empurra mais o topo do que a base: o que é comum continua valendo pouco.
 */
export const STRETCH_CURVE = 1.2;
export function stretch(answers: Answer[]): Answer[] {
  const max = Math.max(...answers.map((a) => a.tier));
  if (max >= 10 || max <= 1) return answers;
  return answers.map((a) => ({
    ...a,
    tier: 1 + Math.round(9 * Math.pow((a.tier - 1) / (max - 1), STRETCH_CURVE)),
  }));
}

export function buildBank(defs: ThemeDef[]): { themes: Theme[]; questions: Question[] } {
  const themes: Theme[] = [];
  const questions: Question[] = [];
  for (const t of defs) {
    themes.push({ id: t.id, name: t.name });
    for (const q of t.questions as QuestionDef[]) {
      questions.push({ id: `${t.id}/${q.id}`, theme: t.id, text: q.t, rule: q.r, answers: stretch(parseAnswers(q.a, `${t.id}/${q.id}`)), excluded: (q.x ?? '').split(/[;|]/).map((s) => s.trim()).filter(Boolean), since: q.desde ?? 1 });
    }
  }
  return { themes, questions };
}
