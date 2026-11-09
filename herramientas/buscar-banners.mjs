// =====================================================================
//  BANNERS GRATIS — busca imágenes oficiales en AniList y Kitsu (sin Gemini,
//  sin coste) y monta una galería para elegir.
//
//    node herramientas/buscar-banners.mjs                 → todas las series
//    node herramientas/buscar-banners.mjs naruto bleach   → solo esas
//      crea herramientas/galeria-banners.html: ábrela y mira los números
//
//    node herramientas/buscar-banners.mjs --usar naruto 3
//      descarga la opción 3 de Naruto, la recorta a 2048×410 (5:1) y la
//      guarda como su banner (banners/naruto.jpg)
//
//  Ojo con los spoilers: las imágenes de temporadas avanzadas pueden tenerlos.
// =====================================================================
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CAND_FILE = path.join(ROOT, "herramientas", ".candidatos-banners.json");
const GALERIA = path.join(ROOT, "herramientas", "galeria-banners.html");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------- Catálogo ----------
function catalogo() {
  const ctx = { window: {} }; ctx.window = ctx; vm.createContext(ctx);
  for (const f of ["catalogo.js", "catalogo-auto.js"]) {
    const p = path.join(ROOT, "data", f);
    if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, "utf8"), ctx);
  }
  return ctx.CATALOGO || [];
}

// ---------- AniList (todas las temporadas: cada una tiene su banner) ----------
let last = 0;
async function anilist(query, variables) {
  for (let i = 0; i < 6; i++) {
    const w = last + 2100 - Date.now(); if (w > 0) await sleep(w); last = Date.now();
    const res = await fetch("https://graphql.anilist.co", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ query, variables }) });
    if (res.status === 429) { await sleep((Number(res.headers.get("retry-after")) || 60) * 1000); continue; }
    const j = await res.json();
    if (j.errors) throw new Error(j.errors.map((e) => e.message).join("; "));
    return j.data;
  }
  throw new Error("AniList no responde");
}
const F = `id format title { romaji english } bannerImage coverImage { extraLarge } relations { edges { relationType node { id type format } } }`;
async function temporadasAnilist(s) {
  let m = null;
  if (s.anilistId) m = (await anilist(`query($id:Int){Media(id:$id){${F}}}`, { id: s.anilistId })).Media;
  else {
    const d = await anilist(`query($q:String){Page(perPage:6){media(search:$q,type:ANIME,format_in:[TV],sort:POPULARITY_DESC){${F}}}}`, { q: s.titulo });
    m = d.Page.media[0];
  }
  const out = [];
  const vistos = new Set();
  let cur = m, n = 1;
  while (cur && !vistos.has(cur.id) && n <= 12) {
    vistos.add(cur.id);
    if (cur.bannerImage) out.push({ fuente: "AniList", detalle: `Temporada ${n}: ${cur.title.english || cur.title.romaji}`, url: cur.bannerImage, spoiler: n > 1 });
    const seq = cur.relations.edges.find((e) => e.relationType === "SEQUEL" && e.node.type === "ANIME" && ["TV", "TV_SHORT", "ONA"].includes(e.node.format));
    if (!seq) break;
    cur = (await anilist(`query($id:Int){Media(id:$id){${F}}}`, { id: seq.node.id })).Media; n++;
  }
  return out;
}

// ---------- Kitsu ----------
async function kitsu(s) {
  const url = "https://kitsu.io/api/edge/anime?filter%5Btext%5D=" + encodeURIComponent(s.titulo) + "&page%5Blimit%5D=6";
  const res = await fetch(url, { headers: { Accept: "application/vnd.api+json" } });
  if (!res.ok) return [];
  const j = await res.json();
  return (j.data || [])
    .filter((d) => d.attributes.coverImage && d.attributes.coverImage.original && ["TV", "movie", "ONA"].includes(d.attributes.subtype))
    .map((d) => ({ fuente: "Kitsu", detalle: `${d.attributes.canonicalTitle}${d.attributes.subtype === "movie" ? " (película)" : ""}`, url: d.attributes.coverImage.original, spoiler: false }));
}

// ---------- Recorte a banner ----------
async function usar(id, num) {
  const cands = JSON.parse(fs.readFileSync(CAND_FILE, "utf8"));
  const lista = cands[id];
  if (!lista) throw new Error(`no hay opciones guardadas de «${id}»: ejecuta antes node herramientas/buscar-banners.mjs ${id}`);
  const c = lista[num - 1];
  if (!c) throw new Error(`«${id}» solo tiene ${lista.length} opciones`);
  const res = await fetch(c.url);
  if (!res.ok) throw new Error("no se pudo descargar la imagen (" + res.status + ")");
  const buf = Buffer.from(await res.arrayBuffer());
  const sharp = (await import("sharp")).default;
  const file = path.join(ROOT, "banners", id + ".jpg");
  await sharp(buf).resize(2048, 410, { fit: "cover", position: "attention" }).jpeg({ quality: 88, mozjpeg: true }).toFile(file);
  // Nueva versión de imágenes para que los navegadores descarguen la nueva
  const auto = path.join(ROOT, "data", "catalogo-auto.js");
  const txt = fs.readFileSync(auto, "utf8").replace(/VERSION_IMAGENES = "[^"]*"/, `VERSION_IMAGENES = "${Date.now().toString(36)}"`);
  fs.writeFileSync(auto, txt);
  console.log(`✓ ${id}: opción ${num} (${c.fuente} · ${c.detalle}) → banners/${id}.jpg`);
  const manual = catalogo().find((s) => s.id === id);
  if (manual && manual.banner && manual.banner !== `banners/${id}.jpg`)
    console.log(`  ! «${id}» usa «${manual.banner}» en data/catalogo.js: cambia su banner a "banners/${id}.jpg" para usar este.`);
}

// ---------- Galería ----------
function esc(t) { return String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
function galeria(series, cands) {
  const bloques = series.map((s) => {
    const lista = cands[s.id] || [];
    const actual = s.banner || `banners/${s.id}.jpg`;
    return `<section><h2>${esc(s.titulo)} <small>${esc(s.id)}</small></h2>
      <figure class="actual"><img src="../${esc(actual)}" alt="" loading="lazy"><figcaption>Banner actual</figcaption></figure>
      ${lista.length ? lista.map((c, i) => `<figure><img src="${esc(c.url)}" alt="" loading="lazy" referrerpolicy="no-referrer">
        <figcaption><b>${i + 1}</b> · ${esc(c.fuente)} · ${esc(c.detalle)}${c.spoiler ? ' · <em>puede tener spoilers</em>' : ""}</figcaption></figure>`).join("")
        : "<p>No se han encontrado imágenes.</p>"}
    </section>`;
  }).join("\n");
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Opciones de banners</title>
<style>
body{margin:0;padding:24px;background:#0b0b16;color:#eee;font:15px system-ui,sans-serif}
h1{margin:0 0 6px}p.ayuda{color:#aab;margin:0 0 24px}
section{margin:0 0 34px;padding-bottom:20px;border-bottom:1px solid #2a2a44}
h2{margin:0 0 10px}h2 small{color:#889;font-size:.8rem;font-weight:400}
figure{margin:0 0 12px}figure img{display:block;width:100%;max-width:1100px;aspect-ratio:5/1;object-fit:cover;border-radius:8px;background:#1a1a2e}
figcaption{font-size:.85rem;color:#ccd;margin-top:4px}figcaption b{color:#22d3ee;font-size:1rem}figcaption em{color:#ffb4b4}
.actual img{outline:2px solid #9b5cff}
</style></head><body>
<h1>Opciones de banners (gratis: AniList y Kitsu)</h1>
<p class="ayuda">Así se verán recortadas a la proporción de los banners (5:1). Dime la serie y el número que te guste, por ejemplo «naruto 2».</p>
${bloques}
</body></html>`;
}

// ---------- Principal ----------
const args = process.argv.slice(2);
if (args[0] === "--usar") {
  usar(args[1], Number(args[2])).catch((e) => { console.error("Error: " + e.message); process.exit(1); });
} else {
  (async () => {
    const todas = catalogo();
    const series = args.length ? todas.filter((s) => args.includes(s.id)) : todas;
    let cands = {};
    try { cands = JSON.parse(fs.readFileSync(CAND_FILE, "utf8")); } catch {}
    for (const s of series) {
      try {
        const lista = [...(await temporadasAnilist(s)), ...(await kitsu(s))];
        const unicas = lista.filter((c, i) => lista.findIndex((x) => x.url === c.url) === i);
        cands[s.id] = unicas;
        console.log(`${s.titulo}: ${unicas.length} opciones`);
      } catch (e) { console.log(`✗ ${s.titulo}: ${e.message}`); }
    }
    fs.writeFileSync(CAND_FILE, JSON.stringify(cands, null, 1));
    fs.writeFileSync(GALERIA, galeria(todas.filter((s) => cands[s.id]), cands));
    console.log("\nGalería: " + GALERIA);
  })().catch((e) => { console.error("Error: " + e.message); process.exit(1); });
}
