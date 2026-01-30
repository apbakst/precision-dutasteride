'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function V8Page() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/generated/v4-hero.png"
          alt=""
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Subtle header */}
      <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6">
        <Link href="/v8" className="text-sm tracking-[0.4em] text-white/40">ANAGEN</Link>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      </header>

      {/* CENTER EVERYTHING */}
      <div className="relative z-40 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Eyebrow */}
        <div className="mb-4 text-xs tracking-[0.5em] text-amber-400/80">PRECISION DUTASTERIDE 0.03%</div>

        {/* Headline - huge and faded */}
        <h1 className="mb-8 text-5xl font-extralight leading-none tracking-tight text-white/90 sm:text-7xl md:text-8xl">
          Own Your
          <span className="block font-normal italic text-amber-300">Future</span>
        </h1>

        {/* THE CTA - Prominent and centered */}
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          className="group relative mt-4"
        >
          {/* Animated border */}
          <div className="absolute -inset-1 rounded-sm bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400 opacity-70 blur transition-all group-hover:opacity-100 group-hover:blur-md" />

          <div className="relative flex items-center gap-6 bg-black px-12 py-6 sm:px-20 sm:py-8">
            <span className="text-2xl font-light tracking-widest text-white sm:text-4xl">START NOW</span>
            <span className="text-xl text-amber-400 sm:text-2xl">→</span>
          </div>
        </a>

        {/* Price */}
        <div className="mt-6 text-lg tracking-wider text-white/50">From $80/month</div>

        {/* Trust signals - subtle */}
        <div className="mt-16 flex gap-8 text-white/30 sm:gap-16">
          <div className="text-center">
            <div className="text-2xl font-light text-amber-400/60 sm:text-3xl">2-3x</div>
            <div className="mt-1 text-[10px] tracking-widest">HIGHER DELIVERY</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-amber-400/60 sm:text-3xl">60+</div>
            <div className="mt-1 text-[10px] tracking-widest">FORMULAS TESTED</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-light text-amber-400/60 sm:text-3xl">6</div>
            <div className="mt-1 text-[10px] tracking-widest">PATENTS FILED</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
        <div className="py-4 text-center text-[10px] tracking-widest text-white/20">
          HAIRDAO • UNIVERSITY OF BRASILIA RESEARCH
        </div>
      </div>
    </div>
  );
}
