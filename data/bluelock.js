// Detalles de Blue Lock (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "bluelock",
  // Colores de la serie en su rastreador (claro / oscuro): azul eléctrico del Blue Lock sobre negro, con destellos cian
  tema: {
    claro:  { accent: "#1d4ed8", accentRgb: "29, 78, 216", accentDeep: "#172b6b", accent2: "#0e7490", onAccent: "#ffffff" },
    oscuro: { accent: "#4d9bff", accentRgb: "77, 155, 255", accentDeep: "#1d4ed8", accent2: "#5ee7f5", onAccent: "#020a1a" }
  },
  animeTotal: 38,   // 24 (T1) + 14 (T2, vs. U-20 Japan); la T3 (Neo Egoist League) no se había emitido a noviembre de 2026
  mangaTotal: 367,  // último capítulo publicado a noviembre de 2026 (aproximado); 40 tomos, el 41 sale el 17-11-2026
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Temporada 1
    ["Introducción", 1, 2, 0, 1, 4],
    ["Primera selección", 3, 11, 0, 5, 40],
    ["Segunda selección", 12, 22, 0, 41, 84],
    ["Tercera selección", 23, 28, 0, 85, 107],
    // Temporada 2: vs. U-20 Japan (empieza en el cap. 25 con las pruebas de la tercera selección)
    ["Partido contra la selección sub-20 de Japón", 29, 38, 0, 108, 149]
  ],
  // Parte del manga que la serie de TV no adapta
  soloManga: [
    ["Neo Egoist League (T3 anunciada, aún sin emitir)", null, null, 0, 150, 302],
    ["Mundial sub-20 (aún sin anime)", null, null, 0, 303, 367]
  ],
  // Sin relleno (Anime Filler List y Anime Filler Guide)
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Blue Lock: La película – Episode Nagi", anio: 2024, despues: 24, tipo: "canon", nota: "Adapta el spin-off «Blue Lock: Episode Nagi» (del mismo guionista): los hechos de la temporada 1 contados desde Seishiro Nagi y Reo Mikage, con escenas propias de antes de entrar en el Blue Lock. Estreno en Japón el 19-4-2024. Se recomienda verla al acabar la temporada 1 (Anime Filler Guide); no cuenta capítulos del manga principal." }
  ],
  nota: "Incluye las dos temporadas de TV (38 capítulos numerados de forma continua: 24 de la temporada 1 + 14 de «vs. U-20 Japan»; AniList también suma 38) y el manga en publicación hasta el cap. 367 (último en Wikipedia a principios de noviembre de 2026; cifra aproximada, puede haber salido algún capítulo más). La temporada 3, «Neo Egoist League», se anunció en 2025 y tiene título desde junio de 2026, pero a noviembre de 2026 no se había emitido (Wikipedia y MyAnimeList); la fecha del 9 de octubre de 2026 que circuló nunca fue oficial. Anime Filler List y Anime Filler Guide no registran relleno. Los nombres de los arcos están en español (traducción de First/Second/Third Selection, U-20 y U-20 World Cup); «Neo Egoist League» se deja en inglés, como en la edición española. Equivalencias según la conversión capítulo a capítulo de Anime Filler Guide, Wikipedia (la temporada 1 adapta los caps. 1-94; la 2 termina en el 149, se sigue leyendo en el 150) y las guías de arcos de Beebom y Deltia's Gaming; los cortes entre arcos son aproximados porque caen a mitad de capítulo de anime: las guías sitúan la primera selección en los caps. 5-38, la segunda en 39-86, la tercera en 87-108 y el U-20 en 109-151, y aquí se ajustan al capítulo de anime en que empieza cada uno (la segunda selección empieza en el 12, la tercera en el 23 y el partido sub-20 en el 29, aunque la temporada 2 empieza en el 25). La Neo Egoist League va de los caps. 150-302 y el Mundial sub-20 empieza en el 303 (Soap Central y otras guías; algunas fuentes cierran la liga en el 300 o el 301)."
});
