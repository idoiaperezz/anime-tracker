// Detalles de Kaguya-sama: Love is War (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "kaguyasamaloveiswar",
  // Colores de la serie en su rastreador (claro / oscuro): rojo rosado romántico y dorado de la academia Shuchiin
  tema: {
    claro:  { accent: "#be185d", accentRgb: "190, 24, 93", accentDeep: "#831843", accent2: "#a16207", onAccent: "#ffffff" },
    oscuro: { accent: "#f472b6", accentRgb: "244, 114, 182", accentDeep: "#be185d", accent2: "#fcd34d", onAccent: "#1f0612" }
  },
  animeTotal: 37,   // 12 (T1) + 12 (T2, Love is War?) + 13 (T3, Ultra Romantic)
  mangaTotal: 281,  // 281 capítulos en 28 tomos
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Temporada 1
    ["Comienza la guerra de amor", 1, 7, 0, 1, 29],
    ["Antes de las vacaciones de verano", 8, 10, 0, 30, 40],
    ["Vacaciones de verano: los fuegos artificiales", 11, 12, 0, 41, 46],
    // Temporada 2: Love is War?
    ["Segundo trimestre: el fin del mandato", 13, 15, 0, 47, 60],
    ["Elecciones del consejo estudiantil", 16, 18, 0, 61, 69],
    ["El nuevo consejo con Miko Iino", 19, 20, 0, 70, 79],
    ["Festival deportivo: el pasado de Ishigami", 21, 24, 0, 80, 92],
    // Temporada 3: Ultra Romantic
    ["Antes del festival cultural", 25, 30, 0, 93, 114],
    ["Festival cultural (Hōshin) y las dos confesiones", 31, 37, 0, 115, 138]
  ],
  // Parte del manga que la serie de TV no adapta
  soloManga: [
    ["The First Kiss Never Ends (en película)", null, null, 0, 139, 151],
    ["Resto del manga (sin serie de TV)", null, null, 0, 152, 281]
  ],
  // Sin relleno (Anime Filler List)
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Kaguya-sama: Love is War – The First Kiss Never Ends", anio: 2022, despues: 37, tipo: "canon", manga: [139, 151], nota: "Continuación directa de la temporada 3 (estreno en Japón el 17 de diciembre de 2022). En TV y streaming se emitió también dividida en 4 capítulos (38-41). Rango del manga aproximado: algunas guías la sitúan en los caps. 142-151 y recomiendan seguir leyendo en el 152." }
  ],
  nota: "Incluye las tres temporadas de TV (37 capítulos numerados de forma continua: 12 + 12 de «Love is War?» + 13 de «Ultra Romantic») y el manga completo (281 capítulos en 28 tomos). Es una comedia de capítulos con varios segmentos que el anime adapta desordenados: los arcos son agrupaciones descriptivas por temporada y por los grandes eventos (vacaciones de verano, elecciones del consejo, festival deportivo, festival cultural Hōshin), con nombres en español puestos para esta ficha, no títulos oficiales. Por eso las equivalencias con el manga son aproximadas: algunos capítulos salen antes o después de su tramo (p. ej., el cap. 55 en el capítulo 8, el 30 en el 13 o los 100-101 en el 24) y otros no se adaptan. La temporada 3 termina hacia el cap. 138 (las guías recomiendan seguir en el 137-139). Anime Filler List no registra relleno. No cuentan como capítulos la OVA (2021), la película «The First Kiss Never Ends» (2022; caps. ≈139-151 del manga, en «solo manga») ni el especial de TV «The Stairway to Adulthood» (31-12-2025, 2 partes), que salta a capítulos sueltos posteriores (aproximadamente caps. 163-221; las fuentes no coinciden). La película final con historia de Aka Akasaka está anunciada sin fecha a noviembre de 2026. Totales según Wikipedia (inglés) y la lista de capítulos de Wikipedia; equivalencias según la lista por capítulo del foro de MyAnimeList, la lista de capítulos de Wikipedia y Epicstream."
});
