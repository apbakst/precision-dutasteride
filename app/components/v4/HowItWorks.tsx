'use client';

import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Quick Online Intake',
    description: 'Answer a few questions about your hair loss history. Takes 3 minutes.',
    image: '/images/generated/abstract-science.png',
  },
  {
    number: '02',
    title: 'Doctor Review',
    description: 'A licensed physician reviews and approves your personalized treatment.',
    image: '/images/generated/trust-doctor.png',
  },
  {
    number: '03',
    title: 'Delivered to You',
    description: 'Freshly compounded and shipped within 14 days. Then monthly.',
    image: '/images/generated/shipping-box.png',
  },
  {
    number: '04',
    title: 'Apply Daily',
    description: 'Simple daily application. Results typically visible in 3-6 months.',
    image: '/images/generated/application-scalp.png',
  },
];

export function HowItWorksV4() {
  return (
    <section className="bg-black px-6 py-24 sm:px-12 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Simple Process
          </span>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            How It Works
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="relative mb-6 aspect-square overflow-hidden rounded-3xl bg-zinc-900">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-5xl font-bold text-emerald-400/30">
                  {step.number}
                </div>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
              <p className="text-zinc-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
