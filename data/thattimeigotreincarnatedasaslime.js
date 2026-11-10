// Detalles de That Time I Got Reincarnated as a Slime (la ficha básica está en data/catalogo-auto.js)
// Numeración del anime seguida: T1 = 1–24, T2 = 25–48 (parte 1: 25–36, parte 2: 37–48), T3 = 49–72, T4 = 73–96.
registrarSerie({
  id: "thattimeigotreincarnatedasaslime",
  // Temporadas (para la barra de temporadas del rastreador): [nombre, primer capítulo, último capítulo]
  temporadas: [
    ["Temporada 1", 1, 24],
    ["Temporada 2", 25, 36],
    ["Temporada 2 – Parte 2", 37, 48],
    ["Temporada 3", 49, 72],
    ["Temporada 4", 73, 96]
  ],
  // Colores de la serie en su rastreador (claro / oscuro): azul de Rimuru y dorado de sus ojos
  tema: {
    claro:  { accent: "#1c7cc4", accentRgb: "28, 124, 196", accentDeep: "#0c426e", accent2: "#b8860b", onAccent: "#ffffff" },
    oscuro: { accent: "#5cc4ff", accentRgb: "92, 196, 255", accentDeep: "#1c7cc4", accent2: "#ffd35c", onAccent: "#04131f" }
  },
  animeTotal: 96,   // 24 + 24 (12 + 12) + 24 + 24 (T4, cursos 1 y 2, abril–septiembre de 2026)
  mangaTotal: 0,    // el origen es una novela ligera, no un manga
  // [nombre, desde, hasta, relleno (0/1), null, null]
  arcos: [
    ["Reencarnación: goblins, enanos y Shizu", 1, 8, 0, null, null],          // novela vol. 1
    ["Disturbios en el bosque de Jura: el Señor Orco", 9, 15, 0, null, null], // vol. 2
    ["La llegada de Milim y Charybdis", 16, 19, 0, null, null],               // vol. 3
    ["Los alumnos de Shizu y la diplomacia", 20, 27, 0, null, null],          // vol. 4 (el 24 es relleno)
    ["El despertar del rey demonio", 28, 36, 0, null, null],                  // vol. 5
    ["Walpurgis: el banquete de los reyes demonio", 37, 48, 0, null, null],   // vol. 6
    ["Santa contra demonio: Hinata", 49, 59, 0, null, null],                  // vol. 7
    ["La fiesta de apertura de Tempest", 60, 72, 0, null, null],              // vols. 8–9
    ["Las intrigas de los demonios y el despertar del héroe", 73, 96, 0, null, null] // vols. 10–11
  ],
  relleno: [24],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "That Time I Got Reincarnated as a Slime the Movie: Scarlet Bond", anio: 2022, despues: 48, tipo: "no-canon", nota: "Historia original supervisada por el autor (Fuse), al margen de la novela, con Hiiro, un ogro superviviente del pueblo de Benimaru. Va entre la segunda y la tercera temporada (tras Walpurgis). Estreno en Japón: 25 de noviembre de 2022." },
    { titulo: "That Time I Got Reincarnated as a Slime the Movie: Tears of the Azure Sea", anio: 2026, despues: 72, tipo: "no-canon", nota: "Historia aparte: Rimuru y los suyos van de vacaciones a una isla privada invitados por Elmesia y aparece la misteriosa Yura. Situada tras la tercera temporada (posición aproximada: también se puede ver tras el cap. 96). Estreno en Japón: 27 de febrero de 2026." }
  ],
  nota: "Incluye las temporadas de TV emitidas hasta noviembre de 2026 con numeración continua: T1 (24 capítulos, 1–24), T2 (12 + 12, aquí 25–48), T3 (24, aquí 49–72) y los dos primeros cursos de la T4 (24, aquí 73–96, del 3 de abril al 25 de septiembre de 2026). La T4 está planeada en cinco cursos: el tercero se anuncia para julio de 2027. Quedan fuera los recapitulativos (24.5, 36.5, 48.5, 65.5…), los spin-offs (The Slime Diaries, Visions of Coleus) y las OVA. El origen es la novela ligera de Fuse, no un manga, así que no hay rejilla de manga ni equivalencias por capítulo. Los arcos son descriptivos y no oficiales, basados en los volúmenes de la novela que adapta cada tramo (nombres de los volúmenes en la Wikipedia japonesa y resúmenes de capítulos de la Wikipedia inglesa); son aproximados los límites 27/28 (fin de la diplomacia con Eurazania y Dwargon, inicio de la conspiración de Falmuth) y el arco de la T4, que adapta los vols. 10 y 11 sin un corte claro. Relleno según Anime Filler List: el 24 («Black and a Mask», historia de Shizu y Diablo) es relleno; el 4 es mixto y cuenta como canon. Fuentes: Wikipedia (inglés y japonés), Anime Filler List, MyAnimeList y prensa (Anime Corner)."
});
