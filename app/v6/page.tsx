import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title: 'V6 - Futuristic Cyber | Precision Dutasteride' };

export default function V6Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-cyan-500/20 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/v6" className="font-mono text-xl font-bold text-cyan-400">ANAGEN_</Link>
          <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="rounded border border-cyan-500 bg-cyan-500/10 px-5 py-2 font-mono text-sm text-cyan-400 hover:bg-cyan-500/20">
            INITIALIZE →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image src="/images/generated/v6-hero.png" alt="" fill className="object-cover opacity-70" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.03)_50%)] bg-[length:100%_4px]" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center px-6 lg:px-24">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 font-mono text-sm text-cyan-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              SYSTEM ACTIVE
            </div>

            <h1 className="font-mono text-5xl font-bold leading-tight sm:text-7xl">
              <span className="text-cyan-400">PRECISION</span>
              <br />DUTASTERIDE
            </h1>

            <p className="mt-6 text-xl text-gray-400">
              Next-generation follicular targeting. <span className="text-cyan-400">2-3x delivery efficiency.</span> Lower systemic exposure.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-cyan-500/20 pt-10">
              <div><div className="font-mono text-3xl text-cyan-400">60+</div><div className="text-sm text-gray-500">Systems Tested</div></div>
              <div><div className="font-mono text-3xl text-cyan-400">2-3x</div><div className="text-sm text-gray-500">Higher Delivery</div></div>
              <div><div className="font-mono text-3xl text-cyan-400">4.5★</div><div className="text-sm text-gray-500">User Rating</div></div>
            </div>

            <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="mt-10 inline-flex items-center gap-2 bg-cyan-500 px-8 py-4 font-mono font-bold text-black hover:bg-cyan-400">
              START PROTOCOL — $150/MO
            </a>
          </div>
        </div>
      </section>

      {/* Science */}
      <section className="border-t border-cyan-500/20 bg-black px-6 py-24 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 font-mono text-sm text-cyan-400">// TECHNOLOGY</div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded border border-cyan-500/20">
              <Image src="/images/generated/v6-science.png" alt="" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-bold">Follicular Targeting <span className="text-cyan-400">System</span></h2>
              <p className="mt-6 text-gray-400">University of Brasília collaboration. 2 years of R&D. Published in peer-reviewed journals.</p>
              <div className="mt-8 space-y-4">
                {['2-3x higher follicular penetration', 'Lower systemic absorption', '60+ delivery systems evaluated', 'Peer-reviewed research'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-mono text-sm">
                    <span className="text-cyan-400">[✓]</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product */}
      <section className="border-t border-cyan-500/20 bg-gradient-to-b from-black to-cyan-950/20 px-6 py-24 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="relative mx-auto mb-12 aspect-square max-w-md">
            <Image src="/images/generated/v6-product.png" alt="" fill className="object-contain" />
          </div>
          <h2 className="text-4xl font-bold">Precision <span className="text-cyan-400">0.03%</span></h2>
          <p className="mt-4 text-gray-400">Engineered for maximum efficacy. Minimum side effects.</p>
          <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="mt-8 inline-block border border-cyan-500 bg-cyan-500/10 px-10 py-4 font-mono text-cyan-400 hover:bg-cyan-500/20">
            ACQUIRE — FROM $80/MO
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 bg-black px-6 py-12">
        <div className="mx-auto max-w-7xl text-center font-mono text-sm text-gray-500">
          <p>© 2026 ANAGEN BY HAIRDAO</p>
          <p className="mt-2 text-xs">Not FDA-approved. Individual results vary. Men only.</p>
        </div>
      </footer>
    </div>
  );
}
