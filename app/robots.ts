import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block internal Next.js API routes and any beta/staging paths
        disallow: ['/api/', '/_next/'],
      },
    ],
    // NOTE: If beta.bluturkeycafe.com exists as a separate Vercel deployment,
    // add X-Robots-Tag: noindex to that deployment's vercel.json headers.
    // This robots.txt only applies to bluturkeycafe.com
    sitemap: 'https://bluturkeycafe.com/sitemap.xml',
  }
}

