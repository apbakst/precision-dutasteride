'use client';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,113,227,0.04),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium text-emerald-700">
                Peer-Reviewed Research
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The Most Advanced
              <span className="block text-accent">Topical Dutasteride</span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-muted sm:text-xl">
              2-3x higher follicular delivery. Lower systemic exposure. Developed
              through a 2-year research collaboration with the University of
              Brasília.
            </p>

            {/* Key stats inline */}
            <div className="mb-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">60+</span>
                <span className="text-sm text-muted">
                  Systems
                  <br />
                  Tested
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">2-3x</span>
                <span className="text-sm text-muted">
                  Higher
                  <br />
                  Delivery
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">0.03%</span>
                <span className="text-sm text-muted">
                  Precision
                  <br />
                  Concentration
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://anagen.xyz/products/precision-dutasteride"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-base font-semibold text-white transition-all hover:bg-gray-800 hover:shadow-xl"
              >
                Start Treatment — $150/mo
              </a>
              <a
                href="#science"
                className="inline-flex items-center justify-center rounded-full border border-border bg-white px-8 py-4 text-base font-semibold text-foreground transition-all hover:border-gray-300 hover:shadow-md"
              >
                View Research
              </a>
            </div>

            {/* Trust signal */}
            <p className="mt-6 text-sm text-muted">
              <span className="font-medium text-foreground">4.5/5</span> on
              Trustpilot • 1000+ prescriptions delivered
            </p>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-md">
              {/* Product representation */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl">
                <div className="flex h-full flex-col items-center justify-center p-8">
                  <div className="mb-4 h-48 w-32 rounded-2xl bg-white shadow-lg" />
                  <span className="text-lg font-semibold text-gray-600">
                    Precision Dutasteride
                  </span>
                  <span className="text-sm text-gray-500">0.03% Serum</span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-4 top-8 rounded-xl bg-white p-3 shadow-lg">
                <div className="text-xs font-medium text-muted">
                  Follicular Targeting
                </div>
                <div className="text-lg font-bold text-accent">2-3x Higher</div>
              </div>

              <div className="absolute -right-4 bottom-16 rounded-xl bg-white p-3 shadow-lg">
                <div className="text-xs font-medium text-muted">
                  Systemic Exposure
                </div>
                <div className="text-lg font-bold text-emerald-600">
                  Significantly Lower
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
