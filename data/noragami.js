// Detalles de Noragami (la ficha básica está en data/catalogo-auto.js)
// Numeración seguida: Noragami = 1–12, Noragami Aragoto = 13–25 (cap. N de Aragoto = N + 12).
registrarSerie({
  id: "noragami",
  // Colores de la serie en su rastreador (claro / oscuro): azul del chándal de Yato y rosa de Hiyori
  tema: {
    claro:  { accent: "#1864ab", accentRgb: "24, 100, 171", accentDeep: "#0b3d6e", accent2: "#d6336c", onAccent: "#ffffff" },
    oscuro: { accent: "#4dabf7", accentRgb: "77, 171, 247", accentDeep: "#1864ab", accent2: "#f783ac", onAccent: "#04121f" }
  },
  animeTotal: 25,   // 12 (Noragami) + 13 (Noragami Aragoto)
  mangaTotal: 109,  // manga terminado (2010–2024), 27 tomos
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // ---- Noragami (temporada 1) ----
    ["Yukine", 1, 10, 0, 1, 11],                 // el 10 es mixto (solo el principio es del manga)
    ["Rabō (original del anime)", 11, 12, 0, null, null],
    // ---- Noragami Aragoto (Aragoto 1–13 = 13–25) ----
    ["Bishamon", 13, 18, 0, 12, 24],             // Aragoto 1–6
    ["Ebisu (el Yomi)", 19, 25, 0, 25, 39]       // Aragoto 7–13
  ],
  // Texto para los arcos del anime sin equivalencia en el manga
  textoSinManga: "original del anime, sin manga",
  notaFlashback: "Final original del anime (Anime Filler List lo clasifica como «anime canon», no como relleno): Rabō no aparece en el manga. Después sigue en el cap. 12.",
  // Parte del manga que el anime no adapta
  soloManga: [
    ["Resto del manga (sin anime)", null, null, 0, 40, 109]
  ],
  // Anime Filler List no registra relleno: el 10 es mixto y el 11–12 es «anime canon»
  relleno: [],
  nota: "Incluye Noragami (12 capítulos) y Noragami Aragoto (13) con numeración seguida: el capítulo N de Aragoto es aquí el N + 12. No incluye los 4 OVA/OAD. Manga completo: 109 capítulos en 27 tomos, publicado de 2010 a enero de 2024 (Wikipedia en inglés y Anime Corner). Clasificación según Anime Filler List: el 10 es mixto (cuenta como canon) y el 11–12, la historia de Rabō, es «anime canon», original del anime y sin equivalencia en el manga; AnimeFillerGuide lo considera relleno. Los nombres de los arcos son los de uso común en inglés (Yukine, Bishamon y Ebisu/Yomi), con los nombres de sus protagonistas. Equivalencias: la temporada 1 adapta los caps. 1–11 (los títulos de los caps. 8–9 del anime coinciden con los de los caps. 10–11 del manga, Wikipedia en inglés); Aragoto adapta los caps. 12–39 y el anime termina en los caps. 38–39, así que se sigue leyendo en el 40 (AnimeFillerGuide y las FAQ de r/Noragami, que lo sitúan hacia el 38). El corte entre Bishamon y Ebisu (cap. 24/25) es aproximado: sale de los títulos de capítulo (Aragoto 6 = cap. 22 «What Must Be Done», Aragoto 7 = cap. 26 «How to Worship a God»). Sin películas de cine."
});
