'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V34Page() {
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
      {/* Background */}
      <div className="fixed inset-0">
        <Image src="/images/generated/v4-hero.png" alt="" fill className="object-cover opacity-30" priority />
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.25) 0%, transparent 50%), rgba(0,0,0,0.7)`
          }}
        />
      </div>

      {/* Scrolling content */}
      <div className="relative z-10">
        {/* Screen 1 - The problem */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <div className="text-red-400/70 text-sm tracking-[0.5em] mb-4">ORAL DHT BLOCKERS</div>
            <div className="text-8xl sm:text-9xl font-extralight text-red-400/80">15%</div>
            <div className="text-white/40 mt-4 text-xl">sexual side effects</div>
          </div>
        </section>

        {/* Screen 2 - The solution */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <div className="text-emerald-400/70 text-sm tracking-[0.5em] mb-4">PRECISION TOPICAL</div>
            <div className="text-8xl sm:text-9xl font-extralight text-emerald-400">~0%</div>
            <div className="text-white/40 mt-4 text-xl">systemic DHT change</div>
          </div>
        </section>

        {/* Screen 3 - The result */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <div className="text-white/70 text-sm tracking-[0.5em] mb-4">THE RESULT</div>
            <div className="text-6xl sm:text-8xl font-extralight leading-tight">
              <span className="text-emerald-400">Hair</span> +
              <span className="block text-emerald-400">Sex</span>
            </div>

            <a
              href="https://anagen.xyz/products/precision-dutasteride"
              target="_blank"
              className="group relative inline-block mt-16"
            >
              <div className="absolute -inset-4 bg-emerald-500/30 blur-2xl group-hover:bg-emerald-400/50" />
              <div className="relative bg-emerald-500 px-20 py-7 text-2xl tracking-widest text-black group-hover:bg-emerald-400">
                START
              </div>
            </a>
            <div className="mt-4 text-white/40">$150/month</div>
          </div>
        </section>
      </div>
    </div>
  );
}
