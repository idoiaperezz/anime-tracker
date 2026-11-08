// Detalles de Your Lie in April (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "yourlieinapril",
  // Colores de la serie en su rastreador (claro / oscuro): rosa de cerezo y azul de cielo primaveral
  tema: {
    claro:  { accent: "#c2456e", accentRgb: "194, 69, 110", accentDeep: "#6b1f3b", accent2: "#3b82c4", onAccent: "#ffffff" },
    oscuro: { accent: "#f48fb1", accentRgb: "244, 143, 177", accentDeep: "#c2456e", accent2: "#8cc4f0", onAccent: "#2a0a16" }
  },
  animeTotal: 22,
  mangaTotal: 44,
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    ["Kaori y el concurso de violín", 1, 4, 0, 1, 6],
    ["El concurso de piano Maihō", 5, 10, 0, 7, 18],
    ["La gala de Towa", 11, 13, 0, 19, 24],
    ["Nagi y el festival escolar", 14, 18, 0, 25, 36],
    ["El concurso del Este de Japón", 19, 22, 0, 37, 44]
  ],
  // El anime adapta el manga completo
  soloManga: [],
  // Anime Filler List no marca ningún capítulo como relleno (1, 2, 12 y 22 son «mixed», que cuenta como canon)
  relleno: [],
  nota: "Incluye el anime completo (22 capítulos, sin la OVA «Moments») y el manga completo (44 capítulos en 11 tomos, según las Wikipedias en inglés y en japonés). El anime adapta todo el manga, así que no hay capítulos solo del manga. La serie no tiene arcos oficiales: los tramos son fases de la historia con nombres descriptivos en español, marcadas por los concursos y actuaciones. No tiene relleno según Anime Filler List (los capítulos 1, 2, 12 y 22 son mixtos). Las equivalencias salen de las fichas por episodio de AnimeOshi (unos 2 capítulos del manga por episodio), contrastadas con los títulos de los capítulos del manga de la Wikipedia en inglés, que coinciden con los de los episodios (p. ej. cap. 7 «Cloudy Skies» = ep. 5, cap. 18 = ep. 10, cap. 22 «Twinkle, Twinkle, Little Star» = ep. 12, cap. 38 «Goodbye, Hero» = ep. 19), y con la sinopsis del tomo 10 en Anime News Network (empieza después del dúo con Nagi). Aproximado: el corte entre los capítulos 18 y 19 del anime (cap. 36/37 del manga); AnimeOshi lo pone dos capítulos antes (cap. 34/35), pero los títulos y la sinopsis del tomo 10 lo sitúan al final del tomo 9."
});
