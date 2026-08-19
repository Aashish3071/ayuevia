"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PurificationProcess from "@/components/PurificationProcess";
import ProductSection from "@/components/ProductSection";
import BusinessSection from "@/components/BusinessSection";
import QualityCertifications from "@/components/QualityCertifications";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import DistributorModal from "@/components/DistributorModal";

export default function Home() {
  const [distributorModalOpen, setDistributorModalOpen] = useState(false);
  const [selectedRequirement, setSelectedRequirement] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo(0, 0);
    }
  }, []);

  const handleOpenInquiryWithRequirement = (req: string) => {
    setSelectedRequirement(req);
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar onOpenDistributorModal={() => setDistributorModalOpen(true)} />

      <Hero onOpenDistributorModal={() => setDistributorModalOpen(true)} />

      <AboutSection />

      <WhyChooseUs />

      <ProductSection onSelectProductForInquiry={handleOpenInquiryWithRequirement} />

      <PurificationProcess />

      <BusinessSection onOpenInquiry={handleOpenInquiryWithRequirement} />

      <QualityCertifications />

      <FaqSection />

      <ContactSection initialRequirement={selectedRequirement} />

      <Footer />

      <FloatingWidgets />

      <DistributorModal
        isOpen={distributorModalOpen}
        onClose={() => setDistributorModalOpen(false)}
      />
    </main>
  );
}
