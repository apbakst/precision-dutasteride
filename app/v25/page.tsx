'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V25Page() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Inline CTA component that appears between sections
  const InlineCTA = ({ text = "START TREATMENT", price = "$150/mo" }) => (
    <div className="py-16 flex justify-center">
      <a
        href="https://anagen.xyz/products/precision-dutasteride"
        target="_blank"
        className="group relative"
      >
        <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl transition-all group-hover:bg-emerald-400/40" />
        <div className="relative flex items-center gap-4 border border-emerald-500/50 bg-black/50 px-12 py-5 backdrop-blur-sm transition-all group-hover:border-emerald-400 group-hover:bg-emerald-500/10">
          <span className="text-lg tracking-[0.2em] text-white">{text}</span>
          <span className="text-emerald-400">{price}</span>
        </div>
      </a>
    </div>
  );

  return (
    <div className="bg-black text-white">
      {/* Reactive gradient */}
      <div
        className="fixed inset-0 z-0 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.15) 0%, transparent 50%), #000`
        }}
      />

      {/* Floating top banner CTA */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-emerald-500 py-2 text-center">
        <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="text-sm tracking-widest text-black hover:underline">
          START TREATMENT — $150/MO →
        </a>
      </div>

      {/* Header */}
      <header className="fixed left-0 right-0 top-10 z-40 flex items-center justify-between px-8 py-4 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <Link href="/v25" className="text-sm tracking-[0.5em] text-white/40">ANAGEN</Link>
        <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="text-xs tracking-widest text-emerald-400 hover:text-emerald-300">
          GET STARTED →
        </a>
      </header>

      {/* Hero - Big stat */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-24">
        <div className="text-center">
          <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-6">PRECISION DUTASTERIDE</div>
          <div className="text-[20vw] font-extralight leading-none">
            2-3<span className="text-emerald-400">x</span>
          </div>
          <p className="mt-4 text-2xl text-white/50">Better follicular targeting</p>
          <p className="mt-6 max-w-lg mx-auto text-white/40">More active ingredient where you need it. Less where you don't.</p>
        </div>
        <InlineCTA />
      </section>

      {/* DHT Section */}
      <section className="relative z-10 border-t border-white/5 px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-4">SYSTEMIC SAFETY</div>
              <div className="text-7xl font-extralight">
                ~0<span className="text-emerald-400">%</span>
              </div>
              <p className="mt-2 text-xl text-white/50">DHT Change</p>
              <p className="mt-6 text-white/40">Oral dutasteride suppresses 70%+ of serum DHT. Topical Precision keeps your levels stable while targeting follicles.</p>
            </div>
            <div className="flex items-end justify-center gap-3">
              {[
                { label: 'Baseline', val: 100 },
                { label: 'Week 4', val: 99 },
                { label: 'Week 8', val: 98 },
                { label: 'Week 12', val: 97 },
                { label: 'Oral', val: 30, danger: true },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div
                    className={`w-12 rounded-t ${item.danger ? 'bg-red-500/40' : 'bg-emerald-500/60'}`}
                    style={{ height: `${item.val * 1.2}px` }}
                  />
                  <div className="mt-2 text-[9px] text-white/30">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <InlineCTA text="GET STARTED" />
      </section>

      {/* Quote Section */}
      <section className="relative z-10 border-t border-white/5 px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-8">MAINTENANCE CONFIRMED</div>
          <blockquote className="text-3xl lg:text-4xl font-extralight italic text-white/80">
            "6 months in — hair is <span className="text-emerald-400 not-italic">maintaining</span> perfectly. No sides. This actually works."
          </blockquote>
          <div className="mt-8 flex justify-center gap-1">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="mt-4 text-white/40">— Marcus T., 6 months on treatment</p>
        </div>
        <InlineCTA />
      </section>

      {/* Timeline Section */}
      <section className="relative z-10 border-t border-white/5 px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-4">REGROWTH TIMELINE</div>
            <h2 className="text-4xl font-extralight">What to Expect</h2>
          </div>

          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-1 bg-white/10">
              <div className="h-full w-3/4 bg-gradient-to-r from-emerald-600 to-emerald-400" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                { m: 0, t: 'Start', d: 'Begin treatment' },
                { m: 3, t: 'Stabilize', d: 'Shedding stops' },
                { m: 6, t: 'Growth', d: 'Visible results' },
                { m: 12, t: 'Results', d: 'Full density' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className={`mx-auto h-3 w-3 rounded-full ${i < 3 ? 'bg-emerald-400' : 'bg-white/20'}`} />
                  <div className="mt-8 text-3xl font-light text-white/80">{item.m}</div>
                  <div className="text-[10px] tracking-widest text-white/30">MONTHS</div>
                  <div className="mt-4 text-emerald-400 font-medium">{item.t}</div>
                  <div className="text-xs text-white/40">{item.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <InlineCTA text="BEGIN YOUR JOURNEY" />
      </section>

      {/* Final full-width CTA */}
      <section className="relative z-10 border-t border-white/5 bg-emerald-500/10 px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-extralight text-white/80 mb-4">Ready to start?</h2>
          <p className="text-white/50 mb-8">Join thousands who've chosen precision over generic.</p>
          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            className="group relative inline-block"
          >
            <div className="absolute -inset-6 bg-emerald-500/40 blur-3xl group-hover:bg-emerald-400/60" />
            <div className="relative bg-emerald-500 px-20 py-7 text-2xl tracking-widest text-black group-hover:bg-emerald-400">
              START TREATMENT
            </div>
          </a>
          <p className="mt-6 text-white/40">From $80/month billed annually</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center bg-black">
        <p className="text-[10px] tracking-widest text-white/20">© 2026 ANAGEN BY HAIRDAO • NOT FDA APPROVED • INDIVIDUAL RESULTS VARY</p>
      </footer>
    </div>
  );
}
