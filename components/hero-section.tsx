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
      className="relative min-h-[100vh] w-full overflow-hidden"
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

      {/* Hero container: full height, flex, centered */}
      <div className="relative z-10 w-full min-h-[100vh] flex flex-col md:flex-row items-center justify-between px-4 md:px-8 lg:px-12 max-w-7xl mx-auto gap-[1.2rem] md:gap-12 py-8 md:py-0">
        {/* Mobile: Cup first, then text. Desktop: Text left, Cup right */}
        {/* Cup - order 1 on mobile (top), order 2 on desktop (right) */}
        {showCoffeeCup && (
          <div
            className={`flex flex-1 items-center justify-center md:justify-end order-1 md:order-2 w-full md:w-auto transition-all duration-1000 delay-300 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative w-[min(560px,100%)] max-w-full mx-auto md:mx-0">
              <div
                className="absolute inset-0 -m-16 bg-amber-500/10 rounded-full blur-3xl"
                aria-hidden
              />
              <div className="relative animate-float block">
                <Image
                  src="/blu_turkey.png"
                  alt="Blu Turkey Coffee Cup"
                  width={560}
                  height={616}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
            </div>
          </div>
        )}

        {/* Text content - order 2 on mobile (below cup), order 1 on desktop (left) */}
        <div className="flex-1 flex flex-col justify-center px-0 md:pr-8 order-2 md:order-1 text-center md:text-left gap-[1.2rem]">
          <h1
            className={`font-bold text-amber-50/95 leading-tight tracking-tight transition-all duration-700 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(2rem, 4vw, 3.8rem)',
            }}
          >
            {title}
          </h1>

          <p
            className={`text-lg md:text-xl text-amber-100/70 max-w-xl mx-auto md:mx-0 transition-all duration-700 delay-100 ${
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
      </div>
    </section>
  );
}
