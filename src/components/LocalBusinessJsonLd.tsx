import { siteConfig } from '@/config/site';

/** Structured data for local search. Only includes facts that were provided. */
export function LocalBusinessJsonLd() {
  const sameAs = Object.values(siteConfig.social).filter(Boolean);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: [siteConfig.phones.booking.tel, siteConfig.phones.urbania.tel],
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: siteConfig.address.country,
    },
    ...(sameAs.length ? { sameAs } : {}),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
