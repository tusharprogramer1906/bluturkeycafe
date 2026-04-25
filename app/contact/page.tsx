import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import ContactForm from '@/components/contact-form';
import LocationMap from '@/components/location-map';
import { GoogleRatingBadge, PriceRangeBadge } from '@/components/business-badges';

export const metadata: Metadata = {
  title: 'Blu Turkey Cafe Location GK1 Delhi | Address, Contact & Directions',
  description:
    'Find Blu Turkey Cafe in Greater Kailash (GK1), New Delhi. Address: C-30 Ground Floor, Amara Hotel, GK1 — 110048. Call +91-99711-24279 or email us. Open daily 9:30 AM–11 PM. Get directions on Google Maps.',
  alternates: {
    canonical: 'https://bluturkeycafe.com/contact',
  },
  openGraph: {
    title: 'Blu Turkey Cafe Location GK1 Delhi | Address, Contact & Directions',
    description:
      'Visit Blu Turkey Cafe at C-30 Ground Floor, Amara Hotel, Greater Kailash I, New Delhi 110048. Open 9:30 AM–11 PM daily. Rated 4.9⭐.',
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Find Us on the Map
          </h2>
          <p className="text-center text-foreground/70 mb-4">
            We’re located at{' '}
            <strong>C-30, Ground Floor, Amara Hotel, Greater Kailash I, New Delhi – 110048</strong>.
            Easily accessible from Kailash Colony Metro, Nehru Place, and GK2.
          </p>
          <p className="text-center mb-8">
            <a
              href="https://maps.google.com/?q=Blu+Turkey+Cafe+Greater+Kailash+1+New+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity"
            >
              Open in Google Maps →
            </a>
          </p>

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
              Yes, we provide complimentary high-speed WiFi for all our customers. Great for working or browsing! While
              you’re connected, why not{' '}
              <a href="/menu" className="text-primary font-medium underline underline-offset-4 hover:opacity-75 transition-opacity">
                check out our full cafe menu in GK1
              </a>{' '}
              and plan your order.
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
            url: 'https://bluturkeycafe.com/contact',
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
