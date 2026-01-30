'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V33Page() {
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
      {/* Hero - Full bleed with centered message */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/images/generated/v4-lifestyle.png" alt="" fill className="object-cover opacity-40" priority />
          <div
            className="absolute inset-0 transition-all duration-700"
            style={{
              background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.4) 0%, transparent 50%),
                           linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)`
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="text-8xl sm:text-9xl md:text-[12rem] font-extralight leading-none">
            <span className="text-emerald-400">2-3</span>x
          </div>
          <div className="text-xl sm:text-2xl tracking-[0.3em] text-white/50 mt-6">
            BETTER. TARGETED. SAFE.
          </div>

          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            className="group relative inline-block mt-16"
          >
            <div className="absolute -inset-4 bg-emerald-500/30 blur-2xl group-hover:bg-emerald-400/50" />
            <div className="relative border border-emerald-500 bg-black/50 px-16 py-6 backdrop-blur group-hover:bg-emerald-500/20">
              <span className="text-xl tracking-[0.3em] text-white">START</span>
            </div>
          </a>
        </div>
      </section>

      {/* Visual data section */}
      <section className="relative py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square">
              <Image src="/images/generated/v4-science.png" alt="" fill className="object-cover rounded-lg opacity-60" />
            </div>
            <div className="space-y-12">
              <div>
                <div className="text-6xl font-extralight text-emerald-400">~0%</div>
                <div className="text-white/40 mt-2">systemic DHT change</div>
              </div>
              <div>
                <div className="text-6xl font-extralight text-white/80">60+</div>
                <div className="text-white/40 mt-2">formulas tested</div>
              </div>
              <div>
                <div className="text-6xl font-extralight text-emerald-400">6</div>
                <div className="text-white/40 mt-2">patents filed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 border-t border-white/5 text-center">
        <div className="text-4xl font-extralight mb-8">Hair + everything else.</div>
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          className="inline-block bg-emerald-500 px-16 py-6 text-xl tracking-widest text-black hover:bg-emerald-400"
        >
          $150/MONTH
        </a>
      </section>
    </div>
  );
}
