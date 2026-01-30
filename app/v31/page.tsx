'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V31Page() {
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
      {/* Full-bleed hero image */}
      <div className="fixed inset-0 z-0">
        <Image src="/images/generated/v4-hero.png" alt="" fill className="object-cover opacity-50" priority />
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                         linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%)`
          }}
        />
      </div>

      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6">
        <Link href="/v31" className="text-sm tracking-[0.5em] text-white/40">ANAGEN</Link>
      </header>

      {/* Hero - Minimal text, big impact */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-extralight leading-none">
            Hair.
          </h1>
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-extralight leading-none text-emerald-400 mt-2">
            Sex.
          </h1>
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-extralight leading-none mt-2">
            Both.
          </h1>

          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            className="group relative inline-block mt-16"
          >
            <div className="absolute -inset-4 bg-emerald-500/30 blur-2xl group-hover:bg-emerald-400/50" />
            <div className="relative bg-emerald-500 px-16 py-6 text-xl tracking-widest text-black group-hover:bg-emerald-400">
              $150/MO
            </div>
          </a>
        </div>
      </section>

      {/* Stats - Visual only */}
      <section className="relative z-10 border-t border-white/5 py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-7xl sm:text-8xl font-extralight text-emerald-400">2-3x</div>
              <div className="mt-4 text-white/40">targeting</div>
            </div>
            <div>
              <div className="text-7xl sm:text-8xl font-extralight text-white/80">~0%</div>
              <div className="mt-4 text-white/40">DHT change</div>
            </div>
            <div>
              <div className="text-7xl sm:text-8xl font-extralight text-emerald-400">0</div>
              <div className="mt-4 text-white/40">compromises</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 border-t border-white/5 py-16 text-center">
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          className="text-2xl tracking-widest text-emerald-400 hover:text-emerald-300"
        >
          START →
        </a>
      </section>
    </div>
  );
}
