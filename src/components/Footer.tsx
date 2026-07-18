'use client'

import Link from 'next/link'
import { Phone, MessageCircle, MapPin, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import { generateWhatsAppLink } from '@/lib/data'
import { useBilingual } from '@/lib/bilingual'

export default function Footer() {
  const { t, locale } = useBilingual()
  const year = new Date().getFullYear()

  const S = (sw: string, en: string) => locale === 'sw' ? sw : en

  const locations = [
    { name: 'Paje', slug: 'paje' },
    { name: 'Nungwi', slug: 'nungwi' },
    { name: 'Kendwa', slug: 'kendwa' },
    { name: 'Stone Town', slug: 'stone-town' },
    { name: 'Chukwani', slug: 'chukwani' },
    { name: 'Bububu', slug: 'bububu' },
    { name: 'Fumba', slug: 'fumba' },
    { name: 'Kiwengwa', slug: 'kiwengwa' },
    { name: 'Matemwe', slug: 'matemwe' },
    { name: 'Jambiani', slug: 'jambiani' },
    { name: 'Daraja Bovu', slug: 'ndevu' },
  ]

  const isActive = (href: string) => {
    if (typeof window === 'undefined') return false
    return window.location.pathname === href
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container-custom px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          <div>
            <h3 className="text-lg font-bold mb-4">{S('Kampuni', 'Company')}</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Nyumbani', 'Home')}</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Kuhusu', 'About')}</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Miradi', 'Projects')}</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Blog', 'Blog')}</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Mawasiliano', 'Contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{S('Bidhaa', 'Products')}</h3>
            <ul className="space-y-2">
              <li><Link href="/timber-sizes" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Saizi za Mbao', 'Timber Sizes')}</Link></li>
              <li><Link href="/treated-wood-poles" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Miti ya Mbao', 'Wood Poles')}</Link></li>
              <li><Link href="/timber-zanzibar" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Mbao Treated Pine', 'Treated Pine Timber')}</Link></li>
              <li><Link href="/marine-board" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Marine Board', 'Marine Board')}</Link></li>
              <li><Link href="/plywood" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Plywood', 'Plywood')}</Link></li>
              <li><Link href="/prices" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Bei', 'Prices')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{S('Huduma', 'Services')}</h3>
            <ul className="space-y-2">
              <li><Link href="/timber-sizes" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Usambazaji Mbao', 'Timber Supply')}</Link></li>
              <li><Link href="/hotel-supply" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Usambazaji Hoteli', 'Hotel Supply')}</Link></li>
              <li><Link href="/villa-supply" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Usambazaji Villa', 'Villa Supply')}</Link></li>
              <li><Link href="/government-supply" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Usambazaji Serikali', 'Government Supply')}</Link></li>
              <li><Link href="/wholesale" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Jumla', 'Wholesale')}</Link></li>
              <li><Link href="/delivery" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Usafiri', 'Delivery')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{S('Maeneo', 'Locations')}</h3>
            <ul className="space-y-2">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{S('Nyenzo', 'Resources')}</h3>
            <ul className="space-y-2">
              <li><Link href="/prices" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Maswali', 'FAQ')}</Link></li>
              <li><Link href="/sw/mirunda" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Miti ya Mbao Zanzibar', 'Wood Poles')}</Link></li>
              <li><Link href="/sitemap.xml" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Ramani ya Tovuti', 'Sitemap')}</Link></li>
              <li><Link href="/sw" className="text-gray-400 hover:text-white text-sm transition-colors">{S('Toleo la Kiswahili', 'Swahili Version')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <a href="tel:+255716002790" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+255 716 002 790</span>
              </a>
              <a href={generateWhatsAppLink('Hello Zanzibaba Timber')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:info@zanzibaba.com" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@zanzibaba.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Kwa Ndevu, Daraja Bovu, Zanzibar</span>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3">
              <div className="flex items-center gap-3">
                <a href={generateWhatsAppLink('Hello Zanzibaba Timber')} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="WhatsApp">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="https://facebook.com/zanzibaba" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/zanzibaba" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/company/zanzibaba" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@zanzibaba" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
              <div className="text-xs text-gray-500 space-y-1 text-right">
                <p>Prices Excluding VAT</p>
                <p>Free Delivery Across Zanzibar</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-500 text-xs">
          {t('footer.copyright').replace('{year}', String(year))}
        </div>
      </div>
    </footer>
  )
}
