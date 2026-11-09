// Detalles de Horimiya (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "horimiya",
  // Colores de la serie en su rastreador (claro / oscuro): rosa de Hori y azul de Miyamura, tonos pastel de comedia romántica
  tema: {
    claro:  { accent: "#c2416b", accentRgb: "194, 65, 107", accentDeep: "#7d2443", accent2: "#2f6fa8", onAccent: "#ffffff" },
    oscuro: { accent: "#f48fb1", accentRgb: "244, 143, 177", accentDeep: "#c2416b", accent2: "#8cc4f0", onAccent: "#1f0a12" }
  },
  animeTotal: 26,   // 13 (Horimiya, 2021) + 13 (Horimiya: The Missing Pieces, 2023)
  mangaTotal: 122,  // 122 capítulos de la serie principal (AniList indica 152 y MyAnimeList 139, sumando extras y el tomo 17)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Temporada 1: recorre todo el manga hasta la graduación (caps. 120-122), saltándose muchos capítulos
    ["Horimiya (temporada 1)", 1, 13, 0, 1, 122],
    // Capítulos sueltos de todo el manga que la temporada 1 se saltó (fuera de orden respecto al manga)
    ["Horimiya: The Missing Pieces", 14, 26, 0, null, null]
  ],
  // Texto para los arcos del anime sin rango de manga propio
  textoSinManga: "capítulos sueltos del manga, fuera de orden",
  notaFlashback: "Adapta capítulos sueltos de todo el manga (del 6 al 122 y extras) que la temporada 1 se saltó, sin seguir el orden del manga: es mejor verla después de la temporada 1.",
  soloManga: [],
  // Anime Filler List no tiene ficha de Horimiya; otras guías no registran relleno
  relleno: [],
  nota: "Incluye las dos temporadas (26 capítulos numerados de forma continua: Horimiya, 13 capítulos en 2021, y Horimiya: The Missing Pieces, «-piece-», 13 capítulos en 2023, aquí del 14 al 26) y el manga principal (122 capítulos, publicado de 2011 a 2021 en Monthly GFantasy: «Page» 1-121 y «Last Page»; MyAnimeList indica 139 y AniList 152 porque suman los extras y el tomo 17, «A piece of memories», de 2023). La temporada 1 recorre toda la historia hasta la graduación (caps. 120-122) pero salta de un capítulo a otro y adapta solo unos 54; The Missing Pieces vuelve atrás y adapta unos 49 capítulos sueltos que se había saltado (por ejemplo, el 14 adapta los caps. 6, 32, 33 y 40, y el 15 los caps. 47-50) más algunos extras. Como va fuera de orden respecto al manga, no se puede representar con rangos crecientes: la temporada 1 marca todo el manga (1-122) y The Missing Pieces figura sin rango de manga. Las equivalencias por capítulo son aproximadas. Anime Filler List no tiene ficha de Horimiya; Anime Filler Guide y las guías de capítulos no registran relleno. No hay películas de anime (solo una película y una serie de imagen real). Los arcos llevan el nombre de cada temporada (en inglés, como se distribuye en España). Fuentes: Wikipedia (inglés y japonés), MyAnimeList, Anime Filler Guide, Sportskeeda, Attack of the Fanboy, Anime News Network y una guía de lectura con la equivalencia de cada episodio."
});
