import { Metadata } from 'next'

export const generateSEOMetadata = (
  title: string,
  description: string,
  locale: string = 'en',
  path: string = ''
): Metadata => {
  const baseUrl = 'https://timber.zanzibaba.com'
  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        'en': `${baseUrl}${path}`,
        'sw': `${baseUrl}/sw${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
      siteName: 'Zanzibaba Timber',
      locale: locale === 'sw' ? 'sw_TZ' : 'en_TZ',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
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
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Kwa Ndevu, Daraja Bovu',
    addressLocality: 'Zanzibar',
    addressCountry: 'TZ',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -6.1667,
    longitude: 39.1667,
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
  ],
  areaServed: [
    { '@type': 'City', name: 'Zanzibar City' },
    { '@type': 'City', name: 'Stone Town' },
    { '@type': 'City', name: 'Paje' },
    { '@type': 'City', name: 'Nungwi' },
    { '@type': 'City', name: 'Kendwa' },
    { '@type': 'City', name: 'Kiwengwa' },
    { '@type': 'City', name: 'Jambiani' },
    { '@type': 'City', name: 'Matemwe' },
  ],
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
