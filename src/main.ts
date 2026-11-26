import '@fontsource/pixelify-sans/400.css';
import '@fontsource/pixelify-sans/500.css';
import '@fontsource/pixelify-sans/600.css';
import '@fontsource/pixelify-sans/700.css';
import './style.css';

import { animalFor, decodeLevels, encodeLevels, waveBars } from './animals';
import { ANSWER_LOG_URL, CONTEST_URL, MAX_KM, SECS, STATS_URL, WAVES } from './config';
import { BANK } from './data';
import { dayNumber, formatDay, isoOfDay, todayISO } from './day';
import { drawMap, labelMap } from './map';
import { matchAnswer } from './match';
import { levelFor, noStats, type QuestionStats, type StatsSource } from './rarity';
import { randomSeed } from './random';
import { pickRound } from './round';
import { drawScene, fit, newScene, stepWave, type Wave } from './scene';
import { COL, ICONS, MINI, pixelEmoji, sprite } from './sprites';
import { allDays, contestRefused, loadDay, loadSeen, logRefused, markContestsSent, pendingContests, saveDay, saveSeen, totalKm, type SavedRound } from './storage';
import { streaks } from './streaks';
import type { Answer, Mode, Pick, Question } from './types';

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;
const fmt = (n: number) => n.toLocaleString('pt-BR');
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const themeName = new Map(BANK.themes.map((t) => [t.id, t.name]));
const questionById = new Map(BANK.questions.map((q) => [q.id, q]));

// ---------- raridade real (desligada até existir um servidor) ----------
let stats: StatsSource = noStats;
if (STATS_URL) {
  fetch(STATS_URL)
    .then((r) => (r.ok ? r.json() : null))
    .then((data: Record<string, QuestionStats> | null) => {
      if (data) stats = { get: (qid) => data[qid] };
    })
    .catch(() => {});
}
function logAnswer(payload: Record<string, unknown>) {
  if (!ANSWER_LOG_URL) return;
  try {
    navigator.sendBeacon(ANSWER_LOG_URL, JSON.stringify(payload));
  } catch {
    /* sem rede: tudo bem */
  }
}

// ---------- estado da rodada ----------
interface Round {
  mode: Mode;
  seed: string;
  day: number;
  questions: Question[];
  picks: Pick[];
  /** duelo: níveis do amigo que desafiou */
  rival?: number[];
}
let round: Round | null = null;
let idx = 0;
let deadline = 0;
let timerOn = false;
let busy = false;
let wave: Wave | null = null;
let suggestion: Answer | null = null;

const scenes = { home: newScene(), q: newScene() };

function show(id: 'home' | 'q' | 'r') {
  document.querySelectorAll<HTMLElement>('.scr').forEach((s) => s.classList.toggle('on', s.id === id));
  if (id === 'home') refreshHome();
}

function toast(m: string) {
  const t = $('toast');
  t.textContent = m;
  t.classList.add('on');
  clearTimeout((toast as any).h);
  (toast as any).h = setTimeout(() => t.classList.remove('on'), 1800);
}

const today = () => dayNumber(todayISO());

// ---------- início ----------
function refreshHome() {
  const n = today();
  const saved = loadDay(n);
  const btn = $('playBtn');
  if (saved?.done) btn.textContent = `Hoje: ${fmt(totalKm(saved.picks))} km`;
  else if (saved?.picks.length || saved?.pendingAt) btn.textContent = 'Continuar';
  else btn.textContent = 'Jogar';
}

// ---------- começar rodadas ----------
/** Rodada do dia N: a que ficou guardada, ou o sorteio só entre perguntas que já existiam nesse dia. */
function dayQuestions(n: number, saved: SavedRound | null): Question[] {
  const kept = saved?.qids?.map((id) => questionById.get(id));
  if (kept && kept.length === WAVES && kept.every(Boolean)) return kept as Question[];
  return pickRound(BANK.themes, BANK.questions.filter((q) => q.since <= n), `dia-${n}`);
}

function startDay(n: number) {
  const saved = loadDay(n);
  const questions = dayQuestions(n, saved);
  const mode: Mode = n === today() ? 'diario' : 'arquivo';
  round = { mode, seed: `dia-${n}`, day: n, questions, picks: saved?.picks.slice() ?? [] };
  if (saved?.done) return result(false);
  begin(round.picks.length);
}

function startInfinite() {
  const seen = loadSeen();
  const seed = 'inf-' + randomSeed();
  const questions = pickRound(BANK.themes, BANK.questions, seed, seen);
  questions.forEach((q) => seen.add(q.id));
  // quando todas já foram vistas, começa a lista de novo (guardando as desta rodada)
  if (seen.size >= BANK.questions.length) {
    seen.clear();
    questions.forEach((q) => seen.add(q.id));
  }
  saveSeen(seen);
  round = { mode: 'infinito', seed, day: 0, questions, picks: [] };
  begin(0);
}

function startDuel(seed: string, rival?: number[], qids?: string[]) {
  const fixed = qids?.map((id) => questionById.get(id));
  const questions = fixed?.every(Boolean) ? (fixed as Question[]) : pickRound(BANK.themes, BANK.questions, seed);
  round = { mode: 'duelo', seed, day: 0, questions, picks: [], rival };
  begin(0);
}

function begin(from: number) {
  idx = from;
  wave = null;
  scenes.q = newScene();
  $('gain').classList.remove('on');
  show('q');
  ask();
}

// ---------- pergunta ----------
function ask() {
  const r = round!;
  const q = r.questions[idx];
  $('dots').innerHTML = r.questions.map((_, i) => `<i class="${i < idx ? 'done' : i === idx ? 'now' : ''}"></i>`).join('');
  $('qtheme').textContent = themeName.get(q.theme) ?? '';
  $('qtext').innerHTML = esc(q.text) + (q.rule ? `<small>(${esc(q.rule)})</small>` : '');
  const inp = $<HTMLInputElement>('inp');
  inp.value = '';
  busy = false;
  setHint('');
  $('qa').classList.remove('hide');
  $('form').classList.remove('hide');
  $('bar').style.transform = 'scaleX(1)';
  $('timer').classList.remove('low');
  // no diário o relógio continua contando mesmo se a pessoa sair e voltar
  let left = SECS * 1000;
  if (r.mode === 'diario' || r.mode === 'arquivo') {
    const saved = loadDay(r.day) ?? { day: r.day, picks: r.picks, done: false };
    if (saved.pendingIdx === idx && saved.pendingAt) left = Math.max(0, saved.pendingAt + SECS * 1000 - Date.now());
    else saveDay({ ...saved, picks: r.picks, qids: r.questions.map((x) => x.id), pendingIdx: idx, pendingAt: Date.now() });
  }
  deadline = Date.now() + left;
  timerOn = true;
  setTimeout(() => inp.focus(), 60);
}

function tickTimer() {
  if (!timerOn) return;
  const left = (deadline - Date.now()) / (SECS * 1000);
  $('bar').style.transform = `scaleX(${Math.max(0, left)})`;
  $('timer').classList.toggle('low', left < 10 / SECS);
  if (left <= 0) finish(null, null);
}

function setHint(html: string) {
  $('hint').innerHTML = html;
}

function shake() {
  const f = $('form');
  f.classList.remove('shake');
  void f.offsetWidth;
  f.classList.add('shake');
}

function submit(text: string) {
  if (busy || !round) return;
  const q = round.questions[idx];
  const m = matchAnswer(q, text);
  if (m.kind === 'exact') return finish(text, m.answer);
  if (m.kind === 'suggest') {
    suggestion = m.answer;
    setHint(`Você quis dizer <button type="button" id="yes" class="px">${esc(m.answer.name)}</button><button type="button" id="no" class="no">não</button>`);
    $('yes').addEventListener('click', () => suggestion && finish(text, suggestion));
    $('no').addEventListener('click', () => {
      suggestion = null;
      setHint('');
      $('inp').focus();
    });
    return;
  }
  shake();
  if (m.reason !== 'desconhecida') {
    setHint(`<span class="msg">${m.reason === 'curta' ? 'Escreva uma resposta' : 'Essa a regra não deixa. Tente outra!'}</span>`);
    return;
  }
  const typed = text.slice(0, 60);
  logRefused({ qid: q.id, text: typed, at: new Date().toISOString() });
  logAnswer({ qid: q.id, text: typed, answer: null });
  // a lista pode não ter uma resposta certa e rara: o jogador contesta e alguém confere depois
  setHint(`<span class="msg">Essa não vale.</span><button type="button" id="contest" class="no">contestar</button>`);
  $('contest').addEventListener('click', () => {
    contestRefused(q.id, typed);
    setHint('<span class="msg">Contestação guardada. Tente outra!</span>');
    $('inp').focus();
  });
}

/** Fecha a pergunta: answer null = tempo esgotado (0 km). */
function finish(text: string | null, answer: Answer | null) {
  if (busy || !round) return;
  const r = round;
  const q = r.questions[idx];
  busy = true;
  timerOn = false;
  suggestion = null;
  setHint('');
  $<HTMLInputElement>('inp').blur();
  const level = answer ? levelFor(q, answer, stats) : 0;
  r.picks.push({ qid: q.id, text, answer: answer?.name ?? null, level });
  if (answer) logAnswer({ qid: q.id, text: text?.slice(0, 60), answer: answer.name, level, mode: r.mode, day: r.day });
  if (r.mode === 'diario' || r.mode === 'arquivo') {
    const prev = loadDay(r.day);
    saveDay({
      day: r.day,
      picks: r.picks,
      qids: r.questions.map((x) => x.id),
      done: r.picks.length >= WAVES,
      ...((r.mode === 'arquivo' || prev?.late) && { late: true }),
    });
  }
  $('qa').classList.add('hide');
  $('form').classList.add('hide');
  wave = { lv: level, t0: performance.now() };
}

function next() {
  idx++;
  if (idx < round!.questions.length) ask();
  else result(true);
}

$('form').addEventListener('submit', (e) => {
  e.preventDefault();
  submit($<HTMLInputElement>('inp').value);
});
$('inp').addEventListener('input', () => {
  if (suggestion || $('hint').textContent) {
    suggestion = null;
    setHint('');
  }
});

// ---------- resultado ----------
let shareText = '';
function result(animate: boolean) {
  const r = round!;
  const levels = r.picks.map((p) => p.level);
  const total = totalKm(r.picks);
  const an = animalFor(total);
  $('anName').textContent = an[1];
  pixelEmoji($<HTMLCanvasElement>('anCv'), an[2]);
  $('bars').innerHTML = r.picks.map((p) => `<i class="${p.level ? '' : 'z'}" style="height:${p.level * 10}%"></i>`).join('');
  const vs = $('vs');
  vs.hidden = true;
  const url = location.origin + location.pathname;
  if (r.mode === 'duelo') {
    if (r.rival) {
      const rk = r.rival.reduce((s, l) => s + l * 100, 0);
      vs.innerHTML = total > rk ? `Você venceu! <b>${fmt(total)}</b> × ${fmt(rk)} km` : total < rk ? `Seu amigo venceu: ${fmt(total)} × <b>${fmt(rk)}</b> km` : `Empate: ${fmt(total)} km`;
      vs.hidden = false;
      shareText = `Pororoca: duelo ${waveBars(levels)} ${fmt(total)} × ${fmt(rk)} km ${an[2]}\n${url}${duelHash(r, levels)}`;
    } else {
      shareText = `Te desafio no Pororoca! Cheguei a ${fmt(total)} km ${an[2]}. Consegue ir mais longe?\n${url}${duelHash(r, levels)}`;
    }
  } else {
    const tag = r.mode === 'infinito' ? '∞' : `#${r.day}`;
    shareText = `Pororoca ${tag} ${waveBars(levels)} ${fmt(total)} km ${an[2]}\n${url}`;
  }
  const pend = pendingContests();
  $('contestBtn').hidden = pend.length === 0;
  $('contestBtn').textContent = pend.length === 1 ? 'Enviar 1 contestação' : `Enviar ${pend.length} contestações`;
  $('shareBtn').textContent = r.mode === 'duelo' && !r.rival ? 'Desafiar' : 'Compartilhar';
  $('againBtn').hidden = r.mode !== 'infinito';
  $('ansBtn').parentElement!.style.gridTemplateColumns = r.mode === 'infinito' ? '' : '1fr';
  show('r');
  labelMap($('mapBox'));
  const t0 = performance.now();
  const D = !animate || reduceMotion() ? 1 : 1600;
  const frac = total / MAX_KM;
  const step = (now: number) => {
    const t = Math.min(1, (now - t0) / D);
    const e = 1 - (1 - t) ** 3;
    drawMap($<HTMLCanvasElement>('mapCv'), frac * e);
    $('kmv').textContent = fmt(Math.round((total * e) / 10) * 10);
    if (t < 1) requestAnimationFrame(step);
    else $('kmv').textContent = fmt(total);
  };
  requestAnimationFrame(step);
}

$('shareBtn').addEventListener('click', async () => {
  try {
    if (navigator.share && matchMedia('(pointer: coarse)').matches) {
      await navigator.share({ text: shareText });
      return;
    }
  } catch {
    /* cancelado: cai para copiar */
  }
  try {
    await navigator.clipboard.writeText(shareText);
    toast('Copiado');
  } catch {
    toast(shareText);
  }
});

$('ansBtn').addEventListener('click', () => {
  const r = round!;
  $('alist').innerHTML = r.picks
    .map((p, i) => {
      // a pergunta salva pode não ser mais a mesma da rodada sorteada hoje (banco mudou)
      const q = questionById.get(p.qid) ?? r.questions[i];
      if (!q) return '';
      const common = q.answers.reduce((a, b) => (b.tier < a.tier ? b : a));
      const rare = q.answers.reduce((a, b) => (b.tier > a.tier ? b : a));
      const me = p.answer === null ? '<em class="x">Tempo esgotado</em>' : `<em>${esc(p.answer)}</em>`;
      const lv = Array.from({ length: 10 }, (_, k) => `<i class="${k < p.level ? 'on' : ''}"></i>`).join('');
      return `<li><p class="qq">${esc(q.text)}${q.rule ? ` (${esc(q.rule)})` : ''}</p><div class="me">${me}<span class="lv">${lv}</span></div><p class="rare">Comum: <b>${esc(common.name)}</b> · Rara: <b>${esc(rare.name)}</b></p></li>`;
    })
    .join('');
  openSheet('answers');
});

/** Abre uma issue já preenchida com as respostas contestadas, para conferir e incluir na lista. */
$('contestBtn').addEventListener('click', () => {
  const pend = pendingContests();
  if (!pend.length) return;
  const lines = pend.map((c) => {
    const q = questionById.get(c.qid);
    return `- **${q ? q.text : c.qid}** (\`${c.qid}\`): ${c.text}`;
  });
  const body = `O jogo recusou estas respostas e eu acho que elas valem:\n\n${lines.join('\n')}\n\n(Se puder, diga onde conferir: link do IMDb, da Wikipédia, do IBGE etc.)`;
  const title = pend.length === 1 ? `Contestação: "${pend[0].text}"` : `Contestação: ${pend.length} respostas`;
  const url = `${CONTEST_URL}?${new URLSearchParams({ title, body, labels: 'contestação' })}`;
  window.open(url, '_blank', 'noopener');
  markContestsSent();
  $('contestBtn').hidden = true;
});

$('againBtn').addEventListener('click', startInfinite);
$('homeBtn').addEventListener('click', () => show('home'));
$('quitBtn').addEventListener('click', () => {
  timerOn = false;
  wave = null;
  $('gain').classList.remove('on');
  show('home');
});

// ---------- arquivo ----------
$('archBtn').addEventListener('click', () => {
  const n = today();
  const items: string[] = [];
  for (let d = n; d >= 1; d--) {
    const s = loadDay(d);
    const k = s?.done ? `${fmt(totalKm(s.picks))} km` : s?.picks.length || s?.pendingAt ? 'continuar' : 'jogar';
    items.push(`<li><button data-day="${d}"><span class="n">#${d}</span><span class="d">${d === n ? 'Hoje' : formatDay(isoOfDay(d))}</span><span class="k ${s?.done ? '' : 'todo'}">${k}</span></button></li>`);
  }
  $('days').innerHTML = items.join('');
  openSheet('archive');
});
$('days').addEventListener('click', (e) => {
  const b = (e.target as HTMLElement).closest<HTMLElement>('[data-day]');
  if (!b) return;
  closeSheets();
  startDay(Number(b.dataset.day));
});

// ---------- estatísticas ----------
$('statsBtn').addEventListener('click', () => {
  const n = today();
  const done = allDays(n).filter((r) => r.done);
  const body = $('statsBody');
  if (!done.length) {
    body.innerHTML = '<p class="empty">Jogue o desafio do dia para ver suas estatísticas aqui.</p>';
    return openSheet('stats');
  }
  const kms = done.map((r) => totalKm(r.picks));
  const avg = Math.round(kms.reduce((a, b) => a + b, 0) / kms.length / 10) * 10;
  const best = Math.max(...kms);
  // sequência só conta desafios jogados no próprio dia, não os recuperados pelo arquivo
  const { current, max } = streaks(done.filter((r) => !r.late), n);
  const counts = new Map<string, number>();
  kms.forEach((k) => {
    const a = animalFor(k);
    counts.set(a[1], (counts.get(a[1]) ?? 0) + 1);
  });
  const top = Math.max(...counts.values());
  const hist = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([nm, c]) => `<li><span class="nm">${esc(nm)}</span><span class="b" style="width:${Math.max(4, (c / top) * 60)}%"></span><span class="c">${c}</span></li>`)
    .join('');
  body.innerHTML = `<div class="nums"><div><b>${done.length}</b><span>jogos</span></div><div><b>${fmt(avg)}</b><span>km média</span></div><div><b>${fmt(best)}</b><span>km recorde</span></div><div><b>${current}</b><span>dias seguidos (máx. ${max})</span></div></div><ul class="hist">${hist}</ul>`;
  openSheet('stats');
});

// ---------- duelo ----------
let pendingDuel: { seed: string; rival?: number[]; qids?: string[] } | null = null;
/** O link do duelo leva os níveis e as perguntas, para o amigo jogar exatamente as mesmas. */
const duelHash = (r: Round, levels: number[]) => `#duelo=${encodeLevels(levels)}.${r.questions.map((q) => q.id.replace('/', ':')).join(',')}`;
$('duelBtn').addEventListener('click', () => {
  pendingDuel = { seed: 'duelo-' + randomSeed() };
  $('duelText').innerHTML = 'Jogue 7 ondas e mande o link para um amigo.<small>Ele vai responder as mesmas perguntas, e vocês comparam até onde cada Capi chegou.</small>';
  openSheet('duel');
});
$('duelGo').addEventListener('click', () => {
  if (!pendingDuel) return;
  const d = pendingDuel;
  pendingDuel = null;
  closeSheets();
  startDuel(d.seed, d.rival, d.qids);
});
function readDuelLink() {
  const m = /^#duelo=([0-9x]{7})\.([a-z0-9:,_-]{1,400})$/.exec(location.hash);
  if (!m) return;
  history.replaceState(null, '', location.pathname + location.search);
  const rival = decodeLevels(m[1]);
  const qids = m[2].split(',').map((s) => s.replace(':', '/'));
  if (!rival || qids.length !== WAVES || !qids.every((id) => questionById.has(id))) {
    toast('Esse link de duelo não funciona mais');
    return;
  }
  const km = rival.reduce((s, l) => s + l * 100, 0);
  pendingDuel = { seed: 'duelo-link', rival, qids };
  $('duelText').innerHTML = `Um amigo chegou a <b>${fmt(km)} km</b> ${animalFor(km)[2]}<small>Responda as mesmas 7 perguntas e veja se a sua Capi vai mais longe.</small>`;
  openSheet('duel');
}

// ---------- folhas (regras, respostas, arquivo, estatísticas, duelo) ----------
let lastFocus: HTMLElement | null = null;
function openSheet(id: string) {
  lastFocus = document.activeElement as HTMLElement | null;
  const s = $(id);
  s.classList.add('on');
  s.querySelector<HTMLElement>('[data-close]')?.focus();
}
function closeSheets() {
  document.querySelectorAll('.sheet.on').forEach((s) => s.classList.remove('on'));
  if ($('q').classList.contains('on') && !busy) $('inp').focus();
  else lastFocus?.focus();
}
document.querySelectorAll('[data-rules]').forEach((b) => b.addEventListener('click', () => openSheet('rules')));
document.querySelectorAll<HTMLElement>('.sheet').forEach((s) =>
  s.addEventListener('click', (e) => {
    if (e.target === s || (e.target as HTMLElement).closest('[data-close]')) closeSheets();
  }),
);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSheets();
});

// ícones das regras
document.querySelectorAll<HTMLCanvasElement>('[data-icon]').forEach((cv) => {
  const k = cv.dataset.icon!;
  cv.width = cv.height = k === 'river' ? 16 : 12;
  const c = cv.getContext('2d')!;
  if (k === 'river') {
    c.fillStyle = COL.A;
    c.fillRect(0, 12, 16, 4);
    c.fillStyle = '#ffffff';
    c.fillRect(2, 13, 3, 1);
    c.fillRect(10, 14, 3, 1);
    c.fillStyle = COL.K;
    c.fillRect(1, 11, 14, 1);
    c.fillStyle = COL.O;
    c.fillRect(2, 10, 12, 1);
    sprite(c, MINI, 2, 2);
  } else sprite(c, ICONS[k], 0, 0);
});

// ---------- navegação ----------
$('playBtn').addEventListener('click', () => startDay(today()));
$('infBtn').addEventListener('click', startInfinite);

// ---------- laço de animação ----------
let last = performance.now();
function loop(now: number) {
  const dt = Math.min(50, now - last);
  last = now;
  if ($('home').classList.contains('on')) drawScene($<HTMLCanvasElement>('homeCv'), scenes.home, now);
  if ($('q').classList.contains('on')) {
    tickTimer();
    const cv = $<HTMLCanvasElement>('qCv');
    const d = fit(cv) ?? [84, 80];
    const lv = wave?.lv ?? 0;
    if (stepWave(scenes.q, wave, now, dt, d[0], d[1], reduceMotion(), $('gain'), `+${fmt(lv * 100)} km`)) {
      wave = null;
      next();
    }
    drawScene(cv, scenes.q, now);
  }
  requestAnimationFrame(loop);
}

// ---------- teclado do celular ----------
// O teclado encolhe a área visível. O app passa a ter a altura dessa área, então a pergunta
// (em cima) e o campo de resposta (embaixo) continuam à vista, e a cena do rio encolhe no meio.
const vv = window.visualViewport;
let fullH = window.innerHeight;
function fitViewport() {
  if (!vv) return;
  const app = $('app');
  const h = Math.round(vv.height);
  app.style.setProperty('--app-h', h + 'px');
  // teclado aberto: a área visível ficou bem menor que a altura normal da página
  const typing = document.activeElement === $('inp');
  if (!typing) fullH = Math.max(h, window.innerHeight);
  app.classList.toggle('kb', typing && h < fullH * 0.75);
  if (vv.offsetTop || window.scrollY) window.scrollTo(0, 0);
}
vv?.addEventListener('resize', fitViewport);
window.addEventListener('resize', () => {
  if ($('r').classList.contains('on')) labelMap($('mapBox'));
});
vv?.addEventListener('scroll', fitViewport);
$('inp').addEventListener('focus', () => setTimeout(fitViewport, 50));
$('inp').addEventListener('blur', () => setTimeout(fitViewport, 50));
fitViewport();

refreshHome();
readDuelLink();
window.addEventListener('hashchange', readDuelLink);
requestAnimationFrame(loop);

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}
