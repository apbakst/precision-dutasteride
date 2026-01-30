'use client';

const testimonials = [
  {
    quote: 'My stylist noticed a significant volume increase after just 6 months. The science behind this product is what sold me.',
    author: 'Michael R.',
    rating: 5,
    duration: '6 months',
  },
  {
    quote: 'Finally a company that offers unique treatment combinations unavailable elsewhere. And cheaper than Hims.',
    author: 'David K.',
    rating: 5,
    duration: '4 months',
  },
  {
    quote: 'The customer service is excellent — got a response within a day. Love that proceeds fund actual hair loss research.',
    author: 'James T.',
    rating: 5,
    duration: '8 months',
  },
  {
    quote: 'Was skeptical about topical dutasteride but the research convinced me. Seeing real results now.',
    author: 'Chris M.',
    rating: 5,
    duration: '5 months',
  },
];

export function TestimonialsV3() {
  return (
    <section id="results" className="bg-stone-900 px-6 py-24 sm:px-12 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-amber-400">
            Real Results
          </span>
          <h2 className="mt-4 font-serif text-4xl font-light text-white sm:text-5xl">
            What our patients say
          </h2>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="h-6 w-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-stone-400">4.5/5 on Trustpilot</span>
          </div>
        </div>

        {/* Testimonial grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-stone-700 bg-stone-800/50 p-8"
            >
              <div className="mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`h-5 w-5 ${star <= testimonial.rating ? 'text-amber-400' : 'text-stone-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 font-serif text-lg font-light italic leading-relaxed text-stone-300">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-stone-700" />
                  <div>
                    <div className="font-medium text-white">{testimonial.author}</div>
                    <div className="text-sm text-stone-500">Verified Customer</div>
                  </div>
                </div>
                <div className="text-sm text-stone-500">
                  {testimonial.duration} on treatment
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See more */}
        <div className="mt-12 text-center">
          <a
            href="https://www.trustpilot.com/review/anagen.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-400 underline underline-offset-4 transition-colors hover:text-amber-300"
          >
            Read all reviews on Trustpilot
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
