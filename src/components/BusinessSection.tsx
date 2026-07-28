"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Truck,
  Hotel,
  Utensils,
  Building2,
  GraduationCap,
  Hospital,
  Landmark,
  ArrowRight,
} from "lucide-react";

interface BusinessSectionProps {
  onOpenInquiry: (segmentName: string) => void;
}

export default function BusinessSection({ onOpenInquiry }: BusinessSectionProps) {
  const segments = [
    {
      title: "Retail Shops & Supermarkets",
      desc: "Fast-moving 1L & 500ml Aquevia bottles with high profit margins for retail shopkeepers.",
      icon: ShoppingBag,
      tag: "Retail Partner",
    },
    {
      title: "Regional Water Distributors",
      desc: "Exclusive territory distribution rights, bulk transport pricing, and dedicated stock allocation.",
      icon: Truck,
      tag: "Exclusive Territory",
    },
    {
      title: "Hotels & Resorts",
      desc: "Premium glass-look 1L bottles for luxury guest rooms, suites, and banquets.",
      icon: Hotel,
      tag: "Hospitality Grade",
    },
    {
      title: "Restaurants & Cafes",
      desc: "Hygienic sealed bottled water to elevate dining experience and guest satisfaction.",
      icon: Utensils,
      tag: "Dining Hydration",
    },
    {
      title: "Corporate Offices",
      desc: "Scheduled 20L dispenser jar refills and 1L meeting room bottles for employee wellness.",
      icon: Building2,
      tag: "Corporate Bulk",
    },
    {
      title: "Schools & Universities",
      desc: "Safe, pure drinking water supply for students, faculty, and campus canteens.",
      icon: GraduationCap,
      tag: "Campus Supply",
    },
    {
      title: "Hospitals & Healthcare",
      desc: "Sterile, pathogen-free packaged water ensuring absolute patient safety.",
      icon: Hospital,
      tag: "Medical Safety",
    },
    {
      title: "Government & Institutions",
      desc: "Large scale tenders, event supplies, and institutional bulk contract fulfillment.",
      icon: Landmark,
      tag: "Institutional Contract",
    },
  ];

  return (
    <section id="business" className="py-24 bg-gradient-to-b from-white via-brand-ice to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sky text-brand-blue font-bold text-xs uppercase tracking-wider">
            <Building2 className="w-4 h-4" />
            Diverse Industry Solutions
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Who We <span className="text-gradient-water">Serve</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            ASA Beverages caters to a broad spectrum of commercial, institutional, and retail clients with tailored supply packages and reliable logistics.
          </p>
        </div>

        {/* 8 Sector Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((seg, idx) => {
            const Icon = seg.icon;
            return (
              <motion.div
                key={seg.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                className="glass-card glass-card-hover p-6 rounded-3xl border border-brand-blue/15 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-sky text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[10px] font-extrabold text-brand-gold uppercase tracking-wider px-2.5 py-1 rounded-md bg-brand-gold/10">
                      {seg.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-lg text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">
                    {seg.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {seg.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenInquiry(seg.title)}
                    className="w-full text-left text-xs font-bold text-brand-blue hover:text-brand-darkblue flex items-center justify-between group/btn"
                  >
                    <span>Request Supply Rate Quote</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
