const STOP = new Set(['o', 'a', 'os', 'as', 'um', 'uma', 'de', 'da', 'do', 'das', 'dos', 'e']);

/**
 * Padroniza um texto para comparação: minúsculas, sem acento, sem pontuação,
 * sem artigos/preposições curtas e sem o "s" do plural.
 * "As Bananas" -> "banana"; "Pé-de-moleque" -> "pe moleque".
 */
export function norm(s: string): string {
  const words = s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean);
  const kept = words.filter((w) => !STOP.has(w));
  const base = kept.length ? kept : words;
  return base.map((w) => (w.length > 3 && w.endsWith('s') ? w.slice(0, -1) : w)).join(' ');
}

/** Versão sem espaços, para aceitar "pedemoleque" ou "coca cola" = "cocacola". */
export const compact = (n: string) => n.replace(/ /g, '');
