"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Factory, Users, RefreshCw, Droplet } from "lucide-react";

export default function AboutSection() {
  const metrics = [
    { label: "Purification Stages", value: "9+", sub: "RO, UV & Ozonized" },
    { label: "Quality Checks", value: "50+", sub: "Daily Lab Batch Testing" },
    { label: "Optimal pH Level", value: "7.2 - 7.5", sub: "Balanced Mineralization" },
    { label: "Active Network", value: "500+", sub: "Retailers & Outlets" },
  ];

  return (
    <section id="about" className="py-24 relative bg-white overflow-hidden">
      {/* Background Subtle Water Drops */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sky/60 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-aqua/10 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Brand Story & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-sky text-brand-blue font-bold text-xs uppercase tracking-wider">
              <Droplet className="w-4 h-4 fill-brand-blue" />
              Company Overview
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
              About <span className="text-brand-blue">ASA Beverages</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                <strong className="text-slate-900 font-semibold">ASA Beverages</strong> delivers high-quality packaged drinking water under our flagship brand <strong className="text-brand-blue font-semibold">Aquevia</strong>. Produced using state-of-the-art purification methods, we ensure every single bottle is pristine, safe, refreshing, and consistent.
              </p>
              <p>
                We focus relentlessly on <strong className="text-slate-800 font-medium">purity, hygiene, stringent quality control, and customer satisfaction</strong> while serving retailers, distributors, corporate offices, educational institutions, healthcare facilities, and households across northern India.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-ice border border-brand-blue/10">
                <div className="p-2 rounded-lg bg-brand-blue text-white shadow-sm shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Strict Hygiene</h4>
                  <p className="text-xs text-slate-500">Touchless automated bottling in sterile cleanroom environment.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-ice border border-brand-blue/10">
                <div className="p-2 rounded-lg bg-brand-gold text-white shadow-sm shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">FSSAI Certified</h4>
                  <p className="text-xs text-slate-500">Fully compliant with national food safety standards.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Visual Plant Feature & Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, idx) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="glass-card p-6 rounded-2xl border border-brand-blue/15 text-center hover:border-brand-blue/40 transition-all duration-300 shadow-sm"
                >
                  <div className="font-display font-black text-3xl sm:text-4xl text-gradient-water">
                    {m.value}
                  </div>
                  <div className="font-bold text-slate-800 text-sm mt-1">{m.label}</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">{m.sub}</div>
                </motion.div>
              ))}
            </div>

            {/* Plant Quality Promise Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-brand-darkblue to-slate-900 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-aqua/20 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-white/10 text-brand-aqua border border-white/20 shrink-0">
                  <Factory className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">Ghaziabad Purification Facility</h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    Equipped with high-capacity RO filtration, UV sterilizers, and ozonizers meeting strict BIS & FSSAI standards.
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
