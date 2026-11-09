// Detalles de Violet Evergarden (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "violetevergarden",
  // Colores de la serie en su rastreador (claro / oscuro): azul de Prusia de su abrigo y verde esmeralda del broche
  tema: {
    claro:  { accent: "#2b5c8a", accentRgb: "43, 92, 138", accentDeep: "#173350", accent2: "#1f7a5e", onAccent: "#ffffff" },
    oscuro: { accent: "#7fb2e5", accentRgb: "127, 178, 229", accentDeep: "#2b5c8a", accent2: "#4fd1a5", onAccent: "#0a1420" }
  },
  animeTotal: 13,
  mangaTotal: 0,
  // [nombre, desde, hasta, relleno (0/1), null, null]
  arcos: [
    ["CH Postal y la escuela de Auto Memory Dolls", 1, 3, 0, null, null],
    ["Los primeros encargos", 4, 7, 0, null, null],
    ["El pasado de Violet y el comandante Gilbert", 8, 9, 0, null, null],
    ["Cartas que unen", 10, 11, 0, null, null],
    ["El tren de la paz", 12, 13, 0, null, null]
  ],
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Violet Evergarden: Eternity and the Auto Memory Doll", anio: 2019, despues: 13, tipo: "canon", nota: "Historia paralela (gaiden) que adapta un capítulo de la novela «Violet Evergarden Gaiden»: Violet trabaja como tutora de Isabella York y después ayuda a su hermana Taylor. Transcurre después de la serie y no es imprescindible, pero la película de 2020 se sitúa un año después de su segunda mitad (estreno en Japón: 6 de septiembre de 2019)." },
    { titulo: "Violet Evergarden: La película", anio: 2020, despues: 13, tipo: "canon", nota: "Secuela de la serie y final de la historia de Violet (estreno en Japón: 18 de septiembre de 2020)." }
  ],
  nota: "Incluye la serie de TV de 2018 (13 capítulos, 11 de enero – 5 de abril de 2018). No incluye el capítulo especial (OVA, a veces numerado como 14: «Seguro que algún día entenderás el amor»), que salió solo en Blu-ray/DVD el 4 de julio de 2018 y se sitúa entre los capítulos 4 y 5. El origen es una novela ligera (Kana Akatsuki, Kyoto Animation), no un manga, así que no hay equivalencia con capítulos de manga. La serie tiene estructura episódica y no hay arcos oficiales: los tramos son descriptivos y no oficiales: la entrada en CH Postal y la escuela de Dolls con Luculia (1–3); los encargos de Iris, la princesa Charlotte, Leon en el observatorio y el dramaturgo Oscar (4–7); el pasado bélico con Gilbert y Dietfried (8–9); las cartas de Clara para su hija Ann y del soldado Aidan (10–11), y el tren de la ceremonia de paz (12–13). Anime Filler List no tiene página de esta serie; ninguna fuente (MyAnimeList, Wikipedia) marca relleno ni recapitulaciones, así que todo cuenta como canon. Eternity and the Auto Memory Doll se presenta como spin-off o historia paralela, pero va después de la serie y enlaza con la película de 2020, por eso figura como canon. Fuentes: Wikipedia (inglés, español, japonés y francés), MyAnimeList, Anime News Network y guías de orden de visionado (Epicstream)."
});
