// Detalles de Black Clover (la ficha básica está en data/catalogo.js)
registrarSerie({
  id: "blackclover",
  // [nombre, desde, hasta, relleno (0/1), manga desde, manga hasta, (fin en la rejilla del manga si no hay equivalencia)]
  arcos: [
    ["Magic Knights Entrance", 1, 13, 0, 1, 10],
    ["Dungeon Exploration", 14, 19, 0, 11, 21],
    ["Royal Capital Assault", 20, 27, 0, 22, 37],
    ["Eye of the Midnight Sun Encounter", 28, 39, 0, 38, 56],
    ["Seabed Temple", 40, 50, 0, 57, 73],
    ["Witches' Forest", 51, 65, 0, 74, 101],
    ["Royal Knights", 66, 93, 0, 102, 146],
    ["Elf Reincarnation", 94, 157, 0, 147, 228],
    ["Heart Kingdom Joint Struggle", 158, 167, 0, 229, 260],
    ["Spade Kingdom Raid", 168, 176, 0, 261, null, 331]
  ],
  // Arcos que solo existen en el manga (sin anime todavía)
  soloManga: [
    ["Arco final (aún sin anime)", null, null, 0, 332, 392]
  ],
  // Episodios de relleno sueltos (Anime Filler List)
  relleno: [29, 66, 68, 82, 123, 124, 125, 131, 134, 135, 142, 143, 144, 145, 146, 147, 148, 149],
  nota: "Incluye el anime hasta el capítulo 176 (la temporada 2 empezó en octubre de 2026 y sigue en emisión) y el manga completo (392 capítulos). Los títulos de los arcos van en su versión original: no hay títulos oficiales en español. Los episodios de relleno salen de Anime Filler List. Las equivalencias entre anime y manga son aproximadas: se reparten de forma uniforme dentro de cada arco, sin contar el relleno."
});
