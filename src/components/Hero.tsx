"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Droplet, ArrowRight, Award, CheckCircle2 } from "lucide-react";
import WaterRippleCanvas from "./WaterRippleCanvas";

interface HeroProps {
  onOpenDistributorModal: () => void;
}

export default function Hero({ onOpenDistributorModal }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-brand-ice to-white">
      {/* Background Water Canvas & Floating Particles */}
      <WaterRippleCanvas />

      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-aqua/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-[350px] h-[350px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-sky border border-brand-blue/20 text-brand-blue font-semibold text-xs sm:text-sm shadow-sm backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-brand-gold animate-spin-slow" />
              <span>Aquevia Packaged Water by ASA Beverages</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-aqua animate-ping" />
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-slate-900 tracking-tight leading-[1.1]">
              Pure Water. <br />
              <span className="text-gradient-water">Pure Trust.</span>
            </h1>

            {/* Tagline & Subheading */}
            <div className="space-y-3 max-w-2xl mx-auto lg:mx-0">
              <p className="text-xl sm:text-2xl font-bold text-brand-gold flex items-center justify-center lg:justify-start gap-2">
                <Droplet className="w-6 h-6 text-brand-blue fill-brand-blue/20 inline" />
                Pure By Nature. Safe By Choice.
              </p>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Premium packaged drinking water manufactured using advanced multi-stage purification technology for homes, corporate offices, retailers, and distributors.
              </p>
            </div>

            {/* Key Quality Indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-brand-blue/10 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                <span className="text-xs font-semibold text-slate-800">RO + UV + Ozonized</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-brand-blue/10 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                <span className="text-xs font-semibold text-slate-800">Balanced pH 7.2 - 7.5</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm p-2.5 rounded-xl border border-brand-blue/10 shadow-sm col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
                <span className="text-xs font-semibold text-slate-800">Food Grade PET</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenDistributorModal}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-aqua text-white font-extrabold text-base rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>Get Distribution Partner Dealership</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold text-base rounded-full border border-slate-200 shadow-md hover:border-brand-blue/40 transition-all duration-300 text-center"
              >
                Contact Us
              </a>
            </div>

            {/* Sub-line */}
            <p className="text-xs font-medium text-slate-500 tracking-wider uppercase pt-2">
              Drink Pure, Live Pure &bull; Ghaziabad Plant &bull; FSSAI Licensed
            </p>
          </motion.div>

          {/* Right Column: Premium Bottle Mockup & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Water Splash Outer Aura */}
            <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-brand-blue/20 via-brand-aqua/30 to-white/40 blur-2xl animate-pulse" />

            {/* Central Bottle Container with Floating Animation */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[340px] sm:max-w-[400px] drop-shadow-2xl"
            >
              <div className="relative rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-white/80 to-white/30 backdrop-blur-md border border-white/60 shadow-2xl">
                <Image
                  src="/images/aquevia_bottle_1l.jpg"
                  alt="Aquevia 1L Packaged Drinking Water Bottle by ASA Beverages"
                  width={600}
                  height={800}
                  priority
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Quality Callout 1 (Top Right) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:-right-6 glass-card p-3 rounded-2xl border border-brand-aqua/40 shadow-xl flex items-center gap-3 bg-white/90 backdrop-blur-md z-20"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-aqua flex items-center justify-center text-white font-bold text-xs shadow-md">
                  1L
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Primary Size</div>
                  <div className="text-[10px] font-medium text-brand-blue">Ergonomic Grip</div>
                </div>
              </motion.div>

              {/* Floating Quality Callout 2 (Bottom Left) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 sm:-left-6 glass-card p-3.5 rounded-2xl border border-brand-gold/40 shadow-xl flex items-center gap-3 bg-white/95 backdrop-blur-md z-20"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-gold to-yellow-400 flex items-center justify-center text-white shadow-md">
                  <Award className="w-5 h-5 text-slate-900" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">100% Food Grade</div>
                  <div className="text-[10px] font-semibold text-brand-gold uppercase">BPA-Free PET</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
