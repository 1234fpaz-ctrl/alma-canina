import { settings, socialLinks } from './site';

export function organizationSchema(site: URL) {
  const sameAs = socialLinks().map((s) => s.url);
  const contact = settings.contact;
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': new URL('/#organizacion', site).href,
    name: 'Alma Canina',
    slogan: 'Educamos con alma',
    description: settings.seoDescription,
    url: site.href,
    logo: new URL('/favicon.svg', site).href,
    image: new URL(settings.ogImage || '/og-image.png', site).href,
    address: {
      '@type': 'PostalAddress',
      addressLocality: settings.location.municipality,
      addressRegion: settings.location.department,
      addressCountry: 'CO',
      ...(settings.location.address ? { streetAddress: settings.location.address } : {}),
    },
    areaServed: ['Tenjo', 'Cundinamarca', 'Bogotá', 'Colombia'],
    knowsAbout: ['educación canina', 'bienestar animal', 'legislación animal en Colombia', 'experiencias con perros'],
    ...(contact.email ? { email: contact.email } : {}),
    ...(contact.phone ? { telephone: contact.phone } : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema(site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Alma Canina',
    url: site.href,
    inLanguage: 'es-CO',
    publisher: { '@id': new URL('/#organizacion', site).href },
  };
}

export function breadcrumbSchema(site: URL, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: new URL(it.path, site).href,
    })),
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}
