/** A Capi (desenho próprio do Pororoca) e outros sprites em pixel art. */
export const CAPI = [
  '....KK..................',
  '..KKKNKKKK..............',
  '.KBBBBBBBBKKKKKKKK......',
  'KBBBBBBBBBBBBBBBBBKK....',
  'KBBBBEWBBBBBBBBBBBBBK...',
  'KBBBBEEBBBBBBBBBBBBBBK..',
  'KNNNBBBBBBBBBBBBBBBBBBK.',
  'KNNNNBPPBBBBBBBBBBBBBBK.',
  'KNKNNBBBBBBBBBBBBBBBBBBK',
  'KNNNNBBBBBBBBBBBBBBBBBBK',
  '.KNNNKBBBBBBBBBBBBBBBBBK',
  '..KKKKBBBBBBBBBBBBBBBBBK',
  '.....KBBBBBBBBBBBBBBBBK.',
  '.....KSSBBBBBBBBBBBBBSK.',
  '.....KFFKSSBBBBBBKFFSK..',
  '.....KFFK.KKKKKKKKFFK...',
  '.....KKKK........KKKK...',
];
/** De pé e de óculos escuros, para a pororoca gigante (nível 10). */
export const STAND = [
  '......KK.........',
  '....KKKNKKK......',
  '...KBBBBBBBK.....',
  '..KBBBBBBBBBK....',
  '.KYYYYYYYYYYYK...',
  'KYwYYYYYBBBBBK...',
  'KBYYYYYBBBBBBK...',
  'KNNNBBBBBBBBBK...',
  'KNKNPBBBBBBBBK...',
  'KNNNBBBBBBBBBK...',
  '.KKKKBBBBBBBBBK..',
  '....KBBBBBBBBBK..',
  '...KBBBBBBBBBBBK.',
  '..KBBKBBBBBBBBBK.',
  '..KBBKBBBBBBBBBK.',
  '...KKBBBBBBBBBBK.',
  '....KBBBBBBBBBBK.',
  '....KBBBBBBBBBBK.',
  '....KSBBBBBBBBSK.',
  '.....KSBBBBBBSK..',
  '.....KBBKKKKBBK..',
  '.....KFFK..KFFK..',
  '.....KKKK..KKKK..',
];
export const MINI = [
  '.KK.........',
  'KBNKKKK.....',
  'KBEBBBBKKK..',
  'KNPBBBBBBBK.',
  'KNNBBBBBBBK.',
  '.KKKBBBBBBK.',
  '...KFKKKFK..',
  '...KK...KK..',
];
export const ICONS: Record<string, string[]> = {
  clock: ['....KKKK....', '..KKWWWWKK..', '.KWWWWWWWWK.', '.KWWWKWWWWK.', 'KWWWWKWWWWWK', 'KWWWWKWWWWWK', 'KWWWWKKKWWWK', 'KWWWWWWWWWWK', '.KWWWWWWWWK.', '.KWWWWWWWWK.', '..KKWWWWKK..', '....KKKK....'],
  wave: ['............', '.......KKK..', '.....KKWWWK.', '....KDDKKWK.', '...KDDDDK...', '..KDDDDDDK..', '.KDDDDDDDDK.', 'KDDDDDDDDDDK', 'DDDDDDDDDDDD', 'AAAAAAAAAAAA', 'AAAAAAAAAAAA', '............'],
};
export const COL: Record<string, string> = {
  K: '#3a2618', B: '#c48a55', S: '#ad7444', N: '#8b5a36', F: '#6e4426', E: '#000000', W: '#ffffff', P: '#e89a8a',
  Y: '#1a1a1e', w: '#ffffff', O: '#f08a2c', A: '#7cc4e4', D: '#4f9fc8', C: '#fff6e9', G: '#8cc97a',
};

export function sprite(ctx: CanvasRenderingContext2D, rows: string[], x: number, y: number, blink = false) {
  rows.forEach((r, j) =>
    [...r].forEach((c, i) => {
      if (c === '.') return;
      const k = blink && c === 'E' ? 'B' : c;
      ctx.fillStyle = COL[k];
      ctx.fillRect(x + i, y + j, 1, 1);
    }),
  );
}

/** Desenha um emoji em 16x16 com contorno, para o animal do resultado ficar em pixel. */
export function pixelEmoji(cv: HTMLCanvasElement, emoji: string) {
  const n = 16;
  const o = document.createElement('canvas');
  o.width = o.height = n;
  const c = o.getContext('2d')!;
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.font = `${n - 2}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`;
  c.fillText(emoji, n / 2, n / 2 + 1);
  const d = c.getImageData(0, 0, n, n).data;
  cv.width = cv.height = n + 2;
  const x = cv.getContext('2d')!;
  x.clearRect(0, 0, n + 2, n + 2);
  const on = (i: number, j: number) => i >= 0 && j >= 0 && i < n && j < n && d[(j * n + i) * 4 + 3] > 110;
  for (let j = -1; j <= n; j++)
    for (let i = -1; i <= n; i++) {
      if (on(i, j)) {
        const k = (j * n + i) * 4;
        x.fillStyle = `rgb(${d[k]},${d[k + 1]},${d[k + 2]})`;
        x.fillRect(i + 1, j + 1, 1, 1);
      } else if (on(i - 1, j) || on(i + 1, j) || on(i, j - 1) || on(i, j + 1)) {
        x.fillStyle = COL.K;
        x.fillRect(i + 1, j + 1, 1, 1);
      }
    }
}
