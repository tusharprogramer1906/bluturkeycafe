import { absoluteUrl, DEFAULT_OG_IMAGE_PATH, SITE_URL } from '@/lib/site';

/** Single global entity for local / cafe rich results */
export const cafeLocalBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'Blu Turkey Cafe',
  image: absoluteUrl(DEFAULT_OG_IMAGE_PATH),
  url: SITE_URL,
  telephone: '+91-99711-24279',
  priceRange: '₹₹',
  servesCuisine: ['Coffee', 'Cafe Food', 'Desserts'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ground Floor, Amara Hotel, C-30',
    addressLocality: 'Greater Kailash 1',
    addressRegion: 'Delhi',
    postalCode: '110048',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.5494',
    longitude: '77.2410',
  },
} as const;
