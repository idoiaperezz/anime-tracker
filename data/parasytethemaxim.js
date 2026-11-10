// Detalles de Parasyte -the maxim- (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "parasytethemaxim",
  // Colores de la serie en su rastreador (claro / oscuro): turquesa frío de Migi y rojo sangre
  tema: {
    claro:  { accent: "#0f6f7a", accentRgb: "15, 111, 122", accentDeep: "#073d43", accent2: "#c0262d", onAccent: "#ffffff" },
    oscuro: { accent: "#3fd0d4", accentRgb: "63, 208, 212", accentDeep: "#0f6f7a", accent2: "#ff6b6b", onAccent: "#021314" }
  },
  animeTotal: 24,
  mangaTotal: 64,
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    ["Migi", 1, 4, 0, 1, 9],
    ["La madre de Shinichi", 5, 7, 0, 10, 18],
    ["Hideo Shimada", 8, 10, 0, 19, 26],
    ["Kana", 11, 12, 0, 27, 31],
    ["Reiko Tamura", 13, 18, 0, 32, 49],
    ["El asalto al ayuntamiento", 19, 20, 0, 50, 55],
    ["Gotou", 21, 23, 0, 56, 62],
    ["Uragami y el desenlace", 24, 24, 0, 63, 64]
  ],
  // El anime adapta el manga entero
  soloManga: [],
  // Anime Filler List marca los 24 capítulos como canon del manga
  relleno: [],
  nota: "Incluye el anime completo (24 capítulos, 2014-2015) y el manga completo (64 capítulos en 10 tomos, 1990-1995; Wikipedia en inglés y en japonés), que el anime adapta entero (Anime Filler Guide y Wikipedia en inglés), trasladando la historia a la actualidad. No tiene relleno: Anime Filler List marca los 24 capítulos como canon del manga. No hay películas de anime: las dos películas de 2014 y 2015 son de imagen real, igual que la serie de Netflix Parasyte: The Grey. La serie no tiene arcos con nombre oficial: los tramos tienen nombres descriptivos en español, según el personaje o el episodio central de cada parte. Equivalencias según las fichas por episodio de AnimeOshi (cap. 4 = caps. 7-9, 5 = 10-12, 6 = 13-15, 8 = 19-21, 10 = 25-26, 12 = 29-31, 14 = 35-37, 16 = 41-43, 18 = 47-49, 20 = 53-55, 21 = 56-57, 22 = 57-60 y 23 = 61-62), contrastadas con los títulos de los capítulos del manga (Wikipedia en inglés, lista de tomos): el cap. 19 se titula «Hideo Shimada», el 29 «Kana», el 31 «Lágrimas rojas», el 32 «Reiko Tamura», los 42-43 «Una pequeña familia» (cap. 16, «Familia feliz»), el 52 «Rodeados», el 58 «Migi» y el 62 «Mañana», que encajan con los cortes. Aproximados, porque solo los respalda AnimeOshi: el corte entre los capítulos 4 y 5 (cap. 9/10), entre el 10 y el 11 (cap. 26/27), entre el 18 y el 19 (cap. 49/50), entre el 20 y el 21 (cap. 55/56) y entre el 23 y el 24 (cap. 62/63)."
});
