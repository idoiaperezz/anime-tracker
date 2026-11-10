// Detalles de Dr. STONE (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "drstone",
  // Temporadas (para la barra de temporadas del rastreador): [nombre, primer capítulo, último capítulo]
  temporadas: [
    ["Temporada 1", 1, 24],
    ["Temporada 2: Stone Wars", 25, 35],
    ["Temporada 3: New World", 36, 57],
    ["Temporada 4: Science Future", 58, 94]
  ],
  // Colores de la serie en su rastreador (claro / oscuro): verde de la petrificación y del pelo de Senku, naranja del fuego de la ciencia
  tema: {
    claro:  { accent: "#2b8a3e", accentRgb: "43, 138, 62", accentDeep: "#1b5e2a", accent2: "#d9480f", onAccent: "#ffffff" },
    oscuro: { accent: "#69db7c", accentRgb: "105, 219, 124", accentDeep: "#2b8a3e", accent2: "#ffa94d", onAccent: "#04140a" }
  },
  animeTotal: 94,   // 24 (T1) + 11 (Stone Wars) + 22 (New World, 11 + 11) + 37 (Science Future, 12 + 12 + 13); el especial «Ryusui» no lleva número
  mangaTotal: 232,  // 232 capítulos (Z=1 a Z=232); AniList cuenta 236 sumando el one-shot «Terraforming» y los 3 de «4D Science»
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Temporada 1
    ["La fórmula de la piedra", 1, 2, 0, 1, 4],
    ["Contra Tsukasa", 3, 5, 0, 5, 13],
    ["El Reino de la Ciencia", 6, 12, 0, 14, 32],
    ["Los juegos de la aldea", 13, 15, 0, 33, 41],
    ["Los orígenes de la aldea", 16, 17, 0, 42, 45],
    ["Contra Hyoga", 18, 19, 0, 46, 50],
    ["Comunicaciones", 20, 24, 0, 51, 59],
    // Temporada 2: Stone Wars
    ["Stone Wars", 25, 34, 0, 60, 81],
    // Temporada 2 (último capítulo), especial «Ryusui» (sin número, entre el 35 y el 36) y temporada 3: New World (parte 1)
    ["La era de la exploración", 35, 40, 0, 82, 100],
    // Temporada 3: New World (partes 1 y 2)
    ["La isla del tesoro", 41, 55, 0, 101, 139],
    // Temporada 3 (final) y temporada 4: Science Future (parte 1)
    ["Ciudad de Nueva América", 56, 69, 0, 140, 169],
    // Temporada 4: Science Future (parte 2)
    ["Sudamérica", 70, 79, 0, 170, 194],
    // Temporada 4: Science Future (final de la parte 2 y principio de la 3)
    ["El nuevo mundo de piedra", 80, 82, 0, 195, 200],
    // Temporada 4: Science Future (parte 3)
    ["La vuelta al mundo", 83, 87, 0, 201, 212],
    ["Misión a la Luna", 88, 94, 0, 213, 232]
  ],
  // El anime adapta el manga completo
  soloManga: [],
  // Anime Filler List no registra relleno
  relleno: [],
  // Sin películas de cine
  peliculas: [],
  nota: "Incluye el anime completo (94 capítulos numerados de forma continua: temporada 1, Stone Wars, New World en dos partes y Science Future en tres partes, la última emitida de abril a junio de 2026; Wikipedia en inglés y japonés y Anime Filler Guide) y el manga completo (232 capítulos; AniList indica 236 porque suma el one-shot «Terraforming» y los tres capítulos especiales de «4D Science» del tomo 27, que no son capítulos numerados ni tienen anime). Decisión sobre el especial de TV «Ryusui» (10 de julio de 2022): no lleva número, porque Wikipedia y Anime Filler Guide lo cuentan como el «35.5» y fuera de los 94 (Anime Filler List lo numera como 36, pero es la única). Es canon y adapta los caps. 84-89, así que hay que verlo entre los capítulos 35 y 36; esos capítulos del manga quedan dentro del arco «La era de la exploración». Los nombres de los arcos son traducciones al español de los nombres en inglés que usan las guías (Epicstream, We Got This Covered y Deltia's Gaming; no hay títulos oficiales), salvo «Stone Wars», que es el título de la temporada 2: el arco «Communications» (caps. 51-82) se ha partido en «Comunicaciones» (T1) y «Stone Wars» (T2). Equivalencias según la guía capítulo a capítulo de Anime Filler Guide y los rangos por temporada de MyAnimeList (T1: 1-60; Stone Wars: 60-84; Ryusui: 84-89; New World: 90-142; Science Future: 143-169, 170-198 y 199-232); son aproximadas (±1 capítulo en los cortes que caen a mitad de capítulo). Anime Filler List no registra relleno. No hay películas de cine (el «Ryusui» es un especial de TV)."
});
