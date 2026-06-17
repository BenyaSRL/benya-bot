// =======================================================================
//  TABLA DE RESPUESTAS AUTOMATICAS  (este es el archivo que vas a editar)
// =======================================================================
//
//  Como funciona:
//  - El bot lee cada pregunta, la pasa a minuscula y le saca los acentos.
//  - Recorre las reglas DE ARRIBA HACIA ABAJO y usa la PRIMERA que matchee.
//  - Una regla matchea si la pregunta CONTIENE alguna de sus "keywords".
//  - Si ninguna regla matchea, responde con FALLBACK.
//  - El bot NO inventa: solo puede mandar uno de estos textos tal cual.
//
//  Consejos:
//  - Pone las reglas mas especificas arriba y las generales abajo.
//  - Las keywords van sin acento y en minuscula (el bot ya normaliza).
//  - El bot publica solo: una respuesta mal escrita sale tal cual.
//  - Si una pregunta es delicada (precio especial, reclamo, etc.) conviene
//    que caiga en el FALLBACK y la contestes vos a mano.
// =======================================================================

// OJO con el ORDEN: las reglas mas especificas van ARRIBA. Las keywords muy
// genericas (ej "tenes", "hay") se evitan a proposito porque aparecen en
// cualquier pregunta y harian matchear la regla equivocada.
export const REGLAS = [
  {
    // Chevrolet / MyLink (va PRIMERA para no caer en compatibilidad/android)
    keywords: ["chevrolet", "chevy", "my link", "mylink", "onix", "cruze", "tracker", "s10", "spin", "prisma", "cobalt", "joy", "agile"],
    answer:
      "¡Hola! ¿Cómo estás? Te cuento con total sinceridad: en los Chevrolet que usan el sistema MyLink a veces funciona perfecto y otras veces puede dar algún inconveniente, depende del modelo y de la versión del sistema. Si tu auto ya trae CarPlay o Android Auto original de fábrica y te funciona con el cable, hay muy buenas chances de que ande. Si querés, pasame el modelo y el año así te oriento mejor. ¡Cualquier cosa quedo a tu disposición!",
  },
  {
    // Android Auto / CarPlay (va antes que stock y compatibilidad)
    keywords: ["android auto", "android", "androide", "carplay", "car play"],
    answer:
      "¡Hola! ¿Qué tal? Sí, el adaptador es compatible tanto con CarPlay (iPhone) como con Android Auto. Lo único que se necesita es que tu auto ya traiga CarPlay o Android Auto original de fábrica (de los que funcionan con cable). El adaptador lo que hace es volverlo inalámbrico. ¡Cualquier duda quedo atento!",
  },
  {
    // Inalambrico / wireless
    keywords: ["inalambrico", "wireless", "sin cable", "bluetooth"],
    answer:
      "¡Hola! ¿Cómo va? El adaptador convierte tu CarPlay o Android Auto con cable en inalámbrico: lo conectás una sola vez y después se vincula solo cada vez que subís al auto. Es muy cómodo. ¡Quedo atento a cualquier consulta!",
  },
  {
    // Compatibilidad / sirve para mi auto
    keywords: ["compatible", "compatibilidad", "sirve para", "anda en", "funciona en", "mi auto", "que modelo", "para autos", "por cable"],
    answer:
      "¡Hola! ¿Cómo estás? El adaptador funciona en cualquier auto que ya tenga CarPlay o Android Auto original de fábrica (los que andan con cable). Un tip para estar seguros: si conectás tu celular con cable y te aparece CarPlay o Android Auto en la pantalla, entonces el adaptador te va a funcionar perfecto. Si me pasás la marca, el modelo y el año, te lo confirmo con gusto. ¡Saludos!",
  },
  {
    // Instalacion / como se usa
    keywords: ["instala", "instalacion", "se conecta", "como se usa", "configura", "enchufa"],
    answer:
      "¡Hola! ¿Qué tal? La instalación es muy sencilla: se conecta al puerto USB del auto y se vincula una sola vez. Viene con instructivo y, si te queda alguna duda, te vamos guiando sin problema. ¡Estamos para ayudarte!",
  },
  {
    // Calidad / producto premium / original
    keywords: ["original", "calidad", "premium", "trucho", "es bueno", "es de buena", "es de calidad", "chino"],
    answer:
      "¡Hola! ¿Cómo estás? Son productos premium, de muy buena calidad, y los testeamos siempre al terminar de fabricarse para asegurarnos de que lleguen funcionando perfecto. Comprás con total tranquilidad. ¡Cualquier consulta quedo a tu disposición!",
  },
  {
    // Envio / demoras / cuando llega
    keywords: ["envio", "enviar", "llega", "demora", "cuanto tarda", "correo", "despacho", "mandan"],
    answer:
      "¡Hola! ¿Cómo estás? Hacemos el envío por MercadoEnvíos. Apenas se acredita el pago lo despachamos, y el tiempo de entrega te lo muestra la misma publicación según tu domicilio. ¡Cualquier cosa quedo a tu disposición!",
  },
  {
    // Garantia (menciona premium / testeado)
    keywords: ["garantia", "falla", "anda mal", "defecto"],
    answer:
      "¡Hola! ¿Qué tal? Sí, el producto tiene garantía. Son productos premium y los testeamos siempre al terminar de fabricarse, así que comprás con tranquilidad. Ante cualquier inconveniente nos escribís y te lo resolvemos enseguida. ¡Saludos!",
  },
  {
    // Factura (solo C, NO A)
    keywords: ["factura a", "factura", "responsable inscripto", "iva"],
    answer:
      "¡Hola! ¿Cómo estás? Sí, emitimos factura C. Por el momento no hacemos factura A. Al finalizar la compra cargás tus datos y te generamos la factura C sin problema. ¡Cualquier duda quedo atento!",
  },
  {
    // Disponibilidad / stock (va ULTIMA: keywords precisas para no pisar a las otras)
    keywords: ["stock", "disponible", "disponibilidad", "quedan", "hay unidades", "ultima unidad"],
    answer:
      "¡Hola! ¿Qué tal? Sí, tenemos stock disponible con entrega inmediata. Podés comprar con total tranquilidad. ¡Quedo atento por si necesitás algo más!",
  },
];

// Respuesta cuando NINGUNA regla matchea.
// Pone null si preferis que esas preguntas NO se respondan solas y contestarlas vos.
export const FALLBACK =
  "¡Hola! ¿Cómo estás? Muchas gracias por tu consulta. En breve te respondemos con todos los detalles. ¡Saludos!";

// (Opcional) Reglas distintas por publicacion. La clave es el ID del item (ej "MLA123...").
// Si una pregunta llega de un item que esta aca, se usan estas reglas en vez de REGLAS.
// Dejalo vacio {} si no lo necesitas.
export const REGLAS_POR_ITEM = {
  // "MLA1234567890": [ { keywords: ["stock"], answer: "..." } ],
};
