'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V21Page() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const CTA = ({ variant = 'primary' }: { variant?: 'primary' | 'secondary' }) => (
    <a
      href="https://anagen.xyz/products/precision-dutasteride"
      target="_blank"
      className={`group relative inline-block ${variant === 'secondary' ? 'mt-8' : 'mt-12'}`}
    >
      <div className={`absolute -inset-4 blur-2xl transition-all group-hover:blur-3xl ${variant === 'primary' ? 'bg-emerald-500/30 group-hover:bg-emerald-400/50' : 'bg-emerald-500/20 group-hover:bg-emerald-400/30'}`} />
      <div className={`relative border border-emerald-500/50 backdrop-blur-sm transition-all group-hover:border-emerald-400 group-hover:bg-emerald-500/10 ${variant === 'primary' ? 'px-16 py-6 bg-black/50' : 'px-12 py-4 bg-black/30'}`}>
        <span className={`tracking-[0.3em] text-white ${variant === 'primary' ? 'text-xl' : 'text-lg'}`}>START TREATMENT</span>
        <span className="ml-4 text-emerald-400">$150/mo</span>
      </div>
    </a>
  );

  return (
    <div className="bg-black text-white">
      {/* Fixed reactive gradient */}
      <div
        className="fixed inset-0 z-0 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.2) 0%, transparent 50%), #000`
        }}
      />

      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6 bg-black/50 backdrop-blur-xl">
        <Link href="/v21" className="text-sm tracking-[0.5em] text-white/40">ANAGEN</Link>
        <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="text-xs tracking-widest text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 px-4 py-2 hover:bg-emerald-500/10">
          START →
        </a>
      </header>

      {/* Section 1: 2-3x Targeting + CTA */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-20">
        <div className="text-center">
          <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-8">FOLLICULAR DELIVERY</div>
          <div className="text-[20vw] font-extralight leading-none text-white/90">
            2-3<span className="text-emerald-400">x</span>
          </div>
          <div className="mt-4 text-2xl tracking-widest text-white/50">BETTER TARGETING</div>

          <div className="mt-16 flex items-end justify-center gap-8">
            <div className="text-center">
              <div className="h-24 w-16 bg-white/20 rounded-t" />
              <div className="mt-2 text-xs text-white/40">Generic</div>
            </div>
            <div className="text-center">
              <div className="h-64 w-16 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t" />
              <div className="mt-2 text-xs text-emerald-400">Precision</div>
            </div>
          </div>

          <CTA />
        </div>
      </section>

      {/* Section 2: DHT Safety + CTA */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center border-t border-white/5 px-4">
        <div className="text-center max-w-3xl">
          <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-8">SYSTEMIC DHT</div>
          <div className="text-8xl font-extralight text-white/90 sm:text-9xl">
            ~0<span className="text-emerald-400">%</span>
          </div>
          <div className="mt-4 text-2xl tracking-widest text-white/50">CHANGE</div>

          <div className="mt-16 flex items-center justify-center gap-2">
            {[100, 99, 98, 97, 96].map((val, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 bg-emerald-500/60 rounded-t transition-all" style={{ height: `${val * 1.5}px` }} />
                <div className="mt-2 text-[10px] text-white/30">W{i * 3}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-white/40">Serum DHT remains stable throughout treatment</p>

          <CTA />
        </div>
      </section>

      {/* Section 3: User Quote + CTA */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center border-t border-white/5 px-4">
        <div className="max-w-2xl text-center">
          <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-8">MAINTENANCE CONFIRMED</div>

          <div className="relative">
            <svg className="absolute -left-8 -top-8 h-16 w-16 text-emerald-500/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-3xl font-extralight italic text-white/80 sm:text-4xl">
              6 months in — hair is <span className="text-emerald-400 not-italic">maintaining</span> perfectly. No sides. This actually works.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/40">— Marcus T., verified buyer</span>
          </div>

          <CTA />
        </div>
      </section>

      {/* Section 4: Regrowth Progress + CTA */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center border-t border-white/5 px-4">
        <div className="text-center">
          <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-8">REGROWTH TIMELINE</div>

          <div className="flex items-center gap-8 sm:gap-16">
            {[
              { month: '0', label: 'Start', progress: 0 },
              { month: '3', label: 'Shedding stops', progress: 25 },
              { month: '6', label: 'New growth', progress: 60 },
              { month: '12', label: 'Full results', progress: 100 },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="relative h-48 w-4 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-full"
                    style={{ height: `${item.progress}%` }}
                  />
                </div>
                <div className="mt-4 text-2xl font-light text-white/80">{item.month}</div>
                <div className="text-[10px] tracking-widest text-white/40">MONTH</div>
                <div className="mt-2 text-xs text-emerald-400/70">{item.label}</div>
              </div>
            ))}
          </div>

          <CTA />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 flex min-h-[50vh] flex-col items-center justify-center border-t border-white/5 px-4 py-24">
        <h2 className="text-4xl font-extralight text-white/80 sm:text-5xl mb-4">The data speaks.</h2>
        <p className="text-xl text-white/40 mb-8">Start your journey today.</p>

        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          className="group relative"
        >
          <div className="absolute -inset-4 bg-emerald-500/30 blur-2xl transition-all group-hover:bg-emerald-400/50" />
          <div className="relative bg-emerald-500 px-20 py-7 text-xl tracking-widest text-black transition-all group-hover:bg-emerald-400">
            START TREATMENT — $150/MO
          </div>
        </a>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center">
        <p className="text-[10px] tracking-widest text-white/20">© 2026 ANAGEN BY HAIRDAO</p>
      </footer>
    </div>
  );
}
