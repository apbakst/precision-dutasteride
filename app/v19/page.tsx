'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}{suffix}</>;
}

export default function V19Page() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('mousemove', handleMove);
    setTimeout(() => setLoaded(true), 100);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      {/* Reactive gradient */}
      <div
        className="fixed inset-0 transition-all duration-1000"
        style={{
          background: `
            radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 40%)
          `
        }}
      />

      {/* Grid lines */}
      <div className="fixed inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between px-8 py-6">
        <Link href="/v19" className="text-sm tracking-[0.5em] text-white/40">ANAGEN</Link>
        <span className="text-xs tracking-widest text-emerald-400/60">DATA DASHBOARD</span>
      </header>

      {/* Main dashboard */}
      <div className="relative z-10 px-4 py-8">
        <div className="mx-auto max-w-6xl">
          {/* Hero metric */}
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-4">FOLLICULAR TARGETING</div>
            <div className="text-[20vw] font-extralight leading-none">
              {loaded && <AnimatedCounter end={2} />}-{loaded && <AnimatedCounter end={3} />}
              <span className="text-emerald-400">x</span>
            </div>
            <div className="text-xl tracking-widest text-white/40 mt-4">BETTER THAN GENERIC TOPICALS</div>
          </div>

          {/* Data cards grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-16">
            {/* DHT Card */}
            <div className="border border-white/10 bg-white/[0.02] p-6 backdrop-blur">
              <div className="text-xs tracking-widest text-white/40 mb-4">SERUM DHT CHANGE</div>
              <div className="text-5xl font-extralight text-emerald-400">
                ~{loaded && <AnimatedCounter end={0} />}%
              </div>
              <div className="mt-4 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[4%] bg-emerald-500 rounded-full" />
              </div>
              <div className="mt-2 text-xs text-white/30">No systemic suppression</div>
            </div>

            {/* Formulas Card */}
            <div className="border border-white/10 bg-white/[0.02] p-6 backdrop-blur">
              <div className="text-xs tracking-widest text-white/40 mb-4">FORMULAS TESTED</div>
              <div className="text-5xl font-extralight text-cyan-400">
                {loaded && <AnimatedCounter end={60} />}+
              </div>
              <div className="mt-4 flex gap-1">
                {Array(12).fill(0).map((_, i) => (
                  <div key={i} className="h-8 flex-1 bg-cyan-500/30 rounded-sm" style={{ opacity: 0.3 + (i * 0.05) }} />
                ))}
              </div>
              <div className="mt-2 text-xs text-white/30">University of Brasília research</div>
            </div>

            {/* Patents Card */}
            <div className="border border-white/10 bg-white/[0.02] p-6 backdrop-blur">
              <div className="text-xs tracking-widest text-white/40 mb-4">PATENTS FILED</div>
              <div className="text-5xl font-extralight text-amber-400">
                {loaded && <AnimatedCounter end={6} />}
              </div>
              <div className="mt-4 flex gap-2">
                {Array(6).fill(0).map((_, i) => (
                  <div key={i} className="h-8 w-8 rounded bg-amber-500/30" />
                ))}
              </div>
              <div className="mt-2 text-xs text-white/30">Novel delivery technology</div>
            </div>

            {/* Maintenance Card */}
            <div className="border border-white/10 bg-white/[0.02] p-6 backdrop-blur">
              <div className="text-xs tracking-widest text-white/40 mb-4">MAINTENANCE RATE</div>
              <div className="text-5xl font-extralight text-emerald-400">
                {loaded && <AnimatedCounter end={94} />}%
              </div>
              <div className="mt-4 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000" style={{ width: loaded ? '94%' : '0%' }} />
              </div>
              <div className="mt-2 text-xs text-white/30">At 12 months</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="border border-emerald-500/20 bg-emerald-500/5 p-8 mb-16">
            <div className="flex items-start gap-6">
              <div className="text-6xl text-emerald-500/30">"</div>
              <div>
                <p className="text-xl text-white/80">
                  6 months in — hair is <span className="text-emerald-400 font-medium">maintaining</span> perfectly. No sides. This actually works.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-white/40 text-sm">— Marcus T., verified buyer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Regrowth timeline */}
          <div className="mb-16">
            <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-8 text-center">REGROWTH TIMELINE</div>
            <div className="flex items-center justify-between max-w-3xl mx-auto">
              {[
                { month: 0, event: 'Start', active: true },
                { month: 3, event: 'Shedding stops', active: true },
                { month: 6, event: 'Visible regrowth', active: true },
                { month: 12, event: 'Full results', active: false },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`h-4 w-4 rounded-full ${item.active ? 'bg-emerald-400' : 'bg-white/20'}`} />
                  <div className="mt-2 text-2xl font-light">{item.month}</div>
                  <div className="text-[10px] tracking-widest text-white/30">MONTH</div>
                  <div className="mt-2 text-xs text-emerald-400/70">{item.event}</div>
                </div>
              ))}
            </div>
            <div className="max-w-3xl mx-auto mt-4 h-1 bg-white/10 rounded-full">
              <div className="h-full w-3/4 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://anagen.xyz/products/precision-dutasteride"
              target="_blank"
              className="group relative inline-block"
            >
              <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl transition-all group-hover:bg-emerald-400/40" />
              <div className="relative bg-emerald-500 px-20 py-7 text-xl tracking-widest text-black transition-all group-hover:bg-emerald-400">
                START TREATMENT — $150/MO
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 text-center mt-16">
        <p className="text-[10px] tracking-widest text-white/20">© 2026 ANAGEN BY HAIRDAO • NOT FDA APPROVED</p>
      </footer>
    </div>
  );
}
