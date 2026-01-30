'use client';

export function FooterV3() {
  return (
    <footer className="border-t border-stone-200 bg-[#FAF8F5] px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-serif text-2xl font-light text-stone-900">
              anagen
            </div>
            <p className="mt-4 max-w-sm text-stone-600">
              Research-backed hair loss treatments from a patient-led organization.
              100% of proceeds fund further hair loss research.
            </p>
            <div className="mt-6 flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="h-5 w-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-stone-500">4.5/5 on Trustpilot</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-stone-900">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-stone-600">
              <li>
                <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900">
                  Precision Dutasteride
                </a>
              </li>
              <li>
                <a href="https://anagen.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900">
                  All Treatments
                </a>
              </li>
              <li>
                <a href="#science" className="hover:text-stone-900">Research</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-stone-900">FAQ</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-stone-900">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-stone-600">
              <li>
                <a href="https://hairdao.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900">
                  About HairDAO
                </a>
              </li>
              <li>
                <a href="https://www.trustpilot.com/review/anagen.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900">
                  Reviews
                </a>
              </li>
              <li>
                <a href="mailto:support@anagen.xyz" className="hover:text-stone-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-stone-200 pt-8 text-sm text-stone-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Anagen by HairDAO</p>
          <div className="flex gap-6">
            <a href="https://anagen.xyz/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900">
              Privacy
            </a>
            <a href="https://anagen.xyz/terms" target="_blank" rel="noopener noreferrer" className="hover:text-stone-900">
              Terms
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-xs leading-relaxed text-stone-400">
          <strong>Medical Disclaimer:</strong> This compounded formulation is not FDA-approved for treating androgenetic alopecia.
          It is customized based on emerging clinical research. Individual results may vary. Precision Dutasteride is for men only.
          Women, particularly those pregnant or breastfeeding, should avoid this product.
        </div>
      </div>
    </footer>
  );
}
