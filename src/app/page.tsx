'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'
import HeroSection from '@/components/HeroSection'
import ImageWithFallback from '@/components/ImageWithFallback'
import OrderBuilder from '@/components/OrderBuilder'
import PriceNotice from '@/components/PriceNotice'
import { getLocalBusinessSchema, getFAQSchema, getReviewSchema, getWebSiteSchema } from '@/lib/seo'
import { PRODUCT_VARIANTS, TIMBER_SIZES, WOOD_TYPE_GROUPS, INDUSTRIES, HOMEPAGE_FAQ, TESTIMONIALS, SIZE_USE_CASE, sizeToSlug, formatTZS, formatVariantLabel, SHEET_PRODUCTS, SHEET_PRODUCT_CATEGORIES } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle, Search, Star, Package, Truck, Clock, ShieldCheck, MapPin, CheckCircle, ArrowRight, Upload, TreePine, Layers, Anchor } from 'lucide-react'
import { useState } from 'react'

function WhatsAppButton({ message, label, fullWidth }: { message?: string; label?: string; fullWidth?: boolean }) {
  const msg = message || 'Hello Zanzibaba Timber, I would like to start an order'
  return (
    <a
      href={`https://wa.me/255716002790?text=${encodeURIComponent(msg)}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2.5 rounded-lg transition-all hover:scale-105 shadow text-sm ${fullWidth ? 'w-full' : ''}`}
    >
      <MessageCircle className="w-4 h-4" />
      {label || 'WhatsApp'}
    </a>
  )
}

const CATEGORIES = [
  { name: 'Softwood', href: '/timber-sizes', icon: TreePine },
  { name: 'Hardwood', href: '/hardwood', icon: TreePine },
  { name: 'Treated Poles', href: '/treated-wood-poles', icon: TreePine },
  { name: 'Plywood', href: '/plywood', icon: Layers },
  { name: 'Marine Board', href: '/marine-board', icon: Anchor },
]

const STATS = [
  { value: '500+', label: 'Products', icon: Package },
  { value: 'Island-wide', label: 'Delivery', icon: Truck },
  { value: 'Same-Day', label: 'Quotes', icon: Clock },
  { value: '10+', label: 'Trusted Suppliers', icon: ShieldCheck },
]

const HOW_IT_WORKS = [
  { step: 1, title: 'Search', desc: 'Browse our products or tell us what you need.' },
  { step: 2, title: 'Add to Order', desc: 'Choose products and quantities for your order.' },
  { step: 3, title: 'Confirm Order', desc: 'Confirm quantity, delivery date & payment.' },
  { step: 4, title: 'Delivery', desc: 'We deliver to your site across Zanzibar.' },
]

const FEATURED_PRODUCTS = [
  { name: '2x4 Pine', desc: 'Most popular framing timber', price: '11,500', badge: 'In Stock', href: '/timber-sizes/2x4', image: '/images/gallery/treated-pine-timber.jpg' },
  { name: '2x6 Pine', desc: 'Heavy-duty structural beams', price: '31,000', badge: 'Popular', href: '/timber-sizes/2x6', image: '/images/gallery/treated-pine-timber.jpg' },
  { name: '18mm Marine Board', desc: 'Waterproof formwork', price: '52,000', badge: 'Imported', href: '/marine-board/18mm-marine-board', image: '/images/gallery/marine-board-zanzibar.jpg' },
  { name: 'Teak Poles 4"', desc: 'Natural termite-resistant', price: '11,500', badge: 'Free Delivery', href: '/treated-wood-poles', image: '/images/gallery/teak-wood-poles-mitiki.jpg' },
  { name: 'Mninga Hardwood', desc: 'Premium furniture and joinery timber', price: '95,000', badge: 'Hardwood', href: '/hardwood/mninga-hardwood-timber-zanzibar', image: '/images/products/mninga-hardwood-timber-zanzibar.jpg' },
]

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <Header />

      <div className="fixed bottom-0 left-0 right-0 z-50 bg-green-600 md:hidden shadow-lg">
        <a
          href="https://wa.me/255716002790?text=Hello%20Zanzibaba%20Timber%2C%20I%20need%20timber"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 text-white font-semibold text-sm"
        >
          <MessageCircle className="w-5 h-5" />
          Start Your Order on WhatsApp
        </a>
      </div>

      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Trust Bar */}
        <section className="bg-primary-800 py-2">
          <div className="container-custom">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-primary-100">
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-400" /> Free Delivery Island-wide</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-400" /> Wholesale Discounts</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-400" /> Cash on Delivery</span>
            </div>
          </div>
        </section>

        {/* 3. Statistics */}
        <section className="py-4 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="flex items-center gap-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10">
                  <s.icon className="w-6 h-6 text-green-400 shrink-0" />
                  <div>
                    <div className="text-lg font-bold">{s.value}</div>
                    <div className="text-[11px] text-primary-200">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Popular Categories */}
        <section className="py-5 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <h2 className="text-lg md:text-xl font-bold mb-3">Popular Categories</h2>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="inline-flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 border border-gray-200 dark:border-gray-700 hover:border-primary-300 rounded-full px-4 py-2 text-sm font-medium transition-all"
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.name}
                </Link>
              ))}
              <Link href="/timber-sizes" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold text-sm px-3 py-2">
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Today's Prices */}
        <section className="py-5 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-lg md:text-xl font-bold">Today&apos;s Prices</h2>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full font-medium">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    Live Market Prices
                  </span>
                  Updated Today
                </div>
              </div>
              <Link href="/prices" className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                View All Prices →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {PRODUCT_VARIANTS.filter(v => v.price && ['2x4', '1x8', '2x6'].includes(v.size)).slice(0, 4).map((v) => (
                <Link
                  key={v.sku}
                  href={`/timber-sizes/${sizeToSlug(v.size)}?length=${v.length}`}
                  className="bg-white dark:bg-gray-900 rounded-lg p-3 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
                >
                  <div className="text-sm font-bold text-primary-600">{formatVariantLabel(v)}</div>
                  <div className="text-[10px] text-gray-400">{v.dimensions}</div>
                  {v.price && <div className="text-base font-bold text-green-600 mt-1">{formatTZS(v.price)}</div>}
                  <div className="text-[10px] text-gray-400">per piece</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Featured Products */}
        <section className="py-5 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg md:text-xl font-bold">Featured Products</h2>
              <Link href="/timber-sizes" className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                View All Products →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {FEATURED_PRODUCTS.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all overflow-hidden"
                >
                  <div className="relative h-32 md:h-40 overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2 left-2 text-[10px] bg-primary-600 text-white px-2 py-0.5 rounded-full font-medium">
                      {p.badge}
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold text-sm text-gray-900 dark:text-white">{p.name}</h3>
                    <p className="text-[11px] text-gray-500 mb-1">{p.desc}</p>
                    <div className="text-base font-bold text-green-600">{formatTZS(parseInt(p.price.replace(/,/g, '')) || 0)}</div>
                    <div className="text-[10px] text-gray-400">TZS per piece</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 7. BOQ Upload */}
        <section id="quote" className="py-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="container-custom">
            <div className="text-center mb-4">
              <h2 className="text-lg md:text-xl font-bold mb-1">Build Your Order</h2>
              <p className="text-sm text-gray-500">Select products, set quantities, and send your complete order to WhatsApp.</p>
            </div>
            <OrderBuilder />
          </div>
        </section>

        {/* 8. Delivery Areas */}
        <section className="py-5 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <h2 className="text-lg md:text-xl font-bold mb-3">Delivery Areas</h2>
            <div className="flex flex-wrap gap-2">
              {['Paje', 'Nungwi', 'Kendwa', 'Stone Town', 'Kiwengwa', 'Jambiani', 'Matemwe', 'Fumba'].map((loc) => (
                <Link
                  key={loc}
                  href={`/locations/${loc.toLowerCase()}`}
                  className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-full px-3 py-1.5 text-xs font-medium transition-all"
                >
                  <MapPin className="w-3 h-3" />
                  {loc}
                </Link>
              ))}
              <Link href="/locations" className="text-primary-600 hover:text-primary-700 font-semibold text-xs inline-flex items-center gap-1 px-2 py-1.5">
                All Locations <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* 9. Customer Reviews */}
        <section className="py-5 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg md:text-xl font-bold">Customer Reviews</h2>
              <Link href="/testimonials" className="text-primary-600 hover:text-primary-700 font-semibold text-sm">
                View All Reviews →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TESTIMONIALS.slice(0, 2).map((t, i) => (
                <div key={i} className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 text-sm italic mb-2">&ldquo;{t.text}&rdquo;</p>
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-2">
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Why Choose Us */}
        <section className="py-5 bg-white dark:bg-gray-900">
          <div className="container-custom">
            <h2 className="text-lg md:text-xl font-bold text-center mb-4">Why Choose Zanzibaba Timber</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: ShieldCheck, title: 'Quality Guaranteed', desc: 'Professionally treated timber' },
                { icon: Truck, title: 'Free Delivery', desc: 'Island-wide delivery' },
                { icon: Clock, title: 'Same-Day Quotes', desc: 'Response in 30 minutes' },
                { icon: Package, title: '500+ Products', desc: 'All sizes & materials' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center p-3 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50">
                  <div className="w-9 h-9 bg-primary-50 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mb-2">
                    <item.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-sm mb-0.5">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. How It Works — 4-step timeline */}
        <section className="py-5 bg-gray-50 dark:bg-gray-800">
          <div className="container-custom">
            <h2 className="text-lg md:text-xl font-bold text-center mb-4">How It Works</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {HOW_IT_WORKS.map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mb-2">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-sm mb-0.5">{item.title}</h3>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. Final CTA Banner */}
        <section className="py-8 bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="container-custom text-center">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-3">Need Timber for Your Project?</h2>
            <p className="text-primary-100 text-sm mb-5 max-w-xl mx-auto">Get a free quote in under 30 minutes. We supply timber, plywood, marine board, MDF and building materials across Zanzibar.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-1.5 bg-white text-primary-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all shadow text-sm"
              >
                <Upload className="w-4 h-4" />
                Upload BOQ
              </a>
              <WhatsAppButton message="Hello Zanzibaba Timber, I would like to order timber for my project" label="Start Order" />
              <a
                href="tel:+255716002790"
                className="inline-flex items-center justify-center gap-1.5 bg-primary-500 hover:bg-primary-400 text-white font-semibold px-6 py-3 rounded-lg transition-all shadow text-sm"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQSchema(HOMEPAGE_FAQ)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getReviewSchema('Zanzibaba Timber', TESTIMONIALS.map(t => ({ author: t.name, text: t.text, rating: t.rating })))) }} />
      <Footer />
      <FloatingButtons />
    </>
  )
}
