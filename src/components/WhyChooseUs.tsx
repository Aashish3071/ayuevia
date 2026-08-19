"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Droplet, Recycle, PackageCheck, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Safe & Pure",
      desc: "Free from contaminants, heavy metals, and pathogens. 9-stage RO + UV + ozone purification.",
      icon: Shield,
    },
    {
      title: "Balanced pH 7.2-7.5",
      desc: "Optimal mineral balance for hydration and a clean, natural taste.",
      icon: Sparkles,
    },
    {
      title: "Recyclable Packaging",
      desc: "100% recyclable virgin PET bottles. BPA-free and food grade.",
      icon: Recycle,
    },
    {
      title: "Freshness Sealed",
      desc: "Ozone-sealed at the plant. Tamper-evident caps on every bottle.",
      icon: Droplet,
    },
    {
      title: "Quality Tested",
      desc: "50+ lab checks per batch — pH, TDS, microbiology, and sensory tests.",
      icon: PackageCheck,
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
            Why Aquevia?
          </h2>
          <p className="text-slate-600 mt-3">
            What sets our water apart — from the purification process to the bottle in your hand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-brand-blue/30 transition-colors"
              >
                <Icon className="w-6 h-6 text-brand-blue mb-3" />
                <h3 className="font-bold text-slate-900 text-base mb-1">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
