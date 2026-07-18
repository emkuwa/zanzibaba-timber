import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ImageWithFallback from '@/components/ImageWithFallback'
import OrderBuilder from '@/components/OrderBuilder'
import { generateSEOMetadata, getLocalBusinessSchema, getReviewSchema, getBreadcrumbSchema } from '@/lib/seo'
import { MapPin, Phone, Mail, CheckCircle, Star } from 'lucide-react'

export const metadata = generateSEOMetadata(
  'Contact - Zanzibar Timber Supplier',
  'Contact Zanzibaba Timber for premium pine timber supply across Zanzibar. Call +255 716 002 790 or WhatsApp for instant quote.',
  'en',
  '/contact'
)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Contact', url: '/contact' },
])

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
                <ImageWithFallback
                  src="/images/gallery/timber-supplier-team.jpg"
                  alt="Zanzibaba Timber Team"
                  aspectRatio="4/3"
                  className="w-full rounded-lg mb-6"
                  sizes="(max-width: 768px) 100vw, 50vw"
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

                <div className="mt-6">
                  <h3>Visit Our Yard</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Kwa Ndevu, Daraja Bovu, Zanzibar</p>
                  <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3955.4984561578427!2d39.203614!3d-6.1918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m2!1s0x0%3A0x0!2zNsKxMTEnMzAuNSJTIDM5wrAxMicyMDMuMCJF!5e0!3m2!1sen!2stz!4v1"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Zanzibaba Timber Yard Location"
                    />
                  </div>
                  <a
                    href="https://maps.google.com/?q=Kwa+Ndevu+Daraja+Bovu+Zanzibar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm text-primary-600 hover:underline"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Build Your Order</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">Select products, set quantities, and send your complete order to WhatsApp.</p>
                <OrderBuilder />
              </div>
            </div>

            <div className="max-w-5xl mx-auto mt-16 border-t pt-12">
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Services</h2>
                  <ul className="space-y-3">
                    {[
                      'Premium treated pine timber supply for residential construction',
                      'Hotel & resort construction timber solutions',
                      'Villa and luxury development timber supply',
                      'Government and institutional project supply',
                      'Wholesale and bulk timber for contractors',
                      'Custom cutting and special sizing available',
                      'Island-wide timber delivery — cash on delivery, mobile money & bank transfer',
                    ].map((s, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Products We Supply</h2>
                  <ul className="space-y-3">
                    {[
                      'Mninga/Hardwood: 1x6, 1x8, 1x10',
                      'Treated pine timber: 2x2, 2x3, 2x4, 2x6',
                      'Teak wood poles (Mitiki): 2" to 6" diameter, 18ft length',
                      'Kiln-dried construction timber',
                      '12ft and 18ft lengths available',
                      'Custom sizes on request',
                    ].map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{p}</span>
                      </li>
                    ))}
                  </ul>

                  <h2 className="text-2xl font-bold mt-8 mb-4">Why Choose Us</h2>
                  <ul className="space-y-3">
                    {[
                      'Family-owned Zanzibar timber business since 2010',
                      'Based at Kwa Ndevu, Daraja Bovu — our own timber yard',
                      'Cash on delivery, mobile money & bank transfer accepted',
                      '24-48 hour delivery for stock items',
                      'Dedicated service for contractors and bulk buyers',
                      'High quality kiln-dried treated pine timber',
                    ].map((w, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-center mb-8">What Our Customers Say</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { name: 'Ali H.', role: 'Contractor, Stone Town', text: 'Reliable timber supplier with consistent quality. Their treated pine is perfect for Zanzibar\'s climate. Cash on delivery makes things easy.', rating: 5 },
                    { name: 'Sarah M.', role: 'Hotel Manager, Nungwi', text: 'We use Zanzibaba Timber for all our resort projects. They handle bulk orders professionally and delivery is always on time.', rating: 5 },
                    { name: 'James K.', role: 'Homeowner, Paje', text: 'Great quality timber and fair prices. The team helped me choose the right sizes for my villa extension. Highly recommended.', rating: 5 },
                  ].map((review, i) => (
                    <div key={i} className="bg-white dark:bg-gray-700 rounded-lg p-5 border border-gray-200 dark:border-gray-600">
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: review.rating }).map((_, si) => (
                          <Star key={si} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 italic">"{review.text}"</p>
                      <div>
                        <div className="font-semibold text-sm">{review.name}</div>
                        <div className="text-xs text-gray-500">{review.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getReviewSchema('Zanzibaba Timber', [
          { author: 'Ali H.', text: 'Reliable timber supplier with consistent quality. Their timber is perfect for Zanzibar\'s climate.', rating: 5 },
          { author: 'Sarah M.', text: 'Professional bulk timber supplier for hotel projects. Delivery is always on time.', rating: 5 },
          { author: 'James K.', text: 'Great quality timber and fair prices. Helpful team for choosing the right sizes.', rating: 5 },
        ])) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Footer />
      <FloatingButtons />
    </>
  )
}