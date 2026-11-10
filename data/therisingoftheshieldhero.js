// Detalles de The Rising of the Shield Hero (la ficha básica está en data/catalogo-auto.js)
// Numeración del anime seguida: T1 = 1–25, T2 = 26–38, T3 = 39–50, T4 = 51–62.
registrarSerie({
  id: "therisingoftheshieldhero",
  // Colores de la serie en su rastreador (claro / oscuro): verde esmeralda del escudo y rojizo de Raphtalia
  tema: {
    claro:  { accent: "#1f8a4c", accentRgb: "31, 138, 76", accentDeep: "#0f4d2a", accent2: "#a8452f", onAccent: "#ffffff" },
    oscuro: { accent: "#4fd18b", accentRgb: "79, 209, 139", accentDeep: "#1f8a4c", accent2: "#ff8a65", onAccent: "#04140b" }
  },
  animeTotal: 62,   // 25 + 13 + 12 + 12 (la T5 se estrena en 2027)
  mangaTotal: 0,    // el origen es una novela ligera, no un manga
  // [nombre, desde, hasta, relleno (0/1), null, null]
  arcos: [
    ["Invocación y las primeras olas", 1, 12, 0, null, null],
    ["La princesa Melty y la Iglesia de los Tres Héroes", 13, 21, 0, null, null],
    ["Las islas Cal Mira", 22, 25, 0, null, null],
    ["La Tortuga Espiritual", 26, 31, 0, null, null],          // T2 1–6
    ["El mundo de Kizuna", 32, 38, 0, null, null],             // T2 7–13
    ["Zeltoble y los hermanos tigre blanco", 39, 41, 0, null, null], // T3 1–3
    ["Los héroes caídos", 42, 50, 0, null, null],              // T3 4–12
    ["Siltvelt", 51, 56, 0, null, null],                       // T4 1–6
    ["Q'ten Lo", 57, 62, 0, null, null]                        // T4 7–12
  ],
  relleno: [],
  nota: "Incluye las cuatro temporadas de TV emitidas hasta noviembre de 2026 con numeración continua: T1 (25 capítulos, 1–25, 2019; vols. 1–5 y parte del 6 de la novela), T2 (13, aquí 26–38, 2022; vols. 6–9), T3 (12, aquí 39–50, 2023; vols. 10–12) y T4 (12, aquí 51–62, julio–septiembre de 2025; vols. 13–14). La T5 está anunciada para 2027. No hay películas propias (la de Isekai Quartet es un crossover y no cuenta). El origen es la novela ligera de Aneko Yusagi, no un manga, así que no hay rejilla de manga ni equivalencias por capítulo. Los nombres de los arcos son descriptivos y no oficiales, según los resúmenes de la Wikipedia inglesa y los títulos de los capítulos; son aproximados los límites 12/13 (el atentado contra Melty empieza al final del 12) y 41/42, y el arco «Los héroes caídos» agrupa la recuperación de Motoyasu, Ren e Itsuki, el Dragón Emperador (45–47) y el anuncio del linaje de Raphtalia (50). Sin relleno según Anime Filler List (el 7 es mixto y cuenta como canon; la lista solo cubre la T1). Fuentes: Wikipedia (inglés), Anime Filler List, MyAnimeList y prensa (Anime News Network, Anime Corner)."
});
