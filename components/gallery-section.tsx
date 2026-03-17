'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
}

interface GallerySectionProps {
  images?: GalleryImage[];
  title?: string;
  subtitle?: string;
  showCategories?: boolean;
  columns?: number;
}

const defaultImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/blu-turkey-cafe-window-seating-delhi.webp',
    alt: 'Window seating area at Blu Turkey Cafe in Delhi',
    category: 'Cafe Ambience',
    title: 'Window Seating',
  },
  {
    id: '2',
    src: '/images/blu-turkey-cafe-coffee-counter-delhi.webp',
    alt: 'Coffee counter at Blu Turkey Cafe Delhi',
    category: 'Signature Coffee',
    title: 'Coffee Counter',
  },
  {
    id: '3',
    src: '/images/blu-turkey-cafe-interior-view-delhi.webp',
    alt: 'Interior view of Blu Turkey Cafe in Delhi',
    category: 'Cafe Ambience',
    title: 'Interior View',
  },
  {
    id: '4',
    src: '/images/blu-turkey-cafe-barista-counter-delhi.webp',
    alt: 'Barista counter at Blu Turkey Cafe Delhi',
    category: 'Signature Coffee',
    title: 'Barista Counter',
  },
  {
    id: '5',
    src: '/images/blu-turkey-cafe-modern-interior-delhi.webp',
    alt: 'Modern interior at Blu Turkey Cafe Delhi',
    category: 'Cafe Ambience',
    title: 'Modern Interior',
  },
  {
    id: '6',
    src: '/images/blu-turkey-cafe-dessert-display-delhi.webp',
    alt: 'Dessert display at Blu Turkey Cafe Delhi',
    category: 'Coffee & Desserts',
    title: 'Dessert Display',
  },
  {
    id: '7',
    src: '/images/blu-turkey-cafe-croissant-display-delhi.webp',
    alt: 'Croissant display at Blu Turkey Cafe Delhi',
    category: 'Coffee & Desserts',
    title: 'Croissant Display',
  },
  {
    id: '8',
    src: '/images/blu-turkey-cafe-bakery-counter-delhi.webp',
    alt: 'Bakery counter at Blu Turkey Cafe Delhi',
    category: 'Coffee & Desserts',
    title: 'Bakery Counter',
  },
  {
    id: '9',
    src: '/images/blu-turkey-cafe-window-table-delhi.webp',
    alt: 'Window table at Blu Turkey Cafe Delhi',
    category: 'Cafe Ambience',
    title: 'Window Table',
  },
  {
    id: '10',
    src: '/images/blu-turkey-cafe-seating-area-delhi.webp',
    alt: 'Seating area at Blu Turkey Cafe Delhi',
    category: 'Cafe Ambience',
    title: 'Seating Area',
  },
  {
    id: '11',
    src: '/images/blu-turkey-cafe-cozy-seating-delhi.webp',
    alt: 'Cozy seating at Blu Turkey Cafe Delhi',
    category: 'Cafe Ambience',
    title: 'Cozy Seating',
  },
  {
    id: '12',
    src: '/images/blu-turkey-cafe-dining-space-delhi.webp',
    alt: 'Dining space at Blu Turkey Cafe Delhi',
    category: 'Cafe Ambience',
    title: 'Dining Space',
  },
  {
    id: '13',
    src: '/images/blu-turkey-cafe-dessert-showcase-delhi.webp',
    alt: 'Dessert showcase at Blu Turkey Cafe Delhi',
    category: 'Coffee & Desserts',
    title: 'Dessert Showcase',
  },
  {
    id: '14',
    src: '/images/blu-turkey-cafe-cake-display-delhi.webp',
    alt: 'Cake display at Blu Turkey Cafe Delhi',
    category: 'Coffee & Desserts',
    title: 'Cake Display',
  },
];

export default function GallerySection({
  images = defaultImages,
  title = 'Experience Blu Turkey Cafe',
  subtitle = 'A glimpse into the coffee, ambience and moments that make Blu Turkey Cafe one of the best cafes in Delhi.',
  showCategories = true,
  columns = 3,
}: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(images.map((img) => img.category))];
  const filteredImages = selectedCategory === 'All' ? images : images.filter((img) => img.category === selectedCategory);

  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  }[columns as keyof typeof gridColsClass] || 'md:grid-cols-3';

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm md:text-base mb-4 uppercase tracking-wide">
            Photo Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            {title}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto text-balance">
            {subtitle}
          </p>
        </div>

        {/* Category Filter */}
        {showCategories && (
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid - Masonry Style */}
        <div className={`grid grid-cols-1 ${gridColsClass} gap-4 md:gap-6`}>
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-lg cursor-pointer bg-muted ${
                index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              style={{
                aspectRatio: index % 5 === 0 ? '1' : '1',
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                <div>
                  <p className="text-primary-foreground text-sm font-semibold uppercase tracking-wide">
                    {image.category}
                  </p>
                  <h3 className="text-primary-foreground text-lg font-bold mt-2">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <div
            className="relative w-full max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
              priority
            />

            {/* Image Info */}
            <div className="text-white text-center mt-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                {selectedImage.category}
              </p>
              <h3 className="text-2xl font-bold mt-2">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
