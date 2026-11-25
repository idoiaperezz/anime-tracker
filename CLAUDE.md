# Rastreador de anime

Web estática (GitHub Pages) para seguir por dónde vas en cada anime y su manga. Cuentas y grupos de amigos con Supabase. Todo en español de España.

## Estructura
- `index.html`: portada; crea una tarjeta por cada serie del catálogo.
- `serie.html?id=<id>`: rastreador único para todas las series.
- `data/catalogo.js`: series añadidas a mano (Bleach, Black Clover). Lo que hay aquí siempre manda.
- `data/catalogo-auto.js`: series importadas de AniList con `herramientas/importar.mjs`. Se regenera; no se edita a mano.
- `data/<id>.js`: ficha de cada serie (arcos, relleno, equivalencia anime↔manga, nota). Las fichas modelo son `bleach.js` y `blackclover.js`.
- `banners/<id>.jpg`: banner de cada serie (cabecera de su rastreador; ya no se generan nuevas). Si no existe, se usa un fondo de color.
- `tarjetas/<id>.jpg`: imagen 16:9 de la tarjeta de la portada (ya no se generan nuevas).
- `iconos/<id>.png`: icono de la pestaña del navegador (ya no se generan nuevos). Bleach y Black Clover usan `bleach-icon.png` y `blackclover-icon.png`.
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
- **Series en emisión:** en la ficha, `emision: [{ anilistId, desde }]` = la temporada de AniList que se emite y el número que tiene su capítulo 1 en nuestra numeración seguida (puede haber varias, p. ej. la parte 2 ya anunciada). `emision.js` pregunta a AniList desde el navegador y amplía `animeTotal` y el último arco: no hace falta subir nada cada semana. Cuando empiece una temporada nueva con otro id de AniList, añádela a `emision`; cuando acabe la serie, quita `emision`. Después, `--sincronizar` (copia `emision` y `enEmision` al catálogo; Black Clover lo lleva a mano en `catalogo.js`).
- **Géneros** (`generos` del catálogo, para el filtro de la portada): salen de AniList traducidos al español (`GENEROS_ES` en `importar.mjs`) al importar; `--generos` los vuelve a pedir para todo el catálogo. Las de `catalogo.js` los llevan a mano.
- **Portada sin recuentos:** no muestres cuántas series hay (ni junto a «Seguir viendo» / «Todos los animes» ni en los botones de género).

## Preferencias de la usuaria
- **Publicación:** ella sube los cambios con «Push origin» en GitHub Desktop, a menudo en cuanto se los preparas. Por eso **nunca hagas `git commit --amend` ni reescribas commits**: si hay que corregir algo, haz un commit nuevo. Después de cada commit dile cuántos cambios hay pendientes de subir.
- **Todo automatizado, sin revisión manual.** No propongas pasos en los que tenga que revisar o aprobar (por ejemplo, pull requests).
- **Doble verificación obligatoria:** cualquier dato dudoso de una ficha se contrasta con al menos otra fuente independiente, distinta de las usadas al investigar. Si las fuentes discrepan, se busca una tercera y gana la mayoría; si no se puede confirmar, se marca como «aproximado» en la `nota`.
- Las wikis de Fandom bloquean el acceso automático (error 402). No las esquives con espejos o proxies: usa Wikipedia en otros idiomas, MyAnimeList, Crunchyroll, guías y prensa especializada.
- **NO SE GENERAN MÁS IMÁGENES (desde el 25-11-2026).** La usuaria ha dejado Gemini: ni API ni app. No propongas ni generes banners, tarjetas ni iconos, ni uses Gemini para nada. En `importar.mjs` la API de Gemini está desactivada (no lee ninguna clave). Las series nuevas se añaden con `--banners ninguno`: sin banner la cabecera usa un fondo de color, la tarjeta de la portada usa el banner o el fondo, y la pestaña el icono por defecto. Las imágenes que ya existen se quedan como están.
- **Colores:** cada serie tiene sus colores representativos en `tema` de su ficha `data/<id>.js`, y **solo se aplican dentro de su página**. La portada y el catálogo no cambian de colores.
- Descripción de la tarjeta (`descripcion` en el catálogo): una frase con el estilo de Bleach y Black Clover, «<protagonista y premisa>, del arco «<primero>» hasta «<último>»».
- Este proyecto no tiene nada que ver con `lol-esports-predictor-main`: no guardes nada de él allí.
