// Detalles de Attack on Titan / Shingeki no Kyojin (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "attackontitan",
  // Colores de la serie en su rastreador (claro / oscuro)
  tema: {
    claro:  { accent: "#4d6b2f", accentRgb: "77, 107, 47", accentDeep: "#2a3d18", accent2: "#a8742a", onAccent: "#ffffff" },
    oscuro: { accent: "#9ab86a", accentRgb: "154, 184, 106", accentDeep: "#4d6b2f", accent2: "#e0b36a", onAccent: "#0d1406" }
  },
  animeTotal: 89,   // 87 capítulos de TV + los 2 especiales The Final Chapters (88 y 89, como en Anime Filler List)
  mangaTotal: 139,  // 139 capítulos en 34 tomos (AniList dice 141)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    ["Temporada 1: La caída de Shiganshina", 1, 4, 0, 1, 4],
    ["Temporada 1: La batalla de Trost", 5, 13, 0, 5, 18],
    ["Temporada 1: El Titán Hembra – La 57.ª expedición", 14, 22, 0, 19, 30],
    ["Temporada 1: El Titán Hembra – El asalto a Stohess", 23, 25, 0, 31, 33],
    ["Temporada 2: Choque de titanes", 26, 37, 0, 34, 50],
    ["Temporada 3: La rebelión (el Gobierno Real)", 38, 49, 0, 51, 72],
    ["Temporada 3: Retorno a Shiganshina", 50, 56, 0, 73, 85],
    ["Temporada 3: El sótano", 57, 59, 0, 86, 90],
    ["Temporada final: Marley", 60, 68, 0, 91, 106],
    ["Temporada final: La guerra por Paradis", 69, 75, 0, 107, 116],
    ["Temporada final (Parte 2): La guerra por Paradis", 76, 87, 0, 117, 130],
    ["The Final Chapters: El Retumbar", 88, 88, 0, 131, 134],
    ["The Final Chapters: La batalla del cielo y la tierra", 89, 89, 0, 135, 139]
  ],
  // Sin relleno: Anime Filler List no marca ningún capítulo de relleno (22, 33 y 38–41 son mixtos y cuentan como canon)
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Attack on Titan – Parte 1: Crimson Bow and Arrow", anio: 2014, despues: 13, tipo: "recopilatorio", nota: "Resume los capítulos 1-13." },
    { titulo: "Attack on Titan – Parte 2: Wings of Freedom", anio: 2015, despues: 25, tipo: "recopilatorio", nota: "Resume los capítulos 14-25." },
    { titulo: "Attack on Titan: The Roar of Awakening", anio: 2018, despues: 37, tipo: "recopilatorio", nota: "Resume la temporada 2 (capítulos 26-37)." },
    { titulo: "Attack on Titan: Chronicle", anio: 2020, despues: 59, tipo: "recopilatorio", nota: "Resume las temporadas 1 a 3 (capítulos 1-59), antes de la temporada final." },
    { titulo: "Attack on Titan: The Last Attack", anio: 2024, despues: 89, tipo: "recopilatorio", nota: "Une y remasteriza los dos especiales The Final Chapters (capítulos 88 y 89): puede verse en su lugar, tras el 87." }
  ],
  nota: "Incluye el anime completo (89 capítulos: temporadas 1 a 3, The Final Season partes 1 y 2, y los dos especiales The Final Chapters como capítulos 88 y 89, igual que en Anime Filler List) y el manga completo (139 capítulos en 34 tomos). Wikipedia en inglés numera los especiales en su versión redistribuida en 7 capítulos (88–94): el 88 de esta ficha equivale a los 88–90 y el 89 a los 91–94. No cuenta el recap 13.5 ni los OVA. No hay relleno: Anime Filler List solo marca como mixtos los capítulos 22, 33 y 38–41. Las equivalencias son aproximadas (repartidas de forma uniforme dentro de cada arco); los cortes de temporada (cap. 33, 50, 72, 90, 116 y 130 del manga) salen de Wikipedia, Anime Filler List, el FAQ de r/ShingekiNoKyojin y guías de dónde seguir el manga. Verificación posterior con otras fuentes: los cortes de temporada coinciden con MangaShed y con los títulos compartidos entre capítulo del anime y del manga (Wikipedia inglés y japonés: «Wall» 25↔33, «Scream» 37↔50, «Night of the Battle to Retake the Wall» 49↔72, «To the Other Side of the Wall» 59↔90, «Brave Volunteers» 68↔106, «Above and Below» 75↔116, «The Dawn of Humanity» 87↔130); Wikipedia inglés da 1-34 y 35-51 para las temporadas 1 y 2 porque cuenta capítulos adaptados a medias, y MangaShed sitúa el fin de la parte 1 de la temporada final en el 114 (minoritario). Los cortes internos 18/19, 30/31 y 85/86 se apoyan en los títulos (capítulos 14, 23 y 57 del anime = caps. 19, 31 y 86 del manga) y en Otakumode (arco del Titán Hembra desde el cap. 19); el especial 1 adapta los caps. 131-134 (GamesRadar) y el 2 los cinco restantes. Los nombres de arco son traducciones al español de los nombres de uso habitual (Attack on Titan Wiki)."
});
