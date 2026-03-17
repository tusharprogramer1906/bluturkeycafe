'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  showCoffeeCup?: boolean;
}

export default function HeroSection({
  title = "Where Every Sip Defies Gravity",
  subtitle,
  description = "Discover Delhi's premier specialty coffee destination.",
  primaryCta = { text: 'View Menu', href: '/menu' },
  secondaryCta = { text: 'Visit Cafe', href: '/contact' },
  backgroundImage,
  showCoffeeCup = true,
}: HeroSectionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[80vh] overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d0f18 0%, #1a1512 40%, #2d1810 100%)',
      }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-amber-500/30 animate-particle"
            style={{
              left: `${10 + (i * 7) % 80}%`,
              top: `${15 + (i * 11) % 70}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Two-column layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-12 h-full min-h-[600px] md:min-h-[700px] lg:min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left: Text content */}
        <div className="flex-1 flex flex-col justify-center px-0 md:pr-8 order-2 md:order-1 text-center md:text-left">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-amber-50/95 mb-4 md:mb-6 leading-tight tracking-tight transition-all duration-700 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            {title}
          </h1>

          <p
            className={`text-lg md:text-xl text-amber-100/70 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0 transition-all duration-700 delay-100 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            {description}
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-all duration-700 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl font-semibold text-amber-50 bg-[#3d2820] border border-amber-700/40 hover:bg-[#4a3328] hover:border-amber-600/50 transition-all duration-300"
            >
              {primaryCta.text}
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl font-semibold text-amber-50 bg-[#3d2820] border border-amber-700/40 hover:bg-[#4a3328] hover:border-amber-600/50 transition-all duration-300"
            >
              {secondaryCta.text}
            </Link>
          </div>
        </div>

        {/* Right: Coffee cup with splash */}
        {showCoffeeCup && (
          <div
            className={`flex-1 flex items-center justify-center md:justify-end order-1 md:order-2 transition-all duration-1000 delay-300 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
              {/* Glow behind cup */}
              <div
                className="absolute inset-0 -m-16 bg-amber-500/10 rounded-full blur-3xl"
                aria-hidden
              />
              <div className="relative animate-float">
                <Image
                  src="/blu_turkey.png"
                  alt="Blu Turkey Coffee Cup - Premium coffee with signature splash"
                  width={500}
                  height={550}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
