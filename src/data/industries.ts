// Content for the industry pages at /industries/<slug>/.
// Edit the copy here; the layout lives in src/pages/industries/[slug].astro.
// Voice: active voice, short sentences, no em dashes. Proof only from real case studies.

export interface PainPoint {
  pain: string;              // the owner's words, shown as a quote
  fix: string;
  result: string;
  why: string;
  proof?: { label: string; caseId: string };
}

export interface ProofStat { value: string; label: string; caseId: string }

export interface IndustryPage {
  slug: string;
  menuLabel: string;         // label in the menu and footer
  name: string;              // schema name and breadcrumb
  serviceType: string;
  title: string;             // <title>
  description: string;       // meta description
  h1: string;
  intro: string;
  heroImage?: { key: string; alt: string };  // key matches an import in [slug].astro
  painHeading: string;
  pains: PainPoint[];
  gallery?: { heading: string; items: { key: string; label: string; alt: string }[] };  // keys match imports in [slug].astro
  extra?: { heading: string; text: string[]; stat: ProofStat };  // optional niche section (junk removal)
  proofHeading: string;
  proof: ProofStat[];
  process: { title: string; text: string }[];
  guide?: string;            // blog post id to suggest
  faqs: { q: string; a: string }[];
  ctaHeading: string;
}

export const INDUSTRY_PAGES: IndustryPage[] = [
  {
    slug: 'dental-seo',
    menuLabel: 'Dental & Clinic SEO',
    name: 'Dental and Clinic SEO',
    serviceType: 'Dental SEO',
    title: 'Dental SEO: SEO for Dentists and Clinics | SEOTrendNow',
    description: 'Get more booked appointments from Google. Rank in the map pack, show up in AI answers and work directly with a dental SEO specialist.',
    h1: 'Dental and Clinic SEO That Brings In New Patients',
    intro: 'Dental and clinic SEO gets your practice found when patients search for treatments near them, on Google Maps, in search results and in AI answers. I help practices rank for the treatments they want more of, then turn those searches into booked appointments.',
    painHeading: "What's keeping your chairs empty, and how SEO fixes it.",
    pains: [
      {
        pain: 'We need more new patients.',
        fix: 'I get you into the map pack and search results for the treatments people search near you.',
        result: 'New patients find you on their own, every day.',
        why: 'The top three map results sit above everything else, so they get the first calls.',
      },
      {
        pain: 'We want more implant and Invisalign patients, not just cleanings.',
        fix: 'I build one page per high-value treatment that answers cost, recovery and who does it.',
        result: 'You get more enquiries for the treatments that grow your revenue.',
        why: 'Patients research big treatments for weeks, and they book the clinic that answered their questions.',
      },
      {
        pain: 'Ads cost more every month, and the calls stop when we stop paying.',
        fix: 'I build rankings that bring in patients without a cost per click.',
        result: 'Ads become an extra, not your only source of patients.',
        why: 'Ads rent visibility. SEO builds it, and a page that ranks keeps working.',
      },
      {
        pain: 'Patients choose the bigger clinic down the street.',
        fix: 'I target the searches big groups ignore: your treatments, in your neighborhood.',
        result: 'You show up beside or above the big names, close to your clinic.',
        why: 'Google ranks map results on relevance, distance and prominence, not ad budget.',
      },
      {
        pain: 'Patients ask ChatGPT which clinic to choose.',
        fix: 'I make your services, prices and hours clear and consistent everywhere AI tools look.',
        result: 'AI tools name your clinic when patients ask for a recommendation.',
        why: 'AI tools recommend businesses they can confirm in several places.',
        proof: { label: 'Named #1 by ChatGPT', caseId: 'dental-clinic-chatgpt-number-one' },
      },
      {
        pain: "We don't know if our marketing works.",
        fix: 'I track calls, booking clicks and enquiries, and report them in plain English every month.',
        result: 'You see which treatments and pages bring in patients.',
        why: 'Rankings mean nothing if the phone stays quiet.',
      },
    ],
    proofHeading: 'What this looks like for a real clinic.',
    proof: [
      { value: '#1', label: 'ChatGPT named a dental clinic I work with first for its core service, with its price and rating in the answer', caseId: 'dental-clinic-chatgpt-number-one' },
      { value: '2.2K → 4.3K', label: 'estimated monthly organic visits in one month, nearly double (Semrush)', caseId: 'dental-clinic-chatgpt-number-one' },
    ],
    process: [
      { title: 'Audit', text: 'I review your site, your profile and the clinics outranking you.' },
      { title: 'Fix', text: 'I fix your profile, listings and technical issues first, because they move fastest.' },
      { title: 'Build', text: 'I add treatment pages, posts and review requests month after month.' },
      { title: 'Track', text: 'I report calls and bookings, and adjust based on what the numbers show.' },
    ],
    guide: 'how-to-get-more-calls-from-google-business-profile',
    faqs: [
      { q: 'How much does dental SEO cost?', a: 'It depends on how many locations you have, how competitive your area is and what you already have in place. You get a clear quote after a free strategy call.' },
      { q: 'How long does dental SEO take?', a: 'Profile and page fixes can move your rankings within weeks. Competitive treatments like implants or Invisalign usually take several months.' },
      { q: 'Can you work within healthcare advertising rules?', a: "Yes. I've worked with clinics under strict advertising rules. I keep content factual, check testimonials and claims against your local rules first, and you approve every page." },
      { q: 'Do you work with medical clinics, not just dentists?', a: "Yes. I've done SEO for chiropractic, physio, aesthetic and TCM clinics, and the same approach works for them." },
    ],
    ctaHeading: 'Want patients to find you first?',
  },
  {
    slug: 'home-services-seo',
    menuLabel: 'Home Services SEO',
    name: 'Home Services SEO',
    serviceType: 'Home Services SEO',
    title: 'Home Services SEO for Contractors | SEOTrendNow',
    description: 'Home services SEO for roofers, HVAC, plumbers and junk removal companies. Win the map pack across your service area and get more calls you own.',
    h1: 'Home Services SEO for Roofers, HVAC and Plumbing Companies',
    intro: 'Home services SEO puts your business at the top of Google Maps and search results when homeowners need a contractor now. I help roofers, HVAC, plumbing and other home service companies rank across their whole service area and turn those searches into booked jobs.',
    heroImage: { key: 'hvac', alt: 'HVAC technician testing an outdoor air conditioning unit with a multimeter outside a home' },
    painHeading: 'What keeps your phone quiet, and how SEO fixes it.',
    pains: [
      {
        pain: "The phone doesn't ring enough between jobs.",
        fix: 'I get you into the map pack for your services and the towns you cover.',
        result: 'Homeowners with an urgent problem call you first.',
        why: 'People with a leak or a broken AC call one of the first businesses they see.',
        proof: { label: '29 → 98 top-3 map points', caseId: 'roofing-contractor-map-pack-grid' },
      },
      {
        pain: 'We only show up near our shop, not across our service area.',
        fix: 'I build service-area pages and local signals for every town you serve.',
        result: 'You rank in the towns you drive to, not just the one you park in.',
        why: 'Distance works against you outside your base, so each area needs its own reason for Google to rank you.',
        proof: { label: '3.4x more of the service area', caseId: 'roofing-contractor-map-pack-grid' },
      },
      {
        pain: 'Lead sites and ads eat our margin.',
        fix: 'I build rankings that send homeowners straight to your phone and website.',
        result: 'You get more calls you own and pay for fewer shared leads.',
        why: 'Lead sites often sell the same lead to several contractors. A call from your own profile goes only to you.',
      },
      {
        pain: 'Our Google profile gets views but not calls.',
        fix: 'I fix your categories, services and listings, add real job photos and post every week.',
        result: 'More people who find your profile pick up the phone.',
        why: 'Homeowners compare profiles side by side, and an active, complete one looks like the safer choice.',
        proof: { label: '+75% searches in 30 days', caseId: 'junk-removal-google-business-profile' },
      },
      {
        pain: 'Big franchises outrank us.',
        fix: 'I target the exact services and towns franchises cover with one generic page.',
        result: 'You show up beside or above the big names in your own area.',
        why: 'Google ranks local results on relevance, distance and prominence. A focused local business can beat a national brand on its home turf.',
      },
      {
        pain: 'Our calls dry up in the slow season.',
        fix: 'I rank you for year-round work, like repairs, maintenance and inspections, and plan seasonal pages before demand rises.',
        result: 'You get steadier calls through the whole year.',
        why: 'Homeowners search for seasonal jobs weeks ahead. Pages that already rank catch that demand first.',
      },
    ],
    gallery: {
      heading: 'Built for the trades.',
      items: [
        { key: 'electrician', label: 'Electricians', alt: 'Electrician in a hard hat and safety glasses working on an electrical box' },
        { key: 'plumber', label: 'Plumbers', alt: 'Plumber installing a toilet flush plate on a tiled bathroom wall' },
        { key: 'plasterer', label: 'Remodelers', alt: 'Remodeling worker finishing an interior wall with a brush' },
      ],
    },
    extra: {
      heading: 'SEO for junk removal companies.',
      text: [
        "Junk removal is a crowded market on Google. National franchises run big ad budgets, and most local operators fight over the same handful of searches.",
        "The fastest win is usually your Google Business Profile. For one junk removal company, I fixed four gaps in its website and profile. Searches that found the business jumped in the first 30 days, and growth kept building for nine months.",
      ],
      stat: { value: '+75%', label: 'searches that found a junk removal company in its first 30 days', caseId: 'junk-removal-google-business-profile' },
    },
    proofHeading: 'What this looks like for real contractors.',
    proof: [
      { value: '29 → 98', label: 'top-3 map pack grid points for a roofing contractor, out of 518', caseId: 'roofing-contractor-map-pack-grid' },
      { value: '+75%', label: 'searches that found a junk removal company in its first 30 days', caseId: 'junk-removal-google-business-profile' },
      { value: '+120%', label: 'monthly organic clicks for a kitchen cabinet supplier and installer in 6 months', caseId: 'kitchen-cabinet-organic-clicks' },
    ],
    process: [
      { title: 'Audit', text: 'I check your profile, listings, site and the competitors winning your towns.' },
      { title: 'Fix', text: 'I fix your categories, listings and technical issues first, because they move fastest.' },
      { title: 'Build', text: 'I add service-area pages, job photos, weekly posts and review requests.' },
      { title: 'Track', text: 'I map your rankings across your service area and report the calls they bring in.' },
    ],
    guide: 'nap-consistency-local-seo',
    faqs: [
      { q: 'How much does home services SEO cost?', a: 'It depends on how many services and towns you cover, how competitive your market is and what you already have in place. You get a clear quote after a free strategy call.' },
      { q: 'How long does home services SEO take?', a: 'Profile and listing fixes can move your map rankings within weeks. Competitive services and wide service areas usually take several months.' },
      { q: 'Can I rank on Google Maps without a shop address?', a: 'Yes. Service-area businesses can hide their address on Google Business Profile and still rank. Results depend on your service area and your competitors.' },
      { q: 'Which home service businesses do you work with?', a: 'HVAC, plumbing, roofing, electrical, garage door, pest control, landscaping, house cleaning and junk removal companies, plus remodelers and kitchen and bath companies.' },
    ],
    ctaHeading: 'Want homeowners to call you first?',
  },
  {
    slug: 'law-firm-seo',
    menuLabel: 'Law Firm SEO',
    name: 'Law Firm SEO',
    serviceType: 'Law Firm SEO',
    title: 'Law Firm SEO for More Signed Cases | SEOTrendNow',
    description: 'Law firm SEO that brings in signed cases. Rank for your practice areas, win the map pack and get named in Google AI Overviews.',
    h1: 'Law Firm SEO That Brings In Signed Cases',
    intro: 'Law firm SEO gets your firm found when people search for a lawyer after an accident, an arrest or a family crisis. I help personal injury, family and boutique firms rank for the case types they want, show up in AI answers and turn those searches into consultations.',
    painHeading: 'What keeps cases going elsewhere, and how SEO fixes it.',
    pains: [
      {
        pain: 'We need more signed cases, not just website traffic.',
        fix: 'I rank you for case-type searches in your city, like "truck accident lawyer" or "divorce attorney near me."',
        result: 'You get more consultations from people ready to hire.',
        why: 'Someone searching for a lawyer by case type and city usually needs help now.',
        proof: { label: 'Page 1 for a city case page', caseId: 'law-firm-ai-overview' },
      },
      {
        pain: 'National firms and legal directories take the top spots.',
        fix: 'I build focused pages for each case type and location, and strengthen your local profile.',
        result: 'You rank beside the national brands for the cases you want most.',
        why: 'Big brands cover everything broadly. A firm with a strong page for one case type in one city can outrank them there.',
        proof: { label: 'Top 3 next to a national brand', caseId: 'law-firm-ai-overview' },
      },
      {
        pain: 'People ask Google AI or ChatGPT before they call a lawyer.',
        fix: 'I write answer-first pages for the questions people ask after an accident or arrest.',
        result: "AI answers name your firm and link to your pages.",
        why: 'AI tools quote pages that answer a question clearly and come from a source they trust.',
        proof: { label: "Named first in Google's AI Overview", caseId: 'law-firm-ai-overview' },
      },
      {
        pain: 'Legal ads cost a fortune per click.',
        fix: 'I build organic rankings for your practice areas that keep bringing in cases.',
        result: 'You spend less on ads to get the same number of consultations.',
        why: "Legal keywords are some of the most expensive in Google Ads. Organic rankings bring in clicks you don't pay for.",
      },
      {
        pain: "We get calls for cases we don't take.",
        fix: 'I map each practice area you want to its own page and keyword.',
        result: 'You get more calls for the right case types and fewer you turn away.',
        why: 'A specific page attracts specific clients. A general "practice areas" page attracts everyone.',
      },
      {
        pain: "Google doesn't trust our content enough to rank it.",
        fix: 'I build pages with clear author details, attorney review and accurate, plain-English answers.',
        result: 'Google and AI tools trust your pages enough to rank and quote them.',
        why: 'Google holds legal and health pages to a higher standard, because bad advice can hurt people.',
      },
    ],
    proofHeading: 'What this looks like for a real firm.',
    proof: [
      { value: '1st', label: "a US law firm named first in Google's AI Overview, with its own page as the lead source", caseId: 'law-firm-ai-overview' },
      { value: 'Top 3', label: 'in the map pack, next to a national brand with 1.3K reviews', caseId: 'law-firm-ai-overview' },
      { value: '1 month', label: 'from new case-type pages going live to the first ranking gains', caseId: 'law-firm-ai-overview' },
    ],
    process: [
      { title: 'Audit', text: 'I review your site, profile and the firms and directories outranking you.' },
      { title: 'Fix', text: 'I fix technical issues, your profile and listings first, because they move fastest.' },
      { title: 'Build', text: 'I add case-type and location pages that answer what potential clients ask.' },
      { title: 'Track', text: 'I report consultations, calls and AI mentions, and adjust based on what the numbers show.' },
    ],
    guide: 'how-to-show-up-in-google-ai-overviews',
    faqs: [
      { q: 'How much does law firm SEO cost?', a: 'It depends on your practice areas, how competitive your city is and what you already have in place. You get a clear quote after a free strategy call.' },
      { q: 'How long does law firm SEO take?', a: 'For one US law firm, new case-type pages started gaining rankings within a month. Competitive practice areas in big cities usually take several months.' },
      { q: 'Can you work within attorney advertising rules?', a: 'Yes. I keep content factual, check testimonials, case results and claims against your bar\'s advertising rules first, and you approve every page.' },
      { q: 'Do you only work with personal injury firms?', a: 'No. I also work with family law and boutique firms. The approach is the same: one strong page for each case type you want more of.' },
    ],
    ctaHeading: 'Want more of the right cases to find you first?',
  },
];

export const industryBySlug = (slug: string) => INDUSTRY_PAGES.find((i) => i.slug === slug);
