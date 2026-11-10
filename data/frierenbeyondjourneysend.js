// Detalles de Frieren: Beyond Journey's End (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "frierenbeyondjourneysend",
  // Colores de la serie en su rastreador (claro / oscuro): verde azulado de los prados y dorado de los adornos de Frieren
  tema: {
    claro:  { accent: "#2f7d6d", accentRgb: "47, 125, 109", accentDeep: "#1b4d43", accent2: "#a8740b", onAccent: "#ffffff" },
    oscuro: { accent: "#63d2b9", accentRgb: "99, 210, 185", accentDeep: "#2f7d6d", accent2: "#f2c75c", onAccent: "#04140f" }
  },
  animeTotal: 38,    // 28 (T1, 2023–2024) + 10 (T2, enero–marzo de 2026); la T3 está anunciada para octubre de 2027
  mangaTotal: 147,   // en pausa desde el cap. 147 (14 de octubre de 2025); sin fecha de vuelta a noviembre de 2026
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // ---- Temporada 1 (1–28) ----
    ["El fin del viaje", 1, 6, 0, 1, 12],
    ["Aura la Guillotina", 7, 10, 0, 13, 22],
    ["Rumbo al norte: el pueblo de la espada", 11, 12, 0, 23, 26],
    ["El viaje con Sein", 13, 17, 0, 27, 36],
    ["Examen de mago de primera clase: primera prueba", 18, 22, 0, 37, 47],
    ["Examen de mago de primera clase: segunda prueba (la mazmorra)", 23, 26, 0, 48, 55],
    ["Examen de mago de primera clase: tercera prueba", 27, 28, 0, 56, 60],
    // ---- Temporada 2 (29–38) ----
    ["El viaje por el norte continúa", 29, 33, 0, 61, 70],
    ["La caza del general", 34, 36, 0, 71, 76],
    ["Rumbo a la Tierra Dorada", 37, 38, 0, 77, 80]
  ],
  // Parte del manga que el anime aún no adapta
  soloManga: [
    ["La Tierra Dorada (temporada 3, octubre de 2027)", null, null, 0, 81, 104],
    ["Después de la Tierra Dorada: rumbo al Imperio (aún sin anime)", null, null, 0, 105, 147]
  ],
  // Anime Filler List y Anime Filler Guide no registran relleno
  relleno: [],
  nota: "Incluye la temporada 1 (28 capítulos, 2023–2024) y la temporada 2 (10 capítulos, del 16 de enero al 27 de marzo de 2026), con numeración seguida: el capítulo N de la temporada 2 es aquí el N + 28. La temporada 3 (la Tierra Dorada) está anunciada para octubre de 2027. Manga en publicación: 147 capítulos, en pausa indefinida desde el 14 de octubre de 2025 por la salud de los autores (Anime News Network, Popverse); a noviembre de 2026 el cap. 148 no tiene fecha. Sin relleno ni películas de cine (solo los cortos «Spell That Does OOO», que no cuentan). La temporada 1 llega al cap. 60 y la 2 al cap. 80 (se sigue en el 81, comienzo de la Tierra Dorada, que dura hasta el 104): Anime Filler Guide, Anime Corner y guías posteriores a la temporada 2 (Aniflixy). Equivalencias por capítulo de Anime Filler Guide, comprobadas con los títulos de la lista de capítulos de la Wikipedia en inglés; los cortes de arco siguen la división de Fiction Horizon y son aproximados dentro de cada arco (el cap. 13 abre el arco de Aura en el anime y el 23, que lo cierra, sale al principio del capítulo 11). Los nombres de los arcos son traducciones al español de los nombres en inglés que usan los fans (no hay nombres oficiales). El tramo 105–147 se agrupa en un solo bloque (Ernst y el monumento de la diosa, el viaje por el Imperio y el festival de la fundación) porque sus cortes internos no se pudieron confirmar con dos fuentes."
});
