// Detalles de Assassination Classroom (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "assassinationclassroom",
  // Colores de la serie en su rastreador (claro / oscuro)
  tema: {
    claro:  { accent: "#b58900", accentRgb: "181, 137, 0", accentDeep: "#5a4400", accent2: "#1f2f5a", onAccent: "#ffffff" },
    oscuro: { accent: "#f2c418", accentRgb: "242, 196, 24", accentDeep: "#b58900", accent2: "#7aa2ff", onAccent: "#1a1400" }
  },
  animeTotal: 47, // 2 temporadas de TV: 22 + 25 (sin OVAs, ONA «Kagaijugyou-hen» ni películas)
  mangaTotal: 180, // 180 capítulos numerados en 21 tomos (AniList cuenta 188: suma los 8 extras de los tomos)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Temporada 1 (1-22)
    ["Assassination Time", 1, 6, 0, 1, 14],
    ["School Trip Time", 7, 8, 0, 15, 19],
    ["Transfer Student Time", 9, 11, 0, 20, 32],
    ["Ball Game Tournament Time", 12, 12, 0, 33, 36],
    ["End-of-Term Time", 13, 16, 0, 37, 56],
    ["Island Time", 17, 22, 0, 57, 73],
    // Temporada 2 (23-47)
    ["Summer Festival Time", 23, 23, 0, 74, 79],
    ["Itona Horibe Time", 24, 26, 0, 80, 90],
    ["Leader Time", 27, 28, 0, 91, 97],
    ["Reaper Time", 29, 30, 0, 98, 109],
    ["School Festival Time", 31, 32, 0, 110, 118],
    ["End-of-Term Time, 2nd Period", 33, 35, 0, 119, 128],
    ["Past Time", 36, 38, 0, 129, 140],
    ["Discord Time", 39, 41, 0, 141, 153],
    ["Valentine's Day Time", 42, 42, 0, 154, 160],
    ["Graduation Time", 43, 47, 0, 161, 180]
  ],
  // Sin capítulos del manga pendientes: la temporada 2 adapta hasta el final
  soloManga: [],
  // Sin relleno (Anime Filler List: 0 %; el único capítulo «mixed», el 5, cuenta como canon)
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Assassination Classroom the Movie: 365 Days' Time", anio: 2016, despues: 47, tipo: "recopilatorio", nota: "Resumen de la serie de TV desde el punto de vista de Nagisa y Karma, con escenas nuevas situadas justo después del último capítulo. Se estrenó junto al corto «Koro-sensei Q!»." },
    { titulo: "Assassination Classroom the Movie: Our Time", anio: 2026, despues: 47, tipo: "canon", nota: "«Minna no Jikan»: adapta historias del manga que la TV se saltó, ambientadas 15 días antes del plazo para matar a Koro-sensei (hacia el cap. 42), pero da por vista toda la serie, así que conviene verla al final (momento aproximado)." }
  ],
  nota: "Incluye el anime de TV completo (47 capítulos: temporada 1 de 22 y temporada 2 de 25; sin las OVAs, el ONA «Kagaijugyou-hen» ni las películas) y el manga completo (180 capítulos en 21 tomos, según las Wikipedias en inglés y japonés; AniList dice 188 porque suma los 8 extras de los tomos 1, 2, 7 y 21). No hay nombres de arco en español de uso común ni oficiales: cada arco lleva el título original en inglés de su capítulo principal (todos los capítulos de la serie se llaman «… Time»). No tiene relleno según Anime Filler List (citada por Looper y Quote The Anime; el capítulo 5, «mixed», cuenta como canon). La temporada 1 adapta los capítulos 1-73 y la temporada 2 los 74-180 (Quora, el cruce de títulos de la Wikipedia en inglés —el capítulo 22 de TV, «Nagisa Time», cierra el combate con Takaoka del capítulo 73— y el director, que anunció que la temporada 2 llegaba al final del manga). Los capítulos 78 y 79 (tomo 9) no salen en la TV: solo los adapta el ONA «Kagaijugyou-hen» (MyAnimeList), así que van dentro de «Summer Festival Time». Los límites de cada arco salen de cruzar los títulos de los capítulos de TV con los del manga (Wikipedia en inglés), la estructura por meses de la Wikipedia en japonés y los resúmenes de la temporada 2; las equivalencias dentro de cada temporada son aproximadas (1-2 capítulos de margen) y se reparten de forma uniforme dentro de cada arco."
});
