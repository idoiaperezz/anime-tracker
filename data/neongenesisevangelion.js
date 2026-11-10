// Detalles de Neon Genesis Evangelion (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "neongenesisevangelion",
  // Colores de la serie en su rastreador (claro / oscuro): morado y verde de la Unidad 01
  tema: {
    claro:  { accent: "#5b2d8e", accentRgb: "91, 45, 142", accentDeep: "#2f1550", accent2: "#3a8a1e", onAccent: "#ffffff" },
    oscuro: { accent: "#a77be0", accentRgb: "167, 123, 224", accentDeep: "#5b2d8e", accent2: "#8ee03a", onAccent: "#140a22" }
  },
  animeTotal: 26,
  mangaTotal: 0,    // anime original: el manga de Sadamoto es una adaptación paralela
  // [nombre, desde, hasta, relleno (0/1), null, null]
  arcos: [
    ["La llegada de Shinji a Tokio-3", 1, 7, 0, null, null],
    ["Asuka y los combates en equipo", 8, 13, 0, null, null],
    ["Leliel, la Unidad 03 y Zeruel", 14, 19, 0, null, null],
    ["Los secretos de NERV y los últimos ángeles", 20, 24, 0, null, null],
    ["El Proyecto de Complementación Humana", 25, 26, 0, null, null]
  ],
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Neon Genesis Evangelion: Death & Rebirth", anio: 1997, despues: 26, tipo: "recopilatorio", nota: "«Death» resume los capítulos 1-24 con escenas nuevas; «Rebirth» es la primera mitad del nuevo final, que The End of Evangelion incluye completa, así que se puede saltar." },
    { titulo: "The End of Evangelion", anio: 1997, despues: 26, tipo: "canon", nota: "Final alternativo de los capítulos 25-26 (episodios 25' y 26'): continúa directamente desde el 24." },
    { titulo: "Evangelion: 1.0 You Are (Not) Alone", anio: 2007, despues: 26, tipo: "no-canon", nota: "Rebuild: reinterpretación aparte." },
    { titulo: "Evangelion: 2.0 You Can (Not) Advance", anio: 2009, despues: 26, tipo: "no-canon", nota: "Rebuild: reinterpretación aparte." },
    { titulo: "Evangelion: 3.0 You Can (Not) Redo", anio: 2012, despues: 26, tipo: "no-canon", nota: "Rebuild: reinterpretación aparte." },
    { titulo: "Evangelion: 3.0+1.0 Thrice Upon a Time", anio: 2021, despues: 26, tipo: "no-canon", nota: "Rebuild: reinterpretación aparte." }
  ],
  nota: "Anime original de Gainax (1995-1996, 26 capítulos): el manga de Yoshiyuki Sadamoto se publicó en paralelo como adaptación propia, así que no hay equivalencia con capítulos de manga. No cuenta las versiones del director de los capítulos 21-24 ni los episodios 25' y 26' (que son The End of Evangelion). Sin relleno según Anime Filler List (el 14 empieza con un resumen, pero tiene trama nueva). Los tramos son descriptivos y no oficiales, trazados según los ángeles y hechos de cada capítulo en Wikipedia (inglés y español): Sachiel, Shamshel, Ramiel y el Jet Alone (1-7), la llegada de Asuka hasta Ireul (8-13), del capítulo 14 a Zeruel con la Unidad 03 (14-19), de la absorción de Shinji a Kaworu (20-24) y la Complementación (25-26). Películas: Death & Rebirth (15-3-1997) y The End of Evangelion (19-7-1997), según Wikipedia en japonés e inglés; los Rebuild (1-9-2007, 27-6-2009, 17-11-2012 y 8-3-2021) son una nueva continuidad, según Wikipedia en español y guías de orden de visionado (GamesRadar, JustWatch). Fuentes: Wikipedia (inglés, español y japonés), Anime Filler List y guías de orden de visionado."
});
