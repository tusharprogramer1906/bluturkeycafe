'use client';

import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Review {
  name: string;
  rating: number;
  text: string;
  category?: string;
  avatar?: string;
  timestamp?: string;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">
            What People Say
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-balance">
            Customer Reviews & Testimonials
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto text-sm md:text-base">
            Don't just take our word for it. Hear from our delighted customers who have experienced the best of Blu Turkey Cafe.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-primary transition-colors text-white"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollBehavior: 'smooth' }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-96 p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                {/* Top Section: Avatar, Name, Platform Icon */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {review.avatar ? (
                        <Image
                          src={review.avatar}
                          alt={review.name}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        getInitials(review.name)
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground text-sm">
                        {review.name}
                      </p>
                      {review.timestamp && (
                        <p className="text-xs text-foreground/60">
                          {review.timestamp}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Google Icon Placeholder */}
                  <div className="text-primary">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor">G</text>
                    </svg>
                  </div>
                </div>

                {/* Stars and Verification Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white">
                    <span className="text-xs font-bold">✓</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                  {expandedId === index ? review.text : `${review.text.substring(0, 100)}...`}
                </p>

                {/* Read More Link */}
                <button
                  onClick={() =>
                    setExpandedId(expandedId === index ? null : index)
                  }
                  className="text-foreground/60 text-sm font-medium hover:text-primary transition-colors"
                >
                  {expandedId === index ? 'Read less' : 'Read more'}
                </button>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-black hover:bg-primary transition-colors text-white"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
