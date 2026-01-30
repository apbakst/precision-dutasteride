'use client';

import Image from 'next/image';

export function ScienceV4() {
  return (
    <section id="science" className="bg-zinc-950 px-6 py-24 sm:px-12 sm:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-20 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Peer-Reviewed Research
            </span>
            <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              Why Delivery System Matters More Than Concentration
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg text-zinc-400">
              We tested 60+ delivery systems over 2 years with the University of Brasília.
              Most topical dutasterides fail because they never reach the hair follicle.
            </p>
          </div>
        </div>

        {/* Image + Stats grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Lab image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:col-span-2">
            <Image
              src="/images/generated/science-lab.png"
              alt="Research laboratory"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <div className="text-sm font-semibold text-emerald-400">University of Brasília</div>
              <div className="mt-2 text-2xl font-bold text-white">2-Year Research Collaboration</div>
            </div>
          </div>

          {/* Stats column */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-zinc-900 p-8">
              <div className="text-5xl font-bold text-emerald-400">2-3x</div>
              <div className="mt-2 text-lg font-semibold text-white">Higher Follicular Delivery</div>
              <p className="mt-2 text-sm text-zinc-400">
                More dutasteride reaches your hair follicles, not your bloodstream.
              </p>
            </div>
            <div className="rounded-3xl bg-zinc-900 p-8">
              <div className="text-5xl font-bold text-emerald-400">60+</div>
              <div className="mt-2 text-lg font-semibold text-white">Systems Tested</div>
              <p className="mt-2 text-sm text-zinc-400">
                Precision Dutasteride emerged as the clear winner.
              </p>
            </div>
            <div className="rounded-3xl bg-zinc-900 p-8">
              <div className="text-5xl font-bold text-emerald-400">Lower</div>
              <div className="mt-2 text-lg font-semibold text-white">Systemic Exposure</div>
              <p className="mt-2 text-sm text-zinc-400">
                Reduced risk of the side effects associated with oral dutasteride.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison visual */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
            <div className="mb-4 text-sm font-semibold uppercase text-red-400">The Problem</div>
            <h3 className="mb-4 text-2xl font-bold text-white">Generic Topical Dutasteride</h3>
            <div className="h-4 w-full overflow-hidden rounded-full bg-zinc-800">
              <div className="h-full w-[30%] bg-red-500" />
            </div>
            <p className="mt-4 text-zinc-400">Only ~30% reaches the follicle. The rest goes systemic.</p>
          </div>
          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-8">
            <div className="mb-4 text-sm font-semibold uppercase text-emerald-400">Our Solution</div>
            <h3 className="mb-4 text-2xl font-bold text-white">Precision Dutasteride</h3>
            <div className="h-4 w-full overflow-hidden rounded-full bg-zinc-800">
              <div className="h-full w-[85%] bg-gradient-to-r from-emerald-500 to-cyan-400" />
            </div>
            <p className="mt-4 text-zinc-400">2-3x more reaches the follicle with lower systemic exposure.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
