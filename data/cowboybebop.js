// Detalles de Cowboy Bebop (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "cowboybebop",
  // Colores de la serie en su rastreador (claro / oscuro): naranja jazz y azul
  tema: {
    claro:  { accent: "#c2410c", accentRgb: "194, 65, 12", accentDeep: "#7c2d12", accent2: "#1d4e89", onAccent: "#ffffff" },
    oscuro: { accent: "#fb923c", accentRgb: "251, 146, 60", accentDeep: "#c2410c", accent2: "#60a5fa", onAccent: "#1a0c02" }
  },
  animeTotal: 26,
  mangaTotal: 0,
  // [nombre, desde, hasta, relleno (0/1), null, null]
  arcos: [
    ["Se forma la tripulación del Bebop", 1, 4, 0, null, null],               // Spike y Jet; llegan Ein (2) y Faye (3–4)
    ["Balada de ángeles caídos (trama de Vicious)", 5, 5, 0, null, null],
    ["Cazarrecompensas por el sistema solar", 6, 11, 0, null, null],          // llega Ed (9); pasado de Jet (10)
    ["Jupiter Jazz (trama de Vicious)", 12, 13, 0, null, null],
    ["Encargos sueltos y el pasado de la tripulación", 14, 24, 0, null, null], // Faye (15, 18, 24), Jet (16)
    ["The Real Folk Blues (desenlace)", 25, 26, 0, null, null]
  ],
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Cowboy Bebop: La película (Knockin' on Heaven's Door)", anio: 2001, despues: 22, tipo: "canon", nota: "Historia autoconclusiva de Sunrise y Bones (estreno en Japón el 1 de septiembre de 2001; título japonés «Tengoku no Tobira»). Transcurre entre los episodios 22 y 23, con Ed y Ein aún a bordo; también puede verse al terminar la serie." }
  ],
  nota: "Serie original de Sunrise (26 «sessions», 1998–1999): no viene de un manga, así que no hay equivalencia con capítulos (los mangas de Cowboy Bebop son derivados). La emisión completa fue en WOWOW (octubre de 1998 – abril de 1999); TV Tokyo solo emitió parte en 1998. No incluye el especial «Mish-Mash Blues» ni la serie de imagen real de Netflix. La serie no tiene arcos oficiales: la mayoría de episodios son autoconclusivos y la trama principal (Spike, Vicious y el sindicato del Dragón Rojo) ocupa los episodios 5, 12–13 y 25–26, así que los tramos son descriptivos: formación de la tripulación (1–4), primera aparición de Vicious (5), encargos por el sistema solar con la llegada de Ed (6–11), Jupiter Jazz (12–13), encargos y pasados de Faye y Jet hasta la marcha de Ed y Ein (14–24) y el desenlace (25–26). Los nombres de los episodios se dejan en inglés, como en el original. Sin relleno según Anime Filler List. La película se sitúa entre los episodios 22 y 23 según Wikipedia (artículos de la película y de los episodios) y las guías de orden de visionado. Fuentes: Wikipedia (inglés), Anime Filler List y guías de orden de visionado."
});
