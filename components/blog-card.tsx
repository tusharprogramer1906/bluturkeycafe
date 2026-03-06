import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  author,
  date,
  category,
  readTime,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <article className="h-full p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg group">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-accent uppercase tracking-wide bg-accent/10 px-3 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs text-foreground/60">{readTime}</span>
        </div>

        <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors mb-3 line-clamp-2">
          {title}
        </h3>

        <p className="text-foreground/70 text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center gap-4 text-xs text-foreground/60">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              {date}
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              {author}
            </div>
          </div>
          <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
        </div>
      </article>
    </Link>
  );
}
