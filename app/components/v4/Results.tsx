'use client';

import Image from 'next/image';

export function ResultsV4() {
  return (
    <section id="results" className="bg-zinc-950 px-6 py-24 sm:px-12 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Real Results
          </span>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            See the Transformation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Real patients. Real results. Individual results may vary.
          </p>
        </div>

        {/* Before/After showcase */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/generated/before-after-1.png"
              alt="Treatment results"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-emerald-400">After 6 Months</div>
                  <div className="text-xl font-bold text-white">Significant Improvement</div>
                </div>
                <div className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold text-emerald-400">
                  Verified Result
                </div>
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-zinc-900 p-6">
              <div className="text-4xl font-bold text-white">1,000+</div>
              <div className="mt-1 text-zinc-400">Patients Treated</div>
            </div>
            <div className="rounded-3xl bg-zinc-900 p-6">
              <div className="text-4xl font-bold text-white">4.5/5</div>
              <div className="mt-1 text-zinc-400">Trustpilot Rating</div>
            </div>
            <div className="rounded-3xl bg-zinc-900 p-6">
              <div className="text-4xl font-bold text-white">3-6 mo</div>
              <div className="mt-1 text-zinc-400">Avg. Time to Results</div>
            </div>
            <div className="rounded-3xl bg-zinc-900 p-6">
              <div className="text-4xl font-bold text-white">6</div>
              <div className="mt-1 text-zinc-400">Patents Filed</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { quote: 'My stylist noticed significant volume increase after 6 months.', author: 'Michael R.', time: '6 months' },
            { quote: 'Finally a company with unique treatments unavailable elsewhere.', author: 'David K.', time: '4 months' },
            { quote: 'The science convinced me. Now I\'m seeing real results.', author: 'Chris M.', time: '5 months' },
          ].map((t, i) => (
            <div key={i} className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8">
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-lg text-zinc-300">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-white">{t.author}</span>
                <span className="text-zinc-500">{t.time} on treatment</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
