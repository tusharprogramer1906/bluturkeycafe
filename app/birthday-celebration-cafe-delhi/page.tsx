import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import FeatureCardsGrid from '@/components/feature-cards';
import ReviewsSection from '@/components/reviews-section';
import CTASection from '@/components/cta-section';
import { Cake, Users, Gift, PartyPopper } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Birthday Celebration Cafe Delhi | Group Events | Blu Turkey Cafe',
  description: 'Perfect birthday celebration cafe in Delhi. Group-friendly spaces, custom arrangements, and memorable experiences. Ideal for birthday parties and group celebrations.',
  openGraph: {
    title: 'Birthday Celebration Cafe Delhi | Blu Turkey Cafe',
    description: 'Best cafe for birthday celebrations and group events in Delhi',
    url: 'https://bluturkey.com/birthday-celebration-cafe-delhi',
  },
};

export default function BirthdayCafePage() {
  const features = [
    {
      icon: Cake,
      title: 'Perfect Party Venue',
      description: 'Spacious areas designed to accommodate groups of all sizes for birthday celebrations.',
      highlight: 'Group-friendly ambiance',
    },
    {
      icon: Users,
      title: 'Group Seating',
      description: 'Flexible arrangements and reserved spaces perfect for gatherings and celebrations.',
      highlight: 'Up to 50+ guests',
    },
    {
      icon: Gift,
      title: 'Custom Packages',
      description: 'Special birthday packages with custom coffee selections and refreshment options.',
      highlight: 'Tailored for your party',
    },
    {
      icon: PartyPopper,
      title: 'Memorable Experience',
      description: 'Professional staff dedicated to making your birthday celebration unforgettable.',
      highlight: 'Full party experience',
    },
  ];

  const reviews = [
    {
      name: 'Rahul Verma',
      rating: 5,
      text: 'Celebrated my birthday at Blu Turkey and it was absolutely amazing! The staff was attentive, the ambiance was perfect, and all our guests loved it.',
      category: 'Birthday Party',
    },
    {
      name: 'Sneha Khanna',
      rating: 5,
      text: 'This is the best cafe for birthday celebrations in Delhi. Spacious, beautiful, and the service is exceptional. Highly recommend!',
      category: 'Group Celebration',
    },
    {
      name: 'Vikram Mehta',
      rating: 5,
      text: 'Hosted my daughter\'s birthday party here. The whole experience was flawless. Great food, amazing ambiance, and wonderful staff.',
      category: 'Birthday Event',
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection
        subtitle="Group Events & Celebrations"
        title="Perfect Birthday Celebration Cafe in Delhi"
        description="Celebrate life's special moments at Blu Turkey Cafe. Spacious venues, custom arrangements, and memorable experiences for birthday parties and group celebrations."
        primaryCta={{
          text: 'Plan Your Birthday',
          href: '/contact',
        }}
        secondaryCta={{
          text: 'See Our Menu',
          href: '/menu',
        }}
      />

      {/* Why Perfect for Birthdays */}
      <FeatureCardsGrid
        subtitle="Birthday Party Benefits"
        title="Why Celebrate at Blu Turkey Cafe"
        features={features}
        columns={4}
      />

      {/* Main Content */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Your Ideal Birthday Celebration Cafe in Delhi
        </h2>

        <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <p>
            When it's time to celebrate a birthday, you need more than just a cafe – you need a destination that can handle 
            the occasion with style and professionalism. Blu Turkey Cafe is the perfect birthday celebration cafe in Delhi, 
            offering everything you need to make the day unforgettable.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Spacious & Flexible Venues
          </h3>
          <p>
            Whether you're planning an intimate gathering or a larger celebration, our cafe offers flexible spaces designed 
            to accommodate groups of all sizes. We can arrange private or semi-private areas perfect for your birthday party.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Stunning Ambiance
          </h3>
          <p>
            Create the perfect party atmosphere in our beautifully designed spaces. Our elegant decor, warm lighting, and 
            modern aesthetic provide an upscale setting that impresses guests and makes for amazing memories and photos.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Customizable Packages
          </h3>
          <p>
            We understand that every birthday is unique. That's why we offer customizable packages tailored to your 
            preferences. Choose from our extensive menu of specialty coffees, refreshing beverages, and delicious snacks.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Professional Party Service
          </h3>
          <p>
            Our experienced staff is trained to handle group events with excellence. From seating arrangements to serving, 
            we take care of the details so you can focus on celebrating and creating memorable moments with your loved ones.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Perfect for Different Age Groups
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Kids' birthdays with fun-friendly menu options</li>
            <li>Teen celebrations with trendy ambiance</li>
            <li>Adult birthday parties and milestone celebrations</li>
            <li>Corporate team celebrations</li>
            <li>Family milestone gatherings</li>
            <li>Group celebrations and reunions</li>
          </ul>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Convenient Location & Accessibility
          </h3>
          <p>
            Located in central Delhi with easy access from all parts of the city, ample parking, and comfortable spaces – 
            Blu Turkey Cafe is designed to be the most convenient choice for your birthday celebration.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Photography-Perfect Setting
          </h3>
          <p>
            Every moment at Blu Turkey Cafe is Instagram-worthy. Our beautiful spaces and thoughtful decor provide the 
            perfect backdrop for capturing and sharing your birthday memories.
          </p>

          <h3 className="text-2xl font-semibold text-primary mt-8">
            Advance Booking & Planning
          </h3>
          <p>
            We recommend booking in advance for birthday celebrations. Our team will work with you to ensure everything is 
            perfect for your special day. Contact us to discuss your requirements and customize the perfect party experience.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection reviews={reviews} />

      {/* CTA */}
      <CTASection
        title="Plan Your Birthday at Blu Turkey Cafe"
        description="Make your birthday unforgettable at Delhi's best celebration cafe. Book your party today and let us create memories that last a lifetime."
        primaryButton={{
          text: 'Book Your Party',
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
            name: 'Blu Turkey Cafe - Birthday Celebration Cafe Delhi',
            url: 'https://bluturkey.com/birthday-celebration-cafe-delhi',
            description: 'Best cafe for birthday celebrations and group events in Delhi',
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
