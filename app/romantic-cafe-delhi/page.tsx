import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import FeatureCardsGrid from '@/components/feature-cards';
import ReviewsSection from '@/components/reviews-section';
import CTASection from '@/components/cta-section';
import { Heart, Sparkles, Flame, Music } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Romantic Cafe in Delhi | Perfect for Dates | Blu Turkey Cafe',
  description: 'Create unforgettable memories at the most romantic cafe in Delhi. Blu Turkey Cafe offers premium ambiance, candlelit corners, and exceptional service for couples.',
  openGraph: {
    title: 'Romantic Cafe in Delhi | Blu Turkey Cafe',
    description: 'Perfect romantic cafe destination for dates and special occasions in Delhi',
    url: 'https://bluturkey.com/romantic-cafe-delhi',
  },
};

export default function RomanticCafePage() {
  const features = [
    {
      icon: Heart,
      title: 'Intimate Setting',
      description: 'Cozy corners and private seating arrangements designed for couples and romantic moments.',
      highlight: 'Perfect date spot',
    },
    {
      icon: Sparkles,
      title: 'Elegant Ambiance',
      description: 'Sophisticated decor with soft lighting, elegant furnishings, and attention to detail.',
      highlight: 'Instagram-worthy spaces',
    },
    {
      icon: Flame,
      title: 'Premium Atmosphere',
      description: 'Warm, inviting environment with carefully curated music and refined aesthetics.',
      highlight: 'Romantic mood guaranteed',
    },
    {
      icon: Music,
      title: 'Sensory Experience',
      description: 'Soft background music, aromatic specialty coffee, and exceptional service.',
      highlight: 'Perfect for all occasions',
    },
  ];

  const reviews = [
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'This is the most romantic cafe in Delhi! We celebrated our anniversary here and it was absolutely perfect. Highly recommend for couples!',
      category: 'Anniversary Celebration',
    },
    {
      name: 'Neha Singh',
      rating: 5,
      text: 'Had an amazing date night at Blu Turkey. The ambiance is incredibly romantic, and the coffee is divine. Best date spot in Delhi!',
      category: 'Date Night',
    },
    {
      name: 'Sophia Patel',
      rating: 5,
      text: 'If you\'re looking for a romantic cafe in Delhi, this is the place. The setting, service, and coffee all deserve 5 stars.',
      category: 'Romantic Destination',
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection
        subtitle="Perfect Date Destination"
        title="The Most Romantic Cafe in Delhi"
        description="Create unforgettable memories at Blu Turkey Cafe. Elegant ambiance, premium coffee, and the perfect setting for romance in the heart of Delhi."
        primaryCta={{
          text: 'Book Your Date',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'View Menu',
          href: '/menu',
        }}
      />

      {/* Why Perfect for Romance */}
      <FeatureCardsGrid
        subtitle="The Perfect Romantic Experience"
        title="Why Couples Love Blu Turkey Cafe"
        features={features}
        columns={4}
      />

      {/* Main Content */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Your Ideal Romantic Cafe in Delhi
        </h2>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <p>
            Looking for the perfect romantic cafe in Delhi? Blu Turkey Cafe is your answer. We've carefully designed every 
            element to create an atmosphere that's perfect for couples who want to share special moments together.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Intimate & Elegant Setting
          </h3>
          <p>
            Our romantic cafe features thoughtfully arranged seating with cozy corners perfect for two. Soft, warm lighting 
            combined with elegant decor creates an intimate atmosphere that's ideal for dates, anniversaries, and romantic 
            occasions.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Premium Coffee Experience
          </h3>
          <p>
            Share a moment over our signature coffee blends. Whether you're coffee enthusiasts or prefer specialty drinks, 
            our expert baristas will craft something special just for you. Every sip enhances the romantic experience.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Curated Atmosphere
          </h3>
          <p>
            From carefully selected background music to aromatic specialty coffee, every sensory element has been chosen to 
            create the perfect romantic ambiance. Our staff ensures an experience that feels personal and special.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Perfect for Every Romantic Occasion
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>First dates and casual meetups</li>
            <li>Anniversary celebrations</li>
            <li>Engagements and proposals</li>
            <li>Valentine's Day specials</li>
            <li>Romantic getaway moments</li>
            <li>Special date nights</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Exceptional Service
          </h3>
          <p>
            Our attentive staff understands the importance of your romantic moment. We're here to make your visit seamless 
            and memorable, with personalized recommendations and thoughtful service.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Instagram-Worthy Moments
          </h3>
          <p>
            Beyond the romance, our cafe features beautiful spaces perfect for capturing memories. The elegant decor and 
            sophisticated lighting make every photo picture-perfect – share your special moments with the world!
          </p>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection reviews={reviews} />

      {/* CTA */}
      <CTASection
        title="Plan Your Romantic Date at Blu Turkey Cafe"
        description="Book your visit today and experience the most romantic cafe in Delhi. Create memories that last a lifetime."
        primaryButton={{
          text: 'Reserve Your Date',
          href: '/contact',
        }}
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CafeOrCoffeeShop',
            name: 'Blu Turkey Cafe - Romantic Cafe in Delhi',
            url: 'https://bluturkey.com/romantic-cafe-delhi',
            description: 'Romantic cafe in Delhi perfect for dates and couples',
            priceRange: '₹400–₹600',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Ground Floor, Amara Hotel, C-30',
              addressLocality: 'Greater Kailash I',
              addressRegion: 'Delhi',
              postalCode: '110048',
              addressCountry: 'IN',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: 150,
            },
          }),
        }}
      />

      <Footer />
    </>
  );
}
