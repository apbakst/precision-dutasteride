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
    savings: 'Save $291',
    popular: true,
  },
  {
    duration: '12 Months',
    price: '$959',
    perMonth: '$80/mo',
    savings: 'Save $841',
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Start Your Treatment Today
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Physician consultation included. Cancel anytime. Results in 3-6
            months.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 transition-all hover:shadow-lg ${
                plan.popular
                  ? 'border-accent bg-white shadow-md'
                  : 'border-border bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-sm font-medium text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-6 text-center">
                <div className="mb-2 text-lg font-medium text-muted">
                  {plan.duration}
                </div>
                <div className="mb-1 text-4xl font-bold text-foreground">
                  {plan.price}
                </div>
                <div className="text-sm text-muted">{plan.perMonth}</div>
                {plan.savings && (
                  <div className="mt-2 inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                    {plan.savings}
                  </div>
                )}
              </div>

              <ul className="mb-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-muted">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-emerald-500"
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
                  Precision Dutasteride 0.03%
                </li>
                <li className="flex items-center gap-3 text-sm text-muted">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-emerald-500"
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
                  Physician consultation included
                </li>
                <li className="flex items-center gap-3 text-sm text-muted">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-emerald-500"
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
                  Free shipping
                </li>
                <li className="flex items-center gap-3 text-sm text-muted">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-emerald-500"
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
                  Cancel anytime
                </li>
              </ul>

              <a
                href="https://anagen.xyz/products/precision-dutasteride"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full rounded-full py-3 text-center font-semibold transition-all ${
                  plan.popular
                    ? 'bg-foreground text-white hover:bg-gray-800'
                    : 'border border-border bg-white text-foreground hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted">
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            FDA-registered pharmacy
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Ships within 14 days
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-emerald-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            Secure checkout
          </div>
        </div>
      </div>
    </section>
  );
}
