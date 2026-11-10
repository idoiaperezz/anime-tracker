// Detalles de Date A Live (la ficha básica está en data/catalogo-auto.js)
// Numeración seguida: I = 1–12, II = 13–22, III = 23–34, IV = 35–46, V = 47–58
registrarSerie({
  id: "datealive",
  // Colores de la serie en su rastreador (claro / oscuro): morado de Tohka y rosa de Kotori
  tema: {
    claro:  { accent: "#7b3fbf", accentRgb: "123, 63, 191", accentDeep: "#45206e", accent2: "#d6336c", onAccent: "#ffffff" },
    oscuro: { accent: "#b98cf5", accentRgb: "185, 140, 245", accentDeep: "#7b3fbf", accent2: "#f783ac", onAccent: "#150a24" }
  },
  animeTotal: 58,
  mangaTotal: 0,     // viene de una novela ligera (22 tomos); los mangas son adaptaciones parciales
  // [nombre, desde, hasta, relleno (0/1), null, null]
  arcos: [
    ["Tohka", 1, 3, 0, null, null],
    ["Yoshino", 4, 6, 0, null, null],
    ["Kurumi", 7, 9, 0, null, null],
    ["Kotori", 10, 12, 0, null, null],
    ["Las hermanas Yamai", 13, 16, 0, null, null],
    ["Miku", 17, 22, 0, null, null],
    ["Natsumi", 23, 27, 0, null, null],
    ["Origami", 28, 34, 0, null, null],
    ["Nia", 35, 37, 0, null, null],
    ["Mukuro", 38, 42, 0, null, null],
    ["Kurumi y su pasado", 43, 46, 0, null, null],
    ["La guerra contra DEM y Mio", 47, 58, 0, null, null]
  ],
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Date A Live: Mayuri Judgement", anio: 2015, despues: 22, tipo: "no-canon", nota: "Película original (no sale de las novelas), estrenada el 22 de agosto de 2015, con un espíritu nuevo, Mayuri. Se sitúa después de la segunda temporada." },
    { titulo: "Date A Bullet: Dead or Bullet", anio: 2020, despues: 34, tipo: "no-canon", nota: "Spin-off de Kurumi en un mundo paralelo (novelas «Date A Live Fragment: Date A Bullet»); se entiende sin ver la serie principal." },
    { titulo: "Date A Bullet: Nightmare or Queen", anio: 2020, despues: 34, tipo: "no-canon", nota: "Segunda parte del spin-off de Kurumi, estrenada en noviembre de 2020." }
  ],
  nota: "Cinco temporadas de TV con numeración seguida: I (12 capítulos, 2013, tomos 1–4 de la novela), II (10, 2014, tomos 5–7), III (12, 2019, tomos 8–12), IV (12, 2022, tomos 13–16) y V (12, 2024, tomos 17–19). Hay anunciado un nuevo proyecto (Date A Live VI) todavía sin fecha. Viene de una novela ligera de Kōshi Tachibana, así que el rastreador queda en modo solo anime. Los tramos siguen al espíritu protagonista de cada parte según los resúmenes de Wikipedia de cada temporada; el capítulo 6 (las aguas termales) se cuenta con Yoshino y el 13 con las Yamai, que aparecen al final. Sin relleno: ningún capítulo aparece como original del anime en Wikipedia (aproximado: Anime Filler Guide no tiene página de esta serie). No incluye las OVA «Date to Date» (2013) y «Kurumi Star Festival» (2014). Fuentes: Wikipedia (inglés, lista de capítulos y páginas de cada temporada) y TVMaze."
});
