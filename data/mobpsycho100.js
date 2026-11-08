// Detalles de Mob Psycho 100 (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "mobpsycho100",
  // Colores de la serie en su rastreador (claro / oscuro)
  tema: {
    claro:  { accent: "#7b3fe4", accentRgb: "123, 63, 228", accentDeep: "#3d1d7a", accent2: "#15a37a", onAccent: "#ffffff" },
    oscuro: { accent: "#a98bff", accentRgb: "169, 139, 255", accentDeep: "#7b3fe4", accent2: "#2ed8a3", onAccent: "#0d0620" }
  },
  animeTotal: 37, // 3 temporadas de TV: 12 + 13 + 12 (sin las 2 OVAs ni el especial «Reigen»)
  mangaTotal: 101, // 101 capítulos en 16 tomos (numeración de los tomos; AniList cuenta las partes sueltas de la web)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Temporada 1 (1-12)
    ["Spring of Youth", 1, 2, 0, 1, 4],
    ["(LOL) Cult", 3, 3, 0, 5, 8],
    ["Teruki Hanazawa", 4, 5, 0, 9, 19],
    ["Big Cleanup", 6, 8, 0, 20, 33],
    ["7th Division", 9, 12, 0, 34, 50],
    // Temporada 2 (13-25)
    ["Mob's Girlfriend", 13, 13, 0, 51, 52],
    ["Urban Legend", 14, 15, 0, 53, 58],
    ["Keiji Mogami", 16, 17, 0, 59, 67],
    ["Separate Ways", 18, 19, 0, 68, 73],
    ["World Domination", 20, 25, 0, 74, 91],
    // Temporada 3 (26-37)
    ["Divine Tree", 26, 31, 0, 92, 97],
    ["Telepathy", 32, 33, 0, 98, 98],
    ["???%", 34, 36, 0, 99, 100],
    ["Epilogue", 37, 37, 0, 101, 101]
  ],
  // Sin capítulos del manga pendientes: la temporada 3 adapta hasta el final
  soloManga: [],
  // Sin relleno (Anime Filler List: el capítulo 1 es «mixed», que cuenta como canon)
  relleno: [],
  nota: "Incluye el anime de TV completo (37 capítulos: temporadas 1, 2 y 3 de 12, 13 y 12; sin las dos OVAs ni el especial recopilatorio «Reigen») y el manga completo (101 capítulos en 16 tomos). Se usa la numeración de los tomos y de la Wikipedia en japonés (101 capítulos), que también siguen las guías de anime a manga; en la web de Ura Sunday muchos capítulos salieron en varias partes, y por eso AniList cuenta 201 (y otras bases de datos 109): esas cifras no se usan. Los tres capítulos extra de los tomos 11 y 15 no se cuentan. Los nombres de los arcos van en su versión original en inglés (los de TMDB): no hay nombres en español de uso común. No tiene relleno según Anime Filler List (el capítulo 1 es «mixed» y cuenta como canon). Cortes por temporada: la 1 adapta los capítulos 1-50, la 2 los 51-91 y la 3 los 92-101 (MangaShed y otras guías de anime a manga; una guía que decía que la 3 acaba en el 98 queda descartada por mayoría). Los episodios de cada arco salen de los grupos «Story Arcs» de TMDB, contrastados con los títulos de los capítulos de TV (Wikipedia en inglés); los capítulos de cada arco, de la Wikipedia en japonés. Son aproximados: el corte entre «(LOL) Cult» y «Teruki Hanazawa» (capítulo 8 o 9 según la fuente), el final de «World Domination» (la Wikipedia en japonés lo cierra en el 90 y las guías en el 91), el reparto de la temporada 3 entre «???%» y «Epilogue», y el orden de la temporada 2, que cambia algún capítulo de sitio. Dentro de cada arco las equivalencias se reparten de forma uniforme."
});
