import { defineConfig } from 'vite';

// base relativo: o site funciona no GitHub Pages (/Pororoca/) e em qualquer outra pasta
export default defineConfig({
  base: './',
  build: { target: 'es2020' },
  test: { environment: 'node' },
} as any);
