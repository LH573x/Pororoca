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

/**
 * Servidor do duelo ao vivo e do ranking do dia (Firebase Realtime Database, plano gratuito).
 * Endereço do banco, como https://pororoca-xxxx-default-rtdb.firebaseio.com (as regras ficam em database.rules.json).
 * Vazio: o duelo volta a ser por link (um joga, depois o outro) e o ranking some.
 * Para testar no computador: VITE_ONLINE_URL=http://localhost:9000 npm run dev (com npm run servidor-teste).
 */
export const ONLINE_URL = '';

/**
 * Contestações: quando o jogo recusa uma resposta que o jogador acha certa, ele aperta "contestar".
 * No fim da rodada, as contestações abrem uma issue já preenchida neste endereço, para alguém
 * conferir a fonte da pergunta e, se estiver certa, incluir a resposta na lista (ver README).
 */
export const CONTEST_URL = 'https://github.com/LH573x/Pororoca/issues/new';
