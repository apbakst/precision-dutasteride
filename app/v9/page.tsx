import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title: 'V9 - Nature Organic | Precision Dutasteride' };

export default function V9Page() {
  return (
    <div className="min-h-screen bg-[#f5f2ed]">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-[#f5f2ed]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/v9" className="font-serif text-2xl text-stone-800">anagen</Link>
          <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="rounded-full bg-green-700 px-5 py-2 text-sm font-medium text-white hover:bg-green-600">
            Shop Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pb-24 pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm text-green-800">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" /></svg>
                Science Meets Nature
              </div>
              <h1 className="font-serif text-5xl leading-tight text-stone-900 sm:text-6xl">
                Gentle. Effective.
                <span className="text-green-700"> Natural.</span>
              </h1>
              <p className="mt-6 text-xl text-stone-600">
                Precision Dutasteride with advanced delivery technology. Better for your hair. Better for you.
              </p>
              <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="mt-8 inline-block rounded-full bg-green-700 px-8 py-4 font-medium text-white hover:bg-green-600">
                Start Your Journey — $150/mo
              </a>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[3rem] bg-green-100">
              <Image src="/images/generated/hero-lifestyle.png" alt="" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-800 px-6 py-16 text-white">
        <div className="mx-auto grid max-w-4xl gap-8 text-center sm:grid-cols-3">
          <div><div className="font-serif text-4xl">2-3x</div><div className="mt-2 text-green-200">Higher Delivery</div></div>
          <div><div className="font-serif text-4xl">60+</div><div className="mt-2 text-green-200">Systems Tested</div></div>
          <div><div className="font-serif text-4xl">Lower</div><div className="mt-2 text-green-200">Side Effects</div></div>
        </div>
      </section>

      {/* Wellness */}
      <section className="bg-[#f5f2ed] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-4xl text-stone-900">The Wellness Approach</h2>
            <p className="mt-4 text-stone-600">Hair restoration that fits your lifestyle</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src="/images/generated/v9-wellness.png" alt="" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src="/images/generated/v9-ingredients.png" alt="" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-serif text-4xl text-stone-900">Simple Self-Care</h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-4">
            {[
              { step: '01', title: 'Quick Quiz', desc: '3-minute intake' },
              { step: '02', title: 'Doctor Review', desc: 'Physician approval' },
              { step: '03', title: 'Delivered', desc: 'To your door' },
              { step: '04', title: 'Daily Ritual', desc: 'Simple application' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 font-serif text-2xl text-green-700">{item.step}</div>
                <h3 className="mt-4 font-medium text-stone-900">{item.title}</h3>
                <p className="mt-2 text-sm text-stone-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-50 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl text-stone-900">Begin Your Natural Journey</h2>
          <p className="mt-4 text-stone-600">Join thousands who've chosen a gentler path to hair restoration.</p>
          <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="mt-8 inline-block rounded-full bg-green-700 px-10 py-4 text-lg font-medium text-white hover:bg-green-600">
            Get Started — From $80/mo
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-[#f5f2ed] px-6 py-12">
        <div className="mx-auto max-w-6xl text-center text-sm text-stone-500">
          <p>© 2026 Anagen by HairDAO. Not FDA-approved. For men only.</p>
        </div>
      </footer>
    </div>
  );
}
