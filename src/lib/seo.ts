import { Metadata } from 'next'

const OG_IMAGE = 'https://timber.zanzibaba.com/images/gallery/zanzibaba-timber-hero-banner.jpg'

export const generateSEOMetadata = (
  title: string,
  description: string,
  locale: string = 'en',
  path: string = '',
  canonicalPath?: string,
  keywords?: string[]
): Metadata => {
  const baseUrl = 'https://timber.zanzibaba.com'
  const swPath = locale === 'sw' ? path : `/sw${path}`
  const enPath = locale === 'sw' ? path.replace(/^\/sw/, '') || '/' : path
  return {
    title,
    description,
    keywords: keywords?.join(', '),
    alternates: {
      canonical: `${baseUrl}${canonicalPath || path}`,
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
  alternateName: 'Zanzibaba Timber Zanzibar',
  image: 'https://timber.zanzibaba.com/images/gallery/zanzibaba-timber-hero-banner.jpg',
  '@id': 'https://timber.zanzibaba.com/#localbusiness',
  url: 'https://timber.zanzibaba.com',
  telephone: '+255716002790',
  email: 'info@zanzibaba.com',
  description: 'Premium timber and teak wood poles supplier in Zanzibar. High quality timber, marine board, plywood, and wood poles (mirunda) for construction, delivered across the island.',
  priceRange: '$$',
  currenciesAccepted: 'TZS',
  paymentAccepted: 'Cash, Mobile Money, Bank Transfer',
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
    'https://facebook.com/zanzibaba',
    'https://instagram.com/zanzibaba',
    'https://linkedin.com/company/zanzibaba',
    'https://youtube.com/@zanzibaba',
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
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Timber, Plywood & Marine Board Products',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Treated Softwood Timber', url: 'https://timber.zanzibaba.com/timber-sizes' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Hardwood Timber', url: 'https://timber.zanzibaba.com/hardwood' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Treated Wood Poles', url: 'https://timber.zanzibaba.com/treated-wood-poles' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Marine Board', url: 'https://timber.zanzibaba.com/marine-board' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Plywood', url: 'https://timber.zanzibaba.com/plywood' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '85',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Ali Hassan' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Zanzibaba Timber has been our go-to supplier for over 3 years. The quality of their treated pine is consistently excellent, and their delivery to Nungwi is always on time.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sophie Laurent' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'We used Zanzibaba Timber for our entire beachfront hotel construction. The 2x4 and 2x6 treated pine has held up beautifully against the coastal elements.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'John Mwangi' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Best timber supplier in Zanzibar. Fast delivery, honest prices, and the quality is always top-notch. Highly recommended for any construction project.',
    },
  ],
})

export const getBlogPostingSchema = (post: { title: string; excerpt: string; date: string; slug: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  image: OG_IMAGE,
  author: {
    '@type': 'Organization',
    name: 'Zanzibaba Timber',
    url: 'https://timber.zanzibaba.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Zanzibaba Timber',
    logo: {
      '@type': 'ImageObject',
      url: OG_IMAGE,
    },
  },
  datePublished: post.date,
  dateModified: post.date,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `https://timber.zanzibaba.com/blog/${post.slug}`,
  },
})

export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://timber.zanzibaba.com/#website',
  url: 'https://timber.zanzibaba.com',
  name: 'Zanzibaba Timber',
  description: 'Premium timber and teak wood poles supplier in Zanzibar. High quality timber, marine board, plywood, and wood poles (mirunda) for construction.',
  publisher: {
    '@type': 'Organization',
    name: 'Zanzibaba Timber',
    logo: {
      '@type': 'ImageObject',
      url: OG_IMAGE,
    },
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://timber.zanzibaba.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
})

export const getWebPageSpeakableSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://timber.zanzibaba.com/#webpage',
  url: 'https://timber.zanzibaba.com',
  dateModified: new Date().toISOString(),
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['.hero-heading', '.product-title', '.product-description', '.faq-answer'],
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

export const getServiceSchema = (services: Array<{ name: string; description: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Zanzibaba Timber — Supply Services',
  description: 'Timber supply services for hotels, villas, government projects and wholesale across Zanzibar',
  numberOfItems: services.length,
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: `https://timber.zanzibaba.com${s.url}`,
    item: {
      '@type': 'Service',
      name: s.name,
      description: s.description,
      url: `https://timber.zanzibaba.com${s.url}`,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Zanzibaba Timber',
        url: 'https://timber.zanzibaba.com',
      },
      areaServed: {
        '@type': 'City',
        name: 'Zanzibar',
        containedInPlace: { '@type': 'Country', name: 'Tanzania' },
      },
      serviceType: 'Timber Supply',
    },
  })),
})

export const getAggregateRatingSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://timber.zanzibaba.com/#localbusiness',
  name: 'Zanzibaba Timber',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '85',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Ali Hassan' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Zanzibaba Timber has been our go-to supplier for over 3 years. The quality of their treated pine is consistently excellent, and their delivery to Nungwi is always on time.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sophie Laurent' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'We used Zanzibaba Timber for our entire beachfront hotel construction. The 2x4 and 2x6 treated pine has held up beautifully against the coastal elements.',
    },
  ],
})
