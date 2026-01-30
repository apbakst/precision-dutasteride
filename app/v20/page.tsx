'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function V20Page() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);
  const [dhtBars, setDhtBars] = useState([0, 0, 0, 0, 0]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('scroll', handleScroll);

    // Animate DHT bars
    setTimeout(() => setDhtBars([100, 99, 98, 97, 96]), 500);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Fixed reactive gradient */}
      <div
        className="fixed inset-0 z-0 transition-all duration-1000 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)
          `
        }}
      />

      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <Link href="/v20" className="text-sm tracking-[0.5em] text-white/60">ANAGEN</Link>
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          className="text-xs tracking-widest text-emerald-400 hover:text-emerald-300"
        >
          START →
        </a>
      </header>

      {/* Hero - The Big Number */}
      <section className="relative z-10 flex min-h-screen items-center justify-center pt-20">
        <div className="text-center px-4">
          <div className="text-xs tracking-[1em] text-emerald-400/70 mb-6">PRECISION DUTASTERIDE</div>
          <h1 className="text-[25vw] font-extralight leading-none tracking-tight">
            <span className="text-white/90">2-3</span>
            <span className="text-emerald-400">x</span>
          </h1>
          <p className="mt-6 text-2xl tracking-widest text-white/40">BETTER FOLLICULAR TARGETING</p>

          {/* Animated comparison bars */}
          <div className="mt-16 flex items-end justify-center gap-8">
            <div className="text-center">
              <div className="relative h-32 w-20 bg-white/5 rounded overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 bg-white/20 transition-all duration-1000" style={{ height: '33%' }} />
              </div>
              <div className="mt-3 text-sm text-white/40">Generic</div>
              <div className="text-xs text-white/20">Topical</div>
            </div>
            <div className="text-center">
              <div className="relative h-32 w-20 bg-white/5 rounded overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-600 to-emerald-400 transition-all duration-1000" style={{ height: '100%' }} />
              </div>
              <div className="mt-3 text-sm text-emerald-400">Precision</div>
              <div className="text-xs text-emerald-400/50">0.03%</div>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            className="group relative mt-16 inline-block"
          >
            <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl transition-all group-hover:bg-emerald-400/40" />
            <div className="relative border border-emerald-500/50 bg-black/50 px-16 py-6 backdrop-blur-sm transition-all group-hover:border-emerald-400">
              <span className="text-xl tracking-[0.3em] text-white">START</span>
              <span className="ml-4 text-emerald-400">$150/mo</span>
            </div>
          </a>
        </div>
      </section>

      {/* DHT Section */}
      <section className="relative z-10 min-h-screen border-t border-white/5 py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-4">SYSTEMIC SAFETY</div>
            <h2 className="text-6xl font-extralight sm:text-8xl">
              <span className="text-white/90">~0%</span>
            </h2>
            <p className="mt-4 text-xl text-white/40">DHT SUPPRESSION</p>
          </div>

          {/* DHT Graph - Visual */}
          <div className="bg-white/[0.02] border border-white/10 rounded-lg p-8">
            <div className="text-xs tracking-widest text-white/30 mb-6">SERUM DHT LEVELS OVER TIME</div>
            <div className="flex items-end justify-between h-64 gap-6">
              {['Baseline', 'Week 4', 'Week 8', 'Week 12', 'Oral (comparison)'].map((label, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div
                    className={`w-full rounded-t transition-all duration-1000 ${i === 4 ? 'bg-red-500/50' : 'bg-gradient-to-t from-emerald-600 to-emerald-400'}`}
                    style={{ height: `${i === 4 ? 30 : dhtBars[i]}%` }}
                  />
                  <div className="mt-4 text-center">
                    <div className={`text-2xl font-light ${i === 4 ? 'text-red-400/50' : 'text-emerald-400'}`}>
                      {i === 4 ? '30%' : `${dhtBars[i]}%`}
                    </div>
                    <div className="text-[10px] tracking-widest text-white/30 mt-1">{label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center text-sm text-white/40">
              Topical Precision Dutasteride preserves systemic DHT while oral suppresses 70%+
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative z-10 border-t border-white/5 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-8">MAINTENANCE CONFIRMED</div>

          <div className="relative">
            <div className="absolute -left-4 top-0 text-8xl text-emerald-500/10 font-serif">"</div>
            <blockquote className="text-3xl font-extralight italic text-white/80 sm:text-4xl">
              6 months in — hair is <span className="text-emerald-400 not-italic font-normal">maintaining</span> perfectly.
              <br />No sides. This actually works.
            </blockquote>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-white/40">Marcus T. — 6 months on treatment</span>
          </div>
        </div>
      </section>

      {/* Regrowth Timeline */}
      <section className="relative z-10 border-t border-white/5 py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-4">REGROWTH LOADING</div>
            <h2 className="text-4xl font-extralight text-white/80">Your Timeline</h2>
          </div>

          {/* Visual timeline */}
          <div className="relative">
            {/* Progress bar */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-white/10">
              <div className="h-full w-[75%] bg-gradient-to-r from-emerald-600 to-emerald-400" />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[
                { month: 0, title: 'START', desc: 'Begin treatment', progress: '0%', active: true },
                { month: 3, title: 'STABILIZE', desc: 'Shedding stops', progress: '25%', active: true },
                { month: 6, title: 'REGROWTH', desc: 'Visible new hair', progress: '60%', active: true },
                { month: 12, title: 'RESULTS', desc: 'Full density', progress: '100%', active: false },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className={`mx-auto h-4 w-4 rounded-full border-4 ${item.active ? 'border-emerald-400 bg-emerald-400' : 'border-white/20 bg-black'}`} />
                  <div className="mt-6 text-3xl font-light text-white/80">{item.month}</div>
                  <div className="text-[10px] tracking-widest text-white/30">MONTHS</div>
                  <div className="mt-4 text-sm font-medium text-emerald-400">{item.title}</div>
                  <div className="text-xs text-white/40">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 border-t border-white/5 py-24">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-5xl font-extralight text-white/80 mb-4">
            The data is clear.
          </h2>
          <p className="text-xl text-white/40 mb-12">Start your precision journey today.</p>

          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            className="group relative inline-block"
          >
            <div className="absolute -inset-6 bg-emerald-500/30 blur-3xl transition-all group-hover:bg-emerald-400/50" />
            <div className="relative bg-emerald-500 px-20 py-8 text-2xl tracking-widest text-black transition-all group-hover:bg-emerald-400">
              START TREATMENT
            </div>
            <div className="mt-4 text-lg text-white/40">From $80/month</div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center">
        <p className="text-[10px] tracking-widest text-white/20">
          © 2026 ANAGEN BY HAIRDAO • NOT FDA APPROVED • INDIVIDUAL RESULTS VARY
        </p>
      </footer>
    </div>
  );
}
