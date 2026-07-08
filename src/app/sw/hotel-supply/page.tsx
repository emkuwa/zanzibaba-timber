import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata, getBreadcrumbSchema } from '@/lib/seo'
import { generateWhatsAppLink } from '@/lib/data'
import Link from 'next/link'

export const metadata = generateSEOMetadata(
  'Mbao kwa Hoteli Zanzibar — Mbao Pine kwa Hoteli na Resorts',
  'Mbao pine kwa hoteli na resorts Zanzibar — Nungwi, Kendwa, Paje, Stone Town. Bei ya jumla, usafiri Zanzibar zima, na malipo baada ya kupelekwa. Piga +255 716 002 790.',
  'sw',
  '/sw/hotel-supply'
)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Nyumbani', url: '/' },
  { name: 'Mbao kwa Hoteli', url: '/sw/hotel-supply' },
])

export default function SwHotelSupply() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-4 md:mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/sw" className="text-primary-600 hover:underline">Nyumbani</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Mbao kwa Hoteli</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Mbao na Mirunda kwa Hoteli Zanzibar</h1>
            <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Tunatoa mbao pine, mirunda, marine board, na plywood kwa hoteli, resorts, na nyumba za wageni kote Zanzibar — Nungwi, Kendwa, Paje, Stone Town, na Kiwengwa. Bei ya jumla, vipimo maalum, na usafiri wa haraka. Malipo baada ya kupelekwa. Pata bei leo kupitia WhatsApp.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Mbao kwa Ukubwa wa Hoteli</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Tunasambaza mbao kwa hoteli za ukubwa wote — kutoka nyumba za wageni hadi resorts za kifahari. Tunatoa:</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Mbao kwa paa, sakafu, na fremu</li>
                  <li>• Mbao kwa ajili ya ujenzi wa villa za kifahari</li>
                  <li>• Mbao kwa fanicha na mapambo ya ndani</li>
                  <li>• Mbao kwa ajili ya ujenzi wa hoteli za pwani</li>
                  <li>• Ukata maalum kulingana na mahitaji yako</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Huduma Zetu</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Tunahakikisha hoteli yako inapata mbao bora kwa wakati:</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Usafiri wa haraka Zanzibar zima</li>
                  <li>• Malipo baada ya kupelekwa (cash on delivery)</li>
                  <li>• Bei maalum kwa agizo kubwa</li>
                  <li>• Msimamizi maalum wa akaunti kwa hoteli</li>
                  <li>• Ushauri wa kitaalamu wa mbao</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg mb-4">Wasiliana nasi leo kwa bei maalum ya hoteli</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={generateWhatsAppLink('Habari, nahitaji mbao kwa hoteli yangu Zanzibar')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700">
                  WhatsApp
                </a>
                <a href="tel:+255716002790" className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700">
                  Piga Simu +255 716 002 790
                </a>
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
