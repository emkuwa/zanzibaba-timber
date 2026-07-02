export type ProductVariant = {
  size: string
  length: string
  dimensions?: string
  diameter?: string
  sku: string
  price?: number
}

export type ProductPrice = {
  size: string
  length: string
  price: number
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
