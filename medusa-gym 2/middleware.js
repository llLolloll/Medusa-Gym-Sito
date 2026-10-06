// Vercel Routing Middleware: content negotiation per agenti AI.
// Se il client invia "Accept: text/markdown", risponde con la versione /md/ della pagina.
// Tutti gli altri visitatori (browser, Googlebot) ricevono l'HTML invariato.
export default async function middleware(request) {
  const accept = request.headers.get('accept') || '';
  if (!/text\/markdown/i.test(accept)) return; // prosegue normalmente

  const url = new URL(request.url);
  const p = url.pathname;
  if (p.startsWith('/md/')) return;

  let mdPath;
  if (p === '/' || p === '/index.html') mdPath = '/md/index.md';
  else if (p.endsWith('.html')) mdPath = '/md' + p.replace(/\.html$/, '.md');
  else return;

  const res = await fetch(new URL(mdPath, url.origin).toString(), {
    headers: { accept: 'text/plain' },
  });
  if (!res.ok) return; // se manca la versione markdown, serve l'HTML normale

  return new Response(res.body, {
    status: 200,
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'vary': 'Accept',
      'cache-control': 'public, max-age=0, must-revalidate',
    },
  });
}
