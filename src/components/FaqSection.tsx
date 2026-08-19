"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is Aquevia water RO purified?",
      a: "Yes. Aquevia goes through a 9-stage process, including reverse osmosis, UV-C disinfection, and ozonization, to remove all impurities and pathogens.",
    },
    {
      q: "What is the pH level?",
      a: "We maintain a pH of 7.2 to 7.5, which is ideal for hydration and gives the water a clean, smooth taste.",
    },
    {
      q: "Do you handle bulk orders?",
      a: "Yes. We supply to offices, hotels, restaurants, event venues, hospitals, and schools across UP and NCR with custom delivery schedules.",
    },
    {
      q: "How do I become a distributor?",
      a: "Click the 'Get Distribution' button on our site or fill out the contact form. Our team will get back to you within 24 hours with territory details and pricing.",
    },
    {
      q: "What bottle sizes are available?",
      a: "200ml (events), 500ml (travel), 1L (daily use, our primary size), 2L (family), and 20L dispenser jars (offices and homes).",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-10 sm:mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
            Common Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Quick answers about Aquevia water, ordering, and distribution.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-xl border border-slate-200 overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 hover:text-brand-blue transition-colors"
                >
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? "rotate-180 text-brand-blue" : "text-slate-400"}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100"
                    >
                      <div className="pt-3">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
