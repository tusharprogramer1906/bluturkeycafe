import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
}

function FeatureCard({ icon: Icon, title, description, highlight }: FeatureCardProps) {
  return (
    <div className="p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors hover:shadow-lg">
      <Icon className="w-12 h-12 text-primary mb-4" />
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-foreground/70 text-sm leading-relaxed mb-3">{description}</p>
      {highlight && <p className="text-sm text-accent font-semibold">{highlight}</p>}
    </div>
  );
}

interface FeatureCardsGridProps {
  title?: string;
  subtitle?: string;
  features: FeatureCardProps[];
  columns?: 2 | 3 | 4;
}

export default function FeatureCardsGrid({
  title,
  subtitle,
  features,
  columns = 3,
}: FeatureCardsGridProps) {
  const columnClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
      {(title || subtitle) && (
        <div className="mb-12 text-center">
          {subtitle && (
            <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-primary text-balance">
              {title}
            </h2>
          )}
        </div>
      )}

      <div className={`grid grid-cols-1 ${columnClass} gap-6`}>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
