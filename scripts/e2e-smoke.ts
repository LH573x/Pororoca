/**
 * Teste de ponta a ponta (opcional): joga uma rodada inteira no navegador.
 * Uso: npx vite preview --port 4173 &  depois  CHROME=/caminho/do/chrome npx tsx scripts/e2e-smoke.ts [pasta-de-prints]
 * Precisa do pacote playwright-core instalado.
 */
import { chromium } from 'playwright-core';
import { BANK } from '../src/data';
const out = process.argv[2] ?? '.';
const browser = await chromium.launch({ executablePath: process.env.CHROME ?? '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 390, height: 780 }, deviceScaleFactor: 2 });
const errors: string[] = [];
page.on('pageerror', (e: Error) => errors.push(e.message));
page.on('console', (m: any) => m.type() === 'error' && errors.push(m.text()));
await page.goto('http://localhost:4173/');
await page.waitForTimeout(800);
await page.screenshot({ path: `${out}/1-inicio.png` });
await page.click('#playBtn');
await page.waitForTimeout(400);
const byText = new Map(BANK.questions.map((q) => [q.text, q]));
for (let i = 0; i < 7; i++) {
  const text = (await page.textContent('#qtext'))!.replace(/\(.*\)$/, '').trim();
  const q = byText.get(text);
  if (!q) throw new Error('pergunta desconhecida: ' + text);
  if (i === 0) {
    await page.fill('#inp', 'asdkjhasd');
    await page.press('#inp', 'Enter');
    await page.waitForTimeout(300);
    const hint = await page.textContent('#hint');
    if (!hint?.includes('não vale')) throw new Error('texto ao acaso não foi recusado: ' + hint);
    await page.screenshot({ path: `${out}/2-recusada.png` });
  }
  // na 2ª pergunta testa o "você quis dizer"
  const long = q.answers.filter((a) => a.name.length >= 6).sort((a, b) => b.tier - a.tier);
  const ans = long.length ? long[i % Math.min(3, long.length)] : q.answers[0];
  if (i === 1) {
    const typo = ans.name.slice(0, -2) + ans.name.slice(-1) + ans.name.slice(-2, -1);
    await page.fill('#inp', typo);
    await page.press('#inp', 'Enter');
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${out}/3-sugestao.png` });
    if (await page.$('#yes')) await page.click('#yes');
    else {
      await page.fill('#inp', ans.name);
      await page.press('#inp', 'Enter');
    }
  } else {
    await page.fill('#inp', ans.name);
    await page.press('#inp', 'Enter');
  }
  await page.waitForTimeout(1500);
  if (i === 0) await page.screenshot({ path: `${out}/4-onda.png` });
  await page.waitForSelector('#form:not(.hide), #r.on', { timeout: 8000 });
}
await page.waitForTimeout(2200);
await page.screenshot({ path: `${out}/5-resultado.png` });
await page.click('#ansBtn');
await page.waitForTimeout(300);
await page.screenshot({ path: `${out}/6-respostas.png` });
await page.keyboard.press('Escape');
await page.click('#homeBtn');
await page.waitForTimeout(300);
const label = await page.textContent('#playBtn');
await page.click('#statsBtn');
await page.waitForTimeout(300);
await page.screenshot({ path: `${out}/7-estatisticas.png` });
await page.keyboard.press('Escape');
await page.click('#archBtn');
await page.waitForTimeout(300);
await page.screenshot({ path: `${out}/8-arquivo.png` });
await page.keyboard.press('Escape');
// duelo pelo link
await page.goto('http://localhost:4173/#duelo=5x32071.' + BANK.questions.slice(0, 7).map((q) => q.id.replace('/', ':')).join(','));
await page.waitForTimeout(500);
await page.screenshot({ path: `${out}/9-duelo.png` });
console.log('botão depois de jogar:', label);
console.log(errors.length ? 'ERROS: ' + errors.join(' | ') : 'sem erros no console');
await browser.close();
if (errors.length) process.exit(1);
