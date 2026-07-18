'use client'

import Image from 'next/image'
import { useState } from 'react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  className?: string
  priority?: boolean
  aspectRatio?: string
  fallbackSrc?: string
}

const DEFAULT_FALLBACK = '/images/gallery/timber-yard-aerial-view.jpg'

export default function ImageWithFallback({
  src,
  alt,
  fill = true,
  width,
  height,
  sizes,
  className = '',
  priority = false,
  aspectRatio,
  fallbackSrc = DEFAULT_FALLBACK,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <Image
        src={imgSrc}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes || '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
        className={`transition-opacity duration-300 ${hasError ? 'opacity-60' : ''}`}
        style={{ objectFit: 'cover' }}
        priority={priority}
        loading={priority ? undefined : 'lazy'}
        onError={() => {
          if (!hasError) {
            setHasError(true)
            setImgSrc(fallbackSrc)
          }
        }}
      />
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="text-center p-4">
            <svg className="w-8 h-8 mx-auto mb-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-xs text-gray-400">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  )
}
