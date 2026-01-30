'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-white/95 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span
            className={`text-xl font-semibold tracking-tight transition-colors ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            anagen
          </span>
          <span
            className={`text-xs transition-colors ${
              scrolled ? 'text-muted' : 'text-white/60'
            }`}
          >
            by HairDAO
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#science"
            className={`text-sm font-medium transition-colors ${
              scrolled
                ? 'text-muted hover:text-foreground'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Science
          </a>
          <a
            href="#results"
            className={`text-sm font-medium transition-colors ${
              scrolled
                ? 'text-muted hover:text-foreground'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Results
          </a>
          <a
            href="#faq"
            className={`text-sm font-medium transition-colors ${
              scrolled
                ? 'text-muted hover:text-foreground'
                : 'text-white/70 hover:text-white'
            }`}
          >
            FAQ
          </a>
        </nav>

        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
            scrolled
              ? 'bg-foreground text-white hover:bg-gray-800'
              : 'bg-white text-slate-900 hover:bg-white/90'
          }`}
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
