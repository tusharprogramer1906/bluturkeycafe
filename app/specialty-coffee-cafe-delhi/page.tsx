import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import FeatureCardsGrid from '@/components/feature-cards';
import ReviewsSection from '@/components/reviews-section';
import CTASection from '@/components/cta-section';
import { Coffee, Award, Leaf, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Specialty Coffee Cafe Delhi | Premium Coffee | Blu Turkey Cafe',
  description: 'Discover authentic specialty coffee at Blu Turkey Cafe in Delhi. Premium bean selection, expert baristas, and coffee education for true coffee enthusiasts.',
  openGraph: {
    title: 'Specialty Coffee Cafe Delhi | Blu Turkey Cafe',
    description: 'Best specialty coffee cafe in Delhi with premium beans and expert baristas',
    url: 'https://bluturkey.com/specialty-coffee-cafe-delhi',
  },
};

export default function SpecialtyCoffeePage() {
  const features = [
    {
      icon: Coffee,
      title: 'Premium Bean Selection',
      description: 'Carefully sourced specialty coffee beans from the finest estates with single-origin options and exclusive blends.',
      highlight: '15+ signature blends',
    },
    {
      icon: Award,
      title: 'Expert Baristas',
      description: 'Certified specialty coffee baristas with years of experience and genuine passion for coffee craftsmanship.',
      highlight: 'Award-winning expertise',
    },
    {
      icon: Leaf,
      title: 'Sustainable & Ethical',
      description: 'We source our coffee responsibly, supporting sustainable farming practices and fair-trade partners.',
      highlight: 'Ethically sourced beans',
    },
    {
      icon: BookOpen,
      title: 'Coffee Education',
      description: 'Learn about specialty coffee through our recommendations, brewing techniques, and coffee conversations.',
      highlight: 'Coffee knowledge sharing',
    },
  ];

  const reviews = [
    {
      name: 'Arjun Kapoor',
      rating: 5,
      text: 'Finally found a genuine specialty coffee cafe in Delhi! The quality of beans, brewing techniques, and barista knowledge is exceptional.',
      category: 'Coffee Connoisseur',
    },
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'This is what specialty coffee should be. Every cup is carefully crafted and tastes amazing. The baristas really know their stuff!',
      category: 'Coffee Enthusiast',
    },
    {
      name: 'Vikram Singh',
      rating: 5,
      text: 'Best specialty coffee cafe in Delhi by far. The single-origin coffees are incredible, and the staff is passionate about coffee culture.',
      category: 'Regular Customer',
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection
        subtitle="For the True Coffee Lover"
        title="Premier Specialty Coffee Cafe in Delhi"
        description="Experience authentic specialty coffee at Blu Turkey Cafe. Premium beans, expert baristas, and a genuine coffee culture in the heart of Delhi."
        primaryCta={{
          text: 'Explore Our Coffee',
          href: '/menu',
        }}
        secondaryCta={{
          text: 'Visit Us',
          href: '/contact',
        }}
      />

      {/* Why Choose Us */}
      <FeatureCardsGrid
        subtitle="What Defines Our Specialty Coffee"
        title="Excellence in Every Cup"
        features={features}
        columns={4}
      />

      {/* Main Content */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          The Ultimate Specialty Coffee Experience in Delhi
        </h2>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <p>
            For true coffee enthusiasts, Blu Turkey Cafe represents a commitment to specialty coffee excellence. We're not 
            just serving coffee – we're sharing a passion for quality, craftsmanship, and coffee culture.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Premium Bean Selection & Sourcing
          </h3>
          <p>
            We believe specialty coffee starts with exceptional beans. Our team travels and builds relationships with coffee 
            farmers to source the finest specialty-grade coffees. Each bean tells a story – from the altitude it was grown at 
            to the specific processing methods used – and we're passionate about sharing these stories with our customers.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Single-Origin & Specialty Blends
          </h3>
          <p>
            Explore our rotating selection of single-origin coffees that showcase the unique characteristics of different 
            regions and elevations. Or enjoy our carefully crafted signature blends, each designed to highlight specific 
            flavor profiles and aromas that coffee lovers appreciate.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Expert Roasting & Grinding
          </h3>
          <p>
            Our coffee is roasted in small batches to ensure optimal freshness and flavor. Every bean is roasted to order 
            based on the extraction method you prefer. We grind fresh for each cup, never pre-grinding – because we understand 
            that the difference between specialty coffee and average coffee is in the details.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Master Barista Craftsmanship
          </h3>
          <p>
            Our baristas aren't just trained – they're artists and scientists. They understand extraction theory, water 
            chemistry, and coffee biology. Each espresso shot is pulled with precision, each cappuccino steamed with care, 
            ensuring you experience specialty coffee the way it's meant to be.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Advanced Brewing Equipment
          </h3>
          <p>
            We invest in professional-grade equipment because the quality of your cup depends on it. From our precision espresso 
            machine to specialty brewing devices, every piece of equipment in our cafe is chosen to maximize the potential of 
            our premium beans.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Coffee Education & Culture
          </h3>
          <p>
            Visit Blu Turkey Cafe and you'll be part of a coffee community. Our baristas love talking about coffee – bean 
            origins, flavor notes, brewing techniques, and the science behind extraction. We're always happy to recommend the 
            perfect coffee for your taste preferences or brewing method.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Sustainable & Ethical Practices
          </h3>
          <p>
            True specialty coffee appreciates the farmers who grow it. We partner exclusively with ethically sourced, 
            fair-trade coffee suppliers who support sustainable farming practices and ensure coffee farmers receive fair 
            compensation for their exceptional work.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Our Signature Specialty Blends
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Turkish Espresso Blend:</strong> Dark chocolate and hazelnut notes, bold and intense</li>
            <li><strong>Delhi Sunrise:</strong> Smooth cappuccino with subtle caramel and balanced acidity</li>
            <li><strong>Blue Velvet:</strong> Creamy specialty blend with vanilla and silky microfoam</li>
            <li><strong>Single-Origin Ethiopian:</strong> Bright, fruity notes with floral complexity</li>
            <li><strong>Colombian Reserve:</strong> Balanced, chocolatey with mild spice undertones</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Perfect for Coffee Lovers
          </h3>
          <p>
            Whether you're a seasoned coffee connoisseur or discovering specialty coffee for the first time, Blu Turkey Cafe 
            welcomes you. Our knowledgeable staff will guide you through flavor profiles, suggest pairings, and help you 
            develop your coffee palate. We believe every coffee lover deserves an exceptional specialty coffee experience.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection reviews={reviews} />

      {/* CTA */}
      <CTASection
        title="Experience True Specialty Coffee at Blu Turkey Cafe"
        description="Join Delhi's coffee community and discover what makes specialty coffee truly special. Visit us today for an unforgettable coffee experience."
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
            name: 'Blu Turkey Cafe - Specialty Coffee Cafe Delhi',
            url: 'https://bluturkey.com/specialty-coffee-cafe-delhi',
            description: 'Best specialty coffee cafe in Delhi with premium beans and expert baristas',
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
