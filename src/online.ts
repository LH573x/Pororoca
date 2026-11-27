/**
 * Ligação com o servidor (Firebase Realtime Database), só por REST e EventSource:
 * sem biblioteca, sem chave. As regras de quem pode escrever o quê ficam em database.rules.json.
 */
import { ONLINE_URL } from './config';

const BASE = ((import.meta as any).env?.VITE_ONLINE_URL || ONLINE_URL).replace(/\/+$/, '');
export const online = () => BASE !== '';

/** Pede ao servidor que grave a hora dele. */
export const SERVER_TIME = { '.sv': 'timestamp' } as const;

const url = (path: string, q: Record<string, string> = {}) => `${BASE}/${path.replace(/^\/+/, '')}.json${Object.keys(q).length ? '?' + new URLSearchParams(q) : ''}`;

async function call<T>(method: string, path: string, body?: unknown, q?: Record<string, string>): Promise<T> {
  const r = await fetch(url(path, q), { method, body: body === undefined ? undefined : JSON.stringify(body) });
  if (!r.ok) throw new Error(`${method} ${path}: ${r.status}`);
  return r.json() as Promise<T>;
}
export const get = <T>(path: string, q?: Record<string, string>) => call<T>('GET', path, undefined, q);
export const put = <T>(path: string, v: unknown) => call<T>('PUT', path, v);
export const post = <T>(path: string, v: unknown) => call<T>('POST', path, v);
/** Grava vários caminhos de uma vez (ou todos, ou nenhum). */
export const patch = <T>(path: string, v: Record<string, unknown>) => call<T>('PATCH', path, v);

/** Grava a hora do servidor e devolve quanto o relógio daqui está atrasado em relação a ele. */
export async function putWithClock(path: string, v: Record<string, unknown>, timeKey: string): Promise<number> {
  const t0 = Date.now();
  const res = await put<Record<string, unknown>>(path, { ...v, [timeKey]: SERVER_TIME });
  const t1 = Date.now();
  return Number(res[timeKey]) - (t0 + t1) / 2;
}

/** Aplica um evento do EventSource ("put" troca o valor, "patch" troca só os filhos listados) na cópia local. */
export function applyEvent(root: any, kind: 'put' | 'patch', path: string, data: any): any {
  const keys = path.split('/').filter(Boolean);
  if (kind === 'patch' && data && typeof data === 'object') {
    for (const [k, v] of Object.entries(data)) root = setAt(root, [...keys, ...k.split('/').filter(Boolean)], v);
    return root;
  }
  return setAt(root, keys, data);
}
/** Troca o valor num caminho, sem mexer no original; null apaga (e apaga os pais que ficam vazios). */
function setAt(node: any, keys: string[], val: any): any {
  if (!keys.length) return val ?? null;
  const base = node && typeof node === 'object' ? { ...node } : {};
  const child = setAt(base[keys[0]], keys.slice(1), val);
  if (child === null) delete base[keys[0]];
  else base[keys[0]] = child;
  return Object.keys(base).length ? base : null;
}

/** Acompanha um caminho ao vivo. Devolve a função que para de ouvir. */
export function listen(path: string, onValue: (v: any) => void, onError?: () => void): () => void {
  let value: any = null;
  const es = new EventSource(url(path));
  const handle = (kind: 'put' | 'patch') => (e: MessageEvent) => {
    try {
      const { path: p, data } = JSON.parse(e.data);
      value = applyEvent(value, kind, p, data);
      onValue(value);
    } catch {
      /* evento estranho: ignora */
    }
  };
  es.addEventListener('put', handle('put') as EventListener);
  es.addEventListener('patch', handle('patch') as EventListener);
  es.addEventListener('cancel', () => onError?.());
  es.onerror = () => {
    // o EventSource tenta de novo sozinho; só avisa se fechou de vez
    if (es.readyState === EventSource.CLOSED) onError?.();
  };
  return () => es.close();
}
