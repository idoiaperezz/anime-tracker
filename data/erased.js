// Detalles de Erased (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "erased",
  // Colores de la serie en su rastreador (claro / oscuro): rojo del Revival y azul de la nieve invernal
  tema: {
    claro:  { accent: "#b71c2c", accentRgb: "183, 28, 44", accentDeep: "#4a0a12", accent2: "#2b4c7e", onAccent: "#ffffff" },
    oscuro: { accent: "#ff5a64", accentRgb: "255, 90, 100", accentDeep: "#b71c2c", accent2: "#9bb8e0", onAccent: "#1a0306" }
  },
  animeTotal: 12,
  mangaTotal: 49,
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    ["El Revival (2006)", 1, 1, 0, 1, 6],
    ["Primer intento: salvar a Kayo (1988)", 2, 4, 0, 7, 13],
    ["Fugitivo (2006)", 5, 5, 0, 14, 18],
    ["Segundo intento: Kayo a salvo (1988)", 6, 9, 0, 19, 30],
    ["El asesino", 10, 10, 0, 31, 32],
    ["El despertar y el desenlace (final propio del anime)", 11, 12, 0, 33, null, 44]
  ],
  // Capítulos del manga que el anime no adapta
  soloManga: [
    ["Erased Re (tomo 9, historias paralelas)", null, null, 0, 45, 49]
  ],
  // Anime Filler List no marca ningún capítulo como relleno ni como mixto
  relleno: [],
  nota: "Incluye el anime completo (12 capítulos) y el manga completo: la historia principal tiene 44 capítulos en 8 tomos y el tomo 9, «Erased Re» (2016), reúne 5 historias paralelas sin numerar (Kayo, Kenya en dos partes, Sachiko y Airi), que aquí van como capítulos 45 a 49 en «soloManga»; así se llega a los 49 capítulos de AniList (Wikipedia en inglés y en japonés). La serie no tiene arcos oficiales: los tramos tienen nombres descriptivos en español y siguen los saltos entre 2006 y 1988, que la Wikipedia en inglés indica en el título de cada capítulo. No tiene relleno según Anime Filler List. Hasta el capítulo 10 el anime sigue el manga con bastante fidelidad; desde mitad del capítulo 11 cuenta una historia propia, porque el manga no había terminado (Wikipedia en japonés). Los capítulos 11 y 12 condensan muy libremente los capítulos 33 a 44: se saltan la trama de Airi y Kenya de 2005 y cambian el enfrentamiento final y el epílogo (2010 en el anime, 2012 en el manga), así que ese tramo no tiene equivalencia exacta. El cap. 32 (el pasado de Yashiro) no se adapta y va dentro de «El asesino». Fuentes de las equivalencias: las fichas por episodio de AnimeOshi, las fechas de los capítulos en la Wikipedia en inglés, la sinopsis del capítulo 5 en TV Guide y el foro de MyAnimeList (el capítulo 11 empieza en el cap. 32-33). Aproximados: el corte entre los capítulos 4 y 5 (cap. 13/14; AnimeOshi lo pone en 15/16, pero el cap. 14 ya pasa en 2006 y TV Guide sitúa la vuelta a 2006 en el capítulo 5) y el corte entre los capítulos 10 y 11 (cap. 32/33; AnimeOshi incluye el 33 en el capítulo 10)."
});
