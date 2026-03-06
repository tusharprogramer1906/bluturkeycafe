import Link from 'next/link';
import { MapPin, Menu, Calendar } from 'lucide-react';

export default function GalleryConversionCTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
          Experience Blu Turkey Cafe Today
        </h2>
        <p className="text-lg text-foreground/75 mb-12 text-balance">
          Ready to discover the premium ambiance, signature coffee, and unforgettable moments that make Blu Turkey Cafe one of Delhi's best cafes?
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            <MapPin size={20} />
            Get Directions
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl"
          >
            <Menu size={20} />
            View Menu
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
          >
            <Calendar size={20} />
            Book a Table
          </Link>
        </div>
      </div>
    </section>
  );
}
