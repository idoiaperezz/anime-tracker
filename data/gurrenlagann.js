// Detalles de Gurren Lagann / Tengen Toppa Gurren Lagann (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "gurrenlagann",
  // Colores de la serie en su rastreador (claro / oscuro): rojo del Gurren Lagann y azul espiral de Simon y Kamina
  tema: {
    claro:  { accent: "#d9361c", accentRgb: "217, 54, 28", accentDeep: "#771d0f", accent2: "#1971c2", onAccent: "#ffffff" },
    oscuro: { accent: "#ff6b47", accentRgb: "255, 107, 71", accentDeep: "#d9361c", accent2: "#4dabf7", onAccent: "#1c0703" }
  },
  animeTotal: 27,
  mangaTotal: 0,     // anime original de Gainax; el manga es una adaptación posterior
  // [nombre, desde, hasta, relleno (0/1), null, null]
  arcos: [
    ["De la aldea subterránea a la superficie", 1, 8, 0, null, null],
    ["La Brigada Dai-Gurren contra Teppelin", 9, 15, 0, null, null],
    ["Recopilatorio", 16, 16, 1, null, null],
    ["Siete años después: Kamina City", 17, 22, 0, null, null],
    ["La batalla final contra los Antiespirales", 23, 27, 0, null, null]
  ],
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Gurren Lagann the Movie: Childhood's End", anio: 2008, despues: 15, tipo: "recopilatorio", nota: "Estrenada en Japón el 6 de septiembre de 2008. Resume y reanima la primera mitad de la serie (hasta la caída de Teppelin) con escenas nuevas. Qué capítulos abarca es aproximado." },
    { titulo: "Gurren Lagann the Movie: The Lights in the Sky Are Stars", anio: 2009, despues: 27, tipo: "recopilatorio", nota: "Estrenada en Japón el 25 de abril de 2009. Resume la segunda mitad con mucha animación nueva y una batalla final ampliada. Qué capítulos abarca es aproximado." }
  ],
  nota: "Serie de TV de Gainax (27 capítulos, 1 de abril–30 de septiembre de 2007), dirigida por Hiroyuki Imaishi y escrita por Kazuki Nakashima. Es un anime original: el manga es una adaptación posterior, así que no hay rejilla de manga. El capítulo 16 es un recopilatorio (el único relleno según Anime Filler List y Wikipedia). El capítulo 6 se emitió recortado por escenas poco apropiadas; la versión íntegra está en las ediciones domésticas. Los tramos son descriptivos y no oficiales, a partir de los puntos de giro de Wikipedia: la muerte de Kamina (8), la caída de Teppelin (15), el salto de siete años (17) y el anuncio de la batalla final (23). Las películas son dos recopilatorios con escenas nuevas; dónde empieza y acaba cada una es aproximado. Fuentes: Wikipedia (inglés), Anime Filler List y MyAnimeList."
});
