// Detalles de Fullmetal Alchemist: Brotherhood (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "fullmetalalchemistbrotherhood",
  // Colores de la serie en su rastreador (claro / oscuro)
  tema: {
    claro:  { accent: "#b02a1e", accentRgb: "176, 42, 30", accentDeep: "#5e130c", accent2: "#c99a1c", onAccent: "#ffffff" },
    oscuro: { accent: "#ff6b57", accentRgb: "255, 107, 87", accentDeep: "#b02a1e", accent2: "#ffd257", onAccent: "#1a0604" }
  },
  animeTotal: 64,
  // El manga tiene 108 capítulos numerados; AniList cuenta 116 porque suma los 8 extras (gaiden y especiales)
  mangaTotal: 108,
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Cap. 1: episodio original del anime (Isaac McDougal); no adapta ningún capítulo del manga
    ["Prólogo: El Alquimista de Hielo", 1, 1, 0, null, null],
    // Cap. 2: pasado de los hermanos (material de los flashbacks del tomo 1); cap. 3: Liore
    ["Los hermanos Elric y Liore", 2, 3, 0, 1, 4],
    ["Shou Tucker y Scar", 4, 5, 0, 5, 7],
    ["El Laboratorio 5", 6, 10, 0, 8, 16],
    // Cap. 14: asalto al Devil's Nest y Greed fundido por Padre (manga 28–31); cap. 15 «Envoy from the East» = manga 32
    ["Rush Valley y Dublith", 11, 14, 0, 17, 31],
    ["Los emisarios de Xing y Lust", 15, 19, 0, 32, 41],
    ["Hohenheim y el regreso de Scar", 20, 22, 0, 42, 46],
    ["Gula y el encuentro con Padre", 23, 29, 0, 47, 56],
    ["La guerra de exterminio de Ishval", 30, 30, 0, 57, 61],
    ["La fortaleza de Briggs", 31, 38, 0, 62, 72],
    ["Xerxes y la ventisca del norte", 39, 44, 0, 73, 82],
    ["El Día Prometido: La batalla de Central", 45, 54, 0, 83, 95],
    ["El Día Prometido: La batalla final", 55, 64, 0, 96, 108]
  ],
  // Episodios de relleno/recap sueltos (Anime Filler List)
  relleno: [27],
  // Texto para el arco del anime sin capítulos de manga (el cap. 1 es original del anime)
  textoSinManga: "original del anime, sin manga", // etiqueta del arco y del cuadro del capítulo (en vez de «flashback»)
  notaFlashback: "Episodio original del anime (el Alquimista de Hielo no existe en el manga): no adapta ningún capítulo. El manga empieza con el cap. 2–3 del anime.",
  nota: "Incluye el anime completo (64 capítulos) y el manga completo (108 capítulos numerados; los 8 extras —gaiden y especiales— no están en la rejilla, por eso AniList dice 116). Los nombres de los arcos son descriptivos en español: la serie no tiene títulos oficiales de arco. El cap. 1 del anime es original (Isaac McDougal, el Alquimista de Hielo) y no tiene equivalencia en el manga; el cap. 2 resume el pasado de los hermanos con material de los primeros capítulos y el cap. 3 arranca con Liore (manga cap. 1). Según Anime Filler List solo el cap. 27 («Interlude Party») es relleno (recap); los caps. 4, 9, 13 y 14 son mixtos y cuentan como canon. Las equivalencias entre anime y manga son aproximadas (1–2 capítulos de margen): salen de cruzar los títulos de episodios y capítulos de Wikipedia (inglés e italiano) con AnimeStoryGuide, y se reparten de forma uniforme dentro de cada arco. Revisión posterior con otras fuentes (títulos japoneses de Wikipedia en japonés cruzados con los títulos de los capítulos y sinopsis de MyAnimeList): el cap. 14 del anime termina con Greed fundido por Padre (manga cap. 31) y el 15 arranca con el cap. 32, así que el límite entre «Rush Valley y Dublith» y «Los emisarios de Xing» se movió de 29/30 a 31/32; los límites 54/55 (muerte de Envy, manga 95 / Sloth y Hohenheim, 96) y 44/45 (manga 82/83) se confirmaron, aunque el cap. 82 del manga se reparte entre los caps. 44 y 45 del anime (aproximado)."
});
