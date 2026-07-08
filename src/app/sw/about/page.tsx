import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ImageWithFallback from '@/components/ImageWithFallback'
import { generateSEOMetadata, getBreadcrumbSchema } from '@/lib/seo'
import Link from 'next/link'

export const metadata = generateSEOMetadata(
  'Kuhusu Zanzibaba Timber — Duka la Mbao za Pine Zanzibar',
  'Jifunze kuhusu Zanzibaba Timber, duka la mbao za pine Zanzibar. Tunahudumia wamiliki nyumba, wabunifu, hoteli, na miradi ya serikali kutoka Kwa Ndevu, Daraja Bovu.',
  'sw',
  '/sw/about'
)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Nyumbani', url: '/' },
  { name: 'Kuhusu', url: '/sw/about' },
])

export default function SwAbout() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-4 md:mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/sw" className="text-primary-600 hover:underline">Nyumbani</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Kuhusu</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Kuhusu Zanzibaba Timber</h1>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ImageWithFallback src="/images/gallery/timber-yard-aerial-view.jpg" alt="Yadi ya Mbao Zanzibaba — Kwa Ndevu, Daraja Bovu" aspectRatio="4/3" className="w-full rounded-lg shadow-lg" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="prose dark:prose-invert">
                <p className="text-lg font-semibold">Duka la mbao, mirunda, marine board na plywood Zanzibar tangu 2010.</p>
                <p>Kwa Ndevu, Daraja Bovu, Zanzibar, tunauza mbao za pine, mirunda, marine board, na plywood kwa wamiliki nyumba, wabunifu, hoteli, na miradi ya serikali kote kisiwa. Sisi ni wauzaji na wasambazaji wa mbao na vifaa vya ujenzi Zanzibar.</p>
                <p>Tunatoa mbao za ubora — mbao kavu, mbao nyeupe za pine, mbao za dawa (treated), na mbao zinazodumu muda mrefu. Mbao zetu zinaanguliwa kwa hali ya hewa ya tropiki ya Zanzibar. Kila kipande kinakaguliwa kabla ya kusafirishwa.</p>
                <h3>Huduma Zetu:</h3>
                <ul>
                  <li>Ugavi wa nyumba na wabunifu</li>
                  <li>Mbao kwa hoteli na villa</li>
                  <li>Ugavi wa miradi ya serikali</li>
                  <li>Agizo la jumla na bei nafuu</li>
                  <li>Usafiri Zanzibar Zima</li>
                </ul>
                <div className="mt-8">
                  <a href="https://wa.me/255716002790?text=Habari%20Zanzibaba%20Timber" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700">
                    Pata Anda
                  </a>
                </div>
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
