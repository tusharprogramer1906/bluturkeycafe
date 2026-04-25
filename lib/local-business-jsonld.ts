import { absoluteUrl, DEFAULT_OG_IMAGE_PATH, SITE_URL } from '@/lib/site';

/** Single global entity for local / cafe rich results */
export const cafeLocalBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: 'Blu Turkey Cafe',
  image: absoluteUrl(DEFAULT_OG_IMAGE_PATH),
  url: SITE_URL,
  telephone: '+91-99711-24279',
  email: 'bluturkeycafe@gmail.com',
  priceRange: '₹400–₹600',
  servesCuisine: ['Specialty Coffee', 'Cafe Food', 'Italian Pasta', 'Pizza', 'Desserts', 'Waffles', 'Croissants'],
  menu: `${SITE_URL}/menu`,
  hasMap: 'https://maps.google.com/?q=Blu+Turkey+Cafe+Greater+Kailash+1+New+Delhi',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Ground Floor, Amara Hotel, C-30',
    addressLocality: 'Greater Kailash I',
    addressRegion: 'Delhi',
    postalCode: '110048',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.5494',
    longitude: '77.2410',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    reviewCount: 150,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:30',
      closes: '23:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/bluturkeycafe',
    'https://www.facebook.com/bluturkeycafe',
  ],
};

