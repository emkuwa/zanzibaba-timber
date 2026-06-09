import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import QuoteForm from '@/components/QuoteForm'
import { generateSEOMetadata, getLocalBusinessSchema } from '@/lib/seo'
import { MapPin, Phone, Mail } from 'lucide-react'

export const metadata = generateSEOMetadata(
  'Contact - Zanzibar Timber Supplier',
  'Contact Zanzibaba Timber for premium pine timber supply across Zanzibar. Call +255 716 002 790 or WhatsApp for instant quote.',
  'en',
  '/contact'
)

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <img
                  src="/images/gallery/timber-supplier-team.jpg"
                  alt="Zanzibaba Timber Team"
                  className="w-full rounded-lg mb-6"
                  loading="lazy"
                />
                <h2>Get in Touch</h2>
                <p className="text-lg mb-6">
                  Ready to discuss your timber needs? Contact us for a free quote and consultation.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span>+255 716 002 790</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <span>Kwa Ndevu, Daraja Bovu, Zanzibar</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span>info@timber.zanzibaba.com</span>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3>Business Hours</h3>
                  <p>Monday - Saturday: 8:00 AM - 5:00 PM<br />
                  Sunday: Closed</p>
                </div>
              </div>

              <div>
                <h2>Request Quote</h2>
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
      />
      <Footer />
      <FloatingButtons />
    </>
  )
}