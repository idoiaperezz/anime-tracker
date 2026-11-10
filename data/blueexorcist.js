// Detalles de Blue Exorcist (la ficha básica está en data/catalogo-auto.js)
// Numeración seguida: T1 = 1–25, Kyoto Saga = 26–37, Shimane Illuminati Saga = 38–49, Beyond the Snow Saga = 50–61, The Blue Night Saga = 62–73.
registrarSerie({
  id: "blueexorcist",
  // Colores de la serie en su rastreador (claro / oscuro): azul de las llamas de Rin y rojo de la corbata del uniforme
  tema: {
    claro:  { accent: "#1c56c4", accentRgb: "28, 86, 196", accentDeep: "#0d2f73", accent2: "#c92a2a", onAccent: "#ffffff" },
    oscuro: { accent: "#4dc3ff", accentRgb: "77, 195, 255", accentDeep: "#1c56c4", accent2: "#ff6b6b", onAccent: "#021422" }
  },
  animeTotal: 73,   // 25 (T1, 2011) + 12 (Kyoto Saga, 2017) + 12 (Shimane Illuminati Saga, 2024) + 12 (Beyond the Snow Saga, 2024) + 12 (The Blue Night Saga, 2025)
  mangaTotal: 171,  // manga en publicación: cap. 171 (noviembre de 2026); 34 tomos (hasta el cap. 166)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // ---- Temporada 1 (2011) ----
    ["True Cross Academy", 1, 13, 0, 1, 10],                       // 1–3 mixtos; 6 y 11 de relleno
    ["Exwire Training Camp", 14, 17, 0, 11, 15],                   // 16–17 mixtos
    ["Final alternativo (original del anime, el manga no lo sigue)", 18, 25, 1],
    // ---- Kyoto Saga (Kyoto 1–12 = 26–37): sigue al manga desde el 17, ignorando el final alternativo ----
    ["Kyoto Saga (Impure King)", 26, 37, 0, 16, 37],               // los caps. 35–37 (el Kraken) no tienen anime
    // ---- Shimane Illuminati Saga (1–12 = 38–49) ----
    ["Seven School Mysteries", 38, 39, 0, 38, 44],
    ["Shimane Illuminati Saga", 40, 49, 0, 45, 67],
    // ---- Beyond the Snow Saga (1–12 = 50–61) ----
    ["Aomori (Hachirōtarō)", 50, 55, 0, 68, 83],
    ["Beyond the Snow Saga", 56, 61, 0, 84, 99],
    // ---- The Blue Night Saga (1–12 = 62–73) ----
    ["The Blue Night Saga", 62, 73, 0, 100, 120]
  ],
  // Parte del manga que el anime aún no adapta
  soloManga: [
    ["Of One Cloth (aún sin anime)", null, null, 0, 121, 171]
  ],
  // Capítulos de relleno sueltos dentro de arcos canon (Anime Filler List)
  relleno: [6, 11],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Blue Exorcist: The Movie", anio: 2012, despues: 18, tipo: "no-canon", nota: "Historia original de A-1 Pictures (estreno en Japón el 28 de diciembre de 2012): Rin y Usamaro durante la fiesta de la Academia de la Santa Cruz. Va con la continuidad de la T1 del anime; las guías la colocan entre los caps. 18 y 19 (momento aproximado: otras la ponen tras el 10 o al final)." }
  ],
  nota: "Incluye las cinco temporadas de TV con numeración seguida: Blue Exorcist (1–25, 2011), Kyoto Saga (26–37, 2017), Shimane Illuminati Saga (38–49, enero-marzo de 2024), Beyond the Snow Saga (50–61, octubre-diciembre de 2024) y The Blue Night Saga (62–73, enero-marzo de 2025). A noviembre de 2026 no se ha emitido ni anunciado ninguna temporada más: 73 capítulos (Wikipedia en inglés y prensa especializada). No incluye los 3 OVA. IMPORTANTE: desde el cap. 18 la T1 cuenta una historia original del anime que el manga no sigue (Wikipedia la llama «Alternate Ending Arc», caps. 19–25, y Anime Filler List marca del 18 al 25 como relleno); la Kyoto Saga continúa el manga desde el final del cap. 17 y hace como si los caps. 18–25 no hubieran pasado. Por eso ese final va como un arco de relleno: quien quiera seguir solo la historia del manga puede saltar del 17 al 26. Relleno según Anime Filler List: 6, 11 y 18–25; los 1–3 y 16–17 son mixtos y cuentan como canon (Anime Filler List solo cubre la T1 y la Kyoto Saga; las temporadas de 2024–2025 son canon según Anime Filler Guide). Manga en publicación en Jump SQ.: 34 tomos (hasta el cap. 166, mayo de 2026, Wikipedia en inglés y japonés); tras una pausa de marzo a julio de 2026 volvió con el cap. 167 el 3 de julio (Anime News Network) y a noviembre de 2026 va por el cap. 171 (VIZ y MANGA Plus; cifra aproximada). Nombres de los arcos: los de las temporadas son los títulos oficiales en inglés (también en España), y los demás son los de uso común en inglés de los arcos del manga (正十字学園入学編, 林間合宿編, 学園七不思議編 y 青森・八郎太郎編 en Wikipedia en japonés); no hay nombres de uso común en español. Equivalencias: T1 = caps. 1–15 y Kyoto Saga = caps. 16–34 (tomos 5–9; Anime Filler Guide y Wikipedia en japonés); los caps. 35–37 (misión del Kraken) no se adaptaron y se asignan aquí al final de la Kyoto Saga; Shimane Illuminati Saga = tomos 10–15, caps. 38–67 (Wikipedia en inglés y japonés, Anime Filler Guide); Beyond the Snow Saga = caps. 68–99 y The Blue Night Saga = caps. 100–120, por lo que se sigue leyendo en el 121, tomo 26 (Anime Filler Guide y Epicstream). Son aproximados los cortes dentro de cada temporada: True Cross Academy/Training Camp (cap. 10/11, tomo 3), Seven School Mysteries/Shimane (cap. 44/45, tomo 11) y Aomori/Beyond the Snow (cap. 83/84, fin del tomo 18), sacados de los tomos de cada arco en Wikipedia en japonés y de la tabla capítulo a capítulo de Anime Filler Guide."
});
