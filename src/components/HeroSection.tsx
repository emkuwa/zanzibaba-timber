'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, MapPin, ShieldCheck, Truck, Clock, Star } from 'lucide-react'
import { useBilingual } from '@/lib/bilingual'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

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
      className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white font-semibold px-5 py-3 rounded-lg transition-all hover:scale-105 shadow-lg text-sm"
    >
      <MessageCircle className="w-4 h-4" />
      Get Quote
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
      className="inline-flex items-center gap-1.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold px-5 py-3 rounded-lg transition-all hover:scale-105 shadow-lg text-sm"
    >
      <Phone className="w-4 h-4" />
      Call Now
    </a>
  )
}

export default function HeroSection() {
  const { t } = useBilingual()

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/zanzibaba-timber-hero-banner.jpg"
          alt="Zanzibaba Timber yard — premium treated pine timber in Zanzibar"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <motion.div
        className="container-custom py-12 md:py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl">
          <motion.div
            className="inline-flex items-center gap-1.5 bg-green-600/20 text-green-300 border border-green-500/30 px-3 py-1 rounded-full text-xs font-semibold mb-4"
            variants={itemVariants}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Zanzibar&apos;s Trusted Timber Supply Network
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 text-white leading-tight"
            variants={itemVariants}
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg mb-4 text-gray-200 leading-relaxed max-w-3xl"
            variants={itemVariants}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3 md:gap-5 mb-5 text-xs md:text-sm text-gray-300"
            variants={itemVariants}
          >
            <span className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5 text-green-400" /> Island-wide Delivery</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-green-400" /> Quotes in 30 min</span>
            <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-green-400" /> 1,500+ Projects</span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-4"
            variants={itemVariants}
          >
            <WhatsAppButton message="Hello Zanzibaba Timber, I need timber prices for my project" />
            <CallButton />
          </motion.div>

          <motion.div
            className="flex items-center text-gray-400 text-xs"
            variants={itemVariants}
          >
            <MapPin className="w-3 h-3 mr-1.5 shrink-0" />
            <span>Kwa Ndevu, Daraja Bovu, Zanzibar • Cash on Delivery Available</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
