import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import BlogArticleBody from '@/components/blog/blog-article-body';
import { blogs, getBlogBySlug } from '@/data/blogs';
import { ArrowLeft, Calendar, ChevronRight, User } from 'lucide-react';

const baseUrl = 'https://bluturkeycafe.com';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) {
    return { title: 'Not Found | Blu Turkey Cafe' };
  }
  return {
    title: `${post.title} | Blu Turkey Cafe`,
    description: post.description,
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${baseUrl}/blog/${slug}`,
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Header />

      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <nav
          aria-label="Breadcrumb"
          className="text-sm text-foreground/60 mb-6 flex flex-wrap items-center gap-2"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="flex-shrink-0 opacity-60" aria-hidden />
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <ChevronRight size={14} className="flex-shrink-0 opacity-60" aria-hidden />
          <span className="text-foreground line-clamp-2">{post.title}</span>
        </nav>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={18} aria-hidden />
          Back to Blog
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-accent uppercase tracking-wide bg-accent/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-foreground/60">{post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-foreground/60 border-b border-border pb-6">
            <div className="flex items-center gap-2">
              <Calendar size={18} aria-hidden />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <User size={18} aria-hidden />
              {post.author}
            </div>
          </div>
        </div>

        <BlogArticleBody slug={slug} />

        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft size={18} aria-hidden />
            Back to Blog
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
