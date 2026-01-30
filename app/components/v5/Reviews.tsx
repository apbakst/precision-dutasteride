'use client';

import Image from 'next/image';

export function ReviewsV5() {
  return (
    <section id="reviews" className="bg-emerald-600 px-6 py-24 sm:px-12 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-white">4.5/5 on Trustpilot</span>
          </div>
          <h2 className="text-4xl font-bold text-white">Loved by 1,000+ Patients</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { quote: 'My stylist noticed significant volume increase after 6 months. The science behind this is what sold me.', name: 'Michael R.', time: '6 months' },
            { quote: 'Finally a company with unique treatments unavailable elsewhere. And cheaper than Hims.', name: 'David K.', time: '4 months' },
            { quote: 'Excellent customer service. Got a response within a day. Love that proceeds fund research.', name: 'James T.', time: '8 months' },
          ].map((review, i) => (
            <div key={i} className="rounded-3xl bg-white p-8">
              <div className="mb-4 flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-gray-700">&ldquo;{review.quote}&rdquo;</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">{review.name}</span>
                <span className="text-sm text-gray-500">{review.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
