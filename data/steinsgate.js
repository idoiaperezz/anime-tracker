// Detalles de Steins;Gate (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "steinsgate",
  // Colores de la serie en su rastreador (claro / oscuro)
  tema: {
    claro:  { accent: "#a8741a", accentRgb: "168, 116, 26", accentDeep: "#54390a", accent2: "#2f8a3e", onAccent: "#ffffff" },
    oscuro: { accent: "#e0a84a", accentRgb: "224, 168, 74", accentDeep: "#a8741a", accent2: "#5fd16f", onAccent: "#1a1205" }
  },
  animeTotal: 24,
  mangaTotal: 0,
  // [nombre, desde, hasta, relleno (0/1), null, null]
  arcos: [
    ["El Laboratorio de Gadgets del Futuro y los D-Mails", 1, 12, 0, null, null],
    ["Los saltos en el tiempo para salvar a Mayuri", 13, 16, 0, null, null],
    ["Deshacer los D-Mails", 17, 22, 0, null, null],
    ["Steins Gate", 23, 24, 0, null, null]
  ],
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Steins;Gate: The Movie – Load Region of Déjà Vu", anio: 2013, despues: 24, tipo: "canon", nota: "Secuela oficial ambientada un año después del final de la serie (línea Steins Gate), contada desde el punto de vista de Kurisu." }
  ],
  nota: "Incluye la serie de TV de 2011 (24 episodios, abril–septiembre de 2011). No incluye el episodio 23β («Divide by Zero»), una versión alternativa del 23 emitida en 2015 para enlazar con Steins;Gate 0, ni el especial «Egoistic Poriomania» (a veces llamado episodio 25), que salió solo en el Blu-ray/DVD de 2012 y no se emitió en TV; tampoco Steins;Gate 0, que es otra serie. El origen es una novela visual, no un manga, así que no hay equivalencia con capítulos de manga. El anime sigue la ruta de la historia que lleva al final verdadero; como la novela visual no tiene arcos con nombre oficial, los tramos son descriptivos y no oficiales: los experimentos con los D-Mails hasta el asalto de SERN (1–12), los saltos en el tiempo y la historia de Suzuha (13–16), la anulación de los D-Mails de Faris, Ruka y Moeka hasta volver a la línea β (17–22) y el rescate de Kurisu en la línea Steins Gate (23–24). Sin relleno según Anime Filler List. Fuentes: Wikipedia (inglés y japonés), Anime Filler List, MyAnimeList y TVmaze."
});
