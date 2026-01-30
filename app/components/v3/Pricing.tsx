'use client';

export function PricingV3() {
  return (
    <section className="bg-[#FAF8F5] px-6 py-24 sm:px-12 sm:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-amber-700">
            Simple Pricing
          </span>
          <h2 className="mt-4 font-serif text-4xl font-light text-stone-900 sm:text-5xl">
            Start your transformation
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Physician consultation included. Cancel anytime.
          </p>
        </div>

        {/* Single featured plan */}
        <div className="mx-auto max-w-lg border-2 border-amber-300 bg-white p-10 shadow-lg">
          <div className="mb-6 text-center">
            <div className="text-sm font-medium uppercase tracking-widest text-amber-700">
              Most Popular
            </div>
            <div className="mt-4 font-serif text-5xl font-light text-stone-900">
              $80<span className="text-2xl text-stone-500">/mo</span>
            </div>
            <div className="mt-2 text-stone-500">
              Billed annually at $959 (Save 47%)
            </div>
          </div>

          <div className="my-8 h-px bg-stone-200" />

          <ul className="mb-8 space-y-4">
            {[
              'Precision Dutasteride 0.03%',
              'Free physician consultation',
              'Freshly compounded monthly',
              'Free shipping',
              'Cancel anytime',
              'Results in 3-6 months',
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-stone-700">
                <svg className="h-5 w-5 flex-shrink-0 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            className="block w-full bg-stone-900 py-4 text-center font-medium text-white transition-all hover:bg-stone-800"
          >
            Start Treatment
          </a>

          <p className="mt-4 text-center text-sm text-stone-500">
            Also available: $150/mo monthly or $101/mo for 6 months
          </p>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-stone-500">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            FDA-registered pharmacy
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Ships within 14 days
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Secure checkout
          </div>
        </div>
      </div>
    </section>
  );
}
