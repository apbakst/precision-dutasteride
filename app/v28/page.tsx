'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V28Page() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [showFear, setShowFear] = useState(true);

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
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${showFear ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.15)'} 0%, transparent 50%), #000`
        }}
      />

      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6 bg-black/50 backdrop-blur-xl">
        <Link href="/v28" className="text-sm tracking-[0.5em] text-white/40">ANAGEN</Link>
        <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="bg-emerald-500 px-6 py-2 text-sm tracking-widest text-black hover:bg-emerald-400">
          START
        </a>
      </header>

      {/* Interactive toggle hero */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl">
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setShowFear(true)}
              className={`px-6 py-3 text-sm tracking-widest transition-all ${showFear ? 'bg-red-500/20 border-red-500 text-red-400' : 'bg-white/5 border-white/10 text-white/40'} border`}
            >
              ORAL PILLS
            </button>
            <button
              onClick={() => setShowFear(false)}
              className={`px-6 py-3 text-sm tracking-widest transition-all ${!showFear ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-white/5 border-white/10 text-white/40'} border`}
            >
              PRECISION
            </button>
          </div>

          {showFear ? (
            <>
              <h1 className="text-5xl sm:text-7xl font-extralight leading-tight transition-all">
                Hair growth.
                <span className="block mt-2 text-red-400">But at what cost?</span>
              </h1>
              <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
                <div className="bg-red-500/5 border border-red-500/20 p-6 rounded">
                  <div className="text-red-400 font-medium mb-2">Erectile dysfunction</div>
                  <div className="text-white/40 text-sm">Reported in up to 15% of users</div>
                </div>
                <div className="bg-red-500/5 border border-red-500/20 p-6 rounded">
                  <div className="text-red-400 font-medium mb-2">Decreased libido</div>
                  <div className="text-white/40 text-sm">Loss of sexual desire and drive</div>
                </div>
                <div className="bg-red-500/5 border border-red-500/20 p-6 rounded">
                  <div className="text-red-400 font-medium mb-2">70%+ DHT suppression</div>
                  <div className="text-white/40 text-sm">System-wide hormone disruption</div>
                </div>
                <div className="bg-red-500/5 border border-red-500/20 p-6 rounded">
                  <div className="text-red-400 font-medium mb-2">Potentially permanent</div>
                  <div className="text-white/40 text-sm">Some effects may not reverse</div>
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-5xl sm:text-7xl font-extralight leading-tight transition-all">
                Hair growth.
                <span className="block mt-2 text-emerald-400">And everything else.</span>
              </h1>
              <div className="mt-12 grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
                <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded">
                  <div className="text-emerald-400 font-medium mb-2">2-3x better targeting</div>
                  <div className="text-white/40 text-sm">Goes where it's needed</div>
                </div>
                <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded">
                  <div className="text-emerald-400 font-medium mb-2">~0% systemic DHT change</div>
                  <div className="text-white/40 text-sm">Your hormones stay balanced</div>
                </div>
                <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded">
                  <div className="text-emerald-400 font-medium mb-2">Keep your sex drive</div>
                  <div className="text-white/40 text-sm">No libido compromise</div>
                </div>
                <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded">
                  <div className="text-emerald-400 font-medium mb-2">Peer-reviewed research</div>
                  <div className="text-white/40 text-sm">University of Brasília published</div>
                </div>
              </div>
            </>
          )}

          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            className="group relative inline-block mt-16"
          >
            <div className="absolute -inset-4 bg-emerald-500/30 blur-2xl group-hover:bg-emerald-400/50" />
            <div className="relative bg-emerald-500 px-16 py-6 text-xl tracking-widest text-black group-hover:bg-emerald-400">
              CHOOSE PRECISION — $150/MO
            </div>
          </a>
        </div>
      </section>

      {/* Quote */}
      <section className="relative z-10 border-t border-white/5 px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-2xl font-extralight italic text-white/80">
            "Was terrified of finasteride after reading the horror stories. Precision gives me the results without the fear."
          </blockquote>
          <p className="mt-6 text-white/40">— Daniel S., verified buyer</p>

          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            className="group relative inline-block mt-12"
          >
            <div className="absolute -inset-3 bg-emerald-500/20 blur-xl group-hover:bg-emerald-400/40" />
            <div className="relative border border-emerald-500/50 bg-black/50 px-12 py-5 text-lg tracking-widest text-white group-hover:bg-emerald-500/10">
              GET STARTED
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center">
        <p className="text-[10px] tracking-widest text-white/20">© 2026 ANAGEN BY HAIRDAO • NOT FDA APPROVED</p>
      </footer>
    </div>
  );
}
