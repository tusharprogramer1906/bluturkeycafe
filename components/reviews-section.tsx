import { Star } from 'lucide-react';

interface Review {
  name: string;
  rating: number;
  text: string;
  category?: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl">
      <div className="text-center mb-12">
        <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">
          What People Say
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
          Customer Reviews & Testimonials
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Don't just take our word for it. Hear from our delighted customers who have experienced the best of Blu Turkey Cafe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors">
            {/* Stars */}
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < review.rating ? 'fill-accent text-accent' : 'text-border'}
                />
              ))}
            </div>

            {/* Category Badge */}
            {review.category && (
              <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                {review.category}
              </p>
            )}

            {/* Review Text */}
            <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">
              "{review.text}"
            </p>

            {/* Author */}
            <p className="text-sm font-semibold text-foreground">
              — {review.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
