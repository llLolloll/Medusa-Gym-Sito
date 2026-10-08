// Content negotiation: se il client chiede "Accept: text/markdown" serve la versione
// Markdown della pagina (cartella /md/) con 200 e Content-Type text/markdown, allo stesso URL.
// In ogni altro caso (o in caso di errore) la richiesta prosegue normalmente.
export const config = {
  matcher: ['/', '/((?!md/|api/).+)\\.html'],
};

const ESCLUSE = ['contatti', 'staff', 'cookie-policy', 'privacy-policy', 'settimana-omaggio'];

export default async function middleware(request) {
  try {
    const accept = request.headers.get('accept') || '';
    if (!/text\/markdown/i.test(accept)) return;

    const url = new URL(request.url);
    const nome = url.pathname === '/' ? 'index' : url.pathname.replace(/^\//, '').replace(/\.html$/, '');
    if (ESCLUSE.includes(nome)) return;

    const md = await fetch(new URL('/md/' + nome + '.md', url.origin));
    if (!md.ok) return;

    return new Response(md.body, {
      status: 200,
      headers: {
        'content-type': 'text/markdown; charset=utf-8',
        'vary': 'Accept',
        'x-robots-tag': 'noindex',
        'cache-control': 'public, max-age=300',
      },
    });
  } catch (e) {
    return;
  }
}
