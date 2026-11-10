// Detalles de InuYasha (la ficha básica está en data/catalogo-auto.js)
// Numeración del anime seguida: InuYasha = 1–167, InuYasha: The Final Act = 168–193 (cap. N de Final Act = N + 167).
registrarSerie({
  id: "inuyasha",
  // Colores de la serie en su rastreador (claro / oscuro): rojo del haori de rata de fuego y dorado de los ojos de Inuyasha
  tema: {
    claro:  { accent: "#b02a2a", accentRgb: "176, 42, 42", accentDeep: "#6b1414", accent2: "#a8740b", onAccent: "#ffffff" },
    oscuro: { accent: "#ff6b6b", accentRgb: "255, 107, 107", accentDeep: "#c92a2a", accent2: "#ffd43b", onAccent: "#1a0505" }
  },
  animeTotal: 193,   // 167 (InuYasha, 2000–2004) + 26 (The Final Act, 2009–2010), ambos terminados
  mangaTotal: 558,   // manga completo (1996–2008), 56 tomos
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // ---- InuYasha (1–167) ----
    ["La Perla de Shikon", 1, 4, 0, 1, 11],
    ["Sesshomaru y Colmillo de Acero", 5, 7, 0, 12, 18],
    ["Shippo, los hermanos del Trueno y la luna nueva", 8, 13, 0, 19, 44],
    ["La resurrección de Kikyo", 14, 15, 0, 45, 50],
    ["Miroku y la verdad sobre Naraku", 16, 23, 0, 51, 78],
    ["Sango, la exterminadora de monstruos", 24, 27, 0, 79, 100],        // los caps. 79–85 (Tōgenkyō) se adaptan más tarde, en los capítulos 57–58
    ["El castillo de Naraku y Kohaku", 28, 30, 0, 101, 111],
    ["Jinenji, Kikyo y Colmillo Sagrado", 31, 35, 0, 112, 131],
    ["Koga, el lobo demonio", 36, 39, 0, 132, 142],
    ["Kagura, Kanna y la espada Tokijin", 40, 45, 0, 143, 163],
    ["Juromaru, Kageromaru y el corazón de Onigumo", 46, 48, 0, 164, 176],
    ["La memoria de Kohaku", 49, 52, 0, 177, 186],
    ["Ryukotsusei", 53, 54, 0, 187, 191],
    ["La flor de piedra, Tōgenkyō y la sacerdotisa oscura Tsubaki", 55, 62, 0, 192, 200], // 57–58 adaptan los caps. 79–85; 59 es relleno
    ["Relleno: las sacerdotisas y el ogro de la torre", 63, 65, 1],
    ["La barrera de Naraku, Onigumo y Shiori", 66, 74, 0, 201, 218],     // 68 y 72 son relleno
    ["Relleno: la tribu de las panteras", 75, 79, 1],
    ["Rin secuestrada y el castillo de la Cabeza de Demonio", 80, 88, 0, 219, 233],
    ["Relleno: el creador de la Perla y otras historias", 89, 101, 1],
    ["La Banda de los Siete", 102, 108, 0, 234, 247],
    ["El monte Hakurei", 109, 126, 0, 248, 286],
    ["Tras el monte Hakurei", 127, 135, 0, 287, 292],                    // 129–130 y 133–134 son relleno
    ["Relleno: la antepasada de Kagome y la naginata Kenkon", 136, 140, 1],
    ["Hakudoshi, Entei y la princesa Abi", 141, 151, 0, 293, 310],
    ["La batalla por el último fragmento", 152, 159, 0, 311, 331],
    ["Moryomaru", 160, 167, 0, 332, 356],                                 // 162–163 son relleno
    // ---- InuYasha: The Final Act (FA 1–26 = 168–193) ----
    ["Final Act: Kagura, el Meido y el fin de Moryomaru", 168, 173, 0, 357, 448], // FA 1–6: condensa unos 90 capítulos
    ["Final Act: el monte Azusa y el inframundo", 174, 178, 0, 449, 480],          // FA 7–11
    ["Final Act: Magatsuhi y el fragmento de Kohaku", 179, 186, 0, 481, 525],      // FA 12–19
    ["Final Act: la batalla final contra Naraku", 187, 193, 0, 526, 558]           // FA 20–26
  ],
  // Episodios de relleno sueltos dentro de arcos canon (Anime Filler List)
  relleno: [59, 68, 72, 129, 130, 133, 134, 162, 163],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "InuYasha: Affections Touching Across Time", anio: 2001, despues: 55, tipo: "no-canon", nota: "Menomaru y el demonio Hyoga. Momento aproximado: unas guías la ponen tras el cap. 55 y otras tras el 54." },
    { titulo: "InuYasha: The Castle Beyond the Looking Glass", anio: 2002, despues: 95, tipo: "no-canon", nota: "Kaguya, la princesa celestial, y el castillo tras el espejo." },
    { titulo: "InuYasha: Swords of an Honorable Ruler", anio: 2003, despues: 136, tipo: "no-canon", nota: "Sō'unga, la tercera espada del padre de Inuyasha y Sesshomaru." },
    { titulo: "InuYasha: Fire on the Mystic Island", anio: 2004, despues: 167, tipo: "no-canon", nota: "La isla de Hōrai; se ve al acabar la primera serie y antes de The Final Act." }
  ],
  nota: "Incluye InuYasha (167 capítulos) e InuYasha: The Final Act (26) con numeración seguida: el capítulo N de The Final Act es aquí el N + 167. Manga completo: 558 capítulos. La primera serie llega hasta el cap. 356 del manga (Anime Filler Guide y MangaUpdates; MangaShed dice 355). The Final Act empieza a adaptar en el cap. 359 (Anime Filler Guide y MangaUpdates) y sus seis primeros capítulos (168–173) condensan a toda prisa los caps. 357–448: se saltan o resumen muchos capítulos (por ejemplo, 357–358 y buena parte de 378–438, con las escamas de dragón de Colmillo de Acero, Ryujin y Byakuya muy recortados), así que quien quiera la historia entera debe leer el manga desde el cap. 357. Desde el 174 la adaptación vuelve a ser casi capítulo a capítulo. Relleno según Anime Filler List (35 capítulos), coincide con Looper: los «mixtos» (26, 57–58, 69, 83–84, 87, 102, 127–128, 135, 141–142, 144, 147–148 y 160) cuentan como canon; Anime Filler Guide da el 79 como mixto y el 147–148 como relleno. La primera serie adapta algunos capítulos fuera de orden (los 57–58, Tōgenkyō, adaptan los caps. 79–85; el 56, los caps. 206–207; el 144, el 289; el 161, los caps. 343–345): en la rejilla se cuentan en el arco que les toca por orden del manga. Equivalencias de Anime Filler Guide, comprobadas con los títulos de los capítulos de la Wikipedia en inglés (listas de capítulos y de episodios); son aproximadas dentro de cada arco. Los nombres de los arcos son descriptivos en español (no hay nombres oficiales de uso común), con los términos del doblaje (Colmillo de Acero = Tessaiga, Colmillo Sagrado = Tenseiga). Películas tras los capítulos 55, 95, 136 y 167 según Anime Filler Guide y shimiraa (watch order); la primera es aproximada (MyAnimeList y Japan Truly la ponen tras el 54)."
});
