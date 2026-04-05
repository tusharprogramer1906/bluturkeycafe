import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import BlogCard from '@/components/blog-card';
import { blogs } from '@/data/blogs';

const baseUrl = 'https://bluturkeycafe.com';

export const metadata: Metadata = {
  title: 'Blog - Blu Turkey Cafe | Coffee Tips & Stories',
  description:
    'Read our blog for specialty coffee tips, cafe stories, and lifestyle articles about the best cafe in Greater Kailash Delhi.',
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
  openGraph: {
    title: 'Blog - Blu Turkey Cafe',
    description: 'Coffee tips, cafe stories, and lifestyle articles',
    url: `${baseUrl}/blog`,
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />

      <HeroSection
        subtitle="Stories & Insights"
        title="Blu Turkey Cafe Blog"
        description="Coffee tips, cafe culture, lifestyle stories, and everything you need to know about specialty coffee and creating memorable moments."
      />

      <main className="py-12 md:py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {blogs.map((post) => (
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

        <div className="text-center p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-border">
          <p className="text-foreground/70 mb-4">
            More articles coming soon! Check back regularly for new stories about specialty coffee, cafe culture, and lifestyle.
          </p>
          <p className="text-sm text-foreground/60">
            Visit us in Greater Kailash for the full Blu Turkey Cafe experience.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
