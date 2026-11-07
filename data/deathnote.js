// Detalles de Death Note (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "deathnote",
  animeTotal: 37,
  mangaTotal: 108,
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    ["Kira contra L", 1, 11, 0, 1, 25],
    ["El segundo Kira", 12, 17, 0, 26, 37],
    ["Yotsuba", 18, 23, 0, 38, 52],
    ["La muerte de L", 24, 25, 0, 53, 58],
    ["Near y Mello", 26, 30, 0, 59, 79],
    ["Mikami y Takada", 31, 35, 0, 80, 99],
    ["El desenlace", 36, 37, 0, 100, 107]
  ],
  // Capítulos del manga que el anime no adapta
  soloManga: [
    ["Epílogo (un año después)", null, null, 0, 108, 108]
  ],
  // Anime Filler List no marca ningún capítulo como relleno (1, 25, 26 y 37 son «mixed», que cuenta como canon)
  relleno: [],
  nota: "Incluye el anime completo (37 capítulos) y el manga completo (108 capítulos, sin contar los one-shots especiales de 2008 y 2020). Death Note no tiene relleno según Anime Filler List: los capítulos 1, 25, 26 y 37 son mixtos (el 26, «Regeneración», dedica su primera mitad a resumir la primera parte). Los arcos son fases de la historia con nombres descriptivos en español, porque la serie no tiene arcos con nombre oficial. Las equivalencias salen de la tabla episodio↔capítulo de la Wikipedia en español (Anexo:Episodios de Death Note), contrastada con la lista de capítulos de la Wikipedia en inglés. La segunda parte del anime (desde el capítulo 26) condensa mucho el manga, hasta 7 capítulos por episodio, así que ahí la equivalencia es más aproximada. El capítulo 37 adapta los capítulos 103 a 107 del manga con un final distinto; el capítulo 108 (epílogo) no tiene versión en el anime. Verificado después con otras fuentes: Mangashed (capítulos 1-25 = cap. 1-58 y 26-37 = cap. 59-108), Anime Pulse Report (cortes en los cap. 22/23, 35/36, 58/59 y 74/75, que coinciden con la tabla) y la Wikipedia en japonés (el último capítulo adapta más de la mitad del último tomo). Son aproximados, porque solo la tabla en español los respalda: el corte entre los capítulos 30 y 31 (cap. 79/80; otra fuente lo pone en 83/84) y la omisión del cap. 56, que la tabla no asigna a ningún episodio y que aquí va dentro de «La muerte de L»."
});
