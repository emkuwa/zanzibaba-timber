import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata, getBreadcrumbSchema } from '@/lib/seo'
import { generateWhatsAppLink } from '@/lib/data'
import Link from 'next/link'

export const metadata = generateSEOMetadata(
  'Mbao Jumla Zanzibar — Bei za Wingi kwa Agizo Kubwa | Zanzibaba Timber',
  'Mbao jumla Zanzibar — bei za wingi (wholesale) kwa wafanyabiashara. Punguzo la 15% kwa agizo la m 500+, 20% kwa m 1000+. Meneja maalum wa akaunti, usafiri bure, malipo baada ya kupelekwa. Piga simu +255 716 002 790.',
  'sw',
  '/sw/wholesale'
)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Nyumbani', url: '/' },
  { name: 'Mbao Jumla', url: '/sw/wholesale' },
])

export default function SwWholesale() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-4 md:mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/sw" className="text-primary-600 hover:underline">Nyumbani</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Mbao Jumla</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Mbao Jumla Zanzibar — Bei za Wingi</h1>
            <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Punguzo kubwa kwa agizo la mbao jumla Zanzibar. Bei za wingi kwa wafanyabiashara, wakandarasi, na wasambazaji wanaohitaji mbao kwa wingi. Usafiri bure Zanzibar zima.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-primary-600 mb-2">15%</h3>
                <p className="text-gray-600 dark:text-gray-300">Punguzo kwa agizo la mita 500+</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-green-600 mb-2">20%</h3>
                <p className="text-gray-600 dark:text-gray-300">Punguzo kwa agizo la mita 1000+</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-primary-600 mb-2">Maalum</h3>
                <p className="text-gray-600 dark:text-gray-300">Bei maalum kwa agizo kubwa zaidi</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-4">Faida za Mbao Jumla</h2>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Bei za jumla za ushindani</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Meneja maalum wa akaunti</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Utoaji uliopangwa kulingana na ratiba yako</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Ukata maalum kwa mahitaji yako</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Huduma ya kipaumbele</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-1">✓</span> Malipo baada ya kupelekwa</li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-lg mb-4">Pata bei ya jumla leo</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={generateWhatsAppLink('Habari, nahitaji bei ya mbao jumla Zanzibar')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700">
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
