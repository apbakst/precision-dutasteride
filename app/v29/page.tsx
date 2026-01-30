'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V29Page() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Reactive gradient */}
      <div
        className="fixed inset-0 z-0 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), #000`
        }}
      />

      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6">
        <Link href="/v29" className="text-sm tracking-[0.5em] text-white/40">ANAGEN</Link>
      </header>

      {/* Hero - Striking question */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl sm:text-7xl font-extralight leading-tight">
            Would you risk
            <span className="block text-red-400 mt-2">erectile dysfunction</span>
            <span className="block mt-2">for hair?</span>
          </h1>
          <p className="mt-8 text-xl text-white/50">
            Neither would we.
          </p>

          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            className="group relative inline-block mt-12"
          >
            <div className="absolute -inset-4 bg-emerald-500/30 blur-2xl group-hover:bg-emerald-400/50" />
            <div className="relative bg-emerald-500 px-16 py-6 text-xl tracking-widest text-black group-hover:bg-emerald-400">
              TRY PRECISION
            </div>
          </a>
        </div>
      </section>

      {/* The problem scroll section */}
      <section className="relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 py-24">
          <div className="text-xs tracking-[0.5em] text-red-400/70 mb-8 text-center">ORAL DHT BLOCKERS</div>

          <div className="space-y-6">
            {[
              { stat: '15%', text: 'of men on oral finasteride report sexual side effects' },
              { stat: '70%', text: 'of your body\'s DHT gets suppressed systemically' },
              { stat: '∞', text: 'Reddit threads about "Post-Finasteride Syndrome"' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-8 p-6 bg-red-500/5 border border-red-500/10 rounded">
                <div className="text-5xl font-extralight text-red-400 w-32 shrink-0 text-right">{item.stat}</div>
                <div className="text-lg text-white/60">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The solution */}
      <section className="relative z-10 border-t border-white/5 bg-emerald-500/5">
        <div className="max-w-4xl mx-auto px-4 py-24">
          <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-8 text-center">PRECISION DUTASTERIDE</div>

          <div className="space-y-6">
            {[
              { stat: '~0%', text: 'change in systemic DHT — your hormones stay yours' },
              { stat: '2-3x', text: 'more active ingredient delivered to hair follicles' },
              { stat: '100%', text: 'of users who want to keep hair AND sexual function' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-8 p-6 bg-emerald-500/5 border border-emerald-500/10 rounded">
                <div className="text-5xl font-extralight text-emerald-400 w-32 shrink-0 text-right">{item.stat}</div>
                <div className="text-lg text-white/60">{item.text}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://anagen.xyz/products/precision-dutasteride"
              target="_blank"
              className="group relative inline-block"
            >
              <div className="absolute -inset-4 bg-emerald-500/30 blur-2xl group-hover:bg-emerald-400/50" />
              <div className="relative bg-emerald-500 px-16 py-6 text-xl tracking-widest text-black group-hover:bg-emerald-400">
                START TREATMENT — $150/MO
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Quote with fear/relief arc */}
      <section className="relative z-10 border-t border-white/5 px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-lg">
              <div className="text-red-400 text-sm tracking-widest mb-4">BEFORE</div>
              <p className="text-lg text-white/60 italic">
                "I was losing my hair but terrified to take finasteride. Read too many horror stories about guys who couldn't get it up anymore."
              </p>
            </div>
            <div className="bg-emerald-500/5 border border-emerald-500/20 p-8 rounded-lg">
              <div className="text-emerald-400 text-sm tracking-widest mb-4">AFTER 6 MONTHS</div>
              <p className="text-lg text-white/60 italic">
                "Hair's coming back. Sex life is great. Should've started sooner. Precision was exactly what I needed."
              </p>
            </div>
          </div>
          <p className="text-center mt-6 text-white/40">— Chris L., verified buyer</p>

          <div className="mt-12 text-center">
            <a
              href="https://anagen.xyz/products/precision-dutasteride"
              target="_blank"
              className="group relative inline-block"
            >
              <div className="absolute -inset-3 bg-emerald-500/20 blur-xl group-hover:bg-emerald-400/40" />
              <div className="relative border border-emerald-500/50 bg-black/50 px-12 py-5 text-lg tracking-widest text-white group-hover:bg-emerald-500/10">
                GET STARTED
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center">
        <p className="text-[10px] tracking-widest text-white/20">© 2026 ANAGEN BY HAIRDAO • NOT FDA APPROVED</p>
      </footer>
    </div>
  );
}
