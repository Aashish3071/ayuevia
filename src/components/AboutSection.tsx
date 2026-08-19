"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Factory } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
              About ASA Beverages
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                ASA Beverages makes <strong className="text-slate-900">Aquevia</strong>, delivering clean, safe packaged drinking water. Our plant in Ghaziabad uses a 9-stage purification process (RO, UV sterilization, and ozone treatment) to make sure every bottle meets strict safety standards.
              </p>
              <p>
                We supply water to retail shops, distributors, offices, schools, hospitals, hotels, and households across northern India. Every batch goes through lab testing before it leaves our facility.
              </p>
            </div>

            {/* Key points: simple inline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Touchless Bottling</p>
                  <p className="text-xs text-slate-500">Automated filling in sterile cleanroom.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-100">
                <Award className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">FSSAI Certified</p>
                  <p className="text-xs text-slate-500">Compliant with food safety standards.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats + Plant card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { value: "9+", label: "Purification Stages", sub: "RO, UV & Ozone" },
                { value: "50+", label: "Quality Checks", sub: "Per batch" },
                { value: "7.2-7.5", label: "pH Level", sub: "Balanced minerals" },
                { value: "500+", label: "Retail Outlets", sub: "Northern India" },
              ].map((m) => (
                <div key={m.label} className="p-5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                  <div className="font-display font-black text-2xl sm:text-3xl text-brand-blue">{m.value}</div>
                  <div className="font-semibold text-slate-800 text-sm mt-1">{m.label}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{m.sub}</div>
                </div>
              ))}
            </div>

            {/* Plant card */}
            <div className="p-5 rounded-xl bg-slate-900 text-white">
              <div className="flex items-center gap-3">
                <Factory className="w-7 h-7 text-brand-aqua shrink-0" />
                <div>
                  <h3 className="font-bold text-base">Ghaziabad Facility</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    High-capacity RO filtration, UV sterilizers, and ozonizers. BIS & FSSAI compliant.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
