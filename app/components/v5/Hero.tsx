'use client';

import Image from 'next/image';

export function HeroV5() {
  return (
    <section className="relative bg-white pt-24">
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-100 px-4 py-2">
              <svg className="h-4 w-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-emerald-700">Clinically Proven</span>
            </div>

            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-6xl">
              Hair regrowth,
              <span className="text-emerald-600"> reimagined.</span>
            </h1>

            <p className="mt-6 text-xl leading-relaxed text-gray-600">
              Precision Dutasteride targets hair follicles with 2-3x more efficacy than
              generic topicals. Developed with University of Brasília over 2 years.
            </p>

            {/* Inline stats */}
            <div className="mt-8 flex items-center gap-6 border-l-4 border-emerald-500 pl-6">
              <div>
                <div className="text-3xl font-bold text-gray-900">60+</div>
                <div className="text-sm text-gray-500">Systems tested</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">2-3x</div>
                <div className="text-sm text-gray-500">Better delivery</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">4.5★</div>
                <div className="text-sm text-gray-500">Trustpilot</div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://anagen.xyz/products/precision-dutasteride"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-xl"
              >
                Start Treatment — $150/mo
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border-2 border-gray-200 px-8 py-4 text-base font-semibold text-gray-900 transition-all hover:border-gray-300 hover:bg-gray-50"
              >
                How It Works
              </a>
            </div>
          </div>

          {/* Image grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image
                  src="/images/generated/hero-lifestyle.png"
                  alt="Confident man"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-3xl bg-emerald-100">
                <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-700">2-3x</div>
                  <div className="mt-2 text-sm text-emerald-600">Higher follicular delivery</div>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-3xl">
                <Image
                  src="/images/generated/hero-product.png"
                  alt="Product"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image
                  src="/images/generated/trust-doctor.png"
                  alt="Doctor"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
