'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V10Page() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* SECTION 1: Full viewport hero with centered CTA */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        {/* Parallax background */}
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <Image
            src="/images/generated/v4-lifestyle.png"
            alt=""
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

        {/* Header */}
        <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6">
          <Link href="/v10" className="text-sm tracking-[0.5em] text-white/40">ANAGEN</Link>
          <div className="text-[10px] tracking-[0.3em] text-emerald-400/60">PRECISION DUTASTERIDE</div>
        </header>

        {/* CENTERED CTA BLOCK */}
        <div className="relative z-40 text-center">
          <h1 className="mb-8 text-6xl font-extralight leading-none tracking-tight sm:text-8xl md:text-9xl">
            <span className="block text-white/90">RECLAIM</span>
            <span className="block font-normal italic text-emerald-400">EVERYTHING</span>
          </h1>

          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            className="group inline-block"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-2 rounded-full bg-emerald-500/20 blur-xl transition-all group-hover:bg-emerald-500/40 group-hover:blur-2xl" />

              {/* Button */}
              <div className="relative border border-white/20 bg-white/5 px-16 py-6 backdrop-blur-sm transition-all group-hover:border-emerald-400/50 group-hover:bg-emerald-500/10 sm:px-24 sm:py-8">
                <div className="text-2xl tracking-[0.2em] text-white sm:text-3xl">START TREATMENT</div>
                <div className="mt-2 text-sm tracking-widest text-emerald-400">$150/MONTH</div>
              </div>
            </div>
          </a>

          {/* Scroll indicator */}
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 text-white/20">
            <div className="flex flex-col items-center gap-2">
              <div className="h-8 w-px bg-gradient-to-b from-white/20 to-transparent" />
              <div className="text-[10px] tracking-widest">SCROLL</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Stats */}
      <section className="relative border-y border-white/10 bg-black px-4 py-24">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-16 text-center sm:gap-24">
          {[
            { value: '2-3x', label: 'HIGHER DELIVERY', color: 'text-emerald-400' },
            { value: '60+', label: 'SYSTEMS TESTED', color: 'text-cyan-400' },
            { value: '6', label: 'PATENTS FILED', color: 'text-amber-400' },
          ].map((item, i) => (
            <div key={i}>
              <div className={`text-5xl font-extralight ${item.color} sm:text-7xl`}>{item.value}</div>
              <div className="mt-2 text-xs tracking-[0.3em] text-white/30">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Another hero with CTA */}
      <section className="relative flex min-h-screen items-center justify-center py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/generated/v4-science.png"
            alt=""
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black" />
        </div>

        <div className="relative z-10 max-w-3xl px-4 text-center">
          <div className="text-xs tracking-[0.5em] text-emerald-400/70">UNIVERSITY OF BRASILIA RESEARCH</div>
          <h2 className="mt-6 text-4xl font-extralight leading-tight sm:text-6xl">
            Peer-Reviewed.<br />
            <span className="italic text-emerald-400">Published.</span><br />
            Proven.
          </h2>
          <p className="mt-8 text-lg text-white/50">
            Two years of research. Sixty delivery systems evaluated. The clear winner: Precision Dutasteride 0.03%.
          </p>

          {/* Another CTA */}
          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            className="group mt-12 inline-block border border-emerald-500/50 px-12 py-5 transition-all hover:border-emerald-400 hover:bg-emerald-500/10"
          >
            <span className="text-lg tracking-widest text-emerald-400">BEGIN YOUR JOURNEY</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black px-8 py-8 text-center">
        <p className="text-[10px] tracking-widest text-white/20">
          © 2026 ANAGEN BY HAIRDAO • NOT FDA APPROVED • INDIVIDUAL RESULTS VARY
        </p>
      </footer>
    </div>
  );
}
