import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import FeatureCardsGrid from '@/components/feature-cards';
import SignatureCoffee from '@/components/signature-coffee';
import ReviewsSection from '@/components/reviews-section';
import CTASection from '@/components/cta-section';
import GalleryPreview from '@/components/gallery-preview';
import GalleryConversionCTA from '@/components/gallery-conversion-cta';
import {
  Coffee,
  MapPin,
  Users,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blu Turkey Cafe - Best Coffee & Specialty Cafe in Delhi',
  description: 'Discover Blu Turkey Cafe, the premier specialty coffee destination in Delhi. Perfect for romantic dates, birthday celebrations, and coffee enthusiasts. Premium ambiance, signature coffee blends, and exceptional service.',
  openGraph: {
    title: 'Blu Turkey Cafe - Premium Specialty Coffee in Delhi',
    description: 'Experience exceptional specialty coffee and ambiance at Blu Turkey Cafe.',
    url: 'https://bluturkey.com',
    type: 'website',
  },
};

export default function Home() {
  const features = [
    {
      icon: Coffee,
      title: 'Premium Coffee Selection',
      description: 'Handpicked specialty coffee beans from the finest estates across India and beyond.',
      highlight: 'Over 15 signature blends',
    },
    {
      icon: MapPin,
      title: 'Perfect Location',
      description: 'Located in the heart of Delhi, easily accessible with ample parking and comfortable seating.',
      highlight: 'Central Delhi location',
    },
    {
      icon: Users,
      title: 'Ideal for Any Occasion',
      description: 'From romantic dates to birthday celebrations, business meetings to casual hangouts.',
      highlight: 'Private event spaces available',
    },
    {
      icon: Sparkles,
      title: 'Premium Ambiance',
      description: 'Thoughtfully designed interiors with cozy corners and elegant styling for the perfect atmosphere.',
      highlight: 'Instagram-worthy spaces',
    },
  ];

  const coffeeBlends = [
    {
      name: 'Turkish Espresso Blend',
      description: 'Bold and intense espresso with notes of dark chocolate and hazelnut',
      price: '₹180',
      badge: 'Bestseller',
    },
    {
      name: 'Delhi Sunrise',
      description: 'Smooth cappuccino with velvety microfoam and subtle caramel notes',
      price: '₹160',
    },
    {
      name: 'Blue Velvet Latte',
      description: 'Creamy latte infused with vanilla and a hint of blue spirulina',
      price: '₹200',
      badge: 'New',
    },
    {
      name: 'Signature Cold Brew',
      description: 'Smooth, refreshing cold brew perfect for summer afternoons',
      price: '₹150',
    },
  ];

  const reviews = [
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'The best cafe experience in Delhi! The ambiance is perfect for our anniversary celebration, and the coffee is exceptional.',
      category: 'Anniversary Celebration',
    },
    {
      name: 'Arjun Kapoor',
      rating: 5,
      text: 'Outstanding specialty coffee and phenomenal service. The baristas really know their craft. Highly recommended!',
      category: 'Coffee Enthusiast',
    },
    {
      name: 'Anjali Desai',
      rating: 5,
      text: 'Perfect spot for dates! Cozy seating, great ambiance, and the signature blends are divine. Will definitely come back.',
      category: 'Date Night',
    },
    {
      name: 'Rahul Verma',
      rating: 5,
      text: 'Celebrated my birthday here and had the most memorable time. Staff was attentive and the venue is absolutely stunning.',
      category: 'Birthday Celebration',
    },
    {
      name: 'Neha Singh',
      rating: 5,
      text: 'Finally found a cafe that takes coffee seriously! The attention to detail in every cup is impressive.',
      category: 'Regular Customer',
    },
    {
      name: 'Vikram Mehta',
      rating: 5,
      text: 'Great for business meetings. Professional yet relaxed atmosphere, excellent coffee, and reliable wifi.',
      category: 'Business',
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection
        title="Where Every Sip Defies Gravity"
        description="Discover Delhi's premier specialty coffee destination."
        primaryCta={{
          text: 'View Menu',
          href: '/menu',
        }}
        secondaryCta={{
          text: 'Visit Cafe',
          href: '/contact',
        }}
      />

      {/* Features Section */}
      <FeatureCardsGrid
        subtitle="Why Choose Blu Turkey"
        title="What Makes Us Special"
        features={features}
        columns={4}
      />

      {/* Gallery Preview Section */}
      <GalleryPreview
        title="Explore Our Cafe"
        subtitle="A visual journey through the premium spaces, signature coffee, delicious offerings, and memorable moments at Blu Turkey Cafe."
      />

      {/* Signature Coffee Section */}
      {/* <SignatureCoffee coffeeItems={coffeeBlends} /> */}

      {/* Reviews Section */}
      <ReviewsSection reviews={reviews} />



      {/* Gallery Conversion CTA */}
      <GalleryConversionCTA />

      {/* CTA Section */}
      <CTASection
        title="Experience the Best Cafe in Delhi"
        description="Visit Blu Turkey Cafe today and discover why we're the preferred destination for specialty coffee, romantic dates, and celebrations in Delhi."
        primaryButton={{
          text: 'Find Us',
          href: '/contact',
        }}
        secondaryButton={{
          text: 'View Hours',
          href: '/contact',
        }}
      />

      {/* SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Blu Turkey Cafe',
            image: 'https://bluturkey.com/images/blu-turkey-logo.png',
            description:
              'Premium specialty coffee cafe in Delhi. Perfect for romantic dates, birthday celebrations, and coffee enthusiasts.',
            url: 'https://bluturkey.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'New Delhi',
              addressRegion: 'Delhi',
              addressCountry: 'IN',
            },
            telephone: '+91-123-456-7890',
            email: 'info@bluturkey.com',
            priceRange: '₹150-₹300',
            servesCuisine: 'Coffee & Cafe',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '156',
            },
          }),
        }}
      />

      <Footer />
    </>
  );
}
