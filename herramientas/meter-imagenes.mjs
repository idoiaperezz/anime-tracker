// =====================================================================
//  METER IMÁGENES HECHAS A MANO (por ejemplo, con la app de Gemini)
//
//  1. Guarda tus imágenes en la carpeta  imagenes-nuevas/  (en la raíz del proyecto)
//     con estos nombres (vale .png, .jpg, .jpeg o .webp):
//        <id>-banner.png    → banner de la cabecera del anime
//        <id>-tarjeta.png   → imagen de la tarjeta de la portada
//        <id>-icono.png     → icono de la pestaña del navegador
//     Por ejemplo: inuyasha-banner.png, inuyasha-tarjeta.png, inuyasha-icono.png
//  2. Ejecuta:  node herramientas/meter-imagenes.mjs
//
//  El script las recorta al tamaño correcto (banner 2048×410, tarjeta 960×540,
//  icono 256×256), las guarda en banners/, tarjetas/ e iconos/, actualiza la
//  versión de las imágenes (para que nadie vea las viejas en caché) y te dice
//  qué series siguen sin imagen. Las originales se quedan en imagenes-nuevas/.
// =====================================================================
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIR = path.join(ROOT, "imagenes-nuevas");
const sharp = (await import("sharp")).default;

const TIPOS = {
  banner:  { carpeta: "banners",  ext: ".jpg", w: 2048, h: 410 },
  tarjeta: { carpeta: "tarjetas", ext: ".jpg", w: 960,  h: 540 },
  icono:   { carpeta: "iconos",   ext: ".png", w: 256,  h: 256 },
};

function catalogo() {
  const ctx = { window: {} }; ctx.window = ctx; vm.createContext(ctx);
  for (const f of ["catalogo.js", "catalogo-auto.js"]) {
    const p = path.join(ROOT, "data", f);
    if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, "utf8"), ctx);
  }
  return ctx.CATALOGO || [];
}

fs.mkdirSync(DIR, { recursive: true });
const series = catalogo();
const ids = new Set(series.map((s) => s.id));
let hechas = 0;

for (const f of fs.readdirSync(DIR)) {
  if (fs.statSync(path.join(DIR, f)).isDirectory() || f.startsWith(".")) continue;
  // Acepta extensiones dobles como «inuyasha-banner.png.jpg» (Windows oculta la última)
  const m = f.toLowerCase().match(/^(.+?)-(banner|tarjeta|icono)(\.(png|jpe?g|webp))+$/);
  if (!m) { if (!/\.(html|md|txt)$/i.test(f)) console.log(`? ${f}: nombre no reconocido (debe ser <id>-banner, <id>-tarjeta o <id>-icono)`); continue; }
  const [, id, tipo] = m;
  if (!ids.has(id)) { console.log(`✗ ${f}: no hay ninguna serie con el id «${id}»`); continue; }
  const t = TIPOS[tipo];
  const destino = path.join(ROOT, t.carpeta, id + t.ext);
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  const origen = path.join(DIR, f);
  const meta = await sharp(origen).metadata();
  const ratio = meta.width / meta.height, objetivo = t.w / t.h;
  if (tipo === "banner" && ratio < objetivo * 0.85) {
    // La app de Gemini no hace imágenes tan panorámicas como el banner (5:1). Recortar tanto
    // cortaría las caras, así que: recorte suave (a 3:1, por la zona con más detalle) y la imagen
    // entera en el centro, con los lados rellenos con una copia desenfocada de la misma imagen.
    let buf = await sharp(origen).toBuffer();
    if (ratio < 3) buf = await sharp(buf).resize(meta.width, Math.round(meta.width / 3), { fit: "cover", position: "attention" }).toBuffer();
    const fondo = await sharp(buf).resize(t.w, t.h, { fit: "cover" }).blur(30).modulate({ brightness: 0.6, saturation: 1.15 }).toBuffer();
    const frente = await sharp(buf).resize(t.w, t.h, { fit: "inside" }).toBuffer();
    const fm = await sharp(frente).metadata();
    await sharp(fondo).composite([{ input: frente, left: Math.round((t.w - fm.width) / 2), top: 0 }]).jpeg({ quality: 88, mozjpeg: true }).toFile(destino);
  } else {
    let img = sharp(origen).resize(t.w, t.h, { fit: "cover", position: "centre" });
    img = t.ext === ".png" ? img.png({ compressionLevel: 9 }) : img.jpeg({ quality: 88, mozjpeg: true });
    await img.toFile(destino);
  }
  hechas++;
  console.log(`✓ ${f} → ${t.carpeta}/${id}${t.ext}`);
}

if (hechas) {
  // Nueva versión de imágenes: los navegadores descargarán las nuevas
  const auto = path.join(ROOT, "data", "catalogo-auto.js");
  const txt = fs.readFileSync(auto, "utf8").replace(/VERSION_IMAGENES = "[^"]*"/, `VERSION_IMAGENES = "${Date.now().toString(36)}"`);
  fs.writeFileSync(auto, txt);
}

// Qué falta
const faltan = [];
for (const s of series) {
  const no = [];
  if (!s.banner && !fs.existsSync(path.join(ROOT, "banners", s.id + ".jpg"))) no.push("banner");
  if (!fs.existsSync(path.join(ROOT, "tarjetas", s.id + ".jpg"))) no.push("tarjeta");
  if (!s.icono && !fs.existsSync(path.join(ROOT, "iconos", s.id + ".png"))) no.push("icono");
  if (no.length) faltan.push(`  ${s.id}: ${no.join(", ")}`);
}
console.log(`\nListo: ${hechas} imágenes colocadas.`);
console.log(faltan.length ? "Todavía sin imagen:\n" + faltan.join("\n") : "Todas las series tienen sus imágenes.");
