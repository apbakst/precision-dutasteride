'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export function HeaderV4() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-12">
        <Link href="/v4" className="text-2xl font-bold text-white">
          anagen
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#science" className="text-sm text-white/70 hover:text-white">Science</a>
          <a href="#results" className="text-sm text-white/70 hover:text-white">Results</a>
          <a href="#pricing" className="text-sm text-white/70 hover:text-white">Pricing</a>
        </nav>
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-400"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
