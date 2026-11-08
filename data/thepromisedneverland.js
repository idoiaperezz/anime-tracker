// Detalles de The Promised Neverland (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "thepromisedneverland",
  // Colores de la serie en su rastreador (claro / oscuro)
  tema: {
    claro:  { accent: "#2f6b46", accentRgb: "47, 107, 70", accentDeep: "#173823", accent2: "#b08d57", onAccent: "#ffffff" },
    oscuro: { accent: "#6fcf97", accentRgb: "111, 207, 151", accentDeep: "#2f6b46", accent2: "#f2ebdd", onAccent: "#06140c" }
  },
  animeTotal: 23,   // 12 (T1, 2019) + 11 (T2, 2021)
  mangaTotal: 181,  // 181 capítulos en 20 tomos (2016-2020), sin contar historias cortas extra
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Temporada 1
    ["Fuga de Grace Field", 1, 12, 0, 1, 37],
    // Temporada 2: los primeros capítulos siguen el manga; después es en gran parte original
    ["Bosque prometido", 13, 15, 0, 38, 52],
    ["Búsqueda de Minerva y desenlace (versión original del anime)", 16, 23, 0, 53, null, 64]
  ],
  // Parte del manga sin equivalencia en el anime (la T2 se la salta o la resume a su manera)
  soloManga: [
    ["Goldy Pond (no adaptado)", null, null, 0, 65, 95],
    ["Los Siete Muros (solo elementos sueltos en la T2)", null, null, 0, 96, 145],
    ["Batalla de la capital (solo elementos sueltos en la T2)", null, null, 0, 146, 181]
  ],
  // Anime Filler List no registra relleno (los caps. 15-17 y 19 son mixtos y del 20 al 23 son «anime canon»)
  relleno: [],
  nota: "Incluye las dos temporadas de TV (23 capítulos: 12 de la T1 en 2019 y 11 de la T2 en 2021, numerados de forma continua; Wikipedia en inglés) y el manga completo (181 capítulos en 20 tomos, 2016-2020; Wikipedia en inglés y japonés). La T1 adapta los caps. 1-37 (la fuga de Grace Field; Wikipedia en japonés, en español —«los cuatro primeros tomos y parte del quinto»— y guías de episodios). La T2 adapta el Bosque prometido (caps. 38-52, Wikipedia en inglés) y desde el comienzo de la Búsqueda de Minerva se vuelve en gran parte original: se salta por completo Goldy Pond, da un salto temporal de más de un año, adelanta el regreso de Norman y de Isabella y termina con un desenlace propio que solo toma elementos sueltos de los Siete Muros y de la Batalla de la capital (Wikipedia en inglés, Den of Geek). Por eso, en la rejilla, los caps. 16-23 equivalen solo al tramo del refugio (caps. 53-64, aproximado) y el resto del manga (65-181) aparece como «solo manga»: para conocer la historia original hay que leer desde el cap. 53 (o desde el 38). Anime Filler List no registra relleno: los caps. 15-17 y 19 son mixtos y los 20-23 son «anime canon» (originales, pero no relleno), así que cuentan como canon. Los nombres de los arcos son traducciones al español de los títulos en inglés y japonés (no hay títulos oficiales en español). Límites del manga según Wikipedia en japonés (GF 1-37, Minerva 38-64, Goldy Pond 65-95, Siete Muros 96-145, Batalla de la capital 146-181), cotejados con Wikipedia en inglés (Bosque prometido 38-52) y guías de fans (Búsqueda de Minerva desde el 53, Goldy Pond hasta el 95, nuevo arco desde el 96 y la capital desde el 146). Aproximado: el inicio de Goldy Pond (65 según Wikipedia en japonés; otras guías lo sitúan hacia el 74-75) y el reparto de capítulos dentro de la T2."
});
