'use client';

export function Footer() {
  return (
    <footer className="border-t border-border bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <span className="text-xl font-semibold tracking-tight text-foreground">
                anagen
              </span>
              <span className="text-xs text-muted">by HairDAO</span>
            </div>
            <p className="mb-4 max-w-sm text-sm leading-relaxed text-muted">
              Research-backed hair loss treatments from a patient-led
              organization. 100% of proceeds fund further hair loss research.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="#00B67A"
                />
              </svg>
              <span className="text-muted">
                <span className="font-medium text-foreground">4.5/5</span> on
                Trustpilot
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://anagen.xyz/products/precision-dutasteride"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  Precision Dutasteride
                </a>
              </li>
              <li>
                <a
                  href="https://anagen.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  All Treatments
                </a>
              </li>
              <li>
                <a
                  href="#science"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://hairdao.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  About HairDAO
                </a>
              </li>
              <li>
                <a
                  href="https://www.trustpilot.com/review/anagen.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@anagen.xyz"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted md:flex-row">
          <p>&copy; {new Date().getFullYear()} Anagen by HairDAO. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="https://anagen.xyz/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="https://anagen.xyz/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Terms of Service
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 rounded-xl bg-gray-50 p-4 text-xs leading-relaxed text-muted">
          <strong>Medical Disclaimer:</strong> This compounded formulation is
          not FDA-approved for treating androgenetic alopecia. It is customized
          based on emerging clinical research. Individual results may vary.
          Precision Dutasteride is for men only. Women, particularly those
          pregnant or breastfeeding, should avoid this product. Always consult
          with a healthcare provider before starting any new treatment.
        </div>
      </div>
    </footer>
  );
}
