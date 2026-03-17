import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import FeatureCardsGrid from '@/components/feature-cards';
import ReviewsSection from '@/components/reviews-section';
import CTASection from '@/components/cta-section';
import { Heart, Leaf, Users, Zap } from 'lucide-react';
import { GoogleRatingBadge, PriceRangeBadge } from '@/components/business-badges';

export const metadata: Metadata = {
  title: 'About Blu Turkey Cafe | Our Story & Mission',
  description: 'Learn about Blu Turkey Cafe. Our story, mission to serve premium specialty coffee, and commitment to creating memorable experiences in Delhi.',
  openGraph: {
    title: 'About Blu Turkey Cafe',
    description: 'Discover the story behind Blu Turkey Cafe',
    url: 'https://bluturkey.com/about',
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Quality First',
      description: 'We never compromise on quality. From bean selection to brewing, excellence is our standard.',
      highlight: 'Premium in every cup',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We support ethical sourcing and sustainable farming practices. Coffee that does good.',
      highlight: 'Fair-trade committed',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe cafes are more than venues – they are communities. We foster connections and friendships.',
      highlight: 'Community-driven',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay at the forefront of specialty coffee trends while honoring traditional methods.',
      highlight: 'Forward-thinking',
    },
  ];

  const reviews = [
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Blu Turkey Cafe is not just a cafe – it\'s a passion project. You can feel the love and care in every cup. Truly exceptional!',
      category: 'Regular Customer',
    },
    {
      name: 'Arjun Kapoor',
      rating: 5,
      text: 'What started as a coffee shop has become my favorite community space. The team truly cares about their craft.',
      category: 'Community Member',
    },
    {
      name: 'Anjali Desai',
      rating: 5,
      text: 'The ambiance, service, and quality are unmatched. Blu Turkey Cafe represents the future of premium cafes in India.',
      category: 'Coffee Enthusiast',
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection
        subtitle="Our Journey"
        title="About Blu Turkey Cafe"
        description="Born from a passion for specialty coffee and a vision to create meaningful spaces in Delhi. Welcome to our story."
      />

      {/* Trust Badges */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
          <GoogleRatingBadge />
          <PriceRangeBadge />
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Our Story</h2>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <p>
            Blu Turkey Cafe is more than just a coffee shop – it's a manifestation of a dream to bring specialty coffee culture 
            to Delhi. Founded on the belief that coffee is more than a beverage, it's an experience, a ritual, and a connection.
          </p>

          <p>
            Our journey began with a simple observation: Delhi needed a cafe where quality, ambiance, and community came together 
            seamlessly. A place where coffee enthusiasts could explore specialty brews, couples could create romantic memories, and 
            friends could celebrate life's special moments.
          </p>

          <p>
            We spent years sourcing premium coffee beans, training expert baristas, and designing spaces that feel both elegant and 
            welcoming. Every decision, from the color of our walls to the origin of our beans, was made with careful consideration.
          </p>

          <p>
            Today, Blu Turkey Cafe stands as a testament to our commitment to excellence. We're proud to serve thousands of customers 
            who have made us their favorite cafe in Delhi. But we're not done – we're constantly innovating, learning, and improving 
            to give you the best experience possible.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <FeatureCardsGrid
        subtitle="What We Stand For"
        title="Our Core Values"
        features={values}
        columns={4}
      />

      {/* Our Mission & Vision */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-foreground/80 leading-relaxed">
              To serve exceptional specialty coffee in beautifully designed spaces where communities gather, connections are made, 
              and special moments are celebrated. We're committed to excellence in every cup and in every interaction.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-foreground/80 leading-relaxed">
              To be recognized as Delhi's premier specialty coffee destination – a place where quality meets warmth, where innovation 
              honors tradition, and where every guest feels valued. We envision a community of coffee lovers united by passion.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          What Makes Us Different
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-primary mb-2">Expert Baristas</h4>
            <p className="text-foreground/70 text-sm">
              Our team comprises certified specialty coffee professionals who are passionate about their craft and dedicated to 
              creating the perfect beverage for each customer.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-2">Premium Sourcing</h4>
            <p className="text-foreground/70 text-sm">
              We directly source specialty coffee from ethical partners, ensuring quality while supporting sustainable farming 
              practices and fair compensation.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-2">Thoughtful Design</h4>
            <p className="text-foreground/70 text-sm">
              Every element of our cafe – from furniture to lighting to color scheme – has been carefully selected to create 
              a cohesive, beautiful, and comfortable experience.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-2">Community Focus</h4>
            <p className="text-foreground/70 text-sm">
              We believe in creating more than just transactions. We foster community, host events, and support local initiatives.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-2">Continuous Improvement</h4>
            <p className="text-foreground/70 text-sm">
              We regularly train our staff, update our menu, and innovate to ensure we're always providing the best possible experience.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary mb-2">Customer-Centric Service</h4>
            <p className="text-foreground/70 text-sm">
              Your satisfaction is our priority. We listen to feedback, customize experiences, and go the extra mile to make your 
              visit special.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <ReviewsSection reviews={reviews} />

      {/* CTA */}
      <CTASection
        title="Join Our Coffee Community"
        description="Visit Blu Turkey Cafe and become part of our growing community of coffee lovers, dreamers, and moment-makers."
        primaryButton={{
          text: 'Visit Us Today',
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
            name: 'Blu Turkey Cafe',
            url: 'https://bluturkey.com',
            logo: 'https://bluturkey.com/images/blu-turkey-logo.png',
            description: 'Premium specialty coffee cafe in Delhi',
            sameAs: ['https://www.instagram.com/bluturkeycafe', 'https://www.facebook.com/bluturkeycafe'],
            founded: '2023',
            foundingLocation: 'New Delhi, India',
            areaServed: 'New Delhi, India',
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
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              telephone: '+91-99711-24279',
              email: 'info@bluturkey.com',
            },
          }),
        }}
      />

      <Footer />
    </>
  );
}
