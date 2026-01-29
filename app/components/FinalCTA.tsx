'use client';

export function FinalCTA() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Ready to Start Your
          <span className="block bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            Hair Restoration Journey?
          </span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted">
          Join 1,000+ patients who trust Precision Dutasteride for targeted, effective hair regrowth with lower systemic exposure.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-10 py-5 text-lg font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:shadow-xl hover:shadow-emerald-500/30"
          >
            Start Treatment — From $80/mo
          </a>
        </div>

        <p className="mt-8 text-sm text-muted">
          Physician consultation included • Free shipping • Cancel anytime
        </p>

        {/* Trust logos */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale">
          <div className="flex items-center gap-2">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span className="text-sm font-medium">Trustpilot</span>
          </div>
          <div className="text-sm font-medium">University of Brasília</div>
          <div className="text-sm font-medium">FDA-Registered Pharmacy</div>
        </div>
      </div>
    </section>
  );
}
