'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const LOADER_KEY = 'bluturkey-loader-seen';

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasSeenLoader = typeof window !== 'undefined' && sessionStorage.getItem(LOADER_KEY);
    if (hasSeenLoader) {
      setIsLoading(false);
      setIsVisible(false);
      return;
    }

    const minDuration = 1200;
    const maxDuration = 2500;

    const finish = () => {
      setIsLoading(false);
      if (typeof window !== 'undefined') sessionStorage.setItem(LOADER_KEY, '1');
      setTimeout(() => setIsVisible(false), 500);
    };

    const timeoutId = setTimeout(finish, maxDuration);

    const init = async () => {
      try {
        const start = performance.now();

        await Promise.all(
          ['/images/blu-turkey-logo.png', '/images/coffee-cup.png'].map(
            (src) =>
              new Promise<void>((resolve) => {
                const img = new Image();
                img.onload = () => resolve();
                img.onerror = () => resolve();
                img.src = src;
              })
          )
        );

        const elapsed = performance.now() - start;
        await new Promise((r) => setTimeout(r, Math.max(0, minDuration - elapsed)));
      } catch {
        // ignore
      } finally {
        clearTimeout(timeoutId);
        finish();
      }
    };

    init();
  }, []);

  if (!isVisible) return <>{children}</>;

  return (
    <>
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-500 ${
          isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'linear-gradient(135deg, #0f0a0a 0%, #1a1512 50%, #0d0f18 100%)' }}
      >
        <div className="flex flex-col items-center gap-8">
          <Image
            src="/images/blu-turkey-logo.png"
            alt="Blu Turkey Cafe"
            width={120}
            height={120}
            className="animate-loader-logo"
            priority
          />
          <div className="loader-ring" />
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="loader-dot"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={isLoading ? 'opacity-0' : 'opacity-100 animate-fade-in'}>{children}</div>
    </>
  );
}
