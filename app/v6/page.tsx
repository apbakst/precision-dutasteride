'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V6Page() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-60 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #10b981 0%, transparent 50%),
                       radial-gradient(circle at ${100 - mousePos.x}% ${100 - mousePos.y}%, #06b6d4 0%, transparent 50%),
                       linear-gradient(180deg, #000 0%, #0a0a0a 100%)`
        }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      {/* Header - minimal */}
      <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6">
        <Link href="/v6" className="text-lg tracking-[0.5em] text-white/50 hover:text-white">ANAGEN</Link>
        <div className="text-xs tracking-widest text-emerald-400/70">PRECISION DUTASTERIDE</div>
      </header>

      {/* THE CTA - DEAD CENTER */}
      <div className="absolute inset-0 z-40 flex items-center justify-center">
        <div className="text-center">
          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            className="group relative inline-block"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 rounded-full bg-emerald-500/30 blur-2xl transition-all group-hover:bg-emerald-400/50 group-hover:blur-3xl" />

            {/* Button */}
            <div className="relative border-2 border-emerald-400 bg-black/50 px-20 py-8 backdrop-blur-sm transition-all group-hover:border-emerald-300 group-hover:bg-emerald-500/20">
              <div className="text-3xl font-light tracking-[0.3em] text-white sm:text-5xl">
                START TREATMENT
              </div>
              <div className="mt-4 text-lg tracking-widest text-emerald-400">$150/MONTH</div>
            </div>
          </a>

          {/* Subtext below CTA */}
          <p className="mt-12 max-w-md text-sm text-white/40">
            2-3x higher follicular delivery. Peer-reviewed research. Zero compromises.
          </p>
        </div>
      </div>

      {/* Corner stats */}
      <div className="absolute bottom-8 left-8 z-30 text-white/30">
        <div className="text-5xl font-light text-emerald-400/50">2-3x</div>
        <div className="text-xs tracking-widest">MORE EFFECTIVE</div>
      </div>

      <div className="absolute bottom-8 right-8 z-30 text-right text-white/30">
        <div className="text-5xl font-light text-cyan-400/50">60+</div>
        <div className="text-xs tracking-widest">SYSTEMS TESTED</div>
      </div>

      {/* Floating text */}
      <div className="absolute left-1/2 top-1/4 z-20 -translate-x-1/2 text-center">
        <h1 className="text-[12vw] font-extralight leading-none tracking-tight text-white/5">
          GROW
        </h1>
      </div>

      {/* Footer line */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
    </div>
  );
}
