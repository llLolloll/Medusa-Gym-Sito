/* Medusa Gym - "duello" nei giochi (sfida-il-sacco, wod-lampo, tienilo).
   Il link "Sfida un amico" porta il punteggio da battere: ?sfida=245. Chi lo apre vede il bersaglio all'inizio
   e alla fine sa se l'ha battuto. Il record personale resta solo su questo dispositivo (localStorage "mgRec"). */
(function () {
  'use strict';
  var q = new URLSearchParams(location.search);
  var raw = (q.get('sfida') || '').replace(',', '.');
  var target = /^\d{1,6}(\.\d)?$/.test(raw) ? +raw : null;
  if (target !== null && target <= 0) target = null;
  if (target !== null) setTimeout(function () { try { if (window.mgTrack) window.mgTrack('game_duel_open', { gioco: location.pathname.replace(/\W|html/g, '') }); } catch (e) {} }, 1500);
  var css = '.mgd{margin:14px auto 0;max-width:420px;border:1px dashed rgba(57,255,20,.6);background:rgba(57,255,20,.08);border-radius:16px;padding:10px 14px;font-size:14px;line-height:1.45;color:#e8e8e8;text-align:center}' +
    '.mgd b{color:#39FF14;font-family:"Bebas Neue",Impact,sans-serif;font-weight:400;font-size:22px;letter-spacing:.03em}' +
    '.mgd.win{border-style:solid;background:rgba(57,255,20,.16)}.mgd small{display:block;color:#9a9a9a;font-size:12px;margin-top:2px}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  function fmt(n, dec) { return dec ? String((+n).toFixed(1)).replace('.', ',') : String(Math.round(n)); }
  function rec(key, v) {
    var all = {}; try { all = JSON.parse(localStorage.getItem('mgRec') || '{}') || {}; } catch (e) {}
    var old = typeof all[key] === 'number' ? all[key] : null;
    if (v !== undefined && (old === null || v > old)) { all[key] = v; try { localStorage.setItem('mgRec', JSON.stringify(all)); } catch (e) {} }
    return old;
  }
  window.MGD = {
    target: target,
    /* riquadro per la schermata iniziale */
    banner: function (unit, dec) {
      if (target === null) return '';
      return '<div class="mgd">Un amico ti ha sfidato: da battere <b>' + fmt(target, dec) + '</b> ' + unit + '</div>';
    },
    /* riquadro per la schermata finale: sfida vinta o persa e record personale */
    fine: function (key, score, unit, dec) {
      var old = rec(key, score), r;
      if (old === null) r = 'Primo record su questo dispositivo';
      else if (score > old) r = 'Nuovo record! Prima era ' + fmt(old, dec);
      else r = 'Il tuo record: ' + fmt(old, dec) + ' ' + unit;
      if (target === null) {
        return '<div class="mgd' + (old !== null && score > old ? ' win' : '') + '">' + (old === null ? r + ': <b>' + fmt(score, dec) + '</b> ' + unit : old !== null && score > old ? 'Nuovo record personale! Prima era <b>' + fmt(old, dec) + '</b> ' + unit : 'Il tuo record: <b>' + fmt(old, dec) + '</b> ' + unit + '<small>Su questo dispositivo</small>') + '</div>';
      }
      var win = score > target, pari = score === target;
      try { if (window.mgTrack) window.mgTrack('game_duel', { gioco: key, esito: win ? 'vinta' : pari ? 'pari' : 'persa' }); } catch (e) {}
      return '<div class="mgd' + (win ? ' win' : '') + '">' + (win
        ? 'Sfida vinta: hai battuto <b>' + fmt(target, dec) + '</b> ' + unit + '. Rimandagliela!'
        : (pari ? 'Pari! <b>' + fmt(target, dec) + '</b> ' + unit + ' a testa: serve la bella.' : 'Ti mancano <b>' + fmt(target - score, dec) + '</b> ' + unit + ' per battere la sfida. Ritenta!')) +
        '<small>' + r + '</small></div>';
    },
    /* link da condividere con il punteggio da battere */
    url: function (base, score, dec) {
      var u = new URL(base, location.origin);
      u.searchParams.set('sfida', dec ? (+score).toFixed(1) : String(Math.round(score)));
      u.searchParams.set('utm_source', 'sfida'); u.searchParams.set('utm_medium', 'gioco');
      return u.toString();
    }
  };
})();
