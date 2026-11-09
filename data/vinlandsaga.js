// Detalles de Vinland Saga (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "vinlandsaga",
  // Colores de la serie en su rastreador (claro / oscuro): azul acero de los mares del norte y rojo sangre vikingo
  tema: {
    claro:  { accent: "#1f5f8b", accentRgb: "31, 95, 139", accentDeep: "#123a56", accent2: "#a8322d", onAccent: "#ffffff" },
    oscuro: { accent: "#6fb3e0", accentRgb: "111, 179, 224", accentDeep: "#1f5f8b", accent2: "#e8735f", onAccent: "#07131c" }
  },
  animeTotal: 48,   // 24 (T1, 2019, Wit Studio) + 24 (T2, 2023, MAPPA); sin temporada 3 a noviembre de 2026
  mangaTotal: 220,  // 220 capítulos (terminó el 25 de julio de 2025, 29 tomos); AniList indica 224 contando extras
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Temporada 1: termina con el cap. 54 «End of the Prologue»
    ["Prólogo (Guerra de Inglaterra)", 1, 24, 0, 1, 54],
    // Temporada 2: termina con el cap. 100 «Homecoming» (episodio 24 «Home»)
    ["Esclavo (La granja de Ketil)", 25, 48, 0, 55, 100]
  ],
  // Parte del manga que el anime aún no adapta
  soloManga: [
    ["Expedición al Este (Guerra del Báltico)", null, null, 0, 101, 166],
    ["Vinland", null, null, 0, 167, 220]
  ],
  // Anime Filler List: sin relleno (el 5 es «anime canon» y el 6 y el 25 son mixtos: cuentan como canon)
  relleno: [],
  nota: "Incluye las dos temporadas de TV (48 capítulos numerados de forma continua: 24 de Wit Studio en 2019 y 24 de MAPPA en 2023) y el manga completo (220 capítulos, terminado el 25 de julio de 2025; AniList indica 224 porque suma extras como «Dogland Saga» o «For Our Farewell is Near»). A noviembre de 2026 no hay temporada 3 anunciada (el autor, Makoto Yukimura, desmintió en 2026 que estuviera en producción). La temporada 1 adapta los caps. 1-54 (el último se titula «End of the Prologue», como el episodio 24) y la 2 los caps. 55-100 (el cap. 100 «Homecoming» corresponde al episodio 24 «Home»; alguna guía sitúa el final en el 99, así que el corte es aproximado en un capítulo). Lo que queda (caps. 101-220) aún no tiene anime: la expedición al este con la guerra del Báltico (101-166) y el viaje a Vinland (167-220). Anime Filler List no registra relleno: el capítulo 5 es original del anime y el 6 y el 25 son mixtos, así que cuentan como canon. No hay películas de anime. Los nombres de los arcos son traducciones al español de los de uso común en inglés (Prologue / War Arc, Slave / Farmland Arc, Eastern Expedition / Baltic Sea War, Vinland Arc). Fuentes: Wikipedia (inglés: lista de capítulos y de episodios; japonés), Anime Filler List, Sportskeeda, Otaku's Notes, Epicstream, Attack of the Fanboy, Anitrendz, Anime Corner, GamesRadar y la FAQ de r/vinlandsaga."
});
