export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  /** ISO 8601 — Article schema datePublished / Open Graph */
  datePublished: string;
  /** ISO 8601 — omit if unchanged since publish */
  dateModified?: string;
  category: string;
  readTime: string;
  /** Path under site root for Article/OG image */
  image?: string;
  /** When set, rendered on the post + outputs FAQPage JSON-LD */
  faqs?: BlogFaq[];
};

/** Single source of truth — slug MUST match dynamic route */
export const blogs: BlogPost[] = [
  {
    slug: 'best-cafes-friends-hangout-gk1',
    title: 'Best Cafes for Friends Hangout in GK1',
    description:
      'Planning a GK1 group meet? Choose social cafes in South Delhi—coffee, food, vibe—plus why Blu Turkey (M Block) works for friends.',
    author: 'Blu Turkey Coffee Team',
    date: 'Apr 6, 2026',
    datePublished: '2026-04-06',
    category: 'Social Cafe',
    readTime: '7 min read',
    faqs: [
      {
        question: 'What should I search if I want group seating in GK1?',
        answer:
          'Try “hangout cafes GK1,” “group cafes South Delhi,” and “cafes with sofa seating GK1.” Then confirm on recent photos or a quick call for larger groups.',
      },
      {
        question: 'Is GK1 better than other South Delhi areas for cafe hopping?',
        answer:
          'GK1 is especially strong for walkable cafe density and a more relaxed pace than some central hubs—great for friends who want quality without a “scene” every single time.',
      },
      {
        question: 'Do good hangout cafes need a big dessert menu?',
        answer:
          'Not necessarily—but groups move from coffee to sugar fast. A dessert lineup helps you extend the hangout without changing locations.',
      },
      {
        question: 'What makes Blu Turkey a strong pick for friends specifically?',
        answer:
          'It combines specialty coffee credibility with a menu wide enough for different cravings, plus a cozy ambience that still feels social—ideal when your group wants flavor, comfort, and a place you’ll actually remember.',
      },
    ],
  },
  {
    slug: 'specialty-coffee-guide',
    title: 'The Ultimate Guide to Specialty Coffee: Understanding Quality & Flavor',
    description:
      'Learn what makes specialty coffee different from regular coffee. Discover how bean origin, roasting, and brewing methods create unique flavor profiles.',
    author: 'Blu Turkey Coffee Team',
    date: 'Mar 1, 2024',
    datePublished: '2024-03-01',
    category: 'Coffee Guide',
    readTime: '5 min read',
  },
  {
    slug: 'perfect-date-cafe',
    title: 'Creating the Perfect Date Night: Why Ambiance Matters',
    description:
      'Discover how the right cafe ambiance can transform a simple coffee date into an unforgettable romantic experience.',
    author: 'Lifestyle Team',
    date: 'Feb 28, 2024',
    datePublished: '2024-02-28',
    category: 'Lifestyle',
    readTime: '4 min read',
  },
  {
    slug: 'coffee-brewing-methods',
    title: 'Brewing Methods Explained: Espresso vs Pour Over vs French Press',
    description:
      'Explore different coffee brewing methods and how each one brings out unique characteristics in specialty coffee beans.',
    author: 'Coffee Experts',
    date: 'Feb 25, 2024',
    datePublished: '2024-02-25',
    category: 'Coffee Guide',
    readTime: '6 min read',
  },
  {
    slug: 'birthday-party-ideas',
    title: 'Hosting the Perfect Birthday Celebration: Cafe Venue Ideas',
    description:
      'Making your birthday memorable goes beyond cake. Learn how to choose the perfect cafe venue and create lasting memories.',
    author: 'Event Planning',
    date: 'Feb 22, 2024',
    datePublished: '2024-02-22',
    category: 'Events',
    readTime: '5 min read',
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogs.map((b) => b.slug);
}
