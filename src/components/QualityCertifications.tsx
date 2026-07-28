"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, FileCheck, CheckCircle2, Building, Sparkles } from "lucide-react";

export default function QualityCertifications() {
  const certs = [
    {
      title: "FSSAI License",
      subtitle: "Food Safety & Standards Authority of India",
      code: "FSSAI Certified",
      icon: Award,
      desc: "Full statutory compliance under the Food Safety Act, ensuring non-toxic, edible safety standards across all manufacturing phases.",
    },
    {
      title: "Food Safety Management",
      subtitle: "HACCP & Hygiene Certified Cleanroom",
      code: "Cleanroom Class 100",
      icon: ShieldCheck,
      desc: "Hazard Analysis Critical Control Point protocols enforced throughout touchless robotic bottling lines.",
    },
    {
      title: "Quality Assurance",
      subtitle: "ISO Compliant Quality Standards",
      code: "ISO Standard",
      icon: FileCheck,
      desc: "Systematic quality management audits from raw water intake to distributor warehouse logistics.",
    },
    {
      title: "Safe Drinking Water",
      subtitle: "BIS IS:14543 Specification Standard",
      code: "IS:14543 Standard",
      icon: CheckCircle2,
      desc: "Guaranteed adherence to Indian Standard specifications for packaged drinking water mineral safety.",
    },
  ];

  return (
    <section className="py-20 bg-white relative border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sky text-brand-blue font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            Official Regulatory Seals
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-slate-900">
            Regulatory & <span className="text-gradient-water">Quality Certifications</span>
          </h2>
          <p className="text-sm text-slate-500">
            Independently audited and certified for complete customer confidence and safety.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="p-6 rounded-2xl bg-brand-ice/60 border border-brand-blue/15 hover:border-brand-blue/40 transition-all hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-white text-brand-blue border border-brand-blue/15 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider bg-brand-gold/10 px-2 py-1 rounded">
                      {cert.code}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-slate-900 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-blue mb-3">
                    {cert.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-aqua" />
                  <span>ASA Certified Plant</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
