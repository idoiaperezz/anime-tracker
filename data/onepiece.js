// Detalles de One Piece (la ficha básica está en data/catalogo-auto.js)
registrarSerie({
  id: "onepiece",
  // Colores de la serie en su rastreador (claro / oscuro)
  tema: {
    claro:  { accent: "#c92a2a", accentRgb: "201, 42, 42", accentDeep: "#7a1212", accent2: "#e0a800", onAccent: "#ffffff" },
    oscuro: { accent: "#ff6b6b", accentRgb: "255, 107, 107", accentDeep: "#c92a2a", accent2: "#ffd43b", onAccent: "#1a0505" }
  },
  animeTotal: 1180,  // último capítulo emitido: 1180 (27-09-2026); el anime vuelve en 2027
  mangaTotal: 1197,  // último capítulo publicado: 1197 (1-11-2026)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // Saga del East Blue
    ["Saga del East Blue: Arco de Romance Dawn", 1, 3, 0, 1, 7],
    ["Saga del East Blue: Arco de Orange Town", 4, 8, 0, 8, 21],
    ["Saga del East Blue: Arco de la Villa Syrup", 9, 18, 0, 22, 41],
    ["Saga del East Blue: Arco del Baratie", 19, 30, 0, 42, 68],
    ["Saga del East Blue: Arco de Arlong Park", 31, 44, 0, 69, 95],
    ["Saga del East Blue: Arco de Loguetown", 45, 53, 0, 96, 100],
    ["Arco de la Isla del Buque de Guerra", 54, 60, 1],
    // Saga de Arabasta
    ["Saga de Arabasta: Arco de Reverse Mountain", 61, 63, 0, 101, 105],
    ["Saga de Arabasta: Arco de Whiskey Peak", 64, 69, 0, 106, 114],
    ["Saga de Arabasta: Arco de Little Garden", 70, 77, 0, 115, 129],
    ["Saga de Arabasta: Arco de la Isla de Drum", 78, 91, 0, 130, 154],
    ["Saga de Arabasta: Arco de Arabasta", 92, 130, 0, 155, 217],
    ["Arco post-Arabasta", 131, 135, 1],
    ["Arco de la Isla de las Cabras", 136, 138, 1],
    ["Arco de la Niebla Arcoíris (Ruluka)", 139, 143, 1],
    // Saga de la Isla del Cielo
    ["Saga de la Isla del Cielo: Arco de Jaya", 144, 152, 0, 218, 236],
    ["Saga de la Isla del Cielo: Arco de Skypiea", 153, 195, 0, 237, 302],
    ["Arco de la Base G-8", 196, 206, 1],
    // Saga de Water 7
    ["Saga de Water 7: Arco de Long Ring Long Land", 207, 219, 0, 303, 321],
    ["Arco del Sueño del Océano", 220, 224, 1],
    ["Arco del regreso de Foxy", 225, 225, 1],
    ["Saga de Water 7: Arco de Water 7", 226, 263, 0, 322, 374],
    ["Saga de Water 7: Arco de Enies Lobby", 264, 312, 0, 375, 430],
    ["Saga de Water 7: Arco post-Enies Lobby", 313, 325, 0, 431, 441],
    // Saga de Thriller Bark
    ["Arco de los Cazadores de Hielo", 326, 336, 1],
    ["Saga de Thriller Bark: Arco de Thriller Bark", 337, 381, 0, 442, 489],
    ["Arco de la Isla Spa", 382, 384, 1],
    // Saga de la Guerra en la Cumbre
    ["Saga de la Guerra en la Cumbre: Arco del Archipiélago Sabaody", 385, 405, 0, 490, 513],
    ["Especial histórico (Boss Luffy)", 406, 407, 1],
    ["Saga de la Guerra en la Cumbre: Arco de Amazon Lily", 408, 421, 0, 514, 524],
    ["Saga de la Guerra en la Cumbre: Arco de Impel Down", 422, 425, 0, 525, 528],
    ["Arco de Little East Blue", 426, 429, 1],
    ["Saga de la Guerra en la Cumbre: Arco de Impel Down (continuación)", 430, 456, 0, 529, 549],
    ["Saga de la Guerra en la Cumbre: Arco de Marineford", 457, 489, 0, 550, 580],
    ["Saga de la Guerra en la Cumbre: Arco post-guerra", 490, 516, 0, 581, 597],
    // Saga de la Isla Gyojin
    ["Saga de la Isla Gyojin: Regreso a Sabaody", 517, 522, 0, 598, 602],
    ["Saga de la Isla Gyojin: Arco de la Isla Gyojin", 523, 574, 0, 603, 653],
    // Saga de Dressrosa
    ["Arco de la ambición de Z", 575, 578, 1],
    ["Saga de Dressrosa: Arco de Punk Hazard", 579, 625, 0, 654, 699],
    ["Arco de la recuperación de Caesar", 626, 627, 1],
    ["Saga de Dressrosa: Arco de Dressrosa", 628, 746, 0, 700, 801],
    ["Arco de la Mina de Plata", 747, 750, 1],
    // Saga de los Cuatro Emperadores
    ["Saga de los Yonkō: Arco de Zou", 751, 779, 0, 802, 824],
    ["Arco del Marine novato", 780, 782, 1],
    ["Saga de los Yonkō: Arco de Whole Cake Island", 783, 877, 0, 825, 902],
    ["Saga de los Yonkō: Arco del Reverie", 878, 889, 0, 903, 908],
    ["Saga de los Yonkō: País de Wano – Acto 1", 890, 894, 0, 909, 911],
    ["Arco del Gremio Cidre", 895, 896, 1],
    ["Saga de los Yonkō: País de Wano – Acto 1 (continuación)", 897, 916, 0, 912, 924],
    ["Saga de los Yonkō: País de Wano – Acto 2", 917, 958, 0, 925, 958],
    ["Saga de los Yonkō: País de Wano – Acto 3", 959, 1085, 0, 959, 1057],
    // Saga final
    ["Saga final: Arco de Egghead", 1086, 1155, 0, 1058, 1125],
    ["Saga final: Arco de Elbaph", 1156, 1180, 0, 1126, 1150]
  ],
  // Capítulos del manga que el anime aún no ha adaptado
  soloManga: [
    ["Saga final: Arco de Elbaph (continuación, aún sin anime)", null, null, 0, 1151, 1197]
  ],
  // Capítulos de relleno sueltos dentro de arcos canon (Anime Filler List)
  relleno: [98, 99, 102, 279, 280, 281, 282, 283, 291, 292, 303, 317, 318, 319, 457, 458, 492, 542, 590, 907, 1029, 1030],
  // Películas en orden de visionado: despues = capítulo del anime tras el que conviene verla (0 = antes del 1)
  peliculas: [
    { titulo: "One Piece: La película", anio: 2000, despues: 18, tipo: "no-canon", nota: "El tesoro de El Drago; con Luffy, Zoro, Nami y Usopp, tras la Villa Syrup." },
    { titulo: "One Piece: Aventura en la Isla Engranaje", anio: 2001, despues: 53, tipo: "no-canon", nota: "Les roban el Going Merry; ya está Sanji, justo antes de la Grand Line." },
    { titulo: "One Piece: El Reino de Chopper en la Isla de los Animales Raros", anio: 2002, despues: 130, tipo: "no-canon", nota: "Chopper coronado rey de una isla; tras Arabasta (una guía la pone en el 102)." },
    { titulo: "One Piece: Episodio de Arabasta – Los Piratas y la Princesa del Desierto", anio: 2007, despues: 130, tipo: "recopilatorio", nota: "Vuelve a contar el arco de Arabasta. Momento aproximado: unas guías la ponen al acabar Arabasta (130) y otras, por fecha de estreno, tras el 312." },
    { titulo: "One Piece: La Aventura sin Salida", anio: 2003, despues: 138, tipo: "no-canon", nota: "Una carrera de piratas; ya está Robin." },
    { titulo: "One Piece: La Maldición de la Espada Sagrada", anio: 2004, despues: 138, tipo: "no-canon", nota: "Historia de Zoro y la espada Shichiseiken. Momento aproximado: la mayoría de guías la ponen tras el 138 (otras, tras el 143 o el 193)." },
    { titulo: "One Piece: El Barón Omatsuri y la Isla de los Secretos", anio: 2005, despues: 206, tipo: "no-canon", nota: "Tras Skypiea y la Base G-8 (otras guías, tras el 224)." },
    { titulo: "One Piece: El Gran Soldado Mecánico del Castillo Karakuri", anio: 2006, despues: 228, tipo: "no-canon", nota: "Antes de llegar a Water 7." },
    { titulo: "One Piece: Episodio de Chopper – El Milagro del Cerezo Florecido en Invierno", anio: 2008, despues: 325, tipo: "recopilatorio", nota: "Nueva versión del arco de la Isla de Drum con Robin y Franky, por eso va tras Water 7." },
    { titulo: "One Piece Film: Strong World", anio: 2009, despues: 429, tipo: "no-canon", nota: "Historia de Oda contra Shiki; el arco de Little East Blue (426–429) hace de precuela (otras guías la ponen antes de Sabaody, tras el 381 o el 384)." },
    { titulo: "One Piece 3D: ¡A la Caza del Sombrero de Paja!", anio: 2011, despues: 429, tipo: "no-canon", nota: "Película corta en 3D (unos 30 minutos). Momento aproximado: tras el 429 según dos guías; otras, tras el 381 o el 384." },
    { titulo: "One Piece Film: Z", anio: 2012, despues: 578, tipo: "no-canon", nota: "Tras el arco de relleno de la ambición de Z (575–578), que hace de precuela." },
    { titulo: "One Piece Film: Gold", anio: 2016, despues: 750, tipo: "no-canon", nota: "Tras Dressrosa y el arco de la Mina de Plata (747–750), que hace de precuela." },
    { titulo: "One Piece: Estampida", anio: 2019, despues: 896, tipo: "no-canon", nota: "Tras el Reverie y el arco del Gremio Cidre (895–896), que hace de precuela (otras guías, tras el 889)." },
    { titulo: "One Piece Film: Red", anio: 2022, despues: 1030, tipo: "no-canon", nota: "Uta, la hija de Shanks; los capítulos 1029–1030 hacen de precuela." }
  ],
  nota: "Incluye el anime hasta el capítulo 1180 (27 de septiembre de 2026; desde el arco de Elbaph se emiten como máximo 26 capítulos al año y el anime vuelve en 2027) y el manga hasta el capítulo 1197 (1 de noviembre de 2026), ambos aún en publicación. El capítulo 1180 del anime adapta el 1150 del manga (Otaku Orbit, Skip the Filler; Anime Filler Guide añade unas páginas del 1151), así que la parte solo de manga empieza en el 1151. Los capítulos 1169–1180 son canon (un capítulo del manga por episodio, según Otaku Orbit y Skip the Filler). El Acto 3 de Wano empieza en el capítulo 959 del anime («¡Comienza el tercer acto!», según AniDB y ListFist). Los nombres de arco van en español según el uso habitual (Wikipedia en español y doblaje), salvo los que se suelen dejar en su forma original (Romance Dawn, Loguetown, Whole Cake Island, Egghead…). Los capítulos de relleno salen de Anime Filler List (94 en total); los «mixed canon/filler» y los «anime canon» (como los capítulos de las aventuras de Buggy, 45–47, o de Koby y Helmeppo, 68–69) cuentan como canon y van dentro del arco más cercano. Los rangos por arco salen de One Piece Wiki (Fandom) y Wikipedia; los cortes dentro de Impel Down (528/529) y del Acto 1 de Wano (911/912) cuadran con la tabla de ListFist, pero solo con esa fuente: son aproximados. Las equivalencias entre anime y manga son aproximadas: se reparten de forma uniforme dentro de cada arco, sin contar el relleno."
});
