import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], display: 'swap' });
const _geistMono = Geist_Mono({ subsets: ["latin"], display: 'swap' });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-playfair", display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://bluturkeycafe.com'),
  title: {
    default: 'Blu Turkey Cafe | Best Cafe in Greater Kailash Delhi',
    template: '%s | Blu Turkey Cafe',
  },
  description:
    'Blu Turkey Cafe is a premium cafe in Greater Kailash, New Delhi known for specialty coffee, croissants, waffles, pasta and signature desserts.',
  keywords: [
    'Blu Turkey Cafe',
    'Cafe in Greater Kailash',
    'Best cafe in GK1',
    'Cafe in South Delhi',
    'Coffee cafe Delhi',
    'Best coffee shop Delhi',
    'Cafe near Kailash Colony',
    'Cafe near Nehru Place',
  ],
  creator: 'Blu Turkey Cafe',
  openGraph: {
    title: 'Blu Turkey Cafe | Specialty Coffee & Cafe in GK1 Delhi',
    description:
      'Experience specialty coffee, croissants, waffles and desserts at Blu Turkey Cafe in Greater Kailash, New Delhi.',
    url: 'https://bluturkeycafe.com',
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

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Blu Turkey Cafe',
  image: 'https://bluturkeycafe.com/images/blu-turkey-cafe-seating-area-delhi.webp',
  url: 'https://bluturkeycafe.com',
  telephone: '+91-99711-24279',
  servesCuisine: ['Cafe', 'Coffee', 'Desserts', 'Continental'],
  priceRange: '₹400–600',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ground Floor, of Amara Hotel, C-30',
    addressLocality: 'Greater Kailash I',
    addressRegion: 'Delhi',
    postalCode: '110048',
    addressCountry: 'IN',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '100',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'Blu Turkey Cafe',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ground Floor, Amara Hotel, C-30',
    addressLocality: 'Greater Kailash',
    addressRegion: 'Delhi',
    postalCode: '110048',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.5494',
    longitude: '77.2410',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema).replace(/</g, '\\u003c') }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c') }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
