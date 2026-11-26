/**
 * Teste de ponta a ponta do duelo ao vivo e do ranking, com dois jogadores em duas janelas.
 * Uso: npm run servidor-teste &   VITE_ONLINE_URL=http://localhost:9000 npx vite --port 4174 &
 *      npx tsx scripts/e2e-duelo.ts [pasta-de-prints]
 */
import { chromium, type Page } from 'playwright-core';
import { BANK } from '../src/data';
const out = process.argv[2] ?? '.';
const SITE = process.env.SITE ?? 'http://localhost:4174/';
const browser = await chromium.launch({ executablePath: process.env.CHROME ?? '/opt/pw-browsers/chromium', args: ['--no-sandbox'] });
const errors: string[] = [];
const open = async () => {
  const ctx = await browser.newContext({ viewport: { width: 360, height: 740 }, deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  p.on('pageerror', (e: Error) => errors.push(e.message));
  p.on('console', (m: any) => m.type() === 'error' && errors.push(m.text()));
  return p;
};
const byText = new Map(BANK.questions.map((q) => [q.text + (q.rule ? `(${q.rule})` : ''), q]));
async function answer(p: Page, i: number, pickRare: boolean) {
  await p.waitForSelector('#form:not(.hide)', { timeout: 20000 });
  const text = (await p.textContent('#qtext'))!.trim();
  const q = byText.get(text);
  if (!q) throw new Error('pergunta desconhecida: ' + text);
  const sorted = q.answers.slice().sort((a, b) => a.tier - b.tier);
  const a = pickRare ? sorted[sorted.length - 1 - (i % 2)] : sorted[0];
  await p.fill('#inp', a.name);
  await p.press('#inp', 'Enter');
  if (await p.$('#yes')) await p.click('#yes');
  return text;
}

const host = await open();
const guest = await open();
await host.goto(SITE);
await host.click('#duelBtn');
await host.click('#duelGo');
await host.waitForSelector('#duelLink:not([hidden])');
const link = await host.inputValue('#duelUrl');
await host.screenshot({ path: `${out}/d1-sala.png` });
await guest.goto(link);
await guest.waitForSelector('#duel.on');
await guest.screenshot({ path: `${out}/d2-convite.png` });
await guest.click('#duelGo');
await host.waitForTimeout(1200);
await host.screenshot({ path: `${out}/d3-contagem.png` });
await Promise.all([host.waitForSelector('#q.on', { timeout: 8000 }), guest.waitForSelector('#q.on', { timeout: 8000 })]);
for (let i = 0; i < 7; i++) {
  const t1 = await answer(host, i, true);
  if (i === 1) {
    await host.waitForTimeout(3500);
    const h = await host.textContent('#hint');
    if (!h?.includes('Esperando seu amigo')) throw new Error('host não está esperando: ' + h);
    await host.screenshot({ path: `${out}/d4-esperando.png` });
  }
  const t2 = await answer(guest, i, false);
  if (t1 !== t2) throw new Error(`perguntas diferentes: ${t1} / ${t2}`);
  if (i === 2) await guest.screenshot({ path: `${out}/d5-placar.png` });
}
await Promise.all([host.waitForSelector('#r.on', { timeout: 15000 }), guest.waitForSelector('#r.on', { timeout: 15000 })]);
await host.waitForTimeout(2500);
const vh = await host.textContent('#vs');
const vg = await guest.textContent('#vs');
console.log('anfitrião:', vh, '| convidado:', vg);
if (!vh?.includes('Você venceu') || !vg?.includes('Seu amigo venceu')) throw new Error('resultado errado');
await host.screenshot({ path: `${out}/d6-resultado.png` });
for (const [p, nome] of [[host, 'Luiz'], [guest, 'Amigo do Luiz']] as const) {
  await p.fill('#rankName', nome);
  await p.click('#rankGo');
  await p.waitForSelector('#rankMsg:not([hidden])');
}
console.log('posição:', await host.textContent('#rankMsg'), '|', await guest.textContent('#rankMsg'));
await guest.screenshot({ path: `${out}/d7-no-ranking.png` });
await guest.click('[data-rank]');
await guest.waitForSelector('#rankList li .nm');
const names = await guest.$$eval('#rankList .nm', (els) => els.map((e) => e.textContent));
console.log('ranking:', names);
if (names[0] !== 'Luiz' || names[1] !== 'Amigo do Luiz') throw new Error('ranking errado');
await guest.screenshot({ path: `${out}/d8-ranking.png` });
// o link de novo não deixa entrar numa partida que já começou
const late = await open();
await late.goto(link);
await late.waitForTimeout(1200);
console.log('terceiro:', await late.textContent('#toast'));
console.log(errors.length ? 'ERROS: ' + errors.join(' | ') : 'sem erros no console');
await browser.close();
if (errors.length) process.exit(1);
