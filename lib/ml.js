// Cliente de la API de MercadoLibre: maneja el token y las llamadas.
import { loadTokens, saveTokens } from "./store.js";

const API = "https://api.mercadolibre.com";

// Intercambia el "code" del OAuth por el primer par de tokens.
export async function exchangeCodeForTokens(code) {
  const body = new URLSearchParams({
    grant_type: "authorization_code",
    client_id: process.env.ML_CLIENT_ID,
    client_secret: process.env.ML_CLIENT_SECRET,
    code,
    // Tiene que ser EXACTAMENTE la misma que usamos en /api/auth.
    redirect_uri: process.env.ML_REDIRECT_URI + "/api/callback",
  });
  const res = await fetch(`${API}/oauth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
    body,
  });
  const data = await res.json();
  if (!res.ok) throw new Error("OAuth fallo: " + JSON.stringify(data));
  await persist(data);
  return data;
}

// Renueva el access_token usando el refresh_token. ML devuelve un refresh_token
// NUEVO cada vez, por eso lo volvemos a guardar.
async function refresh(tokens) {
  const body = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: process.env.ML_CLIENT_ID,
    client_secret: process.env.ML_CLIENT_SECRET,
    refresh_token: tokens.refresh_token,
  });
  const res = await fetch(`${API}/oauth/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
    body,
  });
  const data = await res.json();
  if (!res.ok) throw new Error("Refresh fallo: " + JSON.stringify(data));
  return persist(data);
}

function persist(data) {
  const tokens = {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    user_id: data.user_id,
    // Renovamos 5 min antes de que expire para no cortarlo justo.
    expires_at: Date.now() + (data.expires_in - 300) * 1000,
  };
  return saveTokens(tokens).then(() => tokens);
}

// Devuelve un access_token valido, renovando si hace falta.
async function getValidToken() {
  let tokens = await loadTokens();
  if (!tokens) throw new Error("No hay tokens guardados. Autoriza el bot primero entrando a /api/auth.");
  if (Date.now() >= tokens.expires_at) {
    tokens = await refresh(tokens);
  }
  return tokens;
}

// Trae el detalle de una pregunta por su ID.
export async function getQuestion(questionId) {
  const { access_token } = await getValidToken();
  const res = await fetch(`${API}/questions/${questionId}?api_version=4`, {
    headers: { Authorization: `Bearer ${access_token}` },
  });
  if (!res.ok) throw new Error("getQuestion fallo: " + (await res.text()));
  return res.json();
}

// Publica la respuesta a una pregunta.
export async function answerQuestion(questionId, text) {
  const { access_token } = await getValidToken();
  const res = await fetch(`${API}/answers`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question_id: questionId, text }),
  });
  if (!res.ok) throw new Error("answerQuestion fallo: " + (await res.text()));
  return res.json();
}

export async function getSellerId() {
  const { user_id } = await getValidToken();
  return user_id;
}
