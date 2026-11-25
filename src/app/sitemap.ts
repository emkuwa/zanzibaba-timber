import { MetadataRoute } from 'next'
import { BLOG_POSTS, LOCATIONS, TIMBER_SIZES, SHEET_PRODUCTS, HARDWOOD_PRODUCTS } from '@/lib/data'

import { species } from '@/lib/american-hardwood'

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
  const entries: MetadataRoute.Sitemap = [e('/american-hardwood', 0.95),e('/american-hardwood/enquire',0.8), ...species.map(s=>e('/american-hardwood/'+s.slug,0.85))]

  const high: [string, string?][] = [
    ['/', 'daily'],
    ['/prices'],
    ['/products'],
    ['/timber-sizes'],
    ['/hardwood'],
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
  for (const [path, freq] of midH¶»§q«^