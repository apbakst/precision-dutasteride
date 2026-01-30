'use client';

import Link from 'next/link';
import { useState } from 'react';

const versions = [
  {
    id: 'v1',
    name: 'V1 — Clean Medical',
    description: 'Minimal, white, high-trust medical aesthetic. Similar to anagen.xyz.',
    features: [
      'Clean white background',
      'Subtle gradients',
      'Traditional section layout',
      'Static header',
    ],
    colors: ['#ffffff', '#f9fafb', '#0071e3', '#10b981'],
    bestFor: 'Conservative audiences, medical credibility focus',
  },
  {
    id: 'v2',
    name: 'V2 — Bold Visual',
    description: 'Dark, dynamic, data-forward with video integration and visual charts.',
    features: [
      'Dark gradient hero',
      'Animated elements',
      'Video integration',
      'Comparison bar charts',
      'Before/after gallery',
    ],
    colors: ['#0f172a', '#10b981', '#06b6d4', '#ffffff'],
    bestFor: 'Younger audiences, tech-savvy users, social ads',
  },
  {
    id: 'v3',
    name: 'V3 — Editorial Warm',
    description: 'Warm, editorial, social-proof heavy with serif typography.',
    features: [
      'Warm cream palette',
      'Serif headlines',
      'Split-screen hero',
      'Quote-focused testimonials',
      'Minimal, elegant design',
    ],
    colors: ['#FAF8F5', '#b45309', '#292524', '#fef3c7'],
    bestFor: 'Premium positioning, lifestyle brands, older demographics',
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
            Landing Page Comparison
          </h1>
          <p className="mt-4 text-lg text-slate-400">
            Click on any version to view the full landing page. Compare designs to choose the best one.
          </p>
        </div>

        {/* Version cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {versions.map((version) => (
            <div
              key={version.id}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all hover:border-slate-700 hover:shadow-2xl"
              onMouseEnter={() => setHoveredVersion(version.id)}
              onMouseLeave={() => setHoveredVersion(null)}
            >
              {/* Preview area */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
                {/* Color swatches as preview */}
                <div className="absolute inset-0 flex">
                  {version.colors.map((color, i) => (
                    <div
                      key={i}
                      className="flex-1 transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Overlay with version name */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <span className="text-2xl font-bold text-white">{version.id.toUpperCase()}</span>
                </div>

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-black/60 transition-opacity ${
                    hoveredVersion === version.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Link
                    href={`/${version.id}`}
                    className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition-transform hover:scale-105"
                  >
                    View Full Page →
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white">{version.name}</h2>
                <p className="mt-2 text-sm text-slate-400">{version.description}</p>

                {/* Features */}
                <ul className="mt-4 space-y-1">
                  {version.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <svg className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Best for */}
                <div className="mt-6 rounded-lg bg-slate-800 p-3">
                  <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Best for
                  </div>
                  <div className="mt-1 text-sm text-slate-300">{version.bestFor}</div>
                </div>

                {/* Action */}
                <Link
                  href={`/${version.id}`}
                  className="mt-6 block w-full rounded-lg border border-slate-700 bg-slate-800 py-3 text-center font-medium text-white transition-all hover:border-slate-600 hover:bg-slate-700"
                >
                  Preview {version.id.toUpperCase()}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/v1"
            className="rounded-full border border-slate-700 px-6 py-2 text-sm font-medium text-slate-300 transition-all hover:border-slate-500 hover:text-white"
          >
            Open V1 in new tab ↗
          </Link>
          <Link
            href="/v2"
            className="rounded-full border border-slate-700 px-6 py-2 text-sm font-medium text-slate-300 transition-all hover:border-slate-500 hover:text-white"
          >
            Open V2 in new tab ↗
          </Link>
          <Link
            href="/v3"
            className="rounded-full border border-slate-700 px-6 py-2 text-sm font-medium text-slate-300 transition-all hover:border-slate-500 hover:text-white"
          >
            Open V3 in new tab ↗
          </Link>
        </div>

        {/* Comparison table */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="px-6 py-4 text-left text-sm font-medium text-slate-400">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-slate-400">V1</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-slate-400">V2</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-slate-400">V3</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {[
                  { feature: 'Hero Style', v1: 'Light split', v2: 'Dark gradient', v3: 'Split testimonial' },
                  { feature: 'Color Palette', v1: 'White/Blue', v2: 'Dark/Emerald', v3: 'Warm cream' },
                  { feature: 'Typography', v1: 'Sans-serif', v2: 'Sans-serif bold', v3: 'Serif editorial' },
                  { feature: 'Video Section', v1: '✗', v2: '✓', v3: '✗' },
                  { feature: 'Before/After', v1: '✗', v2: '✓', v3: '✗' },
                  { feature: 'Comparison Chart', v1: '✗', v2: '✓', v3: '✓' },
                  { feature: 'Animations', v1: 'Minimal', v2: 'Heavy', v3: 'Subtle' },
                  { feature: 'Social Proof Focus', v1: 'Medium', v2: 'High', v3: 'Very High' },
                  { feature: 'Sections', v1: '8', v2: '12', v3: '6' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 text-sm font-medium text-white">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-sm text-slate-400">{row.v1}</td>
                    <td className="px-6 py-4 text-center text-sm text-slate-400">{row.v2}</td>
                    <td className="px-6 py-4 text-center text-sm text-slate-400">{row.v3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-slate-500">
          Precision Dutasteride Landing Page Variants • Built for A/B testing
        </div>
      </div>
    </div>
  );
}
