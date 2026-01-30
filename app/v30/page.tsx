'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V30Page() {
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
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), #000`
        }}
      />

      {/* Sticky CTA */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          className="group relative block"
        >
          <div className="absolute -inset-4 bg-emerald-500/40 blur-2xl" />
          <div className="relative flex items-center gap-4 bg-emerald-500 px-8 py-4 text-black">
            <span className="font-medium tracking-widest">HAIR + EVERYTHING ELSE</span>
            <span className="text-emerald-900">$150/mo</span>
          </div>
        </a>
      </div>

      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6">
        <Link href="/v30" className="text-sm tracking-[0.5em] text-white/40">ANAGEN</Link>
      </header>

      {/* Section 1: The Big Question */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <div className="text-xs tracking-[0.5em] text-white/40 mb-8">LET'S BE HONEST</div>
          <h1 className="text-5xl sm:text-7xl font-extralight leading-tight">
            You've heard the stories.
          </h1>
          <p className="mt-8 text-2xl text-white/50">
            Guy takes finasteride. Loses his sex drive. <span className="text-red-400">Permanently.</span>
          </p>
          <p className="mt-4 text-xl text-white/40">
            It's rare. But it's real. And it's terrifying.
          </p>
        </div>
      </section>

      {/* Section 2: The Fear */}
      <section className="relative z-10 border-t border-red-500/10 bg-red-500/5 px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs tracking-[0.5em] text-red-400/70 mb-8">THE ORAL DHT BLOCKER GAMBLE</div>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-6xl font-extralight text-red-400">ED</div>
              <div className="mt-2 text-white/40">Erectile dysfunction</div>
            </div>
            <div>
              <div className="text-6xl font-extralight text-red-400">↓</div>
              <div className="mt-2 text-white/40">Decreased libido</div>
            </div>
            <div>
              <div className="text-6xl font-extralight text-red-400">?</div>
              <div className="mt-2 text-white/40">Potentially permanent</div>
            </div>
          </div>

          <p className="mt-12 text-lg text-white/50">
            Oral finasteride and dutasteride suppress 70%+ of your body's DHT. Your whole body. Not just your scalp.
          </p>
        </div>
      </section>

      {/* Section 3: The Relief */}
      <section className="relative z-10 border-t border-emerald-500/10 px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-8">WHAT IF THERE WAS ANOTHER WAY?</div>

          <h2 className="text-5xl sm:text-6xl font-extralight">
            Same ingredient.
            <span className="block text-emerald-400 mt-2">Different delivery.</span>
          </h2>

          <p className="mt-8 text-xl text-white/50">
            Precision Dutasteride is topical. It targets your hair follicles with 2-3x better delivery—and leaves the rest of your body alone.
          </p>

          <div className="mt-12 inline-block bg-emerald-500/10 border border-emerald-500/20 px-8 py-6 rounded-lg">
            <div className="text-5xl font-extralight text-emerald-400">~0%</div>
            <div className="mt-2 text-white/50">change in systemic DHT</div>
          </div>
        </div>
      </section>

      {/* Section 4: The Promise */}
      <section className="relative z-10 border-t border-white/5 bg-emerald-500/5 px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-extralight">
            Keep your <span className="text-emerald-400">hair</span>.
            <span className="block mt-2">Keep your <span className="text-emerald-400">confidence</span>.</span>
            <span className="block mt-2">Keep <span className="text-emerald-400">everything</span>.</span>
          </h2>

          <div className="mt-16 flex flex-wrap justify-center gap-4">
            {['Hair growth', 'Sex drive', 'Performance', 'Libido', 'You'].map((item, i) => (
              <div key={i} className="bg-emerald-500/10 border border-emerald-500/20 px-6 py-3 rounded-full text-emerald-400">
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative z-10 border-t border-white/5 px-4 py-24 pb-32">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="h-6 w-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-2xl font-extralight italic text-white/80">
            "My girlfriend noticed my hair filling in before I did. And yes—everything else still works perfectly. Best decision I made."
          </blockquote>
          <p className="mt-6 text-white/40">— Alex T., 8 months on Precision</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 pb-24 text-center">
        <p className="text-[10px] tracking-widest text-white/20">© 2026 ANAGEN BY HAIRDAO • NOT FDA APPROVED • INDIVIDUAL RESULTS VARY</p>
      </footer>
    </div>
  );
}
