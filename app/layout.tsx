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
    default: 'Best Cafe in Greater Kailash GK1 Delhi | Blu Turkey Cafe ⭐4.9',
    template: '%s | Blu Turkey Cafe GK1 Delhi',
  },
  description:
    'Blu Turkey Cafe is Greater Kailash (GK1)\'s favourite specialty coffee cafe. Rated 4.9⭐ on Google. Coffee, pasta, pizza, waffles & desserts in South Delhi. Open daily 9:30 AM–11 PM.',
  keywords: [
    'Blu Turkey Cafe',
    'Cafe in Greater Kailash',
    'Best cafe in GK1',
    'Cafe in South Delhi',
    'Coffee cafe Delhi',
    'Best coffee shop Delhi',
    'Cafe near Kailash Colony',
    'Cafe near Nehru Place',
    'specialty coffee GK1',
    'pasta pizza cafe Delhi',
    'birthday cafe GK1',
    'romantic cafe Delhi',
  ],
  creator: 'Blu Turkey Cafe',
  openGraph: {
    title: 'Blu Turkey Cafe | Specialty Coffee & Cafe in GK1 Delhi',
    description:
      'Experience specialty coffee, croissants, waffles and desserts at Blu Turkey Cafe in Greater Kailash, New Delhi.',
    url: SITE_URL,
    siteName: 'Blu Turkey Cafe',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/blu-turkey-cafe-seating-area-delhi.webp',
        width: 1200,
        height: 630,
        alt: 'Blu Turkey Cafe - Specialty Coffee in Greater Kailash Delhi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blu Turkey Cafe | Best Cafe in Greater Kailash',
    description:
      'Discover specialty coffee, desserts and cafe ambience at Blu Turkey Cafe in South Delhi.',
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
