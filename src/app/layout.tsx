import type { Metadata } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import './globals.css'
import { BilingualProvider } from '@/lib/bilingual'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Timber Zanzibar | Treated Pine Timber Supplier | Zanzibaba',
    template: '%s | Timber Zanzibar | Zanzibaba',
  },
  description: 'Timber Zanzibar — Zanzibaba Timber is Zanzibar\'s leading supplier of premium treated pine timber, mbao za pine, construction timber and treated poles. Serving Paje, Nungwi, Stone Town and all Zanzibar with cash on delivery and island-wide delivery. Quality timber for hotels, villas, residential and government projects.',
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
      </head>
      <body className={inter.className}>
        <BilingualProvider>
          {children}
        </BilingualProvider>
      </body>
    </html>
  )
}
