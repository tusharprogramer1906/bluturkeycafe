import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import ContactForm from '@/components/contact-form';
import LocationMap from '@/components/location-map';
import { GoogleRatingBadge, PriceRangeBadge } from '@/components/business-badges';

export const metadata: Metadata = {
  title: 'Contact Blu Turkey Cafe | Visit Us | Get In Touch',
  description: 'Contact Blu Turkey Cafe in Delhi. Find our location, hours, phone number, and email. Book events or send us your inquiry.',
  alternates: {
    canonical: 'https://bluturkeycafe.com/contact',
  },
  openGraph: {
    title: 'Contact Blu Turkey Cafe',
    description: 'Get in touch with Blu Turkey Cafe in Delhi',
    url: 'https://bluturkeycafe.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection
        subtitle="We'd Love to Hear From You"
        title="Contact Blu Turkey Cafe"
        description="Whether you have a question, want to book an event, or just want to say hello – we're here to help. Get in touch with us today."
        showRatingBadge
      />

      {/* Contact Content */}
      <main className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <GoogleRatingBadge />
            <PriceRangeBadge />
          </div>
          <ContactForm />
        </div>
      </main>

      {/* Map Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Find Us on the Map
          </h2>

          <LocationMap
            address="Ground Floor, of Amara Hotel, C-30, Blu Turkey Cafe, Greater Kailash I, New Delhi, Delhi 110048"
            businessName="Blu Turkey Cafe"
            latitude={28.5244}
            longitude={77.1855}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-2">Do you accept reservations?</h3>
            <p className="text-foreground/70">
              Yes! We accept reservations for groups and special occasions. Contact us in advance for the best experience.
            </p>
          </div>

          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-2">Can we host private events?</h3>
            <p className="text-foreground/70">
              Absolutely! We offer private and semi-private spaces for birthday celebrations, corporate events, and special 
              occasions. Contact us to discuss your requirements.
            </p>
          </div>

          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-2">Do you have WiFi?</h3>
            <p className="text-foreground/70">
              Yes, we provide complimentary high-speed WiFi for all our customers. Great for working or browsing!
            </p>
          </div>

          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-2">What payment methods do you accept?</h3>
            <p className="text-foreground/70">
              We accept cash, credit cards, debit cards, and digital payment methods. All major payment options are welcome!
            </p>
          </div>

          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-2">Do you have vegetarian/vegan options?</h3>
            <p className="text-foreground/70">
              Yes! Our menu includes vegetarian snacks and pastries. All beverages can be made with plant-based milk alternatives.
            </p>
          </div>

          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-2">Is the cafe easily accessible?</h3>
            <p className="text-foreground/70">
              We are located in a central area with public transportation access, parking facilities, and wheelchair-accessible 
              entrances.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CafeOrCoffeeShop',
            name: 'Blu Turkey Cafe',
            url: 'https://bluturkey.com/contact',
            telephone: '+91-99711-24279',
            email: 'bluturkeycafe@gmail.com',
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
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '22:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday', 'Sunday'],
                opens: '09:00',
                closes: '23:00',
              },
            ],
          }),
        }}
      />

      <Footer />
    </>
  );
}
