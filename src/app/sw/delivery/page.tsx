import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata, getBreadcrumbSchema } from '@/lib/seo'
import { LOCATIONS, generateWhatsAppLink } from '@/lib/data'
import Link from 'next/link'

export const metadata = generateSEOMetadata(
  'Utoaji Mbao Zanzibar — Usafiri Bure Kisiwa Nzima | Malipo Baada ya Kupelekwa',
  'Usafiri bure wa mbao kote Zanzibar — Paje, Nungwi, Kendwa, Stone Town, Jambiani, Matemwe, Kiwengwa, Fumba, Chukwani, Bububu. Malipo baada ya kupelekwa. Saa 24-48. Piga simu +255 716 002 790.',
  'sw',
  '/sw/delivery'
)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Nyumbani', url: '/' },
  { name: 'Utoaji', url: '/sw/delivery' },
])

export default function SwDelivery() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-4 md:mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/sw" className="text-primary-600 hover:underline">Nyumbani</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Utoaji</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Utoaji Mbao Zanzibar</h1>
            <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Usafiri bure kwa maagizo yote Zanzibar zima. Tunawasilisha mbao kote kisiwani kwa haraka na uhakika. Malipo baada ya kupelekwa yanakubalika. Saa 24-48 kwa bidhaa za kawaida.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Maeneo Tunayowasilisha</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Tunawasilisha kote kisiwani Zanzibar:</p>
                <ul className="grid grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
                  {LOCATIONS.slice(0, 10).map((loc) => (
                    <li key={loc.slug}>• {loc.name}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Huduma za Utoaji</h2>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li><strong>Usafiri Bure:</strong> Tunatoa usafiri bure kwa maagizo yote Zanzibar zima</li>
                  <li><strong>Kasi:</strong> Utoaji ndani ya saa 24-48 kwa bidhaa za kawaida</li>
                  <li><strong>Malipo:</strong> Malipo baada ya kupelekwa (cash on delivery, M-Pesa, Tigo Pesa)</li>
                  <li><strong>Mizigo Mikubwa:</strong> Tunaweza kubeba mizigo mikubwa kwa gari maalum</li>
                  <li><strong>Kuegesha:</strong> Tunakuja mpaka kwenye tovuti yako ya ujenzi</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg mb-4">Panga utoaji wako leo</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={generateWhatsAppLink('Habari, nahitaji mbao kusafirishwa Zanzibar')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700">
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
