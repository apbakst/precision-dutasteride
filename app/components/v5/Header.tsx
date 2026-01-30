'use client';

import Link from 'next/link';

export function HeaderV5() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-12">
        <Link href="/v5" className="text-xl font-bold text-gray-900">
          anagen
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#how-it-works" className="text-sm font-medium text-gray-500 hover:text-gray-900">How It Works</a>
          <a href="#science" className="text-sm font-medium text-gray-500 hover:text-gray-900">Science</a>
          <a href="#reviews" className="text-sm font-medium text-gray-500 hover:text-gray-900">Reviews</a>
        </nav>
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white hover:bg-gray-800"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
