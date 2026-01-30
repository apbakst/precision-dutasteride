'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V18Page() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('mousemove', handleMove);

    const interval = setInterval(() => {
      setActiveMetric(m => (m + 1) % 4);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      clearInterval(interval);
    };
  }, []);

  const metrics = [
    { value: '2-3x', label: 'FOLLICULAR DELIVERY', detail: 'vs generic topicals' },
    { value: '~0%', label: 'DHT SUPPRESSION', detail: 'systemic levels unchanged' },
    { value: '60+', label: 'FORMULAS TESTED', detail: 'University of Brasília' },
    { value: '94%', label: 'MAINTENANCE RATE', detail: 'at 12 months' },
  ];

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image src="/images/generated/v4-hero.png" alt="" fill className="object-cover opacity-30" priority />
      </div>

      {/* Reactive gradient */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          background: `
            radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
            linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.9) 100%)
          `
        }}
      />

      {/* Header */}
      <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6">
        <Link href="/v18" className="text-sm tracking-[0.5em] text-white/40">ANAGEN</Link>
        <span className="text-xs tracking-widest text-emerald-400/60">PRECISION DATA</span>
      </header>

      {/* Main content - Data cards */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        {/* Rotating metric display */}
        <div className="text-center mb-8">
          <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-4">{metrics[activeMetric].label}</div>
          <div className="text-[15vw] font-extralight leading-none text-white transition-all duration-500">
            {metrics[activeMetric].value.split('').map((char, i) => (
              <span key={i} className={char === 'x' || char === '%' ? 'text-emerald-400' : ''}>{char}</span>
            ))}
          </div>
          <div className="mt-4 text-lg text-white/40">{metrics[activeMetric].detail}</div>
        </div>

        {/* Metric selector dots */}
        <div className="flex gap-3 mb-12">
          {metrics.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveMetric(i)}
              className={`h-2 w-2 rounded-full transition-all ${i === activeMetric ? 'bg-emerald-400 w-8' : 'bg-white/20'}`}
            />
          ))}
        </div>

        {/* Data grid */}
        <div className="grid grid-cols-4 gap-4 max-w-4xl w-full mb-12">
          {metrics.map((m, i) => (
            <div
              key={i}
              onClick={() => setActiveMetric(i)}
              className={`cursor-pointer border p-4 text-center transition-all ${
                i === activeMetric
                  ? 'border-emerald-500/50 bg-emerald-500/10'
                  : 'border-white/10 bg-white/5 hover:border-white/20'
              }`}
            >
              <div className={`text-2xl font-light ${i === activeMetric ? 'text-emerald-400' : 'text-white/60'}`}>
                {m.value}
              </div>
              <div className="text-[8px] tracking-widest text-white/30 mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* User testimonial */}
        <div className="max-w-xl text-center mb-12 border-t border-white/10 pt-8">
          <p className="text-lg italic text-white/60">
            "6 months in — hair is <span className="text-emerald-400 not-italic font-medium">maintaining</span> perfectly. No sides."
          </p>
          <p className="mt-2 text-sm text-white/30">— Verified buyer, 6mo treatment</p>
        </div>

        {/* CTA */}
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          className="group relative"
        >
          <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl transition-all group-hover:bg-emerald-400/40" />
          <div className="relative border border-emerald-500/50 bg-black/50 px-16 py-6 backdrop-blur-sm transition-all group-hover:border-emerald-400 group-hover:bg-emerald-500/10">
            <span className="text-xl tracking-[0.3em] text-white">START TREATMENT</span>
            <span className="ml-4 text-emerald-400">$150/mo</span>
          </div>
        </a>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
    </div>
  );
}
