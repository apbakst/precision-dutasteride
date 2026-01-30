'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V35Page() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Full-bleed background */}
      <div className="fixed inset-0">
        <Image src="/images/generated/v4-lifestyle.png" alt="" fill className="object-cover opacity-50" priority />
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                         linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.9) 100%)`
          }}
        />
      </div>

      {/* Single screen - everything centered */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* The headline */}
        <h1 className="text-center text-5xl sm:text-7xl md:text-8xl font-extralight leading-tight">
          Keep your hair.
          <span className="block text-emerald-400 mt-2">Keep your edge.</span>
        </h1>

        {/* Data row */}
        <div className="flex items-center gap-8 sm:gap-16 mt-16">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-extralight text-emerald-400">2-3x</div>
            <div className="text-xs text-white/30 mt-1">TARGETING</div>
          </div>
          <div className="h-12 w-px bg-white/10" />
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-extralight text-white/80">~0%</div>
            <div className="text-xs text-white/30 mt-1">DHT CHANGE</div>
          </div>
          <div className="h-12 w-px bg-white/10" />
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-extralight text-emerald-400">0</div>
            <div className="text-xs text-white/30 mt-1">SIDES</div>
          </div>
        </div>

        {/* CTA */}
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          className="group relative mt-16"
        >
          <div className="absolute -inset-6 bg-emerald-500/30 blur-3xl group-hover:bg-emerald-400/50" />
          <div className="relative bg-emerald-500 px-20 py-7 text-2xl tracking-widest text-black group-hover:bg-emerald-400">
            $150/MO
          </div>
        </a>

        {/* Minimal footer */}
        <div className="absolute bottom-8 text-center text-white/20 text-xs tracking-widest">
          PRECISION DUTASTERIDE — ANAGEN
        </div>
      </div>
    </div>
  );
}
