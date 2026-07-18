'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MessageCircle, Search } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useBilingual } from '@/lib/bilingual'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function HeroSection() {
  const { t, locale } = useBilingual()
  const [query, setQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/timber-sizes?search=${encodeURIComponent(query.trim())}`)
    }
  }

  const msg = 'Hello Zanzibaba Timber, I need a quote'

  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/zanzibaba-timber-hero-banner.jpg"
          alt="Zanzibaba Timber yard — premium timber, plywood, marine board in Zanzibar"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <motion.div
        className="container-custom py-10 md:py-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white leading-tight"
            variants={itemVariants}
          >
            Buy Timber, Plywood, MDF, Marine Board & Building Materials in Zanzibar
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-200 mb-5"
            variants={itemVariants}
          >
            Wholesale &amp; Retail &bull; Same-Day Quotations &bull; Island-wide Delivery
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-3 mb-6" variants={itemVariants}>
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105 shadow-lg text-sm"
            >
              Get Quote
            </a>
            <a
              href={`https://wa.me/255716002790?text=${encodeURIComponent(msg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg transition-all hover:scale-105 shadow-lg text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </motion.div>

          <motion.form onSubmit={handleSearch} className="relative max-w-xl" variants={itemVariants}>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search timber, plywood, MDF, marine board..."
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/95 dark:bg-gray-800/95 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}
