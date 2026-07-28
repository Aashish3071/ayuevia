"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Waves,
  Filter,
  Layers,
  Sun,
  Zap,
  FlaskConical,
  Bot,
  PackageCheck,
  Truck,
  CheckCircle2,
  ChevronRight,
  Info,
} from "lucide-react";

export default function PurificationProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const stages = [
    {
      id: 1,
      name: "Raw Water",
      short: "Source Intake",
      icon: Waves,
      tech: "Sub-surface Aquifer Sourcing",
      detail:
        "High-grade natural raw water collected from protected underground aquifers, pre-screened for heavy minerals, turbidity, and organic particles.",
    },
    {
      id: 2,
      name: "Multi-stage Filtration",
      short: "Dual Media",
      icon: Filter,
      tech: "Sand & Activated Carbon Filter",
      detail:
        "Passes through high-efficiency pressure sand filters and coconut-shell activated carbon beds to absorb color, odor, chlorine residue, and micro-particles.",
    },
    {
      id: 3,
      name: "RO Purification",
      short: "Reverse Osmosis",
      icon: Layers,
      tech: "0.0001 Micron Membrane",
      detail:
        "High-pressure RO membranes eliminate 99.9% of dissolved solids (TDS), heavy metals, arsenic, lead, and chemical salts, yielding pure H2O.",
    },
    {
      id: 4,
      name: "UV Treatment",
      short: "Disinfection",
      icon: Sun,
      tech: "UV-C Light Sterilization",
      detail:
        "High-intensity ultraviolet C light deactivates DNA of all micro-organisms, bacteria, viruses, and cysts without adding any chemicals.",
    },
    {
      id: 5,
      name: "Ozonization",
      short: "Oxidative Seal",
      icon: Zap,
      tech: "Active Ozone Micro-Bubbles",
      detail:
        "Ozone (O3) gas injection creates an active sterilizing environment, preventing re-contamination inside the bottle and extending natural shelf life.",
    },
    {
      id: 6,
      name: "Quality Testing",
      short: "Lab Check",
      icon: FlaskConical,
      tech: "50+ Batch Lab Diagnostics",
      detail:
        "Every batch is tested in-house for exact pH (7.2-7.5), TDS levels (100-150ppm), microbiology, and sensory freshness prior to bottling.",
    },
    {
      id: 7,
      name: "Automatic Bottling",
      short: "No Touch",
      icon: Bot,
      tech: "Robotic Monoblock Filler",
      detail:
        "Zero-touch robotic filling inside HEPA-filtered class 100 cleanrooms guarantees total sterility during high-speed precision liquid filling.",
    },
    {
      id: 8,
      name: "Sealed Packaging",
      short: "Tamper Proof",
      icon: PackageCheck,
      tech: "Food Grade PET & Safety Cap",
      detail:
        "Sealed with tamper-evident caps and labeled with batch laser coding, manufacturing timestamps, and barcode verification.",
    },
    {
      id: 9,
      name: "Distribution",
      short: "Safe Supply",
      icon: Truck,
      tech: "Controlled Logistics Fleet",
      detail:
        "Dispatched via dedicated temperature-managed logistics fleet to distributors, retail outlets, corporate offices, and institutions.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      {/* Soft Background Blue Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-sky/70 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sky text-brand-blue font-bold text-xs uppercase tracking-wider">
            <Zap className="w-4 h-4 text-brand-gold" />
            Advanced Purification Engineering
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Our 9-Stage <span className="text-gradient-water">Purification Process</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From raw aquifer intake to automated zero-touch bottling, explore how ASA Beverages ensures every drop of Aquevia water is pure by nature and safe by choice.
          </p>
        </div>

        {/* Desktop Horizontal Timeline Bar */}
        <div className="hidden lg:block relative my-12">
          {/* Connecting Line */}
          <div className="absolute top-10 left-8 right-8 h-1 bg-slate-200 -z-0">
            <div
              className="h-full bg-gradient-to-r from-brand-blue to-brand-aqua transition-all duration-500 ease-out"
              style={{ width: `${(activeStep / (stages.length - 1)) * 100}%` }}
            />
          </div>

          {/* Stepper Nodes */}
          <div className="grid grid-cols-9 gap-2 relative z-10">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isActive = index === activeStep;
              const isPassed = index <= activeStep;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStep(index)}
                  className="flex flex-col items-center group focus:outline-none"
                >
                  {/* Step Circle Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                      isActive
                        ? "bg-gradient-to-tr from-brand-blue to-brand-aqua text-white scale-110 shadow-lg ring-4 ring-brand-sky"
                        : isPassed
                        ? "bg-brand-blue text-white"
                        : "bg-white text-slate-400 border border-slate-200 group-hover:border-brand-blue group-hover:text-brand-blue"
                    }`}
                  >
                    <Icon className={`w-7 h-7 ${isActive ? "animate-pulse" : ""}`} />
                  </div>

                  {/* Stage Number & Title */}
                  <div className="text-center mt-3 space-y-0.5">
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider block">
                      Stage {stage.id}
                    </span>
                    <span
                      className={`text-xs font-bold block max-w-[90px] leading-tight ${
                        isActive ? "text-brand-blue font-extrabold" : "text-slate-700"
                      }`}
                    >
                      {stage.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Stepper Chips */}
        <div className="lg:hidden flex overflow-x-auto pb-4 gap-2 no-scrollbar mb-8">
          {stages.map((stage, index) => {
            const isActive = index === activeStep;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStep(index)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold shrink-0 transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-brand-blue text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-brand-sky"
                }`}
              >
                <span>{stage.id}.</span>
                <span>{stage.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Spotlight Box */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 sm:p-10 rounded-3xl border border-brand-blue/20 bg-gradient-to-r from-white via-brand-ice to-white shadow-xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Stage Big Badge & Icon */}
                <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue text-white font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4" />
                    Stage 0{stages[activeStep].id} of 09
                  </div>

                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-brand-blue to-brand-aqua text-white flex items-center justify-center shadow-lg">
                    {React.createElement(stages[activeStep].icon, { className: "w-10 h-10 animate-bounce" })}
                  </div>

                  <div>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900">
                      {stages[activeStep].name}
                    </h3>
                    <p className="text-xs font-bold text-brand-gold tracking-wide uppercase mt-1">
                      {stages[activeStep].tech}
                    </p>
                  </div>
                </div>

                {/* Detailed Narrative */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="p-4 rounded-2xl bg-white border border-brand-blue/10 shadow-sm flex items-start gap-3">
                    <Info className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                      {stages[activeStep].detail}
                    </p>
                  </div>

                  {/* Navigation Arrows for Stepper */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                      className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                    >
                      &larr; Previous Stage
                    </button>

                    <span className="text-xs font-semibold text-slate-500">
                      Click any stage above to inspect tech specs
                    </span>

                    <button
                      disabled={activeStep === stages.length - 1}
                      onClick={() => setActiveStep((prev) => Math.min(stages.length - 1, prev + 1))}
                      className="px-4 py-2 rounded-xl bg-brand-blue text-white font-bold text-xs disabled:opacity-40 disabled:cursor-not-allowed hover:bg-brand-darkblue transition-colors flex items-center gap-1"
                    >
                      Next Stage &rarr;
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
