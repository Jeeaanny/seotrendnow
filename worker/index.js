// Cloudflare Worker in front of the static site.
// Its only job: send visitors on www.seotrendnow.online to seotrendnow.online
// with a permanent 301 redirect, keeping the same page and query string.
// Everything else is served straight from the built site in dist/.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.seotrendnow.online') {
      url.hostname = 'seotrendnow.online';
      url.protocol = 'https:';
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
