// Detalles de Hunter x Hunter (2011) (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "hunterxhunter2011",
  // Colores de la serie en su rastreador (claro / oscuro)
  tema: {
    claro:  { accent: "#2f9e44", accentRgb: "47, 158, 68", accentDeep: "#1b5e2a", accent2: "#1c7ed6", onAccent: "#ffffff" },
    oscuro: { accent: "#69db7c", accentRgb: "105, 219, 124", accentDeep: "#2f9e44", accent2: "#74c0fc", onAccent: "#05140a" }
  },
  animeTotal: 148,  // anime completo (2011-2014)
  mangaTotal: 420,  // cap. 420 publicado el 6-9-2026; en pausa desde entonces (noviembre de 2026)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    ["Examen del Cazador", 1, 21, 0, 1, 38],
    ["Familia Zoldyck", 22, 26, 0, 39, 43],
    ["Torre del Cielo", 27, 38, 0, 44, 66],  // incluye la vuelta a la isla Ballena (eps. 37-38 = caps. 64-66)
    ["York Shin (Brigada Fantasma)", 39, 58, 0, 67, 119],
    ["Greed Island", 59, 75, 0, 120, 185],
    ["Hormigas Quimera: NGL y Gorteau del Este", 76, 110, 0, 186, 261],
    ["Hormigas Quimera: Asalto al palacio", 111, 136, 0, 262, 318],
    ["Elección del Decimotercer Presidente", 137, 148, 0, 319, 339]
  ],
  // Capítulos del manga que el anime no ha adaptado
  soloManga: [
    ["Expedición al Continente Oscuro (sin anime)", null, null, 0, 340, 348],
    ["Guerra de Sucesión (sin anime)", null, null, 0, 349, 420]
  ],
  // Episodios de relleno sueltos (Anime Filler List): dos recapitulaciones
  relleno: [13, 26],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Hunter x Hunter: Phantom Rouge", anio: 2013, despues: 58, tipo: "no-canon", nota: "Omokage, antiguo miembro de la Brigada Fantasma; al acabar York Shin." },
    { titulo: "Hunter x Hunter: The Last Mission", anio: 2013, despues: 75, tipo: "no-canon", nota: "Netero contra Jed en la Torre del Cielo; al acabar Greed Island, antes de las Hormigas Quimera." }
  ],
  nota: "Incluye el anime completo (148 capítulos, hasta la Elección del Decimotercer Presidente, cap. 339 del manga) y el manga hasta el capítulo 420 (publicado en septiembre de 2026; la serie volvió a entrar en pausa después). Los nombres de los arcos siguen Wikipedia en español; los dos arcos posteriores al anime (Continente Oscuro y Sucesión) no tienen nombre oficial en español y están traducidos del inglés (Dark Continent Expedition, Succession Contest). El único relleno son los episodios recapitulativos 13 y 26 (Anime Filler List; el 12 es mixto y cuenta como canon). El arco de las Hormigas Quimera está partido en el inicio del asalto al palacio: el ep. 111 («Asalto e invasión») adapta los caps. 262-265 según Anime Filler Guide, y el asalto («Charge, Part 1») empieza en el cap. 261 según la lista de capítulos de Wikipedia, que el ep. 110 cubre en parte; el corte es aproximado (±1 capítulo). Las fronteras Examen (eps. 1-21, caps. 1-38) / Zoldyck (eps. 22-26, caps. 39-43) se verificaron con Anime Filler Guide (ep. 21 = caps. 37-38; ep. 22 = caps. 39-40) y los títulos de los capítulos en Wikipedia. La Torre del Cielo se cuenta hasta el ep. 38 (como en Wikipedia) y por eso incluye los caps. 64-66 de la vuelta a la isla Ballena (eps. 37-38, según Anime Filler Guide); York Shin empieza en el cap. 67. El cap. 420 (6-9-2026) es el último publicado a noviembre de 2026 (Wikipedia, noticias de la pausa en Gameblog y FandomWire). Rangos de capítulos por arco contrastados en Wikipedia, Beebom y otras guías «anime to manga»; las equivalencias son aproximadas y se reparten de forma uniforme dentro de cada arco."
});
