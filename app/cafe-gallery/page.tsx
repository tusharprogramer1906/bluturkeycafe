import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import GallerySection from '@/components/gallery-section';
import GalleryConversionCTA from '@/components/gallery-conversion-cta';

export const metadata: Metadata = {
  title: 'Cafe Gallery - Blu Turkey Cafe Delhi',
  description: 'Explore the beautiful ambience, signature coffee, delicious food, and celebration moments at Blu Turkey Cafe. View our premium cafe gallery with high-quality photos.',
  alternates: {
    canonical: 'https://bluturkeycafe.com/cafe-gallery',
  },
  openGraph: {
    title: 'Cafe Gallery - Blu Turkey Cafe',
    description: 'View stunning photos of our cafe, coffee, food, and events at Blu Turkey Cafe Delhi',
    url: 'https://bluturkeycafe.com/cafe-gallery',
    type: 'website',
  },
};

export default function GalleryPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection
        subtitle="Visual Journey"
        title="Cafe Gallery"
        description="Discover the beauty of Blu Turkey Cafe through our curated collection of premium cafe photography. From elegant interiors to signature coffee craftsmanship."
        primaryCta={{
          text: 'Reserve Table',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'View Menu',
          href: '/menu',
        }}
        showCoffeeCup={true}
        imageAlt="Blu Turkey Cafe coffee splash cup in Greater Kailash Delhi"
        imageTitle="Signature Coffee Cup – Blu Turkey Cafe Delhi"
      />

      {/* Full Gallery Section */}
      <GallerySection
        title="Experience Blu Turkey Cafe"
        subtitle="A visual journey through the premium spaces, signature coffee, delicious offerings, and memorable moments at Blu Turkey Cafe."
        columns={3}
        showCategories={true}
      />

      {/* Gallery Conversion CTA */}
      <GalleryConversionCTA />

      {/* SEO Schema Markup for Gallery */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageGallery',
            name: 'Blu Turkey Cafe Gallery',
            description: 'Photo gallery showcasing the interior ambience, signature coffee, food offerings, and celebration events at Blu Turkey Cafe Delhi.',
            url: 'https://bluturkey.com/cafe-gallery',
            author: {
              '@type': 'CafeOrCoffeeShop',
              name: 'Blu Turkey Cafe',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Ground Floor, Amara Hotel, C-30',
                addressLocality: 'Greater Kailash I',
                addressRegion: 'Delhi',
                postalCode: '110048',
                addressCountry: 'IN',
              },
            },
          }),
        }}
      />

      <Footer />
    </>
  );
}
