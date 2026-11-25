/** Primeiro desafio diário (#1), no fuso de Brasília. */
export const LAUNCH = '2026-11-25';
export const TZ = 'America/Sao_Paulo';
export const SECS = 45;
export const WAVES = 7;
export const MAX_KM = WAVES * 1000;

/**
 * Coleta de respostas (desligada no começo).
 * Quando houver um servidor, coloque aqui a URL. O site manda cada resposta
 * (pergunta, texto, resposta reconhecida) por navigator.sendBeacon, e as
 * contagens voltam por STATS_URL para calcular a raridade real (ver rarity.ts).
 */
export const ANSWER_LOG_URL = '';
export const STATS_URL = '';
