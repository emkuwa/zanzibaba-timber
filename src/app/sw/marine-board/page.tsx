import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import Link from 'next/link'
import { generateSEOMetadata, getFAQSchema, getItemListSchema, getBreadcrumbSchema } from '@/lib/seo'
import { SHEET_PRODUCTS, SHEET_PRODUCT_FAQ, LOCATIONS, generateWhatsAppLink, formatTZS } from '@/lib/data'
import PriceNotice from '@/components/PriceNotice'
import { Phone, MessageCircle, Shield, Droplets, CheckCircle, Star, ArrowRight } from 'lucide-react'

export const metadata = generateSEOMetadata(
  'Marine Board Zanzibar — Mbao za Tabaka za Maji | Zanzibaba Timber',
  'Nunua marine board bora Zanzibar. Marine board (mbao za tabaka za maji) kwa formwork ya simenti, ujenzi wa mashua, na ujenzi. Karatasi 18mm na 12mm. Usafiri bure kisiwa kima.',
  'sw',
  '/sw/marine-board'
)

const marineProducts = SHEET_PRODUCTS.filter(p => p.categoryId === 'marine-board')
const breadcrumb = getBreadcrumbSchema([
  { name: 'Nyumbani', url: '/' },
  { name: 'Marine Board', url: '/sw/marine-board' },
])
const itemList = getItemListSchema(
  marineProducts.map(p => ({ name: p.name, url: `/sw/marine-board/${p.slug}` })),
  'Product'
)

export default function SwMarineBoard() {
  return (
    <>
      <Header />
      <main>
        <section className="py-8 md:py-16 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-4 md:mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/sw" className="text-primary-600 hover:underline">Nyumbani</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Marine Board</span>
            </nav>

            <div className="relative w-full h-48 sm:h-56 md:h-72 rounded-lg md:rounded-xl overflow-hidden mb-6 md:mb-8 shadow-lg">
              <Image src="/images/gallery/marine-board-zanzibar.jpg" alt="Msambazaji wa Marine Board Zanzibar" fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">Marine Board <span className="text-primary-300">Zanzibar</span></h1>
                <p className="text-gray-200 mt-1 text-xs sm:text-sm">Plywood ya Maji — Formwork ya Simenti — Ujenzi wa Mashua</p>
              </div>
            </div>

            <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto text-sm md:text-base">
              Marine board ni plywood ya maji iliyotengenezwa kwa resini ya phenolic kwa upinzani mkubwa wa unyevu. Inafaa kwa formwork ya simenti, ujenzi wa mashua, na matumizi yoyote yanayokuwa na maji au unyevu. Inapatikana kwa unene 18mm na 12mm — karatasi 4ft x 8ft zinafikishwa Zanzibar zima.
            </p>

            <div className="max-w-3xl mx-auto mb-8"><PriceNotice /></div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
              {marineProducts.map((product) => (
                <Link key={product.id} href={`/sw/marine-board/${product.slug}`} className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all">
                  <div className="bg-gradient-to-br from-primary-600 to-primary-800 p-6 text-white">
                    <div className="text-sm font-semibold text-primary-200 mb-1">Marine Board</div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Unene {product.thickness}</h2>
                    <div className="text-3xl font-bold">{formatTZS(product.finalPrice)}</div>
                    <div className="text-sm text-primary-200">kwa karatasi (4ft x 8ft)</div>
                    <div className="text-xs text-primary-300 mt-1">Bei haijumuishi VAT.</div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{product.description.slice(0, 150)}...</p>
                    <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:underline">
                      Tazama Maelezo na Bei <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="max-w-3xl mx-auto text-center bg-primary-50 dark:bg-gray-800 rounded-xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-3">Uko Tayari Kununua Marine Board?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">Wasiliana nasi kwa WhatsApp kwa bei za haraka, punguzo za jumla, na kupanga utoaji. Tunajibu ndani ya dakika 30.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={generateWhatsAppLink('Habari Zanzibaba Timber, nahitaji marine board kwa mradi wangu wa ujenzi. Tafadhali shiriki bei na chaguo za utoaji.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  <MessageCircle className="w-4 h-4" /> Omba Anda
                </a>
                <a href="tel:+255716002790" className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  <Phone className="w-4 h-4" /> Piga Sasa
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(SHEET_PRODUCT_FAQ.slice(0, 5))) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <Footer />
      <FloatingButtons />
    </>
  )
}
