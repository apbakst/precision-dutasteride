'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V16Page() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('mousemove', handleMove);
    setTimeout(() => setAnimated(true), 500);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Reactive gradient background */}
      <div
        className="fixed inset-0 transition-all duration-700"
        style={{
          background: `
            radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
            linear-gradient(to bottom, #000 0%, #0a0a0a 100%)
          `
        }}
      />

      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6">
        <Link href="/v16" className="text-sm tracking-[0.5em] text-white/40">ANAGEN</Link>
        <span className="text-xs tracking-widest text-emerald-400/60">THE DATA</span>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-24">
        {/* Hero stat - DHT Graph */}
        <div className="w-full max-w-4xl">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-4">SERUM DHT LEVELS</div>
            <h1 className="text-4xl font-extralight sm:text-6xl">
              No Systemic
              <span className="block italic text-emerald-400">Impact</span>
            </h1>
          </div>

          {/* DHT Graph */}
          <div className="relative bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
            <div className="flex items-end justify-between h-64 gap-4">
              {/* Baseline */}
              <div className="flex-1 flex flex-col items-center">
                <div className="text-xs text-white/40 mb-2">BASELINE</div>
                <div
                  className="w-full bg-gradient-to-t from-emerald-500/80 to-emerald-400/80 rounded-t transition-all duration-1000"
                  style={{ height: animated ? '100%' : '0%' }}
                />
                <div className="mt-2 text-2xl font-light text-emerald-400">100%</div>
              </div>
              {/* Week 4 */}
              <div className="flex-1 flex flex-col items-center">
                <div className="text-xs text-white/40 mb-2">WEEK 4</div>
                <div
                  className="w-full bg-gradient-to-t from-emerald-500/80 to-emerald-400/80 rounded-t transition-all duration-1000 delay-200"
                  style={{ height: animated ? '98%' : '0%' }}
                />
                <div className="mt-2 text-2xl font-light text-emerald-400">98%</div>
              </div>
              {/* Week 8 */}
              <div className="flex-1 flex flex-col items-center">
                <div className="text-xs text-white/40 mb-2">WEEK 8</div>
                <div
                  className="w-full bg-gradient-to-t from-emerald-500/80 to-emerald-400/80 rounded-t transition-all duration-1000 delay-300"
                  style={{ height: animated ? '97%' : '0%' }}
                />
                <div className="mt-2 text-2xl font-light text-emerald-400">97%</div>
              </div>
              {/* Week 12 */}
              <div className="flex-1 flex flex-col items-center">
                <div className="text-xs text-white/40 mb-2">WEEK 12</div>
                <div
                  className="w-full bg-gradient-to-t from-emerald-500/80 to-emerald-400/80 rounded-t transition-all duration-1000 delay-500"
                  style={{ height: animated ? '96%' : '0%' }}
                />
                <div className="mt-2 text-2xl font-light text-emerald-400">96%</div>
              </div>
              {/* Oral comparison */}
              <div className="flex-1 flex flex-col items-center opacity-40">
                <div className="text-xs text-white/40 mb-2">ORAL</div>
                <div
                  className="w-full bg-gradient-to-t from-red-500/50 to-red-400/50 rounded-t transition-all duration-1000 delay-700"
                  style={{ height: animated ? '30%' : '0%' }}
                />
                <div className="mt-2 text-2xl font-light text-red-400">30%</div>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-white/40">
              Topical Precision Dutasteride vs Oral (serum DHT suppression)
            </div>
          </div>

          {/* Key insight */}
          <div className="mt-8 text-center">
            <p className="text-lg text-white/60">
              Precision targets follicles, <span className="text-emerald-400">not your bloodstream</span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          className="group relative mt-16"
        >
          <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl transition-all group-hover:bg-emerald-400/40" />
          <div className="relative border border-emerald-500/50 bg-black/50 px-16 py-6 backdrop-blur-sm transition-all group-hover:border-emerald-400 group-hover:bg-emerald-500/10">
            <span className="text-xl tracking-[0.3em] text-white">START TREATMENT</span>
            <span className="ml-4 text-emerald-400">$150/mo</span>
          </div>
        </a>
      </div>

      {/* Bottom line */}
      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
    </div>
  );
}
