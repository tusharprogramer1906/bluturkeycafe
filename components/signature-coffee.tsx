import Image from 'next/image';

interface CoffeeItem {
  name: string;
  description: string;
  price: string;
  badge?: string;
}

interface SignatureCoffeeProps {
  coffeeItems: CoffeeItem[];
}

export default function SignatureCoffee({ coffeeItems }: SignatureCoffeeProps) {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">
          Our Specialty
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
          Signature Coffee Blends
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Carefully crafted coffee blends made with premium beans sourced from the finest coffee estates across India and beyond.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coffeeItems.map((item, index) => (
          <div key={index} className="group">
            <div className="relative mb-4 bg-gradient-to-br from-primary/10 to-accent/10 aspect-square rounded-lg overflow-hidden border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl opacity-20">☕</div>
              </div>
              {item.badge && (
                <div className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {item.badge}
                </div>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                {item.name}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {item.description}
              </p>
              <p className="text-lg font-bold text-primary pt-2">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
