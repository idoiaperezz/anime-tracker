// =====================================================================
//  INSTRUCCIONES PARA HACER LAS IMÁGENES A MANO EN LA APP DE GEMINI
//
//    node herramientas/instrucciones-gemini.mjs inuyasha frierenbeyondjourneysend ...
//
//  Crea imagenes-nuevas/instrucciones.html: para cada serie, las instrucciones
//  exactas (con botón de copiar) y las imágenes de referencia que hay que
//  adjuntar, ya preparadas en imagenes-nuevas/referencias/.
//  No llama a Gemini ni gasta nada.
// =====================================================================
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIR = path.join(ROOT, "imagenes-nuevas");
const REF = path.join(DIR, "referencias");
const ids = process.argv.slice(2);
if (!ids.length) { console.log("Uso: node herramientas/instrucciones-gemini.mjs <id> [<id>...]"); process.exit(1); }
fs.mkdirSync(REF, { recursive: true });

// 1) Instrucciones (las mismas que usaría el script con la API, sin llamar a Gemini)
const json = path.join(DIR, ".prompts.json");
try { fs.unlinkSync(json); } catch {}
const env = { ...process.env, PROMPTS_JSON: json, GEMINI_API_KEY: "" };
for (const tipo of ["--banners-pendientes", "--tarjetas-pendientes", "--iconos-pendientes"]) {
  const a = ["herramientas/importar.mjs", tipo, "--ver-prompt"];
  if (tipo === "--banners-pendientes") a.push("--banners", "gemini");
  ids.forEach((id) => a.push("--solo", id));
  try { execFileSync(process.execPath, a, { cwd: ROOT, env, stdio: "pipe" }); }
  catch (e) { console.log(String(e.stdout || e.message)); }
}
const prompts = JSON.parse(fs.readFileSync(json, "utf8"));
fs.unlinkSync(json);

// 2) Referencias: los banners e iconos de Bleach y Black Clover, y la portada oficial de cada serie
for (const f of ["bleach-banner.png", "blackclover-banner.jpg", "bleach-icon.png", "blackclover-icon.png"])
  fs.copyFileSync(path.join(ROOT, f), path.join(REF, f));
const ctx = { window: {} }; ctx.window = ctx; vm.createContext(ctx);
for (const f of ["catalogo.js", "catalogo-auto.js"]) vm.runInContext(fs.readFileSync(path.join(ROOT, "data", f), "utf8"), ctx);
const fichas = Object.fromEntries((ctx.CATALOGO || []).map((s) => [s.id, s]));
for (const id of ids) {
  const s = fichas[id];
  if (!s || !s.anilistId) continue;
  try {
    const r = await fetch("https://graphql.anilist.co", { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "query($id:Int){Media(id:$id){coverImage{extraLarge}}}", variables: { id: s.anilistId } }) });
    const url = (await r.json()).data.Media.coverImage.extraLarge;
    fs.writeFileSync(path.join(REF, id + "-portada.jpg"), Buffer.from(await (await fetch(url)).arrayBuffer()));
    await new Promise((ok) => setTimeout(ok, 1500));
  } catch (e) { console.log(`(sin portada de ${id}: ${e.message})`); }
}

// 3) Página de instrucciones
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const FORMATO = {
  BANNER: "Aspect ratio 21:9 (very wide horizontal image).\n\n",
  TARJETA: "Aspect ratio 16:9 (horizontal image).\n\n",
  ICONO: "Aspect ratio 1:1 (square image).\n\n",
};
const ADJUNTAR = {
  BANNER: (id) => ["bleach-banner.png", "blackclover-banner.jpg", `${id}-portada.jpg`],
  TARJETA: (id) => [`tu banner de esta serie (${id}-banner)`, `${id}-portada.jpg`],
  ICONO: () => ["bleach-icon.png", "blackclover-icon.png"],
};
const NOMBRE = { BANNER: "banner", TARJETA: "tarjeta", ICONO: "icono" };
const bloques = ids.map((id) => {
  const s = fichas[id] || { titulo: id };
  const pasos = ["BANNER", "TARJETA", "ICONO"].map((tipo) => {
    const p = prompts.find((x) => x.id === id && x.tipo === tipo);
    if (!p) return `<p class="aviso">Falta la instrucción de ${NOMBRE[tipo]} de esta serie.</p>`;
    const texto = FORMATO[tipo] + p.prompt;
    return `<div class="paso">
      <h3>${NOMBRE[tipo][0].toUpperCase() + NOMBRE[tipo].slice(1)}</h3>
      <p><b>1. Adjunta</b> (botón + de Gemini → Subir archivo, desde <code>imagenes-nuevas/referencias/</code>): ${ADJUNTAR[tipo](id).map((a) => `<code>${esc(a)}</code>`).join(", ")}</p>
      <p><b>2. Pega esta instrucción</b> y envía:</p>
      <textarea readonly rows="7">${esc(texto)}</textarea>
      <button type="button" onclick="copiar(this)">Copiar instrucción</button>
      <p><b>3. Descarga la imagen</b> y guárdala como <code>imagenes-nuevas/${id}-${NOMBRE[tipo]}.png</code></p>
    </div>`;
  }).join("");
  return `<section><h2>${esc(s.titulo)} <small>${esc(id)}</small></h2>${pasos}</section>`;
}).join("\n");

fs.writeFileSync(path.join(DIR, "instrucciones.html"), `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Imágenes con Gemini</title>
<style>
body{margin:0;padding:24px;max-width:980px;margin:auto;background:#0b0b16;color:#eee;font:15px/1.5 system-ui,sans-serif}
h1{margin:0 0 8px}section{margin:28px 0;padding:18px;border:1px solid #2a2a44;border-radius:12px;background:#12122a}
h2{margin:0 0 10px}h2 small{color:#889;font-size:.8rem;font-weight:400}h3{margin:14px 0 6px;color:#22d3ee}
textarea{width:100%;box-sizing:border-box;background:#0b0b16;color:#ddd;border:1px solid #2a2a44;border-radius:8px;padding:10px;font:12px/1.45 ui-monospace,monospace}
button{margin-top:6px;padding:8px 14px;border:0;border-radius:8px;background:#9b5cff;color:#fff;font-weight:700;cursor:pointer}
code{background:#1f1f3a;padding:1px 6px;border-radius:5px;color:#c4b5fd}.aviso{color:#ffb4b4}.intro li{margin:4px 0}
</style></head><body>
<h1>Imágenes de las series nuevas con Gemini</h1>
<ol class="intro">
<li>Abre <b>https://gemini.google.com</b>, inicia sesión y elige el modelo de <b>imágenes</b> (en el selector de modelo o en «Herramientas → Crear imágenes»).</li>
<li>Haz <b>un chat nuevo para cada imagen</b>: así no mezcla personajes de otra serie.</li>
<li>Para cada serie haz primero el <b>banner</b>, después la <b>tarjeta</b> (lleva el banner como referencia) y el <b>icono</b>.</li>
<li>Revisa la imagen antes de guardarla: que nadie salga repetido, que el título esté bien escrito y que no haya otros textos. Si falla, pide en el mismo chat «Hazla de nuevo: [lo que esté mal]».</li>
<li>Cuando tengas imágenes guardadas en <code>imagenes-nuevas/</code>, ejecuta <code>node herramientas/meter-imagenes.mjs</code> (o pídeselo a Claude): las recorta al tamaño justo y las coloca.</li>
</ol>
${bloques}
<script>function copiar(b){const t=b.previousElementSibling;t.select();navigator.clipboard.writeText(t.value).then(()=>{b.textContent="¡Copiado!";setTimeout(()=>b.textContent="Copiar instrucción",1500)})}</script>
</body></html>`);
console.log("Instrucciones: " + path.join(DIR, "instrucciones.html"));
