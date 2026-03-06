import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ArrowLeft, Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Ultimate Guide to Specialty Coffee | Blu Turkey Cafe Blog',
  description: 'Learn what makes specialty coffee different. Understand bean origin, roasting, brewing methods, and flavor profiles.',
  openGraph: {
    title: 'The Ultimate Guide to Specialty Coffee',
    description: 'Understanding specialty coffee quality and flavor',
    url: 'https://bluturkey.com/blog/specialty-coffee-guide',
  },
};

export default function BlogPost() {
  return (
    <>
      <Header />

      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-accent uppercase tracking-wide bg-accent/10 px-3 py-1 rounded-full">
              Coffee Guide
            </span>
            <span className="text-sm text-foreground/60">5 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            The Ultimate Guide to Specialty Coffee: Understanding Quality & Flavor
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-foreground/60 border-b border-border pb-6">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              Mar 1, 2024
            </div>
            <div className="flex items-center gap-2">
              <User size={18} />
              Blu Turkey Coffee Team
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <p className="text-lg leading-relaxed">
            Have you ever wondered why the coffee at specialty cafes tastes so different from regular coffee? There's a world 
            of difference between commodity coffee and specialty coffee – and understanding that difference will transform how 
            you appreciate every cup.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8">
            What is Specialty Coffee?
          </h2>
          <p>
            Specialty coffee isn't just a marketing term – it's a classification used by the Specialty Coffee Association (SCA). 
            To qualify as specialty coffee, beans must score 80 points or higher on the SCA's 100-point scale. This rigorous 
            grading system evaluates everything from aroma and acidity to body and balance.
          </p>
          <p>
            Specialty coffee represents the top 2-3% of coffee produced worldwide. It's grown at high altitudes, carefully harvested, 
            and processed with meticulous attention to detail. Every step – from the farm to your cup – matters.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8">
            The Importance of Bean Origin
          </h2>
          <p>
            Where coffee is grown significantly impacts its flavor profile. Beans from Ethiopia have fruity, floral notes. Colombian 
            coffee tends to be balanced with chocolate and caramel undertones. Indonesian coffee often exhibits earthy, full-bodied 
            characteristics.
          </p>
          <p>
            Altitude matters tremendously. Coffee grown at higher elevations develops more complex flavor compounds, resulting in 
            richer, more nuanced taste. This is why specialty coffee often mentions the specific elevation where beans were cultivated.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8">
            Understanding Roasting Levels
          </h2>
          <p>
            Roasting transforms raw coffee beans into the aromatic brown beans we recognize. The roast level dramatically affects 
            flavor:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Light Roast:</strong> Preserves origin flavors, more acidity, complex fruity notes</li>
            <li><strong>Medium Roast:</strong> Balanced between origin and roast flavors</li>
            <li><strong>Dark Roast:</strong> Emphasizes roast character, fuller body, darker chocolate and caramel notes</li>
          </ul>
          <p>
            At Blu Turkey Cafe, we use small-batch roasting to ensure optimal freshness and flavor expression for each bean origin.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8">
            The Role of Brewing Method
          </h2>
          <p>
            Different brewing methods extract different flavor compounds from coffee. An espresso shot emphasizes intensity and 
            body, while pour-over brewing highlights clarity and nuance. The water temperature, contact time, and grind size all 
            influence what you taste.
          </p>
          <p>
            This is why our baristas ask about your brewing preferences – they're not just being helpful, they're ensuring you 
            experience the best expression of your chosen coffee.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8">
            Flavor Notes & Tasting
          </h2>
          <p>
            You've probably seen coffee described with notes like "chocolate," "berry," or "caramel." These aren't added flavors – 
            they're natural compounds present in the coffee beans. Learning to identify these notes enhances your appreciation of 
            specialty coffee.
          </p>
          <p>
            Start by taking a moment to smell your coffee before tasting. Notice the aroma. Then sip slowly, letting it coat your 
            palate. Pay attention to the acidity (brightness), body (weight and texture), and finish (aftertaste).
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8">
            Single-Origin vs Blends
          </h2>
          <p>
            Single-origin coffees showcase the unique characteristics of beans from a specific region or farm. They're the perfect 
            choice if you want to explore different flavor profiles.
          </p>
          <p>
            Blends combine beans from different origins to create balanced, complex flavors. Our signature blends at Blu Turkey are 
            carefully crafted to highlight complementary flavor characteristics.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8">
            Why Choose Specialty Coffee?
          </h2>
          <p>
            Drinking specialty coffee means:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Supporting sustainable farming and fair-trade practices</li>
            <li>Experiencing unique, complex flavors you won't find elsewhere</li>
            <li>Investing in quality over quantity</li>
            <li>Supporting skilled baristas and their craft</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8">
            Ready to Experience Specialty Coffee?
          </h2>
          <p>
            Visit Blu Turkey Cafe and let our knowledgeable baristas guide you through our specialty coffee selection. Whether 
            you're a longtime coffee enthusiast or just beginning to explore specialty coffee, we're here to share our passion 
            and help you discover your perfect cup.
          </p>
        </article>

        {/* Back to Blog */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
