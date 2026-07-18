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
    length: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    ;(window as any).gtag?.('event', 'quote_submit', { 
      event_category: 'conversion',
      event_label: formData.product,
      product: formData.product,
      length: formData.length
    })
    ;(window as any).gtag?.('event', 'form_submit', {
      event_category: 'conversion',
      event_label: 'quote_form'
    })
    const text = `New Order:\nName: ${formData.name}\nPhone: ${formData.phone}\nProduct: ${formData.product} ${formData.length}\nMessage: ${formData.message}`
    window.open(`https://wa.me/255716002790?text=${encodeURIComponent(text)}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-lg mx-auto">
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          name="name"
          placeholder={t('pages.quoteForm.yourName')}
          required
          value={formData.name}
          onChange={handleChange}
          className="px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 text-sm"
        />
        <input
          type="tel"
          name="phone"
          placeholder={t('pages.quoteForm.phoneNumber')}
          required
          value={formData.phone}
          onChange={handleChange}
          className="px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 text-sm"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <select
          name="product"
          value={formData.product}
          onChange={handleChange}
          required
          className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
        >
          <option value="">{t('pages.quoteForm.selectSize')}</option>
          <option value="2x2">2x2 Pine</option>
          <option value="2x3">2x3 Pine</option>
          <option value="2x4">2x4 Pine</option>
          <option value="2x6">2x6 Pine</option>
          <option value="2x8">2x8 Pine</option>
          <option value="Mninga Hardwood">Mninga Hardwood</option>
          <option value="Mvule Hardwood">Mvule Hardwood</option>
          <option value="Mkongo Hardwood">Mkongo Hardwood</option>
          <option value="Marine Board 18mm">Marine Board 18mm</option>
          <option value="Marine Board 12mm">Marine Board 12mm</option>
          <option value="18mm Plywood">18mm Plywood</option>
          <option value="15mm Plywood">15mm Plywood</option>
          <option value="12mm Plywood">12mm Plywood</option>
          <option value="9mm Plywood">9mm Plywood</option>
          <option value="6mm Plywood">6mm Plywood</option>
          <option value="3mm Plywood">3mm Plywood</option>
          <option value="Wood Poles">Treated Wood Poles</option>
        </select>
        <select
          name="length"
          value={formData.length}
          onChange={handleChange}
          required
          className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
        >
          <option value="">Select size / length</option>
          <option value="18ft">{t('pages.quoteForm.lengths.18ft')}</option>
          <option value="12ft">{t('pages.quoteForm.lengths.12ft')}</option>
          <option value="2x6x8">2x6x8 (Hardwood)</option>
          <option value="2x8x8">2x8x8 (Hardwood)</option>
          <option value="4x4x8">4x4x8 (Hardwood)</option>
          <option value="Sheet">Sheet</option>
        </select>
      </div>

      <textarea
        name="message"
        placeholder={t('pages.quoteForm.additionalDetails')}
        rows={2}
        value={formData.message}
        onChange={handleChange}
        className="w-full px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm"
      />

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-base"
      >
        <MessageCircle className="w-5 h-5" />
        <span>{t('common.sendToWhatsApp')}</span>
      </button>
      
      <p className="text-center text-xs text-gray-500">{t('pages.quoteForm.responseTime')}</p>
    </form>
  )
}
