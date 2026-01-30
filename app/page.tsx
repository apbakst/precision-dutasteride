'use client';

import Link from 'next/link';
import { useState } from 'react';

const versions = [
  {
    id: 'v1',
    name: 'V1 — Clean Medical',
    description: 'Minimal, white, high-trust medical aesthetic.',
    features: ['Clean white background', 'Subtle gradients', 'Traditional sections', 'Static header'],
    colors: ['#ffffff', '#f9fafb', '#0071e3', '#10b981'],
    bestFor: 'Conservative audiences, medical credibility',
  },
  {
    id: 'v2',
    name: 'V2 — Bold Visual',
    description: 'Dark, dynamic with video integration and charts.',
    features: ['Dark gradient hero', 'Animated elements', 'Video integration', 'Comparison charts'],
    colors: ['#0f172a', '#10b981', '#06b6d4', '#ffffff'],
    bestFor: 'Tech-savvy users, social ads',
  },
  {
    id: 'v3',
    name: 'V3 — Editorial Warm',
    description: 'Warm, editorial with serif typography.',
    features: ['Warm cream palette', 'Serif headlines', 'Split-screen hero', 'Quote testimonials'],
    colors: ['#FAF8F5', '#b45309', '#292524', '#fef3c7'],
    bestFor: 'Premium positioning, lifestyle brands',
  },
  {
    id: 'v4',
    name: 'V4 — Dark Immersive',
    description: 'Full-screen images, cinematic feel.',
    features: ['Full-bleed hero image', 'Image-heavy sections', 'Dark theme throughout', 'Stats overlays'],
    colors: ['#000000', '#18181b', '#10b981', '#ffffff'],
    bestFor: 'High-impact visual storytelling',
  },
  {
    id: 'v5',
    name: 'V5 — Bright Lifestyle',
    description: 'Clean, bright, image-grid focused.',
    features: ['White background', 'Image grids', 'Green accents', 'Alternating layouts'],
    colors: ['#ffffff', '#f3f4f6', '#059669', '#1f2937'],
    bestFor: 'Approachable, lifestyle marketing',
  },
];

export default function Dashboard() {
  const [hoveredVersion, setHoveredVersion] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Precision Dutasteride
          </h1>
          <p className="mt-2 text-xl text-emerald-400">Landing Page Variants</p>
          <p className="mt-4 text-slate-400">
            5 versions to compare. Click any card to view the full page.
          </p>
        </div>

        {/* Version cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {versions.map((version) => (
            <Link
              key={version.id}
              href={`/${version.id}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10"
              onMouseEnter={() => setHoveredVersion(version.id)}
              onMouseLeave={() => setHoveredVersion(null)}
            >
              {/* Color preview */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 flex">
                  {version.colors.map((color, i) => (
                    <div
                      key={i}
                      className="flex-1 transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <span className="text-2xl font-bold text-white">{version.id.toUpperCase()}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="text-lg font-semibold text-white">{version.name}</h2>
                <p className="mt-1 text-sm text-slate-400">{version.description}</p>

                {/* Features */}
                <ul className="mt-4 space-y-1">
                  {version.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-500">
                      <svg className="h-3 w-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Best for */}
                <div className="mt-4 rounded-lg bg-slate-800 p-2 text-xs">
                  <span className="text-slate-500">Best for: </span>
                  <span className="text-slate-300">{version.bestFor}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="px-4 py-3 text-left font-medium text-slate-400">Feature</th>
                  {versions.map((v) => (
                    <th key={v.id} className="px-4 py-3 text-center font-medium text-slate-400">
                      {v.id.toUpperCase()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  { feature: 'Theme', values: ['Light', 'Dark', 'Warm', 'Dark', 'Light'] },
                  { feature: 'Images', values: ['Minimal', 'Medium', 'Low', 'Heavy', 'Heavy'] },
                  { feature: 'Video', values: ['✗', '✓', '✗', '✗', '✗'] },
                  { feature: 'Typography', values: ['Sans', 'Sans Bold', 'Serif', 'Sans Bold', 'Sans'] },
                  { feature: 'Animations', values: ['Minimal', 'Heavy', 'Subtle', 'Medium', 'Subtle'] },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3 font-medium text-white">{row.feature}</td>
                    {row.values.map((val, j) => (
                      <td key={j} className="px-4 py-3 text-center text-slate-400">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick links */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {versions.map((v) => (
            <Link
              key={v.id}
              href={`/${v.id}`}
              target="_blank"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition-all hover:border-emerald-500 hover:text-white"
            >
              Open {v.id.toUpperCase()} ↗
            </Link>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-slate-500">
          Built with Next.js • Images generated with Nano Banana (Gemini)
        </p>
      </div>
    </div>
  );
}
