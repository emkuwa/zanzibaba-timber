'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import QuoteForm from '@/components/QuoteForm'
import { getLocalBusinessSchema, getFAQSchema, getReviewSchema } from '@/lib/seo'
import { PRODUCT_VARIANTS, LOCATIONS, INDUSTRIES, DELIVERY_PROCESS, HOMEPAGE_FAQ, TESTIMONIALS } from '@/lib/data'
import Link from 'next/link'
import { CheckCircle, MapPin, MessageCircle, Phone, ArrowRight, Package, Truck, ShieldCheck, Leaf, TrendingUp, Clock, Star, Award, Rss, Users, Images, Zap } from 'lucide-react'
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

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="flex items-center gap-4">
        <div className="h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent w-24"></div>
        <div className="w-3 h-3 bg-primary-600 rotate-45"></div>
        <div className="h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent w-24"></div>
      </div>
    </div>
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

        {/* Quick nav strip */}
        <section className="py-4 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm">
              <a href="#sizes" className="text-primary-600 hover:underline font-medium">Timber Sizes</a>
              <a href="#quote" className="text-primary-600 hover:underline font-medium">Get Quote</a>
              <a href="#delivery" className="text-primary-600 hover:underline font-medium">Delivery</a>
              <a href="#locations" className="text-primary-600 hover:underline font-medium">Locations</a>
            </div>
          </div>
        </section>

        {/* 2. Quote Form - Right after hero for immediate conversion */}
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

        <SectionDivider />

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
                <img
                  src="/images/gallery/contractor-inspecting-timber.jpg"
                  alt="Treated pine timber quality inspection at Zanzibaba Timber yard"
                  className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* 4. Pricing Guidance */}
        <section id="pricing" className="py-24 md:py-32 bg-gradient-to-r from-primary-600 to-primary-800 text-white scroll-mt-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Looking for Timber Prices?</h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Affordable wholesale and retail pricing available. Contact us for the latest timber prices and bulk order discounts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton message="Hello Zanzibaba Timber, I want timber prices for my project" />
                <Link href="/prices" className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all">
                  View Price List
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Our Timber Yard - Split Layout */}
        <section id="yard" className="py-24 md:py-32 bg-white dark:bg-gray-900 scroll-mt-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('homeSections.yard.heading')}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{t('homeSections.yard.stock1')}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-8">{t('homeSections.yard.stock2')}</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <IconCard icon={CheckCircle} title="Premium Stock" description={t('homeSections.yard.bullet1')} />
                  <IconCard icon={ShieldCheck} title="Treated Pine" description={t('homeSections.yard.bullet2')} />
                  <IconCard icon={Truck} title="Fast Delivery" description={t('homeSections.yard.bullet3')} />
                  <IconCard icon={Package} title="Bulk Orders" description={t('homeSections.yard.bullet4')} />
                </div>
                <div className="flex gap-4">
                  <Link href="/prices" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold">
                    View Prices <ArrowRight className="w-4 h-4" />
                  </Link>
                  <WhatsAppButton message="Hello Zanzibaba Timber, I want to know about your current stock" />
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/gallery/timber-sizes-display.jpg"
                  alt="Large stock of treated pine timber sizes at Zanzibaba yard"
                  className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-green-500 rounded-xl flex items-center justify-center shadow-lg rotate-6">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Delivery Process - Timeline */}
        <section id="delivery" className="py-24 md:py-32 bg-gray-50 dark:bg-gray-800 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">{t('homeSections.delivery.heading')}</h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
              {t('homeSections.delivery.p1')}
            </p>
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute top-16 left-0 right-0 h-0.5 bg-primary-200 hidden lg:block"></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
                {DELIVERY_PROCESS.map((step) => (
                  <div key={step.step} className="relative text-center">
                    <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4 shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 px-2">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <WhatsAppButton message="Hello Zanzibaba Timber, I need delivery" />
              <CallButton />
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* 7. Logistics - Icon Grid */}
        <section id="logistics" className="py-24 md:py-32 bg-white dark:bg-gray-900 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">{t('homeSections.logistics.heading')}</h2>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              {t('homeSections.logistics.p1')}
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <IconCard icon={ShieldCheck} title="Professional Loading" description={t('homeSections.logistics.bullet1')} />
              <IconCard icon={Clock} title="Scheduled Delivery" description={t('homeSections.logistics.bullet2')} />
              <IconCard icon={Users} title="Project Coordination" description={t('homeSections.logistics.bullet3')} />
            </div>
            <div className="flex justify-center mt-10">
              <WhatsAppButton message="Hello Zanzibaba Timber, I need logistics info" />
            </div>
          </div>
        </section>

        {/* 8. Timber Sizes - Premium Cards */}
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

        <SectionDivider />

        {/* 9. Industries - Card Grid */}
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
                  <img
                    src={industry.image}
                    alt={`${industry.name} - ${industry.description}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
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

        {/* 10. Dedicated Contact CTA */}
        <section className="py-24 md:py-32 bg-primary-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Order Timber?</h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10 text-xl">
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <span>+255 716 002 790</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  <span>Kwa Ndevu, Daraja Bovu, Zanzibar</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <WhatsAppButton message="Hello Zanzibaba Timber, I want to order timber" />
                <CallButton />
                <Link
                  href="/delivery"
                  className="inline-flex items-center gap-2 bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all"
                >
                  <Truck className="w-5 h-5" />
                  Request Delivery
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 11. Quality Assurance */}
        <section id="quality" className="py-24 md:py-32 bg-gray-50 dark:bg-gray-800 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">{t('homeSections.quality.heading')}</h2>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              {t('homeSections.quality.p1')}
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <IconCard icon={ShieldCheck} title="Tropical Treatment" description={t('homeSections.quality.badge1')} />
              <IconCard icon={Award} title="Quality Inspected" description={t('homeSections.quality.badge2')} />
            </div>
            <div className="flex justify-center mt-10">
              <WhatsAppButton message="Hello Zanzibaba Timber, I want to know about your quality standards" />
            </div>
          </div>
        </section>

        {/* 12. Gallery */}
        <section id="gallery-section" className="py-24 md:py-32 bg-white dark:bg-gray-900 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">{t('homeSections.gallery.heading')}</h2>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
              {t('homeSections.gallery.p1')}
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { src: '/images/gallery/tanzanian-carpenters-working.jpg', alt: 'Carpentry & Construction projects', label: 'Carpentry & Construction' },
                { src: '/images/gallery/resort-construction-zanzibar.jpg', alt: 'Resort construction with treated pine timber', label: 'Resort Developments' },
                { src: '/images/gallery/hero-timber-yard-zanzibar.jpg', alt: 'Zanzibaba Timber yard stock', label: 'Our Timber Yard' },
              ].map((item, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/gallery" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg">
                <Images className="w-5 h-5" /> View Gallery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials - Limited to 3 */}
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

        {/* Locations - Key locations only */}
        <section id="locations" className="py-12 md:py-16 bg-gray-50 dark:bg-gray-800 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-6">Key Service Areas</h2>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {[
                { slug: 'nungwi', name: 'Nungwi' },
                { slug: 'paje', name: 'Paje' },
                { slug: 'kendwa', name: 'Kendwa' },
                { slug: 'stone-town', name: 'Stone Town' },
                { slug: 'fumba', name: 'Fumba' },
                { slug: 'ndevu', name: 'Ndevu' }
              ].map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-sm font-medium transition-colors"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/locations" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold text-sm">
                View All Locations <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Bar - Compact */}
        <section className="py-10 bg-primary-600 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div><div className="text-2xl md:text-3xl font-bold">500+</div><div className="text-xs md:text-sm">Projects</div></div>
              <div><div className="text-2xl md:text-3xl font-bold">11</div><div className="text-xs md:text-sm">Areas</div></div>
              <div><div className="text-2xl md:text-3xl font-bold">14+</div><div className="text-xs md:text-sm">Years</div></div>
              <div><Phone className="w-5 h-5 mx-auto mb-1" /><a href="tel:+255716002790" className="text-sm md:text-base font-bold">+255 716 002 790</a></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
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

         {/* Footer will be rendered */}
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