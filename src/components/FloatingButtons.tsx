'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { generateWhatsAppLink } from '@/lib/data'
import { useBilingual } from '@/lib/bilingual'

export default function FloatingButtons() {
  const { t } = useBilingual()

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2 sm:bottom-6 sm:right-6 sm:space-y-3">
      <a
        href={generateWhatsAppLink('Hello')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-transform hover:scale-110 animate-pulse"
        aria-label={t('common.whatsapp')}
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>

      <a
        href="tel:+255716002790"
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label={t('common.call')}
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  )
}
