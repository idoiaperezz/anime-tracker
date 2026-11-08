// Detalles de Re:Zero (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "rezerostartinglifeinanotherworld",
  // Colores de la serie en su rastreador (claro / oscuro)
  tema: {
    claro:  { accent: "#4b6fd6", accentRgb: "75, 111, 214", accentDeep: "#23367a", accent2: "#7b4fa0", onAccent: "#ffffff" },
    oscuro: { accent: "#8fb0ff", accentRgb: "143, 176, 255", accentDeep: "#4b6fd6", accent2: "#c49bea", onAccent: "#070b1f" }
  },
  animeTotal: 85,
  mangaTotal: 0,
  // [nombre, desde, hasta, relleno (0/1), null, null]
  arcos: [
    ["Arco 1: La capital", 1, 3, 0, null, null],
    ["Arco 2: La mansión", 4, 11, 0, null, null],
    ["Arco 3: Truth of Zero", 12, 25, 0, null, null],
    ["Arco 4: El Santuario", 26, 50, 0, null, null],
    ["Arco 5: Pristella", 51, 66, 0, null, null],
    ["Arco 6: La Torre de Vigilancia de Pléyades", 67, 85, 0, null, null]
  ],
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Re:Zero: Memory Snow", anio: 2018, despues: 11, tipo: "no-canon", nota: "OVA de una hora estrenada en cines de Japón. Historia aparte y cómica tras la batalla contra los mabestias (en el montaje del director va como cap. 11.5); también se puede ver tras el cap. 25." },
    { titulo: "Re:Zero: The Frozen Bond", anio: 2019, despues: 25, tipo: "precuela", nota: "OVA estrenada en cines de Japón. Cuenta el pasado de Emilia y Puck en el bosque de Elior; aunque es una precuela, se recomienda verla tras la primera temporada y antes de la segunda." }
  ],
  nota: "Incluye las cuatro temporadas de TV emitidas hasta noviembre de 2026 con numeración continua: T1 (1–25, versión de TV original; no la «Director's Cut» de 13 episodios de una hora), T2 (26–50, en dos partes: 26–38 y 39–50), T3 (51–66: «Ataque» 51–58 y «Contraataque» 59–66) y T4 (67–85: «Pérdida» 67–77 y «Recuperación» 78–85, terminó el 30 de septiembre de 2026). No hay quinta temporada anunciada. El origen es una novela ligera (y web novel), no un manga, así que no hay equivalencia con capítulos de manga: los arcos son los «Arcos» de la novela que adapta cada tramo (T1 = arcos 1–3, volúmenes 1–9; T2 = arco 4, vols. 10–15; T3 = arco 5, vols. 16–20; T4 = arco 6, vols. 21–25). Los nombres de los arcos son descriptivos y no oficiales; «Truth of Zero» se deja en inglés, como se le conoce habitualmente. El episodio 26 recoge aún el epílogo del arco 3 (la Wikipedia japonesa dice que la T2 empieza «desde el final del arco 3»), pero se cuenta dentro del arco 4 como hacen la Wikipedia inglesa y MyAnimeList; ese límite es aproximado. El episodio 1 es especial de doble duración y cuenta como uno. Sin relleno según Anime Filler List. Fuentes: Wikipedia (inglés y japonés), MyAnimeList, Anime Filler List y prensa (Anime Corner, AniTrendz)."
});
