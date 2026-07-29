"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Award, FileText, CheckCircle2, Droplet, Sparkles, MapPin, Phone } from "lucide-react";

export default function OfficialLabelSection() {
  const labelHighlights = [
    {
      title: "Ingredients & Process",
      value: "Treated Drinking Water",
      sub: "Processed via 9-Stage Advanced Purification (RO + UV + Ozone)",
      icon: Droplet,
    },
    {
      title: "Storage & Shelf Life",
      value: "Best Before 6 Months",
      sub: "Store in a cool, dry place away from direct sunlight",
      icon: ShieldCheck,
    },
    {
      title: "FSSAI License No.",
      value: "22726696000236",
      sub: "Government Audited Food Safety & Standards Compliance",
      icon: Award,
    },
    {
      title: "Manufacturing Location",
      value: "Ghaziabad, UP - 201002",
      sub: "Owned & Bottled by ASA Beverages (INDIA)",
      icon: MapPin,
    },
  ];

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-brand-gold border border-brand-gold/30 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            Official Packaging Standard
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Our Official <span className="text-gradient-gold">Bottle Label Slip</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Every bottle of Aquevia manufactured by ASA Beverages carries our official black, gold, and cyan production label containing statutory FSSAI details, storage guidelines, and quality assurance seals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: High-Res Interactive Label Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-xs sm:max-w-sm rounded-3xl p-3 bg-gradient-to-b from-brand-gold/30 via-slate-800 to-brand-gold/20 border border-brand-gold/40 shadow-2xl overflow-hidden">
              <Image
                src="/images/aquevia_label_official.jpg"
                alt="Official Aquevia Bottle Label Slip by ASA Beverages"
                width={400}
                height={900}
                className="w-full h-auto rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Key Label Specifications & Statutory Data */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-3">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
                Statutory Product Information
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white">
                Transparency In Every Detail
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We believe in 100% consumer trust. Below are the verified specifications printed directly on every Aquevia 1L bottle label.
              </p>
            </div>

            {/* Grid of Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {labelHighlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-2 hover:border-brand-gold/40 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400">{item.title}</span>
                      <Icon className="w-5 h-5 text-brand-gold" />
                    </div>

                    <div className="font-display font-extrabold text-lg text-white">
                      {item.value}
                    </div>

                    <div className="text-xs text-slate-400">
                      {item.sub}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Statutory Footer Badge */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-brand-gold/20 via-brand-blue/20 to-brand-gold/20 border border-brand-gold/30 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-brand-gold shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">
                    FSSAI Lic. No. 22726696000236
                  </div>
                  <div className="text-[11px] text-slate-300">
                    Made In India &bull; Keep Your City Clean
                  </div>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full bg-brand-gold text-slate-950 font-extrabold text-xs uppercase tracking-wider">
                100% Verified
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
