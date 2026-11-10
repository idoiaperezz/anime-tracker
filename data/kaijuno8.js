// Detalles de Kaiju No. 8 (la ficha básica está en data/catalogo-auto.js)
// Temporada 1 = 1–12, temporada 2 = 13–23 (numeración seguida)
registrarSerie({
  id: "kaijuno8",
  // Colores de la serie en su rastreador (claro / oscuro): azul petróleo del Kaiju n.º 8 y naranja de las Fuerzas de Defensa
  tema: {
    claro:  { accent: "#0b7285", accentRgb: "11, 114, 133", accentDeep: "#063f4a", accent2: "#e8590c", onAccent: "#ffffff" },
    oscuro: { accent: "#3bc9db", accentRgb: "59, 201, 219", accentDeep: "#0b7285", accent2: "#ff922b", onAccent: "#04161a" }
  },
  animeTotal: 23,
  mangaTotal: 129,   // terminado el 18-07-2025 en Shōnen Jump+ (16 tomos)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta]
  arcos: [
    ["El hombre que se convirtió en kaiju", 1, 4, 0, 1, 9],
    ["El examen de las Fuerzas de Defensa", 5, 6, 0, 10, 14],
    ["El Kaiju n.º 9 y el ataque a Tachikawa", 7, 10, 0, 15, 32],
    ["Kafka capturado", 11, 12, 0, 33, 38],
    ["Las armas kaiju y la Primera División", 13, 16, 0, 39, 52],
    ["La prueba de compatibilidad", 17, 20, 0, 53, 66],
    ["La gran oleada de kaijus", 21, 23, 0, 67, 82]
  ],
  soloManga: [
    ["Resto de la historia hasta el final", null, null, 0, 83, 129]
  ],
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Kaiju No. 8: Mission Recon", anio: 2025, despues: 12, tipo: "recopilatorio", manga: [1, 38], nota: "Recopilatorio de la primera temporada que se estrenó en cines el 28 de marzo de 2025. Incluye el episodio inédito «El día libre de Hoshina» (Hoshina's Day Off)." }
  ],
  nota: "Serie de TV de Production I.G: temporada 1 (12 capítulos, abril–junio de 2024) y temporada 2 (11 capítulos, 19 de julio–27 de septiembre de 2025). El final de la historia llegará en la película «Kaiju No. 8: The Final Mission», anunciada para 2027 (se añadirá cuando se estrene). La equivalencia por capítulo sale de Anime Filler Guide; el final de la temporada 2 (capítulos 82–83 del manga) se ha contrastado con AnimeExplained, aunque otras guías dicen 80 u 81. El capítulo 23 del anime se salta los capítulos 79, 80 y el principio del 81 del manga: conviene leerlos antes de seguir por el 83. El manga terminó con el capítulo 129 (18 de julio de 2025, 16 tomos). Sin relleno según Anime Filler Guide. No incluye el ONA «Narumi's Weekday» (2026) ni el especial de TV «Hoshina's Day Off» suelto. Los nombres de los tramos son descriptivos, a partir de los títulos de los capítulos. Fuentes: Wikipedia (inglés), Anime Filler Guide, AnimeExplained y Dexerto."
});
