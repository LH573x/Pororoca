import { LAUNCH, TZ } from './config';

/** Data de hoje (AAAA-MM-DD) no fuso de Brasília. */
export function todayISO(now: Date = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
}

const toUTC = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return Date.UTC(y, m - 1, d);
};

/** Número do desafio: 25/11/2026 é o #1. */
export function dayNumber(iso: string): number {
  return Math.round((toUTC(iso) - toUTC(LAUNCH)) / 86400000) + 1;
}

export function isoOfDay(n: number): string {
  return new Date(toUTC(LAUNCH) + (n - 1) * 86400000).toISOString().slice(0, 10);
}

export function formatDay(iso: string): string {
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}
