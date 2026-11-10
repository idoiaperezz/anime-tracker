// Detalles de Akame ga Kill! (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "akamegakill",
  // Colores de la serie en su rastreador (claro / oscuro): rojo de los ojos de Akame y negro de Night Raid
  tema: {
    claro:  { accent: "#b3121f", accentRgb: "179, 18, 31", accentDeep: "#4f060c", accent2: "#3d3a4f", onAccent: "#ffffff" },
    oscuro: { accent: "#ff4655", accentRgb: "255, 70, 85", accentDeep: "#b3121f", accent2: "#c9c6d8", onAccent: "#1a0306" }
  },
  animeTotal: 24,
  mangaTotal: 78,   // 77 capítulos numerados + capítulo final, sin contar los extras (AniList indica 80)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    ["Night Raid", 1, 3, 0, 1, 4],
    ["Zanku y Seryu", 4, 6, 0, 5, 9],
    ["Las Tres Bestias y Esdeath", 7, 10, 0, 10, 19],
    ["El Dr. Stylish y los Jaegers", 11, 12, 0, 20, 23],
    ["Las bestias peligrosas", 13, 14, 0, 24, 27],
    ["El Camino de la Paz", 15, 17, 0, 28, 33],
    ["El gran general Budo", 18, 18, 0, 34, 36],
    ["La revolución (final propio del anime)", 19, 24, 0, 37, null, 38]
  ],
  // Capítulos del manga sin equivalencia en el anime (la parte original del anime solo toma elementos sueltos)
  soloManga: [
    ["Wild Hunt, la revolución y el final del manga (no adaptados)", null, null, 0, 39, 78]
  ],
  // Anime Filler List no registra relleno: el 19 es mixto y del 20 al 24 son «anime canon», que cuentan como canon
  relleno: [],
  nota: "Incluye el anime completo (24 capítulos, 2014) y el manga principal completo: 78 capítulos en 15 tomos (2010-2016), es decir, los 77 numerados más el capítulo final; la Wikipedia en japonés lo cuenta como «78+7» (78 capítulos más 7 extras) y la lista de capítulos de la Wikipedia en inglés y Mangashed dan las mismas cifras. AniList indica 80, probablemente porque suma algunos extras (como el «Special Arc» del tomo 5 o el 33.5 del tomo 8), que aquí no cuentan. No incluye la precuela Akame ga Kill! Zero. La serie no tiene arcos con nombre oficial: los tramos tienen nombres descriptivos en español. El anime sigue el manga con bastante fidelidad hasta el capítulo 18; el 19 empieza adaptando los caps. 37-38 y desde ahí la historia es original (Wikipedia en japonés: «desde el capítulo 19, “Matar al destino”, es una historia original que reutiliza episodios del manga»; Wikipedia en inglés: los capítulos 20-24 son un arco original con un final distinto al del manga). Por eso los caps. 19-24 equivalen en la rejilla solo a los caps. 37-38, y todo el manga desde el cap. 39 (tomo 9) aparece como «solo manga»: el anime se salta por completo el arco de Wild Hunt y su final (la revolución, el destino de Esdeath, Tatsumi y Akame) es muy distinto; aunque toma nombres y escenas sueltas de capítulos posteriores, para conocer la historia original hay que leer desde el cap. 39. Todas las guías coinciden en ese punto (Anime Filler Guide, Mangashed y AnimeOshi: el anime cubre los caps. 1-38). Anime Filler List no registra relleno: el 19 es mixto y del 20 al 24 son «anime canon» (originales, pero no relleno), así que cuentan como canon. No hay películas de anime (AkaKill! Theater son cortos de un minuto). Equivalencias según la tabla episodio↔capítulo de Anime Filler Guide, contrastada con los títulos de los capítulos del manga (Wikipedia en inglés), que el anime reutiliza (cap. 1 = cap. 1, 2 = cap. 3, 4 = cap. 6, 6 = cap. 9, 11 = cap. 21, 12 = cap. 23, 14 = cap. 26, 15 = cap. 28, 18 = caps. 34-35), y con la tabla por bloques de Mangashed. Aproximados: el corte entre los capítulos 10 y 11 (cap. 19/20) y el corte entre los capítulos 18 y 19 (cap. 36/37; por los títulos, el cap. 36 podría ir ya en el 19)."
});
