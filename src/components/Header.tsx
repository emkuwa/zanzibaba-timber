'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, MessageCircle } from 'lucide-react'
import { generateWhatsAppLink } from '@/lib/data'
import { useBilingual } from '@/lib/bilingual'

export default function Header() {
  const { locale, setLocale, t } = useBilingual()
  const pathname = usePathname()

  const navigation = [
    { href: '/', label: t('navigation.home') },
    { href: '/about', label: t('navigation.about') },
    { href: '/timber-sizes', label: t('navigation.timberSizes') },
    { href: '/marine-board', label: 'Marine Board' },
    { href: '/plywood', label: 'Plywood' },
    { href: '/prices', label: t('navigation.prices') },
    { href: '/projects', label: t('navigation.projects') },
    { href: '/gallery', label: t('navigation.gallery') },
    { href: '/locations', label: t('navigation.locations') },
    { href: '/blog', label: t('navigation.blog') },
    { href: '/contact', label: t('navigation.contact') },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm">
      <nav className="container-custom flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex flex-col shrink-0">
          <span className="text-lg md:text-xl font-bold text-primary-600 dark:text-primary-400 leading-tight">
            Zanzibaba Timber
          </span>
          <span className="hidden sm:block text-[10px] md:text-xs text-gray-500 dark:text-gray-400 leading-tight -mt-0.5">
            Premium Treated Pine Supplier
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors min-h-[48px] flex items-center ${
                pathname === item.href
                  ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-1.5 md:gap-2">
          <a
            href="tel:+255716002790"
            className="inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-300 hover:text-primary-600 text-sm font-medium transition-colors min-h-[48px]"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="whitespace-nowrap">+255 716 002 790</span>
          </a>

          <a
            href={generateWhatsAppLink('Hello Zanzibaba Timber')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:shadow-md active:scale-95 min-h-[48px]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => setLocale(locale === 'en' ? 'sw' : 'en')}
            className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-[48px] text-xs font-medium text-gray-500 dark:text-gray-400"
            aria-label="Toggle language"
          >
            <span className="text-xs leading-none">🌐</span>
            <span>{locale.toUpperCase()}</span>
          </button>


        </div>
      </nav>
    </header>
  )
}
