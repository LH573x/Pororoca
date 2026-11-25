import { MAX_KM } from './config';
import { COL, MINI, sprite } from './sprites';

/** Traçado do Rio Amazonas (longitude, latitude, km a partir da foz), da foz até a nascente nos Andes. */
const RIVER: [number, number, number][] = [
  [-49.8, 0.2, 0], [-51.1, -0.1, 180], [-51.6, -1.4, 350], [-52.6, -1.5, 480], [-54.1, -2.0, 650], [-54.7, -2.4, 750],
  [-55.5, -1.9, 860], [-56.1, -2.15, 960], [-56.7, -2.6, 1050], [-58.4, -3.15, 1300], [-59.9, -3.15, 1500], [-60.6, -3.3, 1600],
  [-63.1, -4.1, 1950], [-64.7, -3.35, 2200], [-66.0, -2.5, 2450], [-67.8, -2.9, 2700], [-68.9, -3.4, 2900], [-69.95, -4.2, 3100],
  [-70.5, -3.9, 3200], [-71.8, -3.3, 3400], [-73.25, -3.75, 3600], [-73.5, -4.5, 3700], [-73.85, -5.05, 3850], [-74.6, -6.4, 4100],
  [-75.0, -7.35, 4300], [-74.55, -8.38, 4600], [-74.1, -9.6, 4900], [-73.8, -10.7, 5200], [-74.0, -11.9, 5600], [-73.4, -12.6, 5900],
  [-72.9, -13.4, 6200], [-72.3, -14.4, 6600], [-71.7, -15.5, 7000],
];
const CITIES: [string, number][] = [['Santarém', 750], ['Parintins', 1050], ['Manaus', 1500], ['Tabatinga', 3100], ['Iquitos', 3600], ['Pucallpa', 4600]];
const MW = 96;
const MH = 62;
const LON0 = -77.2;
const LAT0 = 1;
const SC = 3.3;
const proj = (lon: number, lat: number): [number, number] => [3 + (lon - LON0) * SC, 3 + (LAT0 - lat) * SC];

export function atKm(km: number): [number, number] {
  km = Math.max(0, Math.min(MAX_KM, km));
  for (let i = 1; i < RIVER.length; i++) {
    const a = RIVER[i - 1];
    const b = RIVER[i];
    if (km <= b[2]) {
      const u = (km - a[2]) / (b[2] - a[2]);
      return proj(a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u);
    }
  }
  const e = RIVER[RIVER.length - 1];
  return proj(e[0], e[1]);
}
const at = (f: number) => atKm(f * MAX_KM);

/** Fronteiras aproximadas do Brasil com Colômbia, Peru e Bolívia. */
const BORDERS: [number, number][][] = [
  [[-69.8, 1.0], [-69.4, -1.1], [-69.95, -4.2], [-72.9, -5.1], [-73.99, -7.5], [-72.4, -9.5], [-70.5, -11.0], [-69.5, -10.9], [-65.3, -9.7], [-65.0, -12.0], [-60.5, -13.8], [-60.0, -16.0]],
];

export function drawMap(cv: HTMLCanvasElement, frac: number) {
  cv.width = MW;
  cv.height = MH;
  const c = cv.getContext('2d')!;
  c.clearRect(0, 0, MW, MH);
  // fronteiras do Brasil (pontilhado)
  c.fillStyle = '#e3d3bf';
  for (const line of BORDERS)
    for (let i = 1; i < line.length; i++) {
      const [x0, y0] = proj(...line[i - 1]);
      const [x1, y1] = proj(...line[i]);
      const n = Math.ceil(Math.hypot(x1 - x0, y1 - y0));
      for (let k = 0; k <= n; k += 2) c.fillRect(Math.round(x0 + ((x1 - x0) * k) / n), Math.round(y0 + ((y1 - y0) * k) / n), 1, 1);
    }
  // ilha de Marajó
  c.fillStyle = '#a8d695';
  [[-50.6, -0.6], [-49.9, -0.6], [-49.2, -0.9], [-50.4, -1.2], [-49.6, -1.3], [-49.0, -1.4], [-50.0, -1.7], [-49.4, -1.8]].forEach(([lo, la]) => {
    const [x, y] = proj(lo, la);
    c.fillRect(Math.round(x) - 1, Math.round(y) - 1, 3, 3);
  });
  const dot = (f: number, r: number, col: string) => {
    const [x, y] = at(f);
    c.fillStyle = col;
    c.fillRect(Math.round(x) - r, Math.round(y) - r, r * 2 + 1, r * 2 + 1);
  };
  for (let f = 0; f <= 1; f += 0.001) dot(f, 2, COL.K);
  for (let f = 0; f <= 1; f += 0.001) dot(f, 1, COL.A);
  for (let f = 0; f <= frac; f += 0.001) dot(f, 1, COL.O);
  CITIES.forEach(([, km]) => dot(km / MAX_KM, 0, '#ffffff'));
  const [x, y] = at(frac);
  sprite(c, MINI, Math.round(x) - 6, Math.round(y) - 8);
}

type Spot = 'b' | 'a' | 'd' | 'e' | 'bl' | 'br' | 'al' | 'ar';
interface Label {
  text: string;
  lon: number;
  lat: number;
  cls?: string;
  /** posições a tentar, em ordem: abaixo, acima, direita, esquerda */
  prefer?: Spot[];
}
// as cidades maiores escolhem lugar primeiro
const LABELS: Label[] = [
  { text: 'Manaus', lon: -60.0, lat: -3.1, prefer: ['a', 'ar', 'al'] },
  { text: 'Tabatinga', lon: -69.95, lat: -4.2, prefer: ['br', 'd'] },
  { text: 'Iquitos', lon: -73.25, lat: -3.75, prefer: ['a', 'al', 'e'] },
  { text: 'Santarém', lon: -54.7, lat: -2.4, prefer: ['b', 'a', 'ar'] },
  { text: 'Andes', lon: -71.7, lat: -15.5, prefer: ['d', 'a'] },
  { text: 'BRASIL', lon: -59, lat: -9.5, cls: 'country', prefer: ['b'] },
  { text: 'PERU', lon: -77.0, lat: -15.0, cls: 'country', prefer: ['d'] },
];

/**
 * Nomes por cima do mapa (texto de verdade, não pixel). Cada nome tenta alguns lugares
 * em volta do ponto e fica no primeiro que não cobre o rio nem outro nome.
 */
export function labelMap(box: HTMLElement) {
  box.querySelectorAll('span').forEach((s) => s.remove());
  const W = box.clientWidth;
  const H = box.clientHeight;
  if (!W || !H) return;
  const s = W / MW;
  const river: [number, number][] = [];
  for (let km = 0; km <= MAX_KM; km += 40) {
    const [x, y] = atKm(km);
    river.push([x * s, y * s]);
  }
  const pad = 3.2 * s; // meia largura do rio desenhado, com contorno e folga
  const placed: [number, number, number, number][] = [];
  // nota de um lugar: quanto menor, melhor (fora da caixa e em cima de outro nome pesa mais que o rio)
  const clamp = (x: number, y: number, w: number, h: number): [number, number] => [Math.max(0, Math.min(W - w, x)), Math.max(0, Math.min(H - h, y))];
  const cost = (r: [number, number, number, number]) => {
    let c = 0;
    for (const [x, y] of river) if (x > r[0] - pad && x < r[0] + r[2] + pad && y > r[1] - pad && y < r[1] + r[3] + pad) c += 3;
    for (const p of placed) if (r[0] < p[0] + p[2] && r[0] + r[2] > p[0] && r[1] < p[1] + p[3] && r[1] + r[3] > p[1]) c += 50;
    return c;
  };
  for (const l of LABELS) {
    const el = document.createElement('span');
    el.textContent = l.text;
    if (l.cls) el.className = l.cls;
    box.appendChild(el);
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const [mx, my] = proj(l.lon, l.lat);
    const x = mx * s;
    const y = my * s;
    const g = l.cls ? 0 : 3.2 * s;
    const spots: Record<Spot, [number, number]> = {
      b: [x - w / 2, y + g],
      a: [x - w / 2, y - g - h],
      d: [x + g, y - h / 2],
      e: [x - g - w, y - h / 2],
      br: [x + g * 0.5, y + g],
      bl: [x - w - g * 0.5, y + g],
      ar: [x + g * 0.5, y - g - h],
      al: [x - w - g * 0.5, y - g - h],
    };
    const order: Spot[] = [...(l.prefer ?? []), 'b', 'a', 'd', 'e', 'br', 'bl', 'ar', 'al'];
    let pick = spots[order[0]];
    let best = Infinity;
    order.forEach((k, i) => {
      // o nome que passaria da borda é empurrado para dentro antes de conferir;
      // cada lugar menos preferido custa um pouco, para o nome não fugir do ponto
      const at = clamp(spots[k][0], spots[k][1], w, h);
      const c = cost([at[0], at[1], w, h]) + i * 0.8;
      if (c < best) {
        best = c;
        pick = at;
      }
    });
    placed.push([pick[0], pick[1], w, h]);
    el.style.left = pick[0] + 'px';
    el.style.top = pick[1] + 'px';
  }
}
