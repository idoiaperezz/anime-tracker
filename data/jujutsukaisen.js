// Detalles de Jujutsu Kaisen (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "jujutsukaisen",
  // Colores de la serie en su rastreador (claro / oscuro)
  tema: {
    claro:  { accent: "#3b4cca", accentRgb: "59, 76, 202", accentDeep: "#1e2670", accent2: "#c2255c", onAccent: "#ffffff" },
    oscuro: { accent: "#748ffc", accentRgb: "116, 143, 252", accentDeep: "#3b4cca", accent2: "#ff6b8a", onAccent: "#070a1f" }
  },
  animeTotal: 59,   // T1 (1–24) + T2 (25–47) + T3 «Culling Game, parte 1» (48–59); la T4 aún no tiene fecha
  mangaTotal: 271,  // el tomo 30 añade un epílogo sin número (AniList lo cuenta como 272)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Temporada 1
    ["Vientre maldito", 1, 8, 0, 1, 18],
    ["Contra Mahito", 9, 13, 0, 19, 31],
    ["Evento de intercambio con Kioto", 14, 21, 0, 32, 54],
    ["Pinturas de la muerte", 22, 24, 0, 55, 63],
    // Temporada 2 (el pasado de Gojo es un flashback, pero en el manga va justo a continuación: caps. 65–79)
    ["Inventario oculto / Muerte prematura", 25, 29, 0, 64, 79],
    ["Incidente de Shibuya", 30, 47, 0, 80, 136],
    // Temporada 3
    ["La ejecución de Itadori", 48, 49, 0, 137, 143],
    ["Preparación perfecta", 50, 53, 0, 144, 157],
    ["Juego del Sacrificio (Culling Game) – Parte 1", 54, 59, 0, 158, 180]
  ],
  // Capítulos del manga que el anime aún no ha adaptado
  soloManga: [
    ["Juego del Sacrificio (Culling Game) – resto (aún sin anime)", null, null, 0, 181, 221],
    ["Batalla de Shinjuku (aún sin anime)", null, null, 0, 222, 271]
  ],
  // Anime Filler List: los 59 capítulos son canon, no hay relleno
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Jujutsu Kaisen 0", anio: 2021, despues: 24, tipo: "precuela", nota: "Adapta el tomo 0 (precuela de 4 capítulos sin numeración en la serie principal). Orden de estreno: entre la temporada 1 y la 2." },
    { titulo: "Jujutsu Kaisen: Hidden Inventory / Premature Death – The Movie", anio: 2025, despues: 29, tipo: "recopilatorio", nota: "Resume los capítulos 25-29 (Inventario oculto / Muerte prematura); prescindible si ya se han visto." },
    { titulo: "Jujutsu Kaisen: Execution", anio: 2025, despues: 47, tipo: "recopilatorio", nota: "Resume el Incidente de Shibuya (capítulos 30-47) e incluye en preestreno los capítulos 48-49 de la temporada 3." }
  ],
  nota: "Incluye el anime hasta el capítulo 59 (temporadas 1, 2 y 3; la 3.ª, «Culling Game, parte 1», terminó el 27 de marzo de 2026 y la 4.ª, «Culling Game, parte 2», está anunciada sin fecha) y el manga completo (271 capítulos más un epílogo sin número del tomo 30, que no se cuenta). No hay relleno según Anime Filler List; el especial recopilatorio 54.5 no se cuenta. La película Jujutsu Kaisen 0 adapta aparte el tomo 0 (precuela de 4 capítulos) y no forma parte de esta lista. El arco «Inventario oculto / Muerte prematura» es un flashback del pasado de Gojo, pero en el manga son los caps. 65–79, justo después del final de la temporada 1 (cap. 63); el cap. 64 se adapta al principio del capítulo 30 del anime y aquí se cuenta dentro de ese arco para no romper la rejilla. El capítulo 59 del anime cierra el arco de Sendai (manga 174–180) y llega a las primeras páginas del cap. 181 (la charla entre Yuta e Ishigori), así que el manga se retoma en el 181 (confirmado también por Vandal y Omelete). Los nombres de los arcos son traducciones de uso común de los nombres en inglés (no hay títulos oficiales en español; «Juego del Sacrificio» es la traducción más extendida de «Culling Game»). Fuentes: Wikipedia en inglés (listas de episodios y capítulos), Anime Filler List, Beebom, Soapcentral, Dexerto y Anime Explained. Las equivalencias son aproximadas: se reparten de forma uniforme dentro de cada arco."
});
