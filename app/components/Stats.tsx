'use client';

const stats = [
  {
    value: '60+',
    label: 'Delivery Systems Tested',
    description: 'Precision Dutasteride emerged as the winner',
  },
  {
    value: '2-3x',
    label: 'Higher Follicular Delivery',
    description: 'More drug where it matters most',
  },
  {
    value: '2 Years',
    label: 'Research Collaboration',
    description: 'With University of Brasília',
  },
  {
    value: 'Lower',
    label: 'Systemic Exposure',
    description: 'Reduced risk of systemic side effects',
  },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Precision Dutasteride?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Not all topical formulations are created equal. Our delivery system
            was engineered for maximum follicular penetration.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-gray-300 hover:shadow-md"
            >
              <div className="mb-2 text-4xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="mb-2 text-base font-semibold text-foreground">
                {stat.label}
              </div>
              <div className="text-sm text-muted">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
