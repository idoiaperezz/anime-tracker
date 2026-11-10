// =====================================================================
//  VALIDADOR DE FICHAS — comprueba data/<id>.js contra las reglas de la plantilla
//    node herramientas/validar.mjs              (todas las series con ficha)
//    node herramientas/validar.mjs naruto       (solo una)
//  Errores (✗) rompen la página; avisos (!) conviene revisarlos.
// =====================================================================
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ctx = { window: {} };
ctx.window = ctx;
vm.createContext(ctx);
for (const f of ["catalogo.js", "catalogo-auto.js", "temporadas.js"]) {
  const p = path.join(ROOT, "data", f);
  if (fs.existsSync(p)) vm.runInContext(fs.readFileSync(p, "utf8"), ctx);
}
const CATALOGO = ctx.CATALOGO || [];
const only = process.argv[2];
let bad = 0;

for (const ficha of CATALOGO) {
  if (only && ficha.id !== only) continue;
  const file = path.join(ROOT, "data", ficha.id + ".js");
  if (!fs.existsSync(file)) { if (only) console.log(`- ${ficha.id}: sin ficha de detalles`); continue; }
  let det = null;
  const errs = [], warns = [];
  try {
    vm.runInNewContext(fs.readFileSync(file, "utf8"), { registrarSerie: (d) => { det = d; } });
  } catch (e) { errs.push("el archivo no se puede ejecutar: " + e.message); }
  if (det) {
    if (det.id !== ficha.id) errs.push(`id «${det.id}» no coincide con el del archivo («${ficha.id}»)`);
    const D = Object.assign({}, ficha, det);
    const T = D.animeTotal, M = D.mangaTotal || 0;
    const arcs = D.arcos || [];
    if (!arcs.length) errs.push("no hay arcos");
    // 1) Arcos del anime: seguidos, sin huecos ni solapes, de 1 a animeTotal
    let expect = 1, lastMangaEnd = 0;
    arcs.forEach((a, i) => {
      const tag = `arco ${i + 1} «${a[0]}»`;
      if (typeof a[0] !== "string" || !a[0]) errs.push(`${tag}: sin nombre`);
      if (!Number.isInteger(a[1]) || !Number.isInteger(a[2]) || a[1] > a[2]) { errs.push(`${tag}: capítulos ${a[1]}–${a[2]} no válidos`); return; }
      if (a[1] !== expect) errs.push(`${tag}: empieza en ${a[1]} y debería empezar en ${expect} (${a[1] > expect ? "hueco" : "solape"})`);
      expect = a[2] + 1;
      if (a[3] !== 0 && a[3] !== 1) errs.push(`${tag}: el 4.º valor (relleno) tiene que ser 0 o 1`);
      if (a[3] === 1) {
        if (a[4] != null || a[5] != null) warns.push(`${tag}: es relleno pero tiene capítulos de manga (se ignoran)`);
        return;
      }
      if (!M) return;
      if (a[4] == null) { if (a[5] != null) errs.push(`${tag}: tiene «manga hasta» sin «manga desde»`); else if (!D.notaFlashback) warns.push(`${tag}: canon sin capítulos de manga (se mostrará como flashback; añade notaFlashback si lo es)`); return; }
      if (!Number.isInteger(a[4]) || a[4] < 1 || a[4] > M) errs.push(`${tag}: manga desde ${a[4]} fuera de 1–${M}`);
      if (a[5] != null && (!Number.isInteger(a[5]) || a[5] < a[4] || a[5] > M)) errs.push(`${tag}: manga ${a[4]}–${a[5]} no válido (máx. ${M})`);
      if (a[4] <= lastMangaEnd) warns.push(`${tag}: el manga empieza en ${a[4]}, antes o en el final del arco anterior (${lastMangaEnd})`);
      if (lastMangaEnd && a[4] > lastMangaEnd + 1) warns.push(`${tag}: salto en el manga de ${lastMangaEnd} a ${a[4]}`);
      lastMangaEnd = a[5] != null ? a[5] : (a[6] || M);
    });
    if (arcs.length && expect - 1 !== T) errs.push(`los arcos acaban en el ${expect - 1} pero animeTotal es ${T}`);
    // 2) Arcos solo de manga
    (D.soloManga || []).forEach((a, i) => {
      const tag = `soloManga ${i + 1} «${a[0]}»`;
      if (a[1] != null || a[2] != null) errs.push(`${tag}: los capítulos de anime tienen que ser null`);
      if (!Number.isInteger(a[4]) || !Number.isInteger(a[5]) || a[4] > a[5] || a[5] > M) errs.push(`${tag}: manga ${a[4]}–${a[5]} no válido (máx. ${M})`);
      else {
        if (lastMangaEnd && a[4] !== lastMangaEnd + 1) warns.push(`${tag}: empieza en ${a[4]} y el manga anterior acaba en ${lastMangaEnd}`);
        lastMangaEnd = a[5];
      }
    });
    if (M && lastMangaEnd && lastMangaEnd !== M) warns.push(`la rejilla del manga acaba en ${lastMangaEnd} pero mangaTotal es ${M}`);
    // 3) Relleno suelto
    const seen = new Set();
    (D.relleno || []).forEach((n) => {
      if (!Number.isInteger(n) || n < 1 || n > T) errs.push(`relleno: ${n} fuera de 1–${T}`);
      if (seen.has(n)) warns.push(`relleno: ${n} repetido`);
      seen.add(n);
    });
    if (!D.nota) warns.push("falta la nota del pie (fuentes y aclaraciones)");
    // 5) Temporadas: [nombre, desde, hasta], seguidas de 1 a animeTotal (de la ficha o de data/temporadas.js)
    // (en el catálogo, «temporadas» es solo un número: la lista va en la ficha o en data/temporadas.js)
    const temps = Array.isArray(det.temporadas) ? det.temporadas : (ctx.TEMPORADAS || {})[ficha.id];
    if (temps) {
      let sig = 1;
      temps.forEach((x, i) => {
        if (!Array.isArray(x) || typeof x[0] !== "string" || !Number.isInteger(x[1]) || !Number.isInteger(x[2]) || x[1] > x[2]) { errs.push(`temporada ${i + 1}: formato no válido`); return; }
        if (x[1] !== sig) errs.push(`temporada «${x[0]}»: empieza en ${x[1]} y debería empezar en ${sig}`);
        sig = x[2] + 1;
      });
      if (sig - 1 !== T) errs.push(`las temporadas acaban en el ${sig - 1} pero animeTotal es ${T}`);
    }
    // 4) Películas: { titulo, anio, despues, tipo, manga?: [desde, hasta], nota? }
    const TIPOS = ["canon", "no-canon", "recopilatorio", "precuela"];
    const vistos = new Set();
    (D.peliculas || []).forEach((p, i) => {
      const tag = `película ${i + 1} «${p && p.titulo}»`;
      if (!p || typeof p.titulo !== "string" || !p.titulo) { errs.push(`película ${i + 1}: sin título`); return; }
      if (vistos.has(p.titulo.toLowerCase())) errs.push(`${tag}: repetida`);
      vistos.add(p.titulo.toLowerCase());
      if (!Number.isInteger(p.anio) || p.anio < 1950 || p.anio > 2100) errs.push(`${tag}: año no válido (${p.anio})`);
      if (!Number.isInteger(p.despues) || p.despues < 0 || p.despues > T) errs.push(`${tag}: «despues» tiene que ser un capítulo entre 0 y ${T}`);
      if (!TIPOS.includes(p.tipo)) errs.push(`${tag}: tipo «${p.tipo}» no válido (${TIPOS.join(", ")})`);
      if (p.manga != null && (!Array.isArray(p.manga) || p.manga.length !== 2 || !(p.manga[0] <= p.manga[1]))) errs.push(`${tag}: manga tiene que ser [desde, hasta]`);
    });
    const canon = arcs.filter((a) => !a[3]).length, fill = arcs.length - canon;
    const fillEps = arcs.filter((a) => a[3]).reduce((s, a) => s + a[2] - a[1] + 1, 0) + (D.relleno || []).length;
    const ok = !errs.length;
    if (!ok) bad++;
    console.log(`${ok ? "✓" : "✗"} ${ficha.id}: ${T} caps. anime, ${M || "sin"} manga · ${arcs.length} arcos (${fill} de relleno) · ${fillEps} caps. de relleno · ${(D.peliculas || []).length} películas`);
  } else if (!errs.length) errs.push("el archivo no llama a registrarSerie({...})");
  errs.forEach((e) => console.log("   ✗ " + e));
  warns.forEach((w) => console.log("   ! " + w));
}
process.exit(bad ? 1 : 0);
