import Image from 'next/image';

export default function MenuShowcase() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Our Signature Coffee Experience
          </h2>
          <p className="text-lg text-foreground/70 text-balance">
            Expertly crafted specialty coffee served in a premium cafe ambience
          </p>
        </div>

        {/* Image Grid Showcase */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {/* Left - Coffee Image */}
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-xl mb-4">
              <Image
                src="/images/blu-turkey-specialty-latte-coffee.webp"
                alt="Seating ambience at Blu Turkey Cafe Delhi"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Specialty Coffee</h3>
            <p className="text-center text-foreground/70">
              Premium coffee beans sourced from finest estates, crafted by expert baristas
            </p>
          </div>

          {/* Center - Cafe Ambience */}
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-xl mb-4">
              <Image
                src="/images/blu-turkey-cafe-seating-ambience.webp"
                alt="Reception and workspace at Blu Turkey Cafe Delhi"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Premium Ambience</h3>
            <p className="text-center text-foreground/70">
              Thoughtfully designed spaces perfect for dates, celebrations, and relaxation
            </p>
          </div>

          {/* Right - Reception/Welcome */}
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-square overflow-hidden rounded-xl shadow-xl mb-4">
              <Image
                src="/images/blu-turkey-cafe-reception-workspace.webp"
                alt="Specialty latte coffee at Blu Turkey Cafe Delhi"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Professional Service</h3>
            <p className="text-center text-foreground/70">
              Welcoming atmosphere and attentive service for an unforgettable experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
