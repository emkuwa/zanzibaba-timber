'use client'

import Link from 'next/link'
import { Phone, MessageCircle, MapPin } from 'lucide-react'
import { generateWhatsAppLink } from '@/lib/data'
import { useBilingual } from '@/lib/bilingual'

export default function Footer() {
  const { t } = useBilingual()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Zanzibaba Timber</h3>
            <p className="text-gray-300 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <MapPin className="w-4 h-4" />
              <span>{t('hero.location')}</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><Link href="/timber-sizes" className="text-gray-300 hover:text-white">{t('navigation.timberSizes')}</Link></li>
              <li><Link href="/prices" className="text-gray-300 hover:text-white">{t('navigation.prices')}</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-white">{t('navigation.projects')}</Link></li>
              <li><Link href="/delivery" className="text-gray-300 hover:text-white">{t('navigation.delivery')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+255716002790" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                  <Phone className="w-4 h-4" />
                  <span>+255 716 002 790</span>
                </a>
              </li>
              <li>
                <a
                  href={generateWhatsAppLink('Hello Zanzibaba Timber')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('common.whatsapp')}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.followUs')}</h4>
            <a
              href={generateWhatsAppLink('Hello')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              {t('common.whatsapp')}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          {t('footer.copyright').replace('{year}', String(year))}
        </div>
      </div>
    </footer>
  )
}