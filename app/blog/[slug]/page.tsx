import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import BlogArticleBody from '@/components/blog/blog-article-body';
import BlogFaqsSection from '@/components/blog/blog-faqs-section';
import { blogs, getBlogBySlug } from '@/data/blogs';
import { buildArticleJsonLd, buildFaqPageJsonLd } from '@/lib/blog-jsonld';
import { DEFAULT_OG_IMAGE_PATH, SITE_URL, serializeJsonLd } from '@/lib/site';
import { ArrowLeft, Calendar, ChevronRight, User } from 'lucide-react';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) {
    return { title: 'Not Found' };
  }

  const ogImage = post.image ?? DEFAULT_OG_IMAGE_PATH;
  const seoTitle = post.metaTitle ?? post.title;

  return {
    title: seoTitle,
    description: post.description,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: seoTitle,
      description: post.description,
      url: `${SITE_URL}/blog/${slug}`,
      siteName: 'Blu Turkey Cafe — GK1, South Delhi',
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
      authors: [post.author],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: post.description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const articleJsonLd = buildArticleJsonLd(post, slug);
  const faqs = post.faqs?.length ? post.faqs : null;
  const faqJsonLd = faqs ? buildFaqPageJsonLd(faqs) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }}
        />
      ) : null}

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
              <time dateTime={post.datePublished}>{post.date}</time>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} aria-hidden />
              {post.author}
            </div>
          </div>
        </div>

        <BlogArticleBody slug={slug} />

        {faqs ? <BlogFaqsSection faqs={faqs} /> : null}

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
