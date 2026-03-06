import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ArrowLeft, Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Brewing Methods Explained: Espresso vs Pour Over vs French Press | Blu Turkey Cafe',
  description: 'Explore different coffee brewing methods and how each brings out unique characteristics in specialty coffee beans.',
  openGraph: {
    title: 'Brewing Methods Explained',
    description: 'Complete guide to coffee brewing methods',
    url: 'https://bluturkey.com/blog/coffee-brewing-methods',
  },
};

export default function BlogPost() {
  return (
    <>
      <Header />

      <main className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to Blog
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-accent uppercase tracking-wide bg-accent/10 px-3 py-1 rounded-full">
              Coffee Guide
            </span>
            <span className="text-sm text-foreground/60">6 min read</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Brewing Methods Explained: Espresso vs Pour Over vs French Press
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-foreground/60 border-b border-border pb-6">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              Feb 25, 2024
            </div>
            <div className="flex items-center gap-2">
              <User size={18} />
              Coffee Experts
            </div>
          </div>
        </div>

        <article className="prose prose-lg max-w-none space-y-6 text-foreground/80">
          <p className="text-lg leading-relaxed">
            The way you brew coffee is just as important as the beans themselves. Different brewing methods extract different 
            compounds from coffee, resulting in entirely different flavor profiles and characteristics. Understanding these 
            differences will help you choose the method that best matches your taste preferences.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8">
            Espresso: Intensity & Body
          </h2>
          <p>
            Espresso is made by forcing hot water through finely ground coffee under high pressure. This creates a concentrated 
            shot with a rich crema (the golden foam on top). The result is bold, intense, and full-bodied.
          </p>
          <p>
            <strong>Characteristics:</strong> Intense flavor, short pull time (25-30 seconds), high pressure (9 bars), small serving 
            size, thick body, lingering finish.
          </p>
          <p>
            <strong>Best for:</strong> Those who enjoy bold, intense coffee and want quick preparation. Espresso is the foundation 
            for lattes, cappuccinos, and other milk-based drinks.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8">
            Pour Over: Clarity & Nuance
          </h2>
          <p>
            Pour over involves slowly pouring hot water over coffee grounds in a filter. This method gives you complete control 
            over water temperature, flow rate, and brewing time. The result is clean, bright, and allows the origin characteristics 
            of the beans to shine through.
          </p>
          <p>
            <strong>Characteristics:</strong> Clean taste, full flavor clarity, lightweight body, bright acidity, precise control, 
            slower brewing (3-4 minutes).
          </p>
          <p>
            <strong>Best for:</strong> Coffee enthusiasts who want to appreciate the unique characteristics of single-origin beans. 
            Perfect for exploring different flavor profiles.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8">
            French Press: Full Body & Richness
          </h2>
          <p>
            A French press steeps coarsely ground coffee in hot water, then uses a metal filter to separate grounds from liquid. 
            This method extracts more oils and sediment than other methods, creating a fuller body and richer mouthfeel.
          </p>
          <p>
            <strong>Characteristics:</strong> Full body, rich flavor, some sediment, more oils extracted, immersion brewing 
            (4 minutes), strong finish.
          </p>
          <p>
            <strong>Best for:</strong> Those who prefer fuller-bodied, more robust coffee. Great for darker roasts and blends.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8">
            Other Notable Methods
          </h2>
          
          <h3 className="text-xl font-semibold text-primary">Turkish Coffee</h3>
          <p>
            Turkish coffee is one of the oldest brewing methods. Finely ground coffee is mixed with water and sugar in a small pot 
            and heated. The result is strong, concentrated, and served with grounds.
          </p>

          <h3 className="text-xl font-semibold text-primary">Aeropress</h3>
          <p>
            A modern brewing device that uses air pressure and paper filters to create clean coffee quickly. It's versatile and 
            produces excellent results in 1-2 minutes.
          </p>

          <h3 className="text-xl font-semibold text-primary">Cold Brew</h3>
          <p>
            Coarsely ground coffee steeps in cold water for 12-24 hours. The result is smooth, concentrated, and naturally less 
            acidic. Typically served diluted with water or milk.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8">
            How to Choose Your Brewing Method
          </h2>
          <p>
            Consider these factors when choosing your brewing method:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Time:</strong> How much time do you have? Espresso is quick, French press takes 4 minutes, cold brew takes overnight</li>
            <li><strong>Flavor preference:</strong> Do you want intensity (espresso) or clarity (pour over)?</li>
            <li><strong>Body preference:</strong> Full-bodied (French press) or clean and light (pour over)?</li>
            <li><strong>Equipment:</strong> What equipment do you have access to?</li>
            <li><strong>Skill level:</strong> Some methods require more precision than others</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8">
            The Best Beans for Each Method
          </h2>
          <p>
            <strong>Espresso:</strong> Dark roasts, blends, or balanced single-origins. The pressure and high heat suit darker roasts.
          </p>
          <p>
            <strong>Pour Over:</strong> Light to medium roasts, single-origins. The clarity of this method showcases origin characteristics.
          </p>
          <p>
            <strong>French Press:</strong> Medium to dark roasts, full-bodied beans. The full body complements immersion brewing.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mt-8">
            Experience Different Methods at Blu Turkey
          </h2>
          <p>
            Our baristas are experienced with all brewing methods and can prepare your coffee exactly how you like it. Whether you're 
            an espresso devotee, a pour-over perfectionist, or a French press enthusiast – we have the equipment and expertise to brew 
            your perfect cup.
          </p>
          <p>
            Visit us and ask our baristas to recommend a brewing method for your preferred beans. They'll help you explore and discover 
            your favorite way to experience specialty coffee.
          </p>
        </article>

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
