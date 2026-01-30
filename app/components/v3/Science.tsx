'use client';

export function ScienceV3() {
  return (
    <section id="science" className="bg-white px-6 py-24 sm:px-12 sm:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-20 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-medium uppercase tracking-widest text-amber-700">
              The Science
            </span>
            <h2 className="mt-4 font-serif text-4xl font-light leading-tight text-stone-900 sm:text-5xl">
              Why delivery system
              <br />
              <span className="italic">matters more</span> than concentration
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg leading-relaxed text-stone-600">
              Most topical dutasterides fail because they never reach the hair follicle.
              After testing 60+ delivery systems with the University of Brasília,
              we developed one that actually works.
            </p>
          </div>
        </div>

        {/* Comparison cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* The Problem */}
          <div className="border border-stone-200 p-10">
            <div className="mb-6 text-sm font-medium uppercase tracking-widest text-red-600">
              The Problem
            </div>
            <h3 className="mb-6 font-serif text-2xl text-stone-900">
              Generic topical dutasteride
            </h3>
            <ul className="space-y-4">
              {[
                'Sits on scalp surface, doesn\'t penetrate follicle',
                'Goes systemic anyway — same side effect risk',
                'No published research on delivery efficacy',
                'One-size-fits-all formulation',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-600">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* The Solution */}
          <div className="border-2 border-amber-200 bg-amber-50/50 p-10">
            <div className="mb-6 text-sm font-medium uppercase tracking-widest text-amber-700">
              Our Solution
            </div>
            <h3 className="mb-6 font-serif text-2xl text-stone-900">
              Precision Dutasteride
            </h3>
            <ul className="space-y-4">
              {[
                '2-3x higher follicular delivery proven in studies',
                'Lower systemic exposure = reduced side effect risk',
                'Peer-reviewed research in Therapeutic Delivery journal',
                '2-year collaboration with University of Brasília',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-stone-700">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Research link */}
        <div className="mt-12 text-center">
          <a
            href="https://www.tandfonline.com/doi/abs/10.1080/20415990.2024.2437973"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-amber-700 underline underline-offset-4 transition-colors hover:text-amber-800"
          >
            Read the peer-reviewed research
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
