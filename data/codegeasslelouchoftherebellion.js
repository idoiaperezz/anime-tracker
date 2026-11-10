// Detalles de Code Geass: Lelouch of the Rebellion (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "codegeasslelouchoftherebellion",
  // Colores de la serie en su rastreador (claro / oscuro): morado del Geass y rojo del sigilo
  tema: {
    claro:  { accent: "#6b2fa0", accentRgb: "107, 47, 160", accentDeep: "#3a1560", accent2: "#b8202e", onAccent: "#ffffff" },
    oscuro: { accent: "#b77ee8", accentRgb: "183, 126, 232", accentDeep: "#6b2fa0", accent2: "#ff5a6a", onAccent: "#160822" }
  },
  animeTotal: 50,   // 25 de la primera temporada (Stage 1-25) + 25 de R2 (Turn 1-25, numerados 26-50)
  mangaTotal: 0,    // anime original: el manga es una adaptación posterior
  // [nombre, desde, hasta, relleno (0/1), null, null]
  arcos: [
    ["Temporada 1: El nacimiento de Zero", 1, 7, 0, null, null],
    ["Temporada 1: Los Caballeros Negros y la batalla de Narita", 8, 12, 0, null, null],
    ["Temporada 1: Mao y el caballero de Euphemia", 13, 17, 0, null, null],
    ["Temporada 1: Shikinejima y Kyushu", 18, 20, 0, null, null],
    ["Temporada 1: La Zona Administrativa Especial de Japón", 21, 22, 0, null, null],
    ["Temporada 1: La Rebelión Negra", 23, 25, 0, null, null],
    ["R2: El despertar de Zero", 26, 29, 0, null, null],
    ["R2: Los Caballeros de la Mesa Redonda y el millón de Zeros", 30, 33, 0, null, null],
    ["R2: La Federación China", 34, 36, 0, null, null],
    ["R2: La Orden del Geass y las Naciones Unidas", 37, 41, 0, null, null],
    ["R2: La segunda batalla de Tokio", 42, 44, 0, null, null],
    ["R2: Ragnarök y el emperador Lelouch", 45, 47, 0, null, null],
    ["R2: Damocles y el Réquiem de Zero", 48, 50, 0, null, null]
  ],
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Code Geass: Lelouch of the Rebellion I – Initiation", anio: 2017, despues: 17, tipo: "recopilatorio", nota: "Resume los capítulos 1-17 de la primera temporada, con cambios de guion." },
    { titulo: "Code Geass: Lelouch of the Rebellion II – Transgression", anio: 2018, despues: 41, tipo: "recopilatorio", nota: "Resume los capítulos 18-25 de la primera temporada y 1-16 de R2 (26-41); recorta mucho la primera mitad de R2." },
    { titulo: "Code Geass: Lelouch of the Rebellion III – Glorification", anio: 2018, despues: 50, tipo: "recopilatorio", nota: "Resume los capítulos 17-25 de R2 (42-50). La trilogía cambia algunos hechos (Shirley sobrevive) y forma una continuidad propia." },
    { titulo: "Code Geass: Lelouch of the Re;surrection", anio: 2019, despues: 50, tipo: "canon", nota: "Secuela original para cine; sigue la continuidad de la trilogía recopilatoria (por ejemplo, Shirley sigue viva), así que conviene ver antes las tres películas." },
    { titulo: "Code Geass: Rozé of the Recapture", anio: 2024, despues: 50, tipo: "canon", nota: "Estrenada en cines de Japón en cuatro partes (mayo-agosto de 2024) y fuera de Japón en Disney+ como serie de 12 capítulos. Ambientada cinco años después de Re;surrection, con nuevos protagonistas." }
  ],
  nota: "Anime original de Sunrise (2006-2008): el manga es una adaptación posterior, así que no hay equivalencia con capítulos de manga. Incluye las dos temporadas de TV numeradas seguidas: la primera (Stage 1-25, capítulos 1-25) y R2 (Turn 1-24 y Final Turn, capítulos 26-50). No cuenta los dos resúmenes de la primera temporada (Stage 8.5 y 17.5), que no llevan número propio, ni los OVA recopilatorios Black Rebellion y Zero Requiem, ni los dramas de imagen. Sin relleno según Anime Filler List. Los tramos son descriptivos y no oficiales (la serie no tiene arcos con nombre), trazados a partir de los títulos y argumentos de cada capítulo en Wikipedia (inglés y japonés). Películas: la trilogía recopilatoria (21-10-2017, 10-2-2018 y 26-5-2018 en Japón; Wikipedia en francés da el 25-5-2018 para la tercera) cubre 1-17, 18-41 y 42-50 según Wikipedia en inglés y reseñas de la época; el reparto exacto de capítulos por película es aproximado porque las películas condensan y cambian escenas. Re;surrection (9-2-2019) es secuela de la continuidad de la trilogía. Rozé of the Recapture se incluye porque se estrenó en cines japoneses en cuatro partes (10-5, 7-6, 5-7 y 2-8-2024; Wikipedia en japonés y Anime News Network), aunque fuera de Japón se vio como serie en Disney+. Fuentes: Wikipedia (inglés, español, japonés y francés), Anime Filler List, Anime News Network y guías de orden de visionado."
});
