import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata } from '@/lib/seo'
import Link from 'next/link'
import { TIMBER_SIZES } from '@/lib/data'

export const metadata = generateSEOMetadata(
  'Pine Timber Prices in Zanzibar - Updated 2024',
  'Current pine timber prices in Zanzibar. Wholesale rates for 1x6, 1x8, 1x10, 2x2, 2x3, 2x4, 2x6. Cash on Delivery.',
  'en',
  '/prices'
)

export default function Prices() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Timber Prices</h1>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Competitive pricing for all project sizes. Bulk discounts available.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full max-w-3xl mx-auto border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary-600">
                    <th className="text-left py-4 px-4">Size</th>
                    <th className="text-left py-4 px-4">Dimensions</th>
                    <th className="text-center py-4 px-4">Price/Meter</th>
                    <th className="text-center py-4 px-4">Enquire</th>
                  </tr>
                </thead>
                <tbody>
                  {TIMBER_SIZES.map((size) => (
                    <tr key={size.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                      <td className="py-4 px-4 font-semibold">{size.name}</td>
                      <td className="py-4 px-4">{size.dimensions}</td>
                      <td className="py-4 px-4 text-center">Contact for Price</td>
                      <td className="py-4 px-4 text-center">
                        <a
                          href={`https://wa.me/255716002790?text=Hello%20Zanzibaba%20Timber,%20price%20for%20${size.name}%20timber`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 hover:underline"
                        >
                          WhatsApp
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="max-w-2xl mx-auto mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-bold mb-3">Bulk Order Discounts</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Special Sizes Available. Contact us for wholesale pricing.
              </p>
              <Link
                href="/wholesale"
                className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700"
              >
                Wholesale Info
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}