import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title: 'V8 - Sexy Confidence | Precision Dutasteride' };

export default function V8Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
          <Link href="/v8" className="text-2xl font-light tracking-[0.3em] text-white">ANAGEN</Link>
          <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="border border-amber-500/50 bg-amber-500/10 px-6 py-2 text-sm tracking-wider text-amber-400 hover:bg-amber-500/20">
            SHOP
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image src="/images/generated/v8-hero.png" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center px-8 lg:px-24">
          <div className="max-w-xl">
            <h1 className="text-6xl font-light leading-tight tracking-tight sm:text-7xl">
              Own Your
              <span className="block font-normal italic text-amber-400">Confidence.</span>
            </h1>
            <p className="mt-8 text-xl font-light text-gray-300">
              Precision Dutasteride. Because you deserve to feel <em>irresistible</em>.
            </p>
            <div className="mt-12">
              <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="inline-block bg-amber-500 px-12 py-5 text-lg font-medium text-black hover:bg-amber-400">
                Get Started — $150/mo
              </a>
            </div>
            <div className="mt-12 flex gap-12 border-t border-white/10 pt-8">
              <div><div className="text-3xl font-light text-amber-400">2-3x</div><div className="text-sm text-gray-500">More Effective</div></div>
              <div><div className="text-3xl font-light text-amber-400">1000+</div><div className="text-sm text-gray-500">Satisfied Men</div></div>
              <div><div className="text-3xl font-light text-amber-400">4.5★</div><div className="text-sm text-gray-500">Rating</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="bg-zinc-950 px-8 py-24 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src="/images/generated/v8-lifestyle.png" alt="" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl font-light">
                Feel the
                <span className="block italic text-amber-400">Difference.</span>
              </h2>
              <p className="mt-6 text-lg font-light text-gray-400">
                When you look good, you feel unstoppable. Precision Dutasteride targets your hair follicles with 2-3x more efficacy than generic topicals.
              </p>
              <ul className="mt-8 space-y-4">
                {['Thicker, fuller hair', 'Lower side effect risk', 'Clinically proven results'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg">
                    <span className="h-px w-8 bg-amber-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product */}
      <section className="bg-black px-8 py-24 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="relative mx-auto mb-12 h-96 w-64">
            <Image src="/images/generated/v8-product.png" alt="" fill className="object-contain" />
          </div>
          <h2 className="text-4xl font-light">
            Precision <span className="italic text-amber-400">Serum</span>
          </h2>
          <p className="mt-4 text-gray-400">0.03% Dutasteride • Follicular Targeting Technology</p>
          <div className="mt-10">
            <a href="https://anagen.xyz/products/precision-dutasteride" target="_blank" className="inline-block border-2 border-amber-500 px-12 py-4 text-lg tracking-wider text-amber-400 hover:bg-amber-500 hover:text-black">
              SHOP NOW — FROM $80/MO
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-zinc-950 px-8 py-24 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="flex justify-center gap-1">
              {[1,2,3,4,5].map(i => <svg key={i} className="h-6 w-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
            </div>
            <p className="mt-8 text-2xl font-light italic text-gray-300">
              "I've never felt more confident. My hair is thicker, and I can see the difference every morning."
            </p>
            <p className="mt-6 text-amber-400">— Michael R., 6 months on treatment</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black px-8 py-12">
        <div className="mx-auto max-w-7xl text-center text-sm text-gray-600">
          <p>© 2026 ANAGEN BY HAIRDAO</p>
          <p className="mt-2">Not FDA-approved. Individual results vary. For men only.</p>
        </div>
      </footer>
    </div>
  );
}
