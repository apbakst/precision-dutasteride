'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How is this different from oral dutasteride?',
    answer: 'Oral dutasteride inhibits 5-alpha reductase systemically throughout your body, which can lead to sexual side effects. Our Precision Dutasteride uses an advanced delivery system that targets the hair follicle directly, achieving 2-3x higher follicular delivery while significantly reducing systemic exposure.',
  },
  {
    question: 'Why is your formulation better than other topical dutasterides?',
    answer: 'We tested 60+ delivery systems over 2 years with the University of Brasília. Most topical formulations don\'t actually penetrate the follicle effectively — they end up going systemic anyway. Our proprietary delivery system was specifically engineered for follicular targeting, with results published in peer-reviewed journals.',
  },
  {
    question: 'What side effects should I expect?',
    answer: 'Topical side effects may include mild skin irritation, dryness, or redness at the application site. Because our formulation is designed to minimize systemic absorption, the risk of systemic side effects is reduced. Your prescribing physician will review your health history.',
  },
  {
    question: 'How long until I see results?',
    answer: 'Most users begin to see measurable improvement in 3-6 months with consistent daily use. We recommend committing to at least 6 months of treatment to properly evaluate results.',
  },
  {
    question: 'Why should I trust Anagen/HairDAO?',
    answer: 'Anagen is the telehealth platform of HairDAO, a patient-led research organization that has funded peer-reviewed studies at major universities, filed 6 patents, and is led by world-renowned researchers. 100% of proceeds fund further hair loss research.',
  },
];

export function FAQV3() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white px-6 py-24 sm:px-12 sm:py-32">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-amber-700">
            FAQ
          </span>
          <h2 className="mt-4 font-serif text-4xl font-light text-stone-900 sm:text-5xl">
            Common questions
          </h2>
        </div>

        {/* FAQ items */}
        <div className="divide-y divide-stone-200">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="pr-8 font-medium text-stone-900">
                  {faq.question}
                </span>
                <span
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center border transition-all ${
                    openIndex === index
                      ? 'border-amber-600 bg-amber-600 text-white'
                      : 'border-stone-300 text-stone-400'
                  }`}
                >
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <p className="leading-relaxed text-stone-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
