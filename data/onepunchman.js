// Detalles de One-Punch Man (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "onepunchman",
  // Colores de la serie en su rastreador (claro / oscuro)
  tema: {
    claro:  { accent: "#b88400", accentRgb: "184, 132, 0", accentDeep: "#5c4200", accent2: "#e03131", onAccent: "#ffffff" },
    oscuro: { accent: "#ffd43b", accentRgb: "255, 212, 59", accentDeep: "#e0a800", accent2: "#ff6b6b", onAccent: "#1a1400" }
  },
  animeTotal: 36,   // T1 (12) + T2 (12) + T3 parte 1 (12, oct-dic 2025); la parte 2 de la T3 se estrena en 2027
  mangaTotal: 243,  // numeración de VIZ/Shonen Jump (= número de entrega de Tonari no Young Jump − 45): cap. 243 = entrega 288 del 5-11-2026
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Temporada 1
    ["Saitama y Genos / La Casa de la Evolución", 1, 3, 0, 1, 11],
    ["El Grupo Paraíso y Sonic", 4, 4, 0, 12, 15],
    ["El registro de héroes", 5, 6, 0, 16, 20],
    ["El meteorito gigante", 7, 7, 0, 21, 22],
    ["El Rey de las Profundidades", 8, 9, 0, 23, 29],
    ["La invasión de Boros", 10, 12, 0, 30, 37],
    // Temporada 2
    ["King y la aparición de Garou", 13, 14, 0, 38, 45],
    ["La caza de héroes", 15, 16, 0, 46, 52],
    ["El torneo de artes marciales (Súper Pelea)", 17, 20, 0, 53, 71],
    ["El monstruo humano", 21, 24, 0, 72, 84],
    // Temporada 3 (parte 1)
    ["La Asociación de Monstruos: el asalto", 25, 36, 0, 85, 116]
  ],
  // Capítulos del manga que el anime aún no ha adaptado
  soloManga: [
    ["La Asociación de Monstruos (continuación, aún sin anime)", null, null, 0, 117, 170],
    ["Neo Héroes (aún sin anime)", null, null, 0, 171, 243]
  ],
  // Episodios de relleno sueltos (Anime Filler List: ninguno)
  relleno: [],
  nota: "Incluye las temporadas de TV 1, 2 y la primera parte de la 3 (36 capítulos; la segunda parte de la temporada 3 está anunciada para 2027) y el manga de Yusuke Murata, que sigue en publicación (243 capítulos a 7 de noviembre de 2026). No cuenta las OVAs ni los especiales. Según Anime Filler List no hay relleno. Numeración del manga: Tonari no Young Jump (Japón) numera sus entregas con un contador propio que incluye extras (entrega 288 el 5-11-2026, comprobado en la web de Tonari), así que se usa la numeración de capítulos de VIZ/Shonen Jump, que en 2026 es la entrega de Tonari menos 45 (calendario de sports.ru: entrega 286 = cap. 241, 288 = cap. 243; coincide con VIZ, cap. 236 en septiembre de 2026). La lista de Wikipedia en inglés va 5 por delante a partir de los capítulos redibujados (su cap. 246, «It'll All Work Out», es aquí el 241). Hasta el cap. 194 (tomo 37) todas las numeraciones coinciden; el último capítulo es aproximado (±2: en julio de 2025 la entrega 256 se tituló «209撃目», 2 menos que con la regla −45). Fronteras de la temporada 2 contrastadas con los resúmenes de episodios de Wikipedia (el torneo termina en el ep. 20; en el 21 Saitama derrota a Bakuzan monstruificado, cap. 72) y con Beebom; el final de la parte 1 de la T3 (ep. 36: Saitama derrota a Orochi, tomo 24, caps. 113-118) cuadra con el cap. 116; la Asociación de Monstruos termina en el cap. 170 según WeGotThisCovered y AnimeExplained. Los nombres de los arcos son traducciones descriptivas al español: no hay nombres oficiales en español de uso común (en inglés: Saitama Introduction, House of Evolution, Paradise Group, Hero Registration, Giant Meteor, Sea Monster, Alien Conquerors, Garou Introduction, Hero Hunt, Super Fight, Human Monster, Monster Association, Neo Heroes). Fuentes: Wikipedia en inglés (lista de capítulos y temporada 3), Anime Filler List, CBR (la temporada 3 acaba en el capítulo 116) y guías de arcos (Deltia's Gaming, Skip the Filler). Las equivalencias entre anime y manga son aproximadas (unos 2 capítulos de margen)."
});
