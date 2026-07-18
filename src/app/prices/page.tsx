import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import PriceNotice from '@/components/PriceNotice'
import TransportCalculator from '@/components/TransportCalculator'
import { generateSEOMetadata, getBreadcrumbSchema } from '@/lib/seo'
import { PRODUCT_VARIANTS, formatTZS, sizeToSlug, formatVariantLabel, formatHardwoodSize, SHEET_PRODUCTS, HARDWOOD_PRODUCTS } from '@/lib/data'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import Image from 'next/image'

export const metadata = generateSEOMetadata(
  'Marine Board, Plywood, Teak Wood Poles & Timber Prices in Zanzibar - Updated 2026',
  'Current marine board, plywood, teak wood poles and timber prices in Zanzibar. Marine board 18mm and 12mm. Plywood 18mm, 15mm, 12mm, 9mm, 6mm, 3mm. Timber 2x2, 2x4, 1x6, 1x8, 1x10. Teak wood poles 2"-6". Free Delivery Across Zanzibar.',
  'en',
  '/prices'
)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Prices', url: '/prices' },
])

function CategoryHeader({ id, title, image, description, features, uses }: {
  id: string
  title: string
  image: string
  description: string
  features: string[]
  uses: string[]
}) {
  return (
    <div id={id} className="scroll-mt-24 mb-6 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-sm">
      <div className="relative min-h-64 md:min-h-72">
        <Image src={image} alt={`${title} products available from Zanzibaba Timber Zanzibar`} fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/25" />
        <div className="relative z-10 max-w-3xl p-6 md:p-10 text-white">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-300">Product category</p>
          <h2 className="mb-3 text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="mb-5 text-sm md:text-base leading-relaxed text-gray-100">{description}</p>
          <div className="grid gap-4 sm:grid-cols-2 text-sm">
            <div><h3 className="mb-2 font-bold text-primary-200">Key qualities</h3><ul className="space-y-1">{features.map(feature => <li key={feature}>✓ {feature}</li>)}</ul></div>
            <div><h3 className="mb-2 font-bold text-primary-200">Recommended uses</h3><ul className="space-y-1">{uses.map(use => <li key={use}>• {use}</li>)}</ul></div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PriceTable({ length, title }: { length: string; title: string }) {
  const variants = PRODUCT_VARIANTS.filter(v => v.length === length && v.price && v.size !== 'Wood Poles')

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
                    {formatVariantLabel(v)}
                  </Link>
                </td>
                <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">{v.dimensions}</td>
                <td className="py-3 px-3 text-center text-sm">{v.length.replace('ft', 'feet')}</td>
                <td className="py-3 px-3 text-right font-bold text-sm">{v.price ? formatTZS(v.price) : '-'}</td>
                <td className="py-3 px-3 text-center">
                  <a
                    href={`https://wa.me/255716002790?text=${encodeURIComponent(`Hello Zanzibaba Timber, I would like to order ${formatVariantLabel(v)}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 text-xs font-semibold"
                  >
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

export default function Prices() {
  return (
    <>
      <Header />
      <main>
        <section className="py-10 md:py-16 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-3">Marine Board, Plywood & Timber Prices in Zanzibar</h1>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto text-sm md:text-base">
              Current marine board, plywood and timber prices in Zanzibar. Competitive pricing for all project sizes. Bulk discounts available.
            </p>

            <div className="max-w-5xl mx-auto mb-8">
              <PriceNotice />
            </div>

            <nav aria-label="Product categories" className="max-w-5xl mx-auto mb-10 flex flex-wrap justify-center gap-2">
              {[
                ['treated-softwood', 'Treated Softwood'], ['hardwood', 'Hardwood'], ['wood-poles', 'Wood Poles'],
                ['marine-board', 'Marine Board'], ['plywood', 'Plywood'],
              ].map(([id, label]) => <a key={id} href={`#${id}`} className="rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 hover:bg-primary-100 dark:border-primary-800 dark:bg-primary-900/20 dark:text-primary-300">{label}</a>)}
            </nav>

            <div className="max-w-5xl mx-auto">
              <CategoryHeader
                id="treated-softwood"
                title="Treated Softwood (Pine)"
                image="/images/gallery/treated-pine-timber.jpg"
                description="Pressure-treated pine timber prepared for Zanzibar's humid, termite-prone climate. It is a dependable and economical choice for everyday structural construction."
                features={['Treated against termites and decay', 'Kiln-dried for improved stability', 'Easy to cut, nail and install', 'Cost-effective structural timber']}
                uses={['Roof trusses and rafters', 'Wall and ceiling framing', 'Formwork and general construction', 'Fencing and support structures']}
              />
              <PriceTable length="18ft" title="18ft Timber Prices in Zanzibar" />
              <PriceTable length="12ft" title="12ft Timber Prices in Zanzibar" />
            </div>

            <div className="max-w-5xl mx-auto mt-12">
              <CategoryHeader
                id="hardwood"
                title="Hardwood — Mninga, Mvule & Mkongo"
                image="/images/gallery/hardwood-mninga-timber.jpg"
                description="Premium dense African hardwood species selected for strength, attractive natural grain, durability and long service life in quality construction and joinery."
                features={['High strength and wear resistance', 'Rich natural colour and grain', 'Long service life', 'Suitable for premium finishing']}
                uses={['Doors, frames and windows', 'Furniture and cabinetry', 'Flooring, stairs and decking', 'Structural and architectural joinery']}
              />
              <h2 className="text-xl md:text-2xl font-bold mb-4">Hardwood Prices in Zanzibar</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead><tr className="border-b-2 border-primary-600"><th className="text-left py-3 px-3 text-sm">Species</th><th className="text-left py-3 px-3 text-sm">Size</th><th className="text-right py-3 px-3 text-sm">Price (TZS)</th><th className="text-center py-3 px-3 text-sm">Order</th></tr></thead>
                  <tbody>{HARDWOOD_PRODUCTS.flatMap(product => product.variants.map(variant => (
                    <tr key={variant.sku} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3 px-3 font-semibold text-sm"><Link href={`/hardwood/${product.slug}`} className="text-primary-600 hover:underline">{product.name}</Link></td>
                      <td className="py-3 px-3 text-sm">{formatHardwoodSize(variant.size)}</td>
                      <td className="py-3 px-3 text-right font-bold text-sm">{formatTZS(variant.sellingPrice)}</td>
                      <td className="py-3 px-3 text-center"><a href={`https://wa.me/255716002790?text=${encodeURIComponent(`Hello Zanzibaba Timber, I would like to order ${product.name} ${formatHardwoodSize(variant.size)}`)}`} className="text-green-600 text-xs font-semibold" target="_blank" rel="noopener noreferrer">Add to Order</a></td>
                    </tr>
                  )))}</tbody>
                </table>
              </div>
            </div>

            <div className="max-w-5xl mx-auto mt-12">
              <CategoryHeader
                id="wood-poles"
                title="Teak Wood Poles (Mitiki / Mirunda)"
                image="/images/gallery/teak-wood-poles-mitiki.jpg"
                description="Naturally durable round teak poles available in 2–6 inch diameters and 18feet length. Their natural resistance makes them reliable for exposed and ground-contact applications."
                features={['Naturally termite resistant', 'Strong round structural form', 'Suitable for tropical outdoor use', 'Available in multiple diameters']}
                uses={['Building and veranda posts', 'Fencing and farm structures', 'Pergolas and shade structures', 'Landscape and resort construction']}
              />
              <h2 className="text-xl md:text-2xl font-bold mb-4">Wood Pole Prices in Zanzibar</h2>
              <div className="overflow-x-auto"><table className="w-full border-collapse"><thead><tr className="border-b-2 border-primary-600"><th className="text-left py-3 px-3 text-sm">Product</th><th className="text-left py-3 px-3 text-sm">Full Dimensions</th><th className="text-right py-3 px-3 text-sm">Price (TZS)</th><th className="text-center py-3 px-3 text-sm">Order</th></tr></thead><tbody><tr className="border-b border-gray-200 dark:border-gray-700"><td className="py-3 px-3 font-semibold text-sm"><Link href="/treated-wood-poles" className="text-primary-600 hover:underline">Teak Wood Poles</Link></td><td className="py-3 px-3 text-sm">2–6&quot; diameter x 18feet</td><td className="py-3 px-3 text-right font-bold text-sm">{formatTZS(PRODUCT_VARIANTS.find(v => v.size === 'Wood Poles')?.price || 11500)}</td><td className="py-3 px-3 text-center"><a href="https://wa.me/255716002790?text=Hello%20Zanzibaba%20Timber%2C%20I%20would%20like%20to%20order%20wood%20poles" target="_blank" rel="noopener noreferrer" className="text-green-600 text-xs font-semibold">Add to Order</a></td></tr></tbody></table></div>
            </div>

            <div className="max-w-5xl mx-auto mt-12">
              <CategoryHeader
                id="marine-board"
                title="Marine Board"
                image="/images/gallery/marine-board-zanzibar.jpg"
                description="Moisture-resistant construction sheets made for concrete formwork and projects exposed to humidity. The smooth coated face supports cleaner concrete finishes and repeated use when handled correctly."
                features={['Moisture-resistant coated surface', 'Strong and dimensionally stable', 'Smooth formwork finish', 'Reusable with correct handling']}
                uses={['Concrete columns and slabs', 'Foundation and wall formwork', 'Wet-area construction', 'Heavy-duty site protection']}
              />
              <h2 className="text-xl md:text-2xl font-bold mb-4">Marine Board Prices in Zanzibar</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary-600">
                      <th className="text-left py-3 px-3 text-sm">Product</th>
                      <th className="text-left py-3 px-3 text-sm">Thickness</th>
                      <th className="text-left py-3 px-3 text-sm">Sheet Size</th>
                      <th className="text-right py-3 px-3 text-sm">Price (TZS)</th>
                      <th className="text-center py-3 px-3 text-sm">Order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SHEET_PRODUCTS.filter(p => p.categoryId === 'marine-board').map((product) => (
                      <tr key={product.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="py-3 px-3 font-semibold text-sm">
                          <Link href={`/marine-board/${product.slug}`} className="text-primary-600 hover:underline">{product.name}</Link>
                        </td>
                        <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">{product.thickness}</td>
                        <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">{product.sheetSize}</td>
                        <td className="py-3 px-3 text-right font-bold text-sm">{formatTZS(product.finalPrice)}</td>
                        <td className="py-3 px-3 text-center">
                          <a
                            href={`https://wa.me/255716002790?text=Hello%20Zanzibaba%20Timber,%20I%20need%20${product.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 text-xs font-semibold"
                          >
                            <MessageCircle className="w-3 h-3" /> WhatsApp
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">Prices Excluding VAT • Free Delivery Across Zanzibar</p>
            </div>

            <div className="max-w-5xl mx-auto mt-12">
              <CategoryHeader
                id="plywood"
                title="Construction Plywood"
                image="/images/gallery/construction-plywood-zanzibar.jpg"
                description="Versatile layered wood sheets offered in several thicknesses for interior construction, furniture, partitions and general site work."
                features={['Consistent flat sheet format', 'Multiple thickness options', 'Easy to cut and fasten', 'Versatile and economical']}
                uses={['Furniture and cabinetry', 'Partitions and wall lining', 'Ceilings and interior panels', 'Packaging and light formwork']}
              />
              <h2 className="text-xl md:text-2xl font-bold mb-4">Plywood Prices in Zanzibar</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary-600">
                      <th className="text-left py-3 px-3 text-sm">Product</th>
                      <th className="text-left py-3 px-3 text-sm">Thickness</th>
                      <th className="text-left py-3 px-3 text-sm">Sheet Size</th>
                      <th className="text-right py-3 px-3 text-sm">Price (TZS)</th>
                      <th className="text-center py-3 px-3 text-sm">Order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SHEET_PRODUCTS.filter(p => p.categoryId === 'plywood').map((product) => (
                      <tr key={product.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                        <td className="py-3 px-3 font-semibold text-sm">
                          <Link href={`/plywood/${product.slug}`} className="text-primary-600 hover:underline">{product.name}</Link>
                        </td>
                        <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">{product.thickness}</td>
                        <td className="py-3 px-3 text-sm text-gray-600 dark:text-gray-300">{product.sheetSize}</td>
                        <td className="py-3 px-3 text-right font-bold text-sm">{formatTZS(product.finalPrice)}</td>
                        <td className="py-3 px-3 text-center">
                          <a
                            href={`https://wa.me/255716002790?text=Hello%20Zanzibaba%20Timber,%20I%20need%20${product.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 text-xs font-semibold"
                          >
                            <MessageCircle className="w-3 h-3" /> WhatsApp
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">Prices Excluding VAT • Free Delivery Across Zanzibar</p>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Footer />
      <FloatingButtons />
    </>
  )
}
