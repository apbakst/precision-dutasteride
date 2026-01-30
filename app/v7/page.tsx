import Link from 'next/link';

export const metadata = { title: 'V7 - Brutalist | Precision Dutasteride' };

export default function V7Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header - barely there */}
      <header className="flex items-center justify-between px-6 py-4">
        <Link href="/v7" className="text-xs tracking-[0.3em] text-gray-300">ANAGEN</Link>
        <span className="text-xs text-gray-300">001</span>
      </header>

      {/* THE ENTIRE PAGE IS THE CTA */}
      <main className="flex flex-1 items-center justify-center px-4">
        <a
          href="https://anagen.xyz/products/precision-dutasteride"
          target="_blank"
          className="group relative block w-full max-w-4xl text-center"
        >
          {/* Main CTA */}
          <div className="border-y-4 border-black py-16 transition-colors group-hover:bg-black sm:py-24">
            <div className="text-4xl font-black uppercase tracking-tight text-black transition-colors group-hover:text-white sm:text-7xl md:text-8xl">
              Start Treatment
            </div>
            <div className="mt-6 text-xl tracking-widest text-gray-400 transition-colors group-hover:text-gray-300 sm:text-2xl">
              $150/MONTH
            </div>
          </div>

          {/* Data points - minimal */}
          <div className="mt-12 flex justify-center gap-12 text-gray-400 sm:gap-24">
            <div>
              <div className="text-3xl font-light sm:text-5xl">2-3x</div>
              <div className="mt-1 text-xs tracking-widest">DELIVERY</div>
            </div>
            <div>
              <div className="text-3xl font-light sm:text-5xl">0.03%</div>
              <div className="mt-1 text-xs tracking-widest">DUTASTERIDE</div>
            </div>
            <div>
              <div className="text-3xl font-light sm:text-5xl">6</div>
              <div className="mt-1 text-xs tracking-widest">PATENTS</div>
            </div>
          </div>
        </a>
      </main>

      {/* Single line of copy */}
      <footer className="px-6 py-8 text-center">
        <p className="text-xs tracking-wide text-gray-300">
          Peer-reviewed. Physician-supervised. Results in 3-6 months.
        </p>
      </footer>
    </div>
  );
}
