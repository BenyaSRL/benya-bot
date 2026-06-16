// =======================================================================
//  TABLA DE RESPUESTAS AUTOMATICAS  (este es el archivo que vas a editar)
// =======================================================================
//
//  Como funciona:
//  - El bot lee cada pregunta, la pasa a minuscula y le saca los acentos.
//  - Recorre las reglas DE ARRIBA HACIA ABAJO y usa la PRIMERA que matchee.
//  - Una regla matchea si la pregunta CONTIENE alguna de sus "keywords".
//  - Si ninguna regla matchea, responde con FALLBACK.
//
//  Consejos:
//  - Pone las reglas mas especificas arriba y las generales abajo.
//  - Las keywords van sin acento y en minuscula (el bot ya normaliza).
//  - Revisa las respuestas: algunas tienen datos que TENES que confirmar
//    (marcadas con  <-- REVISAR ).
//
//  IMPORTANTE: el bot responde solo. Una respuesta mal puesta sale publicada.
//  Si una pregunta es delicada (precio especial, reclamo, etc.) conviene
//  que caiga en el FALLBACK y la contestes vos a mano.
// =======================================================================

// OJO con el ORDEN: las reglas mas especificas van ARRIBA. Las keywords muy
// genericas (ej "tenes", "hay") se evitan a proposito porque aparecen en
// cualquier pregunta y harian matchear la regla equivocada.
export const REGLAS = [
  {
    // Android Auto (va antes que stock para que no lo "robe" otra regla)
    keywords: ["android auto", "android", "androide"],
    answer:
      "¡Hola! Sí, el equipo funciona tanto para CarPlay (iPhone) como para Android Auto. Tu auto tiene que tener CarPlay/Android Auto de fábrica (con cable) y este adaptador lo vuelve inalámbrico. ¡Saludos!",
  },
  {
    // Inalambrico / wireless / por cable
    keywords: ["inalambrico", "wireless", "sin cable", "por cable", "bluetooth"],
    answer:
      "¡Hola! El adaptador conecta de forma inalámbrica con tu auto una vez configurado. Cualquier duda quedamos a disposición. ¡Saludos!",
  },
  {
    // Compatibilidad / sirve para mi auto
    keywords: ["compatible", "compatibilidad", "sirve para", "anda en", "funciona en", "mi auto", "que modelo", "para autos"],
    answer:
      "¡Hola! Funciona en cualquier auto que YA tenga CarPlay de fábrica (con cable). Si tu pantalla original soporta CarPlay, el adaptador lo vuelve inalámbrico. Decime marca y modelo así te confirmo. ¡Saludos!",
  },
  {
    // Instalacion / como se usa
    keywords: ["instala", "instalacion", "se conecta", "como se usa", "configura", "enchufa"],
    answer:
      "¡Hola! La instalación es muy simple: se conecta al puerto USB del auto y se vincula una sola vez. Viene con instructivo y te guiamos si lo necesitás. ¡Saludos!",
  },
  {
    // Envio / demoras / cuando llega
    keywords: ["envio", "enviar", "llega", "demora", "cuanto tarda", "correo", "despacho", "mandan"],
    answer:
      "¡Hola! Hacemos el envío por MercadoEnvíos. Apenas se acredita el pago lo despachamos, y el tiempo de entrega te lo muestra la misma publicación según tu domicilio. ¡Saludos!",
  },
  {
    // Garantia
    keywords: ["garantia", "falla", "anda mal", "defecto"],
    answer:
      "¡Hola! El producto tiene garantía. Ante cualquier inconveniente nos escribís y te lo resolvemos. ¡Saludos!",
  },
  {
    // Factura
    keywords: ["factura a", "factura", "responsable inscripto"],
    answer:
      "¡Hola! Sí, emitimos factura. Al finalizar la compra cargás tus datos fiscales y la generamos. ¡Saludos!",
  },
  {
    // Disponibilidad / stock (va ULTIMA: keywords precisas para no pisar a las otras)
    keywords: ["stock", "disponible", "disponibilidad", "quedan", "hay unidades", "ultima unidad"],
    answer:
      "¡Hola! Sí, tenemos stock disponible y entrega inmediata. Podés comprar con total tranquilidad. ¡Saludos!",
  },
];

// Respuesta cuando NINGUNA regla matchea.
// Pone null si preferis que esas preguntas NO se respondan solas y contestarlas vos.
export const FALLBACK =
  "¡Hola! Gracias por tu consulta. Te respondemos a la brevedad con todos los detalles. ¡Saludos!";

// (Opcional) Reglas distintas por publicacion. La clave es el ID del item (ej "MLA123...").
// Si una pregunta llega de un item que esta aca, se usan estas reglas en vez de REGLAS.
// Dejalo vacio {} si no lo necesitas.
export const REGLAS_POR_ITEM = {
  // "MLA1234567890": [ { keywords: ["stock"], answer: "..." } ],
};
