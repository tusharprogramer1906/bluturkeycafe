import { Star, IndianRupee } from 'lucide-react';

export function GoogleRatingBadge({ className = '' }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 dark:text-amber-400 ${className}`}
      aria-label="4.9 rating on Google"
    >
      <Star size={18} className="fill-amber-500 text-amber-500" aria-hidden />
      <span className="font-semibold text-sm">4.9 Rating on Google</span>
    </div>
  );
}

export function PriceRangeBadge({ className = '' }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-foreground ${className}`}
    >
      <IndianRupee size={18} className="text-primary" aria-hidden />
      <span className="font-semibold text-sm">₹400–₹600 • Cafe</span>
    </div>
  );
}
