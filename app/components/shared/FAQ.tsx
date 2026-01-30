'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How is this different from oral dutasteride?',
    answer:
      'Oral dutasteride inhibits 5-alpha reductase systemically throughout your body, which can lead to sexual side effects. Our Precision Dutasteride uses an advanced delivery system that targets the hair follicle directly, achieving 2-3x higher follicular delivery while significantly reducing systemic exposure.',
  },
  {
    question: 'Why is your formulation better than other topical dutasterides?',
    answer:
      'We tested 60+ delivery systems over 2 years with the University of Brasília. Most topical formulations don\'t actually penetrate the follicle effectively — they end up going systemic anyway. Our proprietary delivery system was specifically engineered for follicular targeting, with results published in peer-reviewed journals.',
  },
  {
    question: 'What side effects should I expect?',
    answer:
      'Topical side effects may include mild skin irritation, dryness, or redness at the application site. Because our formulation is designed to minimize systemic absorption, the risk of systemic side effects (like those associated with oral dutasteride) is reduced. However, some systemic exposure may still occur. Your prescribing physician will review your health history to ensure this treatment is appropriate for you.',
  },
  {
    question: 'How long until I see results?',
    answer:
      'Most users begin to see measurable improvement in 3-6 months with consistent daily use. Hair growth is a gradual process — the follicles need time to respond to reduced DHT levels and transition from miniaturized to terminal hairs. We recommend committing to at least 6 months of treatment to properly evaluate results.',
  },
  {
    question: 'Do I need a prescription?',
    answer:
      'Yes. Precision Dutasteride requires a prescription from a licensed physician. When you complete your intake form, a doctor will review your health information and determine if this treatment is appropriate for you. The telehealth consultation is included in your subscription.',
  },
  {
    question: 'Can women use this product?',
    answer:
      'No. Precision Dutasteride is for men only. Women, particularly those who are pregnant or may become pregnant, should not use or handle this product due to the risk of fetal abnormalities. We offer other formulations specifically designed for women.',
  },
  {
    question: 'What happens if I stop using it?',
    answer:
      'Like all DHT-blocking treatments for androgenetic alopecia, the benefits are maintained only with continued use. If you stop treatment, DHT levels in the scalp will return to previous levels and hair loss will likely resume over time.',
  },
  {
    question: 'Why should I trust Anagen/HairDAO?',
    answer:
      'Anagen is the telehealth platform of HairDAO, a patient-led research organization that has funded peer-reviewed studies at major universities, filed 6 patents, and is led by world-renowned hair loss researchers including Prof. Ralf Paus (1000+ citations). 100% of proceeds fund further hair loss research. We\'re not just selling treatments — we\'re working to solve hair loss.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted">
            Everything you need to know about Precision Dutasteride.
          </p>
        </div>

        <div className="divide-y divide-border rounded-2xl border border-border">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
              >
                <span className="pr-4 font-medium text-foreground">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-muted transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
