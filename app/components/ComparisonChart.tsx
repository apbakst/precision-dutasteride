'use client';

export function ComparisonChart() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5">
            <span className="text-sm font-medium text-emerald-700">Clinical Data</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Why Delivery System Matters
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Most topical dutasterides fail to reach the follicle. Ours was engineered differently.
          </p>
        </div>

        {/* Visual comparison */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Bar chart visualization */}
          <div className="rounded-3xl border border-border bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm">
            <h3 className="mb-8 text-xl font-semibold text-foreground">Follicular Drug Delivery</h3>

            <div className="space-y-6">
              {/* Precision Dutasteride */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium text-foreground">Precision Dutasteride</span>
                  <span className="text-lg font-bold text-emerald-600">2-3x</span>
                </div>
                <div className="h-12 overflow-hidden rounded-xl bg-slate-100">
                  <div
                    className="flex h-full items-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 transition-all duration-1000"
                    style={{ width: '90%' }}
                  >
                    <span className="text-sm font-semibold text-white">Higher delivery to follicle</span>
                  </div>
                </div>
              </div>

              {/* Generic Topical */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium text-muted">Generic Topical Dutasteride</span>
                  <span className="text-lg font-bold text-slate-400">1x</span>
                </div>
                <div className="h-12 overflow-hidden rounded-xl bg-slate-100">
                  <div
                    className="flex h-full items-center rounded-xl bg-slate-300 px-4"
                    style={{ width: '35%' }}
                  >
                    <span className="text-sm font-medium text-slate-600">Baseline</span>
                  </div>
                </div>
              </div>

              {/* Oral (systemic) */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium text-muted">Oral Dutasteride</span>
                  <span className="text-sm text-red-500">Systemic side effects</span>
                </div>
                <div className="h-12 overflow-hidden rounded-xl bg-slate-100">
                  <div
                    className="flex h-full items-center rounded-xl bg-gradient-to-r from-red-200 to-red-300 px-4"
                    style={{ width: '100%' }}
                  >
                    <span className="text-sm font-medium text-red-700">Full systemic exposure</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-muted">
              Based on University of Brasília research comparing 60+ delivery systems
            </p>
          </div>

          {/* Key benefits */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
                <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">More Drug Where It Matters</h4>
              <p className="text-muted">
                Our delivery system was specifically engineered to penetrate the hair follicle, not just sit on the scalp surface.
              </p>
            </div>

            <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">Lower Systemic Exposure</h4>
              <p className="text-muted">
                By targeting the follicle directly, less dutasteride enters your bloodstream — reducing the risk of systemic side effects.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100">
                <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">Peer-Reviewed Science</h4>
              <p className="text-muted">
                Not marketing claims. Real research published in peer-reviewed journals like Therapeutic Delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
