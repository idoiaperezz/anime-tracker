// Detalles de Mirai Nikki / The Future Diary (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "thefuturediary",
  titulo: "Mirai Nikki", // así se conoce en España (AniList usa «The Future Diary»)
  // Colores de la serie en su rastreador (claro / oscuro): rosa de Yuno y rojo sangre
  tema: {
    claro:  { accent: "#c2255c", accentRgb: "194, 37, 92", accentDeep: "#6b1233", accent2: "#5f3dc4", onAccent: "#ffffff" },
    oscuro: { accent: "#f783ac", accentRgb: "247, 131, 172", accentDeep: "#c2255c", accent2: "#b197fc", onAccent: "#1f0610" }
  },
  animeTotal: 26,
  mangaTotal: 59,    // terminado (12 tomos), sin contar los spin-offs ni Redial
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta]
  arcos: [
    ["Los doce poseedores", 1, 4, 0, 1, 8],
    ["Tres días en la casa de juegos", 5, 9, 0, 9, 18],
    ["La puerta y el fin del mundo", 10, 11, 0, 19, 23],
    ["El diario de la Octava", 12, 14, 0, 24, 28],
    ["Mentiras de familia", 15, 17, 0, 29, 33],
    ["El mundo invertido", 18, 20, 0, 34, 43],
    ["La última batalla contra la Novena", 21, 22, 0, 44, 48],
    ["Akise contra Yuno y el último diario", 23, 26, 0, 49, 59]
  ],
  relleno: [],
  nota: "Serie de TV de Asread (26 capítulos, 10 de octubre de 2011–16 de abril de 2012). Adapta el manga entero de Sakae Esuno (59 capítulos en 12 tomos) sin relleno, según Anime Filler Guide y Anime Filler List; el capítulo 26 se deja la última página del manga, así que conviene leer el final del capítulo 59 (desde la página 38). Ninguna fuente da la equivalencia capítulo a capítulo: los tramos siguen los tomos del manga (Wikipedia, lista de capítulos) repartidos entre los 26 capítulos del anime, y sus nombres salen de los títulos del manga, así que los cortes son aproximados. No incluye los cortos «Ura Mirai Nikki» ni la OVA «Redial» (2013), que adapta el epílogo Redial, ni la serie de imagen real. No hay películas. Fuentes: Wikipedia (inglés), Anime Filler Guide, Anime Filler List y Anime News Network."
});
