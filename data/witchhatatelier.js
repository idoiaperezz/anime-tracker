// Detalles de Witch Hat Atelier (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "witchhatatelier",
  // Colores de la serie en su rastreador (claro / oscuro): azul tinta del sombrero de Coco y dorado de las ilustraciones
  tema: {
    claro:  { accent: "#2f4ea3", accentRgb: "47, 78, 163", accentDeep: "#1a2c5e", accent2: "#b8862b", onAccent: "#ffffff" },
    oscuro: { accent: "#7c9cf0", accentRgb: "124, 156, 240", accentDeep: "#2f4ea3", accent2: "#e8c068", onAccent: "#0b1022" }
  },
  animeTotal: 13,
  mangaTotal: 99,    // en publicación en Morning Two (aproximado: 97 en junio de 2026)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta]
  arcos: [
    ["La magia que lo empezó todo", 1, 3, 0, 1, 4],
    ["Kalhn y el laberinto del dragón", 4, 5, 0, 5, 7],
    ["Aprendizas en el taller", 6, 7, 0, 8, 11],
    ["Los Caballeros Moralis y la pesadilla negra", 8, 10, 0, 12, 17],
    ["La segunda prueba y la magia prohibida", 11, 13, 0, 18, 23]
  ],
  soloManga: [
    ["Resto del manga (en publicación)", null, null, 0, 24, 99]
  ],
  relleno: [],
  nota: "Primera temporada de Bug Films (13 capítulos, 6 de abril–finales de junio de 2026). La segunda temporada se anunció tras el final de la primera, todavía sin fecha. La equivalencia por capítulo sale de Anime Filler Guide; el final (capítulos 22 y 23, tomo 4) coincide con Dexerto y con Ovicio, así que para seguir hay que empezar por el capítulo 24 (tomo 5). El total del manga es aproximado: Anime Filler Guide contaba 97 capítulos en junio de 2026 y otras listas ya cuentan 99; la serie sale de forma irregular en la revista mensual Morning Two (16 tomos en abril de 2026). Sin relleno según Anime Filler Guide. No hay películas. Los nombres de los tramos son descriptivos, a partir de los títulos de los capítulos. Fuentes: Wikipedia (inglés), Anime Filler Guide, Dexerto y Ovicio."
});
