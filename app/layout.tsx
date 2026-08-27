import { IntroLoader } from '@/components/ui/intro-loader'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = 'https://www.kukkadapuassociates.online'

const description =
  'Kukkadapu Associates is an entrepreneurial business enterprise exploring opportunities across diverse sectors with a focus on sustainable growth, meaningful partnerships and long-term value creation.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      'Kukkadapu Associates | Building Businesses. Exploring Opportunities.',
    template: '%s | Kukkadapu Associates',
  },

  description,

  keywords: [
    'Kukkadapu Associates',
    'business house',
    'entrepreneurial enterprise',
    'diversified portfolio',
    'India',
    'long-term value',
    'ventures',
  ],

  authors: [{ name: 'Kukkadapu Associates' }],
  creator: 'Kukkadapu Associates',

  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'Kukkadapu Associates',
    title:
      'Kukkadapu Associates | Building Businesses. Exploring Opportunities.',
    description,
    images: [
      {
        url: '/images/hero-architecture.png',
        width: 1200,
        height: 630,
        alt: 'Kukkadapu Associates',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Kukkadapu Associates',
    description,
    images: ['/images/hero-architecture.png'],
  },

  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f3ec',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <IntroLoader />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
