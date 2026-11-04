// Site-wide settings. Change values here and every page updates.

// PRELAUNCH = true while the site still has [placeholder] numbers, sample case studies
// and sample blog posts. While true:
//   - every page carries <meta name="robots" content="noindex"> so Google doesn't index placeholders
//   - sample case studies and sample blog posts are shown so the layout can be reviewed
// Set it to false when the real content is in. Samples then disappear and pages become indexable.
export const PRELAUNCH = true;

export const SITE = {
  name: 'SEOTrendNow',
  domain: 'https://seotrendnow.online',
  owner: 'Jean Jumamoy',
  role: 'SEO Strategist',
  tagline: 'SEO strategist for clinics, law firms and local service businesses in the US, Australia and Singapore.',
  description:
    'SEOTrendNow is Jean Jumamoy, an SEO strategist helping clinics, law firms and local service businesses in the US, Australia and Singapore rank on Google, win the map pack and show up in AI answers.',
  location: 'Philippines',
  hours: 'Based in the Philippines, working US, AU and SG hours',
};

export const CONTACT = {
  email: 'seotrendnow@gmail.com',
  whatsappDisplay: '+63 9919311502',
  whatsappUrl: 'https://wa.me/639919311502',
  linkedin: '', // add your LinkedIn URL here and the footer link appears
};

export const CALENDLY = 'https://calendly.com/seotrendnow/30min';
export const FORMSPREE = 'https://formspree.io/f/xljjajey';

export const NAV = [
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/results/', label: 'Results' },
  { href: '/blog/', label: 'Blog' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/contact/', label: 'Contact' },
];

// Service pages live at /services/<slug>/ (copy in src/data/services.ts)
export const SERVICES = [
  { slug: 'local-seo', label: 'Local SEO & GBP' },
  { slug: 'technical-seo', label: 'Technical SEO & Schema' },
  { slug: 'content-strategy', label: 'Keyword & Content Strategy' },
  { slug: 'ai-search-visibility', label: 'AI Search Visibility' },
];

export const BLOG_CATEGORIES = ['Local SEO', 'Technical SEO', 'Content Strategy', 'AI Search', 'Case Notes'];
export const POSTS_PER_PAGE = 9;
