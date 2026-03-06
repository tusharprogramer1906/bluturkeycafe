import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Blu Turkey Cafe - Best Coffee & Specialty Cafe in Delhi',
  description: 'Discover Blu Turkey Cafe, the premier specialty coffee destination in Delhi. Perfect for romantic dates, birthday celebrations, and coffee enthusiasts. Premium ambiance, signature coffee blends, and exceptional service.',
  keywords: 'best cafe in delhi, specialty coffee, romantic cafe, coffee shop delhi, birthday celebration cafe, premium cafe',
  creator: 'Blu Turkey Cafe',
  generator: 'v0.app',
  openGraph: {
    title: 'Blu Turkey Cafe - Premium Specialty Coffee in Delhi',
    description: 'Experience exceptional specialty coffee and ambiance at Blu Turkey Cafe. Your perfect destination for dates, celebrations, and coffee culture.',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/images/blu-turkey-logo.png',
        width: 1200,
        height: 1200,
        alt: 'Blu Turkey Cafe Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blu Turkey Cafe - Best Coffee in Delhi',
    description: 'Premium specialty coffee cafe for romantic dates and celebrations',
    images: ['/images/blu-turkey-logo.png'],
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
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
