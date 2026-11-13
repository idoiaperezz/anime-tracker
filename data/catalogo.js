// =====================================================================
//  CATÁLOGO DE SERIES — cada entrada crea una tarjeta en la portada y
//  su rastreador en serie.html?id=<id>
//
//  Para añadir un anime basta con una entrada aquí:
//    { id: "naruto", titulo: "Naruto", animeTotal: 220, mangaTotal: 700 }
//  y, si quieres, su banner en banners/<id>.png (si no está, se usa un fondo de color).
//
//  Campos:
//    id           letras minúsculas, números y guiones (es el nombre en la dirección)
//    titulo       nombre de la serie
//    descripcion  frase de la tarjeta de la portada
//    animeTotal   capítulos del anime (0 si solo es manga)
//    mangaTotal   capítulos del manga (0 si no tiene manga)
//    enEmision    true si el anime sigue saliendo
//    emision      [{ anilistId, desde }]: temporada que se emite y su capítulo 1 en nuestra numeración (ver emision.js)
//    banner       ruta del banner (por defecto banners/<id>.png)
//    bannerAjuste "cover" (rellena, por defecto) o "contain" (se ve entero)
//    icono        icono de la pestaña y del rastreador (opcional)
//    tema         colores (opcional): { claro: {...}, oscuro: {...} }
//    storageKey   clave del progreso en el navegador (por defecto <id>-tracker-v1)
//    generos      géneros en español, para el filtro de la portada (opcional)
//
//  Los arcos, el relleno y las equivalencias con el manga van aparte, en
//  data/<id>.js (opcional: sin ese archivo los capítulos se agrupan de 25 en 25).
// =====================================================================
var CATALOGO = [
  {
    id: "bleach",
    titulo: "Bleach",
    descripcion: "La historia de Ichigo Kurosaki, del arco «Shinigami Sustituto» hasta «La guerra sangrienta de los mil años».",
    animeTotal: 416, mangaTotal: 686,
    banner: "bleach-banner.png", bannerAjuste: "contain",
    bannerAlt: "Bleach: Ichigo y los Shinigami en batalla",
    icono: "bleach-icon.png",
    storageKey: "bleach-tracker-v2",
    generos: ["Acción", "Aventura", "Sobrenatural"],
    tema: {
      claro:  { accent: "#d9480f", accentRgb: "217, 72, 15",  accentDeep: "#7a2410", accent2: "#ffb703", onAccent: "#ffffff" },
      oscuro: { accent: "#ff8a3d", accentRgb: "255, 138, 61", accentDeep: "#c2491f", accent2: "#ffd166", onAccent: "#160b03" }
    }
  },
  {
    id: "blackclover",
    titulo: "Black Clover",
    descripcion: "Asta y Yuno, dos huérfanos que sueñan con ser el Rey Mago, del arco «Magic Knights Entrance» hasta «Spade Kingdom Raid».",
    animeTotal: 176, mangaTotal: 392, enEmision: true,
    emision: [{ anilistId: 195604, desde: 171 }], // temporada 2: la web pregunta a AniList cuántos capítulos van
    banner: "blackclover-banner.jpg",
    bannerAlt: "Black Clover: Asta, Yuno y los Toros Negros",
    icono: "blackclover-icon.png",
    storageKey: "blackclover-tracker-v1",
    generos: ["Acción", "Comedia", "Fantasía"],
    tema: {
      claro:  { accent: "#2b8a3e", accentRgb: "43, 138, 62",  accentDeep: "#14532d", accent2: "#d4a017", onAccent: "#ffffff" },
      oscuro: { accent: "#51cf66", accentRgb: "81, 207, 102", accentDeep: "#2b8a3e", accent2: "#ffd43b", onAccent: "#06140a" }
    }
  }
];
