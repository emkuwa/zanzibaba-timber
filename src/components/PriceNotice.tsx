import { Info } from 'lucide-react'
import { PRICE_NOTES } from '@/lib/data'

export default function PriceNotice() {
  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3 md:p-4">
      <div className="flex items-start gap-2">
        <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs md:text-sm text-amber-800 dark:text-amber-200 space-y-0.5">
          {PRICE_NOTES.map((note) => (
            <p key={note}>• {note}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
