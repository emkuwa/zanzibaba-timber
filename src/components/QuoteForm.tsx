'use client'

import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { useBilingual } from '@/lib/bilingual'
import { generateWhatsAppLink } from '@/lib/contact'

const productLengths: Record<string, Array<{ value: string; label: string }>> = {
  '1x6': [{ value: '12ft', label: '12ft' }],
  '1x8': [{ value: '12ft', label: '12ft' }],
  '1x10': [{ value: '12ft', label: '12ft' }],
  '2x2': [{ value: '12ft', label: '12ft' }, { value: '18ft', label: '18ft' }],
  '2x3': [{ value: '12ft', label: '12ft' }, { value: '18ft', label: '18ft' }],
  '2x4': [{ value: '12ft', label: '12ft' }, { value: '18ft', label: '18ft' }],
  '2x6': [{ value: '12ft', label: '12ft' }, { value: '18ft', label: '18ft' }],
  Mirunda: [{ value: '18ft', label: '18ft' }],
  'Mninga Hardwood': [{ value: '2x6x8', label: '2x6x8' }, { value: '2x8x8', label: '2x8x8' }, { value: '4x4x8', label: '4x4x8' }],
  'Mvule Hardwood': [{ value: '2x6x8', label: '2x6x8' }, { value: '2x8x8', label: '2x8x8' }, { value: '4x4x8', label: '4x4x8' }],
  'Mkongo Hardwood': [{ value: '2x6x8', label: '2x6x8' }, { value: '2x8x8', label: '2x8x8' }, { value: '4x4x8', label: '4x4x8' }],
}

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
      event_category: 'engagement',
      product: formData.product,
      length: formData.length
    })
    const text = `New Order:\nName: ${formData.name}\nPhone: ${formData.phone}\nProduct: ${formData.product} ${formData.length}\nMessage: ${formData.message}`
    window.open(generateWhatsAppLink(text), '_blank', 'noopener,noreferrer')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (name === 'product') {
      setFormData({ ...formData, product: value, length: productLengths[value]?.[0]?.value || '' })
      return
    }
    setFormData({ ...formData, [name]: value })
  }

  const availableLengths = productLengths[formData.product] || []

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <input
          aria-label={t('pages.quoteForm.yourName')}
          type="text"
          name="name"
          placeholder={t('pages.quoteForm.yourName')}
          required
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500"
        />
        <input
          aria-label={t('pages.quoteForm.phoneNumber')}
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
          aria-label={t('pages.quoteForm.selectSize')}
          name="product"
          value={formData.product}
          onChange={handleChange}
          required
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
          <option value="Mninga Hardwood">Mninga Hardwood</option>
          <option value="Mvule Hardwood">Mvule Hardwood</option>
          <option value="Mkongo Hardwood">Mkongo Hardwood</option>
        </select>
        <select
          aria-label="Timber length or hardwood dimensions"
          name="length"
          value={formData.length}
          onChange={handleChange}
          required
          disabled={!formData.product}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
        >
          <option value="">Select length</option>
          {availableLengths.map((length) => (
            <option key={length.value} value={length.value}>{length.label}</option>
          ))}
        </select>
      </div>

      <textarea
        aria-label={t('pages.quoteForm.additionalDetails')}
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
