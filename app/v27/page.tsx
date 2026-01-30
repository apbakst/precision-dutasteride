'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V27Page() {
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
      {/* Reactive gradient */}
      <div
        className="fixed inset-0 z-0 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.12) 0%, transparent 50%), #000`
        }}
      />

      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6">
        <Link href="/v27" className="text-sm tracking-[0.5em] text-white/40">ANAGEN</Link>
      </header>

      {/* Hero - Direct and provocative */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl sm:text-8xl font-extralight leading-none">
            Keep your hair.
            <span className="block mt-4 text-emerald-400">Keep your manhood.</span>
          </h1>
          <p className="mt-12 text-xl text-white/50 max-w-xl mx-auto">
            Oral DHT blockers can kill your sex drive. Precision Dutasteride doesn't.
          </p>

          <Link
            href="/v27/checkout"
            className="group relative inline-block mt-12"
          >
            <div className="absolute -inset-4 bg-emerald-500/30 blur-2xl group-hover:bg-emerald-400/50" />
            <div className="relative bg-emerald-500 px-16 py-6 text-xl tracking-widest text-black group-hover:bg-emerald-400">
              START — $150/MO
            </div>
          </Link>
        </div>
      </section>

      {/* The fear stats */}
      <section className="relative z-10 border-t border-white/5 px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.5em] text-red-400/70 mb-4">THE RISK WITH ORAL TREATMENT</div>
            <h2 className="text-4xl font-extralight">What they don't tell you</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-extralight text-red-400">15%</div>
              <div className="mt-2 text-white/40">experience sexual side effects</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-extralight text-red-400">70%</div>
              <div className="mt-2 text-white/40">DHT suppressed systemically</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-extralight text-red-400">???</div>
              <div className="mt-2 text-white/40">may be permanent</div>
            </div>
          </div>
        </div>
      </section>

      {/* The relief */}
      <section className="relative z-10 border-t border-white/5 px-4 py-24 bg-emerald-500/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-4">PRECISION DUTASTERIDE</div>
            <h2 className="text-4xl font-extralight">A better way</h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-extralight text-emerald-400">~0%</div>
              <div className="mt-2 text-white/40">systemic DHT change</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-extralight text-emerald-400">2-3x</div>
              <div className="mt-2 text-white/40">better follicular targeting</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-extralight text-emerald-400">0</div>
              <div className="mt-2 text-white/40">compromises</div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/v27/checkout"
              className="group relative inline-block"
            >
              <div className="absolute -inset-4 bg-emerald-500/30 blur-2xl group-hover:bg-emerald-400/50" />
              <div className="relative bg-emerald-500 px-16 py-6 text-xl tracking-widest text-black group-hover:bg-emerald-400">
                GET STARTED
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative z-10 border-t border-white/5 px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-6xl text-emerald-500/20 font-serif">"</div>
          <blockquote className="text-2xl font-extralight italic text-white/80 -mt-4">
            Finally, a treatment that doesn't make me choose. Hair's filling in, libido's normal, everything works. Why isn't everyone doing this?
          </blockquote>
          <p className="mt-6 text-white/40">— Ryan K., 4 months on treatment</p>

          <Link
            href="/v27/checkout"
            className="group relative inline-block mt-12"
          >
            <div className="absolute -inset-3 bg-emerald-500/20 blur-xl group-hover:bg-emerald-400/40" />
            <div className="relative border border-emerald-500/50 bg-black/50 px-12 py-5 text-lg tracking-widest text-white group-hover:bg-emerald-500/10">
              START TREATMENT — $150/MO
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center">
        <p className="text-[10px] tracking-widest text-white/20">© 2026 ANAGEN BY HAIRDAO • NOT FDA APPROVED</p>
      </footer>
    </div>
  );
}
