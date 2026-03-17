'use client';

import Image from 'next/image';
import Link from 'next/link';

const INSTAGRAM_URL = 'https://www.instagram.com/blu_turkey_cafe';

const instagramPosts = [
  {
    src: '/images/blu-turkey-cafe-seating-ambience.webp',
    alt: 'Cafe ambience at Blu Turkey Cafe Delhi',
  },
  {
    src: '/images/blu-turkey-specialty-latte-coffee.webp',
    alt: 'Coffee served at Blu Turkey Cafe Delhi',
  },
  {
    src: '/images/blu-turkey-cafe-desserts.jpg',
    alt: 'Desserts at Blu Turkey Cafe Delhi',
  },
  {
    src: '/images/blu-turkey-cafe-birthday-celebration.jpg',
    alt: 'Customer celebration moment at Blu Turkey Cafe',
  },
  {
    src: '/images/blu-turkey-cafe-reception-workspace.webp',
    alt: 'Reception area at Blu Turkey Cafe Delhi',
  },
  {
    src: '/images/blu-turkey-cappuccino-coffee.jpg',
    alt: 'Cappuccino coffee at Blu Turkey Cafe Delhi',
  },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function InstagramFollowSection() {
  return (
    <section className="relative py-16 md:py-24 mt-20 overflow-hidden bg-gradient-to-b from-[#f5f0e8] to-[#ebe5dc]">
      {/* Floating Instagram watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <InstagramIcon className="w-96 h-96 text-[#3d2820] opacity-[0.05]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Left: Text content */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-5">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d1810]">
              Follow Blu Turkey Cafe on Instagram
            </h2>
            <p className="text-base md:text-lg text-[#5a4034] max-w-md">
              Discover our latest coffee creations, cafe moments, and behind-the-scenes vibes.
            </p>
            <div className="flex items-center gap-3">
              <InstagramIcon className="w-8 h-8 text-[#3d2820]" />
              <Link
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-amber-50 bg-gradient-to-r from-[#3d2820] to-[#5a4034] hover:from-[#4a3328] hover:to-[#6a5044] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <InstagramIcon className="w-5 h-5 shrink-0" />
                Follow on Instagram
              </Link>
            </div>
          </div>

          {/* Right: Instagram grid */}
          <div className="flex-1 w-full max-w-lg">
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {instagramPosts.map((post, index) => (
                <Link
                  key={index}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-xl bg-[#e8e0d5] shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <Image
                    src={post.src}
                    alt={post.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 33vw, 180px"
                    loading="lazy"
                  />
                  {/* Overlay with Instagram icon on hover */}
                  <div className="absolute inset-0 bg-[#2d1810]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <InstagramIcon className="w-10 h-10 text-white" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
