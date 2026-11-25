// Content for the four service pages at /services/<slug>/.
// Edit the copy here; the page layout lives in src/pages/services/[slug].astro.

export interface ServicePage {
  slug: string;
  anchor: string;            // section id on the /services/ overview page
  menuLabel: string;         // label in the menu, footer and cards
  name: string;              // full service name (schema, breadcrumbs)
  h1: string;                // page H1, written around what buyers search
  title: string;             // <title>
  description: string;       // meta description
  intro: string;
  icon: 'pin' | 'code' | 'grid' | 'spark';
  caseTags: string[];        // case studies with any of these tags appear on the page
  bestFor: string[];
  signs: string[];
  included: { title: string; text: string }[];
  deliverables: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: 'local-seo',
    anchor: 'local',
    menuLabel: 'Local SEO & GBP',
    name: 'Local SEO & Google Business Profile',
    h1: 'Local SEO Services and Google Business Profile Optimization',
    title: 'Local SEO Services & Google Business Profile Optimization',
    description: 'Local SEO and Google Business Profile optimization for clinics, law firms and service businesses: map-pack rankings, citations, reviews and location pages.',
    intro: 'Local SEO services for clinics, law firms and service businesses. Show up in the map pack in every suburb and neighbourhood you serve, and turn profile views into calls, direction requests and bookings.',
    icon: 'pin',
    caseTags: ['Local SEO'],
    bestFor: [
      'Clinics, dental practices and law firms with one or more physical locations',
      'Home service businesses that cover a service area',
      'Multi-location brands that rank in one area but not the others',
    ],
    signs: [
      'Competitors with fewer reviews outrank you in the map pack',
      'Your Google Business Profile gets views but few calls',
      'Your business name, address or phone differs across directories',
      'You rank near your office but disappear a few kilometres away',
    ],
    included: [
      { title: 'Google Business Profile audit and optimization', text: 'Categories, services, attributes, description, photos and booking links set up the way Google reads them.' },
      { title: 'Weekly GBP posts and Q&A', text: 'Fresh updates and answered questions that keep the profile active and answer what searchers ask.' },
      { title: 'Citation building and NAP cleanup', text: 'Consistent name, address and phone across the directories that matter in your market.' },
      { title: 'Review request strategy', text: 'A simple, compliant process to ask happy clients for reviews and respond to every one.' },
      { title: 'Location and service-area pages', text: 'Pages that give Google a clear, local reason to rank you in each area you serve.' },
      { title: 'Local rank-grid tracking', text: 'Monthly map-pack grid scans so you can see exactly where you rank, street by street.' },
    ],
    deliverables: [
      'Local SEO audit with a fix list ranked by impact',
      'Before-and-after map-pack grid reports',
      'Citation tracker you keep forever',
      'Monthly report on calls, direction requests and website clicks',
    ],
    process: [
      { title: 'Audit', text: 'I review your profile, listings, location pages and the businesses beating you in the map pack.' },
      { title: 'Fix the foundation', text: 'Profile optimization, category fixes and NAP cleanup come first, because they move fastest.' },
      { title: 'Build local authority', text: 'Citations, reviews, posts and location pages add up month after month.' },
      { title: 'Track and refine', text: 'Grid scans and Business Profile insights show what is working and where to push next.' },
    ],
    faqs: [
      { q: 'How long does local SEO take to show results?', a: "It depends on your area, your competitors and where you start, so I don't promise a timeline. You get a realistic plan after the first audit and monthly reports that show what's moving." },
      { q: 'Can you help a business with several locations?', a: 'Yes. Each location gets its own profile work, listings and location page, and the grid reports show how every location performs.' },
      { q: 'Do I need a physical office to rank in the map pack?', a: 'Service-area businesses can rank without a public address by hiding it on their profile. Results depend on how Google sees your service area and your competitors.' },
      { q: 'Will you reply to my Google reviews?', a: 'I set up a review response approach and templates. Replies can be posted by me or your team, depending on who you want speaking for the business.' },
    ],
  },
  {
    slug: 'technical-seo',
    anchor: 'technical',
    menuLabel: 'Technical SEO & Schema',
    name: 'Technical SEO & Schema Markup',
    h1: 'Technical SEO Services: Audits, Fixes and Schema Markup',
    title: 'Technical SEO Services: Audits, Fixes & Schema | SEOTrendNow',
    description: 'Technical SEO audits and fixes for crawl, indexing, Core Web Vitals and site migrations, plus LocalBusiness, medical and legal schema markup.',
    intro: 'Technical SEO audits and fixes for clinics, law firms and local businesses. Fix the problems that stop Google from crawling, indexing and trusting your site, then add structured data so search engines and AI tools understand who you are.',
    icon: 'code',
    caseTags: ['Technical SEO'],
    bestFor: [
      'Sites that lost traffic after an update, redesign or migration',
      'Businesses planning a new website or a platform move',
      'Older WordPress sites with years of plugins, redirects and patches',
    ],
    signs: [
      'Important pages show as "Crawled, currently not indexed" in Search Console',
      'Traffic dropped and nobody can explain why',
      'Pages load slowly on mobile or fail Core Web Vitals',
      'Google shows the wrong page, or an old URL, for your main services',
    ],
    included: [
      { title: 'Full crawl and indexation audit', text: 'A Screaming Frog crawl matched against Search Console to find what Google can and cannot see.' },
      { title: 'Sitemap, robots and canonical fixes', text: 'Clean sitemaps, correct canonicals and no accidental blocks on pages that should rank.' },
      { title: 'Core Web Vitals improvements', text: 'Practical fixes for slow loading, layout shift and sluggish interaction on mobile.' },
      { title: 'Redirect mapping and migrations', text: 'URL-by-URL redirect plans so a redesign or move keeps the rankings you have earned.' },
      { title: 'LocalBusiness, medical and legal schema', text: 'Structured data that describes your business, practitioners, services and FAQs accurately.' },
      { title: 'Internal linking clean-up', text: 'Links that send authority to the pages you most want to rank.' },
    ],
    deliverables: [
      'Technical audit workbook with every issue and its fix',
      'Ready-to-paste JSON-LD schema for your key pages',
      'Developer-ready tickets, or I make the fixes myself',
      'A re-crawl to confirm everything is resolved',
    ],
    process: [
      { title: 'Crawl and diagnose', text: 'Crawl the site, pull Search Console data and find the issues that actually cost traffic.' },
      { title: 'Prioritize', text: 'Rank every issue by impact and effort so the biggest wins happen first.' },
      { title: 'Fix', text: 'I make the changes or hand your developer clear tickets with the exact fix.' },
      { title: 'Verify', text: 'Re-crawl, request indexing and monitor Search Console until the fixes stick.' },
    ],
    faqs: [
      { q: 'Do you need access to my website to do technical SEO?', a: 'For the audit I only need Search Console and GA4 access. To make fixes myself I need CMS or developer access; otherwise I hand over tickets your developer can follow.' },
      { q: 'Can you help with a website migration?', a: 'Yes. I map every old URL to its new home, check the staging site before launch and monitor rankings and indexing after the switch.' },
      { q: 'Which platforms do you work with?', a: 'Mostly WordPress, including Elementor and Yoast setups, plus static and custom-built sites. Other platforms are fine for audits and recommendations.' },
      { q: 'Does schema markup improve rankings?', a: 'Schema does not rank a page on its own, but it helps Google and AI tools understand your business and makes pages eligible for richer search results.' },
    ],
  },
  {
    slug: 'content-strategy',
    anchor: 'content',
    menuLabel: 'Keyword & Content Strategy',
    name: 'Keyword & Content Strategy',
    h1: 'SEO Content Strategy and Keyword Research Services',
    title: 'SEO Content Strategy & Keyword Research Services',
    description: 'Keyword research, keyword mapping, cannibalization audits, topic clusters and content calendars that turn blog and service pages into booked enquiries.',
    intro: 'SEO content strategy and keyword research for clinics, law firms and local businesses. Give every page one clear job, stop your own pages from competing, and publish content that answers what your patients and clients actually search.',
    icon: 'grid',
    caseTags: ['Content'],
    bestFor: [
      'Businesses with a blog that brings traffic but no enquiries',
      'Service pages stuck on page two',
      'Teams with writers who need clear briefs and a plan',
    ],
    signs: [
      'Two or more of your pages rank for the same keyword and both underperform',
      'You publish regularly but organic leads stay flat',
      'Writers pick their own topics with no keyword research behind them',
      'Your service pages are thin compared with competitors',
    ],
    included: [
      { title: 'Keyword research and page mapping', text: 'One primary keyword per page, chosen by the bookings it can bring, not just by search volume.' },
      { title: 'Keyword cannibalization audit', text: 'Find pages competing with each other and decide whether to merge, redirect or re-target, backed by GA4 and Search Console data.' },
      { title: 'Topic clusters and pillar pages', text: 'Group content around your core services so Google sees depth and authority.' },
      { title: 'Monthly content calendar', text: 'A realistic publishing plan matched to your team, seasonality and priorities.' },
      { title: 'Writer briefs and content QA', text: 'Briefs with intent, outline, entities and internal links, and a review before anything goes live.' },
      { title: 'On-page optimization', text: 'Titles, headings, copy and internal links tuned on the pages that matter most.' },
    ],
    deliverables: [
      'Keyword map workbook with one target per page',
      'Cannibalization report with clear merge and redirect calls',
      '90-day content calendar',
      'Briefs your writers can follow, or finished articles',
    ],
    process: [
      { title: 'Research', text: 'Keywords, search intent and competitor content for every service you offer.' },
      { title: 'Map', text: 'Assign each keyword to one page and flag the pages that overlap.' },
      { title: 'Plan', text: 'Turn the gaps into a calendar of new pages, rewrites and merges.' },
      { title: 'Publish and measure', text: 'Brief, review and publish, then track rankings, clicks and enquiries per page.' },
    ],
    faqs: [
      { q: 'What is keyword cannibalization?', a: 'It happens when several of your pages target the same search, so Google splits its attention between them and none ranks as well as one strong page would.' },
      { q: 'Do you write the content too?', a: 'I can deliver finished articles or detailed briefs for your own writers, and I review every piece before it goes live either way.' },
      { q: 'How many posts a month do I need?', a: 'It depends on your market and goals. Many local businesses do well with two to four strong posts a month plus regular updates to existing pages.' },
      { q: 'Can you work with health and legal content rules?', a: 'Yes. Health and legal content is checked for accuracy, claims and local advertising rules before publishing.' },
    ],
  },
  {
    slug: 'ai-search-visibility',
    anchor: 'geo',
    menuLabel: 'AI Search Visibility',
    name: 'AI Search Visibility (GEO)',
    h1: 'AI Search Optimization (GEO) for ChatGPT, Gemini, Claude and AI Overviews',
    title: 'AI Search Optimization (GEO) Services | SEOTrendNow',
    description: 'AI search optimization (GEO) to get your business cited in ChatGPT, Gemini, Claude, Perplexity and Google AI Overviews through entity, schema and content work.',
    intro: 'AI SEO and LLM optimization for local businesses. Get your business named when people ask ChatGPT, Gemini, Claude, Perplexity, Grok, Copilot or Google’s AI Overviews who to call.',
    icon: 'spark',
    caseTags: ['AI Search'],
    bestFor: [
      'Businesses whose competitors already appear in AI answers',
      'Clinics and firms that want to be recommended, not just ranked',
      'Brands with old names, closed locations or inconsistent listings online',
    ],
    signs: [
      'ChatGPT or Perplexity recommends competitors when asked about your service',
      'AI tools show outdated details, such as an old name or a closed location',
      'Your site has little clear, quotable information about what you do',
      'You have no structured data describing your business',
    ],
    included: [
      { title: 'AI visibility audit across four tools', text: 'Test the questions your clients ask in ChatGPT, Perplexity, Gemini and AI Overviews and record who gets cited.' },
      { title: 'Entity and directory clean-up', text: 'Fix the outdated names, addresses and listings that confuse AI tools about who you are.' },
      { title: 'llms.txt setup', text: 'A plain-language summary of your business and key pages for AI assistants to read.' },
      { title: 'Answer-ready FAQ content', text: 'Clear, direct answers on your site that AI tools can quote and link to.' },
      { title: 'Organization and entity schema', text: 'Structured data that ties your business, people, services and locations together.' },
      { title: 'Monthly AI citation tracking', text: 'Re-run the same questions each month to see where you are mentioned and what changed.' },
    ],
    deliverables: [
      'AI visibility report with the questions tested and who was cited',
      'Entity and listing clean-up checklist',
      'llms.txt file and schema ready to publish',
      'Monthly citation tracking sheet',
    ],
    process: [
      { title: 'Benchmark', text: 'Ask the tools what your clients ask and record every answer and source.' },
      { title: 'Clean up the entity', text: 'Make your business details consistent everywhere AI tools look.' },
      { title: 'Publish answers', text: 'Add the content, schema and llms.txt that make your site easy to cite.' },
      { title: 'Track', text: 'Re-test monthly and adjust based on which sources the tools trust.' },
    ],
    faqs: [
      { q: 'What is GEO?', a: 'Generative engine optimization: making your business easy for AI tools like ChatGPT, Perplexity and Gemini to understand, trust and recommend.' },
      { q: 'Can you guarantee my business appears in ChatGPT?', a: 'No one can control what AI tools say. I build the signals they rely on and track the results month by month so you can see progress.' },
      { q: 'Is GEO different from SEO?', a: 'It builds on SEO. Strong rankings, clean listings and clear content still matter, with extra focus on entity consistency, structured data and quotable answers.' },
      { q: 'How do you measure AI visibility?', a: 'I re-run a fixed set of real client questions in each tool every month and record whether, where and how your business is mentioned.' },
    ],
  },
];

export const serviceBySlug = (slug: string) => SERVICE_PAGES.find((s) => s.slug === slug);
