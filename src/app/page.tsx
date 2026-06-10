'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ImageWithFallback from '@/components/ImageWithFallback'
import QuoteForm from '@/components/QuoteForm'
import { getLocalBusinessSchema, getFAQSchema, getReviewSchema } from '@/lib/seo'
import { PRODUCT_VARIANTS, INDUSTRIES, HOMEPAGE_FAQ, TESTIMONIALS } from '@/lib/data'
import Link from 'next/link'
import { CheckCircle, MapPin, MessageCircle, Phone, ArrowRight, Truck, ShieldCheck, Leaf, TrendingUp, Clock, Star, Award, Package } from 'lucide-react'
import { useBilingual } from '@/lib/bilingual'

function WhatsAppButton({ message }: { message?: string }) {
  const msg = message || 'Hello Zanzibaba Timber, I need a quote'
  const handleClick = () => {
    ;(window as any).gtag?.('event', 'whatsapp_click', { event_category: 'engagement' })
  }
  return (
    <a
      href={`https://wa.me/255716002790?text=${encodeURIComponent(msg)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105 shadow-lg"
    >
      <MessageCircle className="w-5 h-5" />
      WhatsApp
    </a>
  )
}

function CallButton() {
  const handleClick = () => {
    ;(window as any).gtag?.('event', 'call_click', { event_category: 'engagement' })
  }
  return (
    <a
      href="tel:+255716002790"
      onClick={handleClick}
      className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105 shadow-lg"
    >
      <Phone className="w-5 h-5" />
      Call Now
    </a>
  )
}

function IconCard({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
      <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-7 h-7 text-primary-600" />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

function TimberSizeCard({ v }: { v: typeof PRODUCT_VARIANTS[0] }) {
  return (
    <Link
      href={`/timber-sizes/${v.size}?length=${v.length}`}
      className="group bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-2xl font-bold text-primary-600">{v.size}</span>
        <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
          Available
        </span>
      </div>
      <div className="text-sm text-gray-500 mb-3">{v.dimensions} • {v.length}</div>
      <div className="flex flex-wrap gap-1 mb-4">
        <span className="text-xs bg-primary-50 dark:bg-primary-900/20 text-primary-600 px-2 py-1 rounded">Treated Timber</span>
        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">Premium Grade</span>
      </div>
      <div className="text-xs text-gray-500 mb-4">Uses: Roofing, framing, decking, fencing</div>
      <span className="text-sm font-semibold text-primary-600 group-hover:underline flex items-center gap-1">
        View Details <ArrowRight className="w-3 h-3" />
      </span>
    </Link>
  )
}

function TeaserCard({ icon: Icon, title, description, href }: {
  icon: React.ElementType
  title: string
  description: string
  href: string
}) {
  return (
    <Link href={href} className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col items-center text-center">
      <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
        <Icon className="w-7 h-7 text-primary-600" />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <span className="text-primary-600 font-semibold text-sm group-hover:underline flex items-center gap-1">
        Learn More <ArrowRight className="w-3 h-3" />
      </span>
    </Link>
  )
}

export default function Home() {
  const { t } = useBilingual()
  const ft18Variants = PRODUCT_VARIANTS.filter(v => v.length === '18ft')
  const ft12Variants = PRODUCT_VARIANTS.filter(v => v.length === '12ft')

  return (
    <>
      <Header />

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-20 right-4 z-40 md:hidden">
        <div className="flex flex-col gap-2">
          <a
            href="https://wa.me/255716002790?text=Hello%20Zanzibaba%20Timber%2C%20I%20need%20timber"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
          <a
            href="tel:+255716002790"
            className="w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>

      <main>
        {/* 1. Hero Section */}
        <section className="relative min-h-[90vh] flex items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/gallery/zanzibaba-timber-hero-banner.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          <div className="container-custom py-20 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-white leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl mb-10 text-gray-200">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <WhatsAppButton message="Hello Zanzibaba Timber, I need a quote" />
                <CallButton />
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Kwa Ndevu, Daraja Bovu, Zanzibar</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Quote Form */}
        <section id="quote" className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white scroll-mt-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Get Your Quote in 30 Minutes</h2>
              <p className="text-primary-100 mb-8">Send us your timber requirements. Fast response guaranteed.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                <WhatsAppButton message="Hello Zanzibaba Timber, I need timber prices for my project" />
                <CallButton />
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* 3. Why Choose Treated Pine Timber */}
        <section id="why-treated" className="py-24 md:py-32 bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900 scroll-mt-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Treated Pine Timber?</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Our premium treated pine timber is specifically engineered for Zanzibar's tropical climate and construction needs.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <IconCard icon={ShieldCheck} title="Termite Resistance" description="Pressure-treated to resist termites and wood-boring insects" />
                  <IconCard icon={Leaf} title="Moisture Protection" description="Chemical treatment protects against rot and moisture damage" />
                  <IconCard icon={Clock} title="Longer Lifespan" description="25+ year lifespan in tropical conditions" />
                  <IconCard icon={TrendingUp} title="Structural Performance" description="Stronger and more durable than untreated timber" />
                </div>
                <div className="mt-8">
                  <WhatsAppButton message="Hello Zanzibaba Timber, I want to know more about treated pine benefits" />
                </div>
              </div>
              <div className="relative">
                <ImageWithFallback
                  src="/images/gallery/contractor-inspecting-timber.jpg"
                  alt="Treated pine timber quality inspection at Zanzibaba Timber yard"
                  aspectRatio="4/3"
                  className="w-full rounded-2xl shadow-2xl"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Timber Sizes */}
        <section id="sizes" className="py-24 md:py-32 bg-gradient-to-bl from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">{t('pages.home.sizesTitle')}</h2>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
              {t('pages.home.sizesSubtitle')} - All sizes available in 18ft and 12ft lengths
            </p>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">18ft Treated Pine Lengths</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {ft18Variants.map((v) => (
                  <TimberSizeCard key={v.sku} v={v} />
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">12ft Treated Pine Lengths</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {ft12Variants.map((v) => (
                  <TimberSizeCard key={v.sku} v={v} />
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link href="/timber-sizes" className="inline-flex items-center gap-2 bg-primary-600 text-white px-10 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg">
                View All Sizes <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Industries We Serve */}
        <section id="industries" className="py-24 md:py-32 bg-white dark:bg-gray-900 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Industries We Serve</h2>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              Zanzibaba Timber supplies high quality treated pine timber to a wide range of industries across Zanzibar
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {INDUSTRIES.map((industry) => (
                <Link
                  key={industry.id}
                  href={`/${industry.slug}`}
                  className="group relative block h-72 rounded-2xl overflow-hidden shadow-xl"
                >
                  <ImageWithFallback
                    src={industry.image}
                    alt={`${industry.name} - ${industry.description}`}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                    <p className="text-sm text-gray-200 mb-3">{industry.description}</p>
                    <span className="text-green-400 text-sm font-semibold group-hover:underline">
                      Learn more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Teaser Cards: Delivery, Logistics, Quality */}
        <section className="py-24 md:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">More About Zanzibaba Timber</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Explore our delivery network, logistics capabilities, and quality standards.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <TeaserCard
                icon={Truck}
                title="Delivery Across Zanzibar"
                description="Fast, reliable timber delivery to every corner of Zanzibar. Cash on delivery, 24-48 hour service."
                href="/delivery"
              />
              <TeaserCard
                icon={Package}
                title="Logistics & Loading"
                description="Professional loading, scheduled delivery, and project coordination for bulk orders."
                href="/delivery"
              />
              <TeaserCard
                icon={ShieldCheck}
                title="Quality Assurance"
                description="Every batch is quality inspected. Tropical treatment for termite and moisture resistance."
                href="/about"
              />
            </div>
          </div>
        </section>

        {/* 7. Testimonials */}
        <section id="testimonials" className="py-16 md:py-20 bg-white dark:bg-gray-900 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
            <p className="text-center text-sm md:text-base text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
              Trusted by contractors and developers across Zanzibar
            </p>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.slice(0, 3).map((t, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 text-sm italic mb-3">&ldquo;{t.text}&rdquo;</p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/testimonials" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold text-sm">
                View All Reviews <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section id="faq" className="py-24 md:py-32 bg-gray-50 dark:bg-gray-800 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Frequently Asked Questions</h2>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
              Everything you need to know about buying treated pine timber in Zanzibar
            </p>
            <div className="max-w-4xl mx-auto space-y-4">
              {HOMEPAGE_FAQ.slice(0, 6).map((faq, i) => (
                <details key={i} className="group bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-lg hover:text-primary-600 transition-colors [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="shrink-0 ml-2 text-primary-600 group-open:rotate-180 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
            <div className="text-center mt-10">
              <WhatsAppButton message="Hello Zanzibaba Timber, I have a question" />
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(HOMEPAGE_FAQ)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getReviewSchema('Zanzibaba Timber', TESTIMONIALS.map(t => ({ author: t.name, text: t.text, rating: t.rating })))) }}
      />
      <Footer />
      <FloatingButtons />
    </>
  )
}
