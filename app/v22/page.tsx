'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V22Page() {
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
      {/* Fixed reactive gradient */}
      <div
        className="fixed inset-0 z-0 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), #000`
        }}
      />

      {/* STICKY CTA - Always visible */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          className="group relative block"
        >
          <div className="absolute -inset-4 bg-emerald-500/40 blur-2xl transition-all group-hover:bg-emerald-400/60" />
          <div className="relative flex items-center gap-4 bg-emerald-500 px-10 py-4 text-black transition-all group-hover:bg-emerald-400">
            <span className="text-lg font-medium tracking-widest">START TREATMENT</span>
            <span className="text-emerald-900">$150/mo</span>
          </div>
        </a>
      </div>

      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6">
        <Link href="/v22" className="text-sm tracking-[0.5em] text-white/40">ANAGEN</Link>
      </header>

      {/* Section 1: Hero 2-3x */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-24">
        <div className="text-center">
          <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-6">PRECISION DUTASTERIDE</div>
          <div className="text-[18vw] font-extralight leading-none">
            2-3<span className="text-emerald-400">x</span>
          </div>
          <p className="mt-6 text-2xl text-white/50">Better follicular targeting than generic topicals</p>

          <div className="mt-16 flex items-end justify-center gap-12">
            <div className="text-center">
              <div className="h-20 w-20 bg-white/10 rounded" />
              <div className="mt-3 text-white/30">Generic</div>
            </div>
            <div className="text-center">
              <div className="h-52 w-20 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded" />
              <div className="mt-3 text-emerald-400">Precision</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: DHT */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center border-t border-white/5 px-4 pb-24">
        <div className="text-center">
          <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-6">SYSTEMIC IMPACT</div>
          <div className="text-[18vw] font-extralight leading-none">
            ~0<span className="text-emerald-400">%</span>
          </div>
          <p className="mt-6 text-2xl text-white/50">DHT suppression — stays local, not systemic</p>

          <div className="mt-16 grid grid-cols-5 gap-4 max-w-lg mx-auto">
            {['Baseline', 'Wk 4', 'Wk 8', 'Wk 12', 'Oral'].map((label, i) => (
              <div key={i} className="text-center">
                <div className={`h-32 rounded ${i === 4 ? 'bg-red-500/30' : 'bg-emerald-500/60'}`} style={{ height: i === 4 ? '40px' : `${130 - i * 2}px` }} />
                <div className="mt-2 text-[10px] text-white/30">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Quote */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center border-t border-white/5 px-4 pb-24">
        <div className="max-w-3xl text-center">
          <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-8">REAL RESULTS</div>
          <blockquote className="text-4xl font-extralight italic text-white/80 sm:text-5xl leading-tight">
            "6 months in — hair is <span className="text-emerald-400 not-italic">maintaining</span> perfectly."
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-2">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="h-6 w-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="mt-4 text-white/40">— Marcus T., 6 months on treatment</p>
        </div>
      </section>

      {/* Section 4: Timeline */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center border-t border-white/5 px-4 pb-32">
        <div className="text-center">
          <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-8">YOUR JOURNEY</div>
          <h2 className="text-5xl font-extralight mb-16">Regrowth Timeline</h2>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute top-6 left-0 right-0 h-1 bg-white/10">
              <div className="h-full w-3/4 bg-gradient-to-r from-emerald-600 to-emerald-400" />
            </div>
            <div className="grid grid-cols-4 gap-8">
              {[
                { m: 0, t: 'Start', d: 'Begin treatment' },
                { m: 3, t: 'Stabilize', d: 'Shedding stops' },
                { m: 6, t: 'Growth', d: 'Visible results' },
                { m: 12, t: 'Results', d: 'Full density' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className={`mx-auto h-3 w-3 rounded-full ${i < 3 ? 'bg-emerald-400' : 'bg-white/20'}`} />
                  <div className="mt-6 text-3xl font-light">{item.m}</div>
                  <div className="text-[10px] tracking-widest text-white/30">MONTHS</div>
                  <div className="mt-4 text-emerald-400">{item.t}</div>
                  <div className="text-xs text-white/40">{item.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 pb-24 text-center">
        <p className="text-[10px] tracking-widest text-white/20">© 2026 ANAGEN BY HAIRDAO • NOT FDA APPROVED</p>
      </footer>
    </div>
  );
}
