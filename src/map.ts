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
const CITIES: [string, number, number][] = [['Santarém', 750, 1], ['Parintins', 1050, 0], ['Manaus', 1500, -1], ['Tabatinga', 3100, 1], ['Iquitos', 3600, -1], ['Pucallpa', 4600, 0]];
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

export function drawMap(cv: HTMLCanvasElement, frac: number) {
  cv.width = MW;
  cv.height = MH;
  const c = cv.getContext('2d')!;
  c.clearRect(0, 0, MW, MH);
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

/** Nomes das cidades por cima do mapa (texto de verdade, não pixel). */
export function labelMap(box: HTMLElement) {
  box.querySelectorAll('span').forEach((s) => s.remove());
  const lab = (t: string, x: number, y: number, dy: number) => {
    const s = document.createElement('span');
    s.textContent = t;
    s.style.left = (x / MW) * 100 + '%';
    s.style.top = `calc(${(y / MH) * 100}% + ${dy}px)`;
    box.appendChild(s);
  };
  CITIES.forEach(([n, km, sgn]) => {
    if (!sgn) return;
    const [x, y] = atKm(km);
    lab(n, x, y, sgn > 0 ? 14 : -30);
  });
  {
    const [x, y] = proj(-49.6, -1.9);
    lab('Marajó', x - 5, y, 10);
  }
  {
    const [x, y] = proj(-71.7, -15.5);
    lab('Andes', x + 8, y, -8);
  }
}
