"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WaterRippleCanvas from "./WaterRippleCanvas";

interface HeroProps {
  onOpenDistributorModal: () => void;
}

export default function Hero({ onOpenDistributorModal }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      {/* Water Canvas */}
      <WaterRippleCanvas />

      {/* Soft background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-aqua/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-center lg:text-left"
          >
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.1]">
              Pure Water.<br />
              <span className="text-brand-blue">Pure Trust.</span>
            </h1>

            <p className="text-base sm:text-lg font-semibold text-brand-gold">
              Pure By Nature. Safe By Choice.
            </p>

            <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Aquevia by ASA Beverages provides packaged drinking water purified through RO, UV, and ozone treatment. Available in 200ml, 500ml, 1L, 2L, and 20L jars.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenDistributorModal}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 bg-brand-blue text-white font-bold text-sm rounded-lg hover:bg-brand-darkblue transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                Get Distribution Dealership
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 bg-white text-slate-800 font-semibold text-sm rounded-lg border border-slate-200 hover:border-brand-blue/30 transition-colors text-center shadow-sm"
              >
                Contact Us
              </a>
            </div>
          </motion.div>

          {/* Right: Bottle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[320px] sm:max-w-[380px]"
            >
              <div className="rounded-2xl overflow-hidden p-2 bg-white/60 border border-slate-200/60 shadow-lg">
                <Image
                  src="/images/aquevia_bottle_1l.jpg"
                  alt="Aquevia 1L Packaged Drinking Water Bottle"
                  width={600}
                  height={800}
                  priority
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
