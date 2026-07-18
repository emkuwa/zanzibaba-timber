'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Moon, Sun, Globe, Phone, MessageCircle, Menu, Search, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { generateWhatsAppLink, PHONE, PHONE_DISPLAY } from '@/lib/contact'
import { useBilingual } from '@/lib/bilingual'

export default function Header() {
  const { locale, setLocale, t } = useBilingual()
  const [isDark, setIsDark] = useState(false)
  const [themeLoaded, setThemeLoaded] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setIsDark(savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches)
    setThemeLoaded(true)
  }, [])

  useEffect(() => {
    if (!themeLoaded) return
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark, themeLoaded])

  useEffect(() => setMobileOpen(false), [pathname])

  const navigation = [
    { href: '/', label: t('navigation.home') },
    { href: '/about', label: t('navigation.about') },
    { href: '/timber-sizes', label: t('navigation.timberSizes') },
    { href: '/hardwood', label: 'Hardwood' },
    { href: '/prices', label: t('navigation.prices') },
    { href: '/projects', label: t('navigation.projects') },
    { href: '/gallery', label: t('navigation.gallery') },
    { href: '/blog', label: t('navigation.blog') },
    { href: '/contact', label: t('navigation.contact') },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b">
      <nav className="container-custom flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
          Zanzibaba Timber
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
                className={`hover:text-primary-600 transition-colors ${
                pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`)) ? 'text-primary-600' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-3 py-2 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          </a>

          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-3 py-2 rounded-lg transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => setLocale(locale === 'en' ? 'sw' : 'en')}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle language"
          >
            <Globe className="w-5 h-5" />
            <span className="ml-1 text-sm font-medium">{locale.toUpperCase()}</span>
          </button>

          <Link href="/search" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Search timber products">
            <Search className="w-5 h-5" />
          </Link>

          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setMobileOpen((open) => !open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      {mobileOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="md:hidden border-t bg-white dark:bg-gray-900 px-4 py-3">
          <div className="grid gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 ${pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`)) ? 'text-primary-600 bg-primary-50 dark:bg-gray-800' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
