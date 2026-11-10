// =====================================================================
//  IMPORTADOR DE ANIMES — rellena data/catalogo-auto.js desde AniList
//  y crea los banners con Gemini (o los descarga de AniList).
//
//  Uso (desde la carpeta anime-tracker):
//    node herramientas/importar.mjs --top 50
//    node herramientas/importar.mjs "One Piece" "Naruto" "Jujutsu Kaisen"
//
//  Opciones:
//    --top N               los N animes (series de TV) más populares de AniList
//    --banners gemini      banner generado con Gemini (por defecto si hay clave)
//    --banners anilist     banner oficial de AniList (gratis, por defecto si no hay clave)
//    --banners ninguno     sin banner (la tarjeta usa un fondo de color)
//    --rehacer-banners     vuelve a crear los banners aunque ya existan
//    --quitar <id>         quita una serie del catálogo automático
//    --sincronizar         copia al catálogo los totales verificados en data/<id>.js
//    --nuevas N            añade las N series más populares que aún no estén en el catálogo
//    --banners-pendientes  solo crea los banners que falten (todas las series del catálogo)
//    --tarjetas-pendientes crea con Gemini la imagen 16:9 de la portada (tarjetas/<id>.jpg) a partir del banner
//    --iconos-pendientes   crea con Gemini el icono de la pestaña (iconos/<id>.png) de cada serie
//    --solo <id>           limita --banners/--tarjetas/--iconos-pendientes a esa serie
//
//  Clave de Gemini (https://aistudio.google.com/apikey), en PowerShell:
//    $env:GEMINI_API_KEY = "tu-clave"
//  Modelo de imagen (opcional): $env:GEMINI_IMAGE_MODEL
//  Gemini se usa SOLO para generar los banners, para nada más.
//
//  Lo que pongas a mano en data/catalogo.js siempre manda: las series que
//  ya estén allí (Bleach, Black Clover…) no se tocan.
// =====================================================================
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const AUTO_FILE = path.join(ROOT, "data", "catalogo-auto.js");
const MANUAL_FILE = path.join(ROOT, "data", "catalogo.js");
const BANNER_DIR = path.join(ROOT, "banners");
const CACHE_FILE = path.join(ROOT, "herramientas", ".cache-anilist.json");

const GEMINI_KEY = process.env.GEMINI_API_KEY || "";
// Modelos en orden de preferencia: si uno ya no existe (Google los retira), se prueba el siguiente
const IMAGE_MODELS = (process.env.GEMINI_IMAGE_MODEL || "gemini-3.1-flash-image,gemini-3-pro-image,gemini-2.5-flash-image").split(",");

// ---------- Argumentos ----------
const args = process.argv.slice(2);
// --ver-prompt: enseña las instrucciones de cada imagen sin llamar a Gemini (gratis); úsalo antes de generar
const VER_PROMPT = args.includes("--ver-prompt");
let top = 0, bannerMode = GEMINI_KEY ? "gemini" : "anilist", redoBanners = false, sync = false, nuevas = 0, pendingBanners = false, pendingCards = false, pendingIcons = false;
const searches = [], removeIds = [], onlyIds = [];
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === "--top") top = parseInt(args[++i], 10) || 0;
  else if (a === "--banners") bannerMode = args[++i];
  else if (a === "--rehacer-banners") redoBanners = true;
  else if (a === "--quitar") removeIds.push(args[++i]);
  else if (a === "--sincronizar") sync = true;
  else if (a === "--nuevas") nuevas = parseInt(args[++i], 10) || 0;
  else if (a === "--banners-pendientes") pendingBanners = true;
  else if (a === "--solo") onlyIds.push(args[++i]);
  else if (a === "--tarjetas-pendientes") pendingCards = true;
  else if (a === "--iconos-pendientes") pendingIcons = true;
  else if (a === "--ver-prompt") { /* ver VER_PROMPT */ }
  else if (a.startsWith("--")) { console.error("Opción desconocida: " + a); process.exit(1); }
  else searches.push(a);
}
// Totales verificados a mano en data/<id>.js (mandan sobre los de AniList)
function detailTotals(id) {
  const f = path.join(ROOT, "data", id + ".js");
  if (!fs.existsSync(f)) return {};
  let det = {};
  try { vm.runInNewContext(fs.readFileSync(f, "utf8"), { registrarSerie: (d) => { det = d || {}; } }); } catch {}
  const out = {};
  if (Number.isInteger(det.animeTotal)) out.animeTotal = det.animeTotal;
  if (Number.isInteger(det.mangaTotal)) out.mangaTotal = det.mangaTotal;
  // Los colores de la ficha (det.tema) solo se usan dentro de la página de la serie: el catálogo no se toca
  return out;
}
if (sync) {
  // node herramientas/importar.mjs --sincronizar  → copia al catálogo los totales de las fichas
  const list = readAuto().map((s) => Object.assign(s, detailTotals(s.id)));
  writeAuto(list);
  console.log("Totales sincronizados con las fichas de data/<id>.js");
  if (!top && !searches.length && !removeIds.length) process.exit(0);
}
if (removeIds.length) {
  // node herramientas/importar.mjs --quitar onigiri
  const list = readAuto().filter((s) => !removeIds.includes(s.id));
  writeAuto(list);
  console.log("Quitadas del catálogo automático: " + removeIds.join(", "));
  if (!top && !searches.length) process.exit(0);
}
if (!top && !searches.length && !nuevas && !pendingBanners && !pendingCards && !pendingIcons) {
  console.log('Uso: node herramientas/importar.mjs --top 50   ó   node herramientas/importar.mjs "One Piece" "Naruto"');
  process.exit(1);
}
if (!["gemini", "anilist", "ninguno"].includes(bannerMode)) { console.error("--banners tiene que ser gemini, anilist o ninguno"); process.exit(1); }
if (bannerMode === "gemini" && !GEMINI_KEY && !VER_PROMPT) { console.error('Para los banners de Gemini falta la clave: $env:GEMINI_API_KEY = "tu-clave"'); process.exit(1); }

// ---------- AniList (con caché y respetando su límite de peticiones) ----------
let cache = {};
try { cache = JSON.parse(fs.readFileSync(CACHE_FILE, "utf8")); } catch {}
const saveCache = () => fs.writeFileSync(CACHE_FILE, JSON.stringify(cache));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let lastCall = 0;

async function anilist(query, variables) {
  const key = JSON.stringify([query, variables]);
  if (cache[key]) return cache[key];
  for (let attempt = 0; attempt < 6; attempt++) {
    const wait = lastCall + 2100 - Date.now(); // ~30 peticiones por minuto
    if (wait > 0) await sleep(wait);
    lastCall = Date.now();
    const res = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ query, variables }),
    });
    if (res.status === 429) { const s = Number(res.headers.get("retry-after")) || 60; console.log(`  AniList pide esperar ${s} s…`); await sleep(s * 1000); continue; }
    const json = await res.json();
    if (json.errors) throw new Error("AniList: " + json.errors.map((e) => e.message).join("; "));
    cache[key] = json.data; saveCache();
    return json.data;
  }
  throw new Error("AniList no responde (demasiadas peticiones)");
}

const FIELDS = `id format episodes status title { romaji english } nextAiringEpisode { episode }
  coverImage { extraLarge color } bannerImage description(asHtml: false) popularity
  relations { edges { relationType node { id type format chapters status } } }`;
const getMedia = async (id) => (await anilist(`query ($id: Int) { Media(id: $id) { ${FIELDS} } }`, { id })).Media;

// Temporadas = entradas del mismo tipo (TV con TV; las series web solo si la de partida es web).
// Así no se cuela, por ejemplo, el corto «Monsters» como «precuela» de One Piece.
let SEASON_FORMATS = ["TV", "TV_SHORT"];
const isSeason = (n) => n.type === "ANIME" && SEASON_FORMATS.includes(n.format);

// Recorre las precuelas hasta la primera temporada y luego todas las secuelas
async function seasonChain(m) {
  SEASON_FORMATS = m.format === "ONA" ? ["ONA"] : ["TV", "TV_SHORT"];
  const seen = new Set([m.id]);
  const startManga = sourceManga(m);
  let root = m;
  for (let i = 0; i < 30; i++) {
    const pre = root.relations.edges.find((e) => e.relationType === "PREQUEL" && isSeason(e.node) && !seen.has(e.node.id));
    if (!pre) break;
    seen.add(pre.node.id);
    const prev = await getMedia(pre.node.id);
    // La «precuela» de Boruto es Naruto Shippuden, pero adapta otro manga: es otra serie
    const pm = sourceManga(prev);
    if (startManga && pm && pm.id !== startManga.id) break;
    root = prev;
  }
  const chain = [root], inChain = new Set([root.id]);
  const rootManga = sourceManga(root);
  let cur = root;
  for (let i = 0; i < 30; i++) {
    const seq = cur.relations.edges.find((e) => e.relationType === "SEQUEL" && isSeason(e.node) && !inChain.has(e.node.id));
    if (!seq) break;
    const next = await getMedia(seq.node.id);
    // Si la «secuela» adapta otro manga, es otra serie (Naruto Shippuden → Boruto)
    const nm = sourceManga(next);
    if (rootManga && nm && nm.id !== rootManga.id) break;
    inChain.add(next.id); cur = next; chain.push(cur);
  }
  return chain;
}

// Manga que adapta el anime (relación SOURCE; si no hay, ADAPTATION)
function sourceManga(m) {
  const mangas = m.relations.edges.filter((e) => e.node.type === "MANGA" && e.node.format === "MANGA");
  const e = mangas.find((x) => x.relationType === "SOURCE") || mangas.find((x) => x.relationType === "ADAPTATION");
  return e ? e.node : null;
}

// ---------- Utilidades ----------
const slug = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 40);

function hexToRgb(h) { const n = parseInt(h.replace("#", ""), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
const rgbToHex = (c) => "#" + c.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("");
const mix = (c, t, k) => c.map((v, i) => v + (t[i] - v) * k);
const lum = (c) => (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) / 255;
// Colores de la serie a partir del color principal de su portada en AniList
function themeFrom(hex) {
  if (!hex) return undefined;
  let base = hexToRgb(hex);
  if (Math.max(...base) - Math.min(...base) < 25) return undefined; // gris: mejor el tema por defecto
  let dark = base; while (lum(dark) < 0.45) dark = mix(dark, [255, 255, 255], 0.15);
  let light = base; while (lum(light) > 0.38) light = mix(light, [0, 0, 0], 0.12);
  const t = (c, deep, two, on) => ({ accent: rgbToHex(c), accentRgb: c.map(Math.round).join(", "), accentDeep: rgbToHex(deep), accent2: rgbToHex(two), onAccent: on });
  return {
    claro: t(light, mix(light, [0, 0, 0], 0.45), mix(light, [255, 200, 0], 0.5), "#ffffff"),
    oscuro: t(dark, mix(dark, [0, 0, 0], 0.5), mix(dark, [255, 230, 120], 0.5), "#0b0b10"),
  };
}

// ---------- Gemini ----------
const workingModel = {}; // recuerda qué modelo funcionó para no volver a probar los retirados
async function gemini(models, body) {
  const list = workingModel[models.join()] ? [workingModel[models.join()]] : models;
  let lastErr = null;
  for (const model of list) {
    for (let attempt = 0; attempt < 4; attempt++) {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model.trim()}:generateContent`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": GEMINI_KEY },
        body: JSON.stringify(body),
      });
      if (res.status === 404) { lastErr = new Error(`el modelo ${model} no existe`); break; } // retirado: siguiente
      if (res.status === 429 || res.status === 503) {
        const txt = await res.text().catch(() => "");
        // Plan gratuito sin acceso a este modelo (p. ej. imágenes): no tiene sentido reintentar
        if (/limit: 0\b/.test(txt) || /free_tier/i.test(txt) && /per day/i.test(txt)) {
          throw new Error(`tu clave de Gemini está en el plan gratuito y no permite usar ${model}. Activa la facturación en https://aistudio.google.com (Get API key → Set up billing)`);
        }
        console.log("  Gemini ocupado, reintento en 20 s…"); await sleep(20000); continue;
      }
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error("Gemini: " + (json.error && json.error.message || res.status));
      workingModel[models.join()] = model;
      return json;
    }
    if (!lastErr || !/no existe/.test(lastErr.message)) lastErr = new Error("Gemini no responde");
  }
  throw lastErr || new Error("Gemini no responde");
}

// Gemini se usa SOLO para los banners. Las descripciones no se generan aquí:
// se escriben a mano (o las escribe Claude) al crear la ficha de la serie.

async function download(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("descarga " + res.status);
  return { data: Buffer.from(await res.arrayBuffer()), mime: res.headers.get("content-type") || "image/jpeg" };
}
const extOf = (mime) => (/png/.test(mime) ? ".png" : /webp/.test(mime) ? ".webp" : ".jpg");

// Banners modelo (estilo que deben seguir los nuevos): están en la raíz del proyecto
const STYLE_REFS = ["blackclover-banner.jpg", "bleach-banner.png"];
// Tamaño final de todos los banners: 5:1, como el de Bleach (1024×205) a doble resolución
const BANNER_W = 2048, BANNER_H = 410;

// Regla que va SIEMPRE al principio de cada petición de imagen con personajes (prioridad máxima):
// ningún personaje puede aparecer dos veces (ni pequeño al fondo, ni mascotas como Pochita)
const REGLA_NO_REPETIR =
  `RULE #1 (most important, overrides everything else): NO CHARACTER MAY APPEAR MORE THAN ONCE. ` +
  `Each person, creature, pet or mascot is drawn exactly ONE time in the whole image — never twice, no clones, no twins, ` +
  `no mirrored copies, no second smaller version in the background. Before finishing, check every figure: if any character appears twice, remove the copy.\n\n`;

// Estética propia de cada serie cuando NO es oscura y de acción como Bleach o Black Clover.
// Manda sobre el estilo oscuro por defecto en el banner y en la imagen de tarjeta.
const ESTILO_SERIE = {
  yourlieinapril: "bright, luminous and nostalgic spring afternoon; soft warm sunlight and golden-hour glow; pastel palette of sakura pink, sky blue, cream and soft gold; " +
    "floating cherry blossom petals and drifting musical notes; delicate watercolor-like lighting, emotional and gentle, like the series' key visuals — " +
    "NOT dark, NO night sky, NO lightning, NO battle effects; the characters are playing music (piano and violin), calm and expressive, not fighting",
  haikyu: "bright, energetic sports anime look: sunlit school gymnasium with wooden floor and volleyball net, warm daylight, Karasuno orange and black palette, " +
    "dynamic motion lines and sweat sparkles, flying volleyball, NOT dark, NO magic or lightning effects — pure sports action",
  rascaldoesnotdreamofbunnygirlsenpai: "soft, bright seaside romance: clear blue sky, Shichirigahama beach and the Enoden coastal train, gentle afternoon sunlight, " +
    "pastel blues and soft pinks, calm and emotional slice-of-life mood, NOT dark, NO battle effects",
  spyxfamily: "warm, bright retro-European spy comedy: 1960s-style city of Berlint with stone buildings, sunny daylight, warm cream, teal and red palette, " +
    "playful and stylish like a spy-film poster, light comedic energy, NOT dark, NO magic or lightning effects",
  kaguyasamaloveiswar: "bright romantic-comedy look: elegant student council room with large windows, warm light, red and pink palette with sparkles, " +
    "hearts and dramatic manga-style speed lines, playful 'battle of wits' mood, NOT dark, NO fighting or magic",
  drstone: "bright adventure in a lush petrified world: vivid green forests reclaiming ruined cities, sunny sky, green and teal palette, " +
    "science sparks, glass flasks and glowing green formulas floating in the air, optimistic mood, NOT dark",
  vinlandsaga: "gritty, realistic historical Viking epic: cold misty North Sea, longships, grey-blue sky, snow and fjords, muted earthy palette of grey, brown and steel blue, " +
    "painterly realistic lighting, NO magic, NO glowing energy or lightning — only sea spray, wind and drifting snow",
  violetevergarden: "luminous, painterly Kyoto Animation look: golden sunlight, early-20th-century European harbor city, flower fields, " +
    "soft pastel blues, golds and greens, floating letters and paper, delicate and emotional mood, NOT dark, NO battle effects",
  horimiya: "soft, bright school slice-of-life romance: sunny classroom and school corridor, warm afternoon light, pastel pinks, creams and light blues, " +
    "gentle and cozy mood, NOT dark, NO battle effects",
  toradora: "bright, warm school romantic comedy: sunny school building and classroom, warm afternoon light, warm orange, pink and blue palette, " +
    "playful and lively mood, NOT dark, NO battle or magic effects",
  nogamenolife: "ultra-saturated, rainbow-colored fantasy world of Disboard: vivid magenta, cyan and yellow, giant chess pieces and floating playing cards, " +
    "a huge chess king piece on the horizon, colorful outlines, dreamy and playful mood, NOT dark",
  bluelock: "high-voltage soccer anime look: futuristic Blue Lock training facility with glowing grid lines and screens, an intense floodlit soccer pitch, " +
    "electric blue and black palette, glowing eyes and blue energy auras, symbolic chains, dramatic speed lines, a soccer ball in motion",
  inuyasha: "classic early-2000s anime look of feudal Japan: sunlit ancient forest with the giant Sacred Tree, thatched-roof village, warm daylight, " +
    "rich red, forest green and warm gold palette, glowing pink spiritual light and swirling cherry petals, adventurous mood",
  frierenbeyondjourneysend: "serene, luminous fantasy: wide green meadows, a field of small glowing BLUE flowers, clear blue sky with soft clouds, " +
    "gentle pastel palette of white, gold, lavender and sky blue, soft magical light particles, calm and nostalgic mood, NOT dark, NO battle effects",
  thesevendeadlysins: "bright, colorful medieval fantasy adventure: green meadows, the Kingdom of Liones castle on a hill, warm sunlight, " +
    "vivid green, red and gold palette, soft magic sparkles, cheerful adventurous mood, NOT dark",
  noragami: "urban Tokyo at night: Shinto shrines with red torii gates and paper lanterns, city lights, deep blue and soft pink palette, " +
    "flowing white sacred light, mysterious but warm mood",
  akamegakill: "dark fantasy: gothic imperial capital at night under a red moon, rooftops and spires, blood red and black palette, " +
    "dramatic moonlight, tense assassin mood",
  parasytethemaxim: "realistic modern Japanese city, cold grey and blue-grey palette with accents of blood red, overcast sky and city streets, " +
    "uneasy body-horror tension, NO fantasy glow, NO magic effects",
  codegeasslelouchoftherebellion: "dramatic mecha political thriller: imperial purple, black and gold palette, a futuristic Tokyo settlement skyline at dusk, " +
    "giant humanoid Knightmare Frame mechs in the background, the glowing red bird-shaped Geass sigil, chessboard motifs. " +
    "LOGO: write only the English words CODE GEASS (big) and Lelouch of the Rebellion (small, below) — absolutely NO Japanese characters, no katakana line: do NOT copy the logo of the attached official artwork, design a clean English-only logo",
  neongenesisevangelion: "1990s cel-animation look: Tokyo-3 city under an orange sunset, power lines and skyscrapers, the giant purple-and-green Eva Unit-01 towering in the background, " +
    "orange, purple and red palette, quiet melancholic mood, NO glowing energy auras",
  konosubagodsblessingonthiswonderfulworld: "bright, comedic fantasy: the medieval European town of Axel under a clear blue sky, green fields, " +
    "vivid cheerful pastel colors, a big comedic red-orange explosion spell in the sky, silly fun mood, NOT dark",
  darlinginthefranxx: "sci-fi mecha youth drama: a giant domed plantation city over a barren wasteland, sunset sky, red and pink versus blue palette, " +
    "the red-and-white mech Strelizia in the background, emotional and dramatic mood",
};

// Reparto del banner: lado izquierdo / lado derecho, todos personajes DISTINTOS (y sin spoilers)
const REPARTO_BANNER = {
  naruto: ["Naruto Uzumaki, Sakura Haruno, Kakashi Hatake, Rock Lee", "Sasuke Uchiha, Gaara, Neji Hyuga"],
  onepiece: ["Monkey D. Luffy, Roronoa Zoro, Nami, Usopp", "Sanji, Tony Tony Chopper, Nico Robin"],
  attackontitan: ["Eren Yeager, Mikasa Ackerman, Armin Arlert", "Levi Ackerman, Erwin Smith, Hange Zoë; the Colossal Titan's face looming over the wall in the background"],
  demonslayerkimetsunoyaiba: ["Tanjiro Kamado, Nezuko Kamado", "Zenitsu Agatsuma, Inosuke Hashibira, Giyu Tomioka"],
  jujutsukaisen: ["Yuji Itadori, Nobara Kugisaki", "Megumi Fushiguro with one divine dog, Satoru Gojo (blindfolded)"],
  myheroacademia: ["Izuku 'Deku' Midoriya, Ochaco Uraraka, Tenya Iida, All Might", "Katsuki Bakugo, Shoto Todoroki, Eijiro Kirishima"],
  hunterxhunter2011: ["Gon Freecss, Leorio Paradinight", "Killua Zoldyck, Kurapika"],
  deathnote: ["Light Yagami holding the Death Note, the shinigami Ryuk behind him", "L crouching, Soichiro Yagami"],
  fullmetalalchemistbrotherhood: ["Edward Elric, Alphonse Elric (suit of armor), Winry Rockbell", "Roy Mustang, Riza Hawkeye"],
  onepunchman: ["Saitama, Genos", "Speed-o'-Sound Sonic, Mumen Rider"],
  tokyoghoul: ["Ken Kaneki with BLACK hair (NOT white hair), wearing his black ghoul mask with the zipper mouth, Hideyoshi Nagachika", "Touka Kirishima (rabbit mask in hand), Nishiki Nishio"],
  swordartonline: ["Kirito in his black Aincrad coat with one black sword, Klein", "Asuna in her white-and-red Knights of the Blood uniform, Lisbeth"],
  chainsawman: ["Denji holding Pochita (the small orange chainsaw-dog) in his arms — ONLY ONE Pochita in the whole image", "Power (blood devil horns), Aki Hayakawa, Makima"],
  thepromisedneverland: ["Emma, Norman", "Ray, Mom Isabella (caretaker of Grace Field House)"],
  assassinationclassroom: ["Koro-sensei (yellow round-faced tentacled teacher), Nagisa Shiota", "Karma Akabane, Tadaomi Karasuma"],
  mobpsycho100: ["Shigeo 'Mob' Kageyama (the ONLY boy with a black bowl haircut), Arataka Reigen (grey suit, pink tie)", "Teruki Hanazawa alone (blond, black school uniform with a fancy collar). NO green spirits or mascots anywhere in the image"],
  rezerostartinglifeinanotherworld: ["Subaru Natsuki in his tracksuit, Emilia with the small grey spirit cat Puck", "Rem, Ram (twin maids, each drawn once)"],
  yourlieinapril: ["Kousei Arima at the piano — he is the ONLY character with glasses and appears ONLY here, at the piano",
    "Kaori Miyazono (long blonde hair) with her violin, Tsubaki Sawabe (short brown bob, sporty), Ryota Watari (spiky light-brown hair, NO glasses, cheerful)"],
  erased: ["Satoru Fujinuma as an adult pizza delivery manga artist, Airi Katagiri", "Kayo Hinazuki as a child in the snow, Kenya Kobayashi as a child"],
  steinsgate: ["Rintaro Okabe in his lab coat, Mayuri Shiina", "Kurisu Makise, Itaru 'Daru' Hashida"],
  haikyu: ["Shoyo Hinata (short spiky ORANGE hair, small, black Karasuno jersey number 10) jumping to spike, Tobio Kageyama (straight black hair, tall, black jersey number 9) setting the ball, Kei Tsukishima (tall, blond, glasses, black jersey number 11)",
    "Toru Oikawa (wavy brown hair, white-and-teal Aoba Johsai jersey), Kenma Kozume (shoulder-length blond hair with dark roots, red Nekoma jersey)"],
  rascaldoesnotdreamofbunnygirlsenpai: ["Sakuta Azusagawa (messy dark hair, school blazer), Rio Futaba (glasses, hair in a ponytail, white lab coat)",
    "Mai Sakurajima (long straight black hair, school uniform, black rabbit-ear headband), Tomoe Koga (short light-brown hair, cheerful)"],
  spyxfamily: ["Loid Forger (slicked-back blond hair, grey suit and tie), Anya Forger (small girl, short pink hair with two black cone-shaped hair clips, black Eden Academy uniform), Bond (large fluffy white dog)",
    "Yor Forger (long black hair, red eyes, black dress with a gold rose headband, holding two thin daggers), Franky Franklin (curly brown hair, round glasses)"],
  kaguyasamaloveiswar: ["Miyuki Shirogane (messy dark-blond hair, blue eyes with tired dark circles, black high-collared school uniform with gold aiguillette), Chika Fujiwara (long light-pink hair with a black bow, cheerful)",
    "Kaguya Shinomiya (long black hair tied with a red ribbon, red eyes, black school dress), Yu Ishigami (long dark bangs covering one eye, headphones around the neck)"],
  drstone: ["Senku Ishigami (tall spiky GREEN-and-white hair, stone-crack marks on his face, simple ragged clothes) holding a glowing flask, Chrome (brown hair, headband, explorer clothes), Taiju Oki (big muscular boy, short hair)",
    "Kohaku (blonde ponytail, blue headband, warrior outfit), Tsukasa Shishio (long brown hair, muscular, leopard-fur cloak)"],
  vinlandsaga: ["young Thorfinn (shaggy light-brown hair, scarred, ragged tunic, two short daggers, angry eyes)",
    "Askeladd (blond hair, short blond beard, red cloak, sly smile), Thorkell (huge giant warrior with a big beard and long hair, laughing), Prince Canute (long blond hair, delicate, hooded cloak, timid)"],
  violetevergarden: ["Violet Evergarden (long blonde hair braided with red ribbons, blue eyes, white dress with a long Prussian-blue jacket, a green emerald brooch, silver mechanical hands in black gloves) at a typewriter",
    "Claudia Hodgins (spiky red-orange hair, white shirt, cheerful), Cattleya Baudelaire (long wavy dark hair, elegant, red lipstick), Benedict Blue (blond ponytail, sunglasses on his head)"],
  horimiya: ["Kyouko Hori (long brown hair, school uniform with a beige cardigan), Yuki Yoshikawa (short brown bob, bubbly)",
    "Izumi Miyamura (black hair, NO glasses, several silver piercings in his ears and lip, school uniform), Toru Ishikawa (spiky blond hair, friendly smile)"],
  toradora: ["Ryuuji Takasu (dark blue hair, very sharp scary-looking eyes, school uniform, kitchen apron), Minori Kushieda (short orange-red hair, energetic smile)",
    "Taiga Aisaka (very small girl with very long light-brown hair, school uniform, holding a wooden sword, fierce expression), Yusaku Kitamura (glasses, neat short hair, student council)"],
  inuyasha: ["Inuyasha (long silver-white hair, white dog ears on top of his head, golden eyes, red fire-rat robe, holding the big Tessaiga sword), Kagome Higurashi (long black hair, green-and-white school sailor uniform with a red scarf, holding a bow), Shippo (small fox-demon child, reddish-brown hair in a ponytail, blue vest, fox tail)",
    "Sesshomaru (very long straight silver hair, crescent moon mark on his forehead, white kimono with armor and a white fur stole, cold expression), Miroku (monk with short black hair in a small ponytail, purple and black robes, golden ringed staff)"],
  frierenbeyondjourneysend: ["Frieren (elf with long silver-white hair in twin pigtails, pointed ears, green eyes, white-and-gold cape, wooden staff), Fern (long straight purple hair, black coat-dress, staff)",
    "Stark (short spiky red hair, young warrior, holding a big axe); and in faded golden light in the far background, the old hero party seen ONCE each: Himmel (light-blue hair, hero cape), Heiter (tall priest with brown hair), Eisen (bearded dwarf with an axe)"],
  thesevendeadlysins: ["Meliodas (short boy with messy blond hair, green eyes, black vest over a white shirt, broken sword on his back), Elizabeth Liones (very long silver hair covering one eye, blue eyes, tavern waitress outfit), Hawk (small talking pink pig with two black spots on his forehead)",
    "Ban (spiky white hair, red eyes, red leather jacket, scars on his chest), King (boy with brown hair, green hoodie, sitting on a floating pillow — King appears ONLY ONCE), Diane (giant girl with brown twin pigtails, standing tall behind them)"],
  noragami: ["Yato (messy black hair, blue eyes, black tracksuit with a white scarf), Yukine (golden-blond hair, amber eyes, white hoodie)",
    "Hiyori Iki (long brown hair, violet eyes, school uniform with a red bow, a translucent cat-like spirit tail), Kofuku (cheerful goddess with short pink hair)"],
  akamegakill: ["Tatsumi (short messy brown hair, green eyes, light travel clothes, a sword), Leone (wild blonde hair, yellow eyes, black top and scarf, human form with no beast ears), Lubbock (green hair, aviator goggles on his forehead, green coat)",
    "Akame (long straight black hair, red eyes, black uniform with a red tie, holding a katana), Mine (long pink twin tails, pink dress, holding a huge rifle), Najenda (short silver hair, eye patch on her right eye, mechanical right arm, black suit)"],
  parasytethemaxim: ["Shinichi Izumi (short black hair, glasses, dark school uniform) with Migi — his right hand turned into a creature with ONE eye and a mouth (Migi is part of Shinichi's hand, not a separate person)",
    "Satomi Murano (shoulder-length brown hair, school uniform), Ryoko Tamiya (long straight black hair, cold expression, dark teacher's suit)"],
  codegeasslelouchoftherebellion: ["Lelouch Lamperouge (black hair, violet eyes, black Ashford Academy uniform, one eye glowing with the red Geass sigil), C.C. (very long lime-green hair, golden eyes, white straitjacket-like outfit)",
    "Suzaku Kururugi (curly brown hair, green eyes, white pilot suit), Kallen Kozuki (short spiky red hair, blue eyes, red pilot suit); the white Knightmare Lancelot and the red Knightmare Guren behind them"],
  neongenesisevangelion: ["Shinji Ikari (short brown hair, blue eyes, white school shirt, headphones around his neck), Misato Katsuragi (long purple hair, black jacket, silver cross necklace)",
    "Rei Ayanami (short light-blue hair, red eyes, white plugsuit), Asuka Langley Soryu (long red-orange hair with red hair clips, blue eyes, red plugsuit)"],
  konosubagodsblessingonthiswonderfulworld: ["Kazuma Sato (short brown hair, green eyes, green cape over adventurer clothes, smug grin), Aqua (very long light-blue hair with a ring-shaped hair ornament, blue eyes, blue-and-white goddess outfit)",
    "Megumin (short black hair, red eyes, eye patch, big pointed witch hat, red dress with black cape, staff), Darkness (long blonde hair in a high ponytail, blue eyes, silver crusader armor)"],
  darlinginthefranxx: ["Hiro (black hair, blue eyes, white-and-navy uniform), Ichigo (short blue hair with a yellow hairclip, blue eyes), Goro (short orange hair, green eyes)",
    "Zero Two (long pink hair, two small red horns, teal eyes, red uniform, confident smile); the red-and-white feminine mech Strelizia with a lance behind her"],
  bluelock: ["Yoichi Isagi (short dark navy-black hair with two spiky strands on his forehead, big blue eyes, kind ordinary face), Meguru Bachira (black bob-length hair with YELLOW tips, golden eyes, playful grin), Rensuke Kunigami (very muscular, short spiky ORANGE hair, violet eyes)",
    "Hyoma Chigiri (long straight red-pink hair, fuchsia eyes, delicate features), Seishiro Nagi (very tall, messy WHITE hair, sleepy grey eyes, bored expression). All in the black-and-blue Blue Lock training bodysuits"],
  nogamenolife: ["Sora (messy black hair, plain white T-shirt with NO text, black-and-red jacket, confident grin) and Shiro (small girl with very long white hair, red eyes, oversized sailor uniform), siblings side by side",
    "Stephanie Dola (long red hair, princess dress, flustered), Jibril (long hair fading from pink to blue, angel halo and white wings, cross-shaped pupils)"],
};

// --ver-prompt: muestra las instrucciones exactas que se enviarían a Gemini SIN llamarle (no gasta nada)
function mostrarPrompt(tipo, id, prompt) {
  // Con PROMPTS_JSON=<archivo> se guardan para las instrucciones manuales (herramientas/instrucciones-gemini.mjs)
  if (process.env.PROMPTS_JSON) {
    let lista = [];
    try { lista = JSON.parse(fs.readFileSync(process.env.PROMPTS_JSON, "utf8")); } catch {}
    lista = lista.filter((p) => !(p.tipo === tipo && p.id === id)).concat({ tipo, id, prompt });
    fs.writeFileSync(process.env.PROMPTS_JSON, JSON.stringify(lista, null, 1));
    return null;
  }
  console.log(`\n===== ${tipo} de ${id} (NO se ha llamado a Gemini) =====\n${prompt}\n`);
  return null;
}
// Para no gastar en repeticiones: sin reparto detallado no se genera nada (Gemini no debe improvisar)
function exigir(tabla, nombreTabla, id, que) {
  if (!tabla[id]) throw new Error(`falta ${que} de «${id}» en ${nombreTabla} (importar.mjs): escribe quién sale y cómo es cada personaje antes de generar`);
}

async function bannerGemini(id, titulo, m) {
  exigir(REPARTO_BANNER, "REPARTO_BANNER", id, "el reparto del banner");
  const parts = [];
  // 1) Referencias de estilo: los banners de Black Clover y Bleach
  for (const f of STYLE_REFS) {
    const p = path.join(ROOT, f);
    if (fs.existsSync(p)) parts.push({ inlineData: { mimeType: f.endsWith(".png") ? "image/png" : "image/jpeg", data: fs.readFileSync(p).toString("base64") } });
  }
  const nStyle = parts.length;
  // 2) Referencias de personajes: portada y banner oficiales de AniList
  for (const u of [m.coverImage?.extraLarge, m.bannerImage].filter(Boolean)) {
    try { const img = await download(u); parts.push({ inlineData: { mimeType: img.mime.split(";")[0], data: img.data.toString("base64") } }); } catch {}
  }
  const prompt =
    REGLA_NO_REPETIR +
    `Create an ultra-wide banner for the anime "${titulo}".\n` +
    // Estructura común (la de Bleach y Black Clover) + estética propia de cada anime
    `STRUCTURE (copy it from the first ${nStyle} attached banners, Black Clover and Bleach): the title of the series as a big logo in the exact center, ` +
    `drawn in the same lettering style as the series' real logo; the protagonist and allies on the LEFT side and the second lead / rival and their allies on the RIGHT side, facing the center; ` +
    `a landmark or setting of the series behind the logo. Copy ONLY this structure from those two banners — NOT their dark palette, night sky or battle effects.\n` +
    `LOOK AND MOOD (most important — this anime's OWN aesthetic, as in its attached official artwork): ` +
    (ESTILO_SERIE[id] || `use the color palette, lighting, time of day, mood, setting and kind of effects that define "${titulo}" in its official key visuals ` +
      `(a dark action series can be dramatic with energy effects; a bright, slice-of-life or romantic series must stay bright and soft; a horror or thriller series moody, etc.)`) +
    `. Polished anime key-visual illustration, high detail.\n` +
    `TEXT: the ONLY text in the image is the title "${titulo}" as the logo, spelled exactly like that. ` +
    `No other words or characters at all: no Japanese subtitle or kana, no captions, no "official", no taglines, no labels.\n` +
    (REPARTO_BANNER[id]
      ? `CHARACTERS — LEFT side: ${REPARTO_BANNER[id][0]}. RIGHT side: ${REPARTO_BANNER[id][1]}. Nobody else. Use the remaining attached official artwork only to check what they look like (faces, hair, outfits, colors). Draw them in the series' own art style.\n`
      : `CHARACTERS: the main cast of "${titulo}" as they look at the beginning of the story; use the remaining attached official artwork to check what they look like. Draw them in the series' own art style.\n`) +
    `NO SPOILERS: everyone in their normal, early-series form and outfit — no transformations, power-up modes (e.g. Gear forms, titan forms, masks, demon forms), no later-season looks.\n` +
    `HARD RULE — NO DUPLICATES: every character appears EXACTLY ONCE in the whole image. Never draw the same person twice, no clones, no twins, no repeated faces, ` +
    `not even small in the background. If there is empty space, fill it with background and effects, not with copies. Do not copy the characters of the style-reference banners.\n` +
    `FRAMING: the image will be cropped to a thin 5:1 strip, so keep the logo and every face inside the middle 80% of the height. ` +
    `The only text allowed is the title "${titulo}" as the logo. No watermark, no borders, no extra text.`;
  if (VER_PROMPT) return mostrarPrompt("BANNER", id, prompt);
  const r = await gemini(IMAGE_MODELS, {
    contents: [{ role: "user", parts: [{ text: prompt }, ...parts] }],
    generationConfig: { responseModalities: ["IMAGE"], imageConfig: { aspectRatio: "4:1" } },
  });
  const part = (r.candidates?.[0]?.content?.parts || []).find((p) => p.inlineData || p.inline_data);
  if (!part) throw new Error("Gemini no devolvió imagen" + (r.candidates?.[0]?.finishReason ? " (" + r.candidates[0].finishReason + ")" : ""));
  const d = part.inlineData || part.inline_data;
  const raw = Buffer.from(d.data, "base64");

  // 3) Recorte al centro a 5:1 y tamaño fijo (si sharp está instalado; si no, se guarda tal cual)
  let sharp = null;
  try { sharp = (await import("sharp")).default; } catch {}
  if (sharp) {
    const file = id + ".jpg";
    await sharp(raw).resize(BANNER_W, BANNER_H, { fit: "cover", position: "centre" }).jpeg({ quality: 88, mozjpeg: true }).toFile(path.join(BANNER_DIR, file));
    return "banners/" + file;
  }
  console.log("  (sin sharp: el banner se guarda sin recortar; instala con: cd herramientas; npm install)");
  const file = id + extOf(d.mimeType || d.mime_type || "image/png");
  fs.writeFileSync(path.join(BANNER_DIR, file), raw);
  return "banners/" + file;
}

// Imagen de tarjeta para la portada (16:9), con el estilo del banner de la serie pero SIN SPOILERS:
// solo los personajes del principio de la historia, con su aspecto inicial.
const TARJETA_DIR = path.join(ROOT, "tarjetas");
const TARJETA_W = 960, TARJETA_H = 540;
// Reparto permitido en la tarjeta (todos aparecen en los primeros capítulos)
const REPARTO_SIN_SPOILERS = {
  bleach: "Ichigo Kurosaki in his plain black Soul Reaper robe with the big Zangetsu cleaver sword (NO hollow mask, no bankai) on the left, and Rukia Kuchiki in a plain black Soul Reaper robe with NO armband, NO badge, NO lieutenant insignia on the right; optionally Orihime, Chad and Uryu small in the back. Setting: Karakura Town at night. FORBIDDEN effects: no ice dragon, no cherry-blossom petals, no other Soul Reapers' powers — only Ichigo's blue spiritual energy",
  blackclover: "Asta in his normal human form — spiky ash-blond hair with his headband, NO horn, NO black wing, NO devil/black form, no red-black aura — holding his big black Demon-Slayer sword, on the left; and Yuno with his grimoire and green wind magic (NO wind spirit) on the right; optionally Noelle small in the back. Only Yuno's green wind effects and plain dark anti-magic sparks around Asta's sword",
  naruto: "kid Naruto Uzumaki (Part 1, orange jumpsuit, rasengan not needed) on the left and kid Sasuke Uchiha (Part 1, blue shirt, Sharingan allowed) on the right, with kid Sakura and Kakashi small in the back — Team 7 at the start of the series",
  onepiece: "Monkey D. Luffy (straw hat, red vest) on the left and Roronoa Zoro (three swords) on the right; optionally Nami, Usopp and Sanji small in the back — the East Blue crew only",
  attackontitan: "Eren Yeager in his Survey Corps / cadet uniform with ODM gear on the left and Mikasa Ackerman with her blades on the right; optionally Armin small in the back; the huge skinless Colossal Titan face peeking over the wall in the background (as in episode 1). NO other titans, no titan shifters, no human-titan reveals",
  demonslayerkimetsunoyaiba: "Tanjiro Kamado (green-black checkered haori, sword) on the left and Nezuko Kamado (pink kimono, bamboo muzzle) on the right; optionally Zenitsu and Inosuke small in the back",
  jujutsukaisen: "Yuji Itadori on the left and Megumi Fushiguro with a shadow divine dog on the right, both in their Jujutsu High uniforms; optionally Nobara and Satoru Gojo (blindfolded) small in the back",
  myheroacademia: "Izuku 'Deku' Midoriya in his first hero costume on the left and Katsuki Bakugo on the right; optionally All Might and Ochaco Uraraka small in the back",
  hunterxhunter2011: "Gon Freecss with his fishing rod on the left and Killua Zoldyck on the right; optionally Kurapika and Leorio small in the back — Hunter Exam era",
  deathnote: "Light Yagami in his school uniform holding the Death Note on the left and L crouching on a chair on the right; the shinigami Ryuk looming in the background",
  fullmetalalchemistbrotherhood: "Edward Elric (red coat, automail arm) on the left and his brother Alphonse Elric (the big suit of armor) on the right; optionally Winry small in the back",
  onepunchman: "Saitama (bald, yellow suit, white cape, red gloves) on the left and Genos (blond cyborg) on the right",
  tokyoghoul: "Ken Kaneki with BLACK hair (NOT white hair), in casual clothes with one red ghoul eye, on the left, and Touka Kirishima in her Anteiku waitress uniform on the right; Anteiku café / Tokyo streets at night",
  swordartonline: "Kirito in his black Aincrad coat with a single black sword on the left and Asuna in her white-and-red Knights of the Blood uniform with her rapier on the right; the floating castle Aincrad in the sky",
  chainsawman: "Denji (blond, white shirt, black tie) holding the small chainsaw-dog Pochita on the left and Power (blood devil horns) on the right",
  thepromisedneverland: "Emma (orange hair) on the left and Norman (white hair) on the right, both in white orphanage clothes, Ray small in the back; the Grace Field House orphanage and its forest",
  assassinationclassroom: "Nagisa Shiota (blue twin-tails) on the left and Koro-sensei (big yellow round smiling face, graduation gown) on the right; the old Class 3-E school building on the mountain",
  mobpsycho100: "Shigeo 'Mob' Kageyama (bowl haircut, black school uniform) on the left and Arataka Reigen (grey suit, pink tie) on the right; the small green spirit Dimple floating between them",
  rezerostartinglifeinanotherworld: "Subaru Natsuki in his black-and-orange tracksuit on the left and Emilia (silver hair, white outfit) with the small grey cat spirit Puck on the right; the royal capital streets",
  yourlieinapril: "Kousei Arima (black hair, glasses, school uniform) on the left and Kaori Miyazono (blonde, holding her violin) on the right, under blooming cherry trees on a sunny spring afternoon",
  erased: "Satoru Fujinuma as a child on the left and Kayo Hinazuki as a child (red jacket) on the right, in the snowy town at dusk",
  steinsgate: "Rintaro Okabe in his white lab coat on the left and Kurisu Makise on the right; Akihabara and the Future Gadget Lab",
  haikyu: "Shoyo Hinata (short spiky ORANGE hair, black Karasuno jersey number 10) jumping to spike on the left and Tobio Kageyama (straight black hair, black jersey number 9) setting the ball on the right; volleyball between them in a sunlit gym",
  rascaldoesnotdreamofbunnygirlsenpai: "Sakuta Azusagawa (messy dark hair, school blazer) on the left and Mai Sakurajima (long straight black hair, school uniform, black rabbit-ear headband) on the right, by the seaside under a blue sky",
  spyxfamily: "Loid Forger (slicked-back blond hair, grey suit) on the left and Yor Forger (long black hair, red eyes, black dress with gold rose headband) on the right; small Anya (short pink hair, two black cone hair clips) peeking between them in the upper middle",
  kaguyasamaloveiswar: "Miyuki Shirogane (messy dark-blond hair, blue eyes with dark circles, black high-collared uniform with gold aiguillette) on the left and Kaguya Shinomiya (long black hair with a red ribbon, red eyes) on the right, sizing each other up in the student council room",
  drstone: "Senku Ishigami (tall spiky green-and-white hair, stone-crack marks on his face) holding a glowing green flask on the left and Kohaku (blonde ponytail, blue headband) on the right, in a sunny overgrown forest",
  vinlandsaga: "young Thorfinn (shaggy light-brown hair, two short daggers) on the left and Askeladd (blond hair and beard, red cloak) on the right, on a Viking longship deck at sea",
  violetevergarden: "Violet Evergarden (long blonde braided hair with red ribbons, blue jacket, emerald brooch) at her typewriter on the left and Claudia Hodgins (red-orange hair) on the right, in a sunlit office of the postal company",
  horimiya: "Kyouko Hori (long brown hair, school cardigan) on the left and Izumi Miyamura (black hair, silver ear and lip piercings) on the right, in a sunny classroom",
  toradora: "Ryuuji Takasu (dark blue hair, sharp eyes, school uniform) on the left and Taiga Aisaka (tiny, very long light-brown hair, wooden sword) on the right, in a sunny school hallway",
  inuyasha: "Inuyasha (long silver-white hair, white dog ears, golden eyes, red robe, Tessaiga sword) on the left and Kagome Higurashi (long black hair, green-and-white sailor uniform with red scarf, bow) on the right, by the Sacred Tree in a sunlit forest",
  frierenbeyondjourneysend: "Frieren (elf, long silver-white twin pigtails, green eyes, white-and-gold cape, staff) on the left and Fern (long straight purple hair, black coat-dress) on the right, in a meadow of small blue flowers under a clear sky",
  thesevendeadlysins: "Meliodas (short boy, messy blond hair, black vest over white shirt) on the left and Elizabeth Liones (very long silver hair covering one eye, waitress outfit) on the right, with Liones castle behind",
  noragami: "Yato (messy black hair, blue eyes, black tracksuit with white scarf) on the left and Hiyori Iki (long brown hair, school uniform with red bow) on the right, in front of a red torii gate at night",
  akamegakill: "Tatsumi (short messy brown hair, green eyes, travel clothes, sword) on the left and Akame (long black hair, red eyes, black uniform, katana) on the right, on rooftops under a red moon",
  parasytethemaxim: "Shinichi Izumi (short black hair, glasses, school uniform) on the left with Migi — his right hand turned into a one-eyed creature — and Satomi Murano (shoulder-length brown hair, school uniform) on the right, on a grey city street",
  codegeasslelouchoftherebellion: "Lelouch Lamperouge (black hair, violet eyes, black Ashford uniform, glowing red Geass sigil in one eye) on the left and Suzaku Kururugi (curly brown hair, green eyes, white pilot suit) on the right, imperial purple background",
  neongenesisevangelion: "Shinji Ikari (short brown hair, white school shirt) on the left and Rei Ayanami (short light-blue hair, red eyes, white plugsuit) on the right, with Eva Unit-01 towering behind under an orange sunset",
  konosubagodsblessingonthiswonderfulworld: "Kazuma Sato (short brown hair, green cape, smug grin) on the left and Aqua (very long light-blue hair, blue-and-white goddess outfit) on the right, in the sunny town of Axel",
  darlinginthefranxx: "Hiro (black hair, blue eyes, white-and-navy uniform) on the left and Zero Two (long pink hair, two small red horns, red uniform) on the right, at sunset over a domed city",
  bluelock: "Yoichi Isagi (short dark navy-black hair with two spiky forehead strands, big blue eyes) kicking a soccer ball on the left and Meguru Bachira (black bob hair with yellow tips, golden eyes, playful grin) dribbling on the right, both in black-and-blue Blue Lock bodysuits, on a floodlit pitch",
  nogamenolife: "Sora (messy black hair, plain white T-shirt with no text) on the left and Shiro (very long white hair, oversized sailor uniform) on the right, over a giant colorful chessboard",
};
async function tarjetaGemini(id, titulo, bannerFile, m) {
  const parts = [];
  const bp = path.join(ROOT, bannerFile || "");
  const hayBanner = !!bannerFile && fs.existsSync(bp);
  if (!hayBanner && !VER_PROMPT) throw new Error("no tiene banner del que partir (" + bannerFile + ")");
  // Del banner solo se pasa la franja CENTRAL (logo, fondo y colores): los personajes de los lados
  // pueden llevar transformaciones o formas avanzadas que serían spoilers
  let sharpLib = null;
  try { sharpLib = (await import("sharp")).default; } catch {}
  if (!hayBanner) { /* solo se está mostrando la instrucción */ }
  else if (sharpLib) {
    const meta = await sharpLib(bp).metadata();
    const w = Math.round(meta.width * 0.34);
    const centro = await sharpLib(bp).extract({ left: Math.round((meta.width - w) / 2), top: 0, width: w, height: meta.height }).jpeg({ quality: 90 }).toBuffer();
    parts.push({ inlineData: { mimeType: "image/jpeg", data: centro.toString("base64") } });
  } else {
    parts.push({ inlineData: { mimeType: /\.png$/i.test(bp) ? "image/png" : "image/jpeg", data: fs.readFileSync(bp).toString("base64") } });
  }
  // Referencia de personajes: la portada de la PRIMERA temporada (aspecto inicial, sin spoilers)
  if (m && m.coverImage?.extraLarge) {
    try { const img = await download(m.coverImage.extraLarge); parts.push({ inlineData: { mimeType: img.mime.split(";")[0], data: img.data.toString("base64") } }); } catch {}
  }
  exigir(REPARTO_SIN_SPOILERS, "REPARTO_SIN_SPOILERS", id, "el reparto de la tarjeta");
  const reparto = REPARTO_SIN_SPOILERS[id];
  const prompt =
    REGLA_NO_REPETIR +
    `Create a 16:9 card illustration for the anime "${titulo}", shown small (about 320 px wide) on a website grid.\n` +
    `STYLE: the first attached image is the center of the series banner (title logo and background): take from it ONLY the art style, color palette, lighting, mood, background setting and the title-logo lettering. ` +
    `Do NOT copy its characters, poses, outfits, accessories or special-power effects (they may be spoilers): draw only the effects that belong to the characters listed below.\n` +
    (ESTILO_SERIE[id] ? `LOOK AND MOOD (this series' own aesthetic, most important): ${ESTILO_SERIE[id]}.\n` : "") +
    `CHARACTERS (spoiler-free, this is a hard rule): ${reparto}. ` +
    (parts.length > 1 ? `Use the second image (first-season key visual) for what they look like at the beginning of the story. ` : "") +
    `Nobody else. No transformations, power-up forms, masks, monster forms, later-season outfits, villains revealed later, deaths or plot twists.\n` +
    `NO DUPLICATES: every character appears exactly once — never the same person twice, no clones, no repeated faces.\n` +
    `COMPOSITION: the series title logo centered in the lower third; the two main characters large on the left and right, facing each other, ` +
    `their FACES FULLY VISIBLE in the upper half of the image (never covered by the logo, cropped or hidden), readable at small size.\n` +
    `The only text allowed is the title "${titulo}" as the logo. No watermark, no borders, no extra text.`;
  if (VER_PROMPT) return mostrarPrompt("TARJETA", id, prompt);
  const r = await gemini(IMAGE_MODELS, {
    contents: [{ role: "user", parts: [{ text: prompt }, ...parts] }],
    generationConfig: { responseModalities: ["IMAGE"], imageConfig: { aspectRatio: "16:9" } },
  });
  const part = (r.candidates?.[0]?.content?.parts || []).find((p) => p.inlineData || p.inline_data);
  if (!part) throw new Error("Gemini no devolvió imagen" + (r.candidates?.[0]?.finishReason ? " (" + r.candidates[0].finishReason + ")" : ""));
  const d = part.inlineData || part.inline_data;
  const raw = Buffer.from(d.data, "base64");
  fs.mkdirSync(TARJETA_DIR, { recursive: true });
  const file = id + ".jpg";
  let sharp = null;
  try { sharp = (await import("sharp")).default; } catch {}
  if (sharp) await sharp(raw).resize(TARJETA_W, TARJETA_H, { fit: "cover", position: "centre" }).jpeg({ quality: 86, mozjpeg: true }).toFile(path.join(TARJETA_DIR, file));
  else fs.writeFileSync(path.join(TARJETA_DIR, file), raw);
  return "tarjetas/" + file;
}

// Icono de la pestaña (favicon) con el símbolo más reconocible de la serie, al estilo de los de Bleach y Black Clover
const ICONO_DIR = path.join(ROOT, "iconos");
const ICON_STYLE_REFS = ["bleach-icon.png", "blackclover-icon.png"];
const SIMBOLOS = {
  naruto: "the Hidden Leaf Village (Konoha) leaf-spiral symbol",
  onepiece: "the Straw Hat Pirates jolly roger (skull with a straw hat and crossbones)",
  attackontitan: "the Wings of Freedom emblem of the Survey Corps (one blue and one white wing)",
  demonslayerkimetsunoyaiba: "Tanjiro's hanafuda earring (rising sun card design)",
  jujutsukaisen: "Sukuna's face markings / cursed seal",
  myheroacademia: "the U.A. High School shield emblem",
  hunterxhunter2011: "the big green × (cross mark) from the Hunter × Hunter logo, with an orange glow — just the × shape, no words",
  deathnote: "the black Death Note notebook with its title",
  fullmetalalchemistbrotherhood: "the Flamel cross (serpent on a cross with a crown and wings)",
  onepunchman: "Saitama's red gloved fist",
  tokyoghoul: "Kaneki's black leather ghoul eye-patch mask with the zipper-teeth mouth",
  swordartonline: "two crossed swords, one black and one white, over a stylized floating castle",
  chainsawman: "Pochita's head (small orange dog with a chainsaw sticking out of its forehead)",
  thepromisedneverland: "the silhouette of the Grace Field House orphanage gate under a big tree",
  assassinationclassroom: "Koro-sensei's big round yellow smiling face",
  mobpsycho100: "Dimple, the small green spirit with a smile",
  rezerostartinglifeinanotherworld: "Puck, the small grey cat spirit",
  yourlieinapril: "a violin crossed with piano keys and a few pink cherry blossoms",
  erased: "a single red mitten resting in the snow",
  steinsgate: "a brass clockwork gear emblem",
  haikyu: "a yellow-and-blue volleyball with a single black crow feather",
  rascaldoesnotdreamofbunnygirlsenpai: "a black rabbit-ear headband",
  spyxfamily: "a black spy fedora hat next to a red rose",
  kaguyasamaloveiswar: "a red heart pierced by an arrow, with a small golden crown on top",
  drstone: "an Erlenmeyer flask with bright glowing green liquid",
  vinlandsaga: "the prow of a Viking longship with its square sail, in front of a rising sun",
  violetevergarden: "a sealed envelope with a red wax seal and a fountain pen",
  horimiya: "a soft pink heart with a small silver earring hanging from it",
  toradora: "a small tiger and a dragon curled together inside a circle",
  nogamenolife: "a white chess king piece standing on a playing card",
  bluelock: "a glowing blue padlock with a soccer ball pattern",
  inuyasha: "the glowing pink round Shikon Jewel hanging from a cord",
  frierenbeyondjourneysend: "a small glowing blue star-shaped flower",
  thesevendeadlysins: "a red stylized dragon emblem",
  noragami: "a shining gold five-yen coin with a square hole in the center",
  akamegakill: "a black katana with a blood-red glow, crossed in front of a red moon",
  parasytethemaxim: "a right hand with a single eye in the palm",
  codegeasslelouchoftherebellion: "the red bird-shaped Geass sigil",
  neongenesisevangelion: "the purple-and-green horned head of a giant mecha (Eva Unit-01)",
  konosubagodsblessingonthiswonderfulworld: "a pointed witch hat with a red explosion spark behind it",
  darlinginthefranxx: "two small red horns over a pink heart",
};
async function iconoGemini(id, titulo) {
  const parts = [];
  for (const f of ICON_STYLE_REFS) {
    const p = path.join(ROOT, f);
    if (fs.existsSync(p)) parts.push({ inlineData: { mimeType: "image/png", data: fs.readFileSync(p).toString("base64") } });
  }
  exigir(SIMBOLOS, "SIMBOLOS", id, "el símbolo del icono");
  const simbolo = SIMBOLOS[id];
  const prompt =
    `Create a square app icon / browser favicon for the anime "${titulo}" showing ${simbolo}.\n` +
    `STYLE: match the attached icons (the Bleach hollow-skull emblem and the glowing Black Clover four-leaf clover): ` +
    `one single bold, simple, instantly recognizable emblem, centered, filling about 80% of the canvas, thick clean shapes, strong contrast, ` +
    `subtle glow in the series' signature colors, on a dark rounded-square tile. It must still be readable at 16×16 pixels. ` +
    `ONE single icon only, filling the whole image: no mockups, no multiple sizes or previews, no small extra badges or symbols in the corners. No text, no letters, no characters' faces, no watermark.`;
  if (VER_PROMPT) return mostrarPrompt("ICONO", id, prompt);
  const r = await gemini(IMAGE_MODELS, {
    contents: [{ role: "user", parts: [{ text: prompt }, ...parts] }],
    generationConfig: { responseModalities: ["IMAGE"], imageConfig: { aspectRatio: "1:1" } },
  });
  const part = (r.candidates?.[0]?.content?.parts || []).find((p) => p.inlineData || p.inline_data);
  if (!part) throw new Error("Gemini no devolvió imagen" + (r.candidates?.[0]?.finishReason ? " (" + r.candidates[0].finishReason + ")" : ""));
  const d = part.inlineData || part.inline_data;
  const raw = Buffer.from(d.data, "base64");
  fs.mkdirSync(ICONO_DIR, { recursive: true });
  const file = id + ".png";
  let sharp = null;
  try { sharp = (await import("sharp")).default; } catch {}
  if (sharp) await sharp(raw).resize(256, 256, { fit: "cover" }).png({ compressionLevel: 9 }).toFile(path.join(ICONO_DIR, file));
  else fs.writeFileSync(path.join(ICONO_DIR, file), raw);
  return "iconos/" + file;
}

async function bannerAnilist(id, m) {
  if (!m.bannerImage) return null;
  const img = await download(m.bannerImage);
  const file = id + extOf(img.mime);
  fs.writeFileSync(path.join(BANNER_DIR, file), img.data);
  return "banners/" + file;
}
function existingBanner(id) {
  for (const e of [".png", ".jpg", ".webp"]) if (fs.existsSync(path.join(BANNER_DIR, id + e))) return "banners/" + id + e;
  return null;
}

// ---------- Catálogos actuales ----------
function readManual() {
  try { return vm.runInNewContext(fs.readFileSync(MANUAL_FILE, "utf8") + "\n;CATALOGO", {}); } catch { return []; }
}
function readAuto() {
  // Acepta saltos de línea de Windows (CRLF) y de Linux (LF): Git puede cambiarlos al descargar
  if (!fs.existsSync(AUTO_FILE)) return [];
  const m = fs.readFileSync(AUTO_FILE, "utf8").match(/\/\/ @@datos\r?\n([\s\S]*?)\r?\n\/\/ @@fin/);
  // Si el archivo existe pero no se puede leer, mejor parar que sobrescribirlo y perder las series
  if (!m) throw new Error("no se puede leer data/catalogo-auto.js (marcas @@datos/@@fin); no se toca nada");
  return JSON.parse(m[1]);
}
// Versión de las imágenes: cambia cada vez que se genera alguna, para que los navegadores
// descarguen la nueva en vez de usar la que tenían guardada (las páginas añaden ?v=<versión>)
function readImgVersion() {
  try { const m = fs.readFileSync(AUTO_FILE, "utf8").match(/VERSION_IMAGENES = "([^"]*)"/); return m ? m[1] : ""; } catch { return ""; }
}
function bumpImgVersion() { globalThis.__imgVersion = Date.now().toString(36); writeAuto(readAuto()); }

function writeAuto(list) {
  const out = `// =====================================================================
//  GENERADO POR herramientas/importar.mjs — se sobrescribe al importar.
//  Para cambiar una serie a mano, copia su entrada a data/catalogo.js:
//  allí lo tuyo manda y esta copia se ignora.
// =====================================================================
(function () {
  var auto =
// @@datos
${JSON.stringify(list, null, 2)}
// @@fin
  ;
  window.CATALOGO = window.CATALOGO || [];
  var ya = {};
  window.CATALOGO.forEach(function (s) { ya[s.id] = true; });
  auto.forEach(function (s) { if (!ya[s.id]) window.CATALOGO.push(s); });
})();
window.VERSION_IMAGENES = "${globalThis.__imgVersion || readImgVersion() || Date.now().toString(36)}";
`;
  fs.writeFileSync(AUTO_FILE, out);
}

// ---------- Principal ----------
async function main() {
  fs.mkdirSync(BANNER_DIR, { recursive: true });
  const manualIds = new Set(readManual().map((s) => s.id));
  const auto = readAuto();
  const byId = new Map(auto.map((s) => [s.id, s]));

  const popularPage = async (page) => (await anilist(`query ($page: Int) { Page(page: $page, perPage: 50) { media(type: ANIME, sort: POPULARITY_DESC, format_in: [TV], isAdult: false) { ${FIELDS} } } }`, { page })).Page.media;

  // --iconos-pendientes: crea con Gemini el icono de la pestaña de las series que no lo tengan
  if (pendingIcons) {
    if (!GEMINI_KEY && !VER_PROMPT) { console.error('Falta la clave: $env:GEMINI_API_KEY = "tu-clave"'); process.exit(1); }
    let made = 0;
    for (const s of readManual().concat(auto)) {
      if (onlyIds.length && !onlyIds.includes(s.id)) continue;
      if (s.icono) continue; // Bleach y Black Clover ya tienen el suyo
      if (!VER_PROMPT && fs.existsSync(path.join(ROOT, "iconos", s.id + ".png"))) continue;
      try { const f = await iconoGemini(s.id, s.titulo); if (!f) continue; made++; console.log(`✓ icono de ${s.titulo} → ${f}`); }
      catch (e) { console.log(`✗ ${s.titulo}: ${e.message}`); if (/plan gratuito/.test(e.message)) break; }
    }
    if (made) bumpImgVersion();
    console.log(`\nListo: ${made} iconos nuevos.`);
    return;
  }

  // --tarjetas-pendientes: crea con Gemini la imagen 16:9 de la portada de las series que tengan banner y no tarjeta
  if (pendingCards) {
    if (!GEMINI_KEY && !VER_PROMPT) { console.error('Falta la clave: $env:GEMINI_API_KEY = "tu-clave"'); process.exit(1); }
    const all = readManual().concat(auto);
    let made = 0;
    for (const s of all) {
      if (onlyIds.length && !onlyIds.includes(s.id)) continue;
      if (!VER_PROMPT && fs.existsSync(path.join(ROOT, "tarjetas", s.id + ".jpg"))) continue;
      const bannerFile = s.banner || existingBanner(s.id);
      if (!bannerFile && !VER_PROMPT) { console.log(`- ${s.titulo}: sin banner todavía (primero --banners-pendientes)`); continue; }
      try {
        let m = s.anilistId ? await getMedia(s.anilistId) : null;
        if (!m) { // series añadidas a mano: se busca su primera temporada en AniList
          const d = await anilist(`query ($q: String) { Page(perPage: 8) { media(search: $q, type: ANIME, format_in: [TV], isAdult: false) { ${FIELDS} } } }`, { q: s.titulo });
          const best = d.Page.media.slice().sort((a, b) => (b.popularity || 0) - (a.popularity || 0))[0];
          if (best) m = (await seasonChain(best))[0];
        }
        const t = await tarjetaGemini(s.id, s.titulo, bannerFile, m);
        if (!t) continue;
        made++; console.log(`✓ tarjeta de ${s.titulo} → ${t}`);
      } catch (e) {
        console.log(`✗ ${s.titulo}: ${e.message}`);
        if (/plan gratuito/.test(e.message)) break;
      }
    }
    if (made) bumpImgVersion();
    console.log(`\nListo: ${made} tarjetas nuevas.`);
    return;
  }

  // --banners-pendientes: solo crea los banners que falten, sin tocar nada más
  if (pendingBanners) {
    if (bannerMode === "ninguno") { console.error("--banners-pendientes necesita --banners gemini o anilist"); process.exit(1); }
    const all = readManual().map((s) => ({ s, manual: true })).concat(auto.map((s) => ({ s, manual: false })));
    let made = 0;
    for (const { s, manual } of all) {
      if (onlyIds.length && !onlyIds.includes(s.id)) continue;
      if (manual && s.banner) continue;          // las de catalogo.js con banner propio no se tocan
      if (!VER_PROMPT && existingBanner(s.id)) continue;
      let m = null;
      try {
        if (s.anilistId) m = await getMedia(s.anilistId);
        else {
          const d = await anilist(`query ($q: String) { Page(perPage: 8) { media(search: $q, type: ANIME, isAdult: false) { ${FIELDS} } } }`, { q: s.titulo });
          m = d.Page.media.slice().sort((a, b) => (b.popularity || 0) - (a.popularity || 0))[0];
        }
        if (!m) { console.log(`✗ ${s.titulo}: no encontrado en AniList`); continue; }
        const b = bannerMode === "gemini" ? await bannerGemini(s.id, s.titulo, m) : await bannerAnilist(s.id, m);
        if (b) {
          made++;
          console.log(`✓ banner de ${s.titulo} → ${b}`);
          if (!manual && byId.has(s.id)) { byId.get(s.id).banner = b; writeAuto([...byId.values()]); }
          else if (manual && !b.endsWith(".png")) console.log(`  ! ${s.titulo} está en catalogo.js: pon banner: "${b}" en su entrada`);
        } else if (!VER_PROMPT) console.log(`- ${s.titulo}: AniList no tiene banner`);
      } catch (e) {
        console.log(`✗ ${s.titulo}: ${e.message}`);
        if (/plan gratuito/.test(e.message)) break; // el resto fallaría igual
      }
    }
    if (made) bumpImgVersion();
    console.log(`\nListo: ${made} banners nuevos.`);
    return;
  }

  // 1) Lista de candidatos
  let found = [];
  if (top) {
    for (let page = 1; found.length < top; page++) {
      const media = await popularPage(page);
      if (!media.length) break;
      found.push(...media);
    }
  }
  for (const q of searches) {
    const d = await anilist(`query ($q: String) { Page(perPage: 8) { media(search: $q, type: ANIME, format_in: [TV, TV_SHORT, ONA], isAdult: false, sort: SEARCH_MATCH) { ${FIELDS} } } }`, { q });
    // De las coincidencias, la más popular («Demon Slayer» no debe acabar en una serie desconocida)
    const best = d.Page.media.slice().sort((a, b) => (b.popularity || 0) - (a.popularity || 0))[0];
    if (best) found.push(best); else console.log(`✗ No encontrado en AniList: «${q}»`);
  }
  // --nuevas N: recorre la lista de popularidad página a página hasta encontrar N series que aún no estén
  async function* candidates() {
    yield* found;
    if (!nuevas) return;
    for (let page = 1; page <= 40; page++) {
      const media = await popularPage(page);
      if (!media.length) return;
      yield* media;
    }
  }

  // 2) Agrupar temporadas en series (la de AoT temporada 3 y la 1 son la misma serie)
  const done = new Set();
  let added = 0, updated = 0, total = 0;
  const newIds = [];
  for await (const m of candidates()) {
    if (top && total >= top && !searches.length && !nuevas) break;
    if (nuevas && added >= nuevas) break;
    const chain = await seasonChain(m);
    const root = chain[0];
    if (done.has(root.id)) continue;
    done.add(root.id); total++;

    let titulo = root.title.english || root.title.romaji;
    // «JUJUTSU KAISEN» → «Jujutsu Kaisen»
    if (/[A-Z]{3}/.test(titulo) && titulo === titulo.toUpperCase()) titulo = titulo.toLowerCase().replace(/(^|[\s\-:])(\p{L})/gu, (_, a, b) => a + b.toUpperCase());
    const id = slug(root.title.english || root.title.romaji) || "anime" + root.id;
    if (manualIds.has(id)) { if (!nuevas) console.log(`= ${titulo}: ya está en catalogo.js (no se toca)`); continue; }
    if (nuevas && byId.has(id) && !found.includes(m)) continue; // en modo --nuevas, las que ya están se saltan

    const animeTotal = chain.reduce((s, x) => s + (x.episodes || (x.nextAiringEpisode ? x.nextAiringEpisode.episode - 1 : 0)), 0);
    const enEmision = chain.some((x) => x.status === "RELEASING");
    // Capítulos del manga original (AniList no los da si sigue publicándose: entonces queda en 0)
    const sm = sourceManga(root) || chain.map(sourceManga).find(Boolean);
    const mangaTotal = (sm && sm.chapters) || 0;

    const prev = byId.get(id) || {};
    const entry = {
      id, titulo,
      descripcion: prev.descripcion || "",
      animeTotal, mangaTotal,
      enEmision: enEmision || undefined,
      temporadas: chain.length,
      anilistId: root.id,
      banner: prev.banner,
      tema: themeFrom(root.coverImage?.color || m.coverImage?.color),
    };
    Object.assign(entry, detailTotals(id)); // si ya tiene ficha, sus totales mandan

    // 3) Banner
    let banner = redoBanners ? null : existingBanner(id);
    if (!banner && bannerMode !== "ninguno") {
      try {
        banner = bannerMode === "gemini" ? await bannerGemini(id, titulo, root) : await bannerAnilist(id, root);
      } catch (e) { console.log(`  (sin banner: ${e.message})`); }
    }
    entry.banner = banner || undefined;

    console.log(`${byId.has(id) ? "↻" : "+"} ${titulo} — ${animeTotal} caps. anime (${chain.length} temp.)${enEmision ? " en emisión" : ""}, ${mangaTotal || "?"} caps. manga${banner ? ", banner ✓" : ""}`);
    if (byId.has(id)) updated++; else { added++; newIds.push(id); }
    byId.set(id, JSON.parse(JSON.stringify(entry))); // quita los undefined
    writeAuto([...byId.values()]); // guarda sobre la marcha por si se corta
  }
  console.log(`\nListo: ${added} nuevas, ${updated} actualizadas → data/catalogo-auto.js`);
  if (newIds.length) console.log("IDS_NUEVOS=" + newIds.join(","));
  if (bannerMode !== "ninguno") console.log("Banners en la carpeta banners/");
}

main().catch((e) => { console.error("\nError: " + e.message); process.exit(1); });
