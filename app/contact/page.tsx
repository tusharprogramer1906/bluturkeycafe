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
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-foreground/70 mb-12">
          Everything you need to know about visiting Blu Turkey Cafe in Greater Kailash (GK1), New Delhi.
        </p>

        <div className="space-y-6">
          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-2">Where is Blu Turkey Cafe located?</h3>
            <p className="text-foreground/70">
              Blu Turkey Cafe is located at C-30, Ground Floor, Amara Hotel, Greater Kailash I (GK1), New Delhi – 110048.
              We are easily accessible from Kailash Colony Metro Station, Nehru Place, and GK2.
            </p>
          </div>

          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-2">What are Blu Turkey Cafe&apos;s opening hours?</h3>
            <p className="text-foreground/70">
              We are open daily from <strong>9:30 AM to 11:00 PM</strong>, seven days a week — Monday through Sunday.
            </p>
          </div>

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
              you&apos;re connected, why not{' '}
              <a href="/menu" className="text-primary font-medium underline underline-offset-4 hover:opacity-75 transition-opacity">
                check out our full cafe menu in GK1
              </a>{' '}
              and plan your order.
            </p>
          </div>

          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-2">What payment methods do you accept?</h3>
            <p className="text-foreground/70">
              We accept cash, credit cards, debit cards, and digital payment methods including UPI, Google Pay, and PhonePe. All major payment options are welcome!
            </p>
          </div>

          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-2">Do you have vegetarian and vegan options?</h3>
            <p className="text-foreground/70">
              Yes! Our menu includes a wide range of vegetarian items — from Margherita pizza and veg pasta to grilled sandwiches and waffles. All beverages can be made with plant-based milk alternatives (oat, almond, or soy milk).
            </p>
          </div>

          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-semibold text-primary mb-2">Is Blu Turkey Cafe easily accessible?</h3>
            <p className="text-foreground/70">
              Yes! We are located in Greater Kailash I (GK1) with easy access from Kailash Colony Metro Station (approx. 10 min walk),
              ample street parking nearby, and wheelchair-accessible entrance.
            </p>
          </div>
        </div>
      </section>


      {/* SEO Schema — CafeOrCoffeeShop + FAQPage */}
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
            priceRange: '\u20b9400\u2013\u20b9600',
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
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '09:30',
                closes: '23:00',
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Where is Blu Turkey Cafe located?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Blu Turkey Cafe is located at C-30, Ground Floor, Amara Hotel, Greater Kailash I (GK1), New Delhi – 110048. Easily accessible from Kailash Colony Metro Station, Nehru Place, and GK2.',
                },
              },
              {
                '@type': 'Question',
                name: "What are Blu Turkey Cafe's opening hours?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Blu Turkey Cafe is open daily from 9:30 AM to 11:00 PM, seven days a week.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does Blu Turkey Cafe accept reservations?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! We accept reservations for groups and special occasions. Contact us in advance for the best experience.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can we host private events at Blu Turkey Cafe?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely! We offer private and semi-private spaces for birthday celebrations, corporate events, and special occasions. Contact us to discuss your requirements.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does Blu Turkey Cafe have WiFi?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, we provide complimentary high-speed WiFi for all customers.',
                },
              },
              {
                '@type': 'Question',
                name: 'What payment methods does Blu Turkey Cafe accept?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We accept cash, credit cards, debit cards, and digital payment methods including UPI, Google Pay, and PhonePe.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does Blu Turkey Cafe have vegetarian options?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! Our menu includes a wide range of vegetarian items — from Margherita pizza and veg pasta to grilled sandwiches and waffles. All beverages can be made with plant-based milk alternatives.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is Blu Turkey Cafe easily accessible?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes! We are located in Greater Kailash I (GK1) with easy access from Kailash Colony Metro Station, ample parking, and wheelchair-accessible entrance.',
                },
              },
            ],
          }).replace(/</g, '\\u003c'),
        }}
      />

      <Footer />
    </>
  );
}
