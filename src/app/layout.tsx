import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'
import { BilingualProvider } from '@/lib/bilingual'

const inter = Inter({ subsets: ['latin'] })

const baseUrl = 'https://timber.zanzibaba.com'
const ogImage = `${baseUrl}/images/gallery/zanzibaba-timber-hero-banner.jpg`

export const metadata: Metadata = {
  title: {
    default: 'Timber, Marine Board & Plywood Supplier | Zanzibaba Zanzibar',
    template: '%s | Timber, Marine Board & Plywood | Zanzibaba',
  },
  description: 'Zanzibaba Timber — Zanzibar\'s leading supplier of treated pine timber, marine board, plywood, construction timber and treated poles. Serving Paje, Nungwi, Stone Town and all Zanzibar with cash on delivery and FREE island-wide delivery.',
  keywords: [
    'timber supplier zanzibar',
    'pine timber zanzibar',
    'mbao zanzibar',
    'treated pine timber zanzibar',
    'construction timber zanzibar',
    'timber prices zanzibar',
    'timber delivery zanzibar',
    'treated poles zanzibar',
    'treated wood poles zanzibar',
    'building materials zanzibar',
    'marine board zanzibar',
    'marine board price zanzibar',
    'plywood zanzibar',
    'plywood price zanzibar',
    'construction plywood zanzibar',
    'concrete formwork marine board',
    'timber nungwi',
    'timber paje',
    'timber stone town',
    'mbao za pine zanzibar',
    'wood supplier zanzibar',
  ].join(', '),
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'en': baseUrl,
      'sw': `${baseUrl}/sw`,
    },
  },
  openGraph: {
    title: 'Timber, Marine Board & Plywood Supplier | Zanzibaba Zanzibar',
    description: 'Zanzibaba Timber — Zanzibar\'s leading supplier of treated pine timber, marine board, plywood, construction timber and treated poles. Serving Paje, Nungwi, Stone Town and all Zanzibar with cash on delivery and FREE island-wide delivery.',
    url: baseUrl,
    siteName: 'Zanzibaba Timber',
    images: [{ url: ogImage, width: 1200, height: 630, alt: 'Zanzibaba Timber — Premium Treated Pine Supplier in Zanzibar' }],
    locale: 'en_TZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timber, Marine Board & Plywood Supplier | Zanzibaba Zanzibar',
    description: 'Zanzibaba Timber — Zanzibar\'s leading supplier of treated pine timber, marine board, plywood, construction timber and treated poles.',
    images: [ogImage],
  },
  verification: {
    google: 'google-site-verification-placeholder',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-BD261DFDL6`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BD261DFDL6');
          `}
        </Script>
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "XXXXXXXXXX");
          `}
        </Script>
        <Script id="ga4-conversions" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            if (location.pathname.startsWith('/sw')) {
              document.documentElement.lang = 'sw';
            }

            document.addEventListener('click', function(e) {
              var el = e.target.closest('a[href^="tel:"]');
              if (el) {
                gtag('event', 'phone_call', {
                  event_category: 'conversion',
                  event_label: el.href
                });
              }
            });

            document.addEventListener('click', function(e) {
              var el = e.target.closest('a[href*="wa.me"]');
              if (el) {
                gtag('event', 'whatsapp_click', {
                  event_category: 'conversion',
                  event_label: 'whatsapp'
                });
              }
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <BilingualProvider>
          {children}
        </BilingualProvider>
      </body>
    </html>
  )
}
