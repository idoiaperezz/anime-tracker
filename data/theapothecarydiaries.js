// Detalles de The Apothecary Diaries (la ficha básica está en data/catalogo-auto.js)
// Numeración seguida: temporada 1 = 1–24, temporada 2 = 25–48, temporada 3 = 49 en adelante
registrarSerie({
  id: "theapothecarydiaries",
  // Colores de la serie en su rastreador (claro / oscuro): verde jade de Maomao y rojo bermellón del palacio
  tema: {
    claro:  { accent: "#2b8a6e", accentRgb: "43, 138, 110", accentDeep: "#174d3d", accent2: "#c92a2a", onAccent: "#ffffff" },
    oscuro: { accent: "#63d3ae", accentRgb: "99, 211, 174", accentDeep: "#2b8a6e", accent2: "#ff8787", onAccent: "#06180f" }
  },
  animeTotal: 55,    // 48 + 7 de la temporada 3 (en emisión, a 13-11-2026); la web lo amplía sola con «emision»
  // En emisión: temporada 3 (parte 1 desde el 49, parte 2 en abril de 2027 desde el 61). La web pregunta a AniList cuántos van
  emision: [{ anilistId: 195516, desde: 49 }, { anilistId: 200927, desde: 61 }],
  mangaTotal: 0,     // viene de una novela ligera; los dos mangas son adaptaciones
  // [nombre, desde, hasta, relleno (0/1), null, null]
  arcos: [
    ["El palacio interior", 1, 12, 0, null, null],
    ["Al servicio de la corte exterior", 13, 17, 0, null, null],
    ["Lakan y la Casa Verdigris", 18, 24, 0, null, null],
    ["La caravana y la emperatriz viuda", 25, 36, 0, null, null],
    ["El clan Shi", 37, 48, 0, null, null],
    ["Rumbo a la capital del oeste (en emisión)", 49, 55, 0, null, null]
  ],
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "The Apothecary Diaries: The Late Lady's Treasure", anio: 2026, despues: 48, tipo: "canon", nota: "Película con una historia nueva escrita por la autora, Natsu Hyūganatsu. Se estrena en Japón el 11 de diciembre de 2026. Dónde encaja es aproximado: se pone tras la segunda temporada." }
  ],
  nota: "Serie de TV de Toho Animation y OLM: temporada 1 (24 capítulos, octubre de 2023–marzo de 2024), temporada 2 (24, enero–julio de 2025) y temporada 3 (24 en dos partes: la primera desde el 2 de octubre de 2026 y la segunda en abril de 2027). Los capítulos de la tercera temporada se actualizan solos: la web pregunta a AniList cuántos se han emitido. Viene de una novela ligera de Natsu Hyūganatsu, así que el rastreador queda en modo solo anime. Los tramos siguen los tomos de la novela: tomo 1 = 1–12, tomo 2 = 13–24, tomo 3 = 25–36, tomo 4 = 37–48 (Anime Filler Guide) y la tercera temporada adapta los tomos 5 y 6 (GamesRadar y Final Weapon). El corte del 17/18 sigue el capítulo «Lakan», donde empieza el pasado de Maomao. Sin relleno según Anime Filler Guide. Fuentes: Wikipedia (inglés), Anime Filler Guide, GamesRadar, Final Weapon y Crunchyroll."
});
