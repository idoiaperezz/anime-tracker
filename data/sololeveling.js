// Detalles de Solo Leveling (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "sololeveling",
  // Colores de la serie en su rastreador (claro / oscuro): azul eléctrico de las ventanas del Sistema y violeta de las sombras
  tema: {
    claro:  { accent: "#2f4fd6", accentRgb: "47, 79, 214", accentDeep: "#1a2a73", accent2: "#7b3fe4", onAccent: "#ffffff" },
    oscuro: { accent: "#5ea8ff", accentRgb: "94, 168, 255", accentDeep: "#2f4fd6", accent2: "#b28cff", onAccent: "#050a1a" }
  },
  animeTotal: 25,   // temporada 1 (12, 2024) + temporada 2 «Arise from the Shadow» (13, 2025); sin temporada 3 a noviembre de 2026
  mangaTotal: 179,  // manhwa (webtoon) terminado: 179 capítulos de la historia principal (las historias paralelas, 180-200, no cuentan)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Temporada 1 (2024)
    ["Mazmorra de rango D y redespertar", 1, 3, 0, 1, 12],
    ["Mazmorra instantánea y lagartos", 4, 6, 0, 13, 24],
    ["Mazmorra de los presos", 7, 9, 0, 25, 34],
    ["La banda de Yoo Jinho", 10, 10, 0, 35, 37],
    ["Cambio de clase", 11, 12, 0, 38, 45],
    // Temporada 2: Arise from the Shadow (2025)
    ["Puerta roja", 13, 14, 0, 46, 55],
    ["Castillo del Demonio", 15, 15, 0, 56, 61],
    ["Reevaluación y puerta del Gremio de Cazadores", 16, 17, 0, 62, 75],
    ["Regreso al Castillo del Demonio", 18, 21, 0, 76, 89],
    ["Isla de Jeju", 22, 25, 0, 90, 110]
  ],
  // Parte del manhwa que el anime no adapta
  soloManga: [
    ["Gremio Ahjin (aún sin anime)", null, null, 0, 111, 122],
    ["Segunda mazmorra doble", null, null, 0, 123, 131],
    ["Crisis de Japón", null, null, 0, 132, 139],
    ["Conferencia internacional de gremios", null, null, 0, 140, 149],
    ["Guerra de los Monarcas", null, null, 0, 150, 166],
    ["Batalla final", null, null, 0, 167, 177],
    ["Epílogo", null, null, 0, 178, 179]
  ],
  // Anime Filler List no tiene página de esta serie; Anime Filler Guide no registra relleno
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Solo Leveling -ReAwakening-", anio: 2024, despues: 12, tipo: "recopilatorio", nota: "Resumen de la temporada 1 más el estreno anticipado de los dos primeros capítulos de la temporada 2 (13-14). En Japón del 29 de noviembre al 12 de diciembre de 2024 y en EE. UU. y Canadá desde el 6 de diciembre." }
  ],
  nota: "Solo Leveling es una novela web coreana de Chugong, pero la referencia de lectura habitual es su adaptación a manhwa (webtoon de KakaoPage, 2018-2021), y es lo que se usa aquí como «manga»: 179 capítulos de la historia principal (el 179 es el último según Wikipedia en inglés, y las guías de arcos de Beebom, Epicstream y Destructoid acaban el epílogo en el 179). Las historias paralelas (caps. 180-200, arco de la academia) y la secuela Solo Leveling: Ragnarok no entran en la rejilla. Incluye las dos temporadas de TV de A-1 Pictures (25 capítulos numerados de forma continua: 12 en 2024 y 13 de «Arise from the Shadow» en 2025; Wikipedia en inglés y coreano); a noviembre de 2026 no hay temporada 3 anunciada con fecha, y la película «Solo Leveling: Beyond the System», anunciada en la Anime Expo de julio de 2026, aún no tiene fecha de estreno (Wikipedia, Sortiraparis y Philstar). La película «-ReAwakening-» (2024) es un recopilatorio de la temporada 1 con los caps. 13-14 de estreno (Wikipedia, Anitrendz y Anime News Network). Sin relleno: Anime Filler List no recoge la serie y Anime Filler Guide no marca ningún capítulo; el anime añade y recorta escenas sueltas (Comicbook), pero sin capítulos originales. Nombres de arco traducidos de los usados por los fans en inglés (D-Rank Dungeon, Reawakening, Instant Dungeon, Dungeon & Lizards, Dungeon & Prisoners, Yoo Jinho Raid Party, Job Change, Red Gate, Demon Castle, Retesting Rank, Hunters Guild Gate, Return to Demon Castle, Jeju Island, Recruitment, Ahjin Guild, Double Dungeon, Japan Crisis, International Guild Conference, Monarchs War, Final Battle y Epilogue); no son oficiales. Capítulos del manhwa de cada arco según Beebom, Epicstream y Destructoid; la temporada 1 acaba en el cap. 45 (Beebom y Epicstream) y la 2 en el 110 (Beebom, Epicdope y Anime Corner, que recomienda releer desde el 108 porque el anime recorta escenas). Aproximado: las guías reparten los capítulos 3, 16, 18 y 21 del anime entre dos arcos, así que aquí se han juntado arcos (redespertar con la mazmorra de rango D, mazmorra instantánea con los lagartos, reevaluación con la puerta del Gremio de Cazadores, y el reclutamiento, caps. 108-110, con la isla de Jeju) y el cap. 21 se cuenta en el Castillo del Demonio. Las equivalencias dentro de cada arco son aproximadas."
});
