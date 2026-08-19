"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import QualityCertifications from "@/components/QualityCertifications";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import DistributorModal from "@/components/DistributorModal";

export default function AboutClient() {
  const [distributorModalOpen, setDistributorModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900 pt-20 sm:pt-24">
      <Navbar onOpenDistributorModal={() => setDistributorModalOpen(true)} />
      <div className="bg-slate-50 py-10 sm:py-14 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900">About ASA Beverages</h1>
          <p className="text-brand-blue font-medium text-xs sm:text-sm">Manufacturer of Aquevia Packaged Drinking Water, Ghaziabad, UP</p>
        </div>
      </div>
      <AboutSection />
      <QualityCertifications />
      <Footer />
      <FloatingWidgets />
      <DistributorModal isOpen={distributorModalOpen} onClose={() => setDistributorModalOpen(false)} />
    </main>
  );
}
