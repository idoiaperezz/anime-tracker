// Detalles de The Seven Deadly Sins (la ficha básica está en data/catalogo-auto.js)
// Numeración seguida: T1 = 1–24, Signs of Holy War = 25–28, Revival of the Commandments = 29–52,
// Imperial Wrath of the Gods = 53–76, Dragon's Judgement = 77–100.
registrarSerie({
  id: "thesevendeadlysins",
  // Colores de la serie en su rastreador (claro / oscuro): rojo carmesí y oro
  tema: {
    claro:  { accent: "#b02a37", accentRgb: "176, 42, 55", accentDeep: "#6e1420", accent2: "#b8860b", onAccent: "#ffffff" },
    oscuro: { accent: "#ff6b6b", accentRgb: "255, 107, 107", accentDeep: "#c92a2a", accent2: "#ffd43b", onAccent: "#1a0505" }
  },
  animeTotal: 100,  // 24 + 4 (Signs of Holy War) + 24 + 24 + 24, todos terminados
  mangaTotal: 346,  // 346 capítulos numerados en 41 tomos (AniList cuenta 367, con historias extra)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // ---- Temporada 1 ----
    ["Introducción", 1, 2, 0, 1, 3],
    ["El Bosque de los Sueños Blancos", 3, 4, 0, 4, 8],
    ["La mazmorra de Baste", 5, 6, 0, 9, 17],
    ["La Capital de los Muertos", 7, 9, 0, 18, 30],
    ["El festival de lucha de Vaizel", 10, 13, 0, 31, 51],
    ["El Gigante de la Armadura", 14, 15, 0, 52, 58],
    ["Infiltración en el reino", 16, 24, 0, 59, 103],
    // ---- Signs of Holy War (especial de TV de 4 capítulos) ----
    ["Signs of Holy War (relleno)", 25, 28, 1],
    // ---- Revival of the Commandments ----
    ["Tras la infiltración en el reino", 29, 30, 0, 104, 112],
    ["Albion", 31, 33, 0, 113, 122],
    ["Istar", 34, 37, 0, 123, 131],
    ["Los Cuervos", 38, 42, 0, 132, 150],
    ["El Gran Festival de Lucha", 43, 47, 0, 151, 175],
    ["La defensa de Liones", 48, 52, 0, 176, 197],
    // ---- Imperial Wrath of the Gods ----
    ["Recuerdos de la Guerra Santa", 53, 60, 0, 198, 218],
    ["Corand", 61, 65, 0, 219, 233],
    ["Preludio de la nueva Guerra Santa", 66, 72, 0, 234, 255],
    ["La nueva Guerra Santa", 73, 76, 0, 256, 267],
    // ---- Dragon's Judgement ----
    ["La nueva Guerra Santa (continuación)", 77, 88, 0, 268, 305],
    ["El Rey Demonio", 89, 96, 0, 306, 333],
    ["El Rey del Caos", 97, 99, 0, 334, 343],
    ["Epílogo", 100, 100, 0, 344, 346]
  ],
  // El anime adapta el manga completo
  soloManga: [],
  // Los mixtos (20, 22, 24, 29 y 30) cuentan como canon; el relleno entero es Signs of Holy War (25–28)
  relleno: [],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "The Seven Deadly Sins: Prisoners of the Sky", anio: 2018, despues: 52, tipo: "no-canon", nota: "Historia original estrenada en cines de Japón el 18 de agosto de 2018. Momento aproximado: casi todas las guías la ponen tras Revival of the Commandments; algunas, tras Signs of Holy War." },
    { titulo: "The Seven Deadly Sins: Cursed by Light", anio: 2021, despues: 100, tipo: "canon", nota: "Estrenada en cines de Japón el 2 de julio de 2021. Historia original de Nakaba Suzuki que continúa tras el final de Dragon's Judgement." }
  ],
  nota: "Incluye las cuatro temporadas de TV y el especial Signs of Holy War (4 capítulos) con numeración seguida, 100 capítulos en total, como en Anime Filler List, AnimeFillerGuide y la Wikipedia en español (Signs of Holy War = 25–28; T2 = 29–52; T3 = 53–76; T4 = 77–100). No incluye la secuela Four Knights of the Apocalypse. Manga completo: 346 capítulos en 41 tomos (Wikipedia en inglés y en japonés); AniList indica 367 porque suma las historias extra y paralelas sin numerar. Relleno según Anime Filler List: Signs of Holy War (25–28) es relleno (AnimeFillerGuide: historia original sin capítulos del manga) y los mixtos 20, 22, 24, 29 y 30 cuentan como canon. Los nombres de los arcos son traducciones al español de los ingleses (Introduction, Forest of White Dreams, Baste Dungeon, Capital of the Dead, Vaizel Fight Festival, Armor Giant, Kingdom Infiltration, Albion, Istar, Ravens, Great Fight Festival, Defensive Battle for Liones, Memories of the Holy War, Corand, Prelude to the New Holy War, New Holy War, Demon King, King of Chaos y Epilogue): no hay nombres en español de uso común. Arcos por capítulo de anime según la Wikipedia en francés; rangos del manga según MostRecommendedBooks y la tabla capítulo a capítulo de AnimeFillerGuide. Son aproximados (1–3 capítulos de margen) porque el anime reordena escenas: sobre todo Istar y Los Cuervos (caps. 37–41 mezclan los caps. 130–146 del manga) y el inicio de Dragon's Judgement (77–85 alternan los caps. 268–296). Cortes por temporada contrastados: T1 hasta ≈ cap. 103 y T2 hasta el 197 (MangaShed y Where Does the Anime Leave Off), T3 hasta ≈ 267 (MangaShed). Películas de cine (Toei, Wikipedia en inglés y en japonés): Prisoners of the Sky (2018) y Cursed by Light (2021). Grudge of Edinburgh (partes 1 y 2, 2022 y 2023) no se incluye porque se estrenó directamente en Netflix."
});
