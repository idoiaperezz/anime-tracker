// Detalles de Sword Art Online (la ficha básica está en data/catalogo-auto.js)
// Numeración del anime seguida: SAO = 1–25, SAO II = 26–49, Alicization = 50–73, War of Underworld = 74–96.
registrarSerie({
  id: "swordartonline",
  // Temporadas (para la barra de temporadas del rastreador): [nombre, primer capítulo, último capítulo]
  temporadas: [
    ["Temporada 1", 1, 25],
    ["Sword Art Online II", 26, 49],
    ["Alicization", 50, 73],
    ["War of Underworld", 74, 96]
  ],
  // Colores de la serie en su rastreador (claro / oscuro)
  tema: {
    claro:  { accent: "#1f6fd1", accentRgb: "31, 111, 209", accentDeep: "#0f3a73", accent2: "#d92b2b", onAccent: "#ffffff" },
    oscuro: { accent: "#5c9dff", accentRgb: "92, 157, 255", accentDeep: "#1f6fd1", accent2: "#ff6b6b", onAccent: "#050d1a" }
  },
  animeTotal: 96,   // 25 + 24 + 24 + 23 (todas las temporadas de TV de la historia principal, terminadas)
  mangaTotal: 0,    // el origen es una novela ligera, no un manga
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    ["Aincrad", 1, 14, 0, null, null],
    ["Fairy Dance", 15, 25, 0, null, null],
    ["Phantom Bullet", 26, 39, 0, null, null],          // SAO II 1–14
    ["Calibur", 40, 42, 0, null, null],                 // SAO II 15–17
    ["Mother's Rosario", 43, 49, 0, null, null],        // SAO II 18–24
    ["Alicization", 50, 73, 0, null, null],             // Alicization 1–24
    ["War of Underworld (parte 1)", 74, 85, 0, null, null],  // WoU 1–12
    ["War of Underworld (parte 2)", 86, 96, 0, null, null]   // WoU 13–23
  ],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Sword Art Online Progressive: Aria of a Starless Night", anio: 2021, despues: 2, tipo: "no-canon", nota: "Reinterpretación del arco de Aincrad (piso 1) desde el punto de vista de Asuna, con un personaje nuevo (Mito) y escenas que no encajan con la serie: continuidad propia. Cronológicamente va entre los caps. 2 y 3; también se puede ver tras el arco de Aincrad (cap. 14)." },
    { titulo: "Sword Art Online Progressive: Scherzo of Deep Night", anio: 2022, despues: 2, tipo: "no-canon", nota: "Continuación directa de Aria (pisos 2 a 5 de Aincrad), con la misma continuidad propia. Va justo después de Aria y antes del cap. 3." },
    { titulo: "Sword Art Online: Ordinal Scale", anio: 2017, despues: 49, tipo: "canon", nota: "Historia original de Reki Kawahara, unas semanas después de Mother's Rosario y antes de Alicization, que hace referencia a ella." }
  ],
  nota: "Incluye todas las temporadas de TV de la historia principal con numeración seguida: Sword Art Online (25 capítulos, 1–25), Sword Art Online II (24, aquí 26–49), Sword Art Online: Alicization (24, aquí 50–73) y Alicization – War of Underworld (12 + 11 = 23, aquí 74–96). Quedan fuera los spin-offs (Progressive, Alternative: Gun Gale Online), la película Ordinal Scale y los especiales y recapitulaciones sin número (14.5, 18.5, 24.5, 36.5, Extra Edition). Totales y cortes de arco según Wikipedia en inglés y en español, contrastados con MyAnimeList (War of Underworld 2nd Season: 11 capítulos). El origen es la novela ligera de Reki Kawahara, no un manga, así que no hay rejilla de manga ni equivalencias por capítulo. Anime Filler List no registra relleno. Los nombres de los arcos van en su versión original en inglés, que es la que se usa también en España."
});
