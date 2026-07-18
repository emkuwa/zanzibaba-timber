'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { HardwoodProduct } from '@/types'

export default function HardwoodCatalogue({ products }: { products: HardwoodProduct[] }) {
  const [query, setQuery] = useState('')
  const [size, setSize] = useState('all')

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    return products.filter((product) => {
      const matchesQuery = !normalizedQuery || [product.name, product.botanicalName, product.description, ...product.uses]
        .some((value) => value.toLowerCase().includes(normalizedQuery))
      const matchesSize = size === 'all' || product.variants.some((variant) => variant.size === size)
      return matchesQuery && matchesSize
    })
  }, [products, query, size])

  return (
    <>
      <div className="grid sm:grid-cols-[1fr_auto] gap-3 max-w-3xl mx-auto mb-10" role="search">
        <label className="sr-only" htmlFor="hardwood-search">Search hardwood products</label>
        <input
          id="hardwood-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search Mninga, Mvule, Mkongo or use…"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
        />
        <label className="sr-only" htmlFor="hardwood-size">Filter by size</label>
        <select
          id="hardwood-size"
          value={size}
          onChange={(event) => setSize(event.target.value)}
          className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
        >
          <option value="all">All sizes</option>
          <option value="2x6x8">2x6x8</option>
          <option value="2x8x8">2x8x8</option>
          <option value="4x4x8">4x4x8</option>
        </select>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link href={`/hardwood/${product.slug}`} key={product.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-1 transition">
              <div className="relative h-64">
                <Image src={product.image} alt={product.imageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-primary-600">{product.name}</h2>
                <p className="italic text-sm text-gray-500 mb-3">{product.botanicalName}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-5">{product.description}</p>
                <div className="flex justify-between items-end"><div><span className="text-xs text-gray-500">From</span><div className="text-xl font-bold">TZS 95,000</div></div><span className="font-semibold text-primary-600 group-hover:underline">View product →</span></div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-300 py-12">No hardwood products match those filters.</p>
      )}
    </>
  )
}
