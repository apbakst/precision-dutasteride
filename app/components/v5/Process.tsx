'use client';

import Image from 'next/image';

export function ProcessV5() {
  return (
    <section id="how-it-works" className="bg-white px-6 py-24 sm:px-12 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-xl text-gray-600">Simple. Effective. Delivered.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {[
            { step: '1', title: 'Quick Intake', desc: '3-minute online questionnaire', image: '/images/generated/abstract-science.png' },
            { step: '2', title: 'Doctor Review', desc: 'Physician approves your treatment', image: '/images/generated/trust-doctor.png' },
            { step: '3', title: 'We Ship', desc: 'Delivered within 14 days', image: '/images/generated/shipping-box.png' },
            { step: '4', title: 'You Apply', desc: 'Daily routine, results in 3-6 months', image: '/images/generated/application-scalp.png' },
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="relative mb-6 aspect-square overflow-hidden rounded-3xl bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-lg font-bold text-white">
                  {item.step}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://anagen.xyz/products/precision-dutasteride"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-10 py-5 text-lg font-semibold text-white transition-all hover:bg-emerald-500 hover:shadow-xl"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
