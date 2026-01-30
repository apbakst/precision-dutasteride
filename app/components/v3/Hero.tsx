'use client';

export function HeroV3() {
  return (
    <section className="relative min-h-screen bg-[#FAF8F5]">
      {/* Split layout */}
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left - Content */}
        <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16 xl:px-24">
          {/* Social proof badge */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-10 w-10 rounded-full border-2 border-[#FAF8F5] bg-gradient-to-br from-amber-200 to-amber-400"
                />
              ))}
            </div>
            <div className="text-sm">
              <span className="font-semibold text-stone-900">1,000+ patients</span>
              <span className="text-stone-500"> trust Anagen</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl font-light leading-[1.1] tracking-tight text-stone-900 sm:text-6xl lg:text-7xl">
            Your hair loss,
            <br />
            <span className="font-normal italic text-amber-700">precisely</span> treated.
          </h1>

          <p className="mt-8 max-w-md text-lg leading-relaxed text-stone-600">
            Precision Dutasteride targets your hair follicles with 2-3x more efficacy
            than generic topicals — with lower systemic exposure.
          </p>

          {/* Stats row */}
          <div className="mt-10 flex gap-8 border-y border-stone-200 py-6">
            <div>
              <div className="text-3xl font-semibold text-stone-900">2-3x</div>
              <div className="text-sm text-stone-500">Higher delivery</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-stone-900">60+</div>
              <div className="text-sm text-stone-500">Systems tested</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-stone-900">4.5★</div>
              <div className="text-sm text-stone-500">Trustpilot</div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://anagen.xyz/products/precision-dutasteride"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-none bg-stone-900 px-8 py-4 text-base font-medium text-white transition-all hover:bg-stone-800"
            >
              Start Treatment — $150/mo
            </a>
            <a
              href="#science"
              className="inline-flex items-center justify-center border border-stone-300 bg-transparent px-8 py-4 text-base font-medium text-stone-900 transition-all hover:bg-stone-100"
            >
              How It Works
            </a>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-sm text-stone-500">
            FDA-registered pharmacy • Physician consultation included • Free shipping
          </p>
        </div>

        {/* Right - Visual */}
        <div className="relative hidden bg-gradient-to-br from-amber-50 to-amber-100 lg:block">
          {/* Large quote */}
          <div className="absolute inset-0 flex items-center justify-center p-16">
            <div className="max-w-md">
              <svg className="mb-6 h-12 w-12 text-amber-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="font-serif text-2xl font-light italic leading-relaxed text-stone-700">
                &ldquo;My stylist noticed significant volume increase after 6 months.
                The science behind this product is what sold me.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-amber-200" />
                <div>
                  <div className="font-medium text-stone-900">Verified Customer</div>
                  <div className="flex items-center gap-1 text-sm text-stone-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1">via Trustpilot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full bg-amber-200/50" />
          <div className="absolute top-16 right-16 h-24 w-24 rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
}
