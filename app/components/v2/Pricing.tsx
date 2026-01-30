'use client';

const plans = [
  {
    duration: '1 Month',
    price: '$150',
    perMonth: '$150/mo',
    savings: null,
    popular: false,
  },
  {
    duration: '6 Months',
    price: '$609',
    perMonth: '$101/mo',
    savings: 'Save 33%',
    popular: true,
  },
  {
    duration: '12 Months',
    price: '$959',
    perMonth: '$80/mo',
    savings: 'Save 47%',
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      {/* Background elements */}
      <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[80px]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="text-sm font-medium text-white/80">Simple Pricing</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Start Your Transformation
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Physician consultation included. Free shipping. Cancel anytime.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all hover:scale-[1.02] ${
                plan.popular
                  ? 'border-2 border-emerald-500 bg-gradient-to-b from-emerald-500/20 to-transparent'
                  : 'border border-white/10 bg-white/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-8 text-center">
                <div className="mb-2 text-lg font-medium text-slate-400">
                  {plan.duration}
                </div>
                <div className="mb-1 text-5xl font-bold text-white">
                  {plan.price}
                </div>
                <div className="text-slate-400">{plan.perMonth}</div>
                {plan.savings && (
                  <div className="mt-3 inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-400">
                    {plan.savings}
                  </div>
                )}
              </div>

              <ul className="mb-8 space-y-4">
                {[
                  'Precision Dutasteride 0.03%',
                  'Physician consultation',
                  'Free shipping',
                  'Cancel anytime',
                  'Results in 3-6 months',
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://anagen.xyz/products/precision-dutasteride"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full rounded-full py-4 text-center font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30'
                    : 'border border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Trust row */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            FDA-registered pharmacy
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
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
