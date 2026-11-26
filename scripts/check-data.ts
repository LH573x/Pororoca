/**
 * Confere o banco de perguntas: níveis válidos, nomes repetidos dentro de uma pergunta,
 * listas curtas demais e distribuição dos níveis.
 * Uso: npm run check-data
 */
import { BANK } from '../src/data';
import { CRITERIOS } from '../src/data/criterios';
import { compact, norm } from '../src/normalize';

let errors = 0;
const MIN = 30;
for (const q of BANK.questions) {
  const seen = new Map<string, string>();
  for (const a of q.answers) {
    for (const raw of [a.name, ...a.aliases]) {
      const k = compact(norm(raw));
      const prev = seen.get(k);
      if (prev && prev !== a.name) {
        console.log(`REPETIDO ${q.id}: "${raw}" (${a.name}) colide com "${prev}"`);
        errors++;
      } else if (prev === a.name && raw === a.name) {
        console.log(`DUPLICADO ${q.id}: "${a.name}"`);
        errors++;
      }
      seen.set(k, a.name);
    }
  }
  if (!CRITERIOS[q.id]) {
    console.log(`SEM CRITÉRIO ${q.id}: diga o mínimo adotado em src/data/criterios.ts`);
    errors++;
  }
  if (q.answers.length < MIN) {
    console.log(`CURTA ${q.id}: só ${q.answers.length} respostas`);
    errors++;
  }
  const dist = Array.from({ length: 10 }, (_, i) => q.answers.filter((a) => a.tier === i + 1).length);
  console.log(`${q.id.padEnd(24)} ${String(q.answers.length).padStart(5)}  ${dist.join(' ')}`);
}
const themes = new Set(BANK.questions.map((q) => q.theme));
console.log(`\n${BANK.questions.length} perguntas em ${themes.size} de ${BANK.themes.length} temas`);
if (errors) {
  console.log(`${errors} problema(s)`);
  process.exit(1);
}
