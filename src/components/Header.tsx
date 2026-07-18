'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MessageCircle, Menu, X, ChevronDown } from 'lucide-react'
import { generateWhatsAppLink } from '@/lib/data'
import { useBilingual } from '@/lib/bilingual'
import { useState, useEffect, useRef, useCallback } from 'react'

export default function Header() {
  const { locale, setLocale, t } = useBilingual()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstFocusableRef = useRef<HTMLAnchorElement>(null)
  const lastFocusableRef = useRef<HTMLAnchorElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  const navigation = [
    { href: '/', label: t('navigation.home') },
  ]

  const productLinks = [
    { href: '/timber-sizes', label: t('navigation.timberSizes') },
    { href: '/hardwood', label: 'Hardwood' },
    { href: '/treated-wood-poles', label: t('navigation.treatedWoodPoles') },
    { href: '/marine-board', label: 'Marine Board' },
    { href: '/plywood', label: 'Plywood' },
    { href: '/prices', label: t('navigation.prices') },
  ]

  const serviceLinks = [
    { href: '/hotel-supply', label: t('navigation.hotelSupply') },
    { href: '/villa-supply', label: t('navigation.villaSupply') },
    { href: '/government-supply', label: t('navigation.governmentSupply') },
    { href: '/wholesale', label: t('navigation.wholesale') },
    { href: '/delivery', label: t('navigation.delivery') },
  ]

  const isActive = (href: string) => pathname === href
  const isProductChildActive = productLinks.some((l) => isActive(l.href))
  const isServiceChildActive = serviceLinks.some((l) => isActive(l.href))

  const close = useCallback(() => {
    setMenuOpen(false)
  }, [])

  useEffect(() => {
    close()
    setProductsOpen(false)
    setServicesOpen(false)
  }, [pathname, close])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
        toggleRef.current?.focus()
        return
      }
      if (e.key === 'Tab') {
        const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable || focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last.focus() }
        } else {
          if (document.activeElement === last) { e.preventDefault(); first.focus() }
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen, close])

  useEffect(() => {
    if (menuOpen) {
      requestAnimationFrame(() => firstFocusableRef.current?.focus())
    }
  }, [menuOpen])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false)
      }
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const linkClass = (href: string) =>
    `px-2.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 min-h-[40px] flex items-center whitespace-nowrap ${
      isActive(href)
        ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
        : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800/50 active:scale-95'
    }`

  const dropdownTriggerClass = (isChildActive: boolean, isOpen: boolean) =>
    `px-2.5 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 min-h-[40px] flex items-center gap-1 whitespace-nowrap ${
      isChildActive || isOpen
        ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
        : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800/50 active:scale-95'
    }`

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm">
      <nav className="container-custom flex items-center justify-between h-14 lg:h-16 px-4 md:px-6">
        <Link href="/" className="flex flex-col shrink-0">
          <span className="text-base md:text-xl font-bold text-primary-600 dark:text-primary-400 leading-tight">
            Zanzibaba Timber
          </span>
          <span className="hidden sm:block text-[10px] md:text-xs text-gray-500 dark:text-gray-400 leading-tight -mt-0.5">
            Premium Treated Pine Supplier
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          <Link href="/" className={linkClass('/')}>{t('navigation.home')}</Link>

          <div ref={productsRef} className="relative">
            <button
              onClick={() => { setProductsOpen((p) => !p); setServicesOpen(false) }}
              className={dropdownTriggerClass(isProductChildActive, productsOpen)}
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              Products
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
            </button>
            {productsOpen && (
              <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg py-2 z-50">
                {productLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setProductsOpen(false)}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      isActive(item.href)
                        ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20 font-medium'
                        : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div ref={servicesRef} className="relative">
            <button
              onClick={() => { setServicesOpen((s) => !s); setProductsOpen(false) }}
              className={dropdownTriggerClass(isServiceChildActive, servicesOpen)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg py-2 z-50">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setServicesOpen(false)}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      isActive(item.href)
                        ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20 font-medium'
                        : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/projects" className={linkClass('/projects')}>Projects</Link>
          <Link href="/blog" className={linkClass('/blog')}>Blog</Link>
          <Link href="/about" className={linkClass('/about')}>About</Link>
          <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <a
            href="tel:+255716002790"
            className="inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-300 hover:text-primary-600 text-sm font-medium transition-colors min-h-[40px]"
          >
            <span className="inline whitespace-nowrap">+255 716 002 790</span>
          </a>

          <a
            href={generateWhatsAppLink('Hello Zanzibaba Timber')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-3 py-1.5 rounded-lg transition-all hover:shadow-md active:scale-95 min-h-[36px]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => setLocale(locale === 'en' ? 'sw' : 'en')}
            className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-[40px] text-xs font-medium text-gray-500 dark:text-gray-400"
            aria-label="Toggle language"
          >
            <span className="text-xs leading-none">🌐</span>
            <span>{locale.toUpperCase()}</span>
          </button>

          <button
            ref={toggleRef}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-[44px] min-w-[44px]"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 top-14 z-40"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`lg:hidden overflow-y-auto bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300 ease-in-out ${
          menuOpen
            ? 'max-h-[calc(100vh-3.5rem)] opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-custom px-4 py-4 space-y-1">
          <Link
            href="/"
            ref={firstFocusableRef}
            className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
              pathname === '/' ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20' : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800/50'
            }`}
          >
            {t('navigation.home')}
          </Link>

          <div className="border-t border-gray-100 dark:border-gray-800 pt-2 mt-2">
            <p className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Products</p>
            {productLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href) ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20' : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-gray-100 dark:border-gray-800 pt-2 mt-2">
            <p className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Services</p>
            {serviceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href) ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20' : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-gray-100 dark:border-gray-800 pt-2 mt-2">
            {[
              { href: '/projects', label: 'Projects' },
              { href: '/blog', label: 'Blog' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.href) ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20' : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
            <a
              href={generateWhatsAppLink('Hello Zanzibaba Timber')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-all hover:shadow-md active:scale-95 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              ref={lastFocusableRef}
              href="tel:+255716002790"
              className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm font-semibold px-4 py-3 rounded-lg transition-all min-h-[48px]"
            >
              <span>+255 716 002 790</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
