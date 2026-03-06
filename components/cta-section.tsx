import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  variant?: 'primary' | 'secondary';
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = 'primary',
}: CTASectionProps) {
  const bgClass = variant === 'primary'
    ? 'bg-gradient-to-r from-primary to-accent'
    : 'bg-gradient-to-r from-accent to-primary/80';

  return (
    <section className={`py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto ${bgClass} rounded-xl`}>
      <div className="text-center text-primary-foreground">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
          {title}
        </h2>

        {description && (
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>
        )}

        {(primaryButton || secondaryButton) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryButton && (
              <Link
                href={primaryButton.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                {primaryButton.text}
                <ArrowRight size={18} />
              </Link>
            )}
            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                {secondaryButton.text}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
