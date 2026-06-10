'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import ImageWithFallback from '@/components/ImageWithFallback'
import QuoteForm from '@/components/QuoteForm'
import { getLocalBusinessSchema, getFAQSchema, getReviewSchema } from '@/lib/seo'
import { PRODUCT_VARIANTS, INDUSTRIES, HOMEPAGE_FAQ, TESTIMONIALS, SIZE_USE_CASE } from '@/lib/data'
import Link from 'next/link'
import { MapPin, MessageCircle, Phone, ArrowRight, Truck, ShieldCheck, Star, Package } from 'lucide-react'
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
      className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2.5 rounded-lg transition-all hover:scale-105 shadow text-sm"
    >
      <MessageCircle className="w-4 h-4" />
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
      className="inline-flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 py-2.5 rounded-lg transition-all hover:scale-105 shadow text-sm"
    >
      <Phone className="w-4 h-4" />
      Call Now
    </a>
  )
}

function TimberSizeCard({ v }: { v: typeof PRODUCT_VARIANTS[0] }) {
  const useCase = SIZE_USE_CASE[v.size]
  return (
    <Link
      href={`/timber-sizes/${v.size}?length=${v.length}`}
      className="group bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
    >
      <div className="text-lg font-bold text-primary-600">{v.size}</div>
      {useCase && <div className="text-[10px] text-gray-400 leading-tight mb-1">{useCase}</div>}
      <div className="text-[10px] text-gray-500 mb-2">{v.dimensions} • {v.length}</div>
      <div className="flex items-center justify-between">
        <span className="text-[10px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-1.5 py-0.5 rounded-full">
          In Stock
        </span>
        <span className="text-[10px] font-semibold text-primary-600 group-hover:underline flex items-center gap-0.5">
          View <ArrowRight className="w-2.5 h-2.5" />
        </span>
      </div>
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
    <Link href={href} className="group bg-white dark:bg-gray-800 rounded-lg p-4 shadow border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all flex flex-col items-center text-center">
      <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-2 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
        <Icon className="w-5 h-5 text-primary-600" />
      </div>
      <h3 className="font-bold text-sm mb-1">{title}</h3>
      <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">{description}</p>
      <span className="text-primary-600 font-semibold text-xs group-hover:underline flex items-center gap-1">
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
        <section className="relative min-h-[60vh] flex items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/images/gallery/zanzibaba-timber-hero-banner.jpg')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          <div className="container-custom py-6 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold mb-2 text-white leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-sm sm:text-lg md:text-3xl mb-4 text-gray-200">
                {t('hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <WhatsAppButton message="Hello Zanzibaba Timber, I need a quote" />
                <CallButton />
              </div>
              <div className="flex items-center text-gray-300 text-xs">
                <MapPin className="w-3 h-3 mr-1" />
                <span>Kwa Ndevu, Daraja Bovu, Zanzibar</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Premium Timber Sizes */}
        <section id="sizes" className="py-6 bg-gradient-to-bl from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-3">{t('pages.home.sizesTitle')}</h2>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              {t('pages.home.sizesSubtitle')} — 12ft & 18ft
            </p>

            <div className="mb-6">
              <h3 className="text-base font-bold text-center mb-3">18ft Treated Pine</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                {ft18Variants.map((v) => (
                  <TimberSizeCard key={v.sku} v={v} />
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-base font-bold text-center mb-3">12ft Treated Pine</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
                {ft12Variants.map((v) => (
                  <TimberSizeCard key={v.sku} v={v} />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/timber-sizes" className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg text-sm">
                View All Sizes <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/prices" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg text-sm">
                See Prices <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. Quote Form */}
        <section id="quote" className="py-8 bg-gradient-to-r from-primary-600 to-primary-800 text-white scroll-mt-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl md:text-3xl font-bold mb-2">Get Your Quote in 30 Minutes</h2>
              <p className="text-primary-100 mb-4 text-sm">Send your timber requirements. Fast response guaranteed.</p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center mb-4">
                <WhatsAppButton message="Hello Zanzibaba Timber, I need timber prices for my project" />
                <CallButton />
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* 4. Industries We Serve */}
        <section id="industries" className="py-6 bg-white dark:bg-gray-900 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-lg md:text-2xl font-bold text-center mb-3">Industries We Serve</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {INDUSTRIES.map((industry) => (
                <Link
                  key={industry.id}
                  href={`/${industry.slug}`}
                  className="group relative block h-36 rounded-lg overflow-hidden shadow"
                >
                  <ImageWithFallback
                    src={industry.image}
                    alt={`${industry.name} — ${industry.description}`}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-sm font-bold text-white mb-1">{industry.name}</h3>
                    <span className="text-green-400 text-[10px] font-semibold group-hover:underline">
                      Learn more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Teasers: Delivery, Logistics, Quality */}
        <section className="py-8 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <h2 className="text-lg md:text-2xl font-bold text-center mb-4">More About Zanzibaba Timber</h2>
            <div className="grid md:grid-cols-3 gap-3 max-w-5xl mx-auto">
              <TeaserCard
                icon={Truck}
                title="Delivery Across Zanzibar"
                description="Fast, reliable timber delivery to every corner of Zanzibar."
                href="/delivery"
              />
              <TeaserCard
                icon={Package}
                title="Logistics & Loading"
                description="Professional loading and project coordination for bulk orders."
                href="/delivery"
              />
              <TeaserCard
                icon={ShieldCheck}
                title="Quality Assurance"
                description="Every batch quality inspected for tropical durability."
                href="/about"
              />
            </div>
          </div>
        </section>

        {/* 6. Testimonials */}
        <section id="testimonials" className="py-8 bg-white dark:bg-gray-900 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-lg md:text-2xl font-bold text-center mb-3">What Our Customers Say</h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-3">
              {TESTIMONIALS.slice(0, 3).map((t, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700">
                  <div className="flex justify-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 text-xs italic mb-1 line-clamp-3">&ldquo;{t.text}&rdquo;</p>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-1">
                    <p className="font-semibold text-xs">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link href="/testimonials" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold text-sm">
                View All Reviews <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section id="faq" className="py-6 bg-gray-50 dark:bg-gray-800 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-lg md:text-2xl font-bold text-center mb-3">FAQs</h2>
            <div className="max-w-4xl mx-auto space-y-2">
              {HOMEPAGE_FAQ.slice(0, 3).map((faq, i) => (
                <details key={i} className="group bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <summary className="flex items-center justify-between p-3 cursor-pointer font-semibold text-xs hover:text-primary-600 transition-colors [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="shrink-0 ml-2 text-primary-600 group-open:rotate-180 transition-transform">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="px-3 pb-3 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-2 text-xs">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
            <div className="text-center mt-4">
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
