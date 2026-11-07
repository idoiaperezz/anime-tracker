// Detalles de Demon Slayer: Kimetsu no Yaiba (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "demonslayerkimetsunoyaiba",
  // Colores de la serie en su rastreador (claro / oscuro)
  tema: {
    claro:  { accent: "#0b7a5c", accentRgb: "11, 122, 92", accentDeep: "#064734", accent2: "#d6336c", onAccent: "#ffffff" },
    oscuro: { accent: "#38d9a9", accentRgb: "56, 217, 169", accentDeep: "#0b7a5c", accent2: "#f783ac", onAccent: "#03140f" }
  },
  animeTotal: 63,   // 26 (T1) + 7 (Tren Infinito TV) + 11 (Distrito Rojo) + 11 (Aldea de los Herreros) + 8 (Entrenamiento de los Pilares)
  mangaTotal: 205,  // 205 capítulos oficiales (AniList cuenta 207, probablemente con extras)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Temporada 1: Tanjiro Kamado, Unwavering Resolve Arc
    ["Selección Final", 1, 5, 0, 1, 9],
    ["El pantano del secuestrador", 6, 7, 0, 10, 13],
    ["Asakusa", 8, 10, 0, 14, 19],
    ["La mansión Tsuzumi", 11, 14, 0, 20, 27],
    ["Monte Natagumo", 15, 21, 0, 28, 44],
    ["Entrenamiento de rehabilitación", 22, 26, 0, 45, 53],
    // Temporada 2 (parte 1): versión TV de la película, con un capítulo inicial original (el 27)
    ["Tren Infinito", 27, 33, 0, 54, 66],
    // Temporada 2 (parte 2)
    ["Distrito Rojo", 34, 44, 0, 67, 97],
    // Temporada 3
    ["Aldea de los Herreros", 45, 55, 0, 98, 127],
    // Temporada 4
    ["Entrenamiento de los Pilares", 56, 63, 0, 128, 139]
  ],
  // Parte del manga que la serie de TV no adapta
  soloManga: [
    ["Castillo Infinito (en películas)", null, null, 0, 140, 183],
    ["Cuenta atrás hasta el amanecer (aún sin anime)", null, null, 0, 184, 205]
  ],
  // Anime Filler List no registra ningún capítulo de relleno
  relleno: [],
  nota: "Incluye las cinco temporadas de TV (63 capítulos numerados de forma continua: Tanjiro Kamado, Unwavering Resolve; Tren Infinito; Distrito Rojo; Aldea de los Herreros y Entrenamiento de los Pilares) y el manga completo (205 capítulos; AniList indica 207). La trilogía de películas del Castillo Infinito no cuenta como capítulos del anime: el manga desde el cap. 140 aparece como «solo manga», y el arco del Castillo Infinito (caps. 140-183) se adapta en esas películas (la 1.ª se estrenó en Japón el 18 de julio de 2025; la 2.ª no tenía fecha anunciada a noviembre de 2026); el arco final (caps. 184-205) aún no tiene anime. Anime Filler List no registra relleno: el capítulo 27 (Kyojuro Rengoku, Pilar de la Llama) es original del anime y los 58-59 son mixtos, así que cuentan como canon. Los nombres de los arcos son traducciones al español de los títulos en inglés (Tren Infinito, Distrito Rojo, Aldea de los Herreros y Entrenamiento de los Pilares son los de uso común). Equivalencias según Wikipedia (inglés), Siliconera, Comicbook.com y Anime Filler List; son aproximadas dentro de cada arco. Cortes verificados con otras fuentes: Tren Infinito = caps. 54-66 y Distrito Rojo = caps. 67-97 (la visita a la casa de los Rengoku, caps. 67-69, abre el primer capítulo del Distrito Rojo; Wikipedia inglés de la temporada 2, guía de MyAnimeList, Anime Corner y Famitsu, que lo sitúa en los tomos 8-11), y la serie de TV termina en el cap. 139 con el Castillo Infinito desde el 140 (Anime Corner y Beebom)."
});
