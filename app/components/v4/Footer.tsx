'use client';

export function FooterV4() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white">anagen</div>
            <p className="mt-4 max-w-md text-zinc-400">
              Research-backed hair loss treatments from HairDAO. 100% of proceeds fund further hair loss research.
            </p>
            <div className="mt-6 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-zinc-400">4.5/5 Trustpilot</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li><a href="https://anagen.xyz/products/precision-dutasteride" className="hover:text-white">Precision Dutasteride</a></li>
              <li><a href="https://anagen.xyz" className="hover:text-white">All Treatments</a></li>
              <li><a href="#science" className="hover:text-white">Research</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li><a href="https://hairdao.xyz" className="hover:text-white">About HairDAO</a></li>
              <li><a href="https://www.trustpilot.com/review/anagen.xyz" className="hover:text-white">Reviews</a></li>
              <li><a href="mailto:support@anagen.xyz" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Anagen by HairDAO. All rights reserved.</p>
          <p className="mt-4 text-xs">
            Medical Disclaimer: This compounded formulation is not FDA-approved for treating androgenetic alopecia.
            Individual results may vary. For men only.
          </p>
        </div>
      </div>
    </footer>
  );
}
