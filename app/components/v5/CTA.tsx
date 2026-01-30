'use client';

import Image from 'next/image';

export function CTAV5() {
  return (
    <section className="bg-gray-900 px-6 py-24 sm:px-12 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold text-white sm:text-5xl">
              Ready to start your hair restoration journey?
            </h2>
            <p className="mt-6 text-xl text-gray-400">
              Join 1,000+ patients who trust Precision Dutasteride.
            </p>

            <div className="mt-10 rounded-3xl bg-white/10 p-8">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-white">$80</span>
                <span className="text-xl text-gray-400">/month</span>
              </div>
              <p className="mt-2 text-gray-400">Billed annually. Or $150/mo monthly.</p>

              <ul className="mt-6 space-y-3">
                {['Precision Dutasteride 0.03%', 'Physician consultation included', 'Free shipping', 'Cancel anytime'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://anagen.xyz/products/precision-dutasteride"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full rounded-full bg-emerald-500 py-4 text-center text-lg font-semibold text-white hover:bg-emerald-400"
              >
                Start Treatment
              </a>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src="/images/generated/hero-lifestyle.png"
              alt="Happy customer"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
