'use client';

import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-foreground">
            anagen
          </span>
          <span className="text-xs text-muted">by HairDAO</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#science"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Science
          </a>
          <a
            href="#results"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Results
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            FAQ
          </a>
        </nav>

        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-gray-800 hover:shadow-lg"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
