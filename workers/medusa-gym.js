// Worker per medusagym.it — sostituisce vercel.json (redirect + header HTML) e middleware.js (Markdown).
// I file statici sono serviti da Workers static assets; questo Worker gira solo su "/", "/*.html", "/corsi/*".

const LINK_HOME =
  '</sitemap.xml>; rel="sitemap"; type="application/xml", </llms.txt>; rel="describedby"; type="text/plain", </md/index.md>; rel="alternate"; type="text/markdown"';
const LINK_PAGE =
  '</sitemap.xml>; rel="sitemap"; type="application/xml", </llms.txt>; rel="describedby"; type="text/plain"';

// Pagine senza versione Markdown (come nel vecchio middleware)
const ESCLUSE = ['contatti', 'staff', 'cookie-policy', 'privacy-policy', 'settimana-omaggio'];

// Redirect vecchi URL /corsi/:id/:slug -> pagina corso (stesso ordine di vercel.json)
const CORSI = [
  [/^(.*kick.*bambin.*|.*bambin.*|.*kids.*|.*ragazz.*)$/, '/corsi/kickboxing-ragazzi.html'],
  [/^(.*kick.*|.*k-1.*|.*k1.*)$/, '/corsi/kickboxing.html'],
  [/^(.*pugilat.*|.*boxe.*|.*boxing.*)$/, '/corsi/pugilato.html'],
  [/^(.*difesa.*|.*path.*)$/, '/corsi/autodifesa-path.html'],
  [/^(.*function.*|.*funzional.*|.*pump.*)$/, '/corsi/functional-training.html'],
  [/^(.*calisth.*)$/, '/corsi/calisthenics.html'],
  [/^(.*postur.*)$/, '/corsi/ginnastica-posturale.html'],
  [/^(.*senior.*)$/, '/corsi/active-senior.html'],
  [/^(.*pesi.*|.*sala.*)$/, '/corsi/sala-pesi.html'],
];

const redirect301 = (url, to) => {
  const dest = new URL(to, url);
  dest.search = url.search;
  // un fragment nella destinazione resta in Location
  return new Response(null, { status: 301, headers: { Location: dest.pathname + dest.search + dest.hash } });
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // --- Redirect fissi ---
    if (path === '/contatti.html') return redirect301(url, '/#contatti');
    if (path === '/staff.html') return redirect301(url, '/istruttori.html');

    // --- Redirect /corsi/:id/:slug... ---
    const m = path.match(/^\/corsi\/([^/]+)\/(.+)$/);
    if (m) {
      for (const [re, dest] of CORSI) {
        if (re.test(m[2])) return redirect301(url, dest);
      }
      return redirect301(url, '/#corsi');
    }

    // Da qui: solo "/" e "*.html"
    const isHome = path === '/';
    if (!isHome && !path.endsWith('.html')) return env.ASSETS.fetch(request);

    // --- Content negotiation Markdown (ex middleware.js) ---
    try {
      const accept = request.headers.get('accept') || '';
      if (/text\/markdown/i.test(accept) && !path.startsWith('/md/')) {
        const nome = isHome ? 'index' : path.replace(/^\//, '').replace(/\.html$/, '');
        if (!ESCLUSE.includes(nome)) {
          const md = await env.ASSETS.fetch(new URL('/md/' + nome + '.md', url.origin));
          if (md.ok) {
            return new Response(md.body, {
              status: 200,
              headers: {
                'content-type': 'text/markdown; charset=utf-8',
                vary: 'Accept',
                'x-robots-tag': 'noindex',
                'cache-control': 'public, max-age=300',
              },
            });
          }
        }
      }
    } catch (e) {
      // in caso di errore prosegue con l'HTML
    }

    // --- HTML normale + header (ex vercel.json) ---
    const assetReq = isHome ? new Request(new URL('/index.html', url.origin), request) : request;
    const res = await env.ASSETS.fetch(assetReq);
    const out = new Response(res.body, res);
    if (res.status === 200) {
      out.headers.set('Link', isHome ? LINK_HOME : LINK_PAGE);
      out.headers.set('Vary', 'Accept');
    }
    return out;
  },
};
