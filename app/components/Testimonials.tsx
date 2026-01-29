'use client';

const testimonials = [
  {
    quote:
      'My stylist noticed a significant volume increase after just 6 months. The science behind this product is what sold me.',
    author: 'Verified Customer',
    rating: 5,
    source: 'Trustpilot',
  },
  {
    quote:
      'Finally a company that offers unique treatment combinations unavailable elsewhere. And cheaper than Hims.',
    author: 'Verified Customer',
    rating: 5,
    source: 'Trustpilot',
  },
  {
    quote:
      'The customer service is excellent - got a response within a day. Love that proceeds fund actual hair loss research.',
    author: 'Verified Customer',
    rating: 5,
    source: 'Trustpilot',
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`h-5 w-5 ${filled ? 'text-yellow-400' : 'text-gray-200'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section
      id="results"
      className="bg-gray-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          {/* Trustpilot badge */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-border bg-white px-6 py-3 shadow-sm">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="#00B67A"
              />
            </svg>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} filled={star <= 4.5} />
                ))}
              </div>
              <div className="text-xs text-muted">
                <span className="font-semibold text-foreground">4.5/5</span> on
                Trustpilot
              </div>
            </div>
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Real Results from Real Customers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Join 1000+ customers who trust Anagen for their hair restoration
            journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} filled={star <= testimonial.rating} />
                ))}
              </div>
              <p className="mb-4 leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">
                  {testimonial.author}
                </span>
                <span className="text-muted">{testimonial.source}</span>
              </div>
            </div>
          ))}
        </div>

        {/* See all reviews */}
        <div className="mt-12 text-center">
          <a
            href="https://www.trustpilot.com/review/anagen.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent transition-colors hover:text-accent-dark"
          >
            See all reviews on Trustpilot
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
