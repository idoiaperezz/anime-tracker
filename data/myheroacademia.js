// Detalles de My Hero Academia (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "myheroacademia",
  // Colores de la serie en su rastreador (claro / oscuro)
  tema: {
    claro:  { accent: "#12855a", accentRgb: "18, 133, 90", accentDeep: "#0a4d34", accent2: "#e03131", onAccent: "#ffffff" },
    oscuro: { accent: "#3ddc97", accentRgb: "61, 220, 151", accentDeep: "#12855a", accent2: "#ff8787", onAccent: "#04140d" }
  },
  animeTotal: 170, // 8 temporadas de TV: 13 + 25 + 25 + 25 + 25 + 25 + 21 + 11 (sin el especial «More» 170+1)
  mangaTotal: 431, // 430 capítulos en Weekly Shōnen Jump + el capítulo 431 añadido en el tomo 42
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Temporada 1 (1-13)
    ["Entrance Exam", 1, 4, 0, 1, 4],
    ["Quirk Apprehension Test y Battle Trial", 5, 8, 0, 5, 11],
    ["U.S.J.", 9, 13, 0, 12, 21],
    // Temporada 2 (14-38)
    ["U.A. Sports Festival", 14, 25, 0, 22, 44],
    ["Vs. Hero Killer", 26, 33, 0, 45, 59],
    ["Final Exams", 34, 38, 0, 60, 69],
    // Temporada 3 (39-63)
    ["Forest Training Camp", 39, 45, 0, 70, 83],
    ["Hideout Raid", 46, 50, 0, 84, 97],
    ["Provisional Hero License Exam", 51, 62, 0, 98, 121],
    // Temporadas 3-4 (63-88)
    ["Shie Hassaikai", 63, 77, 0, 122, 162],
    ["Remedial Course", 78, 80, 0, 163, 168],
    ["U.A. School Festival", 81, 86, 0, 169, 183],
    // Temporadas 4-5 (87-113)
    ["Pro Hero", 87, 90, 0, 184, 193],
    ["Joint Training", 91, 100, 0, 194, 217],
    // El anime emite Endeavor Agency (cap. 241-252) antes que Meta Liberation Army (cap. 218-240): van juntos
    ["Endeavor Agency y Meta Liberation Army", 101, 112, 0, 218, 252],
    // Temporadas 5-6 (113-138)
    ["Paranormal Liberation War", 113, 131, 0, 253, 306],
    ["Dark Hero", 132, 138, 0, 307, 328],
    // Temporada 7 (139-159)
    ["Star and Stripe", 139, 140, 0, 329, 334],
    ["U.A. Traitor", 141, 143, 0, 335, 342],
    ["Final War – Parte 1 (temporada 7)", 144, 159, 0, 343, 398],
    // Temporada 8 (160-170)
    ["Final War – Parte 2 (temporada 8)", 160, 167, 0, 399, 424],
    ["Epilogue", 168, 170, 0, 425, 430]
  ],
  // Capítulos del manga que no adapta ninguna temporada de TV
  soloManga: [
    ["Capítulo extra del tomo 42 (solo en el especial «More», que no cuenta)", null, null, 0, 431, 431]
  ],
  // Capítulos de relleno sueltos (Anime Filler List)
  relleno: [39, 58, 64, 104],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "My Hero Academia: Two Heroes", anio: 2018, despues: 38, tipo: "no-canon", nota: "Transcurre en las vacaciones de verano, tras los exámenes finales (fin de la temporada 2)." },
    { titulo: "My Hero Academia: Heroes Rising", anio: 2019, despues: 88, tipo: "no-canon", nota: "Tras la temporada 4." },
    { titulo: "My Hero Academia: World Heroes' Mission", anio: 2021, despues: 113, tipo: "no-canon", nota: "Tras la temporada 5." },
    { titulo: "My Hero Academia: You're Next", anio: 2024, despues: 142, tipo: "no-canon", nota: "Tras el 4.º capítulo de la temporada 7 (mayoría de guías; alguna la sitúa tras el 2.º): momento aproximado." }
  ],
  nota: "Incluye el anime de TV completo (170 capítulos, temporadas 1 a 8; sin películas, OVAs ni el especial «More» 170+1) y el manga completo (431 capítulos: los 430 de la revista más el capítulo 431 añadido en el tomo 42, que solo adapta ese especial). Los nombres de los arcos van en su versión original en inglés: no hay nombres en español de uso común. El relleno sale de Anime Filler List (los capítulos «mixed canon/filler» y el 32, «anime canon», cuentan como canon). En la temporada 5 el anime emite el arco Endeavor Agency (cap. 241-252) antes que el flashback de Meta Liberation Army (cap. 218-240), así que van juntos en un solo tramo (capítulos 101-112; el 107 adapta además los cap. 253-255 y el 113 los 256-258, así que el inicio de Paranormal Liberation War es aproximado). Las equivalencias salen de Wikipedia en inglés (rangos de capítulos por temporada y arco) y Beebom, y son aproximadas: se reparten de forma uniforme dentro de cada arco, sin contar el relleno. Verificadas después con la Wikipedia en francés (capítulos adaptados en cada episodio), Critical Hits (arcos de las temporadas 1-4), Sportskeeda y Den of Geek (Dark Hero empieza en el capítulo 132), Looper (relleno 39, 58, 64 y 104) y la Wikipedia en japonés (fin de cada temporada); con ellas se corrigieron los cortes 100/101 (Endeavor Agency empieza en el capítulo 101, cap. 241) y 131/132 (Paranormal Liberation War termina en el capítulo 131, cap. 306)."
});
