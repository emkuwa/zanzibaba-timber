import { MetadataRoute } from 'next'
import { BLOG_POSTS, LOCATIONS, TIMBER_SIZES, SHEET_PRODUCTS } from '@/lib/data'

const BASE_URL = 'https://timber.zanzibaba.com'

function e(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'weekly',
  lastModified?: string
) {
  return {
    url: `${BASE_URL}${path}`,
    lastModified: lastModified ?? new Date(),
    changeFrequency,
    priority,
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = []

  const high: [string, string?][] = [
    ['/', 'daily'],
    ['/prices'],
    ['/timber-sizes'],
    ['/marine-board'],
    ['/plywood'],
    ['/treated-wood-poles'],
  ]
  for (const [path, freq] of high) entries.push(e(path, 0.95, freq as any ?? 'weekly'))

  const midHigh: [string, string?][] = [
    ['/marine-board-zanzibar', 'monthly'],
    ['/plywood-zanzibar', 'monthly'],
    ['/timber-zanzibar', 'monthly'],
    ['/marine-board-price-zanzibar', 'monthly'],
    ['/plywood-price-zanzibar', 'monthly'],
    ['/construction-plywood-zanzibar', 'monthly'],
    ['/concrete-formwork-marine-board', 'monthly'],
    ['/about-zanzibaba-timber', 'monthly'],
  ]
  for (const [path, freq] of midHigh) entries.push(e(path, 0.90, freq as any))

  entries.push(e('/locations', 0.85, 'monthly'))
  entries.push(e('/blog', 0.85, 'weekly'))

  const standard: [string, string?][] = [
    ['/about', 'monthly'],
    ['/contact', 'monthly'],
    ['/delivery'],
    ['/gallery'],
    ['/government-supply'],
    ['/hotel-supply'],
    ['/projects'],
    ['/villa-supply'],
    ['/wholesale'],
  ]
  for (const [path, freq] of standard) entries.push(e(path, 0.7, freq as any ?? 'weekly'))

  const swahiliHigh: [string, string?][] = [
    ['/sw', 'daily'],
    ['/sw/prices'],
    ['/sw/timber-sizes'],
    ['/sw/marine-board'],
    ['/sw/plywood'],
    ['/sw/mbao-za-dawa'],
  ]
  for (const [path, freq] of swahiliHigh) entries.push(e(path, 0.95, freq as any ?? 'weekly'))

  entries.push(e('/sw/blog', 0.85, 'weekly'))

  const swahiliStandard: [string, string?][] = [
    ['/sw/about', 'monthly'],
    ['/sw/contact', 'monthly'],
    ['/sw/delivery'],
    ['/sw/hotel-supply'],
    ['/sw/bati'],
    ['/sw/mirunda'],
    ['/sw/wholesale'],
  ]
  for (const [path, freq] of swahiliStandard) entries.push(e(path, 0.7, freq as any ?? 'weekly'))

  for (const post of BLOG_POSTS) {
    entries.push(e(`/blog/${post.slug}`, 0.70, 'monthly', post.date))
    entries.push(e(`/sw/blog/${post.slug}`, 0.70, 'monthly', post.date))
  }

  for (const loc of LOCATIONS) {
    entries.push(e(`/locations/${loc.slug}`, 0.85, 'monthly'))
  }

  for (const size of TIMBER_SIZES) {
    entries.push(e(`/timber-sizes/${size.id}`, 0.90, 'weekly'))
  }

  for (const product of SHEET_PRODUCTS) {
    if (product.categoryId === 'marine-board') {
      entries.push(e(`/marine-board/${product.slug}`, 0.90, 'weekly'))
    }
  }

  for (const product of SHEET_PRODUCTS) {
    if (product.categoryId === 'plywood') {
      entries.push(e(`/plywood/${product.slug}`, 0.90, 'weekly'))
    }
  }

  return entries
}
