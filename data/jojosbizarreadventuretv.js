// Detalles de JoJo's Bizarre Adventure (TV) (la ficha básica está en data/catalogo-auto.js)
// Numeración del anime seguida: Phantom Blood + Battle Tendency = 1–26, Stardust Crusaders = 27–74,
// Diamond is Unbreakable = 75–113, Golden Wind = 114–152, Stone Ocean = 153–190, Steel Ball Run = 191 en adelante.
registrarSerie({
  id: "jojosbizarreadventuretv",
  // Temporadas (para la barra de temporadas del rastreador): [nombre, primer capítulo, último capítulo]
  temporadas: [
    ["Phantom Blood y Battle Tendency", 1, 26],
    ["Stardust Crusaders", 27, 74],
    ["Diamond is Unbreakable", 75, 113],
    ["Golden Wind", 114, 152],
    ["Stone Ocean", 153, 190],
    ["Steel Ball Run", 191, 198]
  ],
  titulo: "JoJo's Bizarre Adventure", // sin el «(TV)» de AniList
  // Colores de la serie en su rastreador (claro / oscuro): morado y dorado
  tema: {
    claro:  { accent: "#7b2fbe", accentRgb: "123, 47, 190", accentDeep: "#4a1a75", accent2: "#b7791f", onAccent: "#ffffff" },
    oscuro: { accent: "#c084fc", accentRgb: "192, 132, 252", accentDeep: "#7b2fbe", accent2: "#ffd43b", onAccent: "#1a0a26" }
  },
  animeTotal: 198,   // 190 (partes 1–6, terminadas) + 8 de Steel Ball Run (en emisión, a 10-11-2026)
  mangaTotal: 998,   // numeración continua: partes 1–6 = 1–752, SBR = 753–847, JoJolion = 848–957, The JOJOLands = 958–998 (en publicación)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    ["Parte 1: Phantom Blood", 1, 9, 0, 1, 44],
    ["Parte 2: Battle Tendency", 10, 26, 0, 45, 113],
    ["Parte 3: Stardust Crusaders", 27, 50, 0, 114, 182],                      // SC 1–24
    ["Parte 3: Stardust Crusaders – Batalla en Egipto", 51, 74, 0, 183, 265],  // SC 25–48
    ["Parte 4: Diamond is Unbreakable", 75, 113, 0, 266, 439],
    ["Parte 5: Golden Wind", 114, 152, 0, 440, 594],
    ["Parte 6: Stone Ocean", 153, 190, 0, 595, 752],
    ["Parte 7: Steel Ball Run – 1st Stage", 191, 191, 0, 753, 763],            // SBR 1 (episodio de 47 min)
    ["Parte 7: Steel Ball Run – 2nd Stage (en emisión)", 192, 198, 0, 764, 780] // SBR 2–8
  ],
  soloManga: [
    ["Parte 7: Steel Ball Run (resto)", null, null, 0, 781, 847],
    ["Parte 8: JoJolion", null, null, 0, 848, 957],
    ["Parte 9: The JOJOLands (en publicación)", null, null, 0, 958, 998]
  ],
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "JoJo's Bizarre Adventure: Phantom Blood", anio: 2007, despues: 9, tipo: "no-canon", manga: [1, 44], nota: "Película del estudio A.P.P.P., estrenada en cines japoneses el 17 de febrero de 2007 (90 min) por el 20.º aniversario de la serie. Es otra adaptación de la Parte 1, independiente del anime de David Production, y nunca ha salido en vídeo doméstico ni en plataformas." }
  ],
  nota: "Incluye todo el anime de TV de David Production con numeración seguida: Phantom Blood + Battle Tendency 1–26 (temporada de 2012–2013; Phantom Blood 1–9, Battle Tendency 10–26), Stardust Crusaders 27–74 (24 + 24: el capítulo N de la segunda mitad, «Batalla en Egipto», es aquí el N + 50), Diamond is Unbreakable 75–113, Golden Wind 114–152, Stone Ocean 153–190 (12 + 12 + 14) y Steel Ball Run desde el 191. Steel Ball Run está en emisión en Netflix: el 1st Stage fue un único episodio de 47 minutos (19 de marzo de 2026) y el 2nd Stage se estrena semanalmente desde el 25 de septiembre de 2026 (11 episodios anunciados); a 10 de noviembre de 2026 van 8 (el último, el 6 de noviembre), así que animeTotal irá creciendo. No incluye las OVA de 1993–2002 ni la serie de imagen real. El manga usa la numeración continua de capítulos (la de JoJo Wiki y las guías «anime to manga»), porque Stone Ocean y las partes siguientes reinician su propia numeración y no permitirían rangos crecientes: Parte 1 = 1–44, Parte 2 = 45–113, Parte 3 = 114–265, Parte 4 = 266–439, Parte 5 = 440–594, Parte 6 = 595–752 (Stone Ocean 1–158), Parte 7 = 753–847 (SBR 1–95), Parte 8 = 848–957 (JoJolion 1–110) y Parte 9 = 958 en adelante (The JOJOLands 1–41). El corte de Stardust Crusaders en el cap. 183 (SC 70, «Iggy el Loco y N'Doul de Geb») sale de JoJo Wiki y del tomo 20 de Wikipedia. Es aproximado: la equivalencia de Steel Ball Run (ep. 1 = SBR 1–11; ep. 8 acaba en SBR 28, solo JoJo Wiki) y el total del manga (The JOJOLands, mensual en Ultra Jump, tiene 41 capítulos a noviembre de 2026; el 42 sale a finales de mes). Sin relleno según Anime Filler List y Anime Filler Guide. Los nombres de las partes se dejan en inglés, como en las ediciones españolas (Ivrea) y en Crunchyroll y Netflix; «Batalla en Egipto» traduce el subtítulo oficial de la segunda mitad. Fuentes: Wikipedia (inglés), JoJo Wiki, Anime Filler List, Anime Filler Guide, What's on Netflix, Anime Corner, But Why Tho y eiga.com."
});
