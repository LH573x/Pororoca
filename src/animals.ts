/** Nível final: o animal que a Capi encontra onde parou (km mínimo, nome, emoji). */
export const ANIMALS: [number, string, string][] = [
  [0, 'Carapanã', '🦟'],
  [1000, 'Piranha', '🐟'],
  [1800, 'Jacaré', '🐊'],
  [2500, 'Tucano', '🐦'],
  [3200, 'Arara-vermelha', '🦜'],
  [3900, 'Preguiça', '🦥'],
  [4600, 'Ariranha', '🦦'],
  [5300, 'Peixe-boi', '🦭'],
  [6000, 'Onça-pintada', '🐆'],
  [6600, 'Boto-cor-de-rosa', '🐬'],
];

export const animalFor = (km: number) => [...ANIMALS].reverse().find((a) => km >= a[0])!;

/** Barrinhas do compartilhamento, uma por onda (· = sem onda). */
export const waveBars = (levels: number[]) => levels.map((l) => (l ? '▁▂▃▄▅▅▆▇▇█'[l - 1] : '·')).join('');

/** Duelo: níveis em um caractere cada (0-9, x = 10). */
export const encodeLevels = (levels: number[]) => levels.map((l) => (l === 10 ? 'x' : String(l))).join('');
export function decodeLevels(s: string): number[] | null {
  if (!/^[0-9x]{7}$/.test(s)) return null;
  return [...s].map((c) => (c === 'x' ? 10 : Number(c)));
}
