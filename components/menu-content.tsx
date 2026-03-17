'use client';

import { useState, useMemo, useCallback } from 'react';
import MenuCategory from '@/components/menu-category';
import { Search } from 'lucide-react';

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  badge?: string;
  vegan?: boolean;
  veg?: boolean;
}

export interface MenuSection {
  category: string;
  description?: string;
  items: MenuItem[];
  filterType: 'coffee' | 'food' | 'desserts' | 'drinks';
}

const CATEGORY_NAV = [
  'Coffee',
  'Pizza',
  'Pasta',
  'Burgers',
  'Wraps',
  'Sandwich',
  'Desserts',
  'Mocktails',
  'Shakes',
  'Tea',
];

const FILTER_OPTIONS = [
  { id: 'all', label: 'All' },
  { id: 'veg', label: 'Veg' },
  { id: 'nonveg', label: 'Non-Veg' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'food', label: 'Food' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Drinks' },
] as const;

type FilterId = (typeof FILTER_OPTIONS)[number]['id'];

const CATEGORY_TO_NAV: Record<string, string> = {
  'Hot Coffee (With Milk)': 'Coffee',
  'Hot Coffee (Without Milk)': 'Coffee',
  'Cold Coffee (With Milk)': 'Coffee',
  'Cold Coffee (Without Milk)': 'Coffee',
  'Coffee Add-ons': 'Coffee',
  'Pizza (Veg & Non Veg)': 'Pizza',
  Pasta: 'Pasta',
  Burgers: 'Burgers',
  Wraps: 'Wraps',
  Sandwich: 'Sandwich',
  'Waffle & Pancake': 'Desserts',
  Desserts: 'Desserts',
  Mocktails: 'Mocktails',
  Shakes: 'Shakes',
  Tea: 'Tea',
};

function getSectionId(category: string): string {
  return category.toLowerCase().replace(/\s+/g, '-').replace(/[()&]/g, '');
}

function scrollToSection(sectionId: string): void {
  const el = document.getElementById(sectionId);
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function isItemVeg(item: MenuItem): boolean {
  if (item.veg !== undefined) return item.veg;
  if (item.vegan) return true;
  const name = item.name.toLowerCase();
  return !(name.includes('chicken') || name.includes('non-veg') || name.includes('bbq'));
}

interface MenuContentProps {
  sections: MenuSection[];
}

export default function MenuContent({ sections }: MenuContentProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterId>('all');

  const filteredSections = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    const filter = activeFilter;

    return sections
      .map((section) => {
        let items = section.items;

        if (query) {
          items = items.filter(
            (item) =>
              item.name.toLowerCase().includes(query) ||
              item.description.toLowerCase().includes(query) ||
              section.category.toLowerCase().includes(query)
          );
        }

        if (filter === 'veg') {
          items = items.filter((item) => isItemVeg(item));
        } else if (filter === 'nonveg') {
          items = items.filter((item) => !isItemVeg(item));
        } else if (filter === 'coffee' && section.filterType !== 'coffee') {
          return null;
        } else if (filter === 'food' && section.filterType !== 'food') {
          return null;
        } else if (filter === 'desserts' && section.filterType !== 'desserts') {
          return null;
        } else if (filter === 'drinks' && section.filterType !== 'drinks') {
          return null;
        }

        if (items.length === 0) return null;
        return { ...section, items };
      })
      .filter((s): s is MenuSection => s !== null);
  }, [sections, searchQuery, activeFilter]);

  const navCategories = useMemo(() => {
    const cats = new Set<string>();
    filteredSections.forEach((s) => {
      const nav = CATEGORY_TO_NAV[s.category] || s.category;
      cats.add(nav);
    });
    return CATEGORY_NAV.filter((c) => cats.has(c));
  }, [filteredSections]);

  const handleNavClick = useCallback((label: string) => {
    const section = filteredSections.find((s) => {
      const nav = CATEGORY_TO_NAV[s.category] || s.category;
      return nav === label;
    });
    if (section) scrollToSection(getSectionId(section.category));
  }, [filteredSections]);

  return (
    <div className="space-y-6">
      {/* Sticky Search & Filters */}
      <div className="sticky top-0 z-20 -mx-4 px-4 py-4 bg-background/95 backdrop-blur-sm border-b border-border md:-mx-8 md:px-8">
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" aria-hidden />
          <input
            type="search"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 md:py-3.5 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary text-base"
            aria-label="Search menu items"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={`px-4 py-2.5 rounded-full font-semibold text-sm transition-colors min-h-[44px] md:min-h-0 ${
                activeFilter === opt.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Category Nav - horizontal scroll on mobile */}
        <div className="mt-4 overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-2 min-w-max md:flex-wrap md:min-w-0 pb-2">
            {navCategories.map((label) => (
              <button
                key={label}
                onClick={() => handleNavClick(label)}
                className="flex-shrink-0 px-4 py-2.5 rounded-lg font-medium text-sm bg-muted hover:bg-primary hover:text-primary-foreground transition-colors min-h-[44px] md:min-h-0"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="space-y-12">
        {filteredSections.map((section) => (
          <MenuCategory
            key={section.category}
            category={section.category}
            description={section.description}
            items={section.items}
            showVegIndicator
          />
        ))}
      </div>

      {filteredSections.length === 0 && (
        <p className="text-center text-foreground/70 py-12">No menu items match your search.</p>
      )}
    </div>
  );
}
