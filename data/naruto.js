// Detalles de Naruto (la ficha básica está en data/catalogo-auto.js)
// Numeración del anime seguida: Naruto = 1–220, Naruto Shippuden = 221–720 (cap. N de Shippuden = N + 220).
registrarSerie({
  id: "naruto",
  // Colores de la serie en su rastreador (claro / oscuro)
  tema: {
    claro:  { accent: "#e8590c", accentRgb: "232, 89, 12", accentDeep: "#8a3300", accent2: "#1971c2", onAccent: "#ffffff" },
    oscuro: { accent: "#ff922b", accentRgb: "255, 146, 43", accentDeep: "#d9480f", accent2: "#4dabf7", onAccent: "#1a0d00" }
  },
  animeTotal: 720,   // 220 (Naruto) + 500 (Shippuden), ambos terminados
  mangaTotal: 700,   // manga completo (1999–2014)
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    // ---- Naruto (primera parte) ----
    ["El País de las Olas", 1, 19, 0, 1, 33],
    ["Exámenes Chūnin", 20, 67, 0, 34, 115],
    ["Invasión de Konoha", 68, 80, 0, 116, 138],
    ["Búsqueda de Tsunade", 81, 100, 0, 139, 171],
    ["Relleno: Escolta en el País del Té", 101, 106, 1],
    ["Recuperación de Sasuke", 107, 135, 0, 172, 236],
    ["Relleno: Investigación en el País de los Arrozales", 136, 140, 1],
    ["Los sentimientos de Sakura y el regreso de Mizuki (mixtos)", 141, 142, 0, 237, 237], // mixtos canon/relleno (Anime Filler List)
    ["Relleno: Persecución de Mizuki", 143, 147, 1],
    ["Relleno: Búsqueda del Bikōchū", 148, 151, 1],
    ["Relleno: Misiones de Konoha", 152, 219, 1],
    ["La partida (final de la primera parte)", 220, 220, 0, 238, 244],
    // ---- Naruto Shippuden (Shippuden 1–500 = 221–720) ----
    ["Shippuden: Rescate del Kazekage", 221, 252, 0, 245, 281],                 // S1–32
    ["Shippuden: Reconocimiento del Puente Tenchi", 253, 273, 0, 282, 310],     // S33–53
    ["Shippuden: Supresión de Akatsuki (Hidan y Kakuzu)", 274, 276, 0, 311, 317], // S54–56
    ["Shippuden: Los Doce Ninjas Guardianes (relleno)", 277, 291, 1],           // S57–71
    ["Shippuden: Supresión de Akatsuki (continuación)", 292, 310, 0, 318, 342], // S72–90 (S89–90 son mixtos)
    ["Shippuden: La aparición del Sanbi (relleno)", 311, 332, 1],               // S91–112
    ["Shippuden: Persecución de Itachi", 333, 338, 0, 343, 352],                // S113–118
    ["Shippuden: Kakashi Gaiden", 339, 340, 0, null, null],                     // S119–120 (flashback)
    ["Shippuden: Persecución de Itachi (continuación)", 341, 346, 0, 353, 367], // S121–126
    ["Shippuden: La leyenda de Jiraiya el Galante", 347, 353, 0, 368, 383],     // S127–133
    ["Shippuden: Batalla fatídica entre hermanos", 354, 363, 0, 384, 412],      // S134–143
    ["Shippuden: La liberación del Rokubi (relleno)", 364, 371, 1],             // S144–151
    ["Shippuden: El asalto de Pain", 372, 395, 0, 413, 453],                    // S152–175
    ["Shippuden: Pasado – El rastro de Konoha (relleno)", 396, 416, 1],         // S176–196
    ["Shippuden: La Cumbre de los Cinco Kage", 417, 434, 0, 454, 483],          // S197–214
    ["Cuarta Guerra Ninja: Cuenta atrás", 435, 442, 0, 484, 491],               // S215–222
    ["Shippuden: Vida paradisíaca en un barco (relleno)", 443, 462, 1],         // S223–242
    ["Cuarta Guerra Ninja: Cuenta atrás (continuación)", 463, 476, 0, 492, 515], // S243–256
    ["Shippuden: Relleno (episodios sueltos)", 477, 480, 1],                    // S257–260
    ["Cuarta Guerra Ninja: Confrontación", 481, 503, 0, 516, 544],              // S261–283
    ["Shippuden: Relleno (incluye el arco de Power)", 504, 515, 1],             // S284–295
    ["Cuarta Guerra Ninja: Confrontación (continuación)", 516, 522, 0, 545, 559], // S296–302
    ["Shippuden: Relleno (historias de la guerra)", 523, 540, 1],               // S303–320
    ["Cuarta Guerra Ninja: Clímax", 541, 566, 0, 560, 607],                     // S321–346
    ["Shippuden: Kakashi, el ANBU de la oscuridad (relleno)", 567, 581, 1],     // S347–361
    ["Cuarta Guerra Ninja: Clímax (continuación)", 582, 597, 0, 608, 639],      // S362–377
    ["Cuarta Guerra Ninja: Nacimiento del jinchūriki del Diez Colas", 598, 613, 0, 640, 662], // S378–393
    ["Shippuden: Relleno (bloque de episodios originales)", 614, 633, 1],       // S394–413
    ["Cuarta Guerra Ninja: Nacimiento del jinchūriki del Diez Colas (continuación)", 634, 646, 0, 663, 677], // S414–426
    ["Shippuden: Manual ninja de Jiraiya – La historia de Naruto el héroe (relleno)", 647, 670, 1], // S427–450
    ["Shippuden: Itachi Shinden", 671, 678, 0, 678, 679],                       // S451–458
    ["Cuarta Guerra Ninja: Kaguya Ōtsutsuki ataca", 679, 699, 0, 680, 699],     // S459–479
    ["Shippuden: Infancia (relleno)", 700, 703, 1],                             // S480–483
    ["Shippuden: Epílogo (Sasuke Shinden, Shikamaru Hiden, Konoha Hiden)", 704, 720, 0, 700, null, 700] // S484–500
  ],
  // Episodios de relleno sueltos dentro de arcos canon (Anime Filler List)
  relleno: [
    26, 97,                    // Naruto
    390, 391,                  // Shippuden 170–171
    491,                       // Shippuden 271
    499, 500, 501,             // Shippuden 279–281
    596, 597,                  // Shippuden 376–377
    608, 609, 610,             // Shippuden 388–390
    636, 637, 642, 643,        // Shippuden 416–417, 422–423
    684, 685, 686, 687, 688    // Shippuden 464–468
  ],
  // Texto para los arcos del anime que en el manga no siguen la numeración normal
  notaFlashback: "Kakashi Gaiden es un flashback: en el manga son los capítulos 239–244, publicados entre la primera y la segunda parte, y en la rejilla del manga aparecen junto al capítulo 220 del anime. Después sigue en el cap. ≈ 354.",
  nota: "Incluye Naruto (220 capítulos) y Naruto Shippuden (500) con numeración seguida: el capítulo N de Shippuden es aquí el N + 220. No incluye Boruto. Manga completo: 700 capítulos (1–244 primera parte, 245–700 segunda). Relleno según Anime Filler List: los capítulos «mixtos» cuentan como canon (también el 141–142 de Naruto, ≈ cap. 236–238 del manga, y el 89–90 de Shippuden, que se suman al arco de Hidan y Kakuzu; su equivalencia en el manga es aproximada). Rangos de manga por arco según Beebom y Epicstream (basados en Narutopedia), contrastados con daddyjim.com y con la tabla capítulo a capítulo de ListFist; los capítulos 54–56 de Shippuden adaptan los caps. 311–317 (inicio de Hidan y Kakuzu), no el Puente Tenchi. Los cortes dentro de los arcos partidos por el relleno salen de ListFist y Anime Filler Guide (Itachi 352/353, Cuenta atrás 491/492, Confrontación 544/545, Clímax 607/608); los de Diez Colas (662/663, solo ListFist) y Hidan y Kakuzu (317/318) son aproximados. Los capítulos 239–244 (Kakashi Gaiden) se asignan al capítulo 220 en la rejilla. Itachi Shinden (novela) se cuenta como canon por sus escenas de la guerra (caps. ≈ 678–679). Los últimos 17 capítulos de Shippuden adaptan novelas posteriores a la guerra y se asocian al epílogo del manga (cap. 700) sin equivalencia exacta. Los nombres de los arcos son traducciones al español de los usados en Narutopedia y Wikipedia; los de algunos bloques de relleno son descriptivos. Las equivalencias son aproximadas y se reparten de forma uniforme dentro de cada arco, sin contar el relleno."
});
