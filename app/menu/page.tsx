import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import MenuCategory from '@/components/menu-category';
import MenuShowcase from '@/components/menu-showcase';
import CTASection from '@/components/cta-section';

export const metadata: Metadata = {
  title: 'Menu - Blu Turkey Cafe | Specialty Coffee & Drinks',
  description: 'Explore our extensive menu featuring signature coffee blends, specialty drinks, and delicious snacks. Premium quality at Blu Turkey Cafe in Delhi.',
  openGraph: {
    title: 'Menu - Blu Turkey Cafe',
    description: 'Our specialty coffee and cafe menu in Delhi',
    url: 'https://bluturkey.com/menu',
  },
};

export default function MenuPage() {
  const espressoItems = [
    {
      name: 'Espresso',
      description: 'Single or double shot of rich, concentrated coffee',
      price: '₹60/₹100',
      badge: 'Classic',
    },
    {
      name: 'Americano',
      description: 'Espresso shots combined with hot water for a smooth, bold flavor',
      price: '₹100',
    },
    {
      name: 'Lungo',
      description: 'Long extraction espresso with a milder taste',
      price: '₹110',
    },
    {
      name: 'Ristretto',
      description: 'Short, strong espresso shot with intense flavor',
      price: '₹80',
    },
    {
      name: 'Turkish Espresso Blend',
      description: 'Our signature dark roast with notes of dark chocolate and hazelnut',
      price: '₹140',
      badge: 'House Special',
    },
  ];

  const milkBasedItems = [
    {
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and velvety microfoam',
      price: '₹140',
    },
    {
      name: 'Latte',
      description: 'Smooth espresso with plenty of steamed milk and light foam',
      price: '₹140',
    },
    {
      name: 'Macchiato',
      description: 'Espresso "marked" with a small amount of steamed milk',
      price: '₹120',
    },
    {
      name: 'Flat White',
      description: 'Velvety microfoam with espresso, Australian style',
      price: '₹150',
    },
    {
      name: 'Blue Velvet Latte',
      description: 'Creamy latte infused with vanilla and blue spirulina',
      price: '₹180',
      badge: 'New',
    },
    {
      name: 'Delhi Sunrise',
      description: 'Cappuccino with subtle caramel notes and cinnamon dusting',
      price: '₹160',
    },
    {
      name: 'Mocha',
      description: 'Espresso with steamed milk and rich dark chocolate',
      price: '₹150',
    },
    {
      name: 'Honey Cinnamon Latte',
      description: 'Smooth latte with natural honey and warm cinnamon',
      price: '₹150',
      vegan: true,
    },
  ];

  const specialtyDrinksItems = [
    {
      name: 'Cold Brew',
      description: 'Smooth, refreshing slow-brewed coffee served cold',
      price: '₹120',
      badge: 'Bestseller',
    },
    {
      name: 'Iced Latte',
      description: 'Refreshing latte served over ice with cold milk',
      price: '₹130',
    },
    {
      name: 'Affogato',
      description: 'Vanilla ice cream topped with a shot of hot espresso',
      price: '₹160',
    },
    {
      name: 'Dalgona Coffee',
      description: 'Whipped coffee served with milk, topped with cocoa powder',
      price: '₹140',
    },
    {
      name: 'Coffee Smoothie',
      description: 'Blended cold brew with banana, almond butter, and oat milk',
      price: '₹170',
      vegan: true,
    },
    {
      name: 'Signature Iced Mocha',
      description: 'Iced coffee with chocolate and whipped cream',
      price: '₹150',
    },
  ];

  const teaAndOthersItems = [
    {
      name: 'English Breakfast Tea',
      description: 'Classic brewed tea served hot with milk and sugar',
      price: '₹80',
    },
    {
      name: 'Masala Chai',
      description: 'Aromatic Indian spiced tea with milk',
      price: '₹70',
      badge: 'Local Favorite',
    },
    {
      name: 'Green Tea',
      description: 'Fresh, antioxidant-rich green tea',
      price: '₹90',
    },
    {
      name: 'Chamomile Tea',
      description: 'Soothing herbal chamomile tea',
      price: '₹100',
      vegan: true,
    },
    {
      name: 'Hot Chocolate',
      description: 'Rich, creamy hot chocolate made with premium cocoa',
      price: '₹140',
    },
    {
      name: 'Smoothie Bowl',
      description: 'Thick berry smoothie topped with granola and fruits',
      price: '₹180',
      vegan: true,
    },
  ];

  const snacksItems = [
    {
      name: 'Croissant',
      description: 'Buttery, flaky pastry perfect with coffee',
      price: '₹90',
    },
    {
      name: 'Chocolate Croissant',
      description: 'Croissant filled with premium dark chocolate',
      price: '₹110',
    },
    {
      name: 'Blueberry Muffin',
      description: 'Fresh blueberry muffin with soft texture',
      price: '₹100',
      vegan: true,
    },
    {
      name: 'Chocolate Chip Cookie',
      description: 'Warm cookie loaded with premium chocolate chips',
      price: '₹70',
    },
    {
      name: 'Almond Biscotti',
      description: 'Twice-baked almond biscotti, perfect for dipping',
      price: '₹80',
      badge: 'House-made',
    },
    {
      name: 'Chocolate Brownie',
      description: 'Fudgy brownie made fresh daily',
      price: '₹120',
    },
    {
      name: 'Cheese Cake',
      description: 'Classic New York style cheesecake',
      price: '₹150',
    },
    {
      name: 'Almond Croissant',
      description: 'Flaky croissant with almond cream filling',
      price: '₹130',
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection
        subtitle="Explore Our Offerings"
        title="Our Premium Menu"
        description="Carefully crafted beverages and delicious snacks made with premium ingredients. From signature coffee blends to specialty drinks."
      />

      {/* Menu Showcase with Images */}
      <MenuShowcase />

      {/* Menu Content */}
      <main className="py-12 md:py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <MenuCategory
          category="Espresso Shots & Classics"
          description="Start your day or enjoy a quick espresso with our classic selections."
          items={espressoItems}
        />

        <MenuCategory
          category="Milk-Based Specialties"
          description="Creamy, smooth beverages made with perfectly steamed milk."
          items={milkBasedItems}
        />

        <MenuCategory
          category="Cold & Specialty Drinks"
          description="Refreshing drinks perfect for any season."
          items={specialtyDrinksItems}
        />

        <MenuCategory
          category="Tea & Other Beverages"
          description="A selection of teas and other delicious drinks."
          items={teaAndOthersItems}
        />

        <MenuCategory
          category="Snacks & Pastries"
          description="Freshly baked pastries and treats to complement your beverage."
          items={snacksItems}
        />

        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-border">
          <p className="text-center text-foreground/70">
            All beverages can be customized with dairy alternatives (almond, oat, soy milk).
            <br />
            <span className="text-sm mt-2 inline-block">
              Ask our baristas about seasonal specials and recommendations!
            </span>
          </p>
        </div>
      </main>

      {/* CTA Section */}
      <CTASection
        title="Ready to Experience Our Menu?"
        description="Visit Blu Turkey Cafe today and let our expert baristas craft the perfect beverage just for you."
        primaryButton={{
          text: 'Find Our Location',
          href: '/contact',
        }}
      />

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Restaurant',
            name: 'Blu Turkey Cafe',
            url: 'https://bluturkey.com/menu',
            hasMenu: 'https://bluturkey.com/menu',
            servesCuisine: ['Coffee', 'Cafe'],
          }),
        }}
      />

      <Footer />
    </>
  );
}
