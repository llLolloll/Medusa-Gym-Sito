// Vercel Routing Middleware: content negotiation per agenti AI.
// Se il client invia "Accept: text/markdown", serve la versione /md/ della pagina.
// Tutti gli altri visitatori (browser, Googlebot) ricevono l'HTML invariato.
export const config = {
  matcher: ['/', '/((?!md/|js/|images/|fonts/|icons/|video/|ads/|_vercel/).*\\.html)'],
};

export default function middleware(request) {
  const accept = request.headers.get('accept') || '';
  if (!/text\/markdown/i.test(accept)) return; // prosegue normalmente

  const url = new URL(request.url);
  let path = url.pathname;
  path = path === '/' ? '/md/index.md' : '/md' + path.replace(/\.html$/, '.md');

  const target = new URL(path, request.url);
  return new Response(null, {
    headers: {
      'x-middleware-rewrite': target.toString(),
      'Vary': 'Accept',
    },
  });
}
