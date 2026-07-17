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
  woodType: 'pine' | 'teak'
}

export type Locale = 'en' | 'sw'

export type TimberSize = {
  id: string
  name: string
  dimensions: string
  description?: string
  pricePerMeter?: string
  popular?: boolean
  woodType: 'pine' | 'teak'
}

export type Location = {
  id: string
  name: string
  slug: string
  description: string
  uniqueContent?: string
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

export type SheetProductCategory = {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
}

export type OrderItem = {
  id: string
  category: 'timber' | 'sheet'
  label: string
  sizeOrThickness: string
  length: string
  quantity: number
  unitPrice: number
  sku: string
}

export type OrderCustomer = {
  name: string
  phone: string
  location: string
  notes: string
}

export type SheetProduct = {
  id: string
  categoryId: string
  name: string
  slug: string
  thickness: string
  supplierPrice: number
  finalPrice: number
  sheetSize: string
  material: string
  description: string
  applications: string[]
  features: string[]
  advantages: string[]
  moistureResistance: string
  suitableProjects: string[]
  buyingGuide: string
  storageTips: string
  installationTips: string
  faqs: Array<{ question: string; answer: string }>
  seoTitle: string
  seoDescription: string
  keywords: string[]
}
