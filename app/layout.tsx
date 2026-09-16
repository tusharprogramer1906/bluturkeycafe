import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { cafeLocalBusinessJsonLd } from '@/lib/local-business-jsonld'
import { SITE_URL, serializeJsonLd } from '@/lib/site'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], display: 'swap' });
const _geistMono = Geist_Mono({ subsets: ["latin"], display: 'swap' });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-playfair", display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Blu Turkey Cafe | Specialty Coffee Cafe in GK1, New Delhi',
    template: '%s | Blu Turkey Cafe',
  },
  description:
    'Blu Turkey Cafe — Greater Kailash (GK1), South Delhi. Specialty coffee, handmade pasta, pizza, waffles, croissants and desserts. Rated 4.9 on Google. Open daily 9:30 AM–11 PM.',
  creator: 'Blu Turkey Cafe',
  openGraph: {
    title: 'Blu Turkey Cafe | Specialty Coffee & Cafe in GK1 Delhi',
    description:
      'Experience specialty coffee, croissants, waffles and desserts at Blu Turkey Cafe in Greater Kailash (GK1), New Delhi. Open daily 9:30 AM–11 PM.',
    url: SITE_URL,
    siteName: 'Blu Turkey Cafe',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/blu-turkey-cafe-seating-area-delhi.webp',
        width: 1200,
        height: 630,
        alt: 'Blu Turkey Cafe — Specialty Coffee in Greater Kailash, Delhi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blu Turkey Cafe | Specialty Coffee in Greater Kailash, Delhi',
    description:
      'Specialty coffee, pasta, pizza, waffles and desserts at Blu Turkey Cafe in GK1, South Delhi.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/blu-turkey-logo.png',
    apple: '/images/blu-turkey-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(cafeLocalBusinessJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
