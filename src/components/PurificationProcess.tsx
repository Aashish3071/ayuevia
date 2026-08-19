"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Waves, Filter, Layers, Sun, Zap, FlaskConical, Bot, PackageCheck, Truck, Info,
} from "lucide-react";

export default function PurificationProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const stages = [
    {
      id: 1, name: "Raw Water Intake", icon: Waves,
      tech: "Sub-surface Aquifer",
      detail: "Raw water is collected from protected underground aquifers, pre-screened for heavy minerals, turbidity, and organic particles.",
    },
    {
      id: 2, name: "Multi-stage Filtration", icon: Filter,
      tech: "Sand & Carbon Filters",
      detail: "Water passes through pressure sand filters and activated carbon beds to remove color, odor, chlorine residue, and micro-particles.",
    },
    {
      id: 3, name: "RO Purification", icon: Layers,
      tech: "0.0001 Micron Membrane",
      detail: "High-pressure RO membranes remove 99.9% of dissolved solids, heavy metals, arsenic, lead, and chemical salts.",
    },
    {
      id: 4, name: "UV Treatment", icon: Sun,
      tech: "UV-C Light",
      detail: "UV-C light deactivates all micro-organisms, bacteria, viruses, and cysts without adding any chemicals.",
    },
    {
      id: 5, name: "Ozonization", icon: Zap,
      tech: "Ozone Micro-Bubbles",
      detail: "Ozone gas injection sterilizes the water and prevents re-contamination inside the sealed bottle.",
    },
    {
      id: 6, name: "Lab Testing", icon: FlaskConical,
      tech: "50+ Batch Checks",
      detail: "Each batch is tested in-house for pH (7.2-7.5), TDS, microbiology, and taste before bottling.",
    },
    {
      id: 7, name: "Automated Bottling", icon: Bot,
      tech: "Touchless Filling",
      detail: "Zero-touch robotic filling inside HEPA-filtered cleanrooms for total sterility.",
    },
    {
      id: 8, name: "Sealed Packaging", icon: PackageCheck,
      tech: "Tamper-Proof Caps",
      detail: "Sealed with tamper-evident caps, batch laser coding, and barcode verification.",
    },
    {
      id: 9, name: "Distribution", icon: Truck,
      tech: "Managed Logistics",
      detail: "Dispatched via dedicated logistics to distributors, retailers, offices, and institutions.",
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
            9-Stage Purification
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            From aquifer intake to sealed bottle, here is how we make every drop safe.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative mb-10">
          <div className="absolute top-8 left-8 right-8 h-0.5 bg-slate-200">
            <div
              className="h-full bg-brand-blue transition-all duration-500"
              style={{ width: `${(activeStep / (stages.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-9 gap-2 relative z-10">
            {stages.map((stage, i) => {
              const Icon = stage.icon;
              const isActive = i === activeStep;
              const isPassed = i <= activeStep;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStep(i)}
                  className="flex flex-col items-center group focus:outline-none"
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-brand-blue text-white shadow-md ring-3 ring-brand-blue/20"
                        : isPassed
                        ? "bg-brand-blue text-white"
                        : "bg-white text-slate-400 border border-slate-200 group-hover:border-brand-blue/40 group-hover:text-brand-blue"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-[10px] font-semibold text-slate-400 block">Stage {stage.id}</span>
                    <span className={`text-xs font-semibold block max-w-[85px] leading-tight ${isActive ? "text-brand-blue" : "text-slate-700"}`}>
                      {stage.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Chips */}
        <div className="lg:hidden flex overflow-x-auto pb-3 gap-2 mb-6 no-scrollbar">
          {stages.map((stage, i) => (
            <button
              key={stage.id}
              onClick={() => setActiveStep(i)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold shrink-0 transition-colors ${
                i === activeStep
                  ? "bg-brand-blue text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {stage.id}. {stage.name}
            </button>
          ))}
        </div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
                <span className="text-xs font-semibold text-brand-blue">Stage {stages[activeStep].id} of 9</span>
                <div className="w-14 h-14 rounded-xl bg-brand-blue text-white flex items-center justify-center">
                  {React.createElement(stages[activeStep].icon, { className: "w-7 h-7" })}
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900">{stages[activeStep].name}</h3>
                <p className="text-xs font-medium text-slate-500">{stages[activeStep].tech}</p>
              </div>

              <div className="lg:col-span-9 space-y-4">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <p className="text-slate-700 text-sm leading-relaxed">{stages[activeStep].detail}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep((p) => Math.max(0, p - 1))}
                    className="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 font-medium text-xs disabled:opacity-30 hover:bg-slate-100 transition-colors"
                  >
                    &larr; Previous
                  </button>
                  <button
                    disabled={activeStep === stages.length - 1}
                    onClick={() => setActiveStep((p) => Math.min(stages.length - 1, p + 1))}
                    className="px-4 py-2 rounded-lg bg-brand-blue text-white font-medium text-xs disabled:opacity-30 hover:bg-brand-darkblue transition-colors"
                  >
                    Next &rarr;
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
