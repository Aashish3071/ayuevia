"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Sliders,
  Sparkles,
  Droplet,
  Recycle,
  PackageCheck,
  CheckCircle,
  Smile,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Pure & Safe Drinking Water",
      description: "Free from harmful contaminants, microbial pathogens, heavy metals, and suspended solids.",
      icon: Shield,
      badge: "100% Pure",
    },
    {
      title: "Advanced Purification",
      description: "Engineered using state-of-the-art RO membrane filtration, UV light disinfection, and ozonization.",
      icon: Sliders,
      badge: "RO + UV + Ozone",
    },
    {
      title: "Balanced pH Level",
      description: "Maintained precisely between pH 7.2 and 7.5 for optimal hydration, body balance, and natural taste.",
      icon: Sparkles,
      badge: "pH 7.2-7.5",
    },
    {
      title: "Refreshing Every Drop",
      description: "Light, clean, and crisp taste bottled at peak freshness with essential natural mineral retention.",
      icon: Droplet,
      badge: "Crisp Taste",
    },
    {
      title: "Recyclable Bottles",
      description: "Eco-conscious packaging crafted using 100% recyclable virgin PET material for environmental sustainability.",
      icon: Recycle,
      badge: "100% Eco PET",
    },
    {
      title: "Food Grade Packaging",
      description: "BPA-free, non-toxic food-grade PET bottles designed with tamper-evident hygienic caps.",
      icon: PackageCheck,
      badge: "BPA Free",
    },
    {
      title: "Quality Checked",
      description: "Subjected to 50+ hourly batch quality checks in our certified testing laboratory.",
      icon: CheckCircle,
      badge: "Lab Verified",
    },
    {
      title: "Fresh Taste",
      description: "Oxygenated water sealed immediately to preserve natural crisp freshness until the moment you open it.",
      icon: Smile,
      badge: "Naturally Fresh",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-gradient-to-b from-white via-brand-ice to-white relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-blue/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-aqua/10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sky text-brand-blue font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            Unmatched Purity Standards
          </div>
          
          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Why Choose <span className="text-gradient-water">Aquevia Water</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Every bottle of Aquevia by ASA Beverages is crafted to meet international drinking water benchmarks, ensuring absolute purity, health safety, and refreshing taste.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="glass-card glass-card-hover p-6 rounded-3xl relative flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-sky to-white border border-brand-blue/20 flex items-center justify-center text-brand-blue shadow-sm group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="px-2.5 py-1 rounded-md bg-brand-sky/80 text-brand-blue font-bold text-[10px] uppercase tracking-wide border border-brand-blue/10">
                      {feature.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">ASA Standard</span>
                  <span className="w-2 h-2 rounded-full bg-brand-aqua group-hover:scale-150 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
