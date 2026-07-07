'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, MessageCircle, Menu, X } from 'lucide-react'
import { generateWhatsAppLink } from '@/lib/data'
import { useBilingual } from '@/lib/bilingual'
import { useState, useEffect, useRef, useCallback } from 'react'

export default function Header() {
  const { locale, setLocale, t } = useBilingual()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstFocusableRef = useRef<HTMLAnchorElement>(null)
  const lastFocusableRef = useRef<HTMLAnchorElement>(null)

  const navigation = [
    { href: '/', label: t('navigation.home') },
    { href: '/about', label: t('navigation.about') },
    { href: '/timber-sizes', label: t('navigation.timberSizes') },
    { href: '/marine-board', label: 'Marine Board' },
    { href: '/plywood', label: 'Plywood' },
    { href: '/prices', label: t('navigation.prices') },
    { href: '/projects', label: t('navigation.projects') },
    { href: '/blog', label: t('navigation.blog') },
    { href: '/contact', label: t('navigation.contact') },
  ]

  const close = useCallback(() => {
    setMenuOpen(false)
  }, [])

  useEffect(() => {
    close()
  }, [pathname, close])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
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
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen, close])

  useEffect(() => {
    if (menuOpen) {
      requestAnimationFrame(() => {
        firstFocusableRef.current?.focus()
      })
    }
  }, [menuOpen])

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

          <button
            ref={toggleRef}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-gray-600 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors min-h-[48px] min-w-[48px]"
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
          className="fixed inset-0 top-16 z-40"
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
            ? 'max-h-[calc(100vh-4rem)] opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-custom px-4 py-4 space-y-1">
          {navigation.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              ref={i === 0 ? firstFocusableRef : undefined}
              className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                pathname === item.href
                  ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20'
                  : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
            >
              {item.label}
            </Link>
          ))}

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
              <Phone className="w-4 h-4" />
              <span>+255 716 002 790</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
