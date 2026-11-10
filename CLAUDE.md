# Rastreador de anime

Web estática (GitHub Pages) para seguir por dónde vas en cada anime y su manga. Cuentas y grupos de amigos con Supabase. Todo en español de España.

## Estructura
- `index.html`: portada; crea una tarjeta por cada serie del catálogo.
- `serie.html?id=<id>`: rastreador único para todas las series.
- `data/catalogo.js`: series añadidas a mano (Bleach, Black Clover). Lo que hay aquí siempre manda.
- `data/catalogo-auto.js`: series importadas de AniList con `herramientas/importar.mjs`. Se regenera; no se edita a mano.
- `data/<id>.js`: ficha de cada serie (arcos, relleno, equivalencia anime↔manga, nota). Las fichas modelo son `bleach.js` y `blackclover.js`.
- `banners/<id>.jpg`: banner de cada serie (cabecera de su rastreador, generado con Gemini). Si no existe, se usa un fondo de color.
- `tarjetas/<id>.jpg`: imagen 16:9 de la tarjeta de la portada (Gemini, a partir del banner).
- `iconos/<id>.png`: icono de la pestaña del navegador (Gemini). Bleach y Black Clover usan `bleach-icon.png` y `blackclover-icon.png`.
- `bleach.html` y `blackclover.html`: solo redirigen a `serie.html` para que sigan funcionando los enlaces de grupo antiguos.
- `herramientas/`: `importar.mjs` (AniList + banners), `validar.mjs` (comprueba las fichas), `ranking.sql` (tablas de Supabase del ranking).
- `ranking.html`: ranking de animes. Una nota 1-10 **por anime completo (nunca por temporada)**, que se pone en «Tu nota» de cada rastreador; el top se ordena por nota y los empates con ▲▼. Se comparte con `ranking.html?u=<usuario>` (lectura pública, sin cuenta). Tablas `perfiles` y `valoraciones` en Supabase.

## Fichas (`data/<id>.js`)
Formato de arco: `[nombre, anime desde, hasta, relleno 0/1, manga desde, manga hasta, (fin en la rejilla del manga si "manga hasta" es null)]`.
- Los arcos cubren todos los capítulos del anime, de 1 a `animeTotal`, sin huecos ni solapes.
- Los arcos enteros de relleno van con 1 y sin manga. Los capítulos de relleno sueltos van en `relleno`. Los «mixed canon/filler» cuentan como canon. Fuente del relleno: Anime Filler List.
- Los rangos del manga son crecientes y seguidos. Lo que el anime aún no adapta va en `soloManga`.
- Pon `animeTotal` y `mangaTotal` verificados en la ficha: mandan sobre AniList. Después ejecuta `node herramientas/importar.mjs --sincronizar`.
- Siempre debe pasar `node herramientas/validar.mjs <id>` sin ✗.
- Si la serie no viene de un manga (novela ligera, novela visual, original): `mangaTotal: 0` y arcos sin manga; el rastreador queda en modo solo anime.
- `tema`: colores representativos de la serie (solo se usan dentro de su página).
- **Sin temporadas:** la división es solo por arcos. Se probó una capa de temporadas (barra, etiquetas) y la usuaria pidió quitarla: no la vuelvas a proponer.
- **Películas** (`peliculas`, en orden de visionado): `{ titulo, anio, despues, tipo, manga?: [desde, hasta], nota? }`. `despues` = capítulo del anime tras el que conviene verla (0 = antes del 1). `tipo`: `canon`, `no-canon`, `recopilatorio` o `precuela`. Solo películas de anime de cine (sin imagen real, OVAs ni especiales de TV). Salen como 🎬 en el mapa de capítulos y en una lista con botón de «vista».
- Las series nuevas se añaden con `node herramientas/importar.mjs --nuevas N --banners ninguno` (las N más populares que falten).

## Preferencias de la usuaria
- **Publicación:** ella sube los cambios con «Push origin» en GitHub Desktop, a menudo en cuanto se los preparas. Por eso **nunca hagas `git commit --amend` ni reescribas commits**: si hay que corregir algo, haz un commit nuevo. Después de cada commit dile cuántos cambios hay pendientes de subir.
- **Todo automatizado, sin revisión manual.** No propongas pasos en los que tenga que revisar o aprobar (por ejemplo, pull requests).
- **Doble verificación obligatoria:** cualquier dato dudoso de una ficha se contrasta con al menos otra fuente independiente, distinta de las usadas al investigar. Si las fuentes discrepan, se busca una tercera y gana la mayoría; si no se puede confirmar, se marca como «aproximado» en la `nota`.
- Las wikis de Fandom bloquean el acceso automático (error 402). No las esquives con espejos o proxies: usa Wikipedia en otros idiomas, MyAnimeList, Crunchyroll, guías y prensa especializada.
- **Imágenes hechas a mano por la usuaria** (en la app de Gemini, sin coste de API): prepara las instrucciones con `node herramientas/instrucciones-gemini.mjs <ids…>` (crea `imagenes-nuevas/instrucciones.html` y las referencias a adjuntar en `imagenes-nuevas/referencias/`). Ella guarda las imágenes en `imagenes-nuevas/<id>-banner|tarjeta|icono.png` y `node herramientas/meter-imagenes.mjs` las recorta y coloca. Revisa después cada imagen (duplicados, spoilers, texto).
- **Gemini se usa SOLO para imágenes de cada serie: banner, imagen de tarjeta e icono. Para nada más.** Las descripciones, las fichas, los textos, los colores y la investigación los hace Claude.
- **CADA IMAGEN SE GENERA UNA SOLA VEZ. NO SE REGENERA.** La usuaria no quiere repeticiones: si una imagen sale con un fallo menor, se acepta y se le comenta; solo se le propone repetir (y ella decide) si el fallo es grave. Toda la prevención va en las instrucciones, antes de generar. Fallos ya vistos que hay que prevenir siempre en la instrucción:
  - **Logos con japonés** (Code Geass, etc.): Gemini copia el subtítulo japonés del logo oficial y lo escribe mal. Para cualquier serie cuyo logo oficial lleve japonés, pide en `ESTILO_SERIE` un logo solo con letras latinas y que NO copie el logo de la portada adjunta.
  - **Personajes con mascota o acompañante** (Pochita, Dimple, King en su almohada…): Gemini los duplica. Indica en el reparto «X aparece UNA SOLA VEZ» junto a ese personaje, o quítalo del reparto.
  - **Personajes parecidos** (dos chicos morenos con uniforme): describe en el reparto lo que los diferencia (gafas, peinado, color de pelo).
  - **Descripciones físicas equivocadas** (el pelo de Miyuki): no escribas el aspecto de memoria; usa el que confirmen los agentes al investigar la ficha.
  - **Anatomía** (Toradora!: un personaje con 3 brazos; Chainsaw Man: Denji abrazando a Pochita y además con motosierra): la regla `RULE #2` de `REGLA_NO_REPETIR` exige dos brazos y dos manos por persona. Si un personaje abraza o sujeta algo, di que lo hace con los dos brazos y que no lleva nada más. Al revisar, cuenta brazos y manos de cada personaje.
  - **Personajes que no se parecen** (Kaiju No. 8, Cinderella Gray): el banner adjunta el retrato oficial de AniList de cada personaje del reparto. Para que lo encuentre, escribe el nombre como lo escribe AniList (p. ej. «Soushirou Hoshina», «Jou Kitahara»); `--ver-prompt` muestra qué retratos se adjuntan. Si la usuaria da un cartel oficial, guárdalo en `herramientas/referencias/<id>.png|jpg`: se adjunta al banner y a la tarjeta como referencia principal (trajes, caras y logo). Kaiju No. 8 la tiene: todos con el traje negro de las Fuerzas de Defensa, no con el mono de limpieza. Si el cartel tiene caras gigantes de fondo, prohíbe copiarlas (si no, ese personaje sale dos veces).
  - **Excepción a los spoilers:** en la tarjeta de Solo Leveling la usuaria quiere a Jinwoo «más adelante en la serie» (Monarca de las Sombras). Las series así van en `TARJETA_ASPECTO_AVANZADO` de `importar.mjs`.
  - **Títulos de AniList con añadidos** («JoJo's Bizarre Adventure (TV)»): Gemini los escribe tal cual. Revisa el título de cada serie nueva y, si lleva coletillas, pon `titulo` limpio en su ficha.
  - **Personajes menores de edad**: no los describas con la edad ni con detalles de ropa o cuerpo (p. ej. «niña de 13 años, descalza»): el filtro de seguridad bloquea la petición. Descríbelos solo por pelo, accesorios y personalidad, o déjalos fuera.
  - **Series que Gemini bloquea** (`PROHIBITED_CONTENT`, como Cowboy Bebop): no insistas. Usa la imagen oficial gratis con `node herramientas/buscar-banners.mjs <id>` y `--usar <id> <n>`.
  - **Iconos**: a veces hace una lámina de muestra con varios tamaños o añade adornos en las esquinas; la instrucción ya lo prohíbe (no la quites).
- **Ahorrar en Gemini (cada imagen cuesta dinero): las instrucciones tienen que salir bien a la primera.** Antes de generar:
  1. Escribe en `REPARTO_BANNER`, `REPARTO_SIN_SPOILERS` y `SIMBOLOS` quién sale y **cómo es cada personaje** (pelo, gafas, ropa, rasgos que lo distingan de los demás). Sin eso el script se niega a generar.
  2. Si la serie no es oscura y de acción, define su estética en `ESTILO_SERIE`.
  3. Ejecuta el mismo comando con `--ver-prompt` (no llama a Gemini, es gratis) y revisa las instrucciones: que no haya frases que Gemini pueda copiar como texto, que cada personaje se distinga, que no falte nada.
  4. Solo entonces genera, y revisa la imagen. Regenera únicamente si hay un fallo real (duplicado, spoiler, texto mal escrito).
- **A Gemini siempre hay que indicarle que los personajes NO SE REPITAN** (regla `REGLA_NO_REPETIR` al principio de cada petición) y darle el reparto exacto (`REPARTO_BANNER` y `REPARTO_SIN_SPOILERS` en `importar.mjs`). Aun así revisa cada imagen: si alguien sale dos veces (le pasa sobre todo con mascotas pequeñas como Pochita o Dimple), regenera o quita esa mascota del reparto.
- **Sin spoilers:** en banners y tarjetas solo personajes del principio de la historia, en su forma normal (sin transformaciones, máscaras ni formas avanzadas). A Gemini solo se le pasa el centro del banner como referencia de estilo.
- Imágenes (clave en `$env:GEMINI_API_KEY`, nunca en un archivo; revisa cada imagen nueva y regenera las que tengan el logo mal escrito o un símbolo irreconocible):
  - **Banner (cabecera del rastreador): con Gemini** (la usuaria prefiere estos a las imágenes oficiales; se probaron las de AniList/Kitsu y se volvió a Gemini): `node herramientas/importar.mjs --banners-pendientes --banners gemini` → `banners/<id>.jpg`, 2048×410 (5:1). **Misma estructura** que `blackclover-banner.jpg` y `bleach-banner.png` (logo en el centro, personajes a los lados) **pero con la estética propia de cada anime** (colores, luz, ambiente y escenario de su arte oficial): una serie luminosa o romántica no debe salir oscura y de batalla. Si hace falta precisar la estética, añádela en `ESTILO_SERIE` de `importar.mjs`. El único texto permitido es el título (sin subtítulos en japonés: Gemini los escribe mal).
  - Imagen de tarjeta (portada, 4 por fila): `--tarjetas-pendientes` → `tarjetas/<id>.jpg`, 960×540 (16:9), recompuesta a partir del banner de la serie (mismos personajes, colores y logo).
  - Icono de la pestaña: `--iconos-pendientes` → `iconos/<id>.png`, 256×256, un emblema reconocible de la serie al estilo de `bleach-icon.png` y `blackclover-icon.png`. Para series nuevas, añade su símbolo en `SIMBOLOS` de `importar.mjs`.
- **Colores:** cada serie tiene sus colores representativos en `tema` de su ficha `data/<id>.js`, y **solo se aplican dentro de su página**. La portada y el catálogo no cambian de colores.
- Descripción de la tarjeta (`descripcion` en el catálogo): una frase con el estilo de Bleach y Black Clover, «<protagonista y premisa>, del arco «<primero>» hasta «<último>»».
- Este proyecto no tiene nada que ver con `lol-esports-predictor-main`: no guardes nada de él allí.
