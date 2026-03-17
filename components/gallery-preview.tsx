import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface GalleryPreviewImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryPreviewProps {
  images?: GalleryPreviewImage[];
  title?: string;
  subtitle?: string;
}

const defaultImages: GalleryPreviewImage[] = [
  {
    src: '/images/blu-turkey-cafe-seating-ambience.webp',
    alt: 'Window seating area at Blu Turkey Cafe in Delhi',
    category: 'Cafe Ambience',
  },
  {
    src: '/images/blu-turkey-specialty-latte-coffee.webp',
    alt: 'Coffee counter at Blu Turkey Cafe Delhi',
    category: 'Signature Coffee',
  },
  {
    src: '/images/blu-turkey-cafe-reception-workspace.webp',
    alt: 'Interior view of Blu Turkey Cafe in Delhi',
    category: 'Cafe Workspace',
  },
  {
    src: '/images/menu/blu-turkey-creamy-white-sauce-pasta-delhi.webp',
    alt: 'Creamy White Sauce Pasta at Blu Turkey Cafe Delhi',
    category: 'Creamy White Sauce Pasta',
  },
];

export default function GalleryPreview({
  images = defaultImages,
  title = 'Explore Our Cafe',
  subtitle = 'Visual moments that showcase the premium experience at Blu Turkey Cafe',
}: GalleryPreviewProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm md:text-base mb-4 uppercase tracking-wide">
            Gallery Preview
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            {title}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            {subtitle}
          </p>
        </div>

        {/* 4-Image Grid Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square bg-muted"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
                loading="lazy"
              />

              {/* Category Badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-start p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-xs md:text-sm font-semibold uppercase tracking-wide">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button & Internal Links */}
        <div className="flex flex-col items-center gap-4">
          <Link
            href="/cafe-gallery"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg min-h-[48px]"
          >
            See our cafe ambience gallery
            <ArrowRight size={18} />
          </Link>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/menu" className="text-primary font-medium hover:underline">
              Explore our full cafe menu
            </Link>
            <Link href="/contact" className="text-primary font-medium hover:underline">
              Visit Blu Turkey Cafe in GK1
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
