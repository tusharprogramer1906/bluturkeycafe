import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

const ZOMATO_URL = 'https://www.zomato.com/ncr/blu-turkey-cafe-greater-kailash-gk-1-new-delhi';
const SWIGGY_URL = 'https://www.swiggy.com/search?query=Blu+Turkey+Cafe+Greater+Kailash';

export default function OrderOnlineSection() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Order Online
        </h2>
        <p className="text-foreground/70 mb-10">
          Get your favorite Blu Turkey Cafe items delivered to your doorstep.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={ZOMATO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-[#E23744] hover:bg-[#cb2d39] transition-colors min-h-[52px]"
          >
            <ShoppingBag size={22} aria-hidden />
            Order on Zomato
          </Link>
          <Link
            href={SWIGGY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white bg-[#FC8019] hover:bg-[#e67310] transition-colors min-h-[52px]"
          >
            <ShoppingBag size={22} aria-hidden />
            Order on Swiggy
          </Link>
        </div>
      </div>
    </section>
  );
}
