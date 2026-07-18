import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import { generateSEOMetadata, getBreadcrumbSchema, getFAQSchema, getProductSchema } from '@/lib/seo'
import { POLES, LOCATIONS, generateWhatsAppLink, formatTZS } from '@/lib/data'
import Link from 'next/link'
import { CheckCircle, MessageCircle, Ruler, TreePine, Fence, Building2, Warehouse, Shield, Thermometer, Droplets, Bug } from 'lucide-react'

export const metadata = generateSEOMetadata(
  'Wood Poles Zanzibar | Fence Posts, Building Poles & Timber Poles — Zanzibaba Timber',
  'Premium teak wood poles (Mitiki) in Zanzibar — naturally termite-resistant, durable, and perfect for construction, fencing, and farm use. 2" to 6" diameter, 18ft length. Free island-wide delivery with cash on delivery.',
  'en',
  '/treated-wood-poles'
)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Wood Poles', url: '/treated-wood-poles' },
])

const FAQS = [
  { question: 'What are teak wood poles used for in Zanzibar?', answer: 'Teak wood poles (Mitiki) are used extensively across Zanzibar for building construction, fencing, farm structures, beachfront resorts, and utility applications. Known locally as mirunda or milunda, these poles are naturally resistant to termites, rot, and humidity — making them the preferred choice for coastal construction without chemical treatment.' },
  { question: 'Are teak wood poles available for delivery in Zanzibar?', answer: 'Yes, Zanzibaba Timber delivers teak wood poles to all Zanzibar locations including Paje, Nungwi, Kendwa, Stone Town, Jambiani, Matemwe, Kiwengwa, Fumba, Bububu, Chukwani, and Kwa Ndevu. Free delivery across the island with cash on delivery available.' },
  { question: 'What sizes of teak wood poles do you stock?', answer: 'We stock teak wood poles from 2 inches up to 6 inches diameter in 18ft length. The 4 inch diameter pole (Mirunda Nch 4" Ft 18) and 3 inch pole (Mirunda Ft 18 Nch 3") are our most popular sizes for construction and fencing. Contact us for custom diameters.' },
  { question: 'Are teak poles better than treated pine for coastal construction?', answer: 'Yes. Teak (Mitiki) is naturally durable with inherent oils that repel termites, resist rot, and withstand salt spray — no chemical treatment required. Unlike treated pine, teak poles perform exceptionally well in Zanzibar\'s tropical coastal climate and last for decades even in ground contact.' },
  { question: 'Can I get teak wood poles for a hotel or resort project?', answer: 'Absolutely. We supply teak wood poles to hotels, resorts, and beachfront properties across Zanzibar. Teak\'s natural weather resistance makes it ideal for outdoor structures, cabana frames, fencing, and landscape features in coastal environments.' },
  { question: 'How do teak wood poles compare to timber for construction?', answer: 'Teak wood poles (round poles/mirunda) are ideal for applications requiring natural strength with minimal processing — fencing, structural posts, farm supports, and landscape use. Sawn timber (2x4, 2x6, etc.) is better for framing, roofing, decking, and precision construction. We stock both options.' },
]

const poleBenefits = [
  { icon: TreePine, title: 'Wood Poles (Mitiki)', desc: 'Naturally durable wood poles — resistant to termites, rot, and fungal decay without chemical treatment. Ideal for Zanzibar\'s tropical coastal climate.' },
  { icon: Shield, title: 'Naturally Termite-Resistant', desc: 'Teak contains natural oils that repel termites and borers. No pressure treatment needed — the wood protects itself, making it safer for farms, homes, and the environment.' },
  { icon: Building2, title: 'Building & Construction Poles', desc: 'Strong, durable round poles for building construction, roof supports, and structural frameworks. Teak\'s natural strength and longevity make it ideal for permanent structures.' },
  { icon: Warehouse, title: 'Bulk Supply & Free Delivery', desc: 'Large stock of teak wood poles at our Kwa Ndevu yard. Free delivery across Zanzibar with cash on payment option.' },
]

const poleUses = [
  { title: 'Building Construction Poles', desc: 'Teak wood poles (mitiki) are widely used for structural support in Zanzibar construction — from single-storey buildings to multi-storey structures (magorofa). Their natural round shape provides excellent load-bearing strength and teak\'s durability ensures long-lasting performance.' },
  { title: 'Fencing & Boundary Poles', desc: 'Teak wood poles are the premium choice for fencing across Zanzibar farms, hotels, resorts, and residential properties. Teak\'s natural termite resistance means fence posts last 15-25+ years in ground contact without chemical treatment.' },
  { title: 'Farm & Agricultural Poles', desc: 'Farm fencing, livestock enclosures, crop support structures, and agricultural buildings benefit from teak\'s natural durability. Teak poles (miti ya shamba) require no maintenance and withstand outdoor conditions year after year.' },
  { title: 'Beachfront & Coastal Structures', desc: 'Teak naturally withstands salt spray, high humidity, and tropical sun — making it the ideal choice for beachfront hotels, cabanas, deck supports, and coastal structures in Zanzibar.' },
  { title: 'Hotel & Resort Poles', desc: 'Resort developers choose teak poles for their natural beauty, durability, and resistance to coastal conditions. Used for cabana frames, pergolas, fencing, and landscape features at properties across Zanzibar.' },
  { title: 'Landscaping & Garden Poles', desc: 'Decorative and structural poles for landscaping projects, pergolas, gazebos, shade structures, and garden features. Teak\'s natural golden-brown color adds aesthetic value to any property.' },
]

export default function TreatedWoodPolesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-amber-900 via-primary-900 to-gray-900 text-white py-16 md:py-24">
          <div className="container-custom">
            <nav className="mb-4 text-sm text-primary-200" aria-label="Breadcrumb">
              <Link href="/" className="text-primary-300 hover:underline">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-primary-100">Wood Poles</span>
            </nav>
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Wood Poles <span className="text-amber-400">Zanzibar</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-100 mb-8 max-w-3xl">
                Premium teak wood poles — known locally as <strong className="text-white">mitiki, mirunda, or milunda</strong> — for construction, fencing, farm, and structural applications across Zanzibar. Naturally termite-resistant. 2" to 6" diameter, 18ft length. Free island-wide delivery.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={generateWhatsAppLink('Hello Zanzibaba Timber, I need teak wood poles. Please advise on available diameters and pricing.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg">
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
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Wood Poles — Available Now</h2>
            <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">Teak wood poles (Mitiki) for construction, fencing, and farm applications. In stock at our Kwa Ndevu yard.</p>
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

        <section className="py-12 bg-amber-50 dark:bg-gray-800">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Why Teak? The Natural Advantage</h2>
            <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">Teak (Mitiki / Tectona grandis) is one of the world's most durable hardwoods — no chemical treatment needed</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Bug, title: 'Naturally Termite-Resistant', desc: 'Teak contains natural oils (teak oil) that repel termites, powder-post beetles, and other wood-boring insects. No pressure treatment or chemical preservatives required.' },
                { icon: Droplets, title: 'Weather & Moisture Resistant', desc: 'Teak\'s dense grain and natural oils make it highly resistant to rain, humidity, and salt spray. Perfect for Zanzibar\'s tropical coastal climate and beachfront applications.' },
                { icon: Shield, title: 'Lasts Decades Without Treatment', desc: 'Teak fence posts and building poles can last 25+ years in ground contact. Unlike pine, teak does not rot or decay quickly — it actually becomes harder and more resistant as it ages.' },
              ].map((f) => (
                <div key={f.title} className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl">
                  <f.icon className="w-10 h-10 text-amber-600 mb-3" />
                  <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Pole Diameters & Pricing</h2>
            <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">Available diameters — teak wood poles, 18ft length. Contact for current pricing.</p>
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
                          <a href={generateWhatsAppLink(`Nataka teak wood pole diameter ${pole.diameter} ${pole.length}`)} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-xs font-semibold">
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

        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Applications of Wood Poles in Zanzibar</h2>
            <p className="text-center text-gray-500 mb-8">How teak wood poles (mitiki/mirunda) are used across construction, agriculture, and hospitality</p>
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

        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Why Choose Zanzibaba Timber for Wood Poles?</h2>
            <p className="text-center text-gray-500 mb-8">Premium teak wood poles backed by years of experience in Zanzibar</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: CheckCircle, title: 'Premium Teak Quality', desc: 'All our wood poles are premium teak (Mitiki) — naturally durable, termite-resistant, and sourced from sustainable plantations. No chemical treatment needed.' },
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

        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">FAQs — Wood Poles</h2>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <details key={i} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                  <summary className="px-5 py-4 cursor-pointer font-semibold text-sm hover:text-primary-600 transition-colors">{faq.question}</summary>
                  <div className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-400">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary-700 text-white text-center">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Wood Poles or Timber for Your Project?</h2>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">Get your free quote within 30 minutes. We deliver teak poles, fence posts, and all timber sizes across Zanzibar.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={generateWhatsAppLink('Hello Zanzibaba Timber, I need teak wood poles. Please advise on available diameters and pricing.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow-lg">
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getProductSchema('Wood Poles Zanzibar', 'Premium wood poles for construction, fencing and farm applications. 2" to 6" diameter, 18ft length. Naturally termite-resistant (Mitiki).', '2"-6" x 18ft')) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(FAQS)) }} />
      <Footer />
      <FloatingButtons />
    </>
  )
}
