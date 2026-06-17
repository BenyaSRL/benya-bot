export const REGLAS = [
  // ─── CHEVROLET INCOMPATIBLES CONFIRMADOS ──────────────────────────────────
  {
    keywords: ["onix", "tracker", "prisma", "spin", "cobalt", "joy", "agile", "s10", "captiva"],
    answer: "¡Hola! Lamentablemente los Chevrolet con sistema MyLink (Onix, Tracker, Prisma, Spin, Cobalt, Joy, Ágile, S10, Captiva) NO son compatibles con nuestros adaptadores. El sistema MyLink de Chevrolet no tiene CarPlay ni Android Auto de fábrica, por lo que el adaptador no va a funcionar. Si tenés otro auto o dudas sobre otro modelo, ¡consultanos sin problema! 😊"
  },

  // ─── CHEVROLET GENÉRICO (Cruze puede funcionar) ────────────────────────────
  {
    keywords: ["chevrolet", "chevy", "my link", "mylink", "cruze"],
    answer: "¡Hola! Depende del modelo y año. Los Chevrolet con sistema MyLink (Onix, Tracker, Prisma, etc.) NO son compatibles. El Cruze 2017 en adelante con CarPlay/Android Auto de fábrica SÍ es compatible. La regla general: si hoy conectás el celu con cable USB y te funciona CarPlay o Android Auto → el adaptador va a andar. ¿Cuál es tu modelo y año exacto?"
  },

  // ─── USB-C / FICHA C ───────────────────────────────────────────────────────
  {
    keywords: ["usb c", "usb-c", "tipo c", "tipo-c", "ficha c", "puerto c", "usbc", "conector c", "entrada c"],
    answer: "¡Hola! Depende del producto que estés mirando:\n\n• Adaptador 4 en 1 (Q1AS-4) → SÍ tiene puerto USB-C nativo ✅\n• Mini CarPlay M21 → viene con adaptador USB-C incluido ✅\n• CarPlay Premium Q1J → solo USB-A, no tiene USB-C ❌\n• TBOX → solo USB-A ❌\n\n¿Cuál estás viendo? Así te confirmo si es el indicado para tu auto. 😊"
  },

  // ─── YOUTUBE / NETFLIX / STREAMING ────────────────────────────────────────
  {
    keywords: ["youtube", "netflix", "streaming", "ver videos", "ver pelis", "prime video", "disney", "video"],
    answer: "¡Hola! Depende del modelo:\n\n• Adaptador 4 en 1 (Q1AS-4) → Sí, podés ver YouTube/Netflix replicando la pantalla del celular ✅\n• TBOX → Sí, tiene Android propio (sin necesitar el celu) ✅\n• CarPlay Premium Q1J / Mini M21 → No permiten ver YouTube/Netflix ❌\n\n¿Querés que te oriente en cuál se adapta mejor a lo que buscás?"
  },

  // ─── MIRRORLINK / REPLICAR PANTALLA ────────────────────────────────────────
  {
    keywords: ["mirrorlink", "mirror link", "replicar", "espejo", "airplay", "screen mirror", "duplicar pantalla", "reflejar"],
    answer: "¡Hola! Solo algunos modelos permiten replicar pantalla:\n\n• Adaptador 4 en 1 (Q1AS-4) → SÍ tiene MirrorLink y Airplay ✅\n• TBOX → SÍ, además tiene Android propio para usar sin celular ✅\n• CarPlay Q1J / Mini M21 → No incluyen MirrorLink ❌\n\n¿Cuál te interesa o en qué auto lo querés usar?"
  },

  // ─── VER EN MOVIMIENTO ─────────────────────────────────────────────────────
  {
    keywords: ["en movimiento", "mientras manejo", "andando", "manejando", "en marcha", "mientras circulo", "circulando"],
    answer: "¡Hola! Sí, los adaptadores funcionan mientras manejás. CarPlay/Android Auto inalámbrico funciona todo el tiempo, incluyendo GPS, música y Waze/Google Maps mientras circulás. ¿Tenés alguna duda puntual del modelo?"
  },

  // ─── ANDROID AUTO / CARPLAY GENERAL ────────────────────────────────────────
  {
    keywords: ["android auto", "carplay", "car play", "android"],
    answer: "¡Hola! Todos nuestros adaptadores convierten tu CarPlay o Android Auto con cable en INALÁMBRICO. Requisito: tu auto ya debe tener CarPlay o Android Auto funcionando con cable de fábrica. Si conectás el celu con USB hoy y funciona → el adaptador va a andar perfectamente. ¿Querés saber más sobre algún modelo en particular?"
  },

  // ─── WHATSAPP / MENSAJES / LLAMADAS ────────────────────────────────────────
  {
    keywords: ["whatsapp", "mensajes", "notificacion", "sms", "llamadas", "llamar", "wsp"],
    answer: "¡Hola! Sí, al usar CarPlay o Android Auto inalámbrico seguís teniendo todas las funciones de siempre: WhatsApp, llamadas, notificaciones, música, GPS, todo igual que con cable pero sin el cable. 😊"
  },

  // ─── WIFI / INTERNET ───────────────────────────────────────────────────────
  {
    keywords: ["wifi", "wi-fi", "internet", "datos", "señal", "conexion", "conectar"],
    answer: "¡Hola! Los adaptadores se conectan al celular por WiFi y Bluetooth (tecnología de Apple/Google). No necesitan internet propio, usan los datos de tu celular igual que siempre. La conexión es automática cada vez que subís al auto."
  },

  // ─── VELOCIDAD / DEMORA DE CONEXIÓN ────────────────────────────────────────
  {
    keywords: ["tarda", "cuanto demora", "tiempo de conexion", "rapido", "lento", "lag", "delay", "demora conectar"],
    answer: "¡Hola! La primera vez el emparejamiento tarda unos 30-60 segundos. Después, cada vez que subís al auto la conexión es automática en 5-10 segundos. Es mucho más cómodo que conectar el cable cada vez. 😊"
  },

  // ─── PANTALLA COMPLETA ─────────────────────────────────────────────────────
  {
    keywords: ["pantalla completa", "toda la pantalla", "ocupa toda", "resolucion", "calidad imagen"],
    answer: "¡Hola! Sí, ocupa toda la pantalla de tu auto igual que con cable. La calidad de imagen y audio es idéntica al uso con cable. No hay diferencia visual."
  },

  // ─── TOYOTA ────────────────────────────────────────────────────────────────
  {
    keywords: ["toyota", "corolla", "hilux", "sw4", "yaris", "camry", "rav4", "fortuner", "rush", "prado"],
    answer: "¡Hola! Toyota es compatible, siempre que el auto tenga CarPlay o Android Auto de fábrica funcionando con cable. Por ejemplo: Corolla XEI, Hilux con sistema multimedia, etc. La regla: si hoy enchufás el celu con USB y funciona CarPlay/Android Auto → el adaptador va a funcionar. ¿Cuál es tu modelo y año?"
  },

  // ─── PEUGEOT ───────────────────────────────────────────────────────────────
  {
    keywords: ["peugeot", "208", "308", "2008", "3008", "5008", "partner", "expert"],
    answer: "¡Hola! Peugeot es compatible. Los modelos 208 Allure 2020 en adelante y 2008/3008 con CarPlay de fábrica funcionan perfectamente. La regla: si hoy conectás el celu con cable y funciona CarPlay → el adaptador va a andar. ¿Cuál es tu modelo y año?"
  },

  // ─── INALÁMBRICO / WIRELESS ────────────────────────────────────────────────
  {
    keywords: ["inalambrico", "wireless", "sin cable", "bluetooth", "inalámbrico"],
    answer: "¡Hola! Exactamente, todos nuestros adaptadores son inalámbricos. Conectan por WiFi + Bluetooth y la reconexión es automática cada vez que subís al auto. No necesitás enchufar nada más. 😊"
  },

  // ─── PROBLEMAS DE CONEXIÓN / NO FUNCIONA ──────────────────────────────────
  {
    keywords: ["no conecta", "no funciona", "problema", "no anda", "tilda", "traba", "congela", "reinicia", "error", "falla"],
    answer: "¡Hola! Vamos a resolverlo. Probá estos pasos:\n1️⃣ Desenchufá el adaptador del USB del auto y volvé a enchufarlo\n2️⃣ En el celu, desactivá el WiFi y Bluetooth y volvé a activarlos\n3️⃣ Si no mejora, hacé un reseteo del adaptador (botón reset o lo desenchufás 10 segundos)\n4️⃣ Verificá que en tu celu esté activo el acceso a CarPlay/Android Auto\n\nSi el problema persiste, tenemos garantía y te ayudamos a solucionarlo. ¡Escribinos! 😊"
  },

  // ─── COMPATIBILIDAD GENERAL ────────────────────────────────────────────────
  {
    keywords: ["compatible", "compatibilidad", "sirve para", "funciona con", "sirve", "funciona", "anda con", "va con"],
    answer: "¡Hola! La regla de compatibilidad es simple: tu auto debe tener CarPlay o Android Auto ORIGINAL DE FÁBRICA funcionando con cable USB. Si hoy conectás el celular con el cable y funciona → el adaptador va a funcionar perfectamente. Si el auto no tiene CarPlay/Android Auto de fábrica, ningún adaptador lo va a agregar. ¿En qué auto lo querés usar?"
  },

  // ─── INSTALACIÓN / USO ─────────────────────────────────────────────────────
  {
    keywords: ["instala", "instalacion", "se conecta", "como se usa", "uso", "configurar", "configuracion", "setup", "armar", "poner"],
    answer: "¡Hola! La instalación es muy fácil, no hace falta ningún técnico:\n1️⃣ Enchufás el adaptador al puerto USB de tu auto\n2️⃣ Lo emparejás con tu celular una sola vez (primera vez ~30 seg)\n3️⃣ ¡Listo! Desde ahí la conexión es automática cada vez que subís\n\nViene con instrucciones en español. ¿Tenés alguna duda puntual?"
  },

  // ─── CALIDAD / ORIGINAL ────────────────────────────────────────────────────
  {
    keywords: ["original", "calidad", "premium", "trucho", "chino", "garantia de calidad", "buena calidad", "marca"],
    answer: "¡Hola! Son productos importados de calidad, los mismos que se venden en Europa y EE.UU. Tenemos cientos de ventas con excelentes calificaciones. El más vendido (Q1J) lleva más de 400 unidades vendidas. Todos cuentan con garantía oficial y devolución gratis si hay algún problema. 😊"
  },

  // ─── ENVÍO ─────────────────────────────────────────────────────────────────
  {
    keywords: ["envio", "enviar", "llega", "demora", "despacho", "cuando llega", "cuando mandan", "flex", "correo", "andreani"],
    answer: "¡Hola! Despachamos por Mercado Envíos con Flex (llega el mismo día o al día siguiente en AMBA) o correo según tu zona. Una vez confirmado el pago, preparamos el pedido en el día. ¿Estás en AMBA o en el interior?"
  },

  // ─── GARANTÍA / DEVOLUCIÓN ─────────────────────────────────────────────────
  {
    keywords: ["garantia", "falla", "anda mal", "defecto", "devolucion", "devolver", "cambio", "cambiar"],
    answer: "¡Hola! Tenés 30 días de devolución gratis sin preguntas a través de MercadoLibre. Si el producto tiene algún defecto o no funciona como esperabas, coordinamos la devolución y el reembolso completo. También te ayudamos a solucionar cualquier problema técnico antes de llegar a ese punto. 😊"
  },

  // ─── FACTURA ───────────────────────────────────────────────────────────────
  {
    keywords: ["factura a", "factura", "responsable inscripto", "iva", "cuit", "monotributo", "empresa"],
    answer: "¡Hola! Sí, emitimos factura. Si sos responsable inscripto necesitamos tu CUIT y razón social. Si sos consumidor final o monotributista también podemos emitirte comprobante. ¡Avisanos al momento de la compra!"
  },

  // ─── STOCK / DISPONIBILIDAD ────────────────────────────────────────────────
  {
    keywords: ["stock", "disponible", "disponibilidad", "hay", "tienen", "cuantos", "ultimo", "quedan"],
    answer: "¡Hola! El stock que ves publicado está disponible para entrega inmediata. Si el producto aparece activo en la publicación, tenemos stock. Ante cualquier duda, ¡consultanos!"
  },
];

export const FALLBACK = "¡Hola! ¿Cómo estás? Muchas gracias por tu consulta. En breve te respondemos con todos los detalles. ¡Saludos! 😊";

export const REGLAS_POR_ITEM = {

  // ─── Q1J — CarPlay/Android Auto Premium (USB-A only, sin YouTube/MirrorLink)
  "MLA1539098673": [
    {
      keywords: ["usb c", "usb-c", "tipo c", "tipo-c", "ficha c", "puerto c", "usbc", "conector c", "entrada c"],
      answer: "¡Hola! Este modelo (CarPlay Premium Q1J) tiene conector USB-A únicamente, no tiene USB-C. Si tu auto tiene puerto USB-C, te recomendamos el Adaptador 4 en 1 que sí tiene USB-C nativo, o el Mini M21 que viene con adaptador USB-C incluido. ¿Querés que te pase el link?"
    },
    {
      keywords: ["youtube", "netflix", "streaming", "ver videos", "mirrorlink", "mirror link", "replicar", "espejo", "airplay", "duplicar"],
      answer: "¡Hola! Este modelo (Q1J) convierte tu CarPlay/Android Auto a inalámbrico pero no permite ver YouTube, Netflix ni replicar la pantalla del celular. Si eso es lo que buscás, te recomendamos el Adaptador 4 en 1 (Q1AS-4) que sí incluye MirrorLink/Airplay y YouTube desde el celu, o el TBOX que tiene Android propio. ¿Te paso más info?"
    },
  ],

  // ─── Q1AS-4 — Adaptador 4 en 1 USB-A/C (YouTube/MirrorLink SÍ, USB-C SÍ)
  "MLA1696308779": [
    {
      keywords: ["usb c", "usb-c", "tipo c", "tipo-c", "ficha c", "puerto c", "usbc", "conector c", "entrada c"],
      answer: "¡Hola! Sí, este adaptador tiene conector DUAL: USB-A y USB-C nativos. Funciona con cualquier puerto USB de tu auto. ✅"
    },
    {
      keywords: ["youtube", "netflix", "streaming", "ver videos", "ver pelis", "prime video", "disney"],
      answer: "¡Hola! Sí, este modelo (4 en 1) permite ver YouTube, Netflix y cualquier app del celular en la pantalla de tu auto mediante MirrorLink/Airplay. Necesitás el celular conectado para que funcione. ✅"
    },
    {
      keywords: ["mirrorlink", "mirror link", "replicar", "espejo", "airplay", "duplicar pantalla"],
      answer: "¡Hola! Sí, este adaptador incluye MirrorLink y Airplay. Podés replicar toda la pantalla del celular en tu auto y ver YouTube, Netflix, etc. ✅"
    },
  ],

  // ─── M21 — Mini CarPlay Inalámbrico (USB-A + adaptador C incluido, sin YouTube)
  "MLA1723808209": [
    {
      keywords: ["usb c", "usb-c", "tipo c", "tipo-c", "ficha c", "puerto c", "usbc", "conector c", "entrada c"],
      answer: "¡Hola! Este modelo (Mini M21) es USB-A pero viene con un adaptador USB-C incluido en la caja, así que funciona también en autos con puerto USB-C. ✅"
    },
    {
      keywords: ["youtube", "netflix", "streaming", "ver videos", "mirrorlink", "mirror link", "replicar", "espejo", "airplay"],
      answer: "¡Hola! Este modelo (Mini M21) convierte tu CarPlay/Android Auto a inalámbrico pero no permite ver YouTube, Netflix ni replicar pantalla. Para eso te recomendamos el Adaptador 4 en 1 (Q1AS-4) o el TBOX. ¿Querés que te oriente?"
    },
    {
      keywords: ["android", "androide", "version android", "android version"],
      answer: "¡Hola! Para Android Auto inalámbrico con este modelo necesitás Android 11 o superior en el celular. Para iPhone/CarPlay no hay restricción de versión. ✅"
    },
  ],

  // ─── TBOX — Carlinkit TBOX (Android propio 4GB/32GB, YouTube sin celular)
  "MLA1696375355": [
    {
      keywords: ["youtube", "netflix", "streaming", "ver videos", "ver pelis", "prime video", "disney", "sin celular", "independiente", "sin el celu"],
      answer: "¡Hola! Sí, el TBOX tiene sistema Android propio (4GB RAM / 32GB almacenamiento). Podés instalar YouTube, Netflix, Spotify y cualquier app directamente, sin necesitar el celular conectado. Es el modelo más completo que tenemos. ✅"
    },
    {
      keywords: ["usb c", "usb-c", "tipo c", "tipo-c", "ficha c", "puerto c", "usbc", "conector c", "entrada c"],
      answer: "¡Hola! El TBOX usa conector USB-A. Si tu auto tiene USB-C, el Adaptador 4 en 1 (Q1AS-4) o el Mini M21 son mejores opciones para vos."
    },
    {
      keywords: ["instalar apps", "descargar apps", "play store", "google play", "aplicaciones"],
      answer: "¡Hola! Sí, el TBOX tiene Android completo con Play Store. Podés instalar YouTube, Netflix, Spotify, Waze, y cualquier app que uses. Funciona como un mini teléfono Android conectado a la pantalla de tu auto. ✅"
    },
  ],
};
