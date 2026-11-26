/**
 * Imitação simples do Firebase Realtime Database (REST + EventSource), para testar o duelo ao vivo
 * e o ranking no computador, sem conta. Não confere as regras de database.rules.json.
 * Uso: npm run servidor-teste   e   VITE_ONLINE_URL=http://localhost:9000 npm run dev
 */
import { createServer, type ServerResponse } from 'node:http';

const PORT = Number(process.env.PORT ?? 9000);
let db: any = null;
const streams = new Set<{ path: string[]; res: ServerResponse }>();

const split = (p: string) => p.split('/').filter(Boolean);
const getAt = (path: string[]) => path.reduce((n, k) => (n && typeof n === 'object' ? n[k] ?? null : null), db);
function setAt(node: any, path: string[], val: any): any {
  if (!path.length) return val;
  const base = node && typeof node === 'object' ? { ...node } : {};
  const child = setAt(base[path[0]], path.slice(1), val);
  if (child === null || child === undefined) delete base[path[0]];
  else base[path[0]] = child;
  return Object.keys(base).length ? base : null;
}
const resolve = (v: any): any =>
  v && typeof v === 'object' ? (v['.sv'] === 'timestamp' ? Date.now() : Object.fromEntries(Object.entries(v).map(([k, x]) => [k, resolve(x)]))) : v;
const prefix = (a: string[], b: string[]) => a.length <= b.length && a.every((k, i) => b[i] === k);

function notify(changed: string[]) {
  for (const s of streams) {
    if (prefix(s.path, changed) || prefix(changed, s.path)) s.res.write(`event: put\ndata: ${JSON.stringify({ path: '/', data: getAt(s.path) })}\n\n`);
  }
}

createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE');
  if (req.method === 'OPTIONS') return res.end();
  const u = new URL(req.url!, 'http://x');
  const path = split(u.pathname.replace(/\.json$/, ''));
  if (req.method === 'GET' && req.headers.accept?.includes('text/event-stream')) {
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' });
    res.write(`event: put\ndata: ${JSON.stringify({ path: '/', data: getAt(path) })}\n\n`);
    const s = { path, res };
    streams.add(s);
    req.on('close', () => streams.delete(s));
    return;
  }
  let body = '';
  req.on('data', (c) => (body += c));
  req.on('end', () => {
    const val = body ? resolve(JSON.parse(body)) : null;
    let out: any = null;
    let at = path;
    if (req.method === 'GET') out = getAt(path);
    else if (req.method === 'PUT') out = val;
    else if (req.method === 'POST') {
      const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
      at = [...path, id];
      out = { name: id };
      db = setAt(db, at, val);
    } else if (req.method === 'PATCH') {
      for (const [k, v] of Object.entries(val ?? {})) db = setAt(db, [...path, ...split(k)], v);
      out = val;
    } else if (req.method === 'DELETE') db = setAt(db, path, null);
    if (req.method === 'PUT') db = setAt(db, path, val);
    if (req.method !== 'GET') notify(at);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(out));
  });
}).listen(PORT, () => console.log(`servidor de teste em http://localhost:${PORT}`));
