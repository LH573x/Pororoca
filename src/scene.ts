import { CAPI, COL, STAND, sprite } from './sprites';

/** Estado de uma cena do rio (início ou pergunta). */
export interface SceneState {
  off: number;
  bob: boolean;
  wv: { fx: number; A: number } | null;
  parts: { x: number; y: number; vx: number; vy: number; life: number }[];
  cxo: number;
  cool?: boolean;
  head?: [number, number];
}

export const newScene = (): SceneState => ({ off: 0, bob: true, wv: null, parts: [], cxo: 0 });

const LW = 84;
export function fit(cv: HTMLCanvasElement): [number, number] | null {
  const r = cv.getBoundingClientRect();
  if (!r.width) return null;
  const W = LW;
  const H = Math.max(48, Math.round((W * r.height) / r.width));
  if (cv.width !== W || cv.height !== H) {
    cv.width = W;
    cv.height = H;
  }
  return [W, H];
}
export const capX = (W: number) => Math.round(W * 0.66);

/** Altura da água acima do nível do rio no ponto x. */
export function surf(x: number, s: SceneState): number {
  const v = s.wv;
  if (!v || v.A < 0.5) return 0;
  const d = x - v.fx;
  const face = Math.max(10, v.A * 1.1);
  const back = v.A * 1.5 + 10;
  if (d < -face) return 0;
  if (d <= 0) {
    const u = (d + face) / face;
    return v.A * Math.pow(u, 1.8);
  }
  if (d <= back) {
    const u = d / back;
    return v.A * (1 - 0.85 * u * u * (3 - 2 * u));
  }
  return v.A * 0.15;
}

const hash = (x: number, y: number, f: number) => ((x * 73856093) ^ (y * 19349663) ^ (f * 83492791)) >>> 0;
const SPARKS: [number, number, number][] = [[3, 3, 5], [22, 6, 4], [44, 2, 6], [10, 10, 4], [36, 12, 5], [64, 8, 3], [74, 4, 5]];

export function drawScene(cv: HTMLCanvasElement, s: SceneState, now: number) {
  const d = fit(cv);
  if (!d) return;
  const [W, H] = d;
  const c = cv.getContext('2d')!;
  c.fillStyle = COL.C;
  c.fillRect(0, 0, W, H);
  const yw = H - 16;
  const cx = capX(W) + Math.round(s.cxo || 0);
  const fr = Math.floor(now / 110);
  // sol (à esquerda, longe da Capi)
  const sx = 14;
  const sy = Math.max(6, yw - 30);
  c.fillStyle = '#ffd48a';
  c.fillRect(sx - 3, sy - 4, 6, 8);
  c.fillRect(sx - 4, sy - 3, 8, 6);
  // nuvens
  const cl = (x: number, y: number) => {
    x = (((x + s.off * 0.25) % (W + 20)) + W + 20) % (W + 20) - 10;
    c.fillStyle = '#ffffff';
    c.fillRect(x, y, 8, 2);
    c.fillRect(x + 2, y - 1, 4, 1);
  };
  cl(30, sy - 3);
  cl(60, sy + 4);
  // morros
  for (let x = 0; x < W; x++) {
    const u = x - s.off * 0.6;
    const h = Math.round(5 + 2.5 * Math.sin(u / 6) + 1.5 * Math.sin(u / 2.7));
    c.fillStyle = '#a8d695';
    c.fillRect(x, yw - h, 1, h);
    const v = x - s.off;
    const h2 = Math.round(2 + 1.5 * Math.sin(v / 4 + 2));
    c.fillStyle = '#6fae63';
    c.fillRect(x, yw - h2, 1, h2);
  }
  // rio
  c.fillStyle = COL.A;
  c.fillRect(0, yw, W, H - yw);
  c.fillStyle = '#d4eef8';
  SPARKS.forEach(([x, y, w]) => {
    const xx = (((x + s.off) % (W + 8)) + W + 8) % (W + 8) - 6;
    if (yw + y < H) c.fillRect(xx, yw + y, w, 1);
  });
  // a onda (pororoca): frente íngreme à esquerda, água alta atrás
  const v = s.wv;
  if (v && v.A >= 0.5) {
    for (let x = 0; x < W; x++) {
      const h = Math.round(surf(x, s));
      if (h <= 0) continue;
      const top = yw - h;
      const dd = x - v.fx;
      c.fillStyle = '#6fb6dc';
      c.fillRect(x, top, 1, yw - top + 1);
      if (h > 2) {
        c.fillStyle = COL.D;
        c.fillRect(x, top + Math.ceil(h * 0.25), 1, yw - top - Math.ceil(h * 0.25) + 1);
      }
      if (h > 4) {
        c.fillStyle = '#3f86ad';
        c.fillRect(x, top + Math.ceil(h * 0.6), 1, yw - top - Math.ceil(h * 0.6) + 1);
      }
      const foamy = dd <= 1 && dd >= -Math.max(3, v.A * 0.25);
      c.fillStyle = '#ffffff';
      c.fillRect(x, top, 1, 1);
      if (foamy) {
        for (let y = top + 1; y < yw; y++) if (hash(x, y, fr) % (y - top < 3 ? 2 : 5) === 0) c.fillRect(x, y, 1, 1);
      } else if (hash(x, 0, fr >> 1) % 4 === 0 && h > 2) c.fillRect(x, top + 1 + (hash(x, 1, fr >> 1) % Math.max(1, h - 1)), 2, 1);
    }
    // crista enrolando para a frente
    if (v.A >= 5) {
      const xt = Math.round(v.fx);
      const yt = yw - Math.round(v.A);
      const L = Math.max(3, Math.round(v.A * 0.35));
      const k = fr % 2;
      for (let x = xt - L + 1; x <= xt; x++)
        for (let y = yt + 1; y <= yt + L; y++)
          if (y < yw - surf(x, s) && y - yt <= x - (xt - L)) {
            c.fillStyle = '#2f6f95';
            c.fillRect(x, y, 1, 1);
          }
      c.fillStyle = '#6fb6dc';
      c.fillRect(xt - L, yt - 1, L + 3, 2);
      c.fillStyle = '#ffffff';
      c.fillRect(xt - L, yt - 2, L + 3, 1);
      for (let j = 0; j <= L; j++) {
        c.fillStyle = (j + k) % 3 ? '#ffffff' : '#bfe6f5';
        c.fillRect(xt - L - (j > L / 2 ? 1 : 0), yt + j, 1, 1);
      }
      c.fillRect(xt - L - 2, yt + L + 1 + k, 1, 1);
    }
  } else {
    c.fillStyle = '#ffffff';
    for (let x = cx - 18; x <= cx + 18; x += 3) c.fillRect(x + (((now / 300) | 0) % 3), yw, 2, 1);
  }
  // gotas
  c.fillStyle = '#ffffff';
  s.parts.forEach((p) => c.fillRect(Math.round(p.x), Math.round(p.y), 1, 1));
  // prancha + Capi
  let hb = 0;
  for (let x = cx - 7; x <= cx + 7; x++) hb += surf(x, s) / 15;
  const bob = s.bob && !(v && v.A > 2) ? Math.floor(now / 600) % 2 : 0;
  const by = yw - Math.round(hb) - 3 - bob;
  c.fillStyle = COL.K;
  c.fillRect(cx - 15, by, 30, 1);
  c.fillRect(cx - 16, by + 1, 1, 1);
  c.fillRect(cx + 14, by + 1, 1, 1);
  c.fillRect(cx - 15, by + 2, 30, 1);
  c.fillStyle = COL.O;
  c.fillRect(cx - 15, by + 1, 29, 1);
  s.head = [cx, by - (s.cool ? 23 : 17)];
  if (s.cool) sprite(c, STAND, cx - 8, by - 23);
  else sprite(c, CAPI, cx - 12, by - 17, now % 4200 > 4050);
}

/** Uma onda em andamento: nível 0 = só um respingo. */
export interface Wave {
  lv: number;
  t0: number;
  splashed?: boolean;
}

const eo = (u: number) => 1 - (1 - u) ** 3;
const eio = (u: number) => (u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2);

/**
 * Avança a animação da onda. Devolve true quando a onda terminou.
 * A altura de cada nível é fixa (nível 10 = 30 px) e só encolhe tudo junto se a tela for baixa,
 * então uma onda de nível maior é sempre mais alta.
 */
export function stepWave(s: SceneState, wave: Wave | null, now: number, dt: number, W: number, H: number, reduce: boolean, gain: HTMLElement, label: string): boolean {
  const yw = H - 16;
  const cx0 = capX(W);
  s.parts = s.parts.filter((p) => (p.life -= dt) > 0);
  s.parts.forEach((p) => {
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vy += 0.00018 * dt;
  });
  if (!wave) {
    // depois da onda, a Capi rema de volta devagar
    if (s.wv) {
      s.wv.A *= 0.9;
      s.wv.fx += 0.02 * dt;
      if (s.wv.A < 0.5) s.wv = null;
    }
    s.cxo += (0 - s.cxo) * Math.min(1, dt * 0.0025);
    return false;
  }
  const D = reduce ? 800 : 3000;
  const t = Math.min(1, (now - wave.t0) / D);
  const lv = wave.lv;
  if (!lv) {
    if (!wave.splashed) {
      wave.splashed = true;
      for (let i = 0; i < 6; i++) s.parts.push({ x: cx0 - 10 + i * 4, y: yw - 1, vx: (i - 2.5) * 0.004, vy: -0.03 - Math.random() * 0.02, life: 700 });
    }
    return t >= 0.4;
  }
  const fitH = Math.min(1, Math.max(0.3, (H - 44) / 30));
  const Amax = (3 + lv * 2.7) * fitH;
  s.cool = lv === 10;
  const travel = -Math.min(W * 0.34, 6 + lv * 2.4);
  let A: number;
  let fx: number;
  let sp: number;
  if (t < 0.25) {
    const u = eo(t / 0.25);
    fx = W + 25 + (cx0 + 12 - W - 25) * u;
    A = Amax * (0.5 + 0.5 * u);
    s.cxo = 0;
    sp = u;
  } else if (t < 0.78) {
    const u = eio((t - 0.25) / 0.53);
    s.cxo = travel * u;
    fx = cx0 + s.cxo + 12;
    A = Amax * (1 + 0.05 * Math.sin(now / 130));
    sp = 1;
  } else {
    const u = (t - 0.78) / 0.22;
    s.cxo = travel;
    fx = cx0 + travel + 12 - u * 4;
    A = Amax * (1 - u * u);
    sp = 1 - u;
  }
  s.wv = { fx, A };
  s.off += lv * 0.014 * dt * sp;
  if (t > 0.18 && t < 0.95) {
    if (!gain.classList.contains('on')) {
      gain.textContent = label;
      gain.classList.toggle('big', lv === 10);
      gain.classList.add('on');
    }
    const hd = s.head ?? [fx, yw - A];
    gain.style.left = Math.min(80, Math.max(20, (hd[0] / W) * 100)) + '%';
    gain.style.top = Math.max(12, ((hd[1] - 2) / H) * 100) + '%';
  } else gain.classList.remove('on');
  if (sp > 0.5 && Math.random() < dt * 0.004 * lv) s.parts.push({ x: fx - 2, y: yw - A - 1, vx: -0.015 - Math.random() * 0.025, vy: -0.02 - Math.random() * 0.03, life: 650 });
  if (t >= 1) {
    s.cool = false;
    gain.classList.remove('on');
    return true;
  }
  return false;
}
