// Detalles de Tokyo Ghoul (la ficha básica está en data/catalogo-auto.js)
// Numeración del anime seguida: Tokyo Ghoul = 1–12, Tokyo Ghoul √A = 13–24 (cap. N de √A = N + 12).
registrarSerie({
  id: "tokyoghoul",
  // Colores de la serie en su rastreador (claro / oscuro)
  tema: {
    claro:  { accent: "#b3001b", accentRgb: "179, 0, 27", accentDeep: "#5c000e", accent2: "#3a3a3a", onAccent: "#ffffff" },
    oscuro: { accent: "#ff3b4f", accentRgb: "255, 59, 79", accentDeep: "#b3001b", accent2: "#9e9e9e", onAccent: "#1a0306" }
  },
  animeTotal: 24,   // 12 (temporada 1, 2014) + 12 (√A, 2015)
  mangaTotal: 143,  // manga original completo: 143 capítulos numerados en 14 tomos (más un epílogo sin número)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    ["Introducción y Nishiki", 1, 2, 0, 1, 9],
    ["La llegada de las Palomas y el Gourmet", 3, 9, 0, 10, 46],
    ["Aogiri: la batalla del distrito 11", 10, 12, 0, 47, 66],
    ["Tokyo Ghoul √A (historia original del anime)", 13, 24, 0, 67, null, 143]
  ],
  nota: "Incluye Tokyo Ghoul (12 capítulos) y Tokyo Ghoul √A (12) con numeración seguida: el capítulo N de √A es aquí el N + 12. No incluye Tokyo Ghoul:re, que es otra serie. Manga original completo: 143 capítulos numerados en 14 tomos, según Wikipedia en inglés y en japonés (algunas webs cuentan 144 porque suman el epílogo sin número). La temporada 1 adapta los capítulos 1–66 (Wikipedia en inglés y MangaUpdates; MangaShed también indica seguir por el 67). Rangos de los arcos del manga según Fiction Horizon y Most Recommended Books (Introducción 1–3, Nishiki 4–9, Palomas 10–30, Gourmet 31–46, Aogiri 47–79). El anime adelanta el arco del Gourmet (caps. 4–6) y lo mezcla con el de las Palomas (caps. 6–9), así que ambos van juntos en un solo arco (manga 10–46). √A tiene una historia en gran parte original (Kaneki se une a Aogiri), supervisada por Sui Ishida, y solo toma elementos y el final de la operación contra el Búho del manga: Anime Filler List marca sus 12 capítulos como «mixtos canon/relleno», así que cuentan como canon, y se asocia a los capítulos 67–143 del manga sin equivalencia exacta (MangaUpdates también lo sitúa en 67–144). Si quieres la historia real, lee el manga desde el capítulo 67. Los cortes entre arcos dentro de la temporada 1 son aproximados (se basan en los resúmenes de Wikipedia). Las equivalencias se reparten de forma uniforme dentro de cada arco. Nombres de los arcos en español («Palomas» es como se llama a los investigadores del CCG en la edición española)."
});
