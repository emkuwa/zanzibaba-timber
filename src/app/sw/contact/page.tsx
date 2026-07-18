import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ImageWithFallback from '@/components/ImageWithFallback'
import OrderBuilder from '@/components/OrderBuilder'
import { generateSEOMetadata, getLocalBusinessSchema, getReviewSchema, getBreadcrumbSchema } from '@/lib/seo'
import { MapPin, Phone, Mail, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'

export const metadata = generateSEOMetadata(
  'Mawasiliano — Duka la Mbao Zanzibar',
  'Wasiliana na Zanzibaba Timber kwa mbao za pine Zanzibar. Piga +255 716 002 790 au WhatsApp kwa bei.',
  'sw',
  '/sw/contact'
)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Nyumbani', url: '/' },
  { name: 'Mawasiliano', url: '/sw/contact' },
])

export default function SwContact() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <nav className="mb-4 md:mb-6 text-sm" aria-label="Breadcrumb">
              <Link href="/sw" className="text-primary-600 hover:underline">Nyumbani</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-500">Mawasiliano</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Wasiliana Nasi</h1>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <ImageWithFallback src="/images/gallery/timber-supplier-team.jpg" alt="Timu ya Zanzibaba Timber" aspectRatio="4/3" className="w-full rounded-lg mb-6" sizes="(max-width: 768px) 100vw, 50vw" />
                <h2>Wasiliana Nasi</h2>
                <p className="text-lg mb-6">Tayari kuzungumza mahitaji yako ya mbao? Wasiliana kwa bei na ushauri.</p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3"><Phone className="w-5 h-5 text-primary-600" /><span>+255 716 002 790</span></div>
                  <div className="flex items-center space-x-3"><MapPin className="w-5 h-5 text-primary-600" /><span>Kwa Ndevu, Daraja Bovu, Zanzibar</span></div>
                  <div className="flex items-center space-x-3"><Mail className="w-5 h-5 text-primary-600" /><span>info@timber.zanzibaba.com</span></div>
                </div>
                <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3>Saa za Biashara</h3>
                  <p>Jumatatu - Jumamosi: 8:00 AM - 5:00 PM<br />Jumapili: Imefunga</p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Jenga Oda Yako</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Chagua bidhaa, weka idadi, na tuma oda yako kamili kwa WhatsApp.</p>
                <OrderBuilder />
              </div>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getReviewSchema('Zanzibaba Timber Mbao Pine', [
        { author: 'Ali H.', text: 'Msambazaji wa mbao wa kuaminika na ubora thabiti. Mbao treated pine zinafaa na hali ya hewa ya Zanzibar.', rating: 5 },
        { author: 'Sarah M.', text: 'Msambazaji wa mbao wa jumla kwa miradi ya hoteli. Utoaji ni wa kila wakati.', rating: 5 },
        { author: 'James K.', text: 'Ubora wa mbao na bei nzuri. Timu ilinisaidia kuchagua saizi sahihi.', rating: 5 },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Footer />
      <FloatingButtons />
    </>
  )
}
