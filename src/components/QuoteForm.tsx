'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { useBilingual } from '@/lib/bilingual'

export default function QuoteForm() {
  const { t } = useBilingual()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: '',
    length: '18ft',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    ;(window as any).gtag?.('event', 'quote_submit', { 
      event_category: 'engagement',
      product: formData.product,
      length: formData.length
    })
    const text = `New Quote:%0AName: ${formData.name}%0APhone: ${formData.phone}%0AProduct: ${formData.product} ${formData.length}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/255716002790?text=${encodeURIComponent(text)}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder={t('pages.quoteForm.yourName')}
          required
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder={t('pages.quoteForm.phoneNumber')}
          required
          value={formData.phone}
          onChange={handleChange}
          className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <select
          name="product"
          value={formData.product}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
        >
          <option value="">{t('pages.quoteForm.selectSize')}</option>
          <option value="1x6">1x6 Pine</option>
          <option value="1x8">1x8 Pine</option>
          <option value="1x10">1x10 Pine</option>
          <option value="2x2">2x2 Pine</option>
          <option value="2x3">2x3 Pine</option>
          <option value="2x4">2x4 Pine</option>
          <option value="2x6">2x6 Pine</option>
          <option value="Mirunda">Mirunda</option>
        </select>
        <select
          name="length"
          value={formData.length}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
        >
          <option value="18ft">{t('pages.quoteForm.lengths.18ft')}</option>
          <option value="12ft">{t('pages.quoteForm.lengths.12ft')}</option>
        </select>
      </div>

      <textarea
        name="message"
        placeholder={t('pages.quoteForm.additionalDetails')}
        rows={3}
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
      />

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
      >
        <MessageCircle className="w-5 h-5" />
        <span>{t('common.sendToWhatsApp')}</span>
      </button>
      
      <p className="text-center text-sm text-gray-500">{t('pages.quoteForm.responseTime')}</p>
    </form>
  )
}