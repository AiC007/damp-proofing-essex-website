"use client";

import { useState } from "react";
import { FAQSchema } from "@/components/schema/FAQSchema";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  description?: string;
}

export function FAQ({ faqs, title, description }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-neutral-50">
      <FAQSchema faqs={faqs} />
      <div className="container-custom">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && <h2 className="mb-4">{title}</h2>}
            {description && (
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="faq-item bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden"
              open={openIndex === index}
            >
              <summary
                className="flex items-center justify-between p-6 cursor-pointer hover:bg-neutral-50 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenIndex(openIndex === index ? null : index);
                }}
              >
                <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className="faq-icon w-5 h-5 text-primary-600 flex-shrink-0"
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
              </summary>
              <div className="px-6 pb-6">
                <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
