'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V32Page() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Split screen */}
      <div className="fixed inset-0 z-0 grid grid-cols-2">
        {/* Left - Red tint (the fear) */}
        <div className="relative">
          <Image src="/images/generated/v4-hero.png" alt="" fill className="object-cover opacity-30 grayscale" />
          <div className="absolute inset-0 bg-red-900/30" />
        </div>
        {/* Right - Green tint (the solution) */}
        <div className="relative">
          <Image src="/images/generated/v4-lifestyle.png" alt="" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-emerald-900/20" />
        </div>
      </div>

      {/* Reactive overlay */}
      <div
        className="fixed inset-0 z-10 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.2) 0%, transparent 40%)`
        }}
      />

      {/* Center divider */}
      <div className="fixed left-1/2 top-0 bottom-0 w-px bg-white/10 z-20" />

      {/* Content */}
      <div className="relative z-30 min-h-screen grid grid-cols-2">
        {/* Left side - Others */}
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <div className="text-xs tracking-[0.5em] text-red-400/70 mb-6">ORAL</div>
          <div className="text-6xl sm:text-7xl font-extralight text-red-400">70%</div>
          <div className="text-white/40 mt-2">DHT suppressed</div>
          <div className="mt-8 text-4xl">💔</div>
          <div className="text-white/30 mt-2">side effects</div>
        </div>

        {/* Right side - Us */}
        <div className="flex flex-col items-center justify-center p-8 text-center">
          <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-6">PRECISION</div>
          <div className="text-6xl sm:text-7xl font-extralight text-emerald-400">~0%</div>
          <div className="text-white/40 mt-2">DHT change</div>
          <div className="mt-8 text-4xl">✓</div>
          <div className="text-white/30 mt-2">everything works</div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          className="group relative block"
        >
          <div className="absolute -inset-4 bg-emerald-500/40 blur-2xl" />
          <div className="relative bg-emerald-500 px-12 py-5 text-lg tracking-widest text-black">
            CHOOSE PRECISION — $150
          </div>
        </a>
      </div>
    </div>
  );
}
