'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V11Page() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* V4-style full-bleed image */}
      <div className="absolute inset-0">
        <Image
          src="/images/generated/v4-hero.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* V6-style reactive gradient overlay */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background: `
            radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.4) 0%, transparent 40%),
            radial-gradient(circle at ${100 - mousePos.x}% ${100 - mousePos.y}%, rgba(6, 182, 212, 0.3) 0%, transparent 40%),
            linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%)
          `
        }}
      />

      {/* Minimal header */}
      <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6">
        <Link href="/v11" className="text-sm tracking-[0.5em] text-white/50">ANAGEN</Link>
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-xs tracking-widest text-emerald-400/70">PRECISION DUTASTERIDE</span>
        </div>
      </header>

      {/* V10-style big typography + V6-style centered CTA */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center px-4 text-center">
        {/* Big headline */}
        <h1 className="mb-6 text-6xl font-extralight leading-none tracking-tight text-white/90 sm:text-8xl md:text-9xl">
          <span className="block">YOUR</span>
          <span className="block font-normal italic text-emerald-400">HAIR</span>
        </h1>

        {/* Centered CTA with glow */}
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          className="group relative mt-4"
        >
          <div
            className="absolute -inset-4 rounded-lg opacity-60 blur-2xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-3xl"
            style={{
              background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #10b981 0%, #06b6d4 100%)`
            }}
          />
          <div className="relative border border-white/30 bg-black/40 px-16 py-6 backdrop-blur-md transition-all group-hover:border-emerald-400/50 group-hover:bg-black/60 sm:px-24 sm:py-8">
            <div className="text-2xl tracking-[0.3em] text-white sm:text-3xl">START TREATMENT</div>
            <div className="mt-2 text-sm tracking-widest text-emerald-400">$150/MONTH</div>
          </div>
        </a>

        {/* Subtle subtext */}
        <p className="mt-10 max-w-md text-sm text-white/40">
          2-3x higher follicular delivery. University research. Published results.
        </p>
      </div>

      {/* Corner accents */}
      <div className="absolute bottom-8 left-8 z-30">
        <div className="text-4xl font-extralight text-white/20">2-3x</div>
        <div className="text-[10px] tracking-widest text-emerald-400/50">EFFICACY</div>
      </div>

      <div className="absolute bottom-8 right-8 z-30 text-right">
        <div className="text-4xl font-extralight text-white/20">0.03%</div>
        <div className="text-[10px] tracking-widest text-cyan-400/50">PRECISION</div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
    </div>
  );
}
