'use client';

export function Science() {
  return (
    <section
      id="science"
      className="bg-gray-50 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5">
            <span className="text-sm font-medium text-blue-700">
              Peer-Reviewed Research
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built on Real Science
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            Two years of rigorous research with the University of Brasília,
            published in peer-reviewed journals.
          </p>
        </div>

        {/* Research highlights */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* The Problem */}
          <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              The Problem with Oral Dutasteride
            </h3>
            <ul className="space-y-3 text-muted">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                <span>
                  Oral intake leads to systemic 5-alpha reductase inhibition
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                <span>
                  Sexual side effects affect a significant percentage of users
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                <span>
                  Most topical formulations don&apos;t actually reach the follicle
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
                <span>Generic topicals often just go systemic anyway</span>
              </li>
            </ul>
          </div>

          {/* The Solution */}
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
              <svg
                className="h-6 w-6 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              The Precision Solution
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                <span>
                  <strong>Follicular targeting:</strong> Delivery system
                  optimized to penetrate the hair follicle specifically
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                <span>
                  <strong>2-3x higher delivery:</strong> More dutasteride where
                  it actually matters
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                <span>
                  <strong>Lower systemic exposure:</strong> Reduced risk of
                  systemic side effects
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                <span>
                  <strong>Published research:</strong> Data in peer-reviewed
                  journals, not just marketing claims
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Research papers */}
        <div className="mt-12 rounded-3xl border border-border bg-white p-8 shadow-sm">
          <h3 className="mb-6 text-xl font-semibold text-foreground">
            Published Research
          </h3>
          <div className="space-y-4">
            <a
              href="https://www.tandfonline.com/doi/abs/10.1080/20415990.2024.2437973"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-border p-4 transition-all hover:border-accent hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-1 text-sm font-medium text-accent">
                    Therapeutic Delivery Journal
                  </div>
                  <div className="font-medium text-foreground">
                    Topical dutasteride for androgenic alopecia: current state
                    and prospects
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    HairDAO Association & University of Brasília • December 2024
                  </div>
                </div>
                <svg
                  className="h-5 w-5 flex-shrink-0 text-muted"
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
              </div>
            </a>
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11728454/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-border p-4 transition-all hover:border-accent hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-1 text-sm font-medium text-accent">
                    Pharmaceutics (MDPI)
                  </div>
                  <div className="font-medium text-foreground">
                    Evaluation of Dutasteride-Loaded Liposomes and Transfersomes
                    for Follicular-Targeting
                  </div>
                  <div className="mt-1 text-sm text-muted">
                    HairDAO Association & FAPDF • November 2024
                  </div>
                </div>
                <svg
                  className="h-5 w-5 flex-shrink-0 text-muted"
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
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
