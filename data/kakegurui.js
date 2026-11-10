// Detalles de Kakegurui (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "kakegurui",
  // Colores de la serie en su rastreador (claro / oscuro): rojo carmesí del uniforme de Hyakkaou, negro y dorado de casino
  tema: {
    claro:  { accent: "#b3122e", accentRgb: "179, 18, 46", accentDeep: "#5c0915", accent2: "#9a6b00", onAccent: "#ffffff" },
    oscuro: { accent: "#ff4d6a", accentRgb: "255, 77, 106", accentDeep: "#b3122e", accent2: "#ffc94d", onAccent: "#1a0306" }
  },
  animeTotal: 24,   // temporada 1 (12, 2017) + Kakegurui ×× (12, 2019), numeración continua
  mangaTotal: 133,  // manga en publicación (Gangan Joker); cap. 133 = último a noviembre de 2026 (sin contar los capítulos .5)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Temporada 1 (2017)
    ["Llegada de Yumeko (Mary, Itsuki y Yuriko)", 1, 3, 0, 1, 4],
    ["Juego de intercambio de deudas", 4, 5, 0, 5, 9],
    ["Midari Ikishima", 6, 7, 0, 10, 16],
    ["Yumemi Yumemite", 8, 9, 0, 17, 21],
    ["Kaede Manyuda", 10, 11, 0, 22, 27],
    ["Las cartas del destino (final original del anime)", 12, 12, 1],
    // Temporada 2: Kakegurui ×× (2019)
    ["Elección al consejo estudiantil", 13, 22, 0, 28, 55],
    ["La subasta de los cien votos (final original del anime)", 23, 24, 1]
  ],
  // Parte del manga que el anime no adapta
  soloManga: [
    ["Fin de la elección y Sociedad de Guardianes (sin anime)", null, null, 0, 56, 133]
  ],
  // Los capítulos originales del anime son arcos enteros (12 y 23-24)
  relleno: [],
  nota: "Incluye las dos temporadas de TV de MAPPA (24 capítulos numerados de forma continua: Kakegurui, 2017, y Kakegurui ××, 2019; Wikipedia en inglés y japonés) y el manga principal, en publicación en Gangan Joker (22 tomos a septiembre de 2026; último capítulo, el 133, en octubre de 2026 según la lista de capítulos de Yen Press, que los publica a la vez que Japón; aproximado ±1). No incluye el spin-off Kakegurui Twin, sus ONA ni las películas de imagen real. Relleno: Anime Filler List no tiene una página válida de esta serie, así que se marca como relleno lo que es original del anime según Anime Filler Guide, Anime News Network y Wikipedia en japonés: el cap. 12 (Yumeko contra Kirari en «las cartas del destino», final original con historia del propio autor) y los caps. 23-24 (subasta de los cien votos y lanzamiento de moneda contra Rei Batsubami, personaje que no existe en el manga). Los arcos no tienen nombres de uso común en español ni en inglés: se nombran por el rival o el juego de cada tramo. Equivalencias de la temporada 1 según Anime Filler Guide, cotejadas con los tomos de Wikipedia (tomos 1-5 = caps. 1-27). La temporada 2 cambia el orden del manga: los caps. 13-20 adaptan la elección (caps. 34-55: Erimi, Miri y Miyo, Natari y Terano) y los caps. 21-22 la Torre de las Puertas contra Sayaka, que en el manga va antes (caps. 28-33, tomo 6; Anime Filler Guide, Wikipedia y The Fandom Post); por eso todo va en un solo arco con los caps. 28-55. El anime termina a mitad del cap. 55 (pág. 42): para seguir, leer desde el final del 55 o el 56 (Anime Filler Guide y Mangashed). Las equivalencias dentro de cada arco son aproximadas, y el bloque «solo manga» se agrupa porque no hay fuentes fiables con los límites de sus arcos."
});
