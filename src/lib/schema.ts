import { SITE, CONTACT } from '../consts';

const person = {
  '@type': 'Person',
  '@id': `${SITE.domain}/#jean`,
  name: SITE.owner,
  jobTitle: SITE.role,
  url: `${SITE.domain}/about/`,
  worksFor: { '@id': `${SITE.domain}/#business` },
  knowsAbout: [
    'Search engine optimization', 'Local SEO', 'Google Business Profile', 'Technical SEO',
    'Schema markup', 'Keyword research', 'Content strategy', 'Generative engine optimization',
  ],
  ...(CONTACT.linkedin ? { sameAs: [CONTACT.linkedin] } : {}),
};

const business = {
  '@type': 'ProfessionalService',
  '@id': `${SITE.domain}/#business`,
  name: SITE.name,
  url: `${SITE.domain}/`,
  description: SITE.description,
  email: CONTACT.email,
  telephone: CONTACT.whatsappDisplay.replace(/\s/g, ''),
  image: `${SITE.domain}/og-image.png`,
  logo: `${SITE.domain}/apple-touch-icon.png`,
  founder: { '@id': `${SITE.domain}/#jean` },
  address: { '@type': 'PostalAddress', addressCountry: 'PH' },
  areaServed: ['United States', 'Australia', 'Singapore', 'Philippines'],
  serviceType: ['Local SEO', 'Google Business Profile optimization', 'Technical SEO', 'Keyword and content strategy', 'AI search visibility'],
};

export const homeSchema = [
  { '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebSite', '@id': `${SITE.domain}/#website`, url: `${SITE.domain}/`, name: SITE.name, publisher: { '@id': `${SITE.domain}/#business` } },
    business,
    person,
  ] },
];

export const aboutSchema = [
  { '@context': 'https://schema.org', '@graph': [
    { '@type': 'AboutPage', url: `${SITE.domain}/about/`, mainEntity: { '@id': `${SITE.domain}/#jean` } },
    person,
    business,
  ] },
];

export const authorRef = { '@id': `${SITE.domain}/#jean`, '@type': 'Person', name: SITE.owner, url: `${SITE.domain}/about/` };
export const publisherRef = { '@id': `${SITE.domain}/#business`, '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.domain}/apple-touch-icon.png` } };
