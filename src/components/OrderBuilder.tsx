'use client'

import { useState, useMemo, useCallback } from 'react'
import { Plus, Trash2, ShoppingCart, MessageCircle, FileText, Minus, MapPin, Package, AlertCircle } from 'lucide-react'
import { PRODUCT_PRICES, SHEET_PRODUCTS, HARDWOOD_PRODUCTS, formatTZS, formatVariantLabel, formatHardwoodSize, WHATSAPP_NUMBER, PRICE_NOTES, LOCATIONS } from '@/lib/data'
import { useBilingual } from '@/lib/bilingual'

type Category = 'timber' | 'hardwood' | 'marine-board' | 'plywood'

type CartItem = {
  id: string
  category: Category
  label: string
  size: string
  length: string
  quantity: number
  unitPrice: number
}

type CustomerInfo = {
  name: string
  phone: string
  location: string
  notes: string
}

let idCounter = Date.now()
const genId = () => `item_${++idCounter}`

const TIMBER_OPTIONS = PRODUCT_PRICES.map(p => ({
  key: `${p.size}|${p.length}`,
  label: formatVariantLabel({ ...p, sku: `${p.size}-${p.length}` }),
  size: p.size,
  length: p.length,
  price: p.price,
  woodType: p.woodType,
}))

const HARDWOOD_OPTIONS = HARDWOOD_PRODUCTS.flatMap(product => product.variants.map(variant => ({
  key: variant.sku,
  label: `${formatHardwoodSize(variant.size)} ${product.name} Hardwood`,
  size: formatHardwoodSize(variant.size),
  length: '8 feet',
  price: variant.sellingPrice,
})))

const MARINE_OPTIONS = SHEET_PRODUCTS
  .filter(s => s.categoryId === 'marine-board')
  .map(s => ({
    key: s.id,
    label: `Marine Board ${s.thickness}`,
    size: s.thickness,
    length: s.sheetSize,
    price: s.finalPrice,
  }))

const PLYWOOD_OPTIONS = SHEET_PRODUCTS
  .filter(s => s.categoryId === 'plywood')
  .map(s => ({
    key: s.id,
    label: `Plywood ${s.thickness}`,
    size: s.thickness,
    length: s.sheetSize,
    price: s.finalPrice,
  }))

const DELIVERY_LOCATIONS = LOCATIONS.map(l => ({ name: l.name, id: l.id }))

function formatOrderItem(item: CartItem): string {
  if (item.category === 'timber' || item.category === 'hardwood') {
    return `${item.label} × ${item.quantity} pcs @ ${formatTZS(item.unitPrice)} = ${formatTZS(item.unitPrice * item.quantity)}`
  }
  return `${item.label} × ${item.quantity} sheets @ ${formatTZS(item.unitPrice)} = ${formatTZS(item.unitPrice * item.quantity)}`
}

export default function OrderBuilder() {
  const { t } = useBilingual()

  const [customer, setCustomer] = useState<CustomerInfo>({
    name: '',
    phone: '',
    location: '',
    notes: '',
  })

  const [category, setCategory] = useState<Category>('timber')
  const [selectedProduct, setSelectedProduct] = useState('')
  const [quantity, setQuantity] = useState(1)

  const [items, setItems] = useState<CartItem[]>([])

  const currentOptions = useMemo(() => {
    switch (category) {
      case 'timber': return TIMBER_OPTIONS
      case 'hardwood': return HARDWOOD_OPTIONS
      case 'marine-board': return MARINE_OPTIONS
      case 'plywood': return PLYWOOD_OPTIONS
    }
  }, [category])

  const selectedOption = useMemo(() => {
    return currentOptions.find(o => o.key === selectedProduct)
  }, [currentOptions, selectedProduct])

  const addItem = useCallback(() => {
    if (!selectedOption || quantity < 1) return
    const newItem: CartItem = {
      id: genId(),
      category,
      label: selectedOption.label,
      size: selectedOption.size,
      length: selectedOption.length,
      quantity,
      unitPrice: selectedOption.price,
    }
    setItems(prev => [...prev, newItem])
    setQuantity(1)
    setSelectedProduct('')
  }, [selectedOption, quantity, category])

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }, [])

  const updateQuantity = useCallback((id: string, qty: number) => {
    if (qty < 1) return
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i))
  }, [])

  const subtotal = useMemo(() => {
    return items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0)
  }, [items])

  const transportCost = useMemo(() => {
    if (!customer.location) return 0
    return 0
  }, [customer.location])

  const grandTotal = subtotal + transportCost

  const handleCustomerChange = useCallback((field: keyof CustomerInfo, value: string) => {
    setCustomer(prev => ({ ...prev, [field]: value }))
  }, [])

  const buildWhatsAppMessage = useCallback(() => {
    const line = '─'.repeat(35)
    let msg = `🏗️ *TIMBER ORDER — Zanzibaba Timber*\n${line}\n\n`
    msg += `👤 *Customer:* ${customer.name}\n`
    msg += `📞 *Phone:* ${customer.phone}\n`
    if (customer.location) msg += `📍 *Delivery:* ${customer.location}\n`
    msg += `\n${line}\n`
    msg += `📋 *ORDER ITEMS*\n${line}\n\n`

    items.forEach((item, i) => {
      msg += `*${i + 1}. ${item.label}*\n`
      msg += `   Full dimensions: ${item.category === 'timber' ? item.label.split(' Pine')[0].split(' Teak')[0] : item.size}\n`
      msg += `   Qty: ${item.quantity}\n`
      msg += `   Unit Price: ${formatTZS(item.unitPrice)}\n`
      msg += `   Subtotal: ${formatTZS(item.unitPrice * item.quantity)}\n\n`
    })

    msg += `${line}\n`
    msg += `💰 *SUMMARY*\n${line}\n`
    msg += `Subtotal: ${formatTZS(subtotal)}\n`
    msg += `Transport: FREE Delivery Across Zanzibar\n`
    msg += `*Grand Total: ${formatTZS(grandTotal)}*\n\n`

    msg += `*Prices Excluding VAT.*\n`
    msg += `*Free Delivery Across Zanzibar.*\n`
    msg += `*Cash on Delivery, Mobile Money & Bank Transfer Accepted.*\n`

    if (customer.notes) {
      msg += `\n📝 *Notes:* ${customer.notes}\n`
    }

    msg += `\n${line}\n`
    msg += `*Zanzibaba Timber*\n`
    msg += `📍 Kwa Ndevu, Daraja Bovu, Zanzibar\n`
    msg += `📞 +255 716 002 790`

    return msg
  }, [customer, items, subtotal, grandTotal])

  const handleSendWhatsApp = useCallback(() => {
    if (!customer.name || !customer.phone || items.length === 0) return

    const msg = buildWhatsAppMessage()
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`

    window.open(url, '_blank')
  }, [customer, items, buildWhatsAppMessage])

  const handleGeneratePDF = useCallback(() => {
    window.print()
  }, [])

  const isFormValid = customer.name && customer.phone && items.length > 0

  const selectStyle = `w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors appearance-none`
  const inputStyle = `w-full px-3 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`
  const labelStyle = `block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider`

  return (
    <div className="max-w-4xl mx-auto">
      <style jsx global>{`
        @media print {
          body * { visibility: hidden; }
          #order-builder-print-area, #order-builder-print-area * { visibility: visible; }
          #order-builder-print-area { position: absolute; left: 0; top: 0; width: 100%; }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 px-5 py-4 text-white">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            <h3 className="font-bold text-lg">Timber Order Builder</h3>
          </div>
          <p className="text-primary-200 text-xs mt-1">Build your order — add items, adjust quantities, and send to WhatsApp</p>
        </div>

        <div className="p-4 md:p-6 space-y-6" id="order-builder-print-area">
          {/* Customer Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 no-print">
            <div>
              <label className={labelStyle}>Full Name *</label>
              <input
                type="text"
                value={customer.name}
                onChange={e => handleCustomerChange('name', e.target.value)}
                placeholder="Your name"
                className={inputStyle}
              />
            </div>
            <div>
              <label className={labelStyle}>Phone Number *</label>
              <input
                type="tel"
                value={customer.phone}
                onChange={e => handleCustomerChange('phone', e.target.value)}
                placeholder="+255 7XX XXX XXX"
                className={inputStyle}
              />
            </div>
            <div>
              <label className={labelStyle}>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Delivery Location
                </span>
              </label>
              <select
                value={customer.location}
                onChange={e => handleCustomerChange('location', e.target.value)}
                className={selectStyle}
              >
                <option value="">Select location...</option>
                {DELIVERY_LOCATIONS.map(loc => (
                  <option key={loc.id} value={loc.name}>{loc.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Add Item Section */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 md:p-5 border border-gray-200 dark:border-gray-700 no-print">
            <div className="flex items-center gap-2 mb-3">
              <Package className="w-4 h-4 text-primary-600" />
              <h4 className="font-bold text-sm">Add Product</h4>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 items-end">
              <div>
                <label className={labelStyle}>Category</label>
                <select
                  value={category}
                  onChange={e => { setCategory(e.target.value as Category); setSelectedProduct('') }}
                  className={selectStyle}
                >
                  <option value="timber">Timber</option>
                  <option value="hardwood">Hardwood</option>
                  <option value="marine-board">Marine Board</option>
                  <option value="plywood">Plywood</option>
                </select>
              </div>

              <div>
                <label className={labelStyle}>Product</label>
                <select
                  value={selectedProduct}
                  onChange={e => setSelectedProduct(e.target.value)}
                  className={selectStyle}
                >
                  <option value="">Select...</option>
                  {currentOptions.map(opt => (
                    <option key={opt.key} value={opt.key}>
                      {opt.label} — {formatTZS(opt.price)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelStyle}>Size / Thickness</label>
                <div className="px-3 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                  {selectedOption ? selectedOption.size : '—'}
                </div>
              </div>

              <div>
                <label className={labelStyle}>Length</label>
                <div className="px-3 py-2.5 text-sm rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                  {selectedOption ? selectedOption.length : '—'}
                </div>
              </div>

              <div>
                <label className={labelStyle}>Qty</label>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full text-center px-2 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700"
                  />
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {selectedOption && (
              <div className="mt-3 flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg px-4 py-2.5 border border-gray-200 dark:border-gray-700">
                <div className="text-sm">
                  <span className="text-gray-500">Unit Price: </span>
                  <span className="font-bold text-primary-600">{formatTZS(selectedOption.price)}</span>
                </div>
                <button
                  onClick={addItem}
                  className="inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            )}
          </div>

          {/* Cart */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-sm flex items-center gap-1.5">
                <ShoppingCart className="w-4 h-4 text-primary-600" />
                Order Items
                {items.length > 0 && (
                  <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-[10px] font-bold px-1.5 py-0.5 rounded-full">{items.length}</span>
                )}
              </h4>
            </div>

            {items.length === 0 ? (
              <div className="text-center py-8 bg-gray-50 dark:bg-gray-900 rounded-xl border border-dashed border-gray-300 dark:border-gray-600">
                <ShoppingCart className="w-8 h-8 text-gray-300 dark:text-gray-600 mx-auto mb-2" />
                <p className="text-sm text-gray-400 dark:text-gray-500">Your cart is empty</p>
                <p className="text-xs text-gray-300 dark:text-gray-600 mt-1">Add products above to build your order</p>
              </div>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-900 text-left">
                      <th className="px-3 py-2.5 font-semibold text-gray-500 dark:text-gray-400 text-[11px] uppercase tracking-wider">Product</th>
                      <th className="px-3 py-2.5 font-semibold text-gray-500 dark:text-gray-400 text-[11px] uppercase tracking-wider hidden md:table-cell">Size</th>
                      <th className="px-3 py-2.5 font-semibold text-gray-500 dark:text-gray-400 text-[11px] uppercase tracking-wider hidden md:table-cell">Length</th>
                      <th className="px-3 py-2.5 font-semibold text-gray-500 dark:text-gray-400 text-[11px] uppercase tracking-wider">Qty</th>
                      <th className="px-3 py-2.5 font-semibold text-gray-500 dark:text-gray-400 text-[11px] uppercase tracking-wider text-right hidden md:table-cell">Unit Price</th>
                      <th className="px-3 py-2.5 font-semibold text-gray-500 dark:text-gray-400 text-[11px] uppercase tracking-wider text-right">Subtotal</th>
                      <th className="px-3 py-2.5 w-10"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                    {items.map(item => (
                      <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-3 py-2.5 font-medium text-gray-900 dark:text-white text-xs md:text-sm">{item.label}</td>
                        <td className="px-3 py-2.5 text-gray-500 dark:text-gray-400 text-xs hidden md:table-cell">{item.size}</td>
                        <td className="px-3 py-2.5 text-gray-500 dark:text-gray-400 text-xs hidden md:table-cell">{item.length}</td>
                        <td className="px-3 py-2.5">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center font-semibold text-xs md:text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </td>
                        <td className="px-3 py-2.5 text-right text-xs md:text-sm text-gray-600 dark:text-gray-300 hidden md:table-cell">{formatTZS(item.unitPrice)}</td>
                        <td className="px-3 py-2.5 text-right font-semibold text-xs md:text-sm text-gray-900 dark:text-white">{formatTZS(item.unitPrice * item.quantity)}</td>
                        <td className="px-3 py-2.5 text-right">
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-400 hover:text-red-600 transition-colors p-1"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Summary */}
          {items.length > 0 && (
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4 md:p-5 border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-sm mb-3">Order Summary</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Subtotal ({items.length} item{items.length > 1 ? 's' : ''})</span>
                  <span className="font-semibold">{formatTZS(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <Truck className="w-3.5 h-3.5 text-green-500" />
                    Transport
                  </span>
                  <span className="text-green-600 font-semibold text-xs flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> FREE Delivery
                  </span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-2 flex justify-between text-base">
                  <span className="font-bold">Grand Total</span>
                  <span className="font-bold text-primary-600">{formatTZS(grandTotal)}</span>
                </div>
                <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-1 space-y-0.5">
                  {PRICE_NOTES.map((note, i) => (
                    <p key={i}>{note}</p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Notes */}
          <div className="no-print">
            <label className={labelStyle}>Order Notes (optional)</label>
            <textarea
              value={customer.notes}
              onChange={e => handleCustomerChange('notes', e.target.value)}
              placeholder="Any special requirements, delivery instructions, or additional information..."
              rows={2}
              className={`${inputStyle} resize-none`}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-3 no-print">
            <button
              onClick={handleSendWhatsApp}
              disabled={!isFormValid}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-5 rounded-xl transition-colors text-sm"
            >
              <MessageCircle className="w-5 h-5" />
              Send Order via WhatsApp
            </button>
            <button
              onClick={handleGeneratePDF}
              disabled={items.length === 0}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-5 rounded-xl transition-colors text-sm"
            >
              <FileText className="w-5 h-5" />
              Generate PDF
            </button>
          </div>

          {!isFormValid && items.length > 0 && (
            <p className="text-center text-xs text-amber-500 flex items-center justify-center gap-1 no-print">
              <AlertCircle className="w-3 h-3" />
              Please fill in your name and phone number to send the order
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

function Truck({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2-1m6 0l2-1m-2 1v-4a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16m-6 0a2 2 0 11-4 0m4 0a2 2 0 104 0" />
    </svg>
  )
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
