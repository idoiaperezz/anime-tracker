// Detalles de Haikyu!! (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "haikyu",
  // Colores de la serie en su rastreador (claro / oscuro): naranja y negro del Karasuno, azul de cielo de fondo
  tema: {
    claro:  { accent: "#c2410c", accentRgb: "194, 65, 12", accentDeep: "#7c2d12", accent2: "#1e3a5f", onAccent: "#ffffff" },
    oscuro: { accent: "#ff8a1f", accentRgb: "255, 138, 31", accentDeep: "#c2410c", accent2: "#7dd3fc", onAccent: "#1a0d02" }
  },
  animeTotal: 85,   // 25 (T1) + 25 (T2) + 10 (T3, Karasuno vs Shiratorizawa) + 25 (T4, To the Top)
  mangaTotal: 402,  // 402 capítulos en 45 tomos (AniList cuenta 404, probablemente con extras)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Temporada 1
    ["Formación del equipo del Karasuno", 1, 13, 0, 1, 34],
    ["Torneo Interescolar: preliminares de Miyagi", 14, 25, 0, 35, 71],
    // Temporada 2
    ["Campamento de entrenamiento en Tokio", 26, 36, 0, 72, 98],
    ["Preliminares del Torneo de Primavera", 37, 43, 0, 99, 125],
    ["Semifinal: Karasuno vs. Aoba Johsai", 44, 50, 0, 126, 149],
    // Temporada 3: Karasuno vs Shiratorizawa
    ["Final de Miyagi: Karasuno vs. Shiratorizawa", 51, 60, 0, 150, 190],
    // Temporada 4: To the Top (los caps. 191-206, la fase de Tokio, solo están en la OVA «Riku vs Kuu»)
    ["Campamentos de selección", 61, 65, 0, 207, 220],
    ["Partido de práctica contra el Date Tech", 66, 68, 0, 221, 228],
    ["Torneo Nacional de Primavera: Tsubakihara", 69, 72, 0, 229, 245],
    ["Torneo Nacional de Primavera: Inarizaki", 73, 85, 0, 246, 292]
  ],
  // Parte del manga que la serie de TV no adapta
  soloManga: [
    ["Torneo Nacional: Karasuno vs. Nekoma (en película)", null, null, 0, 293, 325],
    ["Resto del Torneo Nacional y salto temporal (aún sin anime)", null, null, 0, 326, 402]
  ],
  // Sin relleno (Anime Filler List y Anime Filler Guide)
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Haikyu!! The Movie: Ending and Beginning", anio: 2015, despues: 13, tipo: "recopilatorio", nota: "Resumen de la primera mitad de la temporada 1 (hasta el partido de práctica contra el Nekoma)." },
    { titulo: "Haikyu!! The Movie: Winners and Losers", anio: 2015, despues: 25, tipo: "recopilatorio", nota: "Resumen de la segunda mitad de la temporada 1 (Interescolar: Date Tech y Aoba Johsai)." },
    { titulo: "Haikyu!! The Movie: Talent and Sense", anio: 2017, despues: 50, tipo: "recopilatorio", nota: "Resumen de la temporada 2 centrado en el partido contra el Aoba Johsai, con alguna escena nueva." },
    { titulo: "Haikyu!! The Movie: Battle of Concepts", anio: 2017, despues: 60, tipo: "recopilatorio", nota: "Resumen de la temporada 3 (Karasuno vs. Shiratorizawa), con alguna escena nueva." },
    { titulo: "Haikyu!! The Dumpster Battle (La batalla decisiva del basurero)", anio: 2024, despues: 85, tipo: "canon", manga: [293, 325], nota: "1.ª película de «Haikyu!! Final»: el partido Karasuno vs. Nekoma del Torneo Nacional. Final aproximado: las fuentes lo sitúan entre el cap. 324 y el 326. La 2.ª, «Haikyu!! vs. The Little Giant», se estrena en 2027 (sin fecha a noviembre de 2026)." }
  ],
  nota: "Incluye las cuatro temporadas de TV (85 capítulos numerados de forma continua: 25 + 25 + 10 de «Karasuno vs Shiratorizawa» + 25 de «To the Top»; AniList solo suma 60) y el manga completo (402 capítulos en 45 tomos; AniList indica 404). Los nombres de los arcos son descriptivos, en español, según los partidos y torneos de cada temporada. Anime Filler List y Anime Filler Guide no registran relleno. La serie de TV se salta los caps. 191-206 (fase final de Tokio: Nekoma y Fukurodani), adaptados en la OVA «Riku vs Kuu» (2020), que no cuenta como capítulos; por eso la rejilla del manga salta del 190 al 207. El manga desde el cap. 293 queda como «solo manga»: el partido contra el Nekoma está en la película de 2024 y el resto (desde el Kamomedai) aún no tiene anime; la película «Haikyu!! vs. The Little Giant» está anunciada para 2027. Las cuatro películas de 2015 y 2017 son recopilatorios de las temporadas 1-3. Totales según Wikipedia (inglés y japonés). Equivalencias según la conversión capítulo a capítulo de Anime Filler Guide, la lista de tomos de Wikipedia (el tomo 12, «Comienza el torneo», empieza en el cap. 99) y Critical Hits; son aproximadas (1-2 capítulos de margen) dentro de cada arco: por ejemplo, Critical Hits sitúa el inicio del Torneo de Primavera en el cap. 97 y Anime Filler Guide en el 99."
});
