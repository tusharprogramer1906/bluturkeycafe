export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  /** Override the <title> / OG title with a custom SEO-optimised string */
  metaTitle?: string;
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
    slug: 'best-cafe-greater-kailash-1-coffee-food-vibes-2026',
    title: 'Best Cafe in Greater Kailash 1 for Coffee Food Vibes 2026',
    metaTitle: 'Best Cafe in Greater Kailash 1 | Coffee Food Vibes 2026',
    description:
      'Looking for the best cafe in Greater Kailash 1? Blu Turkey Cafe in GK1 M Block offers great coffee, food, ambience and vibes in South Delhi.',
    author: 'Blu Turkey Coffee Team',
    date: 'Aug 18, 2026',
    datePublished: '2026-08-18',
    category: 'Local Discovery',
    readTime: '8 min read',
    image: '/images/blu-turkey-cafe-interior-view-delhi.webp',
    faqs: [
      {
        question: 'What is the best cafe in Greater Kailash 1?',
        answer:
          'Blu Turkey Cafe in GK1 M Block is consistently regarded as one of the best cafes in Greater Kailash 1 — combining specialty coffee, a full food menu (pasta, sandwiches, desserts), premium interiors, and a relaxed social atmosphere that works for dates, friends, remote work, and casual visits.',
      },
      {
        question: 'Which are the best cafes in South Delhi for coffee and food?',
        answer:
          'Greater Kailash 1 (GK1) is one of the strongest areas in South Delhi for both coffee quality and food variety. Blu Turkey Cafe in GK1 M Block stands out for its specialty coffee, freshly prepared food, and thoughtfully designed interiors — making it a top pick for anyone exploring cafes in South Delhi.',
      },
      {
        question: 'Is GK1 a good area for cafe hopping?',
        answer:
          'Yes — GK1, particularly M Block Market, is one of the best areas in South Delhi for cafe hopping. The neighbourhood is walkable, has a good density of independent cafes, and a calm residential pace that makes spending an afternoon or evening cafe-hopping genuinely enjoyable.',
      },
      {
        question: 'Which cafe in Greater Kailash is good for coffee and ambience?',
        answer:
          'Blu Turkey Cafe in GK1 M Block is a strong choice for both coffee and ambience. The interiors are warm and carefully designed, the specialty coffee is made with care, and the overall atmosphere is relaxed enough to linger in — without being too quiet or too noisy.',
      },
      {
        question: 'What can you eat at Blu Turkey Cafe?',
        answer:
          'Blu Turkey Cafe serves a full cafe menu including pasta, sandwiches, snacks, and desserts — alongside specialty coffee, cold coffee, cappuccino, latte, and espresso. The menu is designed to support everything from a quick coffee break to a full evening of food and drinks.',
      },
      {
        question: 'Is Blu Turkey Cafe suitable for friends and couples?',
        answer:
          'Yes — Blu Turkey Cafe in GK1 works well for both. The seating is comfortable enough for long group sessions, the menu has enough variety for different preferences, and the warm, premium interiors create the kind of atmosphere that suits a relaxed date as much as a friends catch-up.',
      },
    ],
  },
  {
    slug: 'hidden-cafes-gk1-you-shouldnt-miss',
    title: "Hidden Cafes in GK1 You Shouldn't Miss",
    metaTitle: "Hidden Cafes in GK1 You Shouldn't Miss | Blu Turkey Cafe",
    description:
      'Discover the best hidden cafes in GK1, South Delhi. Blu Turkey Cafe in Greater Kailash 1 M Block is one of the most underrated gems near Nehru Place — cozy, premium, and worth the visit.',
    author: 'Blu Turkey Coffee Team',
    date: 'Apr 15, 2026',
    datePublished: '2026-04-15',
    category: 'Local Discovery',
    readTime: '8 min read',
    image: '/images/blu-turkey-cafe-cozy-seating-delhi.webp',
    faqs: [
      {
        question: 'Which are the best hidden cafes in GK1?',
        answer:
          'Greater Kailash 1 has several hidden cafe gems, but Blu Turkey Cafe in GK1 M Block stands out as one of the most beloved hidden cafes in the area. It offers cozy interiors, specialty coffee, a full food menu, and a relaxed ambience that feels genuinely private — perfect for anyone looking for a café away from the crowds.',
      },
      {
        question: 'Are there underrated cafes in South Delhi?',
        answer:
          'Yes — South Delhi, particularly GK1 and Kailash Colony, is home to several underrated and independent cafes that most visitors miss. Blu Turkey Cafe in GK1 M Block is consistently mentioned as one of the best-kept secrets in South Delhi: premium interiors, specialty coffee, freshly prepared food, and warm service without the brand noise of chain cafes.',
      },
      {
        question: 'Which hidden cafe in GK1 serves good coffee?',
        answer:
          'Blu Turkey Cafe in GK1 M Block is widely regarded as one of the best specialty coffee destinations in Greater Kailash 1. The cappuccino, cold coffee, latte, and espresso are all made with care and consistency — making it the go-to hidden coffee shop in GK1 for coffee enthusiasts who know where to look.',
      },
      {
        question: 'Is Blu Turkey Cafe good for working from a cafe in GK1?',
        answer:
          'Absolutely. Blu Turkey Cafe in GK1 M Block is one of the best work-friendly hidden cafes in South Delhi. Comfortable seating, a calm ambience, great coffee, and fresh food make it a favourite for remote workers, freelancers, and students looking for a productive and pleasant environment in GK1.',
      },
      {
        question: 'Which hidden cafes in South Delhi are near Nehru Place?',
        answer:
          'Blu Turkey Cafe in GK1 M Block is a short distance from Nehru Place and is considered one of the top hidden cafes near Nehru Place in South Delhi. It is a popular choice for professionals, remote workers, and cafe-hoppers who want a premium experience without heading into a busy commercial zone.',
      },
      {
        question: 'Does Blu Turkey Cafe serve desserts?',
        answer:
          'Yes — Blu Turkey Cafe serves a selection of freshly prepared desserts including brownies, cheesecake, and seasonal sweet specials. Desserts are among the most ordered items at the cafe, making it a great hidden gem in GK1 for those who like to end their visit on a sweet note.',
      },
      {
        question: 'Is Blu Turkey Cafe good for a date in GK1?',
        answer:
          'Yes — Blu Turkey Cafe in GK1 is one of the most popular hidden cafes for dates in South Delhi. The warm lighting, cozy seating, premium interiors, and intimate ambience make it ideal for couples looking for a relaxed and special cafe experience without the noise of busier venues.',
      },
      {
        question: 'What makes Blu Turkey Cafe a hidden gem in GK1?',
        answer:
          'Blu Turkey Cafe earns its hidden gem status because it combines everything a great cafe should have — specialty coffee, freshly prepared food, premium interiors, comfortable seating, and genuinely friendly service — without the branding loudness of chains. It is the kind of place you discover once and keep returning to, making it one of the true hidden cafes in Greater Kailash 1.',
      },
    ],
  },
  {
    slug: 'best-work-friendly-cafe-gk1-wifi-great-coffee',
    title: 'Best Work Friendly Cafe in GK1 with WiFi and Great Coffee',
    metaTitle: 'Best Work Friendly Cafe in GK1 | WiFi & Coffee | Blu Turkey',
    description:
      'Looking for a work cafe in GK1? Blu Turkey Cafe offers fast WiFi, comfortable seating, great coffee, and a productive ambience for remote workers in South Delhi.',
    author: 'Blu Turkey Coffee Team',
    date: 'Apr 12, 2026',
    datePublished: '2026-04-12',
    category: 'Work Cafe',
    readTime: '7 min read',
    faqs: [
      {
        question: 'Which is the best work cafe in GK1?',
        answer:
          'Blu Turkey Cafe in GK1 M Block is widely regarded as one of the best work cafes in Greater Kailash 1. It offers comfortable seating, fast WiFi, charging points, a calm ambience, and premium coffee — everything a remote worker, freelancer, or student needs for a productive session.',
      },
      {
        question: 'Which cafe has WiFi in South Delhi?',
        answer:
          'Blu Turkey Cafe in GK1 offers reliable high-speed WiFi for guests. It is one of the most popular WiFi cafes in South Delhi, especially among remote workers, students, and digital nomads looking for a productive space with great coffee.',
      },
      {
        question: 'Is Blu Turkey Cafe laptop friendly?',
        answer:
          'Yes — Blu Turkey Cafe is fully laptop friendly. The cafe has spacious tables, comfortable seating, charging points, and a relaxed atmosphere that encourages focused work sessions. Many regulars use it as their go-to work cafe in GK1.',
      },
      {
        question: 'Can I work from Blu Turkey Cafe?',
        answer:
          'Absolutely. Blu Turkey Cafe in GK1 M Block welcomes remote workers, freelancers, and students. The combination of fast WiFi, comfortable seating, great coffee, and fresh food makes it an ideal work cafe in South Delhi.',
      },
      {
        question: 'Which cafe near Nehru Place has good coffee and WiFi?',
        answer:
          'Blu Turkey Cafe in GK1 M Block is a short hop from Nehru Place and offers some of the best specialty coffee in the area along with reliable WiFi. It is a popular choice for professionals and remote workers coming from the Nehru Place direction.',
      },
      {
        question: 'Are there charging points available at Blu Turkey Cafe?',
        answer:
          'Yes, Blu Turkey Cafe has charging points available at select seating areas, making it convenient for remote workers and students who need to keep their devices powered during long work sessions.',
      },
      {
        question: 'Is Blu Turkey Cafe good for meetings in GK1?',
        answer:
          'Yes — the relaxed, premium ambience and spacious layout of Blu Turkey Cafe make it a great venue for client meetings, team catch-ups, startup discussions, and one-on-one sessions in GK1.',
      },
      {
        question: 'What is the best laptop cafe in Delhi for remote work?',
        answer:
          'Blu Turkey Cafe in Greater Kailash 1 (GK1), South Delhi, consistently ranks among the top laptop cafes in Delhi for remote work. It combines high-speed WiFi, comfortable seating, specialty coffee, fresh food, and a productive ambience — making it a favourite for freelancers, digital nomads, and professionals.',
      },
    ],
  },
  {
    slug: 'top-cafes-south-delhi-2026',
    title: 'Top Cafes in South Delhi You Must Visit in 2026',
    metaTitle: 'Top Cafes in South Delhi You Must Visit in 2026 | Blu Turkey',
    description:
      'Discover the top cafes in South Delhi for 2026 — best coffee, ambience & food in GK1, Kailash Colony & near Nehru Place. Visit Blu Turkey Cafe today.',
    author: 'Blu Turkey Coffee Team',
    date: 'Apr 10, 2026',
    datePublished: '2026-04-10',
    category: 'Local Discovery',
    readTime: '8 min read',
    faqs: [
      {
        question: 'Which area in South Delhi has the most cafes?',
        answer:
          'Greater Kailash 1 (GK1) is widely considered the most cafe-dense area in South Delhi — walkable, independent, and with a strong mix of specialty coffee, food, and ambience options. Kailash Colony and areas near Nehru Place also have solid options.',
      },
      {
        question: 'What is the best cafe in South Delhi in 2026?',
        answer:
          'Blu Turkey Cafe in GK1 M Block consistently ranks among the best cafes in South Delhi for its combination of specialty coffee, premium ambience, a full food menu (pasta, sandwiches, desserts), and friendly service. It works for dates, friends hangouts, remote work, and casual visits.',
      },
      {
        question: 'Are there good cafes near Nehru Place?',
        answer:
          'Yes — Greater Kailash 1 is a short distance from Nehru Place and is one of the best options for a cafe visit after work or between errands. Blu Turkey Cafe in GK1 M Block is a popular choice for people coming from the Nehru Place direction.',
      },
      {
        question: 'What should I order at a South Delhi cafe?',
        answer:
          'A cappuccino or cold coffee is always a safe start at a good South Delhi cafe. From there, snacks or pasta for sharing, and a dessert to finish. At Blu Turkey, the cappuccino and cold coffee are the most-ordered items for good reason — they are consistent and well-calibrated.',
      },
      {
        question: 'Are South Delhi cafes good for remote work?',
        answer:
          'Yes — GK1 and surrounding South Delhi areas have several cafes suitable for remote work, including Blu Turkey Cafe. Look for comfortable seating, good coffee for long sessions, and a calm sound level. Blu Turkey works well for students, freelancers, and professionals.',
      },
      {
        question: 'Which cafes in South Delhi are Instagram-worthy?',
        answer:
          'Blu Turkey Cafe in GK1 is known for its Instagram-worthy interiors — warm tones, premium ambience, and a space that photographs well because it is designed with care. Content creators and couples both find it a great spot for photos and reels.',
      },
      {
        question: 'Is GK1 a good area for a cafe date in South Delhi?',
        answer:
          'Absolutely. GK1 has the right combination of calm energy, walkable streets, and quality cafes for a date. Blu Turkey Cafe specifically is designed for lingering conversations — warm lighting, comfortable seating, and a menu that carries a full evening.',
      },
    ],
  },
  {
    slug: 'evening-cafes-ambience-south-delhi',
    title: 'Evening Cafes with Ambience in South Delhi',
    metaTitle: 'Evening Cafes with Ambience in South Delhi | Blu Turkey Cafe',
    description:
      'Discover the best evening cafes with ambience in South Delhi for coffee, conversations, dates, and relaxing nights. Explore Blu Turkey Cafe in GK1.',
    author: 'Blu Turkey Coffee Team',
    date: 'Aug 18, 2026',
    datePublished: '2026-08-18',
    category: 'Date Cafe',
    readTime: '7 min read',
    image: '/images/blu-turkey-cafe-seating-ambience.webp',
    faqs: [
      {
        question: 'What are the best evening cafes in South Delhi?',
        answer:
          'Greater Kailash 1 (GK1) is one of the strongest areas for evening cafes in South Delhi — walkable, independent, and noticeably calmer than busier commercial hubs. Blu Turkey Cafe in GK1 M Block is a go-to choice for evenings: warm interiors, a full menu spanning coffee to desserts, and seating designed to make you stay longer than you planned.',
      },
      {
        question: 'Which cafes in Delhi have a good ambience for evenings?',
        answer:
          'The best ambience cafes in Delhi prioritise warm lighting over fluorescents, comfortable seating over fast turnover, and music at a conversational volume. Blu Turkey Cafe in GK1 M Block hits all three — the interiors are warm and considered, the chairs and sofas are built for long visits, and the background music stays where it belongs: in the background.',
      },
      {
        question: 'Is GK1 a good area for evening cafes?',
        answer:
          'Yes — GK1 is one of the best areas in South Delhi for an evening cafe visit. It sits close to Nehru Place and Kailash Colony, has a walkable, residential pace, and a concentration of independent cafes that reward lingering. The neighbourhood quiets down from the office rush by early evening, which is exactly when GK1 comes into its own.',
      },
      {
        question: 'What makes a cafe good for an evening date in Delhi?',
        answer:
          'Three things: warm lighting (not fluorescent), seating comfortable enough to stay in for two hours, and a menu covering drinks and food so neither person feels limited. A space that feels deliberately designed rather than accidentally assembled makes the whole evening feel intentional. Blu Turkey Cafe in GK1 checks all three.',
      },
      {
        question: 'Is Blu Turkey Cafe suitable for an evening visit?',
        answer:
          'Absolutely — Blu Turkey Cafe in GK1 M Block is one of the most consistent evening cafe options in South Delhi. Warm interiors, cozy seating, specialty coffee, pasta, snacks, and desserts make it easy to plan a full evening without changing venues. It works equally well for dates, friends catchups, and solo coffee sessions.',
      },
      {
        question: 'What should I order for an evening visit to Blu Turkey Cafe?',
        answer:
          'Cold coffee or a cappuccino is a strong start, especially after a long day. From there, snacks or pasta for sharing, and a dessert to finish — the menu is designed to carry a full evening comfortably. If you are celebrating anything, the dessert selection makes a natural centrepiece for the table.',
      },
    ],
  },
  {
    slug: 'best-coffee-shops-work-near-nehru-place',
    title: 'Best Coffee Shops to Work From Near Nehru Place',
    description:
      'Work near Nehru Place? Find work-friendly coffee in South Delhi—Wi‑Fi, specialty coffee, food—plus Blu Turkey Cafe GK1 M Block.',
    author: 'Blu Turkey Coffee Team',
    date: 'Apr 13, 2026',
    datePublished: '2026-04-13',
    category: 'Work Cafe',
    readTime: '6 min read',
    faqs: [
      {
        question: 'What should I search for work-friendly coffee near Nehru Place?',
        answer:
          'Try “coffee shops Nehru Place,” “work cafes near Nehru Place,” and “laptop friendly cafes South Delhi.” Then confirm Wi‑Fi, seating, and outlet access on recent photos or a quick call.',
      },
      {
        question: 'Is GK1 too far from Nehru Place for a work session?',
        answer:
          'For many people it is a short hop—and worth it when you want calmer seating and a stronger cafe menu than a typical mall corridor. Treat it like choosing focus over convenience.',
      },
      {
        question: 'How do I know if a cafe is good for laptop work?',
        answer:
          'Look for stable Wi‑Fi, accessible power, seating you can sit in for 90+ minutes, and a drink menu that rewards a second cup—specialty coffee helps when you are in for the long haul.',
      },
      {
        question: 'Why pick Blu Turkey Cafe for remote work near Nehru Place?',
        answer:
          'Blu Turkey combines specialty coffee credibility with comfort food and desserts, friendly service, and a cozy ambience in GK1 M Block—ideal when you want productivity without sacrificing flavor.',
      },
    ],
  },
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
