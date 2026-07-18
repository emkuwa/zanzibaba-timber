import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import PriceNotice from '@/components/PriceNotice'
import TransportCalculator from '@/components/TransportCalculator'
import { generateSEOMetadata, getBreadcrumbSchema } from '@/lib/seo'
import { PRODUCT_VARIANTS, PRODUCT_VARIANTS as VARIANTS, TIMBER_SIZES, formatTZS, sizeToSlug, formatVariantLabel, SHEET_PRODUCTS } from '@/lib/data'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export const metadata = generateSEOMetadata(
  'Bei za Marine Board, Plywood na Mbao Zanzibar - 2026',
  'Bei za sasa za marine board, plywood na mbao Zanzibar. Marine board 18mm na 12mm. Plywood 18mm, 15mm, 12mm, 9mm, 6mm, 3mm. Mbao 2x2, 2x4, 1x6, 1x8, 1x10. Usafiri bure Zanzibar zima.',
  'sw',
  '/sw/prices'
)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Nyumbani', url: '/' },
  { name: 'Bei', url: '/sw/prices' },
])

function PriceTable({ length, title }: { length: string; title: string }) {
  const variants = VARIANTS.filter(v => v.length === length && v.price)

  return (
    <div className="mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-primary-600">
              <th className="text-left py-3 px-3 text-sm">Saizi</th>
              <th className="text-left py-3 px-3 text-sm">Viwango</th>
              <th className="text-center py-3 px-3 text-sm">Urefu (futi)</th>
              <th className="text-right py-3 px-3 text-sm">Bei (TZS) kwa pic</th>
              <th className="text-center py-3 px-3 text-sm">Agiza</th>
            </tr>
          </thead>
          <tbody>
            {variants.map((v) => (
              <tr key={v.sku} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="py-3 px-3 font-semibold text-sm">
                  <Link href={`/sw/timber-sizes/${sizeToSlug(v.size)}?length=${v.length}`} className="text-primary-600 hover:underline">
                    {formatVariantLabel(v)}
                  </Link>
                </td>
                <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">{v.dimensions}</td>
                <td className="py-3 px-3 text-center text-sm">{v.length.replace('ft', 'feet')}</td>
                <td className="py-3 px-3 text-right font-bold text-sm">{v.price ? formatTZS(v.price) : '-'}</td>
                <td className="py-3 px-3 text-center">
                  <a href={`https://wa.me/255716002790?text=Habari%20Zanzibaba%20Timber%2C%20nahitaji%20${v.size}%20${v.length}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 text-xs font-semibold">
                    <MessageCircle className="w-3 h-3" /> WhatsApp
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function SwPrices() {
  return (
    <>
      <Header />
      <main>
        <section className="py-10 md:py-16 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-4 md:mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/sw" className="text-primary-600 hover:underline">Nyumbani</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Bei</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">Bei za Marine Board, Plywood na Mbao Zanzibar</h1>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto text-sm md:text-base">
              Bei za sasa za marine board, plywood na mbao Zanzibar. Bei nzuri kwa miradi yote. Punguzo kwa jumla zinapatikana.
            </p>
            <div className="max-w-5xl mx-auto mb-8"><PriceNotice /></div>
            <div className="max-w-5xl mx-auto">
              <PriceTable length="18ft" title="Bei za Mbao Futi 18 Zanzibar" />
              <PriceTable length="12ft" title="Bei za Mbao Futi 12 Zanzibar" />
            </div>
            <div className="max-w-5xl mx-auto mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Bei za Marine Board Zanzibar</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary-600">
                      <th className="text-left py-3 px-3 text-sm">Bidhaa</th>
                      <th className="text-left py-3 px-3 text-sm">Unene</th>
                      <th className="text-left py-3 px-3 text-sm">Ukubwa</th>
                      <th className="text-right py-3 px-3 text-sm">Bei (TZS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SHEET_PRODUCTS.filter(p => p.categoryId === 'marine-board').map((product) => (
                      <tr key={product.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="py-3 px-3 font-semibold text-sm"><Link href={`/sw/marine-board/${product.slug}`} className="text-primary-600 hover:underline">{product.name}</Link></td>
                        <td className="py-3 px-3 text-sm text-gray-600">{product.thickness}</td>
                        <td className="py-3 px-3 text-sm text-gray-600">{product.sheetSize}</td>
                        <td className="py-3 px-3 text-right font-bold text-sm">{formatTZS(product.finalPrice)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">Bei haijumuishi VAT.</p>
            </div>
            <div className="max-w-5xl mx-auto mt-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Bei za Plywood Zanzibar</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary-600">
                      <th className="text-left py-3 px-3 text-sm">Bidhaa</th>
                      <th className="text-left py-3 px-3 text-sm">Unene</th>
                      <th className="text-left py-3 px-3 text-sm">Ukubwa</th>
                      <th className="text-right py-3 px-3 text-sm">Bei (TZS)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SHEET_PRODUCTS.filter(p => p.categoryId === 'plywood').map((product) => (
                      <tr key={product.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="py-3 px-3 font-semibold text-sm"><Link href={`/sw/plywood/${product.slug}`} className="text-primary-600 hover:underline">{product.name}</Link></td>
                        <td className="py-3 px-3 text-sm text-gray-600">{product.thickness}</td>
                        <td className="py-3 px-3 text-sm text-gray-600">{product.sheetSize}</td>
                        <td className="py-3 px-3 text-right font-bold text-sm">{formatTZS(product.finalPrice)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">Bei haijumuishi VAT.</p>
            </div>
            <div className="max-w-5xl mx-auto mt-8"><TransportCalculator /></div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Footer />
      <FloatingButtons />
    </>
  )
}
