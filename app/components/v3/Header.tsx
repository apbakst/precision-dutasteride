'use client';

import Link from 'next/link';

export function HeaderV3() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50 bg-transparent">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-12">
        <Link href="/v3" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-light tracking-tight text-stone-900">
            anagen
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <a
            href="#science"
            className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
          >
            Science
          </a>
          <a
            href="#results"
            className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
          >
            Results
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-stone-600 transition-colors hover:text-stone-900"
          >
            FAQ
          </a>
        </nav>

        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-stone-900 bg-transparent px-6 py-2.5 text-sm font-medium text-stone-900 transition-all hover:bg-stone-900 hover:text-white"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
