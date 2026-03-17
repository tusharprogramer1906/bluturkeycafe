import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import MenuContent from '@/components/menu-content';
import MenuShowcase from '@/components/menu-showcase';
import { PriceRangeBadge } from '@/components/business-badges';
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
  const allDayBreakfastItems = [
    { name: 'Plain Omelette', description: 'Two eggs with brown bread served fresh', price: '₹150' },
    { name: 'Masala Omelette', description: 'Two eggs with spices and brown bread', price: '₹160' },
    { name: 'Sunnyside Up', description: 'Fried eggs served sunny-side up with toast', price: '₹160' },
  ];

  const saladsItems = [
    { name: 'Garden Salad', description: 'Fresh mixed greens with vegetables and dressing', price: '₹199' },
    { name: 'Chicken Salad', description: 'Grilled chicken with fresh greens and dressing', price: '₹249' },
  ];

  const garlicBreadItems = [
    { name: 'Garlic Bread', description: 'Toasted bread topped with garlic and butter', price: '₹150' },
    { name: 'Cheese Garlic Bread', description: 'Toasted bread with butter, garlic, herbs, and cheese', price: '₹180' },
    { name: 'Chilli Cheese Garlic Bread', description: 'Toasted bread with garlic, cheese, and chili flakes', price: '₹160' },
  ];

  const friesItems = [
    { name: 'Salted Fries', description: 'Crispy golden potato strips seasoned with salt', price: '₹180' },
    { name: 'Peri Peri Fries', description: 'Crispy fries with peri peri seasoning', price: '₹199' },
  ];

  const pizzaItems = [
    { name: 'Margherita Pizza', description: 'Tomato sauce, mozzarella cheese, basil, and tomato slice', price: '₹360', vegan: true },
    { name: 'Chilli Paneer Pizza', description: 'Spicy paneer with peppers and cheese', price: '₹400', vegan: true },
    { name: 'Veggies Pizza', description: 'Fresh vegetables with mozzarella and tomato sauce', price: '₹400', vegan: true },
    { name: 'Cheese Corn Pizza', description: 'Sweet corn and cheese on tomato base', price: '₹400', vegan: true },
    { name: 'Chicken Tikka Pizza', description: 'Tandoori chicken tikka with cheese and sauce', price: '₹430' },
    { name: 'Spicy BBQ Chicken Pizza', description: 'BBQ chicken with spicy sauce and cheese', price: '₹430' },
  ];

  const pastaItems = [
    { name: 'Arrabiata Pasta', description: 'Spicy tomato sauce with garlic and herbs', price: '₹350', vegan: true },
    { name: 'Creamy Cheese Sauce Pasta', description: 'Pasta in rich creamy cheese sauce', price: '₹350', vegan: true },
    { name: 'Mix Sauce Pasta (Veg)', description: 'Pasta with combination of sauces', price: '₹360', vegan: true },
    { name: 'Mix Sauce Pasta (Non-Veg)', description: 'Pasta with combination of sauces and chicken', price: '₹400' },
    { name: 'Veg Spinach Aglio Olio Pasta', description: 'Pasta with spinach, garlic, and olive oil', price: '₹360', vegan: true },
    { name: 'Chicken Spinach Aglio Olio Pasta', description: 'Pasta with chicken, spinach, garlic, and olive oil', price: '₹380' },
    { name: 'Chicken Arrabiata Pasta', description: 'Spicy tomato pasta with chicken', price: '₹380' },
    { name: 'Creamy Chicken Pasta', description: 'Chicken in creamy cheese sauce', price: '₹380' },
  ];

  const burgersItems = [
    { name: 'Veg Cheese Burger', description: 'Lettuce, cucumber, tomato, onion, mayonnaise, veg patty', price: '₹180', vegan: true },
    { name: 'Spicy Cottage Cheese Burger', description: 'Spiced paneer patty with fresh veggies', price: '₹220', vegan: true },
    { name: 'Chicken Burger', description: 'Crispy chicken patty with fresh vegetables', price: '₹220' },
    { name: 'Chicken Cheese Burger', description: 'Chicken patty with melted cheese and veggies', price: '₹220' },
  ];

  const wrapsItems = [
    { name: 'Classic Veg Wrap', description: 'Fresh vegetables wrapped in soft tortilla', price: '₹250', vegan: true },
    { name: 'Chilli Paneer Wrap', description: 'Spicy paneer with peppers in tortilla', price: '₹270', vegan: true },
    { name: 'Chicken Tikka Wrap', description: 'Tandoori chicken tikka in tortilla', price: '₹300' },
    { name: 'Mexican Chicken Wrap', description: 'Mexican-spiced chicken with salsa', price: '₹300' },
  ];

  const sandwichItems = [
    { name: 'Veg Grilled Sandwich', description: 'Grilled vegetables with cheese', price: '₹250', vegan: true },
    { name: 'Cheese Grilled Veg Sandwich', description: 'Grilled vegetables with melted cheese', price: '₹270', vegan: true },
    { name: 'Paneer Tikka Cheese Sandwich', description: 'Paneer tikka with cheese and veggies', price: '₹280', vegan: true },
    { name: 'Chicken Salad Sandwich', description: 'Chicken salad with fresh greens', price: '₹300' },
    { name: 'Chicken Tikka Sandwich', description: 'Tandoori chicken tikka with veggies', price: '₹300' },
  ];

  const wafflePancakeItems = [
    { name: 'Chocolate & Cinnamon Waffle', description: 'Belgian waffle with chocolate and cinnamon', price: '₹249' },
    { name: 'Nutella & Chocolate Waffle', description: 'Waffle topped with Nutella and chocolate', price: '₹280' },
    { name: 'Walnut Brownie Waffle', description: 'Waffle with walnut brownie and toppings', price: '₹349' },
    { name: 'Nutella & Chocolate Pancake', description: 'Fluffy pancakes with Nutella and chocolate', price: '₹349' },
    { name: 'Maple Pancake', description: 'Classic pancakes with maple syrup', price: '₹349' },
  ];

  const hotCoffeeWithMilkItems = [
    { name: 'Mocha', description: 'Espresso with steamed milk and rich dark chocolate', price: '₹280' },
    { name: 'Latte', description: 'Smooth espresso with steamed milk and light foam', price: '₹250' },
    { name: 'Cappuccino', description: 'Espresso with steamed milk and velvety microfoam', price: '₹220' },
    { name: 'Flat White', description: 'Velvety microfoam with espresso', price: '₹250' },
    { name: 'Cortado', description: 'Espresso with a small amount of warm milk', price: '₹200' },
    { name: 'Macchiato', description: 'Espresso marked with steamed milk', price: '₹200' },
    { name: 'Irish Hot Coffee', description: 'Hot coffee with Irish cream flavor', price: '₹280' },
    { name: 'Caramel Hot Coffee', description: 'Hot coffee with caramel syrup', price: '₹280' },
    { name: 'Hazelnut Hot Coffee', description: 'Hot coffee with hazelnut flavor', price: '₹280' },
    { name: 'Hot Chocolate', description: 'Rich creamy hot chocolate with premium cocoa', price: '₹280' },
  ];

  const hotCoffeeWithoutMilkItems = [
    { name: 'Espresso', description: 'Single or double shot of rich concentrated coffee', price: '₹80 / ₹120' },
    { name: 'Americano', description: 'Espresso with hot water for bold flavor', price: '₹150' },
    { name: 'Ristretto', description: 'Short strong espresso shot', price: '₹90' },
    { name: 'Lungo', description: 'Long extraction espresso', price: '₹110' },
  ];

  const coldCoffeeWithMilkItems = [
    { name: 'Choco Frappe', description: 'Blended chocolate frappe with ice', price: '₹280' },
    { name: 'Heaven Nutella Frappe', description: 'Creamy Nutella frappe', price: '₹350' },
    { name: 'Brownie Frappe', description: 'Chocolate brownie blended frappe', price: '₹350' },
    { name: 'Caramel Cold Coffee', description: 'Cold coffee with caramel syrup', price: '₹300' },
    { name: 'Hazelnut Cold Coffee', description: 'Cold coffee with hazelnut flavor', price: '₹300' },
    { name: 'Iced Cappuccino', description: 'Cappuccino served over ice', price: '₹250' },
    { name: 'Irish Cold Coffee', description: 'Cold coffee with Irish cream', price: '₹300' },
    { name: 'Iced Latte', description: 'Latte served over ice with cold milk', price: '₹250' },
    { name: 'Iced Mocha', description: 'Mocha served over ice', price: '₹280' },
  ];

  const coldCoffeeWithoutMilkItems = [
    { name: 'Cold Brew', description: 'Smooth slow-brewed coffee served cold', price: '₹150' },
    { name: 'Iced Americano', description: 'Espresso over ice with cold water', price: '₹160' },
  ];

  const mocktailsItems = [
    { name: 'Lemonade', description: 'Fresh lemon juice with mint and soda', price: '₹199', vegan: true },
    { name: 'Lemon Ice Tea', description: 'Iced tea with lemon', price: '₹199', vegan: true },
    { name: 'Peach Ice Tea', description: 'Iced tea with peach flavor', price: '₹199', vegan: true },
    { name: 'Blu Heaven', description: 'Signature blue mocktail', price: '₹199', vegan: true },
    { name: 'Virgin Mojito', description: 'Classic mojito without alcohol', price: '₹199', vegan: true },
    { name: 'Orange Mint Mojito', description: 'Orange and mint mojito', price: '₹199', vegan: true },
    { name: 'Green Apple Mojito', description: 'Green apple with mint and lime', price: '₹199', vegan: true },
    { name: 'Kiwi Mint Mojito', description: 'Kiwi with fresh mint', price: '₹199', vegan: true },
    { name: 'Pink Lady', description: 'Berry and citrus mocktail', price: '₹199', vegan: true },
  ];

  const shakesItems = [
    { name: 'Strawberry Shake', description: 'Creamy strawberry milkshake', price: '₹249' },
    { name: 'Blueberry Shake', description: 'Fresh blueberry milkshake', price: '₹249' },
    { name: 'Butterscotch Shake', description: 'Classic butterscotch milkshake', price: '₹249' },
    { name: 'Brownie Shake', description: 'Chocolate brownie blended shake', price: '₹299' },
    { name: 'Mango Shake', description: 'Fresh mango milkshake', price: '₹249' },
    { name: 'Oreo Shake', description: 'Oreo cookie milkshake', price: '₹249' },
    { name: 'KitKat Shake', description: 'KitKat chocolate shake', price: '₹299' },
    { name: 'Chocolate Shake', description: 'Rich chocolate milkshake', price: '₹249' },
  ];

  const teaItems = [
    { name: 'Regular Tea', description: 'Classic Indian chai with milk', price: '₹130' },
    { name: 'Green Tea', description: 'Fresh antioxidant-rich green tea', price: '₹110', vegan: true },
    { name: 'Chamomile Green Tea', description: 'Soothing chamomile and green tea blend', price: '₹110', vegan: true },
    { name: 'Masala Tea', description: 'Aromatic Indian spiced tea', price: '₹149' },
    { name: 'Ginger Tea', description: 'Fresh ginger tea with spices', price: '₹149' },
    { name: 'Elaichi Tea', description: 'Cardamom-infused tea', price: '₹149' },
  ];

  const dessertsItems = [
    { name: 'Butter Croissant', description: 'Buttery flaky French croissant', price: '₹180' },
    { name: 'Chocolate Croissant', description: 'Croissant filled with dark chocolate', price: '₹210' },
    { name: 'Almond Croissant', description: 'Croissant with almond cream filling', price: '₹240' },
    { name: 'Blueberry Croissant', description: 'Croissant with blueberry filling', price: '₹240' },
    { name: 'Sizzler Chocolate Brownie', description: 'Chocolate brownie served sizzling', price: '₹299' },
    { name: 'Brownie', description: 'Fudgy chocolate brownie', price: '₹159' },
    { name: 'Brownie with Vanilla Ice Cream', description: 'Brownie with scoop of vanilla ice cream', price: '₹199' },
    { name: 'Cocoa Fantasy Pastry', description: 'Layered chocolate pastry', price: '₹159' },
    { name: 'Donuts', description: 'Fresh glazed donuts', price: '₹159' },
    { name: 'Cheesecake', description: 'Classic New York style cheesecake', price: '₹200' },
    { name: 'Cookies', description: 'Fresh baked cookies', price: '₹50' },
  ];

  const coffeeAddonsItems = [
    { name: 'Extra Shot', description: 'Additional espresso shot', price: '₹50' },
    { name: 'Oat Milk', description: 'Dairy-free oat milk alternative', price: '₹60' },
    { name: 'Almond Milk', description: 'Dairy-free almond milk', price: '₹60' },
    { name: 'Soy Milk', description: 'Dairy-free soy milk', price: '₹60' },
    { name: 'Sugar-Free Syrup', description: 'Sugar-free flavor syrup', price: '₹40' },
  ];

  const menuSections = [
    { category: 'All-Day Breakfast', description: 'Start your day right with our breakfast favorites.', items: allDayBreakfastItems, filterType: 'food' as const },
    { category: 'Salads', description: 'Fresh greens and wholesome salads.', items: saladsItems, filterType: 'food' as const },
    { category: 'Garlic Bread', description: 'Warm toasted bread with garlic and cheese.', items: garlicBreadItems, filterType: 'food' as const },
    { category: 'Fries', description: 'Crispy golden fries and sides.', items: friesItems, filterType: 'food' as const },
    { category: 'Pizza (Veg & Non Veg)', description: 'Wood-fired pizzas with fresh toppings.', items: pizzaItems, filterType: 'food' as const },
    { category: 'Pasta', description: 'Italian pasta in creamy and spicy sauces.', items: pastaItems, filterType: 'food' as const },
    { category: 'Burgers', description: 'Juicy burgers with fresh ingredients.', items: burgersItems, filterType: 'food' as const },
    { category: 'Wraps', description: 'Soft tortilla wraps with flavorful fillings.', items: wrapsItems, filterType: 'food' as const },
    { category: 'Sandwich', description: 'Grilled sandwiches with cheese and veggies.', items: sandwichItems, filterType: 'food' as const },
    { category: 'Waffle & Pancake', description: 'Sweet waffles and fluffy pancakes.', items: wafflePancakeItems, filterType: 'food' as const },
    { category: 'Hot Coffee (With Milk)', description: 'Creamy coffee drinks with steamed milk.', items: hotCoffeeWithMilkItems, filterType: 'coffee' as const },
    { category: 'Hot Coffee (Without Milk)', description: 'Bold espresso and black coffee.', items: hotCoffeeWithoutMilkItems, filterType: 'coffee' as const },
    { category: 'Cold Coffee (With Milk)', description: 'Iced and frappe coffee drinks.', items: coldCoffeeWithMilkItems, filterType: 'coffee' as const },
    { category: 'Cold Coffee (Without Milk)', description: 'Cold brew and iced black coffee.', items: coldCoffeeWithoutMilkItems, filterType: 'coffee' as const },
    { category: 'Mocktails', description: 'Refreshing non-alcoholic drinks.', items: mocktailsItems, filterType: 'drinks' as const },
    { category: 'Shakes', description: 'Creamy milkshakes and blended drinks.', items: shakesItems, filterType: 'drinks' as const },
    { category: 'Tea', description: 'Hot and iced tea selections.', items: teaItems, filterType: 'drinks' as const },
    { category: 'Desserts', description: 'Pastries, brownies, and sweet treats.', items: dessertsItems, filterType: 'desserts' as const },
    { category: 'Coffee Add-ons', description: 'Customize your coffee with add-ons.', items: coffeeAddonsItems, filterType: 'coffee' as const },
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

      {/* Price Range */}
      <section className="py-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex justify-center">
          <PriceRangeBadge />
        </div>
      </section>

      {/* Menu Showcase with Images */}
      <MenuShowcase />

      {/* Menu Content */}
      <main className="py-12 md:py-20 px-4 md:px-8 max-w-4xl mx-auto">
        <MenuContent sections={menuSections} />

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

      {/* SEO Schema - Menu structured data for coffee menu in GK1 Delhi */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Restaurant',
            name: 'Blu Turkey Cafe',
            url: 'https://bluturkey.com/menu',
            servesCuisine: ['Cafe', 'Coffee', 'Breakfast', 'Desserts', 'Italian'],
            priceRange: '₹400–₹600',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Ground Floor, Amara Hotel, C-30',
              addressLocality: 'Greater Kailash I',
              addressRegion: 'Delhi',
              postalCode: '110048',
              addressCountry: 'India',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: 150,
            },
            hasMenu: {
              '@type': 'Menu',
              name: 'Blu Turkey Cafe Menu',
              hasMenuSection: [
                { '@type': 'MenuSection', name: 'Hot Coffee (With Milk)', hasMenuItem: hotCoffeeWithMilkItems.slice(0, 5).map((i) => ({ '@type': 'MenuItem', name: i.name, offers: { '@type': 'Offer', priceCurrency: 'INR', price: (i.price.match(/\d+/) || ['0'])[0] } })) },
                { '@type': 'MenuSection', name: 'Cold Coffee', hasMenuItem: coldCoffeeWithMilkItems.slice(0, 5).map((i) => ({ '@type': 'MenuItem', name: i.name, offers: { '@type': 'Offer', priceCurrency: 'INR', price: (i.price.match(/\d+/) || ['0'])[0] } })) },
                { '@type': 'MenuSection', name: 'Pizza', hasMenuItem: pizzaItems.slice(0, 4).map((i) => ({ '@type': 'MenuItem', name: i.name, offers: { '@type': 'Offer', priceCurrency: 'INR', price: (i.price.match(/\d+/) || ['0'])[0] } })) },
                { '@type': 'MenuSection', name: 'Desserts', hasMenuItem: dessertsItems.slice(0, 5).map((i) => ({ '@type': 'MenuItem', name: i.name, offers: { '@type': 'Offer', priceCurrency: 'INR', price: (i.price.match(/\d+/) || ['0'])[0] } })) },
              ],
            },
          }),
        }}
      />

      <Footer />
    </>
  );
}
