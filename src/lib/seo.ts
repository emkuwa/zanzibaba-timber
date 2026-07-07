import { Metadata } from 'next'

const OG_IMAGE = 'https://timber.zanzibaba.com/images/gallery/zanzibaba-timber-hero-banner.jpg'

export const generateSEOMetadata = (
  title: string,
  description: string,
  locale: string = 'en',
  path: string = ''
): Metadata => {
  const baseUrl = 'https://timber.zanzibaba.com'
  const swPath = locale === 'sw' ? path : `/sw${path}`
  const enPath = locale === 'sw' ? path.replace(/^\/sw/, '') || '/' : path
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        'en': `${baseUrl}${enPath}`,
        'sw': `${baseUrl}${swPath}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
      siteName: 'Zanzibaba Timber',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
      locale: locale === 'sw' ? 'sw_TZ' : 'en_TZ',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  }
}

export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Zanzibaba Timber',
  image: 'https://timber.zanzibaba.com/images/gallery/zanzibaba-timber-hero-banner.jpg',
  '@id': 'https://timber.zanzibaba.com/#localbusiness',
  url: 'https://timber.zanzibaba.com',
  telephone: '+255716002790',
  description: 'Premium pine timber supplier in Zanzibar. High quality treated timber and poles for construction, delivered across the island.',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kwa Ndevu, Daraja Bovu',
    addressLocality: 'Zanzibar',
    addressRegion: 'Zanzibar',
    postalCode: '',
    addressCountry: 'TZ',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.1918,
    longitude: 39.2056,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  sameAs: [
    'https://wa.me/255716002790',
    'https://maps.google.com/?q=Kwa+Ndevu+Daraja+Bovu+Zanzibar',
  ],
  areaServed: [
    { '@type': 'City', name: 'Zanzibar City', sameAs: 'https://en.wikipedia.org/wiki/Zanzibar_City' },
    { '@type': 'City', name: 'Stone Town', sameAs: 'https://en.wikipedia.org/wiki/Stone_Town' },
    { '@type': 'City', name: 'Paje', sameAs: 'https://en.wikipedia.org/wiki/Paje,_Zanzibar' },
    { '@type': 'City', name: 'Nungwi', sameAs: 'https://en.wikipedia.org/wiki/Nungwi' },
    { '@type': 'City', name: 'Kendwa' },
    { '@type': 'City', name: 'Kiwengwa' },
    { '@type': 'City', name: 'Jambiani' },
    { '@type': 'City', name: 'Matemwe' },
    { '@type': 'City', name: 'Fumba' },
    { '@type': 'City', name: 'Bububu' },
    { '@type': 'City', name: 'Chukwani' },
    { '@type': 'City', name: 'Ndevu' },
  ],
  hasMap: 'https://maps.google.com/?q=Kwa+Ndevu+Daraja+Bovu+Zanzibar',
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: -6.1918,
      longitude: 39.2056,
    },
    geoRadius: '50000',
  },
})

export const getServiceAreaSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://timber.zanzibaba.com/#servicearea',
  name: 'Zanzibaba Timber',
  url: 'https://timber.zanzibaba.com',
  telephone: '+255716002790',
  areaServed: [
    { '@type': 'City', name: 'Paje', sameAs: 'https://en.wikipedia.org/wiki/Paje' },
    { '@type': 'City', name: 'Nungwi', sameAs: 'https://en.wikipedia.org/wiki/Nungwi' },
    { '@type': 'City', name: 'Kendwa' },
    { '@type': 'City', name: 'Jambiani' },
    { '@type': 'City', name: 'Kiwengwa' },
    { '@type': 'City', name: 'Matemwe' },
    { '@type': 'City', name: 'Stone Town', sameAs: 'https://en.wikipedia.org/wiki/Stone_Town' },
    { '@type': 'City', name: 'Fumba' },
    { '@type': 'City', name: 'Bububu' },
    { '@type': 'City', name: 'Chukwani' },
    { '@type': 'City', name: 'Ndevu' },
  ],
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: -6.1918,
      longitude: 39.2056,
    },
    geoRadius: '50000',
  },
})

export const getProductSchema = (name: string, description: string, size?: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name,
  description,
  brand: {
    '@type': 'Brand',
    name: 'Zanzibaba Timber',
  },
  ...(size ? { size } : {}),
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'TZS',
    availability: 'https://schema.org/InStock',
    url: 'https://timber.zanzibaba.com/timber-sizes',
    seller: {
      '@type': 'LocalBusiness',
      name: 'Zanzibaba Timber',
    },
  },
})

export const getSheetProductSchema = (name: string, description: string, price: number, slug: string, thickness: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name,
  description,
  brand: {
    '@type': 'Brand',
    name: 'Zanzibaba Timber',
  },
  size: thickness,
  material: 'Marine-grade plywood / Construction plywood',
  offers: {
    '@type': 'Offer',
    price: price,
    priceCurrency: 'TZS',
    availability: 'https://schema.org/InStock',
    url: `https://timber.zanzibaba.com${slug}`,
    seller: {
      '@type': 'LocalBusiness',
      name: 'Zanzibaba Timber',
    },
    priceValidUntil: '2027-12-31',
  },
})

export const getFAQSchema = (questions: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: questions.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: q.answer,
    },
  })),
})

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `https://timber.zanzibaba.com${item.url}`,
  })),
})

export const getItemListSchema = (items: Array<{ name: string; url: string }>, type: string = 'Product') => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': type,
      name: item.name,
      url: `https://timber.zanzibaba.com${item.url}`,
    },
  })),
})

export const getReviewSchema = (name: string, reviews: Array<{ author: string; text: string; rating: number }>) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1),
    bestRating: '5',
    ratingCount: reviews.length,
  },
  review: reviews.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.author },
    reviewBody: r.text,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: r.rating,
      bestRating: '5',
    },
  })),
})
