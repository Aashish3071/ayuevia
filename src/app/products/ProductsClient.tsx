"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import DistributorModal from "@/components/DistributorModal";
import ContactSection from "@/components/ContactSection";

export default function ProductsClient() {
  const [distributorModalOpen, setDistributorModalOpen] = useState(false);
  const [selectedReq, setSelectedReq] = useState("");

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
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900">Aquevia Water Collection</h1>
          <p className="text-brand-blue font-medium text-xs sm:text-sm">1L Flagship Bottle, 500ml, 200ml, 2L Packs & 20L Dispenser Jars</p>
        </div>
      </div>
      <ProductSection onSelectProductForInquiry={(req) => setSelectedReq(req)} />
      <ContactSection initialRequirement={selectedReq} />
      <Footer />
      <FloatingWidgets />
      <DistributorModal isOpen={distributorModalOpen} onClose={() => setDistributorModalOpen(false)} />
    </main>
  );
}
