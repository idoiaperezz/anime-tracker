// Detalles de No Game No Life (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "nogamenolife",
  // Colores de la serie en su rastreador (claro / oscuro): magenta y cian saturados del mundo de Disboard
  tema: {
    claro:  { accent: "#c2187a", accentRgb: "194, 24, 122", accentDeep: "#5e0b3b", accent2: "#0f8aa3", onAccent: "#ffffff" },
    oscuro: { accent: "#ff5cb8", accentRgb: "255, 92, 184", accentDeep: "#c2187a", accent2: "#3fe0f0", onAccent: "#1a0512" }
  },
  animeTotal: 12,
  mangaTotal: 0,    // el origen es una novela ligera, no un manga
  // [nombre, desde, hasta, relleno (0/1), null, null]
  arcos: [
    ["Elkia y el trono de Imanity", 1, 4, 0, null, null],              // novela 1
    ["Jibril y el desafío a la Federación Oriental", 5, 8, 0, null, null], // novela 2
    ["La partida contra Izuna y la Federación Oriental", 9, 12, 0, null, null] // novela 3
  ],
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "No Game No Life: Zero", anio: 2017, despues: 12, tipo: "precuela", nota: "Adapta la novela 6 y transcurre 6000 años antes de la serie, en la Gran Guerra (Riku y Schwi). Se recomienda verla después de la serie, porque da por conocidos su mundo y sus personajes." }
  ],
  nota: "Incluye la serie de TV de 2014 (12 capítulos, 9 de abril–25 de junio de 2014), que adapta las novelas 1–3 de Yuu Kamiya. No incluye los seis mini-OVA de los Blu-ray/DVD ni la película Zero (aparte, como precuela). El origen es una novela ligera, no un manga, así que no hay rejilla de manga. No hay nombres de arco oficiales: los tramos son descriptivos y siguen la novela de cada episodio según Wikipedia en francés (1–4 novela 1, 5–8 novela 2, 9–12 novela 3), contrastado con los resúmenes de Wikipedia en inglés: la conquista del trono de Elkia frente a Chlammy (1–4), la biblioteca de Jibril y la apuesta contra la embajada de los hombres bestia (5–8) y el juego contra Izuna (9–12). Sin relleno según Anime Filler List. Total y datos de la película según Wikipedia en inglés, francés y japonés."
});
