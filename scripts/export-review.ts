/**
 * Gera um arquivo Markdown com todas as perguntas, respostas e pontuações (km),
 * para revisar as listas sem abrir o código.
 * Uso: npm run export-review -- caminho/saida.md
 */
import { writeFileSync } from 'node:fs';
import { BANK } from '../src/data';
import { CRITERIOS, SEM_METRICA } from '../src/data/criterios';

const out = process.argv[2] ?? 'revisao-perguntas.md';
const lines: string[] = [];
const total = BANK.questions.reduce((s, q) => s + q.answers.length, 0);
lines.push('# Pororoca: perguntas, respostas e pontuações', '');
lines.push(`${BANK.questions.length} perguntas em ${BANK.themes.length} temas, ${total} respostas aceitas.`, '');
lines.push('Cada resposta vale o nível × 100 km. Sinônimos aceitos aparecem entre parênteses.', '');
const all = BANK.questions.flatMap((q) => q.answers.map((a) => a.tier));
const dist = Array.from({ length: 10 }, (_, i) => all.filter((t) => t === i + 1).length);
lines.push('| km | respostas | % |', '|---:|---:|---:|');
dist.forEach((n, i) => lines.push(`| ${(i + 1) * 100} | ${n} | ${((n / all.length) * 100).toFixed(1)}% |`));
lines.push('');
const semMetrica = BANK.questions.filter((q) => CRITERIOS[q.id]?.startsWith(SEM_METRICA));
lines.push('## Mínimo adotado', '');
lines.push('Cada pergunta diz o que precisa ter para entrar na lista (o menor número em que a fonte lista todos). "Lista fechada" quer dizer que a fonte já tem o universo inteiro.', '');
lines.push(`Ainda sem métrica (${semMetrica.length}, para resolver depois): ${semMetrica.map((q) => q.text).join('; ')}.`, '');
for (const t of BANK.themes) {
  lines.push(`## ${t.name}`, '');
  for (const q of BANK.questions.filter((x) => x.theme === t.id)) {
    lines.push(`### ${q.text}${q.rule ? ` (${q.rule})` : ''}`, '');
    lines.push(`**Mínimo:** ${CRITERIOS[q.id] ?? '(falta)'}`, '');
    lines.push(`\`${q.id}\` · ${q.answers.length} respostas${q.excluded.length ? ` · recusadas pela regra: ${q.excluded.join(', ')}` : ''}`, '');
    for (let lv = 1; lv <= 10; lv++) {
      const as = q.answers.filter((a) => a.tier === lv);
      if (!as.length) continue;
      const txt = as.map((a) => (a.aliases.length ? `${a.name} (${a.aliases.join(', ')})` : a.name)).join('; ');
      lines.push(`- **${lv * 100} km** (${as.length}): ${txt}`);
    }
    lines.push('');
  }
}
writeFileSync(out, lines.join('\n'));
console.log(`${out}: ${BANK.questions.length} perguntas, ${total} respostas`);
