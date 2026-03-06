import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
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
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundImage,
  showCoffeeCup = true,
}: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />

      {/* Floating Coffee Cup - Right Side */}
      {showCoffeeCup && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block opacity-60 pointer-events-none">
          <div className="animate-float">
            <Image
              src="/images/coffee-cup.png"
              alt="Blu Turkey Cafe Coffee Cup"
              width={280}
              height={350}
              className="drop-shadow-xl"
              priority
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 md:px-8 text-center">
        <p className="text-accent font-semibold text-sm md:text-base mb-4 uppercase tracking-wide">
          {subtitle}
        </p>
        
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight text-balance">
          {title}
        </h1>

        {description && (
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                {primaryCta.text}
                <ArrowRight size={18} />
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
              >
                {secondaryCta.text}
                <ArrowRight size={18} />
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
