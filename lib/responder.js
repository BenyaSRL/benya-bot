// Decide que responder segun el texto de la pregunta.
import { REGLAS, FALLBACK, REGLAS_POR_ITEM } from "../config/respuestas.js";

// Saca acentos y pasa a minuscula para comparar sin sorpresas.
function normalizar(texto) {
  return (texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

// Devuelve el texto de respuesta, o null si no hay match y no se quiere fallback.
export function elegirRespuesta(pregunta, itemId) {
  const texto = normalizar(pregunta);

  // Reglas especificas del producto PRIMERO, y despues SIEMPRE las generales.
  // (Antes se usaba "item || generales", lo que descartaba las generales para
  //  productos con reglas por item -> preguntas de compatibilidad/modelo caian
  //  al fallback. Ahora se concatenan: item primero, generales como respaldo.)
  const itemRules = (REGLAS_POR_ITEM && REGLAS_POR_ITEM[itemId]) || [];
  const reglas = [...itemRules, ...REGLAS];

  for (const regla of reglas) {
    const pega = regla.keywords.some((k) => texto.includes(normalizar(k)));
    if (pega) return regla.answer;
  }

  // Sin coincidencia: usamos el fallback (o null para no responder solo).
  return FALLBACK || null;
}
