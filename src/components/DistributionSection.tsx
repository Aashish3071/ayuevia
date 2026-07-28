"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, TrendingUp, DollarSign, Award, ChevronRight, CheckCircle2 } from "lucide-react";

interface DistributionSectionProps {
  onOpenDistributorModal: () => void;
}

export default function DistributionSection({ onOpenDistributorModal }: DistributionSectionProps) {
  // Simple ROI Estimator State
  const [weeklyCases, setWeeklyCases] = useState(500);

  // Estimator Calculations
  const bottlesPerWeek = weeklyCases * 12;
  const estimatedMonthlyProfit = Math.round(weeklyCases * 4 * 120); // Approx margin calculation

  return (
    <section id="distributor" className="py-24 bg-gradient-to-r from-slate-950 via-brand-darkblue to-slate-900 text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-aqua/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Offer Details & Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-brand-aqua border border-white/20 font-bold text-xs uppercase tracking-wider backdrop-blur-md">
              <TrendingUp className="w-4 h-4 text-brand-gold" />
              High Profit B2B Dealership Opportunity
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Become Our <span className="text-gradient-water">Distribution Partner</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Partner with <strong className="text-white">ASA Beverages</strong> and deliver premium <strong className="text-brand-aqua">Aquevia Packaged Water</strong> to retailers, hotels, offices, and households in your city. Enjoy exclusive territory distribution rights, robust supply chain support, and attractive commercial margins.
            </p>

            {/* Key Advantages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="w-6 h-6 text-brand-aqua shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Exclusive Territory Rights</h4>
                  <p className="text-xs text-slate-400">Guaranteed non-compete distribution zone for high market share.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <DollarSign className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">High Profitability</h4>
                  <p className="text-xs text-slate-400">Competitive direct-from-factory pricing with high margins.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Truck className="w-6 h-6 text-brand-aqua shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Reliable Stock Supply</h4>
                  <p className="text-xs text-slate-400">Fast dispatch from our Ghaziabad plant with zero stockouts.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Award className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Marketing Support</h4>
                  <p className="text-xs text-slate-400">Banners, retail standees, promotional samples, and leads.</p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenDistributorModal}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-aqua hover:from-brand-darkblue hover:to-brand-blue text-white font-extrabold text-base rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Become Distributor</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-xs text-slate-400 font-semibold">
                &bull; Quick 24-Hour Dealership Approval
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Distributor Profit Estimator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="font-display font-extrabold text-xl text-white">Dealership Profit Calculator</h3>
                  <p className="text-xs text-brand-aqua">Estimate monthly earnings as an ASA Distributor</p>
                </div>
                <span className="px-3 py-1 bg-brand-gold/20 text-brand-gold border border-brand-gold/30 font-bold text-xs rounded-full">
                  Interactive
                </span>
              </div>

              {/* Slider for Cases per week */}
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300">Target Supply Volume:</span>
                  <span className="text-brand-aqua font-bold text-sm">{weeklyCases} Cases / Week</span>
                </div>

                <input
                  type="range"
                  min={100}
                  max={3000}
                  step={50}
                  value={weeklyCases}
                  onChange={(e) => setWeeklyCases(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-brand-aqua"
                />

                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>100 Cases (Small City)</span>
                  <span>3,000 Cases (Major District)</span>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <div className="text-xs text-slate-400 font-medium">Bottles Distributed</div>
                  <div className="font-display font-black text-xl text-white mt-1">
                    {bottlesPerWeek.toLocaleString()} /wk
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-brand-blue/30 border border-brand-blue/50 text-center">
                  <div className="text-xs text-brand-aqua font-medium">Est. Monthly Gross Profit</div>
                  <div className="font-display font-black text-xl text-brand-gold mt-1">
                    ₹{estimatedMonthlyProfit.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Direct Dealership Trigger */}
              <button
                onClick={onOpenDistributorModal}
                className="w-full py-3.5 px-4 bg-white text-slate-900 font-extrabold text-sm rounded-2xl hover:bg-brand-sky transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <span>Apply For Exclusive Territory Now</span>
                <ChevronRight className="w-4 h-4 text-brand-blue" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-aqua" />
                <span>Zero Royalty Fee &bull; Direct Factory Dispatch</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
