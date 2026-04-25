import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import BlogCard from '@/components/blog-card';
import { blogs } from '@/data/blogs';

const baseUrl = 'https://bluturkeycafe.com';

export const metadata: Metadata = {
  title: 'Blu Turkey Cafe Blog | Coffee Tips, GK1 Cafe Stories & South Delhi Guides',
  description:
    'Read the Blu Turkey Cafe blog for specialty coffee tips, GK1 cafe recommendations, South Delhi food guides, and stories from Greater Kailash\'s favourite cafe. Updated regularly.',
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
  openGraph: {
    title: 'Blu Turkey Cafe Blog | Coffee Tips & South Delhi Cafe Guides',
    description: 'Specialty coffee tips, GK1 cafe stories, and South Delhi lifestyle articles from Blu Turkey Cafe.',
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
        {/* SEO Intro */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Coffee Stories from Greater Kailash (GK1), South Delhi
          </h1>
          <p className="text-foreground/70 leading-relaxed">
            Welcome to the Blu Turkey Cafe blog — your source for specialty coffee guides, work-from-cafe tips, GK1
            neighbourhood guides, and lifestyle stories from one of South Delhi’s most loved cafes. Whether you’re
            a first-time visitor or a regular, we write for coffee lovers and cafe culture enthusiasts across Delhi.
          </p>
        </div>
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
