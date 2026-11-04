// /llms.txt: a plain-text summary of the site for AI assistants (ChatGPT, Perplexity, Claude…).
import type { APIRoute } from 'astro';
import { SITE, CONTACT, CALENDLY } from '../consts';
import { getPosts, getCaseStudies } from '../lib/content';

export const GET: APIRoute = async () => {
  const posts = (await getPosts()).filter((p) => !p.data.sample);
  const cases = (await getCaseStudies()).filter((c) => !c.data.sample);
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    `${SITE.name} is run by ${SITE.owner}, a solo SEO strategist based in the Philippines who works with businesses in the United States, Australia and Singapore. Clients work directly with Jean, with no account managers or hand-offs.`,
    '',
    '## Services',
    `- [Local SEO & Google Business Profile](${SITE.domain}/services/local-seo/): map-pack rankings, GBP optimisation, citations, location pages`,
    `- [Technical SEO & Schema](${SITE.domain}/services/technical-seo/): crawl and indexing fixes, Core Web Vitals, migrations, structured data`,
    `- [Keyword & Content Strategy](${SITE.domain}/services/content-strategy/): keyword mapping, cannibalisation audits, content clusters, calendars`,
    `- [AI Search Visibility (GEO)](${SITE.domain}/services/ai-search-visibility/): visibility in ChatGPT, Perplexity, Gemini and Google AI Overviews`,
    '',
    '## Industries',
    '- Healthcare and clinics, dental, legal, wellness, home services, home builders',
    '',
    '## Key pages',
    `- [About Jean Jumamoy](${SITE.domain}/about/)`,
    `- [Results and case studies](${SITE.domain}/results/)`,
    `- [Blog](${SITE.domain}/blog/)`,
    `- [FAQ](${SITE.domain}/faq/)`,
    `- [Contact](${SITE.domain}/contact/)`,
    ...(cases.length ? ['', '## Case studies', ...cases.map((c) => `- [${c.data.title}](${SITE.domain}/results/${c.id}/): ${c.data.summary}`)] : []),
    ...(posts.length ? ['', '## Latest articles', ...posts.slice(0, 20).map((p) => `- [${p.data.title}](${SITE.domain}/blog/${p.id}/): ${p.data.description}`)] : []),
    '',
    '## Contact',
    `- Email: ${CONTACT.email}`,
    `- WhatsApp: ${CONTACT.whatsappDisplay}`,
    `- Book a call: ${CALENDLY}`,
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
