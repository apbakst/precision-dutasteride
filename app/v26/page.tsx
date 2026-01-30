'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V26Page() {
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

      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6 bg-black/80 backdrop-blur-xl">
        <Link href="/v26" className="text-sm tracking-[0.5em] text-white/40">ANAGEN</Link>
        <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="text-xs tracking-widest text-emerald-400 border border-emerald-500/30 px-4 py-2 hover:bg-emerald-500/10">
          START →
        </a>
      </header>

      {/* Hero - The Fear */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-20">
        <div className="text-center max-w-4xl">
          <div className="text-xs tracking-[0.5em] text-red-400/70 mb-6">THE PROBLEM WITH ORAL DHT BLOCKERS</div>
          <h1 className="text-5xl sm:text-7xl font-extralight leading-tight">
            You shouldn't have to choose between
            <span className="block mt-2 text-red-400 font-normal">your hair and your sex life.</span>
          </h1>
          <p className="mt-8 text-xl text-white/50 max-w-2xl mx-auto">
            Oral finasteride and dutasteride work—but up to 15% of men experience sexual side effects. Decreased libido. Erectile dysfunction. Some permanent.
          </p>
        </div>
      </section>

      {/* The contrast */}
      <section className="relative z-10 border-t border-white/5 px-4 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Others */}
            <div className="bg-red-500/5 border border-red-500/20 p-8 rounded-lg">
              <div className="text-xs tracking-widest text-red-400/70 mb-4">ORAL DUTASTERIDE</div>
              <div className="text-4xl font-extralight text-red-400 mb-4">70%+</div>
              <div className="text-white/50 mb-6">systemic DHT suppression</div>
              <ul className="space-y-3 text-white/60">
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  Sexual dysfunction risk
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  Decreased libido
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  Potential permanent effects
                </li>
              </ul>
            </div>

            {/* Us */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 p-8 rounded-lg">
              <div className="text-xs tracking-widest text-emerald-400/70 mb-4">PRECISION DUTASTERIDE</div>
              <div className="text-4xl font-extralight text-emerald-400 mb-4">~0%</div>
              <div className="text-white/50 mb-6">systemic DHT change</div>
              <ul className="space-y-3 text-white/60">
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Keep your hair
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Keep your sex drive
                </li>
                <li className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  2-3x better follicular targeting
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The solution */}
      <section className="relative z-10 border-t border-white/5 px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-6">THE SOLUTION</div>
          <h2 className="text-5xl sm:text-6xl font-extralight">
            Hair <span className="text-emerald-400 italic">and</span> everything else.
          </h2>
          <p className="mt-8 text-xl text-white/50">
            Precision Dutasteride targets your follicles, not your bloodstream. Get the hair restoration you want without sacrificing what makes you feel like you.
          </p>

          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            className="group relative inline-block mt-12"
          >
            <div className="absolute -inset-4 bg-emerald-500/30 blur-2xl transition-all group-hover:bg-emerald-400/50" />
            <div className="relative bg-emerald-500 px-16 py-6 text-xl tracking-widest text-black transition-all group-hover:bg-emerald-400">
              START TREATMENT — $150/MO
            </div>
          </a>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative z-10 border-t border-white/5 px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <blockquote className="text-2xl font-extralight italic text-white/80">
            "I tried oral fin for 3 months and had to stop—the sides were real. Switched to Precision and it's been 6 months with zero issues. Hair's coming back and everything else works fine."
          </blockquote>
          <div className="mt-6 flex justify-center gap-1">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="mt-4 text-white/40">— Jake M., verified buyer</p>

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
