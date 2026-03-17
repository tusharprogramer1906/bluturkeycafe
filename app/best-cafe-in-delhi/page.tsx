import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import FeatureCardsGrid from '@/components/feature-cards';
import ReviewsSection from '@/components/reviews-section';
import CTASection from '@/components/cta-section';
import { Trophy, Star, Heart, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Best Cafe in Delhi | Blu Turkey Cafe - Premium Coffee Experience',
  description: 'Discover why Blu Turkey Cafe is the best cafe in Delhi. Award-winning specialty coffee, premium ambiance, and exceptional service. Perfect for dates and celebrations.',
  openGraph: {
    title: 'Best Cafe in Delhi | Blu Turkey Cafe',
    description: 'Experience the best cafe in Delhi with premium specialty coffee and ambiance',
    url: 'https://bluturkey.com/best-cafe-in-delhi',
  },
};

export default function BestCafePage() {
  const features = [
    {
      icon: Trophy,
      title: 'Award-Winning Selection',
      description: 'Carefully curated specialty coffee beans recognized by coffee enthusiasts across India.',
      highlight: 'Multiple awards and recognition',
    },
    {
      icon: Star,
      title: 'Exceptional Quality',
      description: 'Premium ingredients, professional baristas, and attention to detail in every cup.',
      highlight: '4.9/5 customer rating',
    },
    {
      icon: Heart,
      title: 'Perfect Ambiance',
      description: 'Thoughtfully designed spaces with Instagram-worthy corners for unforgettable moments.',
      highlight: 'Ideal for dates and photos',
    },
    {
      icon: Users,
      title: 'Expert Staff',
      description: 'Trained baristas who are passionate about coffee and dedicated to customer satisfaction.',
      highlight: 'Personalized recommendations',
    },
  ];

  const reviews = [
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Hands down the best cafe in Delhi! The ambiance is unmatched, and the coffee quality is outstanding. Perfect for our anniversary!',
      category: 'Best Cafe Experience',
    },
    {
      name: 'Arjun Kapoor',
      rating: 5,
      text: 'Finally found a cafe that truly understands specialty coffee. The baristas are knowledgeable and the selection is incredible.',
      category: 'Coffee Connoisseur',
    },
    {
      name: 'Anjali Desai',
      rating: 5,
      text: 'This is undeniably the best cafe in Delhi for a date night. Romantic, classy, and the coffee is exceptional.',
      category: 'Date Destination',
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection
        subtitle="Rated #1 in Delhi"
        title="The Best Cafe in Delhi"
        description="Experience why Blu Turkey Cafe stands out as the premier specialty coffee destination in Delhi. Premium quality, exceptional ambiance, and unforgettable moments."
        primaryCta={{
          text: 'Visit Us Today',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'Browse Menu',
          href: '/menu',
        }}
      />

      {/* Why We're the Best */}
      <FeatureCardsGrid
        subtitle="What Sets Us Apart"
        title="Why We're the Best Cafe in Delhi"
        features={features}
        columns={4}
      />

      {/* Main Content */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          The Best Cafe Experience in Delhi
        </h2>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <p>
            When it comes to finding the best cafe in Delhi, Blu Turkey Cafe stands head and shoulders above the competition. 
            We're not just another coffee shop – we're a destination dedicated to providing an exceptional experience from the 
            moment you walk through our doors.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Premium Specialty Coffee Selection
          </h3>
          <p>
            Our commitment to quality starts with our coffee beans. We source only the finest specialty coffee beans from 
            premium estates across India and internationally. Each blend is carefully selected and roasted to perfection, 
            ensuring you get the best cup of coffee every single time.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Expert Baristas & Craftsmanship
          </h3>
          <p>
            Our baristas aren't just coffee makers – they're coffee artists. With years of training and a deep passion for 
            their craft, they create beverages that are as beautiful as they are delicious. Every drink is made with precision 
            and care, tailored to your preferences.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Exceptional Ambiance & Design
          </h3>
          <p>
            Step into Blu Turkey Cafe and you'll immediately notice the difference. Our thoughtfully designed interiors 
            combine modern aesthetics with cozy comfort. Perfect for romantic dates, business meetings, birthday celebrations, 
            or simply enjoying quality coffee.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Customer-Centric Service
          </h3>
          <p>
            We believe the best cafe is one that cares about its customers. Our friendly and knowledgeable staff is always 
            ready to help you find the perfect beverage or provide recommendations. We treat every customer like family.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Perfect for Any Occasion
          </h3>
          <p>
            Whether you're looking for the best cafe in Delhi for a romantic date, a birthday celebration, a casual meet-up 
            with friends, or a productive work session – Blu Turkey Cafe is the perfect choice. Our versatile spaces cater 
            to all occasions.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection reviews={reviews} />

      {/* CTA */}
      <CTASection
        title="Ready to Experience the Best Cafe in Delhi?"
        description="Join thousands of satisfied customers who have made Blu Turkey Cafe their favorite cafe in Delhi."
        primaryButton={{
          text: 'Find Our Location',
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
            name: 'Blu Turkey Cafe - Best Cafe in Delhi',
            url: 'https://bluturkey.com/best-cafe-in-delhi',
            description: 'Best cafe in Delhi for specialty coffee and premium ambiance',
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
