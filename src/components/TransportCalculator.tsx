'use client'

import { useState } from 'react'
import { Truck, MapPin } from 'lucide-react'

const RATE_PER_KM = 1000

const LOCATIONS = [
  { name: 'Paje', km: 48 },
  { name: 'Nungwi', km: 55 },
  { name: 'Kendwa', km: 52 },
  { name: 'Kiwengwa', km: 42 },
  { name: 'Matemwe', km: 40 },
  { name: 'Jambiani', km: 55 },
  { name: 'Stone Town', km: 5 },
  { name: 'Fumba', km: 18 },
  { name: 'Chukwani', km: 12 },
  { name: 'Bububu', km: 15 },
  { name: 'Ndevu', km: 2 },
  { name: 'Muyuni', km: 25 },
  { name: 'Uroa', km: 35 },
  { name: 'Bwejuu', km: 50 },
  { name: 'Dongwe', km: 45 },
  { name: 'Michamvi', km: 48 },
  { name: 'Kitogani', km: 30 },
]

export default function TransportCalculator() {
  const [mode, setMode] = useState<'location' | 'manual'>('location')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [manualKm, setManualKm] = useState('')
  const [freeDelivery, setFreeDelivery] = useState(false)

  const distance = mode === 'location'
    ? LOCATIONS.find(l => l.name === selectedLocation)?.km ?? 0
    : parseFloat(manualKm) || 0

  const transportCost = freeDelivery ? 0 : distance * RATE_PER_KM

  const handleWhatsApp = () => {
    const msg = `Hello Zanzibaba Timber,%0A%0AI would like to order timber.%0A%0ALocation: ${mode === 'location' ? selectedLocation : `${manualKm} km from Stone Town`}%0ADistance: ${distance} km%0ATransport Cost: ${freeDelivery ? 'FREE DELIVERY' : `${transportCost.toLocaleString()} TZS`}%0A%0APlease send me a quote.`
    window.open(`https://wa.me/255716002790?text=${msg}`, '_blank')
  }

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 md:p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Truck className="w-5 h-5 text-primary-600" />
        <h3 className="font-bold text-sm md:text-base">Transport Cost Calculator</h3>
      </div>

      <div className="text-xs text-gray-500 mb-3">
        <MapPin className="w-3 h-3 inline mr-1" />
        Origin: Stone Town, Zanzibar
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setMode('location')}
          className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${mode === 'location' ? 'bg-primary-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}
        >
          Select Location
        </button>
        <button
          onClick={() => setMode('manual')}
          className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-colors ${mode === 'manual' ? 'bg-primary-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'}`}
        >
          Enter Distance
        </button>
      </div>

      {mode === 'location' ? (
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full px-3 py-2.5 text-base rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 mb-3"
        >
          <option value="">Select delivery location...</option>
          {LOCATIONS.map((loc) => (
            <option key={loc.name} value={loc.name}>
              {loc.name} ({loc.km} km)
            </option>
          ))}
        </select>
      ) : (
        <input
          type="number"
          value={manualKm}
          onChange={(e) => setManualKm(e.target.value)}
          placeholder="Enter distance in kilometres..."
          className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 mb-3"
          min="0"
        />
      )}

      <label className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300 mb-3 cursor-pointer">
        <input
          type="checkbox"
          checked={freeDelivery}
          onChange={(e) => setFreeDelivery(e.target.checked)}
          className="rounded"
        />
        Apply free delivery (qualifying bulk orders)
      </label>

      {distance > 0 && (
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-3">
          <div className="text-xs text-gray-500 mb-1">
            Distance: <strong>{distance} km</strong>
          </div>
          {freeDelivery ? (
            <div className="text-green-600 font-bold text-sm">FREE DELIVERY</div>
          ) : (
            <div className="text-lg font-bold text-primary-600">
              {transportCost.toLocaleString()}
            </div>
          )}
          {!freeDelivery && (
            <div className="text-[10px] text-gray-400">
              {distance} km × {RATE_PER_KM.toLocaleString()} TZS/km
            </div>
          )}
        </div>
      )}

      <button
        onClick={handleWhatsApp}
        disabled={distance === 0}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
      >
        Request Quote via WhatsApp
      </button>
    </div>
  )
}
