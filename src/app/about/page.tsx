"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import QualitySection from "@/components/QualitySection";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import DistributorModal from "@/components/DistributorModal";

export default function AboutPage() {
  const [distributorModalOpen, setDistributorModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900 pt-20">
      <Navbar onOpenDistributorModal={() => setDistributorModalOpen(true)} />
      <div className="bg-brand-sky/50 py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <h1 className="font-display font-black text-4xl sm:text-5xl text-slate-900">About ASA Beverages</h1>
          <p className="text-brand-blue font-bold text-sm">Manufacturer of Aquevia Premium Packaged Water</p>
        </div>
      </div>
      <AboutSection />
      <QualitySection />
      <Footer />
      <FloatingWidgets />
      <DistributorModal isOpen={distributorModalOpen} onClose={() => setDistributorModalOpen(false)} />
    </main>
  );
}
