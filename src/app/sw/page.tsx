'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import HeroSection from '@/components/HeroSection'
import QuoteForm from '@/components/QuoteForm'
import PriceNotice from '@/components/PriceNotice'
import { getLocalBusinessSchema, getFAQSchema, getReviewSchema, getBreadcrumbSchema } from '@/lib/seo'
import { PRODUCT_VARIANTS, TIMBER_SIZES, INDUSTRIES, HOMEPAGE_FAQ, TESTIMONIALS, SIZE_USE_CASE, sizeToSlug, formatTZS, formatVariantLabel, SHEET_PRODUCTS } from '@/lib/data'
import Link from 'next/link'
import { MessageCircle, Phone, ArrowRight, Truck, Star, Package, Factory, Cog, Network, Warehouse, Container, ShieldCheck, Building2, MapPin, Percent, CheckCircle, Zap, TrendingUp } from 'lucide-react'
import { useBilingual } from '@/lib/bilingual'

const POPULAR_SIZES = new Set(TIMBER_SIZES.filter(s => s.popular).map(s => s.name))

const FEATURED_VARIANTS = PRODUCT_VARIANTS
  .filter(v => v.price)
  .sort((a, b) => {
    const aPop = POPULAR_SIZES.has(a.size) ? 0 : 1
    const bPop = POPULAR_SIZES.has(b.size) ? 0 : 1
    return aPop - bPop
  })
  .slice(0, 6)

const breadcrumb = getBreadcrumbSchema([
  { name: 'Nyumbani', url: '/' },
  { name: 'Swahili', url: '/sw' },
])

export default function SwHome() {
  const { t } = useBilingual()

  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <section className="bg-primary-800 py-2.5">
          <div className="container-custom">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs md:text-sm text-primary-100">
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-400" /> Mbao, Marine Board na Plywood</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-400" /> Utoaji BURE Zanzibar Zima</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-400" /> Punguzo bei za Jumla</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-400" /> WhatsApp Haraka</span>
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left mb-5">
                <div className="flex items-center gap-3 shrink-0">
                  <TrendingUp className="w-8 h-8 text-green-400" />
                  <div>
                    <h2 className="text-base md:text-lg font-bold">Msambazaji wa Mbao, Marine Board na Plywood Zanzibar</h2>
                    <p className="text-primary-200 text-xs">Kuaminika kwa wabunifu, hoteli na miradi ya serikali</p>
                  </div>
                </div>
                <p className="text-sm text-primary-100 leading-relaxed">
                  Zanzibaba Timber ni mtandao kamili wa usambazaji ujenzi wenye viwanda vyetu vya treatment, kiln drying, yadi ya stock, na meli za utoaji — pamoja na ushirikiano na washirika wa Tanzania bara.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {[
                  { value: '1,500+', label: 'Maagizo Yaliyotolewa', icon: Package },
                  { value: '50+', label: 'Miradi Imetolewa', icon: Building2 },
                  { value: '98%', label: 'Utoaji kwa Wakati', icon: Truck },
                  { value: '<30 min', label: 'Jibu Haraka', icon: Star },
                ].map((c) => (
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

        <section id="sizes" className="py-6 bg-gradient-to-bl from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-2">{t('pages.home.sizesTitle')}</h2>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-1 max-w-2xl mx-auto">
              {t('pages.home.sizesSubtitle')} — 12ft na 18ft
            </p>
            <div className="text-center mb-2"><PriceNotice /></div>
            <div className="mb-5">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
                {FEATURED_VARIANTS.map((v) => (
                  <Link key={v.sku} href={`/sw/timber-sizes/${sizeToSlug(v.size)}?length=${v.length}`} className="group bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between gap-1 mb-1">
                      <div className="text-sm md:text-xl font-bold text-primary-600 leading-tight">{formatVariantLabel(v)}</div>
                    </div>
                    {SIZE_USE_CASE[v.size] && <div className="text-[10px] text-gray-400 leading-tight mb-1">{SIZE_USE_CASE[v.size]}</div>}
                    {v.price && <div className="text-sm font-bold text-primary-700 dark:text-primary-400 mb-1">{formatTZS(v.price)}</div>}
                    <span className="text-xs font-semibold text-primary-600 group-hover:underline">Tazama &gt;&gt;&gt;</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/sw/prices" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg text-sm">
                Tazama Bei Zote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-green-600 py-3">
          <div className="container-custom">
            <div className="flex items-center justify-center gap-2 text-white text-sm font-semibold">
              <Truck className="w-4 h-4" />
              Utoaji BURE Zanzibar Zima kwa mbao zote
              <Link href="/sw/delivery" className="underline text-green-200 hover:text-white">Soma zaidi</Link>
            </div>
          </div>
        </section>

        <section className="py-6 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <h2 className="text-xl md:text-3xl font-bold text-center mb-2">Bei za Marine Board, Plywood na Mbao</h2>
            <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Bao za maji na plywood za ujenzi katika unene wote — karatasi 4ft x 8ft zinafikishwa Zanzibar zima.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto mb-4">
              {SHEET_PRODUCTS.slice(0, 4).map((product) => (
                <Link key={product.id} href={`/sw/${product.categoryId === 'marine-board' ? 'marine-board' : 'plywood'}/${product.slug}`} className="group bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all text-center">
                  <div className="text-[10px] text-gray-400 mb-1 uppercase tracking-wider font-medium">{product.categoryId === 'marine-board' ? 'Marine Board' : 'Plywood'}</div>
                  <div className="text-lg font-bold text-primary-600 mb-1">{product.thickness}</div>
                  <div className="text-sm font-bold text-green-600 mb-1">{formatTZS(product.finalPrice)}</div>
                  <div className="text-[10px] text-gray-400">kwa karatasi — Bei haijumuishi VAT</div>
                </Link>
              ))}
            </div>
            <p className="text-center text-xs text-gray-500 mb-4">Utoaji BURE Zanzibar Zima kwa bidhaa zote za karatasi.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/sw/marine-board" className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2 rounded-xl font-semibold hover:bg-primary-700 transition-all shadow text-sm">
                Marine Board <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/sw/plywood" className="inline-flex items-center gap-2 bg-accent-500 text-white px-5 py-2 rounded-xl font-semibold hover:bg-accent-600 transition-all shadow text-sm">
                Plywood <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-6 bg-white dark:bg-gray-900 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-lg md:text-2xl font-bold text-center mb-3">Wateja Wetu Wanasema Nini Kuhusu Mbao Yetu</h2>
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
          </div>
        </section>

        <section id="quote" className="py-6 bg-gradient-to-r from-primary-600 to-primary-800 text-white scroll-mt-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-1.5 bg-green-500/20 text-green-300 border border-green-500/30 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                <Percent className="w-3 h-3" /> Pata Anda Yako Bure
              </div>
              <h2 className="text-xl md:text-3xl font-bold mb-2">Pata Anda za Marine Board, Plywood na Mbao</h2>
              <p className="text-primary-100 mb-4 text-sm">Tutumie mahitaji yako. Bei nzuri na jibu la haraka linalohakikishwa.</p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center mb-4">
                <a href="https://wa.me/255716002790?text=Habari%20Zanzibaba%20Timber%2C%20nahitaji%20mbao" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2.5 rounded-lg transition-all hover:scale-105 shadow text-sm">
                  <MessageCircle className="w-4 h-4" />Pata Anda kwa WhatsApp
                </a>
                <a href="tel:+255716002790" className="inline-flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 py-2.5 rounded-lg transition-all hover:scale-105 shadow text-sm">
                  <Phone className="w-4 h-4" />Piga Sasa
                </a>
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>

        <section id="faq" className="py-6 bg-white dark:bg-gray-900 scroll-mt-20">
          <div className="container-custom">
            <h2 className="text-lg md:text-2xl font-bold text-center mb-4">Maswali Yanayoulizwa Sana — Mbao, Marine Board na Plywood</h2>
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
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(HOMEPAGE_FAQ)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getReviewSchema('Zanzibaba Timber', TESTIMONIALS.map(t => ({ author: t.name, text: t.text, rating: t.rating })))) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Footer />
      <FloatingButtons />
    </>
  )
}
