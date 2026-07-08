import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata, getBreadcrumbSchema, getFAQSchema, getProductSchema } from '@/lib/seo'
import { POLES, LOCATIONS, generateWhatsAppLink, formatTZS } from '@/lib/data'
import Link from 'next/link'
import { CheckCircle, MessageCircle, Ruler, TreePine, Fence, Building2, Warehouse } from 'lucide-react'

export const metadata = generateSEOMetadata(
  'Treated Wood Poles Zanzibar | Utility Poles, Fence Posts & Timber Poles — Zanzibaba Timber',
  'Premium treated wood poles in Zanzibar. Utility poles, fence posts, timber poles and round poles for construction — 2" to 6" diameter, 18ft length. Treated pine poles ready for delivery across Zanzibar. Cash on delivery.',
  'en',
  '/treated-wood-poles'
)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Treated Wood Poles', url: '/treated-wood-poles' },
])

const FAQS = [
  { question: 'What are treated wood poles used for in Zanzibar?', answer: 'Treated wood poles are used extensively across Zanzibar for construction, fencing, utility poles, structural supports, landscaping, beachfront structures, hotel resort construction, and agricultural applications. They are the preferred choice for round timber in coastal environments due to their treatment against termites, rot, and salt damage.' },
  { question: 'Are treated wood poles available for delivery in Zanzibar?', answer: 'Yes, Zanzibaba Timber delivers treated wood poles to all Zanzibar locations including Paje, Nungwi, Kendwa, Stone Town, Jambiani, Matemwe, Kiwengwa, Fumba, Bububu, Chukwani, and Kwa Ndevu. Cash on delivery available. Free delivery across the island.' },
  { question: 'What sizes of treated wood poles do you stock?', answer: 'We stock treated pine poles from 2 inches up to 6 inches diameter in 18ft length. The 4 inch diameter pole (Mirunda Nch 4" Ft 18) and 3 inch pole (Mirunda Ft 18 Nch 3") are our most popular sizes for construction and fencing. Contact us for custom diameters.' },
  { question: 'Can I get treated wood poles for a hotel or resort project?', answer: 'Absolutely. We supply treated wood poles to hotels, resorts, and beachfront properties across Zanzibar. Our poles are ideal for outdoor structures, cabana frames, fencing, and landscape features that need to withstand coastal conditions.' },
  { question: 'How do treated wood poles compare to timber for construction?', answer: 'Treated wood poles (round poles/mirunda) are ideal for applications requiring natural strength with minimal processing — fencing, structural posts, utility poles, and landscape supports. Sawn timber (2x4, 2x6, etc.) is better for framing, roofing, decking, and precision construction. We stock both options.' },
]

const poleBenefits = [
  { icon: TreePine, title: 'Treated Pine Poles', desc: 'Professionally pressure-treated pine poles resistant to termites, rot, and fungal decay. Ideal for Zanzibar\'s tropical coastal climate.' },
  { icon: Fence, title: 'Fence Posts & Utility Poles', desc: 'Strong, durable round poles suitable for boundary fencing, utility lines, farm fencing, and structural support posts. 2" to 6" diameter available.' },
  { icon: Building2, title: 'Construction & Structural Poles', desc: 'Load-bearing poles for construction projects including multi-storey buildings, roof supports, and structural frameworks in Zanzibar.' },
  { icon: Warehouse, title: 'Bulk Supply & Delivery', desc: 'Large stock of treated wood poles at our Kwa Ndevu yard. Free delivery across Zanzibar with cash on payment option.' },
]

const poleUses = [
  { title: 'Construction Support Poles', desc: 'Mirunda (round timber poles) are widely used for structural support in Zanzibar construction — from single-storey buildings to multi-storey structures (magorofa). Their natural round shape provides excellent load-bearing strength.' },
  { title: 'Fencing & Boundary Poles', desc: 'Treated wood poles are the standard choice for fencing across Zanzibar farms, hotels, resorts, and residential properties. Our treated poles last 15+ years in ground contact.' },
  { title: 'Utility & Telecom Poles', desc: 'Durable treated poles for electricity, telecom, and utility infrastructure. Our poles meet standards for overhead line support and distribution networks.' },
  { title: 'Beachfront & Coastal Structures', desc: 'Salt-resistant treated poles for beachfront hotels, cabanas, deck supports, and coastal structures. The pressure treatment protects against salt spray and high humidity.' },
  { title: 'Agricultural & Farm Posts', desc: 'Farm fencing, livestock enclosures, crop support structures, and agricultural buildings all use treated wood poles for their durability and cost-effectiveness.' },
  { title: 'Landscaping & Garden Poles', desc: 'Decorative and structural poles for landscaping projects, pergolas, gazebos, shade structures, and garden features across Zanzibar properties.' },
]

export default function TreatedWoodPolesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-green-900 via-primary-900 to-gray-900 text-white py-16 md:py-24">
          <div className="container-custom">
            <nav className="mb-4 text-sm text-primary-200" aria-label="Breadcrumb">
              <Link href="/" className="text-primary-300 hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-primary-100">Treated Wood Poles</span>
            </nav>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Treated Wood Poles <span className="text-green-400">Zanzibar</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-3xl">
                Premium treated wood poles — also known locally as <strong className="text-white">mirunda</strong> — for construction, fencing, utility, and structural applications across Zanzibar. 2" to 6" diameter, 18ft length. Free island-wide delivery.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={generateWhatsAppLink('Hello Zanzibaba Timber, I need treated wood poles. Please advise on available diameters and pricing.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg">
                  <MessageCircle className="w-5 h-5" /> Get Pole Pricing
                </a>
                <a href="tel:+255716002790" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all border border-white/20">
                  Call +255 716 002 790
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Treated Wood Poles — Available Now</h2>
            <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">Round timber poles for construction, fencing and utility applications. In stock at our Kwa Ndevu yard.</p>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {poleBenefits.map((b) => (
                <div key={b.title} className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-lg transition-shadow">
                  <b.icon className="w-10 h-10 text-primary-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Pole Diameters & Pricing</h2>
            <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">Available diameters — professionally treated pine poles, 18ft length. Contact for current pricing.</p>
            <div className="max-w-3xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-primary-600">
                      <th className="text-left py-3 px-3 text-sm">Diameter</th>
                      <th className="text-left py-3 px-3 text-sm">Length</th>
                      <th className="text-center py-3 px-3 text-sm">Price (TZS)</th>
                      <th className="text-center py-3 px-3 text-sm">Order</th>
                    </tr>
                  </thead>
                  <tbody>
                    {POLES.map((pole) => (
                      <tr key={pole.sku} className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3 font-semibold text-sm">{pole.diameter} Round Pole</td>
                        <td className="py-3 px-3 text-sm text-gray-500">{pole.length}</td>
                        <td className="py-3 px-3 text-center">
                          {(() => {
                            const prices: Record<string, number> = { '2"': 8500, '3"': 12000, '4"': 15000, '5"': 20000, '6"': 25000 }
                            return <span className="font-bold text-sm">{formatTZS(prices[pole.diameter || '2"'])}</span>
                          })()}
                        </td>
                        <td className="py-3 px-3 text-center">
                          <a href={generateWhatsAppLink(`Nataka treated wood pole diameter ${pole.diameter} ${pole.length}`)} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-xs font-semibold">
                            <MessageCircle className="w-3 h-3 inline mr-1" />WhatsApp
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">Prices exclude VAT. Free delivery across Zanzibar. Cash on delivery, mobile money & bank transfer accepted.</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container-custom max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Applications of Treated Wood Poles in Zanzibar</h2>
            <p className="text-center text-gray-500 mb-8">How round timber poles (mirunda) are used across construction, agriculture and hospitality</p>
            <div className="grid md:grid-cols-2 gap-6">
              {poleUses.map((u) => (
                <div key={u.title} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">{u.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Why Choose Zanzibaba Timber for Wood Poles?</h2>
            <p className="text-center text-gray-500 mb-8">Premium quality treated wood poles backed by years of experience in Zanzibar</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: CheckCircle, title: 'Quality Treated Timber', desc: 'All our poles are professionally pressure-treated with preservatives to resist termites, rot, and fungal decay. Suitable for ground contact and coastal environments.' },
                { icon: CheckCircle, title: 'Large Stock Available', desc: 'We maintain extensive stock of all pole diameters at our Kwa Ndevu yard. No waiting for orders — ready for immediate dispatch and delivery.' },
                { icon: CheckCircle, title: 'Free Delivery Zanzibar', desc: 'Free delivery across all Zanzibar locations including Paje, Nungwi, Kendwa, Stone Town, and more. Cash on delivery, mobile money, or bank transfer.' },
              ].map((f) => (
                <div key={f.title} className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl">
                  <f.icon className="w-10 h-10 text-green-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">FAQs — Treated Wood Poles</h2>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <details key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <summary className="px-5 py-4 cursor-pointer font-semibold text-sm hover:text-primary-600 transition-colors">{faq.question}</summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary-700 text-white text-center">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Treated Wood Poles or Timber for Your Project?</h2>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">Get your free quote within 30 minutes. We deliver treated poles, fence posts, and all timber sizes across Zanzibar.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={generateWhatsAppLink('Hello Zanzibaba Timber, I need treated wood poles. Please advise on available diameters and pricing.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg">
                <MessageCircle className="w-5 h-5" /> Get Free Quote
              </a>
              <a href="tel:+255716002790" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all border border-white/20">
                Call +255 716 002 790
              </a>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getProductSchema('Treated Wood Poles Zanzibar', 'Premium treated wood poles for construction, fencing and utility applications. 2" to 6" diameter, 18ft length. Pressure-treated pine.', '2"-6" x 18ft')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(FAQS)) }} />
      <Footer />
      <FloatingButtons />
    </>
  )
}
