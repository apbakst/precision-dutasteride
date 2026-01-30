'use client';

import Image from 'next/image';

export function HeroV4() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/generated/hero-lifestyle.png"
          alt="Confident man with healthy hair"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-6 sm:px-12 lg:px-24">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-sm">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-white">4.5/5 from 1,000+ patients</span>
          </div>

          <h1 className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Regrow Your Hair.
            <span className="block text-emerald-400">Scientifically.</span>
          </h1>

          <p className="mt-8 max-w-lg text-xl leading-relaxed text-gray-300">
            Precision Dutasteride delivers <span className="font-semibold text-white">2-3x more drug directly to your follicles</span> with
            significantly lower systemic exposure than oral alternatives.
          </p>

          {/* Stats */}
          <div className="mt-10 flex gap-12">
            <div>
              <div className="text-4xl font-bold text-emerald-400">60+</div>
              <div className="text-sm text-gray-400">Systems Tested</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400">2-3x</div>
              <div className="text-sm text-gray-400">Higher Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400">Lower</div>
              <div className="text-sm text-gray-400">Side Effects</div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://anagen.xyz/products/precision-dutasteride"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-10 py-5 text-lg font-semibold text-white transition-all hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              Start Treatment — $150/mo
            </a>
            <a
              href="#science"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10"
            >
              See the Research
            </a>
          </div>
        </div>
      </div>

      {/* Floating product image */}
      <div className="absolute bottom-0 right-0 hidden h-[600px] w-[400px] lg:block">
        <Image
          src="/images/generated/hero-product.png"
          alt="Precision Dutasteride Serum"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
