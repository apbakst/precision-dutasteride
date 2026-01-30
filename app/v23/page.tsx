'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V23Page() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    const handleScroll = () => {
      const section = Math.floor(window.scrollY / window.innerHeight);
      setCurrentSection(section);
    };
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const FloatingCTA = () => (
    <a
      href="https://anagen.xyz/products/precision-dutasteride"
      target="_blank"
      className="group relative inline-block"
    >
      <div className="absolute -inset-3 bg-emerald-500/30 blur-xl transition-all group-hover:bg-emerald-400/50" />
      <div className="relative border border-emerald-500/50 bg-black/60 px-12 py-5 backdrop-blur-sm transition-all group-hover:border-emerald-400 group-hover:bg-emerald-500/20">
        <span className="text-lg tracking-[0.2em] text-white">START</span>
        <span className="ml-3 text-emerald-400">$150</span>
      </div>
    </a>
  );

  return (
    <div className="bg-black text-white">
      {/* Reactive gradient */}
      <div
        className="fixed inset-0 z-0 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.2) 0%, transparent 50%), #000`
        }}
      />

      {/* Fixed side CTA */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          className="group flex flex-col items-center gap-4"
        >
          <div className="h-32 w-1 bg-white/10 rounded-full overflow-hidden">
            <div className="w-full bg-emerald-500 rounded-full transition-all" style={{ height: `${Math.min(100, (currentSection + 1) * 25)}%` }} />
          </div>
          <div className="rotate-90 origin-center whitespace-nowrap text-xs tracking-widest text-emerald-400 group-hover:text-emerald-300">
            START →
          </div>
        </a>
      </div>

      {/* Header with CTA */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <Link href="/v23" className="text-sm tracking-[0.5em] text-white/40">ANAGEN</Link>
        <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="bg-emerald-500 px-6 py-2 text-sm tracking-widest text-black hover:bg-emerald-400">
          START — $150
        </a>
      </header>

      {/* Section 1: 2-3x */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-20">
        <div className="text-center">
          <div className="text-[22vw] font-extralight leading-none">
            2-3<span className="text-emerald-400">x</span>
          </div>
          <p className="mt-4 text-xl tracking-widest text-white/50">FOLLICULAR TARGETING</p>
          <p className="mt-8 max-w-md mx-auto text-white/40">Precision Dutasteride delivers 2-3x more active ingredient directly to hair follicles compared to generic topicals.</p>
          <div className="mt-12">
            <FloatingCTA />
          </div>
        </div>
      </section>

      {/* Section 2: DHT */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center border-t border-white/5 px-4">
        <div className="text-center">
          <div className="text-[22vw] font-extralight leading-none">
            ~0<span className="text-emerald-400">%</span>
          </div>
          <p className="mt-4 text-xl tracking-widest text-white/50">SYSTEMIC DHT CHANGE</p>
          <p className="mt-8 max-w-md mx-auto text-white/40">Unlike oral dutasteride which suppresses 70%+ of serum DHT, topical Precision keeps DHT levels stable.</p>
          <div className="mt-12">
            <FloatingCTA />
          </div>
        </div>
      </section>

      {/* Section 3: Quote */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center border-t border-white/5 px-4">
        <div className="max-w-2xl text-center">
          <div className="text-8xl text-emerald-500/20 font-serif">"</div>
          <blockquote className="text-3xl font-extralight italic text-white/80 -mt-8">
            6 months in — hair is maintaining perfectly. No sides. This actually works.
          </blockquote>
          <div className="mt-6 flex justify-center">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="mt-4 text-sm text-white/40">— Marcus T., verified buyer</p>
          <div className="mt-12">
            <FloatingCTA />
          </div>
        </div>
      </section>

      {/* Section 4: Timeline */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center border-t border-white/5 px-4">
        <div className="text-center">
          <h2 className="text-5xl font-extralight mb-4">Your Timeline</h2>
          <p className="text-white/40 mb-16">Results you can expect</p>

          <div className="flex items-center gap-4 sm:gap-8">
            {[
              { m: '0', l: 'Start' },
              { m: '3', l: 'Stabilize' },
              { m: '6', l: 'Growth' },
              { m: '12', l: 'Results' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-extralight text-emerald-400">{item.m}</div>
                <div className="text-[10px] tracking-widest text-white/30 mt-1">MONTHS</div>
                <div className="text-sm text-white/60 mt-4">{item.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <a
              href="https://anagen.xyz/products/precision-dutasteride"
              target="_blank"
              className="group relative inline-block"
            >
              <div className="absolute -inset-4 bg-emerald-500/40 blur-2xl transition-all group-hover:bg-emerald-400/60" />
              <div className="relative bg-emerald-500 px-16 py-6 text-xl tracking-widest text-black transition-all group-hover:bg-emerald-400">
                START TREATMENT — $150/MO
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center">
        <p className="text-[10px] tracking-widest text-white/20">© 2026 ANAGEN BY HAIRDAO</p>
      </footer>
    </div>
  );
}
