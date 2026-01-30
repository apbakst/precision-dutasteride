import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title: 'V10 - Luxury Premium | Precision Dutasteride' };

export default function V10Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-amber-900/20 bg-[#0a0a0a]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
          <Link href="/v10" className="text-xl tracking-[0.4em] text-amber-200">ANAGEN</Link>
          <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="border border-amber-500 px-6 py-2 text-sm tracking-widest text-amber-400 hover:bg-amber-500 hover:text-black">
            RESERVE
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image src="/images/generated/v10-hero.png" alt="" fill className="object-cover opacity-80" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-screen flex-col items-center justify-end px-8 pb-32 text-center">
          <div className="mb-6 text-sm tracking-[0.3em] text-amber-400">PRECISION DUTASTERIDE</div>
          <h1 className="max-w-3xl text-5xl font-light leading-tight sm:text-7xl">
            The Art of
            <span className="block font-normal italic text-amber-300">Excellence</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-gray-400">
            Where cutting-edge science meets uncompromising luxury. For those who accept nothing less than the best.
          </p>
          <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="mt-12 bg-gradient-to-r from-amber-600 to-amber-500 px-12 py-5 text-lg tracking-wider text-black hover:from-amber-500 hover:to-amber-400">
            DISCOVER — $150/MO
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-amber-900/20 bg-[#0a0a0a] px-8 py-16">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-16 text-center">
          {[
            { stat: '2-3x', label: 'Superior Delivery' },
            { stat: '60+', label: 'Formulations Tested' },
            { stat: '6', label: 'Patents Pending' },
            { stat: '4.5★', label: 'Client Rating' },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-4xl font-light text-amber-400">{item.stat}</div>
              <div className="mt-2 text-sm tracking-wider text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Product */}
      <section className="bg-[#0a0a0a] px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative aspect-square">
              <Image src="/images/generated/v10-product.png" alt="" fill className="object-contain" />
            </div>
            <div>
              <div className="text-sm tracking-[0.3em] text-amber-400">THE FORMULA</div>
              <h2 className="mt-4 text-4xl font-light">Precision <span className="italic text-amber-300">0.03%</span></h2>
              <p className="mt-6 text-gray-400">
                Two years of research with the University of Brasília. Sixty delivery systems evaluated. One clear winner.
              </p>
              <ul className="mt-8 space-y-4">
                {['2-3x higher follicular concentration', 'Significantly lower systemic exposure', 'Published peer-reviewed research'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-300">
                    <span className="h-px w-6 bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="bg-[#0f0f0f] px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image src="/images/generated/v10-lifestyle.png" alt="" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image src="/images/generated/v10-abstract.png" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#0a0a0a] px-8 py-24">
        <div className="mx-auto max-w-xl text-center">
          <div className="text-sm tracking-[0.3em] text-amber-400">MEMBERSHIP</div>
          <h2 className="mt-4 text-4xl font-light">Join the <span className="italic text-amber-300">Elite</span></h2>
          <div className="mt-12 border border-amber-900/30 bg-gradient-to-b from-amber-900/10 to-transparent p-12">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-5xl font-light text-amber-300">$80</span>
              <span className="text-gray-500">/month</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">Billed annually at $959</p>
            <ul className="mt-8 space-y-3 text-left">
              {['Precision Dutasteride 0.03%', 'Private physician consultation', 'Priority shipping', 'Concierge support'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <svg className="h-5 w-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                  {item}
                </li>
              ))}
            </ul>
            <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="mt-8 block w-full bg-gradient-to-r from-amber-600 to-amber-500 py-4 text-center tracking-wider text-black hover:from-amber-500 hover:to-amber-400">
              BEGIN YOUR JOURNEY
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-900/20 bg-[#0a0a0a] px-8 py-12">
        <div className="mx-auto max-w-7xl text-center">
          <div className="text-sm tracking-[0.4em] text-amber-200/50">ANAGEN</div>
          <p className="mt-4 text-xs text-gray-600">© 2026 Anagen by HairDAO. Not FDA-approved. Individual results vary.</p>
        </div>
      </footer>
    </div>
  );
}
