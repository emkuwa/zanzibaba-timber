'use client'

import Link from 'next/link'
import { Phone, MessageCircle, MapPin } from 'lucide-react'
import { generateWhatsAppLink } from '@/lib/data'
import { useBilingual } from '@/lib/bilingual'

export default function Footer() {
  const { t } = useBilingual()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 md:py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Zanzibaba Timber</h3>
            <p className="text-gray-300 text-sm mb-3">
              {t('footer.description')}
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-gray-300 text-sm">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>{t('hero.location')}</span>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3">{t('footer.quickLinks')}</h4>
            <ul className="space-y-1">
              <li><Link href="/timber-sizes" className="text-gray-300 hover:text-white block py-2">{t('navigation.timberSizes')}</Link></li>
              <li><Link href="/marine-board" className="text-gray-300 hover:text-white block py-2">Marine Board</Link></li>
              <li><Link href="/plywood" className="text-gray-300 hover:text-white block py-2">Plywood</Link></li>
              <li><Link href="/prices" className="text-gray-300 hover:text-white block py-2">{t('navigation.prices')}</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-white block py-2">{t('navigation.projects')}</Link></li>
              <li><Link href="/delivery" className="text-gray-300 hover:text-white block py-2">{t('navigation.delivery')}</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3">{t('footer.contact')}</h4>
            <ul className="space-y-1">
              <li>
                <a href="tel:+255716002790" className="flex items-center justify-center sm:justify-start gap-2 text-gray-300 hover:text-white py-2">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>+255 716 002 790</span>
                </a>
              </li>
              <li>
                <a
                  href={generateWhatsAppLink('Hello Zanzibaba Timber')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center sm:justify-start gap-2 text-gray-300 hover:text-white py-2"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>{t('common.whatsapp')}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-3">{t('footer.followUs')}</h4>
            <a
              href={generateWhatsAppLink('Hello')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg transition-colors text-sm"
            >
              {t('common.whatsapp')}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400 text-sm">
          {t('footer.copyright').replace('{year}', String(year))}
        </div>
      </div>
    </footer>
  )
}
