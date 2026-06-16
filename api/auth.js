// Arranca el OAuth: te manda a MercadoLibre para que autorices el bot.
// Se entra UNA vez desde el navegador:  https://TU-DEPLOY.vercel.app/api/auth?secret=TU_SETUP_SECRET
export default async function handler(req, res) {
  // Chequeo simple para que solo vos puedas autorizar.
  if (req.query.secret !== process.env.SETUP_SECRET) {
    return res.status(401).send("No autorizado. Falta el secret correcto.");
  }

  const url =
    "https://auth.mercadolibre.com.ar/authorization" +
    "?response_type=code" +
    "&client_id=" + encodeURIComponent(process.env.ML_CLIENT_ID) +
    "&redirect_uri=" + encodeURIComponent(process.env.ML_REDIRECT_URI + "/api/callback");

  res.writeHead(302, { Location: url });
  res.end();
}
