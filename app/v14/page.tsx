'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function V14Page() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const opacity = Math.max(0, 1 - scrollY / 500);

  return (
    <div ref={containerRef} className="bg-black text-white">
      {/* HERO - Fixed background that fades */}
      <div className="fixed inset-0 z-0" style={{ opacity }}>
        <Image src="/images/generated/v4-hero.png" alt="" fill className="object-cover" priority />
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `
              radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.5) 0%, transparent 50%),
              radial-gradient(circle at ${100 - mousePos.x}% ${100 - mousePos.y}%, rgba(6, 182, 212, 0.3) 0%, transparent 50%),
              linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)
            `
          }}
        />
      </div>

      {/* Header - always visible */}
      <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference">
        <Link href="/v14" className="text-sm tracking-[0.5em] text-white">ANAGEN</Link>
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          className="text-xs tracking-widest text-emerald-400 hover:text-emerald-300"
        >
          SHOP →
        </a>
      </header>

      {/* First viewport - centered CTA */}
      <section className="relative z-10 flex h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-[15vw] font-extralight leading-none tracking-tight">
            <span className="text-white/90">RE</span>
            <span className="italic text-emerald-400">GROW</span>
          </h1>

          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            className="group relative mt-8 inline-block"
          >
            <div className="absolute -inset-4 bg-emerald-500/30 blur-2xl transition-all group-hover:bg-emerald-400/50 group-hover:blur-3xl" />
            <div className="relative border border-white/20 bg-white/5 px-20 py-7 backdrop-blur transition-all group-hover:border-emerald-400/50 group-hover:bg-emerald-500/20">
              <span className="text-2xl tracking-[0.4em] text-white">START</span>
              <span className="ml-4 text-emerald-400">$150</span>
            </div>
          </a>
        </div>
      </section>

      {/* Second section - slides over */}
      <section className="relative z-20 min-h-screen bg-black">
        <div className="mx-auto max-w-6xl px-4 py-32">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden">
              <Image src="/images/generated/v4-science.png" alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-xs tracking-[0.5em] text-emerald-400/70">THE SCIENCE</div>
              <h2 className="mt-4 text-5xl font-extralight">
                Precision
                <span className="block italic text-emerald-400">0.03%</span>
              </h2>
              <p className="mt-6 text-lg text-white/50">
                Two years of research. 60+ delivery systems evaluated. Published in peer-reviewed journals.
              </p>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-4xl font-light text-emerald-400">2-3x</div>
                  <div className="text-xs text-white/30">Higher delivery</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-emerald-400">Lower</div>
                  <div className="text-xs text-white/30">Systemic exposure</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="border-t border-white/10 py-24 text-center">
          <h3 className="text-3xl font-extralight text-white/70">Ready to start?</h3>
          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            className="mt-8 inline-block bg-emerald-500 px-16 py-6 text-xl tracking-widest text-black transition-all hover:bg-emerald-400"
          >
            BEGIN TREATMENT — $150/MO
          </a>
        </div>

        {/* Footer */}
        <footer className="border-t border-white/5 py-8 text-center">
          <p className="text-[10px] tracking-widest text-white/20">
            © 2026 ANAGEN BY HAIRDAO • NOT FDA APPROVED • INDIVIDUAL RESULTS VARY
          </p>
        </footer>
      </section>
    </div>
  );
}
