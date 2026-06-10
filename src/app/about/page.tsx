import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ImageWithFallback from '@/components/ImageWithFallback'
import { generateSEOMetadata } from '@/lib/seo'
import Link from 'next/link'

export const metadata = generateSEOMetadata(
  'About Zanzibaba Timber - Zanzibar Pine Timber Experts',
  'Learn about Zanzibaba Timber, your trusted pine timber supplier in Zanzibar. Serving homeowners, contractors, hotels, and government projects from Kwa Ndevu, Daraja Bovu.',
  'en',
  '/about'
)

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About Zanzibaba Timber</h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <ImageWithFallback
                  src="/images/gallery/timber-yard-aerial-view.jpg"
                  alt="Zanzibaba Timber Yard - Kwa Ndevu, Daraja Bovu"
                  aspectRatio="4/3"
                  className="w-full rounded-lg shadow-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="prose dark:prose-invert">
                <p className="text-lg font-semibold">
                  Premium treated timber supplier in Zanzibar since 2010.
                </p>
                <p>
                  Based in Kwa Ndevu, Daraja Bovu, Zanzibar, we supply premium pine timber
                  to homeowners, contractors, hotels, resorts, and government projects across the island.
                </p>
                <p>
                  High Quality Treated Timber. Our timber is sustainably sourced and kiln-dried for Zanzibar's tropical climate.
                  Every piece meets strict quality standards before delivery.
                </p>
                <h3>Our Services:</h3>
                <ul>
                  <li>Residential & contractor supply</li>
                  <li>Hotel & resort timber solutions</li>
                  <li>Government project supply</li>
                  <li>Wholesale & bulk orders</li>
                  <li>Delivery Across Zanzibar</li>
                </ul>
                <div className="mt-8">
                  <a
                    href="https://wa.me/255716002790?text=Hello%20Zanzibaba%20Timber"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
                  >
                    Get Free Quote
                  </a>
                </div>
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