'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V12Page() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    <div className="bg-black text-white">
      {/* HERO - Full viewport */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        {/* V4/V10 parallax image */}
        <div
          className="absolute inset-0 scale-110"
          style={{ transform: `translateY(${scrollY * 0.4}px) scale(1.1)` }}
        >
          <Image src="/images/generated/v4-lifestyle.png" alt="" fill className="object-cover" priority />
        </div>

        {/* V6 reactive gradient */}
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `
              radial-gradient(ellipse at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.5) 0%, transparent 50%),
              linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.9) 100%)
            `
          }}
        />

        {/* Header */}
        <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6">
          <Link href="/v12" className="text-sm tracking-[0.5em] text-white/40">ANAGEN</Link>
        </header>

        {/* Center content */}
        <div className="relative z-40 text-center">
          <div className="text-xs tracking-[0.5em] text-emerald-400/80">PRECISION DUTASTERIDE 0.03%</div>

          <h1 className="mt-6 text-7xl font-extralight leading-none sm:text-9xl">
            <span className="text-white/90">RESTORE</span>
          </h1>

          {/* Glowing CTA */}
          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            className="group relative mt-12 inline-block"
          >
            <div
              className="absolute -inset-6 opacity-50 blur-3xl transition-all duration-700 group-hover:opacity-80"
              style={{ background: `radial-gradient(circle at center, #10b981 0%, transparent 70%)` }}
            />
            <div className="relative overflow-hidden border border-emerald-500/50 bg-black/50 px-20 py-7 backdrop-blur-sm">
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-emerald-600 to-emerald-500 transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative text-xl tracking-[0.4em] text-white sm:text-2xl">START NOW</span>
            </div>
          </a>

          <div className="mt-6 text-lg text-white/40">From $80/month</div>

          {/* Scroll hint */}
          <div className="mt-20 animate-bounce text-white/20">
            <svg className="mx-auto h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="relative border-y border-white/10 bg-black/90 py-20">
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-16 text-center sm:gap-24">
          {[
            { value: '2-3x', label: 'HIGHER DELIVERY' },
            { value: '60+', label: 'FORMULAS TESTED' },
            { value: '6', label: 'PATENTS FILED' },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-5xl font-extralight text-emerald-400 sm:text-6xl">{item.value}</div>
              <div className="mt-2 text-xs tracking-[0.2em] text-white/30">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Second hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-24">
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${(scrollY - 800) * 0.3}px)` }}
        >
          <Image src="/images/generated/v4-science.png" alt="" fill className="object-cover opacity-60" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" />

        <div className="relative z-10 max-w-2xl px-4 text-center">
          <h2 className="text-5xl font-extralight sm:text-7xl">
            <span className="text-white/80">Science</span>
            <span className="block italic text-emerald-400">Delivered</span>
          </h2>
          <p className="mt-8 text-lg text-white/50">
            Two years of research with the University of Brasília. Published in peer-reviewed journals.
          </p>
          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            className="mt-10 inline-block border border-emerald-500/50 px-12 py-5 text-lg tracking-widest text-emerald-400 transition-all hover:bg-emerald-500/10"
          >
            GET STARTED
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black py-8 text-center">
        <p className="text-[10px] tracking-widest text-white/20">
          © 2026 ANAGEN BY HAIRDAO • NOT FDA APPROVED
        </p>
      </footer>
    </div>
  );
}
