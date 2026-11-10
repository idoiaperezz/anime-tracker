// Detalles de KonoSuba: God's Blessing on This Wonderful World! (la ficha básica está en data/catalogo-auto.js)
// Numeración del anime seguida: temporada 1 = 1–10, temporada 2 = 11–20, temporada 3 = 21–31.
registrarSerie({
  id: "konosubagodsblessingonthiswonderfulworld",
  // Temporadas (para la barra de temporadas del rastreador): [nombre, primer capítulo, último capítulo]
  temporadas: [
    ["Temporada 1", 1, 10],
    ["Temporada 2", 11, 20],
    ["Temporada 3", 21, 31]
  ],
  // Colores de la serie en su rastreador (claro / oscuro): azul de Aqua y carmesí de Megumin
  tema: {
    claro:  { accent: "#1e74c9", accentRgb: "30, 116, 201", accentDeep: "#0d3d70", accent2: "#c2272d", onAccent: "#ffffff" },
    oscuro: { accent: "#5aaeff", accentRgb: "90, 174, 255", accentDeep: "#1e74c9", accent2: "#ff6b6b", onAccent: "#04101c" }
  },
  animeTotal: 31,   // 10 + 10 + 11 (la temporada 4 se estrena en 2027)
  mangaTotal: 0,    // el origen es una novela ligera, no un manga
  // [nombre, desde, hasta, relleno (0/1), null, null]
  arcos: [
    ["La llegada a Axel y Beldia", 1, 6, 0, null, null],
    ["El invierno en Axel y la Destroyer", 7, 10, 0, null, null],
    ["El juicio de Kazuma, la mazmorra y Vanir", 11, 16, 0, null, null],   // T2 1–6
    ["El viaje a Arcanletia", 17, 20, 0, null, null],                      // T2 7–10
    ["La capital y la princesa Iris", 21, 26, 0, null, null],              // T3 1–6
    ["La hidra del lago y la boda de Darkness", 27, 31, 0, null, null]     // T3 7–11
  ],
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "KonoSuba: God's Blessing on This Wonderful World! Legend of Crimson", anio: 2019, despues: 20, tipo: "canon", nota: "Estrenada el 30 de agosto de 2019. Adapta el volumen 5 de la novela ligera (el viaje a la aldea de los demonios carmesí de Megumin y Yunyun), entre la temporada 2 y la 3, que empieza justo después de sus hechos." }
  ],
  nota: "Incluye las tres temporadas de TV con numeración seguida: temporada 1 (2016, 10 capítulos, 1–10), temporada 2 (2017, 10, aquí 11–20) y temporada 3 (abril–junio de 2024, 11, aquí 21–31); AniList solo suma las dos primeras (20). La temporada 4 está anunciada para 2027 y aún no se ha emitido (noviembre de 2026). Quedan fuera las OVA (la de la gargantilla de 2016, la de las obras de arte de 2017 y las dos «Bonus Stage» de la temporada 3, estrenadas en cines en 2025) y el spin-off «An Explosion on This Wonderful World!» (Megumin's Explosion, 2023). El origen es la novela ligera de Natsume Akatsuki, no un manga, así que no hay rejilla de manga ni equivalencias por capítulo; las temporadas 1 y 2 adaptan los volúmenes 1–4, la película el 5 y la temporada 3 los volúmenes 6 y 7. Como la novela no tiene arcos con nombre oficial, los tramos son descriptivos y no oficiales, cortados por los hechos de cada capítulo (derrota de Beldia en el 6, la Destroyer en el 10, salida hacia Arcanletia en el 17, despedida de Iris en el 26). Sin relleno según Anime Filler List. Fuentes: Wikipedia (inglés y japonés), Anime Filler List, MyAnimeList, Anime News Network, Sportskeeda y prensa sobre el anuncio de la temporada 4 (Anime Corner, AniTrendz)."
});
