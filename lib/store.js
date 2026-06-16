// Guarda y lee los tokens de MercadoLibre.
// Usa Vercel KV (Redis) para que los tokens sobrevivan entre ejecuciones.
// MercadoLibre rota el refresh_token en cada renovacion, asi que SI o SI
// hay que guardarlo en un lugar persistente (no alcanza una variable de entorno).
import { kv } from "@vercel/kv";

const TOKEN_KEY = "ml:tokens";

export async function saveTokens(tokens) {
  // tokens = { access_token, refresh_token, expires_at, user_id }
  await kv.set(TOKEN_KEY, tokens);
}

export async function loadTokens() {
  return (await kv.get(TOKEN_KEY)) || null;
}
