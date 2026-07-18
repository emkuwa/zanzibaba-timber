'use client'

import { Search, SlidersHorizontal, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

export default function CatalogueFilters() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [maxPrice, setMaxPrice] = useState('all')
  const [resultCount, setResultCount] = useState(0)

  const applyFilters = useCallback(() => {
    const normalizedQuery = query.trim().toLowerCase()
    const priceLimit = maxPrice === 'all' ? Infinity : Number(maxPrice)
    let visibleRows = 0

    document.querySelectorAll<HTMLElement>('[data-catalog-category]').forEach(section => {
      const categoryMatches = category === 'all' || section.dataset.catalogCategory === category
      let sectionRows = 0
      section.querySelectorAll<HTMLElement>('[data-catalog-product]').forEach(row => {
        const textMatches = !normalizedQuery || (row.dataset.catalogProduct || row.textContent || '').toLowerCase().includes(normalizedQuery)
        const priceMatches = Number(row.dataset.price || 0) <= priceLimit
        const visible = categoryMatches && textMatches && priceMatches
        row.hidden = !visible
        if (visible) sectionRows += 1
      })
      section.hidden = !categoryMatches || sectionRows === 0
      visibleRows += sectionRows
    })
    setResultCount(visibleRows)
  }, [category, maxPrice, query])

  useEffect(() => { applyFilters() }, [applyFilters])

  const reset = () => { setQuery(''); setCategory('all'); setMaxPrice('all') }
  const active = query || category !== 'all' || maxPrice !== 'all'

  return (
    <section className="max-w-5xl mx-auto mb-8 rounded-2xl border border-gray-200 bg-white p-4 md:p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800" aria-label="Search and filter products">
      <div className="grid gap-3 md:grid-cols-[1fr_220px_200px_auto]">
        <label className="relative block">
          <span className="sr-only">Search products</span>
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input value={query} onChange={event => setQuery(event.target.value)} type="search" placeholder="Search product, species or size…" className="w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:border-gray-600 dark:bg-gray-900" />
        </label>
        <label className="relative block">
          <span className="sr-only">Filter by category</span>
          <SlidersHorizontal className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <select value={category} onChange={event => setCategory(event.target.value)} className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-4 text-sm dark:border-gray-600 dark:bg-gray-900">
            <option value="all">All categories</option><option value="treated-softwood">Treated Softwood</option><option value="hardwood">Hardwood</option><option value="wood-poles">Wood Poles</option><option value="marine-board">Marine Board</option><option value="plywood">Plywood</option>
          </select>
        </label>
        <label><span className="sr-only">Filter by maximum price</span><select value={maxPrice} onChange={event => setMaxPrice(event.target.value)} className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 text-sm dark:border-gray-600 dark:bg-gray-900"><option value="all">Any price</option><option value="20000">Up to TZS 20,000</option><option value="50000">Up to TZS 50,000</option><option value="100000">Up to TZS 100,000</option><option value="150000">Up to TZS 150,000</option></select></label>
        {active && <button type="button" onClick={reset} className="inline-flex items-center justify-center gap-1 rounded-lg border border-gray-300 px-4 py-3 text-sm font-semibold hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700"><X className="h-4 w-4" /> Reset</button>}
      </div>
      <p className="mt-3 text-sm text-gray-500" aria-live="polite">{resultCount} product option{resultCount === 1 ? '' : 's'} found</p>
    </section>
  )
}
