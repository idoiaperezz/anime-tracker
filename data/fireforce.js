// Detalles de Fire Force (la ficha básica está en data/catalogo-auto.js)
// Numeración seguida: T1 = 1–24, T2 = 25–48 (cap. N de la T2 = N + 24), T3 = 49–73 (cap. N de la T3 = N + 48; parte 1 = 49–60, parte 2 = 61–73).
registrarSerie({
  id: "fireforce",
  // Colores de la serie en su rastreador (claro / oscuro): naranja de las llamas y azul claro de las bandas reflectantes del uniforme
  tema: {
    claro:  { accent: "#d9480f", accentRgb: "217, 72, 15", accentDeep: "#8a2c06", accent2: "#1c7ed6", onAccent: "#ffffff" },
    oscuro: { accent: "#ff7a2f", accentRgb: "255, 122, 47", accentDeep: "#d9480f", accent2: "#66d9ff", onAccent: "#1a0800" }
  },
  animeTotal: 73,   // 24 (T1, 2019) + 24 (T2, 2020) + 25 (T3: 12 en 2025 + 13 en 2026); anime terminado
  mangaTotal: 304,  // manga terminado (2015–2022), 34 tomos; AniList indica 305
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // ---- Temporada 1 ----
    ["Introduction", 1, 4, 0, 1, 12],
    ["VS. Special Fire Force Company 5", 5, 6, 0, 13, 20],
    ["VS. Special Fire Force Company 1", 7, 9, 0, 21, 32],
    ["Preacher Pursuit", 10, 11, 0, 33, 38],
    ["Asakusa", 12, 14, 0, 39, 51],
    ["Vulcan's Workshop", 15, 18, 0, 52, 66],
    ["Netherworld", 19, 24, 0, 67, 90],
    // ---- Temporada 2 (T2 1–24 = 25–48) ----
    ["VS. Special Fire Force Company 4", 25, 26, 0, 91, 99],     // el 25 es mixto (cuenta como canon)
    ["Fifth Pillar", 27, 30, 0, 100, 111],
    ["Chinese Peninsula", 31, 34, 0, 112, 122],
    ["VS. Holy Sol Temple", 35, 37, 0, 123, 130],
    ["Haijima Industries", 38, 41, 0, 131, 147],
    ["Iris", 42, 42, 0, 148, 151],
    ["Joint Investigation", 43, 46, 0, 152, 166],
    ["Stigma", 47, 48, 0, 167, 174],
    // ---- Temporada 3 (T3 1–25 = 49–73) ----
    ["Ōbi's Rescue", 49, 55, 0, 175, 197],
    ["Return to St. Raffles", 56, 56, 0, 198, 201],
    ["Arthur's Adventure", 57, 57, 0, 202, 205],
    ["Stone Pillars", 58, 61, 0, 206, 219],                       // la parte 2 de la T3 empieza en el 61
    ["Asakusa Showdown", 62, 62, 0, 220, 229],
    ["Kusakabe History", 63, 63, 0, 230, 233],
    ["Final Pillar", 64, 64, 0, 234, 239],
    ["Battle of Amaterasu", 65, 66, 0, 240, 250],
    ["Great Cataclysm y epílogo", 67, 73, 0, 251, 304]
  ],
  // El anime adapta el manga entero
  soloManga: [],
  // Anime Filler List no registra relleno (el 25, T2 1, es mixto y cuenta como canon)
  relleno: [],
  nota: "Incluye las tres temporadas de TV con numeración seguida: T1 = 1–24 (2019), T2 = 25–48 (2020) y T3 = 49–73 (parte 1: 49–60, abril-junio de 2025; parte 2: 61–73, enero-abril de 2026). El anime terminó el 4 de abril de 2026 con 73 capítulos (Wikipedia en inglés, Anime Filler Guide y Anime Corner) y adapta el manga completo, que tiene 304 capítulos en 34 tomos (Wikipedia en inglés, Anime Filler Guide y Comicbook; AniList dice 305, probablemente por contar el capítulo 0 o un extra). Sin películas de cine. Relleno según Anime Filler List: ninguno; el capítulo 25 (T2 1) es mixto y cuenta como canon. Los nombres de los arcos son los de uso común en inglés (no hay nombres de uso común en español). Límites por temporada verificados con Anime Filler Guide y Sportskeeda: T1 = caps. 1–90, T2 = 91–174, T3 parte 1 = 175–216 y parte 2 = 217–304. Rangos de manga de cada arco según Deltia's Gaming y Beebom (T3), y rangos de capítulos del anime según Ultimate Waifu, contrastados con la tabla capítulo a capítulo de Anime Filler Guide y los resúmenes de Wikipedia en inglés (T3). Son aproximados los cortes que caen a mitad de capítulo: Preacher Pursuit/Asakusa (el 11 empieza Asakusa al final), VS. Holy Sol Temple/Haijima (el 37), Ōbi's Rescue/Return to St. Raffles (el 55 ya abre la vuelta a St. Raffles), Return to St. Raffles/Arthur's Adventure (el 56) y Stone Pillars/Asakusa Showdown (el 61 llega al cap. 221). Las guías discrepan en el rango de Return to St. Raffles (Beebom lo alarga hasta el cap. 210, solapado con los dos arcos siguientes): aquí se cortó en el 201. El epílogo (caps. 303–304) va dentro del último capítulo del anime, junto al final del Great Cataclysm."
});
