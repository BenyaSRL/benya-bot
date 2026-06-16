// Punto de entrada de las notificaciones de MercadoLibre.
// ML llama a esta URL cada vez que entra una pregunta nueva.
import { getQuestion, answerQuestion } from "../lib/ml.js";
import { elegirRespuesta } from "../lib/responder.js";

export default async function handler(req, res) {
  // ML a veces hace un GET para chequear que la URL existe.
  if (req.method === "GET") {
    return res.status(200).send("Benya bot OK");
  }
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const notif = req.body || {};

  // Solo nos interesan las notificaciones de preguntas.
  if (notif.topic && notif.topic !== "questions") {
    return res.status(200).send("ignored");
  }

  try {
    // notif.resource viene como "/questions/123456789"
    const questionId = String(notif.resource || "").split("/").pop();
    if (!questionId) return res.status(200).send("no question id");

    const q = await getQuestion(questionId);

    // Solo respondemos preguntas que estan SIN responder.
    if (q.status !== "UNANSWERED" && q.status !== "ASKED") {
      return res.status(200).send("ya respondida / no aplica");
    }

    const texto = elegirRespuesta(q.text, q.item_id);

    // Si no hay respuesta (fallback en null), la dejamos para responder a mano.
    if (!texto) return res.status(200).send("sin match, queda manual");

    await answerQuestion(questionId, texto);
    return res.status(200).send("respondida");
  } catch (err) {
    // Devolvemos 200 igual para que ML no reintente en loop; logueamos el error.
    console.error("Error procesando notificacion:", err);
    return res.status(200).send("error logueado");
  }
}
