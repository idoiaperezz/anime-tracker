# Rastreador de anime

Web estática (GitHub Pages) para seguir por dónde vas en cada anime y su manga. Cuentas y grupos de amigos con Supabase. Todo en español de España.

## Estructura
- `index.html`: portada; crea una tarjeta por cada serie del catálogo.
- `serie.html?id=<id>`: rastreador único para todas las series.
- `data/catalogo.js`: series añadidas a mano (Bleach, Black Clover). Lo que hay aquí siempre manda.
- `data/catalogo-auto.js`: series importadas de AniList con `herramientas/importar.mjs`. Se regenera; no se edita a mano.
- `data/<id>.js`: ficha de cada serie (arcos, relleno, equivalencia anime↔manga, nota). Las fichas modelo son `bleach.js` y `blackclover.js`.
- `banners/<id>.png`: banner de cada serie (generado con Gemini). Si no existe, se usa un fondo de color.
- `bleach.html` y `blackclover.html`: solo redirigen a `serie.html` para que sigan funcionando los enlaces de grupo antiguos.
- `herramientas/`: `importar.mjs` (AniList + banners), `validar.mjs` (comprueba las fichas). No hace falta publicarla.

## Fichas (`data/<id>.js`)
Formato de arco: `[nombre, anime desde, hasta, relleno 0/1, manga desde, manga hasta, (fin en la rejilla del manga si "manga hasta" es null)]`.
- Los arcos cubren todos los capítulos del anime, de 1 a `animeTotal`, sin huecos ni solapes.
- Los arcos enteros de relleno van con 1 y sin manga. Los capítulos de relleno sueltos van en `relleno`. Los «mixed canon/filler» cuentan como canon. Fuente del relleno: Anime Filler List.
- Los rangos del manga son crecientes y seguidos. Lo que el anime aún no adapta va en `soloManga`.
- Pon `animeTotal` y `mangaTotal` verificados en la ficha: mandan sobre AniList. Después ejecuta `node herramientas/importar.mjs --sincronizar`.
- Siempre debe pasar `node herramientas/validar.mjs <id>` sin ✗.

## Preferencias de la usuaria
- **Todo automatizado, sin revisión manual.** No propongas pasos en los que tenga que revisar o aprobar (por ejemplo, pull requests).
- **Doble verificación obligatoria:** cualquier dato dudoso de una ficha se contrasta con al menos otra fuente independiente, distinta de las usadas al investigar. Si las fuentes discrepan, se busca una tercera y gana la mayoría; si no se puede confirmar, se marca como «aproximado» en la `nota`.
- Las wikis de Fandom bloquean el acceso automático (error 402). No las esquives con espejos o proxies: usa Wikipedia en otros idiomas, MyAnimeList, Crunchyroll, guías y prensa especializada.
- Este proyecto no tiene nada que ver con `lol-esports-predictor-main`: no guardes nada de él allí.
