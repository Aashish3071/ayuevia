"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Droplet, CheckCircle2, ShieldCheck, Sparkles, ArrowRight, Award } from "lucide-react";

interface ProductSectionProps {
  onSelectProductForInquiry: (productName: string) => void;
}

export default function ProductSection({ onSelectProductForInquiry }: ProductSectionProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const products = [
    {
      id: "1l-hero",
      name: "Aquevia 1L Packaged Water",
      capacity: "1L Bottle",
      category: "retail",
      isPrimary: true,
      image: "/images/aquevia_bottle_1l.jpg",
      tagline: "Our Flagship Daily Hydration Size",
      purification: "RO + UV + Ozonized + Minerals",
      features: ["Food Grade PET Bottle", "Ergonomic Grip Design", "Tamper-Proof White Cap", "Balanced pH 7.2-7.5"],
      packaging: "Case of 12 Bottles",
    },
    {
      id: "20l-jar",
      name: "Aquevia 20L Dispenser Jar",
      capacity: "20L Heavy Duty Jar",
      category: "bulk",
      isPrimary: false,
      image: "/images/aquevia_jar_20l.jpg",
      tagline: "High Capacity Office & Home Hydration",
      purification: "Multi-stage RO + Ozonized Hygiene",
      features: ["BPA-Free Heavy PET", "Spill-Proof White Cap", "Integrated Side Handle", "Multi-Use Recyclable"],
      packaging: "Individual Sealed Unit",
    },
    {
      id: "range-collection",
      name: "Aquevia Complete Size Range",
      capacity: "500ml, 1L, 2L",
      category: "range",
      isPrimary: false,
      image: "/images/aquevia_range.jpg",
      tagline: "Complete Portfolio For All Occasions",
      purification: "100% Certified Pure Drinking Water",
      features: ["Convenient Travel 500ml", "Standard 1L Bottle", "Family 2L Pack", "Custom Bulk Branding"],
      packaging: "Custom Shrink Wrapped Cases",
    },
  ];

  const filteredProducts =
    activeFilter === "all" ? products : products.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white via-brand-ice to-white relative overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-aqua/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sky text-brand-blue font-bold text-xs uppercase tracking-wider">
            <Award className="w-4 h-4 text-brand-gold" />
            Premium Bottled Range
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Our Product <span className="text-gradient-water">Collection</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Engineered in precision food-grade PET bottles with white hygienic caps, Aquevia provides pure, refreshing drinking water tailored for personal use, corporate offices, events, and commercial retail.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: "all", label: "All Products" },
              { id: "retail", label: "Retail 1L Flagship" },
              { id: "bulk", label: "20L Bulk Jars" },
              { id: "range", label: "Full Lineup" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  activeFilter === f.id
                    ? "bg-brand-blue text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-brand-sky border border-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border relative ${
                product.isPrimary ? "ring-2 ring-brand-blue border-brand-blue/30 shadow-xl" : "border-slate-200"
              }`}
            >
              {/* Flagship Ribbon */}
              {product.isPrimary && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-brand-gold to-yellow-500 text-white font-extrabold text-[10px] uppercase tracking-wider rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Primary Bottle Size
                </div>
              )}

              {/* Product Image Stage */}
              <div className="relative h-72 bg-gradient-to-b from-brand-sky/60 to-white flex items-center justify-center p-6 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="max-h-64 w-auto object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                      {product.capacity}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                      {product.packaging}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-slate-900 mt-1">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-500 font-medium italic mt-0.5">
                    "{product.tagline}"
                  </p>

                  {/* Features List */}
                  <div className="mt-4 space-y-2">
                    {product.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-aqua shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Purification Seal & CTA */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="text-[11px] font-bold text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-blue" />
                    <span>Purification: {product.purification}</span>
                  </div>

                  <button
                    onClick={() => onSelectProductForInquiry(product.name)}
                    className="w-full py-3 px-4 bg-gradient-to-r from-brand-blue to-brand-aqua hover:from-brand-darkblue hover:to-brand-blue text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Inquire Bulk & Distribution Rates</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
