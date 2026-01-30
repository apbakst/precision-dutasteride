'use client';

import { useState } from 'react';

// Placeholder before/after data - replace with actual S3 images
const results = [
  {
    id: 1,
    duration: '6 months',
    improvement: 'Significant regrowth',
  },
  {
    id: 2,
    duration: '4 months',
    improvement: 'Improved density',
  },
  {
    id: 3,
    duration: '8 months',
    improvement: 'Temple regrowth',
  },
];

export function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5">
            <span className="text-sm font-medium text-emerald-700">Real Results</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            See the Transformation
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Real patients. Real results. Individual results may vary.
          </p>
        </div>

        {/* Results showcase - placeholder for actual images */}
        <div className="mb-12 overflow-hidden rounded-3xl border border-border bg-white p-8 shadow-lg">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Before */}
            <div className="text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-slate-400" />
                <span className="text-sm font-medium text-slate-600">Before</span>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto h-16 w-16 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-4 text-sm text-slate-400">Before treatment photo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-sm font-medium text-emerald-700">After {results[activeIndex].duration}</span>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto h-16 w-16 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-4 text-sm text-emerald-500">{results[activeIndex].improvement}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {results.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex
                    ? 'w-8 bg-emerald-500'
                    : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm">
            <div className="mb-2 text-4xl font-bold text-foreground">3-6</div>
            <div className="text-sm text-muted">Months to see results</div>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm">
            <div className="mb-2 text-4xl font-bold text-emerald-600">1000+</div>
            <div className="text-sm text-muted">Patients treated</div>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm">
            <div className="mb-2 text-4xl font-bold text-foreground">4.5/5</div>
            <div className="text-sm text-muted">Trustpilot rating</div>
          </div>
        </div>

        {/* View more CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://hairdao-email-assets.s3.us-east-2.amazonaws.com/T34DataPacket"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 font-medium text-foreground shadow-sm transition-all hover:border-gray-300 hover:shadow-md"
          >
            View Full Results Gallery
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
