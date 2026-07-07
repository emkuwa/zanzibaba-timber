import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata, getFAQSchema, getItemListSchema, getBreadcrumbSchema } from '@/lib/seo'
import { PRODUCT_VARIANTS, TIMBER_SIZES, HOMEPAGE_FAQ, formatTZS, sizeToSlug, formatVariantLabel } from '@/lib/data'
import PriceNotice from '@/components/PriceNotice'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export const metadata = generateSEOMetadata(
  'Saizi za Mbao Pine Zanzibar | 1x6, 1x8, 1x10, 2x2, 2x3, 2x4, 2x6 - 12ft na 18ft',
  'Orodha kamili ya saizi za mbao pine Zanzibar. 1x6, 1x8, 1x10 kwa 12ft. 2x2, 2x3, 2x4, 2x6 kwa 12ft na 18ft. Mbao bora za ujenzi na utoaji wa kisiwa kima.',
  'sw',
  '/sw/timber-sizes'
)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Nyumbani', url: '/' },
  { name: 'Saizi za Mbao', url: '/sw/timber-sizes' },
])

export default function SwTimberSizes() {
  const ft18Variants = PRODUCT_VARIANTS.filter(v => v.length === '18ft')
  const ft12Variants = PRODUCT_VARIANTS.filter(v => v.length === '12ft')

  return (
    <>
      <Header />
      <main>
        <section className="py-8 md:py-16 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-4 md:mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/sw" className="text-primary-600 hover:underline">Nyumbani</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Saizi za Mbao</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">Saizi za Mbao Pine Zanzibar</h1>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto text-sm md:text-base">
              Orodha kamili ya saizi za mbao pine wa ubora. Zina disponzwa kwa urefu 18ft na 12ft kwa miradi yote ya ujenzi Zanzibar.
            </p>
            <div className="max-w-5xl mx-auto mb-8"><PriceNotice /></div>

            <div className="max-w-5xl mx-auto mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Saizi 18ft</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {ft18Variants.map((v) => (
                  <Link key={v.sku} href={`/sw/timber-sizes/${sizeToSlug(v.size)}?length=18ft`} className="group bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
                    <div className="text-sm font-bold text-primary-600 mb-1">{formatVariantLabel(v)}</div>
                    <div className="text-[10px] text-gray-400 mb-1">{v.dimensions}</div>
                    {v.price && <div className="text-sm font-bold text-primary-700 mb-1">{formatTZS(v.price)}</div>}
                    <span className="text-xs font-semibold text-primary-600 group-hover:underline">Tazama &gt;&gt;&gt;</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="max-w-5xl mx-auto mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Saizi 12ft</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {ft12Variants.map((v) => (
                  <Link key={v.sku} href={`/sw/timber-sizes/${sizeToSlug(v.size)}?length=12ft`} className="group bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
                    <div className="text-sm font-bold text-primary-600 mb-1">{formatVariantLabel(v)}</div>
                    <div className="text-[10px] text-gray-400 mb-1">{v.dimensions}</div>
                    {v.price && <div className="text-sm font-bold text-primary-700 mb-1">{formatTZS(v.price)}</div>}
                    <span className="text-xs font-semibold text-primary-600 group-hover:underline">Tazama &gt;&gt;&gt;</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Footer />
      <FloatingButtons />
    </>
  )
}
