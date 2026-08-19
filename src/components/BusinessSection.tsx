"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag, Truck, Hotel, Utensils,
  Building2, GraduationCap, Hospital, Landmark,
} from "lucide-react";

interface BusinessSectionProps {
  onOpenInquiry: (segmentName: string) => void;
}

export default function BusinessSection({ onOpenInquiry }: BusinessSectionProps) {
  const segments = [
    { title: "Retail Shops", icon: ShoppingBag },
    { title: "Distributors", icon: Truck },
    { title: "Hotels & Resorts", icon: Hotel },
    { title: "Restaurants", icon: Utensils },
    { title: "Corporate Offices", icon: Building2 },
    { title: "Schools & Colleges", icon: GraduationCap },
    { title: "Hospitals", icon: Hospital },
    { title: "Government & Events", icon: Landmark },
  ];

  return (
    <section id="business" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-10"
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
            Who We Serve
          </h2>
          <p className="text-slate-600 mt-3">
            We supply Aquevia water to businesses and institutions across northern India.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {segments.map((seg) => {
            const Icon = seg.icon;
            return (
              <button
                key={seg.title}
                onClick={() => onOpenInquiry(seg.title)}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-brand-blue/30 transition-colors flex items-center gap-3 text-left group"
              >
                <Icon className="w-5 h-5 text-brand-blue shrink-0" />
                <span className="font-medium text-sm text-slate-800 group-hover:text-brand-blue transition-colors">{seg.title}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
