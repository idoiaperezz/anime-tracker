// Detalles de Chainsaw Man (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "chainsawman",
  // Colores de la serie en su rastreador (claro / oscuro)
  tema: {
    claro:  { accent: "#d9550f", accentRgb: "217, 85, 15", accentDeep: "#6e2a06", accent2: "#c92a2a", onAccent: "#ffffff" },
    oscuro: { accent: "#ff8a3d", accentRgb: "255, 138, 61", accentDeep: "#d9550f", accent2: "#ff5c5c", onAccent: "#1a0b03" }
  },
  animeTotal: 12,   // temporada 1 (2022); la temporada 2 (arco de los Asesinos internacionales) no se había estrenado a noviembre de 2026
  mangaTotal: 232,  // manga terminado: parte 1 (caps. 1-97) + parte 2 (caps. 98-232, último publicado el 24-25 de marzo de 2026)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Temporada 1 (parte 1: Seguridad Pública)
    ["Introducción", 1, 2, 0, 1, 4],
    ["Diablo Murciélago", 3, 5, 0, 5, 12],
    ["Diablo de la Eternidad", 6, 7, 0, 13, 21],
    ["Hombre Katana", 8, 12, 0, 22, 38]
  ],
  // Parte del manga que la serie de TV no adapta
  soloManga: [
    ["Chica Bomba (en la película del arco de Reze)", null, null, 0, 39, 52],
    ["Asesinos internacionales (aún sin anime)", null, null, 0, 53, 70],
    ["Diablo de la Pistola", null, null, 0, 71, 79],
    ["Diablo del Control", null, null, 0, 80, 97],
    ["Parte 2: Diablo de la Justicia", null, null, 0, 98, 111],
    ["Parte 2: Cita con Denji", null, null, 0, 112, 120],
    ["Parte 2: Diablo de la Caída", null, null, 0, 121, 131],
    ["Parte 2: Iglesia de Chainsaw Man", null, null, 0, 132, 155],
    ["Parte 2: Diablo del Envejecimiento", null, null, 0, 156, 190],
    ["Parte 2: arco final", null, null, 0, 191, 232]
  ],
  // Anime Filler List no registra ningún capítulo de relleno
  relleno: [],
  nota: "Incluye la temporada 1 de TV (12 capítulos, 2022), que adapta los capítulos 1-38 del manga (Wikipedia en inglés), y el manga completo (232 capítulos en 24 tomos: la parte 1, Seguridad Pública, son los caps. 1-97 y la parte 2, la academia, los caps. 98-232; el último capítulo salió en marzo de 2026 según Wikipedia en inglés, Siliconera y Essential Japan). La película «Chainsaw Man – La película: El arco de Reze» (2025) no cuenta como capítulos del anime: adapta el arco de la Chica Bomba (caps. 39-52), que aparece como «solo manga». La temporada 2 (arco de los Asesinos internacionales) se anunció en la Jump Festa 2026, pero a noviembre de 2026 no tenía fecha de estreno. Anime Filler List no registra relleno. Los nombres de los arcos son traducciones al español de los títulos en inglés de uso común entre fans (Introduction, Bat Devil, Eternity Devil, Katana Man, Bomb Girl, International Assassins, Gun Devil, Control Devil, Justice Devil, Dating Denji, Falling Devil, Chainsaw Man Church y Aging Devil); no son títulos oficiales. Límites de arco según Beebom y Listfist, cotejados con ComingSoon y Soapcentral: el Hombre Katana acaba en el cap. 38 y la Chica Bomba empieza en el 39 (mayoría; Listfist dice 39/40), y el Diablo del Envejecimiento son los caps. 156-190 (Listfist, Soapcentral y Sportskeeda). Aproximado: el reparto de capítulos entre la Introducción y el Diablo Murciélago (Beebom solapa el cap. 2 y el 5 entre arcos) y el último tramo de la parte 2 (caps. 191-232), que se agrupa en un solo «arco final» porque las fuentes no coinciden en sus nombres ni divisiones. Las equivalencias dentro de cada arco son aproximadas."
});
