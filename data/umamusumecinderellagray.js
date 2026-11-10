// Detalles de Umamusume: Cinderella Gray (la ficha básica está en data/catalogo-auto.js)
// Parte 1 = 1–13, parte 2 = 14–23 (numeración seguida)
registrarSerie({
  id: "umamusumecinderellagray",
  // Colores de la serie en su rastreador (claro / oscuro): azul del uniforme de carreras de Oguri Cap y dorado del trofeo
  tema: {
    claro:  { accent: "#2b59c3", accentRgb: "43, 89, 195", accentDeep: "#18326e", accent2: "#c99400", onAccent: "#ffffff" },
    oscuro: { accent: "#74a0ff", accentRgb: "116, 160, 255", accentDeep: "#2b59c3", accent2: "#ffd43b", onAccent: "#0a1226" }
  },
  animeTotal: 23,
  mangaTotal: 210,   // terminado el 25-12-2025 en Weekly Young Jump (23 tomos + el 24 en diciembre de 2026)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta]
  arcos: [
    ["La estrella de Kasamatsu", 1, 6, 0, 1, 16],
    ["Tracen y el Derby de Japón", 7, 10, 0, 17, 33],
    ["El Tenno Sho de otoño contra Tamamo Cross", 11, 13, 0, 34, 43],
    ["La Japan Cup", 14, 20, 0, 44, 67],
    ["El Arima Kinen", 21, 23, 0, 68, 79]
  ],
  soloManga: [
    ["Resto de la historia hasta el final", null, null, 0, 80, 210]
  ],
  relleno: [],
  nota: "Serie de TV de CygamesPictures en dos partes: la 1 (13 capítulos, 6 de abril–29 de junio de 2025) y la 2 (10 capítulos, 5 de octubre–21 de diciembre de 2025). El final de la parte 1 en el capítulo 43 del manga lo confirman MangaShed y DTGRE. El final de la parte 2 es aproximado: según Where Does the Anime Leave Off, hay que seguir por el capítulo 80 (tomo 9), y cuadra con los títulos (el capítulo 23 del anime, «Una nueva era», empieza en el 75 del manga). Los cortes de los demás tramos salen de comparar los títulos de los capítulos del anime con los del manga (Umamusume Wiki), así que también son aproximados. El manga terminó con el capítulo 210 el 25 de diciembre de 2025 (Anime News Network y Umamusume Wiki; una fuente dice 211). Sin relleno. No hay películas. Fuentes: Wikipedia (inglés), Umamusume Wiki, Anime News Network, MangaShed, DTGRE y Where Does the Anime Leave Off."
});
