import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import PriceNotice from '@/components/PriceNotice'
import TransportCalculator from '@/components/TransportCalculator'
import { generateSEOMetadata } from '@/lib/seo'
import { PRODUCT_PRICES, PRODUCT_VARIANTS, TIMBER_SIZES, formatTZS, sizeToSlug } from '@/lib/data'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export const metadata = generateSEOMetadata(
  'Pine Timber Prices in Zanzibar - Updated 2026',
  'Current pine timber prices in Zanzibar. 2x2, 2x4, 1x6, 1x8, 1x10 in 12ft. 2x2, 2x3, 2x4, 2x6, 2x8, 1x4, 1x6, 1x8, 1x10 in 18ft. Cash on Delivery.',
  'en',
  '/prices'
)

function PriceTable({ length, title }: { length: string; title: string }) {
  const variants = PRODUCT_VARIANTS.filter(v => v.length === length && v.price)
  const poles = length === '18ft' ? PRODUCT_VARIANTS.filter(v => v.size === 'Treated Wood Poles') : []

  return (
    <div className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-primary-600">
              <th className="text-left py-3 px-3 text-sm">Size</th>
              <th className="text-left py-3 px-3 text-sm">Dimensions</th>
              <th className="text-center py-3 px-3 text-sm">Length</th>
              <th className="text-right py-3 px-3 text-sm">Price (TZS)</th>
              <th className="text-center py-3 px-3 text-sm">Order</th>
            </tr>
          </thead>
          <tbody>
            {variants.map((v) => (
              <tr key={v.sku} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="py-3 px-3 font-semibold text-sm">
                  <Link href={`/timber-sizes/${sizeToSlug(v.size)}?length=${v.length}`} className="text-primary-600 hover:underline">
                    {v.size}
                  </Link>
                </td>
                <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">{v.dimensions}</td>
                <td className="py-3 px-3 text-center text-sm">{v.length}</td>
                <td className="py-3 px-3 text-right font-bold text-sm">{v.price ? formatTZS(v.price) : '-'}</td>
                <td className="py-3 px-3 text-center">
                  <a
                    href={`https://wa.me/255716002790?text=Hello%20Zanzibaba%20Timber,%20I%20need%20${v.size}%20${v.length}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 text-xs font-semibold"
                  >
                    <MessageCircle className="w-3 h-3" /> WhatsApp
                  </a>
                </td>
              </tr>
            ))}
            {poles.length > 0 && (
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 bg-amber-50/50 dark:bg-amber-900/10">
                <td className="py-3 px-3 font-semibold text-sm">Treated Wood Poles</td>
                <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">2-6" diameter</td>
                <td className="py-3 px-3 text-center text-sm">{length}</td>
                <td className="py-3 px-3 text-right font-bold text-sm">{formatTZS(10500)}</td>
                <td className="py-3 px-3 text-center">
                  <a
                    href="https://wa.me/255716002790?text=Hello%20Zanzibaba%20Timber,%20I%20need%20Treated%20Wood%20Poles"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 text-xs font-semibold"
                  >
                    <MessageCircle className="w-3 h-3" /> WhatsApp
                  </a>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function Prices() {
  return (
    <>
      <Header />
      <main>
        <section className="py-10 md:py-16 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">Timber Prices</h1>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto text-sm md:text-base">
              Competitive pricing for all project sizes. Bulk discounts available.
            </p>

            <div className="max-w-5xl mx-auto mb-8">
              <PriceNotice />
            </div>

            <div className="max-w-5xl mx-auto">
              <PriceTable length="18ft" title="18ft Timber Prices" />
              <PriceTable length="12ft" title="12ft Timber Prices" />
            </div>

            <div className="max-w-5xl mx-auto mt-8">
              <TransportCalculator />
            </div>

            <div className="max-w-2xl mx-auto mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-bold text-sm md:text-base mb-3">Bulk Order Discounts</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                Special Sizes Available. Contact us for wholesale pricing.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link href="/wholesale" className="inline-block bg-primary-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-primary-700 text-sm">
                  Wholesale Info
                </Link>
                <Link href="/timber-sizes" className="inline-block border border-primary-600 text-primary-600 px-5 py-2 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-700 text-sm">
                  View All Sizes
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}