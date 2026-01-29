'use client';

import { useEffect, useState } from 'react';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (roughly 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <div>
          <div className="text-sm font-semibold text-foreground">
            Precision Dutasteride
          </div>
          <div className="text-xs text-muted">From $80/mo</div>
        </div>
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-foreground px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gray-800"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
