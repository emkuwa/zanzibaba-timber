'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import en from '../../locales/en.json'
import sw from '../../locales/sw.json'

type Locale = 'en' | 'sw'

type BilingualContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, params?: Record<string, string>) => string
}

const BilingualContext = createContext<BilingualContextType | undefined>(undefined)

const translations: Record<Locale, any> = { en, sw }

export function BilingualProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')

  useEffect(() => {
    const detectBrowserLocale = () => {
      if (typeof window === 'undefined') return 'en'
      const browserLang = navigator.language.toLowerCase()
      return browserLang.startsWith('sw') ? 'sw' : 'en'
    }

    const saved = localStorage.getItem('locale') as Locale | null
    const initialLocale = saved || detectBrowserLocale()
    setLocaleState(initialLocale)
    document.documentElement.lang = initialLocale
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale)
      document.documentElement.lang = newLocale
    }
  }

  const t = (key: string, params?: Record<string, string>): string => {
    const keys = key.split('.')
    let value: any = translations[locale] || translations.en
    for (const k of keys) {
      value = value?.[k]
    }
    if (value === undefined || value === null) {
      value = key
    }
    let result = String(value)
    if (params) {
      for (const [param, val] of Object.entries(params)) {
        result = result.replace(`{${param}}`, val)
      }
    }
    return result
  }

  return (
    <BilingualContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </BilingualContext.Provider>
  )
}

export const useBilingual = () => {
  const ctx = useContext(BilingualContext)
  if (!ctx) throw new Error('useBilingual must be used within BilingualProvider')
  return ctx
}