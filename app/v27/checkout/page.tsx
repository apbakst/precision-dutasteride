'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function V27CheckoutPage() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    card: '',
    exp: '',
    cvc: '',
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to actual checkout
    window.location.href = 'https://anagen.xyz/products/precision-dutasteride';
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Reactive gradient */}
      <div
        className="fixed inset-0 z-0 transition-all duration-700"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.12) 0%, transparent 50%), #000`
        }}
      />

      {/* Header */}
      <header className="relative z-50 flex items-center justify-between px-8 py-6 border-b border-white/5">
        <Link href="/v27" className="text-sm tracking-[0.5em] text-white/40 hover:text-white/60">← BACK</Link>
        <span className="text-sm tracking-[0.5em] text-white/40">ANAGEN</span>
        <div className="w-16" />
      </header>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Checkout Form */}
          <div>
            <h1 className="text-3xl font-extralight mb-8">Complete Your Order</h1>

            {/* Order Summary Card */}
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg font-medium">Precision Dutasteride 0.03%</div>
                  <div className="text-white/50 text-sm mt-1">Monthly subscription</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-light text-emerald-400">$150</div>
                  <div className="text-white/40 text-sm">/month</div>
                </div>
              </div>
              <div className="border-t border-white/10 mt-4 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Physician consultation</span>
                  <span className="text-emerald-400">Included</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="text-white/50">Free shipping</span>
                  <span className="text-emerald-400">Included</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-white/50 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="block text-sm text-white/50 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm text-white/50 mb-2">Card Number</label>
                <input
                  type="text"
                  required
                  value={formData.card}
                  onChange={(e) => setFormData({ ...formData, card: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50"
                  placeholder="4242 4242 4242 4242"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-white/50 mb-2">Expiry</label>
                  <input
                    type="text"
                    required
                    value={formData.exp}
                    onChange={(e) => setFormData({ ...formData, exp: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-2">CVC</label>
                  <input
                    type="text"
                    required
                    value={formData.cvc}
                    onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-emerald-500/50"
                    placeholder="123"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 py-4 text-lg tracking-widest text-black font-medium hover:bg-emerald-400 transition-colors"
              >
                START TREATMENT — $150/MO
              </button>

              <p className="text-center text-white/30 text-sm">
                Cancel anytime. Results in 3-6 months.
              </p>
            </form>
          </div>

          {/* Right - Data Reinforcement */}
          <div className="lg:pl-8 lg:border-l lg:border-white/5">
            <div className="text-xs tracking-[0.5em] text-emerald-400/70 mb-6">WHY PRECISION?</div>

            {/* Key stats */}
            <div className="space-y-8">
              {/* Stat 1 */}
              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-extralight text-emerald-400">2-3x</div>
                  <div>
                    <div className="font-medium">Better Targeting</div>
                    <div className="text-white/50 text-sm">More active ingredient to follicles</div>
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-extralight text-emerald-400">~0%</div>
                  <div>
                    <div className="font-medium">Systemic DHT Change</div>
                    <div className="text-white/50 text-sm">Your hormones stay balanced</div>
                  </div>
                </div>
              </div>

              {/* Stat 3 - The key differentiator */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-2xl font-extralight mb-2">
                    Hair <span className="text-emerald-400">+</span> Sex Drive
                  </div>
                  <div className="text-white/50 text-sm">No compromise. Keep both.</div>
                </div>
              </div>

              {/* Comparison */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4 text-center">
                  <div className="text-red-400/70 text-xs tracking-widest mb-2">ORAL PILLS</div>
                  <div className="text-2xl font-extralight text-red-400">70%</div>
                  <div className="text-white/40 text-xs mt-1">DHT suppressed</div>
                  <div className="text-red-400/50 text-xs mt-2">⚠️ Side effects risk</div>
                </div>
                <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-lg p-4 text-center">
                  <div className="text-emerald-400/70 text-xs tracking-widest mb-2">PRECISION</div>
                  <div className="text-2xl font-extralight text-emerald-400">~0%</div>
                  <div className="text-white/40 text-xs mt-1">DHT change</div>
                  <div className="text-emerald-400/50 text-xs mt-2">✓ No compromise</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="border-t border-white/5 pt-6">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/60 italic text-sm">
                  "Finally, a treatment that doesn't make me choose. Hair's filling in, libido's normal, everything works."
                </p>
                <p className="text-white/30 text-xs mt-2">— Ryan K., 4 months</p>
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-6 text-white/30 text-xs">
                <span>🔬 Peer-reviewed</span>
                <span>👨‍⚕️ Physician-supervised</span>
                <span>📦 Free shipping</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-6 mt-12 text-center">
        <p className="text-[10px] tracking-widest text-white/20">© 2026 ANAGEN BY HAIRDAO • NOT FDA APPROVED</p>
      </footer>
    </div>
  );
}
