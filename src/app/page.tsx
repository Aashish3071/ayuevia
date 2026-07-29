"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PurificationProcess from "@/components/PurificationProcess";
import ProductSection from "@/components/ProductSection";
import OfficialLabelSection from "@/components/OfficialLabelSection";
import QualitySection from "@/components/QualitySection";
import BusinessSection from "@/components/BusinessSection";
import DistributionSection from "@/components/DistributionSection";
import QualityCertifications from "@/components/QualityCertifications";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import DistributorModal from "@/components/DistributorModal";
import { Droplet } from "lucide-react";

export default function Home() {
  const [distributorModalOpen, setDistributorModalOpen] = useState(false);
  const [selectedRequirement, setSelectedRequirement] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenInquiryWithRequirement = (req: string) => {
    setSelectedRequirement(req);
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-brand-sky border-t-brand-blue animate-spin" />
          <Droplet className="w-10 h-10 text-brand-blue animate-bounce absolute" />
        </div>
        <div className="mt-6 text-center">
          <h2 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight">
            ASA BEVERAGES
          </h2>
          <p className="text-xs font-bold text-brand-gold uppercase tracking-widest mt-1">
            Pure By Nature. Safe By Choice.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 relative">
      {/* Sticky Navigation */}
      <Navbar onOpenDistributorModal={() => setDistributorModalOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenDistributorModal={() => setDistributorModalOpen(true)} />

      {/* About Section */}
      <AboutSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Official Bottle Label Slip Spotlight */}
      <OfficialLabelSection />

      {/* Purification Process Timeline */}
      <PurificationProcess />

      {/* Product Section */}
      <ProductSection onSelectProductForInquiry={handleOpenInquiryWithRequirement} />

      {/* Quality Section */}
      <QualitySection />

      {/* Business Section (Who We Serve) */}
      <BusinessSection onOpenInquiry={handleOpenInquiryWithRequirement} />

      {/* Distribution Section (B2B Leads) */}
      <DistributionSection onOpenDistributorModal={() => setDistributorModalOpen(true)} />

      {/* Certifications Badges */}
      <QualityCertifications />

      {/* FAQ Section */}
      <FaqSection />

      {/* Contact Section */}
      <ContactSection initialRequirement={selectedRequirement} />

      {/* Footer */}
      <Footer />

      {/* Floating Widgets */}
      <FloatingWidgets />

      {/* Distributor Dealership Modal */}
      <DistributorModal
        isOpen={distributorModalOpen}
        onClose={() => setDistributorModalOpen(false)}
      />
    </main>
  );
}
