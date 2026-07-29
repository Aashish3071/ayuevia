"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Search, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is your water RO purified?",
      a: "Yes! Aquevia packaged drinking water by ASA Beverages undergoes rigorous multi-stage purification including High-Pressure Reverse Osmosis (RO), Ultraviolet (UV) C Disinfection, and Ozonization to eliminate all micro-impurities and pathogens.",
    },
    {
      q: "What is the pH level of Aquevia water?",
      a: "Aquevia drinking water is maintained at an optimal balanced pH level of 7.2 to 7.5. This provides ideal body hydration, neutral mineral balance, and a smooth, refreshing taste.",
    },
    {
      q: "Do you supply bulk orders for offices, events, and institutions?",
      a: "Absolutely! We cater to corporate offices, hotels, restaurants, marriage venues, hospitals, and educational institutions across Uttar Pradesh and NCR with custom delivery schedules and bulk case discounts.",
    },
    {
      q: "How can I become an authorized ASA Beverages distributor?",
      a: "You can apply directly through our website by clicking the 'Get Distribution' button or filling out our B2B distributor form. Our dealership manager will contact you within 24 hours to check territory availability and provide wholesale pricing.",
    },
    {
      q: "Which bottle sizes are available in Aquevia water?",
      a: "Our flagship primary bottle size is 1L. We also manufacture 500ml travel bottles, 2L family packs, and 20L heavy-duty dispenser jars for offices and homes.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white via-brand-ice to-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sky text-brand-blue font-bold text-xs uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-brand-gold" />
            Frequently Asked Questions
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Got Questions? <span className="text-gradient-water">We Have Answers.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg">
            Everything you need to know about Aquevia water, purification standards, and dealership partnerships.
          </p>

          {/* Search Box */}
          <div className="relative max-w-md mx-auto pt-2">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. pH, RO, distributor)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-white border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm text-slate-800"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.q}
                className="glass-card rounded-2xl border border-brand-blue/15 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-slate-900 hover:text-brand-blue transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-brand-sky text-brand-blue font-bold text-xs flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    {faq.q}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-brand-blue text-white" : "text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100/60"
                    >
                      <div className="pt-4">{faq.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-sm">
              No matching questions found. Feel free to contact our support team directly!
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
