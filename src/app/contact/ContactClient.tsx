"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import DistributorModal from "@/components/DistributorModal";

export default function ContactClient() {
  const [distributorModalOpen, setDistributorModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900 pt-20">
      <Navbar onOpenDistributorModal={() => setDistributorModalOpen(true)} />
      <div className="bg-brand-sky/50 py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <h1 className="font-display font-black text-4xl sm:text-5xl text-slate-900">Contact ASA Beverages</h1>
          <p className="text-brand-blue font-bold text-sm">Ghaziabad, Uttar Pradesh &bull; Plant Hotline: +91 9870170922</p>
        </div>
      </div>
      <ContactSection />
      <Footer />
      <FloatingWidgets />
      <DistributorModal isOpen={distributorModalOpen} onClose={() => setDistributorModalOpen(false)} />
    </main>
  );
}
