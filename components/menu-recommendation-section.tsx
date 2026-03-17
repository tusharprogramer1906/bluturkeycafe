'use client';

import { useState } from 'react';
import Link from 'next/link';

const RECOMMENDATIONS: Record<string, { name: string; description: string; price: string }[]> = {
  sweet: [
    { name: 'Nutella & Chocolate Pancake', description: 'Fluffy pancakes with Nutella and chocolate', price: '₹349' },
    { name: 'Brownie with Vanilla Ice Cream', description: 'Fudgy brownie with scoop of vanilla ice cream', price: '₹199' },
    { name: 'Chocolate Shake', description: 'Rich chocolate milkshake', price: '₹249' },
    { name: 'Heaven Nutella Frappe', description: 'Creamy Nutella frappe', price: '₹350' },
  ],
  coffee: [
    { name: 'Cappuccino', description: 'Espresso with steamed milk and velvety microfoam', price: '₹220' },
    { name: 'Latte', description: 'Smooth espresso with steamed milk', price: '₹250' },
    { name: 'Iced Latte', description: 'Latte served over ice', price: '₹250' },
    { name: 'Mocha', description: 'Espresso with dark chocolate', price: '₹280' },
  ],
  snack: [
    { name: 'Paneer Tikka Sandwich', description: 'Paneer tikka with cheese and veggies', price: '₹280' },
    { name: 'Cheese Garlic Bread', description: 'Toasted bread with garlic and cheese', price: '₹180' },
    { name: 'Salted Fries', description: 'Crispy golden potato strips', price: '₹180' },
    { name: 'Chocolate Croissant', description: 'Croissant filled with dark chocolate', price: '₹210' },
  ],
  refreshing: [
    { name: 'Virgin Mojito', description: 'Classic mojito without alcohol', price: '₹199' },
    { name: 'Lemonade', description: 'Fresh lemon juice with mint and soda', price: '₹199' },
    { name: 'Iced Americano', description: 'Espresso over ice with cold water', price: '₹160' },
    { name: 'Cold Brew', description: 'Smooth slow-brewed coffee served cold', price: '₹150' },
  ],
};

const BUTTONS = [
  { id: 'sweet', label: 'I want something sweet' },
  { id: 'coffee', label: 'I want coffee' },
  { id: 'snack', label: 'I want a quick snack' },
  { id: 'refreshing', label: 'I want something refreshing' },
] as const;

export default function MenuRecommendationSection() {
  const [selected, setSelected] = useState<keyof typeof RECOMMENDATIONS | null>(null);

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Not sure what to order?
          </h2>
          <p className="text-foreground/70 mb-8">
            Tell us what you&apos;re in the mood for and we&apos;ll recommend something perfect.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            {BUTTONS.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setSelected(selected === btn.id ? null : btn.id)}
                className={`px-5 py-3 rounded-full font-semibold text-sm transition-colors min-h-[48px] md:min-h-0 ${
                  selected === btn.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {selected && (
          <div className="mt-8 p-6 rounded-xl border border-border bg-card">
            <h3 className="font-semibold text-foreground mb-4">We recommend</h3>
            <ul className="space-y-3">
              {RECOMMENDATIONS[selected].map((item, i) => (
                <li key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                  <div>
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="text-sm text-foreground/70">{item.description}</p>
                  </div>
                  <span className="font-bold text-primary flex-shrink-0 ml-4">{item.price}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/menu"
              className="inline-block mt-4 text-primary font-semibold hover:underline"
            >
              Explore full menu →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
