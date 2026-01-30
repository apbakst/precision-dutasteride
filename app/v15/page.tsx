'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V15Page() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [time, setTime] = useState(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('mousemove', handleMove);

    // Animated gradient
    const interval = setInterval(() => {
      setTime(t => t + 1);
    }, 50);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      clearInterval(interval);
    };
  }, []);

  const gradientAngle = (time * 0.5) % 360;

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Animated mesh gradient background */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `
            conic-gradient(from ${gradientAngle}deg at ${mousePos.x}% ${mousePos.y}%,
              rgba(16, 185, 129, 0.4) 0deg,
              rgba(6, 182, 212, 0.3) 90deg,
              rgba(16, 185, 129, 0.2) 180deg,
              rgba(6, 182, 212, 0.4) 270deg,
              rgba(16, 185, 129, 0.4) 360deg),
            radial-gradient(circle at 20% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
            linear-gradient(to bottom, #000 0%, #0a0a0a 100%)
          `
        }}
      />

      {/* Subtle image overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image src="/images/generated/v4-hero.png" alt="" fill className="object-cover mix-blend-luminosity" />
      </div>

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Header */}
      <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6">
        <Link href="/v15" className="group flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-emerald-400 transition-all group-hover:scale-125" />
          <span className="text-sm tracking-[0.5em] text-white/50">ANAGEN</span>
        </Link>
        <div className="text-[10px] tracking-[0.3em] text-white/30">PRECISION DUTASTERIDE</div>
      </header>

      {/* Giant background text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="text-[25vw] font-black leading-none tracking-tighter text-white/[0.02]"
          style={{ transform: `translate(${(mousePos.x - 50) * 0.1}px, ${(mousePos.y - 50) * 0.1}px)` }}
        >
          HAIR
        </div>
      </div>

      {/* Main content - Ultimate centered CTA */}
      <div className="absolute inset-0 z-40 flex flex-col items-center justify-center px-4">
        {/* Floating eyebrow */}
        <div
          className="mb-6 text-xs tracking-[0.5em] text-emerald-400/80 transition-transform duration-300"
          style={{ transform: `translateY(${Math.sin(time * 0.05) * 5}px)` }}
        >
          0.03% TOPICAL SOLUTION
        </div>

        {/* Main headline */}
        <h1 className="text-center text-6xl font-extralight leading-none tracking-tight text-white sm:text-8xl md:text-9xl">
          <span
            className="block transition-transform duration-500"
            style={{ transform: `translateX(${(mousePos.x - 50) * 0.05}px)` }}
          >
            THE
          </span>
          <span
            className="block font-normal italic text-emerald-400 transition-transform duration-500"
            style={{ transform: `translateX(${(mousePos.x - 50) * -0.05}px)` }}
          >
            FUTURE
          </span>
        </h1>

        {/* THE ULTIMATE CTA */}
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          className="group relative mt-12"
        >
          {/* Multi-layer glow */}
          <div
            className="absolute -inset-8 rounded-full opacity-50 blur-3xl transition-all duration-500 group-hover:opacity-80 group-hover:scale-110"
            style={{
              background: `conic-gradient(from ${gradientAngle}deg, #10b981, #06b6d4, #10b981)`
            }}
          />
          <div className="absolute -inset-4 rounded-lg bg-emerald-500/20 blur-xl transition-all group-hover:bg-emerald-400/40" />

          {/* Button with animated border */}
          <div className="relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-50"
              style={{
                background: `linear-gradient(${gradientAngle}deg, #10b981, #06b6d4, #10b981)`,
                padding: '2px',
              }}
            />
            <div className="relative m-[2px] bg-black/80 px-16 py-8 backdrop-blur-sm transition-all group-hover:bg-black/60 sm:px-24 sm:py-10">
              <div className="text-2xl tracking-[0.4em] text-white sm:text-4xl">START TREATMENT</div>
              <div className="mt-3 text-center text-lg tracking-widest text-emerald-400">$150/MONTH</div>
            </div>
          </div>
        </a>

        {/* Animated stat line */}
        <div className="mt-16 flex items-center gap-6 text-white/30">
          <span className="text-3xl font-extralight text-emerald-400/70">2-3x</span>
          <span className="h-px w-16 bg-gradient-to-r from-emerald-500/50 to-transparent" />
          <span className="text-sm tracking-widest">HIGHER FOLLICULAR DELIVERY</span>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute bottom-8 left-8 z-30 flex items-center gap-4">
        <div className="h-px w-12 bg-emerald-500/30" />
        <span className="text-[10px] tracking-widest text-white/20">HAIRDAO</span>
      </div>

      <div className="absolute bottom-8 right-8 z-30 flex items-center gap-4">
        <span className="text-[10px] tracking-widest text-white/20">UNIVERSITY OF BRASÍLIA</span>
        <div className="h-px w-12 bg-cyan-500/30" />
      </div>

      {/* Animated bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 z-30 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(16, 185, 129, ${0.3 + Math.sin(time * 0.05) * 0.2}), transparent)`
        }}
      />
    </div>
  );
}
