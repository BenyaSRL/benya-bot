// MercadoLibre te redirige acá despues de autorizar, con un "code".
// Lo cambiamos por los tokens y los guardamos. Esto se hace una sola vez.
import { exchangeCodeForTokens } from "../lib/ml.js";

export default async function handler(req, res) {
  const { code, error } = req.query;

  if (error) {
    return res.status(400).send("MercadoLibre devolvió un error: " + error);
  }
  if (!code) {
    return res.status(400).send("Falta el parámetro 'code'.");
  }

  try {
    await exchangeCodeForTokens(code);
    res.status(200).send(
      "✅ ¡Listo! El bot quedó autorizado y ya responde solo las preguntas. Podés cerrar esta pestaña."
    );
  } catch (err) {
    console.error(err);
    res.status(500).send("No se pudo completar la autorización: " + err.message);
  }
}
