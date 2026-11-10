// Detalles de DARLING in the FRANXX (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "darlinginthefranxx",
  // Colores de la serie en su rastreador (claro / oscuro): rojo y rosa de Zero Two y del Strelizia, azul de Hiro
  tema: {
    claro:  { accent: "#c8174a", accentRgb: "200, 23, 74", accentDeep: "#6e0b27", accent2: "#2b6cb0", onAccent: "#ffffff" },
    oscuro: { accent: "#ff5a85", accentRgb: "255, 90, 133", accentDeep: "#c8174a", accent2: "#6fb3ff", onAccent: "#1a0509" }
  },
  animeTotal: 24,
  mangaTotal: 0,    // anime original; el manga es una adaptación posterior
  // [nombre, desde, hasta, relleno (0/1), null, null]
  arcos: [
    ["El encuentro con Zero Two", 1, 6, 0, null, null],
    ["El Escuadrón 13 hasta Gran Crevasse", 7, 15, 0, null, null],
    ["La vida en Mistilteinn", 16, 19, 0, null, null],
    ["La guerra contra VIRM", 20, 24, 0, null, null]
  ],
  relleno: [],
  nota: "Serie de TV de 2018 (24 capítulos, 13 de enero–7 de julio de 2018), coproducida por Trigger y A-1 Pictures (CloverWorks). Es un anime original: el manga de Kentarō Yabuki es una adaptación posterior con final alternativo, así que no hay rejilla de manga ni equivalencias por capítulo. Quedan fuera los dos especiales recopilatorios («Playback Special»). No hay películas. Los tramos son descriptivos y no oficiales, siguiendo las cuatro partes en que Wikipedia en japonés divide la historia (1–6, 7–15, 16–19 y 20–24), contrastadas con los resúmenes de Wikipedia en inglés y en español: la batalla contra el klaxosaurio de clase Gutenberg (6), la toma de Gran Crevasse (15), la vida autosuficiente en Mistilteinn (16–19) y la revelación de VIRM y la batalla final (20–24). Sin relleno según Anime Filler List. Fuentes: Wikipedia (inglés, español y japonés), Anime Filler List y MyAnimeList."
});
