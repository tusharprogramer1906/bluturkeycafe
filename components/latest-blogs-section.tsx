import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { blogs } from '@/data/blogs';
import BlogCard from '@/components/blog-card';

const latest = blogs.slice(0, 3);

export default function LatestBlogsSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide mb-2">Stories & Insights</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Latest Blogs</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Tips on specialty coffee, cafe culture, and memorable moments at Blu Turkey Cafe in Greater Kailash.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {latest.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.description}
              author={post.author}
              date={post.date}
              category={post.category}
              readTime={post.readTime}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View all posts
            <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
