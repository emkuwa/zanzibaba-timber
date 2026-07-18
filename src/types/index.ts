export type ProductVariant = {
  size: string
  length: string
  dimensions?: string
  diameter?: string
  sku: string
}

export type HardwoodProduct = {
  id: string
  slug: string
  name: string
  botanicalName: string
  description: string
  metaTitle: string
  metaDescription: string
  imageAlt: string
  features: string[]
  uses: string[]
  image: string
  faq: Array<{ question: string; answer: string }>
  variants: Array<{
    size: '2x6x8' | '2x8x8' | '4x4x8'
    buyingPrice: number
    margin: number
    sellingPrice: number
    sku: string
  }>
}

export type Locale = 'en' | 'sw'

export type TimberSize = {
  id: string
  name: string
  dimensions: string
  description?: string
  pricePerMeter?: string
  popular?: boolean
}

export type Location = {
  id: string
  name: string
  slug: string
  description: string
}

export type Industry = {
  id: string
  name: string
  slug: string
  description: string
  image: string
}

export type Project = {
  id: string
  title: string
  description: string
  location: string
  image: string
  type: 'hotel' | 'villa' | 'government' | 'residential'
}

export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  date: string
  image?: string
  category?: string
  faqs?: Array<{ question: string; answer: string }>
}

export type Testimonial = {
  name: string
  role: string
  text: string
  rating: number
}

export type FAQItem = {
  question: string
  answer: string
}

export type DeliveryStep = {
  step: number
  title: string
  description: string
}
