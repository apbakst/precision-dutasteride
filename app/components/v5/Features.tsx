'use client';

import Image from 'next/image';

const features = [
  {
    title: 'Precision Targeting',
    description: '2-3x higher follicular delivery than generic topicals. The drug goes where it matters.',
    image: '/images/generated/application-scalp.png',
    stat: '2-3x',
    statLabel: 'Better Delivery',
  },
  {
    title: 'Lower Side Effects',
    description: 'By targeting follicles directly, less enters your bloodstream. Lower systemic exposure.',
    image: '/images/generated/abstract-science.png',
    stat: 'Lower',
    statLabel: 'Systemic Risk',
  },
  {
    title: 'Peer-Reviewed Research',
    description: 'Published in Therapeutic Delivery journal. Real science, not marketing claims.',
    image: '/images/generated/science-lab.png',
    stat: '60+',
    statLabel: 'Systems Tested',
  },
];

export function FeaturesV5() {
  return (
    <section id="science" className="bg-gray-50 px-6 py-24 sm:px-12 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Why Precision Matters</h2>
          <p className="mt-4 text-xl text-gray-600">
            Not all topical dutasterides are created equal.
          </p>
        </div>

        <div className="space-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 right-4 rounded-2xl bg-white/90 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-emerald-600">{feature.stat}</div>
                    <div className="text-sm text-gray-600">{feature.statLabel}</div>
                  </div>
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-4 text-lg text-gray-600">{feature.description}</p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700"
                >
                  Learn more
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
