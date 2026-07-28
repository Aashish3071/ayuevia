"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Sparkles, CheckCircle2, Factory, Activity } from "lucide-react";

export default function QualitySection() {
  const qualityBadges = [
    {
      title: "Advanced Purification",
      desc: "RO + UV + Ozonization 9-stage engineering",
      icon: ShieldCheck,
      code: "IS:14543 Standard",
    },
    {
      title: "Balanced pH Level",
      desc: "Optimal pH 7.2 to 7.5 mineral balance",
      icon: Sparkles,
      code: "Essential Minerals",
    },
    {
      title: "FSSAI Certified",
      desc: "Licensed food safety and standards compliance",
      icon: Award,
      code: "Govt. Approved",
    },
    {
      title: "Hygienic Manufacturing",
      desc: "Cleanroom touchless automated bottling line",
      icon: Factory,
      code: "Class 100 Cleanroom",
    },
    {
      title: "Food Grade Packaging",
      desc: "100% BPA-free virgin PET food-grade plastic",
      icon: CheckCircle2,
      code: "Safe PET-1",
    },
    {
      title: "Quality Tested",
      desc: "50+ physical, chemical & bio lab batch tests",
      icon: Activity,
      code: "Daily Batch Reports",
    },
  ];

  return (
    <section id="quality" className="py-24 bg-white relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-sky/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sky text-brand-blue font-bold text-xs uppercase tracking-wider">
            <Award className="w-4 h-4 text-brand-gold" />
            Uncompromised Excellence
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Committed to <span className="text-gradient-water">Purity & Quality</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            At ASA Beverages, quality is not just a standard—it is our primary promise. Every drop of Aquevia water undergoes rigorous testing and automated bottling.
          </p>
        </div>

        {/* 6 Quality Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualityBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="glass-card glass-card-hover p-8 rounded-3xl border border-brand-blue/15 flex flex-col justify-between group bg-gradient-to-b from-white to-brand-ice/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-blue to-brand-aqua text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-brand-gold/15 text-brand-gold font-extrabold text-[10px] uppercase tracking-wider border border-brand-gold/30">
                      {badge.code}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">
                    {badge.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {badge.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-brand-blue">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
