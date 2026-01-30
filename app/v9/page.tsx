import Link from 'next/link';

export const metadata = { title: 'V9 - Typography | Precision Dutasteride' };

export default function V9Page() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0a0a] text-white">
      {/* Subtle header */}
      <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-6">
        <Link href="/v9" className="text-xs tracking-[0.5em] text-white/30">ANAGEN</Link>
        <div className="text-xs tracking-widest text-emerald-500/50">BY HAIRDAO</div>
      </header>

      {/* Giant background text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="whitespace-nowrap text-[30vw] font-black leading-none tracking-tighter text-white/[0.02]">
          GROW GROW GROW
        </div>
      </div>

      {/* Main content - all centered */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 text-center">
        {/* Stacked typography */}
        <div className="space-y-2">
          <div className="text-xs tracking-[1em] text-emerald-400/70">PRECISION</div>
          <h1 className="text-[15vw] font-black leading-[0.85] tracking-tighter sm:text-[12vw]">
            DUTA
            <span className="block text-emerald-400">STERIDE</span>
          </h1>
          <div className="text-xs tracking-[1em] text-white/30">0.03% TOPICAL SOLUTION</div>
        </div>

        {/* CTA - RIGHT IN THE MIDDLE */}
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          className="group mt-16"
        >
          <div className="relative overflow-hidden border border-emerald-500 px-16 py-6 sm:px-24 sm:py-8">
            <div className="absolute inset-0 -translate-x-full bg-emerald-500 transition-transform duration-300 group-hover:translate-x-0" />
            <span className="relative text-xl tracking-[0.3em] text-emerald-400 transition-colors group-hover:text-black sm:text-2xl">
              START — $150
            </span>
          </div>
        </a>

        {/* Single stat line */}
        <div className="mt-12 flex items-center gap-4 text-white/20">
          <span className="text-2xl font-light">2-3x</span>
          <span className="h-px w-8 bg-current" />
          <span className="text-xs tracking-widest">HIGHER FOLLICULAR DELIVERY THAN GENERIC TOPICALS</span>
        </div>
      </main>

      {/* Bottom stats */}
      <footer className="relative z-10 grid grid-cols-3 border-t border-white/5 text-center">
        {[
          { num: '60+', label: 'FORMULAS' },
          { num: '6', label: 'PATENTS' },
          { num: '2YR', label: 'RESEARCH' },
        ].map((item, i) => (
          <div key={i} className="border-r border-white/5 py-8 last:border-0">
            <div className="text-3xl font-light text-emerald-400/50">{item.num}</div>
            <div className="mt-1 text-[10px] tracking-widest text-white/30">{item.label}</div>
          </div>
        ))}
      </footer>
    </div>
  );
}
