'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import HeroSection from '@/components/HeroSection'
import ImageWithFallback from '@/components/ImageWithFallback'
import QuoteForm from '@/components/QuoteForm'
import PriceNotice from '@/components/PriceNotice'
import { getLocalBusinessSchema, getFAQSchema, getReviewSchema } from '@/lib/seo'
import { PRODUCT_VARIANTS, TIMBER_SIZES, INDUSTRIES, HOMEPAGE_FAQ, TESTIMONIALS, SIZE_USE_CASE, sizeToSlug, formatTZS, formatVariantLabel, SHEET_PRODUCTS } from '@/lib/data'
import Link from 'next/link'
import { MessageCircle, Phone, ArrowRight, Truck, Star, Package, Factory, Cog, Network, Warehouse, Container, ShieldCheck, Building2, MapPin, Percent, CheckCircle, Zap, TrendingUp } from 'lucide-react'
import { useBilingual } from '@/lib/bilingual'

const POPULAR_SIZES = new Set(TIMBER_SIZES.filter(s => s.popular).map(s => s.name))

const TIMBER_PRICE_NOTES = 'Prices Excluding VAT. Free Delivery Across Zanzibar. Cash on Delivery Available. Prices may change without prior notice depending on stock availability.'

function WhatsAppButton({ message, label, fullWidth }: { message?: string; label?: string; fullWidth?: boolean }) {
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
      className={`inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2.5 rounded-lg transition-all hover:scale-105 shadow text-sm ${fullWidth ? 'w-full justify-center' : ''}`}
    >
      <MessageCircle className="w-4 h-4" />
      {label || 'Get Quote'}
    </a>
  )
}

function CallButton({ fullWidth }: { fullWidth?: boolean }) {
  const handleClick = () => {
    ;(window as any).gtag?.('event', 'call_click', { event_category: 'engagement' })
  }
  return (
    <a
      href="tel:+255716002790"
      onClick={handleClick}
      className={`inline-flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 py-2.5 rounded-lg transition-all hover:scale-105 shadow text-sm ${fullWidth ? 'w-full justify-center' : ''}`}
    >
      <Phone className="w-4 h-4" />
      Call Now
    </a>
  )
}

function StockBadge({ v }: { v: typeof PRODUCT_VARIANTS[0] }) {
  const limitedStock = ['2x8', '1x4']
  const isLimited = limitedStock.includes(v.size) || (v.size === 'Treated Wood Poles')
  if (isLimited) {
    return <span className="text-[10px] bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-1.5 py-0.5 rounded-full">Limited Stock</span>
  }
  return <span className="text-[10px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-1.5 py-0.5 rounded-full">In Stock</span>
}

function TimberSizeCard({ v }: { v: typeof PRODUCT_VARIANTS[0] }) {
  const useCase = SIZE_USE_CASE[v.size]
  const isPopular = POPULAR_SIZES.has(v.size)
  return (
    <Link
      href={`/timber-sizes/${sizeToSlug(v.size)}?length=${v.length}`}
      className="group bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
    >
      <div className="flex items-start justify-between gap-1 mb-1">
        <div className="text-sm md:text-xl font-bold text-primary-600 leading-tight">{formatVariantLabel(v)}</div>
        {isPopular && <span className="text-[10px] bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-1.5 py-0.5 rounded-full shrink-0 mt-0.5 font-semibold">Popular</span>}
      </div>
      {useCase && <div className="text-[10px] text-gray-400 leading-tight mb-1">{useCase}</div>}
      <div className="text-[10px] text-gray-500 mb-1">{v.dimensions}</div>
      {v.price && <div className="text-sm font-bold text-primary-700 dark:text-primary-400 mb-1">{formatTZS(v.price)}</div>}
      <div className="flex items-center justify-between pt-1.5 border-t border-gray-100 dark:border-gray-700">
        <StockBadge v={v} />
        <span className="text-xs font-semibold text-primary-600 group-hover:underline">View details</span>
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

const TRUST_COUNTERS = [
  { value: '1,500+', label: 'Orders Delivered', icon: Package },
  { value: '50+', label: 'Projects Supplied', icon: Building2 },
  { value: '98%', label: 'On-Time Delivery', icon: Truck },
  { value: '<30 min', label: 'Fast Response', icon: Star },
]

const FEATURED_VARIANTS = PRODUCT_VARIANTS
  .filter(v => v.price)
  .sort((a, b) => {
    const aPop = POPULAR_SIZES.has(a.size) ? 0 : 1
    const bPop = POPULAR_SIZES.has(b.size) ? 0 : 1
    return aPop - bPop
  })
  .slice(0, 6)

export default function Home() {
  const { t } = useBilingual()

  return (
    <>
      <Header />

      {/* Sticky Mobile WhatsApp Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-green-600 md:hidden shadow-lg">
        <a
          href="https://wa.me/255716002790?text=Hello%20Zanzibaba%20Timber%2C%20I%20need%20timber"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 text-white font-semibold text-sm"
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp — Get a Quote
        </a>
      </div>

      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Trust Bar */}
        <section className="bg-primary-800 py-2.5">
          <div className="container-custom">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs md:text-sm text-primary-100">
                <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-400" /> Premium Timber, Marine Board & Plywood</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-400" /> FREE Delivery Across Zanzibar</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-400" /> Bulk Order Discounts</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-400" /> Fast WhatsApp Quotes</span>
            </div>
          </div>
        </section>

        {/* 3. Social Proof — Trust Counters */}
        <section className="py-6 md:py-8 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left mb-5">
                <div className="flex items-center gap-3 shrink-0">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                  <div>
                    <h2 className="text-base md:text-lg font-bold">Trusted Marine Board, Plywood & Timber Supplier in Zanzibar</h2>
                    <p className="text-primary-200 text-xs">Reliable supply for contractors, hotels & government projects</p>
                  </div>
                </div>
                <p className="text-sm text-primary-100 leading-relaxed">
                  Zanzibaba Timber is a fully integrated construction supply network with our own treatment plant, kiln drying, stock yard, and delivery fleet — plus strategic partnerships across mainland Tanzania.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {TRUST_COUNTERS.map((c) => (
                  <div key={c.label} className="bg-white/10 rounded-lg p-3 md:p-4 text-center backdrop-blur-sm border border-white/10">
                    <c.icon className="w-6 h-6 text-green-400 mx-auto mb-1" />
                    <div className="text-xl md:text-3xl font-bold">{c.value}</div>
                    <div className="text-[11px] text-primary-200">{c.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Premium Timber Sizes — popular first, 6 with prices */}
        <section id="sizes" className="py-6 bg-gradient-to-bl from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-2">{t('pages.home.sizesTitle')}</h2>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-1 max-w-2xl mx-auto">
              {t('pages.home.sizesSubtitle')} — 12ft & 18ft
            </p>

            <div className="text-center mb-2">
              <PriceNotice />
            </div>

            <p className="text-center text-[11px] text-gray-500 dark:text-gray-400 mb-4">{TIMBER_PRICE_NOTES}</p>

            <div className="mb-5">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
                {FEATURED_VARIANTS.map((v) => (
                  <TimberSizeCard key={v.sku} v={v} />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/prices" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg text-sm">
                View All Prices <ArrowRight className="w-4 h-4" />
              </Link>
              <WhatsAppButton message="Hello Zanzibaba Timber, I need timber prices for my project" label="Get a Quote" />
            </div>
          </div>
        </section>

        {/* 5. FREE DELIVERY Banner */}
        <section className="bg-green-600 py-3">
          <div className="container-custom">
            <div className="flex items-center justify-center gap-2 text-white text-sm font-semibold">
              <Truck className="w-4 h-4" />
              FREE Delivery Across Zanzibar on all timber products
              <Link href="/delivery" className="underline text-green-200 hover:text-white">Learn more</Link>
            </div>
          </div>
        </section>

        {/* 5b. Marine Board & Plywood Products */}
        <section className="py-6 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-2">Marine Board, Plywood & Timber Prices</h2>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Waterproof marine boards and construction plywood in all thicknesses — 4ft x 8ft sheets delivered across Zanzibar.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto mb-4">
              {SHEET_PRODUCTS.slice(0, 4).map((product) => (
                <Link
                  key={product.id}
                  href={`/${product.categoryId === 'marine-board' ? 'marine-board' : 'plywood'}/${product.slug}`}
                  className="group bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all text-center"
                >
                  <div className="text-[10px] text-gray-400 mb-1">{product.categoryId === 'marine-board' ? 'Marine Board' : 'Plywood'}</div>
                  <div className="text-lg font-bold text-primary-600 mb-1">{product.thickness}</div>
                  <div className="text-sm font-bold text-green-600 mb-1">{formatTZS(product.finalPrice)}</div>
                  <div className="text-[10px] text-gray-400">per sheet — Prices exclude VAT</div>
                </Link>
              ))}
            </div>
            <p className="text-center text-xs text-gray-500 dark:text-gray-400 mb-4">FREE Delivery Across Zanzibar on all sheet products.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/marine-board" className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow text-sm">
                Marine Board <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/plywood" className="inline-flex items-center gap-2 bg-accent-500 text-white px-5 py-2 rounded-xl font-semibold hover:bg-accent-600 transition-all shadow text-sm">
                Plywood <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Urgency CTA */}
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-4">
          <div className="container-custom">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white text-center">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="font-bold text-sm md:text-base">Need timber today?</span>
              </div>
              <span className="text-primary-200 text-xs md:text-sm">Get your quotation in under 30 minutes.</span>
              <WhatsAppButton message="Hello Zanzibaba Timber, I need timber urgently" label="Get Urgent Quote" />
            </div>
          </div>
        </section>

        {/* 7. Testimonials — moved above quote */}
        <section id="testimonials" className="py-6 bg-white dark:bg-gray-900 scroll-mt-20">
          <div className="container-custom">
              <h2 className="text-lg md:text-2xl font-bold text-center mb-3">What Our Customers Say About Our Timber, Marine Board & Plywood</h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-3">
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
            <div className="text-center mt-3">
              <Link href="/testimonials" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold text-sm">
                View All Reviews <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* 8. Quote Form — after social proof */}
        <section id="quote" className="py-6 bg-gradient-to-r from-primary-600 to-primary-800 text-white scroll-mt-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 border border-green-500/30 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                <Percent className="w-3 h-3" /> Get Your Free Quote
              </div>
              <h2 className="text-xl md:text-3xl font-bold mb-2">Get Your Marine Board, Plywood & Timber Quote</h2>
              <p className="text-primary-100 mb-4 text-sm">Send your timber requirements. Competitive pricing and fast response guaranteed.</p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center mb-4">
                <WhatsAppButton message="Hello Zanzibaba Timber, I need timber prices for my project" label="Get Quote via WhatsApp" />
                <CallButton />
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* 9. Industries We Serve */}
        <section id="industries" className="py-6 bg-white dark:bg-gray-900 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-lg md:text-2xl font-bold text-center mb-3">Industries We Supply — Timber, Marine Board & Plywood</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
              {INDUSTRIES.map((industry) => (
                <Link
                  key={industry.id}
                  href={`/${industry.slug}`}
                  className="group relative block h-28 md:h-36 rounded-lg overflow-hidden shadow"
                >
                  <ImageWithFallback
                    src={industry.image}
                    alt={`${industry.name} — ${industry.description}`}
                    className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3">
                    <h3 className="text-xs md:text-sm font-bold text-white mb-0.5">{industry.name}</h3>
                    <span className="text-green-400 text-[10px] font-semibold group-hover:underline">Learn more →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Why Zanzibaba Timber — detailed advantages */}
        <section className="py-6 md:py-8 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="container-custom">
            <div className="text-center mb-5">
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">Why Choose Zanzibaba Timber, Marine Board & Plywood</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 max-w-2xl mx-auto">Reliable supply, consistent quality, and on-time delivery for construction projects across Zanzibar.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
              {[
                { icon: Factory, title: 'Treated Pine Production', desc: 'Daily production capacity of premium treated pine timber at our Kwa Ndevu yard. Consistent quality with reliable supply for projects of any scale.' },
                { icon: Warehouse, title: 'Stock Yard & Capacity', desc: 'Kwa Ndevu yard with covered storage, loading area, and large inventories of all standard sizes from 1x6 through 2x6 plus treated poles.' },
                { icon: Cog, title: 'Treatment Plant', desc: 'In-house pressure treatment and kiln-drying facilities ensuring all timber is professionally treated for Zanzibar\'s tropical coastal climate.' },
                { icon: Container, title: 'Processing & Cutting', desc: 'Log processing, dimensional cutting, and custom sizing capabilities for special orders and non-standard requirements.' },
                { icon: Truck, title: 'Delivery Fleet', desc: 'Own fleet covering all Zanzibar locations from Paje to Nungwi. FREE Delivery Across Zanzibar.' },
                { icon: Network, title: 'Supply Network', desc: 'Strategic partnerships with mainland Tanzania suppliers ensure consistent quality, competitive pricing, and reliable supply for every order.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 p-3 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 hover:shadow-md hover:border-primary-200 dark:hover:border-primary-800 transition-all">
                  <div className="w-9 h-9 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-4.5 h-4.5 text-primary-600" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm text-gray-900 dark:text-white mb-0.5">{item.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. How It Works — 2-col on mobile */}
        <section className="py-6 md:py-8 bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
          <div className="container-custom">
            <div className="text-center mb-5">
              <h2 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">How It Works — Timber, Marine Board & Plywood</h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 max-w-2xl mx-auto">From enquiry to delivery in three simple steps.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
              {[
                { step: 1, icon: MessageCircle, title: 'Contact & Quote', desc: 'Reach out via WhatsApp, phone, or our quick quote form. We respond within 30 minutes with competitive pricing.' },
                { step: 2, icon: Package, title: 'Processing & Quality Check', desc: 'Your timber is prepared, inspected for quality, and loaded at our Kwa Ndevu yard for transport.' },
                { step: 3, icon: Truck, title: 'Delivery & Payment', desc: 'We deliver across Zanzibar with cash on delivery. You inspect and pay when your timber arrives.' },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-2">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="w-7 h-7 bg-primary-600 text-white rounded-full flex items-center justify-center text-xs font-bold mb-1.5">{item.step}</div>
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-5">
              <WhatsAppButton message="Hello Zanzibaba Timber, I need timber for my project" label="Get a Quote" />
              <Link href="/prices" className="inline-flex items-center gap-2 border border-primary-600 text-primary-600 px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-800 transition-colors text-sm">
                View Prices
              </Link>
            </div>
          </div>
        </section>

        {/* 12. FAQ */}
        <section id="faq" className="py-6 bg-white dark:bg-gray-900 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-lg md:text-2xl font-bold text-center mb-4">FAQs — Timber, Marine Board & Plywood</h2>
            <div className="max-w-4xl mx-auto space-y-2">
              {HOMEPAGE_FAQ.slice(0, 3).map((faq, i) => (
                <details key={i} className="group bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                  <summary className="flex items-center justify-between p-3 cursor-pointer font-semibold text-xs md:text-sm hover:text-primary-600 transition-colors [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="shrink-0 ml-2 text-primary-600 group-open:rotate-180 transition-transform">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="px-3 pb-3 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 pt-2 text-xs md:text-sm leading-relaxed">
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
