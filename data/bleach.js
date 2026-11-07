// Detalles de Bleach (la ficha básica está en data/catalogo.js)
registrarSerie({
  id: "bleach",
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta]
  arcos: [
    ["Shinigami Sustituto", 1, 20, 0, 1, 70],
    ["Sociedad de Almas: La entrada furtiva", 21, 41, 0, 71, 117],
    ["Sociedad de Almas: El rescate", 42, 63, 0, 118, 182],
    ["Bount", 64, 91, 1],
    ["Bount: La invasión a la Sociedad de Almas", 92, 109, 1],
    ["Arrancar: La llegada", 110, 131, 0, 183, 229],
    ["Arrancar: Infiltración a Hueco Mundo", 132, 151, 0, 230, 251],
    ["Arrancar: Fieras batallas", 152, 167, 0, 252, 286],
    ["El nuevo capitán Shusuke Amagai", 168, 189, 1],
    ["Arrancar vs Shinigami", 190, 205, 0, 287, 315],
    ["Pasado: El Evento Visored", 206, 212, 0, null, null],
    ["Arrancar: Batalla Decisiva de Karakura", 213, 229, 0, 316, 340],
    ["La historia alterna de las zanpakuto", 230, 265, 1],
    ["Arrancar: La caída", 266, 316, 0, 341, 423],
    ["Invasión Armada al Gotei 13", 317, 342, 1],
    ["Agente Perdido", 343, 366, 0, 424, 479],
    ["La guerra sangrienta de los mil años – Parte 1: The Blood Warfare", 367, 379, 0, 480, 542],
    ["La guerra sangrienta de los mil años – Parte 2: The Separation", 380, 392, 0, 543, 609],
    ["La guerra sangrienta de los mil años – Parte 3: The Conflict", 393, 406, 0, 610, 661],
    ["La guerra sangrienta de los mil años – Parte 4: The Calamity", 407, 416, 0, 662, 686]
  ],
  // Texto para los arcos del anime que en el manga son un flashback con numeración propia
  notaFlashback: "En el manga este arco es un flashback con numeración propia (Turn Back the Pendulum). Después sigue en el cap. ≈ 316.",
  // Progreso guardado por la primera versión del rastreador (formato { current, hideFiller })
  claveAntigua: "bleach-tracker-v1",
  nota: "El arco «Pasado: El Evento Visored» del anime adapta el flashback Turn Back the Pendulum, que en el manga tiene numeración propia (−108 a −96) y no aparece en la rejilla del manga. Incluye el anime completo (416 capítulos, hasta La guerra sangrienta de los mil años – Parte 4: The Calamity) y el manga completo (686 capítulos). Las equivalencias entre anime y manga son aproximadas (unos 2 capítulos de margen): salen de los rangos por arco de OtakusNotes y Beebom, repartidos de forma uniforme dentro de cada arco."
});
