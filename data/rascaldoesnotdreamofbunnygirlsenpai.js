// Detalles de Rascal Does Not Dream of Bunny Girl Senpai (la ficha básica está en data/catalogo-auto.js)
// Numeración del anime seguida: Bunny Girl Senpai (2018) = 1–13, Santa Claus (2025) = 14–26.
registrarSerie({
  id: "rascaldoesnotdreamofbunnygirlsenpai",
  // Colores de la serie en su rastreador (claro / oscuro): violeta de Mai y azul del cielo y el mar de Shōnan
  tema: {
    claro:  { accent: "#6a46c2", accentRgb: "106, 70, 194", accentDeep: "#35216b", accent2: "#1f7fbf", onAccent: "#ffffff" },
    oscuro: { accent: "#b49bff", accentRgb: "180, 155, 255", accentDeep: "#6a46c2", accent2: "#6cc6ff", onAccent: "#140b26" }
  },
  animeTotal: 26,   // 13 (2018) + 13 (2025)
  mangaTotal: 0,    // el origen es una novela ligera, no un manga
  // [nombre, desde, hasta, relleno (0/1), null, null]
  arcos: [
    ["Mai Sakurajima", 1, 3, 0, null, null],                    // novela 1
    ["Tomoe Koga", 4, 6, 0, null, null],                        // novela 2
    ["Rio Futaba", 7, 8, 0, null, null],                        // novela 3
    ["Nodoka Toyohama", 9, 10, 0, null, null],                  // novela 4
    ["Kaede Azusagawa", 11, 13, 0, null, null],                 // novela 5
    ["Uzuki Hirokawa (Lost Singer)", 14, 16, 0, null, null],    // Santa Claus 1–3, novela 10
    ["Ikumi Akagi (Nightingale)", 17, 20, 0, null, null],       // Santa Claus 4–7, novela 11
    ["Sara Himeji (My Student)", 21, 23, 0, null, null],        // Santa Claus 8–10, novela 12
    ["Touko Kirishima (Santa Claus)", 24, 26, 0, null, null]    // Santa Claus 11–13, novela 13
  ],
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "Rascal Does Not Dream of a Dreaming Girl", anio: 2019, despues: 13, tipo: "canon", nota: "Secuela directa de la serie de 2018 (novelas 6 y 7): la historia de Shōko Makinohara." },
    { titulo: "Rascal Does Not Dream of a Sister Venturing Out", anio: 2023, despues: 13, tipo: "canon", nota: "Novela 8: Kaede y su examen de acceso al instituto. Va después de Dreaming Girl." },
    { titulo: "Rascal Does Not Dream of a Knapsack Kid", anio: 2023, despues: 13, tipo: "canon", nota: "Novela 9: Sakuta y su madre; cierra la etapa de instituto. Va después de Sister Venturing Out y antes de la temporada de 2025 (cap. 14)." },
    { titulo: "Rascal Does Not Dream of a Dear Friend", anio: 2026, despues: 26, tipo: "canon", nota: "Final de la saga (novelas 14 y 15), estrenada en Japón el 16 de octubre de 2026; continúa la temporada «Santa Claus»." }
  ],
  nota: "Incluye las dos temporadas de TV con numeración seguida: Rascal Does Not Dream of Bunny Girl Senpai (2018, 13 capítulos, novelas 1–5) y Rascal Does Not Dream of Santa Claus (julio–septiembre de 2025, 13 capítulos, aquí 14–26, novelas 10–13, etapa universitaria). Las novelas 6–9 y 14–15 están adaptadas en las cuatro películas, que hay que ver en su sitio: las tres primeras entre el cap. 13 y el 14, y Dear Friend al final. El origen es la novela ligera de Hajime Kamoshida, no un manga, así que no hay rejilla de manga. No hay nombres de arco oficiales en español: cada tramo lleva el nombre de la heroína de su novela (y el título en inglés del volumen en la segunda temporada). Cortes de 2018 según Wikipedia en inglés y reseñas (Anime Rants, AnimeClick); cortes de 2025 según Wikipedia en inglés y los anuncios de cada arco (Anime Corner, AniTrendz: Nightingale desde el cap. 4 del 26 de julio, My Student desde el 8 del 23 de agosto, Santa Claus desde el 11 del 13 de septiembre). Anime Filler List no tiene ficha de la serie; otras guías (Anime Filler Guide) no registran relleno. Totales y fechas de las películas según Wikipedia en inglés y en japonés y la prensa especializada."
});
