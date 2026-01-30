'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V24Page() {
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
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6 bg-black/80 backdrop-blur-xl">
        <Link href="/v24" className="text-sm tracking-[0.5em] text-white/40">ANAGEN</Link>
        <span className="text-xs tracking-widest text-emerald-400/60">PRECISION DUTASTERIDE</span>
      </header>

      {/* Split layout sections with alternating CTAs */}

      {/* Section 1 */}
      <section className="relative z-10 min-h-screen grid lg:grid-cols-2">
        <div className="flex items-center justify-center p-8 lg:p-16">
          <div>
            <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-4">FOLLICULAR DELIVERY</div>
            <div className="text-[15vw] lg:text-[10vw] font-extralight leading-none">
              2-3<span className="text-emerald-400">x</span>
            </div>
            <p className="mt-4 text-xl text-white/50">Better targeting</p>
          </div>
        </div>
        <div className="flex items-center justify-center bg-white/[0.02] p-8 lg:p-16 border-l border-white/5">
          <div className="text-center">
            <p className="text-lg text-white/60 max-w-sm">Precision Dutasteride delivers significantly more active ingredient directly to hair follicles.</p>
            <a
              href="https://anagen.xyz/products/precision-dutasteride"
              target="_blank"
              className="group relative inline-block mt-8"
            >
              <div className="absolute -inset-3 bg-emerald-500/30 blur-xl group-hover:bg-emerald-400/50" />
              <div className="relative bg-emerald-500 px-12 py-5 text-lg tracking-widest text-black group-hover:bg-emerald-400">
                START — $150/MO
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="relative z-10 min-h-screen grid lg:grid-cols-2 border-t border-white/5">
        <div className="flex items-center justify-center bg-white/[0.02] p-8 lg:p-16 order-2 lg:order-1 border-r border-white/5">
          <div className="text-center">
            <div className="flex justify-center gap-2 mb-6">
              {[100, 99, 98, 97, 96].map((val, i) => (
                <div key={i} className="w-8 bg-emerald-500/60 rounded-t" style={{ height: `${val}px` }} />
              ))}
            </div>
            <p className="text-white/40 text-sm">Serum DHT levels over 12 weeks</p>
            <a
              href="https://anagen.xyz/products/precision-dutasteride"
              target="_blank"
              className="group relative inline-block mt-8"
            >
              <div className="absolute -inset-3 bg-emerald-500/30 blur-xl group-hover:bg-emerald-400/50" />
              <div className="relative border border-emerald-500 bg-black/50 px-12 py-5 text-lg tracking-widest text-emerald-400 group-hover:bg-emerald-500/20">
                START TREATMENT
              </div>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-8 lg:p-16 order-1 lg:order-2">
          <div>
            <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-4">SYSTEMIC DHT</div>
            <div className="text-[15vw] lg:text-[10vw] font-extralight leading-none">
              ~0<span className="text-emerald-400">%</span>
            </div>
            <p className="mt-4 text-xl text-white/50">Change in serum levels</p>
          </div>
        </div>
      </section>

      {/* Section 3 - Full width quote */}
      <section className="relative z-10 min-h-screen flex items-center justify-center border-t border-white/5 px-8">
        <div className="max-w-4xl text-center">
          <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-8">MAINTENANCE CONFIRMED</div>
          <blockquote className="text-4xl lg:text-5xl font-extralight italic text-white/80 leading-tight">
            "6 months in — hair is <span className="text-emerald-400 not-italic">maintaining</span> perfectly. No sides."
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-2">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="h-6 w-6 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="mt-4 text-white/40">— Marcus T., verified buyer</p>

          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            className="group relative inline-block mt-12"
          >
            <div className="absolute -inset-4 bg-emerald-500/30 blur-2xl group-hover:bg-emerald-400/50" />
            <div className="relative bg-emerald-500 px-16 py-6 text-xl tracking-widest text-black group-hover:bg-emerald-400">
              START TREATMENT — $150/MO
            </div>
          </a>
        </div>
      </section>

      {/* Section 4 - Timeline split */}
      <section className="relative z-10 min-h-screen grid lg:grid-cols-2 border-t border-white/5">
        <div className="flex items-center justify-center p-8 lg:p-16">
          <div>
            <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-4">REGROWTH TIMELINE</div>
            <h2 className="text-5xl font-extralight">Your Journey</h2>
            <div className="mt-12 space-y-6">
              {[
                { m: '0', t: 'Start treatment' },
                { m: '3', t: 'Shedding stops' },
                { m: '6', t: 'Visible new growth' },
                { m: '12', t: 'Full results' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="text-3xl font-light text-emerald-400 w-12">{item.m}</div>
                  <div className="h-px flex-1 bg-white/10" />
                  <div className="text-white/60">{item.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-emerald-500/10 p-8 lg:p-16 border-l border-emerald-500/20">
          <div className="text-center">
            <div className="text-6xl font-extralight text-emerald-400 mb-4">94%</div>
            <p className="text-white/60">Maintenance rate at 12 months</p>
            <a
              href="https://anagen.xyz/products/precision-dutasteride"
              target="_blank"
              className="group relative inline-block mt-12"
            >
              <div className="absolute -inset-4 bg-emerald-500/40 blur-2xl group-hover:bg-emerald-400/60" />
              <div className="relative bg-emerald-500 px-16 py-6 text-xl tracking-widest text-black group-hover:bg-emerald-400">
                START NOW
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
