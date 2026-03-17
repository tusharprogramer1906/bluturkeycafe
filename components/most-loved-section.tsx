import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const mostLovedItems = [
  {
    name: 'Chicken Tikka Pizza',
    description: 'Tandoori chicken tikka with cheese and sauce',
    price: '₹430',
    image: '/images/menu/blu-turkey-chicken-tikka-pizza-delhi.webp',
    alt: 'Chicken tikka pizza at Blu Turkey Cafe in Greater Kailash Delhi',
    title: 'Chicken Tikka Pizza – Blu Turkey Cafe Delhi',
  },
  {
    name: 'Creamy White Sauce Pasta',
    description: 'Penne pasta in rich creamy white sauce',
    price: '₹280',
    image: '/images/menu/blu-turkey-creamy-white-sauce-pasta-delhi.webp',
    alt: 'Creamy white sauce pasta at Blu Turkey Cafe Greater Kailash',
    title: 'White Sauce Pasta – Blu Turkey Cafe Delhi',
  },
  {
    name: 'Veg Grilled Sandwich & Fries',
    description: 'Grilled vegetable sandwich with crispy fries',
    price: '₹249',
    image: '/images/menu/blu-turkey-veg-grilled-sandwich-fries-delhi.webp',
    alt: 'Veg grilled sandwich with fries at Blu Turkey Cafe GK1 Delhi',
    title: 'Veg Grilled Sandwich – Blu Turkey Cafe Delhi',
  },
  {
    name: 'Croissant Sandwich',
    description: 'Fresh buttery croissant with fillings',
    price: '₹220',
    image: '/images/menu/blu-turkey-croissant-sandwich-delhi.webp',
    alt: 'Fresh croissant sandwich at Blu Turkey Cafe Greater Kailash Delhi',
    title: 'Croissant Sandwich – Blu Turkey Cafe Delhi',
  },
];

export default function MostLovedSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">
            Customer Favorites
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Most Loved at Blu Turkey Cafe
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Our most popular items loved by customers in Greater Kailash.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mostLovedItems.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border border-border bg-card hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  title={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground text-lg mb-1">{item.name}</h3>
                <p className="text-foreground/70 text-sm mb-2">{item.description}</p>
                <p className="font-bold text-primary">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Explore our full cafe menu
            <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
