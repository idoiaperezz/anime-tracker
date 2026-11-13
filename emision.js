// =====================================================================
//  SERIES EN EMISIÓN — capítulos emitidos al día, sin tener que subir nada
//
//  Una ficha (y su entrada del catálogo) puede llevar:
//    emision: [{ anilistId: 195516, desde: 49 }, ...]
//  = la temporada de AniList que se está emitiendo y el número que tiene en
//  nuestra numeración seguida su capítulo 1. Puede haber varias (por ejemplo
//  la parte 2 ya anunciada): se usa la que más capítulos dé.
//
//  La web pregunta a AniList cuántos capítulos van y, si son más que
//  animeTotal, amplía el total y el último arco. La respuesta se guarda unas
//  horas en el navegador para no preguntar en cada visita.
// =====================================================================
(function () {
  var HORAS = 3;
  var PREFIJO = "emision-";

  function leer(id) {
    try {
      var c = JSON.parse(localStorage.getItem(PREFIJO + id) || "null");
      return c && typeof c.total === "number" ? c : null;
    } catch (e) { return null; }
  }
  function guardar(id, total) {
    try { localStorage.setItem(PREFIJO + id, JSON.stringify({ total: total, t: Date.now() })); } catch (e) {}
  }

  // Total guardado (aunque esté caducado): sirve para pintar ya la página
  function cacheado(id) { var c = leer(id); return c ? c.total : 0; }
  function caducado(id) { var c = leer(id); return !c || Date.now() - c.t > HORAS * 3600 * 1000; }

  // Pregunta a AniList por varias series a la vez: { idSerie: [{anilistId, desde}] } → { idSerie: total }
  function consultar(series) {
    var ids = Object.keys(series), partes = [], mapa = [];
    ids.forEach(function (sid) {
      (series[sid] || []).forEach(function (e) {
        if (!e || !e.anilistId || !e.desde) return;
        mapa.push({ sid: sid, desde: e.desde });
        partes.push("m" + (mapa.length - 1) + ": Media(id: " + Number(e.anilistId) + ") { status episodes nextAiringEpisode { episode } }");
      });
    });
    if (!partes.length) return Promise.resolve({});
    return fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ query: "query { " + partes.join(" ") + " }" }),
    }).then(function (r) { return r.json(); }).then(function (j) {
      var d = (j && j.data) || {}, out = {};
      mapa.forEach(function (m, i) {
        var x = d["m" + i];
        if (!x) return;
        var emitidos = x.nextAiringEpisode ? x.nextAiringEpisode.episode - 1
          : x.status === "FINISHED" ? (x.episodes || 0) : 0;
        if (emitidos > 0) out[m.sid] = Math.max(out[m.sid] || 0, m.desde - 1 + emitidos);
      });
      Object.keys(out).forEach(function (sid) { guardar(sid, out[sid]); });
      return out;
    });
  }

  // Amplía una ficha (copia) hasta "total": animeTotal y el arco que acababa en el último capítulo
  function ampliar(D, total) {
    if (!total || total <= (D.animeTotal || 0)) return D;
    var viejo = D.animeTotal;
    D.animeTotal = total;
    if (D.arcos && D.arcos.length) {
      D.arcos = D.arcos.map(function (a) { return a.slice(); });
      var ult = D.arcos[D.arcos.length - 1];
      if (ult[2] === viejo) ult[2] = total;
    }
    return D;
  }

  window.EMISION = { cacheado: cacheado, caducado: caducado, consultar: consultar, ampliar: ampliar };
})();
