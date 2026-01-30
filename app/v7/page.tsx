import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title: 'V7 - Clinical Science | Precision Dutasteride' };

export default function V7Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/v7" className="text-xl font-semibold text-gray-900">anagen<span className="text-blue-600">.</span></Link>
          <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Get Started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white px-6 pb-24 pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Clinically Validated
              </div>
              <h1 className="text-5xl font-bold leading-tight text-gray-900 sm:text-6xl">
                Evidence-Based
                <span className="text-blue-600"> Hair Restoration</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600">
                Precision Dutasteride delivers 2-3x higher follicular concentration with peer-reviewed research backing every claim.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700">
                  Start Treatment — $150/mo
                </a>
                <a href="#research" className="rounded-lg border border-gray-200 px-8 py-4 font-semibold text-gray-700 hover:bg-gray-50">
                  View Research
                </a>
              </div>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-blue-100">
              <Image src="/images/generated/v7-hero.png" alt="" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 bg-white px-6 py-16">
        <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-4">
          {[
            { stat: '60+', label: 'Delivery Systems Tested' },
            { stat: '2-3x', label: 'Higher Follicular Delivery' },
            { stat: '2 Years', label: 'Research Collaboration' },
            { stat: '6', label: 'Patents Filed' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-bold text-blue-600">{item.stat}</div>
              <div className="mt-2 text-sm text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Research */}
      <section id="research" className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900">Peer-Reviewed Research</h2>
            <p className="mt-4 text-gray-600">Published in leading scientific journals</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image src="/images/generated/v7-science.png" alt="" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900">University of Brasília Collaboration</h3>
              <p className="mt-4 text-gray-600">Two years of rigorous testing across 60+ delivery systems. Results published in Therapeutic Delivery journal.</p>
              <div className="mt-6 space-y-3">
                {['Higher follicular penetration than generic topicals', 'Lower systemic absorption reduces side effect risk', 'Consistent results across clinical subjects'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700">
                    <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="relative mx-auto mb-12 h-80 w-60">
            <Image src="/images/generated/v7-product.png" alt="" fill className="object-contain" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Precision Dutasteride 0.03%</h2>
          <p className="mt-4 text-gray-600">Physician-supervised. FDA-registered pharmacy. Results in 3-6 months.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="w-full rounded-lg bg-blue-600 px-10 py-4 font-semibold text-white hover:bg-blue-700 sm:w-auto">
              Start Treatment
            </a>
            <span className="text-gray-500">From $80/month (annual)</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-6xl text-center text-sm text-gray-500">
          <p>© 2026 Anagen by HairDAO. Not FDA-approved. Individual results vary.</p>
        </div>
      </footer>
    </div>
  );
}
