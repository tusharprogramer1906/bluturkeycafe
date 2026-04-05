import type { BlogPost } from '@/data/blogs';
import { absoluteUrl, DEFAULT_OG_IMAGE_PATH, LOGO_PATH, SITE_URL } from '@/lib/site';

export function buildArticleJsonLd(post: BlogPost, slug: string) {
  const pageUrl = `${SITE_URL}/blog/${slug}`;
  const imageUrl = absoluteUrl(post.image ?? DEFAULT_OG_IMAGE_PATH);

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Blu Turkey Cafe',
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(LOGO_PATH),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
  };
}

export function buildFaqPageJsonLd(faqs: NonNullable<BlogPost['faqs']>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
