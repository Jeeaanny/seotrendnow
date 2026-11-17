// Cloudflare Worker in front of the static site.
// Its only job: send visitors on http:// or www.seotrendnow.online to
// https://seotrendnow.online with a permanent 301 redirect, keeping the same page
// and query string, so Google only ever sees one version of each URL.
// Everything else is served straight from the built site in dist/.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const isLive = url.hostname === 'seotrendnow.online' || url.hostname === 'www.seotrendnow.online';
    if (isLive && (url.protocol === 'http:' || url.hostname === 'www.seotrendnow.online')) {
      url.hostname = 'seotrendnow.online';
      url.protocol = 'https:';
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
