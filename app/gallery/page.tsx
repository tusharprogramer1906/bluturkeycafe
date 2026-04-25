import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import GallerySection from '@/components/gallery-section';
import GalleryConversionCTA from '@/components/gallery-conversion-cta';

export const metadata: Metadata = {
  title: 'Blu Turkey Cafe Photos GK1 | Cafe Ambience & Food Gallery Delhi',
  description:
    'Browse photos of Blu Turkey Cafe in Greater Kailash (GK1), South Delhi. See our cozy cafe interiors, specialty coffee art, pasta, pizza, waffles, celebration setups & more. Rated 4.9⭐ on Google.',
  alternates: {
    canonical: 'https://bluturkeycafe.com/gallery',
  },
  openGraph: {
    title: 'Blu Turkey Cafe Photos GK1 | Cafe Ambience & Food Gallery Delhi',
    description:
      'Explore high-quality photos of Blu Turkey Cafe in GK1 Delhi — interiors, specialty coffee, food, and special events. See why we\'re rated 4.9⭐.',
    url: 'https://bluturkeycafe.com/gallery',
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

      {/* SEO Text Section 1: Ambience & Location */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Step Inside Blu Turkey Cafe — GK1&apos;s Most Photogenic Cafe
        </h2>
        <p className="text-foreground/75 leading-relaxed text-lg mb-4">
          Nestled in Greater Kailash I (GK1), one of South Delhi’s most vibrant neighbourhoods, Blu Turkey Cafe is
          designed to delight every sense. Our interiors blend warm wood tones, soft ambient lighting, and earthy accents
          to create an atmosphere that feels both sophisticated and welcoming. Whether you’re meeting a friend for coffee,
          celebrating a birthday, or simply unwinding after a long day, our spaces offer the perfect backdrop for every
          occasion.
        </p>
        <p className="text-foreground/75 leading-relaxed text-lg mb-6">
          Every corner of Blu Turkey Cafe is thoughtfully curated — from the Instagram-worthy window seats bathed in
          natural light to the cosy private nooks ideal for intimate conversations. Located on C-30, Ground Floor,
          Amara Hotel, GK1, New Delhi 110048, we’re easily accessible from Kailash Colony, Nehru Place, and Greater
          Kailash II (GK2).
        </p>
        <a
          href="/contact"
          className="inline-block text-primary font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity"
        >
          Get directions to our GK1 cafe →
        </a>
      </section>

      {/* SEO Text Section 2: Coffee Craft */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            From Bean to Cup — Our Coffee Craft in Photos
          </h2>
          <p className="text-foreground/75 leading-relaxed text-lg mb-4">
            The gallery photos tell the story of a cafe that takes quality seriously. At Blu Turkey Cafe, specialty
            coffee is not just a product — it’s a craft. Our baristas work with premium single-origin beans and
            signature blends, pulled on precision espresso equipment, to deliver lattes, cappuccinos, cold brews and
            frappes that look as incredible as they taste. Every cup is a small work of art.
          </p>
          <p className="text-foreground/75 leading-relaxed text-lg mb-6">
            Beyond coffee, you’ll find our food equally photogenic: Belgian waffles drizzled with Nutella, handmade
            pasta in rich creamy sauces, wood-fired pizzas, flaky butter croissants, and sizzling chocolate brownies.
            Rated 4.9⭐ on Google by our happy customers in GK1 and across South Delhi.
          </p>
          <a
            href="/menu"
            className="inline-block text-primary font-semibold underline underline-offset-4 hover:opacity-75 transition-opacity"
          >
            Explore dishes in our full cafe menu in GK1 Delhi →
          </a>
        </div>
      </section>

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
            url: 'https://bluturkeycafe.com/gallery',
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
          }).replace(/</g, '\\u003c'),
        }}
      />

      <Footer />
    </>
  );
}
