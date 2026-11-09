// Detalles de SPY x FAMILY (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "spyxfamily",
  // Colores de la serie en su rastreador (claro / oscuro): rojo carmesí de Yor y rosa de Anya
  tema: {
    claro:  { accent: "#c92a3a", accentRgb: "201, 42, 58", accentDeep: "#8a1325", accent2: "#c2255c", onAccent: "#ffffff" },
    oscuro: { accent: "#ff6b81", accentRgb: "255, 107, 129", accentDeep: "#c92a3a", accent2: "#f783ac", onAccent: "#1a0408" }
  },
  animeTotal: 50,   // 25 (T1, dos cours) + 12 (T2) + 13 (T3, oct.-dic. 2025)
  mangaTotal: 143,  // «Missions» numeradas publicadas a 8 de noviembre de 2026 (sin Extra ni Short Missions)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Temporada 1 (parte 1)
    ["Operación Strix", 1, 2, 0, 1, 2],
    ["El examen de admisión de Eden", 3, 5, 0, 3, 6],
    ["Primeros días en Eden", 6, 7, 0, 7, 10],
    ["La policía secreta", 8, 9, 0, 11, 14],
    ["La primera Stella", 10, 12, 0, 15, 17],
    // Temporada 1 (parte 2)
    ["Bond y el atentado (Proyecto Apple)", 13, 15, 0, 18, 23],
    ["Exámenes parciales", 16, 19, 0, 24, 28],
    ["El torneo de tenis Campbelldon", 20, 23, 0, 29, 34],
    // Temporadas 1 y 2 (la 2 empieza en el cap. 26)
    ["La reunión de los Imperial Scholars", 24, 28, 0, 35, 41],
    // Temporada 2
    ["El crucero de lujo", 29, 35, 0, 42, 57],
    // Temporadas 2 y 3 (la 3 empieza en el cap. 38)
    ["El pasado de Loid", 36, 40, 0, 58, 62],
    // Temporada 3
    ["Planes de amistad", 41, 42, 0, 63, 68],
    ["El secuestro del autobús de Eden", 43, 47, 0, 69, 78],
    ["Wheeler", 48, 50, 0, 79, 87]
  ],
  // Parte del manga que el anime aún no adapta
  soloManga: [
    ["Final de Wheeler y lo siguiente (aún sin anime)", null, null, 0, 88, 143]
  ],
  // Anime Filler List no registra relleno (los caps. 19 y 38 son mixtos y cuentan como canon)
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "SPY x FAMILY CODE: White", anio: 2023, despues: 37, tipo: "no-canon", nota: "Historia original (no está en el manga) supervisada por Tatsuya Endo; se estrenó en Japón el 22 de diciembre de 2023, al acabar la temporada 2. Es independiente: se puede ver tras la temporada 1, pero las guías recomiendan después de la 2 porque salen personajes presentados en ella." }
  ],
  nota: "Incluye las tres temporadas de TV (50 capítulos numerados de forma continua: 25 de la temporada 1 en dos cours, 12 de la 2 y 13 de la 3, emitida de octubre a diciembre de 2025; Wikipedia en inglés y japonés) y el manga hasta la «Mission» 143 (8 de noviembre de 2026; MANGA Plus, VIZ y MangaUpdates). El manga sigue en publicación. Decisión sobre la numeración: solo cuentan las «Missions» numeradas; las «Extra Missions» y las «Short Missions» (historias cortas sin número, algunas adaptadas en los caps. 10, 12, 16-17, 21, 26, 28 y 33 del anime) no entran en la rejilla, y las Missions publicadas en varias partes (la 62, en tres, y la 139, en dos) cuentan como una sola. Los nombres de los arcos son traducciones al español de los nombres en inglés que usan las guías (no hay títulos oficiales): el corte entre «El pasado de Loid» y «Planes de amistad» se ha movido al cap. 41 para que cada capítulo quede en un solo arco. Equivalencias según la guía de Anime Filler Guide (capítulo a capítulo), los rangos por arco de Daddy Jim y la guía de MyAnimeList (T1: caps. 1-38; T2: 39-59); la temporada 3 adapta hasta el cap. 87 (AnimeOshi y Omelete), así que el manga sigue en el 88. Son aproximadas: el anime reordena algunas Missions dentro de los capítulos. Anime Filler List no registra relleno."
});
