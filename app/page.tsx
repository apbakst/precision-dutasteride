'use client';

import Link from 'next/link';

const versions = [
  { id: 'v1', name: 'Clean Medical', desc: 'White, minimal, trust-focused', colors: ['#fff', '#f9fafb', '#0071e3', '#10b981'] },
  { id: 'v2', name: 'Bold Visual', desc: 'Dark gradient, video, charts', colors: ['#0f172a', '#10b981', '#06b6d4', '#fff'] },
  { id: 'v3', name: 'Editorial Warm', desc: 'Cream, serif, social-proof', colors: ['#FAF8F5', '#b45309', '#292524', '#fef3c7'] },
  { id: 'v4', name: 'Dark Immersive', desc: 'Full-bleed images, cinematic', colors: ['#000', '#18181b', '#10b981', '#fff'] },
  { id: 'v5', name: 'Bright Lifestyle', desc: 'White, image grids, green', colors: ['#fff', '#f3f4f6', '#059669', '#1f2937'] },
  { id: 'v6', name: 'Futuristic Cyber', desc: 'Neon, scanlines, tech', colors: ['#000', '#0f172a', '#06b6d4', '#22d3ee'] },
  { id: 'v7', name: 'Clinical Science', desc: 'Blue, medical, data-driven', colors: ['#fff', '#eff6ff', '#2563eb', '#1e40af'] },
  { id: 'v8', name: 'Sexy Confidence', desc: 'Dark, gold, sensual', colors: ['#000', '#18181b', '#f59e0b', '#fbbf24'] },
  { id: 'v9', name: 'Nature Organic', desc: 'Cream, green, wellness', colors: ['#f5f2ed', '#dcfce7', '#15803d', '#166534'] },
  { id: 'v10', name: 'Luxury Premium', desc: 'Black, gold, exclusive', colors: ['#0a0a0a', '#1c1917', '#d97706', '#fbbf24'] },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white">Precision Dutasteride</h1>
          <p className="mt-2 text-xl text-emerald-400">10 Landing Page Variants</p>
          <p className="mt-4 text-zinc-400">Click any card to view full page</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {versions.map((v) => (
            <Link
              key={v.id}
              href={`/${v.id}`}
              className="group overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 transition-all hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="relative aspect-[4/3]">
                <div className="absolute inset-0 flex">
                  {v.colors.map((c, i) => (
                    <div key={i} className="flex-1 transition-transform group-hover:scale-105" style={{ backgroundColor: c }} />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <span className="text-2xl font-bold text-white">{v.id.toUpperCase()}</span>
                </div>
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-white">{v.name}</h2>
                <p className="mt-1 text-sm text-zinc-500">{v.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {versions.map((v) => (
            <Link key={v.id} href={`/${v.id}`} target="_blank" className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400 hover:border-emerald-500 hover:text-white">
              {v.id.toUpperCase()} ↗
            </Link>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-zinc-600">
          Images generated with Nano Banana (Gemini) • Built with Next.js
        </p>
      </div>
    </div>
  );
}
