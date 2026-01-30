'use client';

import Image from 'next/image';

export function PricingV4() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-black px-6 py-24 sm:px-12 sm:py-32">
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/generated/abstract-science.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Start Today
        </span>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Your Hair Restoration Journey Begins
        </h2>

        {/* Main pricing card */}
        <div className="mx-auto mt-12 max-w-md overflow-hidden rounded-3xl border border-emerald-500/30 bg-zinc-900/80 backdrop-blur-xl">
          <div className="border-b border-zinc-800 p-8">
            <div className="text-sm font-semibold uppercase text-emerald-400">Most Popular</div>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <span className="text-6xl font-bold text-white">$80</span>
              <span className="text-xl text-zinc-400">/month</span>
            </div>
            <div className="mt-2 text-zinc-400">Billed annually at $959 (Save 47%)</div>
          </div>

          <div className="p-8">
            <ul className="space-y-4 text-left">
              {[
                'Precision Dutasteride 0.03%',
                'Free physician consultation',
                'Freshly compounded monthly',
                'Free shipping',
                'Cancel anytime',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="https://anagen.xyz/products/precision-dutasteride"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400 py-4 text-center text-lg font-semibold text-white transition-all hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Start Treatment
            </a>

            <p className="mt-4 text-sm text-zinc-500">
              Also available: $150/mo monthly or $101/mo for 6 months
            </p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            FDA-registered pharmacy
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Ships within 14 days
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Secure checkout
          </div>
        </div>
      </div>
    </section>
  );
}
