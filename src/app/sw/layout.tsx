import type { Metadata } from 'next'

const baseUrl = 'https://timber.zanzibaba.com'

export const metadata: Metadata = {
  title: 'Mbao, Marine Board na Plywood Zanzibar | Zanzibaba Timber',
  description: 'Zanzibaba Timber — duka la mbao treated pine, marine board, plywood, mbao za ujenzi na treated poles Zanzibar. Tunahudumia Paje, Nungwi, Stone Town na Zanzibar zima. Usafiri bure na malipo baada ya kupelekwa.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${baseUrl}/sw`,
    languages: {
      'en': baseUrl,
      'sw': `${baseUrl}/sw`,
    },
  },
  openGraph: {
    title: 'Mbao, Marine Board na Plywood Zanzibar | Zanzibaba Timber',
    description: 'Zanzibaba Timber — duka la mbao treated pine, marine board, plywood, mbao za ujenzi na treated poles Zanzibar.',
    url: `${baseUrl}/sw`,
    siteName: 'Zanzibaba Timber',
    images: [{ url: `${baseUrl}/images/gallery/zanzibaba-timber-hero-banner.jpg`, width: 1200, height: 630,     alt: 'Zanzibaba Timber — Duka la Mbao Zanzibar' }],
    locale: 'sw_TZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mbao, Marine Board na Plywood Mwasambazaji | Zanzibaba Zanzibar',
    description: 'Zanzibaba Timber — duka la mbao treated pine, marine board, plywood Zanzibar.',
    images: [`${baseUrl}/images/gallery/zanzibaba-timber-hero-banner.jpg`],
  },
}

export default function SwLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
