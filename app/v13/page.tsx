'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V13Page() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Split background - V4 imagery */}
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="relative">
          <Image src="/images/generated/v4-hero.png" alt="" fill className="object-cover opacity-40" />
        </div>
        <div className="relative">
          <Image src="/images/generated/v4-lifestyle.png" alt="" fill className="object-cover opacity-40" />
        </div>
      </div>

      {/* V6 reactive overlay */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: `
            radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%,
              ${isHovering ? 'rgba(16, 185, 129, 0.6)' : 'rgba(16, 185, 129, 0.3)'} 0%,
              transparent 40%),
            linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.9) 100%)
          `
        }}
      />

      {/* Center divider line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent" />

      {/* Header */}
      <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-center py-8">
        <Link href="/v13" className="text-sm tracking-[1em] text-white/30">ANAGEN</Link>
      </header>

      {/* V10-style massive typography */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        <h1 className="text-[20vw] font-black leading-none tracking-tighter text-white/[0.03]">
          GROW
        </h1>
      </div>

      {/* Main centered content */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center px-4">
        <div className="text-xs tracking-[0.5em] text-emerald-400/70">PRECISION DUTASTERIDE</div>

        <h2 className="mt-4 text-center text-4xl font-extralight text-white/80 sm:text-6xl">
          The future of
          <span className="block font-normal italic text-emerald-400">hair restoration</span>
        </h2>

        {/* THE CTA - Massive and centered */}
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          className="group relative mt-12"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Pulsing glow */}
          <div className={`absolute -inset-8 rounded-full blur-3xl transition-all duration-700 ${isHovering ? 'bg-emerald-500/50 scale-110' : 'bg-emerald-500/20 scale-100'}`} />

          {/* Button */}
          <div className="relative border-2 border-emerald-400 bg-black/60 px-16 py-8 backdrop-blur-sm transition-all sm:px-28 sm:py-10">
            <div className="text-3xl tracking-[0.3em] text-white sm:text-4xl">
              START
            </div>
            <div className="mt-3 text-center text-lg tracking-widest text-emerald-400">$150/MO</div>
          </div>
        </a>

        {/* Stats row */}
        <div className="mt-16 flex gap-12 text-white/30 sm:gap-20">
          <div className="text-center">
            <div className="text-3xl font-light">2-3x</div>
            <div className="text-[10px] tracking-widest text-emerald-400/50">DELIVERY</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light">60+</div>
            <div className="text-[10px] tracking-widest text-emerald-400/50">TESTED</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-light">6</div>
            <div className="text-[10px] tracking-widest text-emerald-400/50">PATENTS</div>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-6 left-0 right-0 z-30 text-center">
        <p className="text-[10px] tracking-widest text-white/20">
          UNIVERSITY OF BRASÍLIA RESEARCH • PEER-REVIEWED • PUBLISHED
        </p>
      </div>
    </div>
  );
}
