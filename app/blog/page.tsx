import type { Metadata } from 'next';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
import BlogCard from '@/components/blog-card';

export const metadata: Metadata = {
  title: 'Blog - Blu Turkey Cafe | Coffee Tips & Stories',
  description: 'Read our blog for specialty coffee tips, cafe stories, and lifestyle articles about the best cafe in Delhi.',
  openGraph: {
    title: 'Blog - Blu Turkey Cafe',
    description: 'Coffee tips, cafe stories, and lifestyle articles',
    url: 'https://bluturkey.com/blog',
  },
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'specialty-coffee-guide',
    title: 'The Ultimate Guide to Specialty Coffee: Understanding Quality & Flavor',
    excerpt:
      'Learn what makes specialty coffee different from regular coffee. Discover how bean origin, roasting, and brewing methods create unique flavor profiles.',
    author: 'Coffee Team',
    date: 'Mar 1, 2024',
    category: 'Coffee Guide',
    readTime: '5 min read',
  },
  {
    slug: 'perfect-date-cafe',
    title: 'Creating the Perfect Date Night: Why Ambiance Matters',
    excerpt:
      'Discover how the right cafe ambiance can transform a simple coffee date into an unforgettable romantic experience.',
    author: 'Lifestyle',
    date: 'Feb 28, 2024',
    category: 'Lifestyle',
    readTime: '4 min read',
  },
  {
    slug: 'coffee-brewing-methods',
    title: 'Brewing Methods Explained: Espresso vs Pour Over vs French Press',
    excerpt:
      'Explore different coffee brewing methods and how each one brings out unique characteristics in specialty coffee beans.',
    author: 'Coffee Experts',
    date: 'Feb 25, 2024',
    category: 'Coffee Guide',
    readTime: '6 min read',
  },
  {
    slug: 'birthday-party-ideas',
    title: 'Hosting the Perfect Birthday Celebration: Cafe Venue Ideas',
    excerpt:
      'Making your birthday memorable goes beyond cake. Learn how to choose the perfect cafe venue and create lasting memories.',
    author: 'Event Planning',
    date: 'Feb 22, 2024',
    category: 'Events',
    readTime: '5 min read',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <HeroSection
        subtitle="Stories & Insights"
        title="Blu Turkey Cafe Blog"
        description="Coffee tips, cafe culture, lifestyle stories, and everything you need to know about specialty coffee and creating memorable moments."
      />

      {/* Blog Posts Grid */}
      <main className="py-12 md:py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-border">
          <p className="text-foreground/70 mb-4">
            More articles coming soon! Check back regularly for new stories about specialty coffee, cafe culture, and lifestyle.
          </p>
          <p className="text-sm text-foreground/60">
            Subscribe to our updates to get new posts delivered to you.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
