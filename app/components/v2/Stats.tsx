'use client';

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.05),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Big number highlight */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium text-emerald-700">University of Brasília Research</span>
            </div>

            <div className="mt-8">
              <div className="text-8xl font-bold tracking-tight text-foreground sm:text-9xl">
                60<span className="text-emerald-500">+</span>
              </div>
              <p className="mt-4 text-2xl font-medium text-foreground">
                Delivery systems tested
              </p>
              <p className="mt-2 text-lg text-muted">
                Precision Dutasteride emerged as the clear winner after a 2-year research collaboration.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-sm font-medium text-slate-600">
                  UnB
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-sm font-medium text-emerald-600">
                  HD
                </div>
              </div>
              <p className="text-sm text-muted">
                Published in <span className="font-medium text-foreground">Therapeutic Delivery</span> journal
              </p>
            </div>
          </div>

          {/* Right: Key metrics grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-gradient-to-br from-emerald-50 to-white p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
                <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-foreground">2-3x</div>
              <div className="mt-1 text-sm text-muted">Higher follicular delivery</div>
            </div>

            <div className="rounded-2xl border border-border bg-gradient-to-br from-blue-50 to-white p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-foreground">Lower</div>
              <div className="mt-1 text-sm text-muted">Systemic exposure</div>
            </div>

            <div className="rounded-2xl border border-border bg-gradient-to-br from-purple-50 to-white p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-foreground">3-6 mo</div>
              <div className="mt-1 text-sm text-muted">Average time to results</div>
            </div>

            <div className="rounded-2xl border border-border bg-gradient-to-br from-amber-50 to-white p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100">
                <svg className="h-6 w-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-foreground">4.5/5</div>
              <div className="mt-1 text-sm text-muted">Trustpilot rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
