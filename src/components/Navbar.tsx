"use client";

import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import Logo from "./Logo";

interface NavbarProps {
  onOpenDistributorModal?: () => void;
}

export default function Navbar({ onOpenDistributorModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Products", href: "#products" },
    { name: "Who We Serve", href: "#business" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "glass-panel shadow-sm py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Logo variant="light" />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-brand-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919870170922"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-brand-sky border border-brand-blue/30 text-brand-blue font-bold text-xs hover:bg-brand-blue hover:text-white transition-all duration-200 shadow-sm"
              aria-label="Call ASA Beverages +91 9870170922"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>+91 9870170922</span>
            </a>

            <button
              onClick={onOpenDistributorModal}
              className="px-4 py-2 text-xs font-bold text-white bg-brand-blue rounded-lg hover:bg-brand-darkblue transition-colors shadow-sm"
            >
              Get Distribution
            </button>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:+919870170922"
              className="p-2 rounded-lg bg-brand-sky border border-brand-blue/30 text-brand-blue font-bold text-xs flex items-center justify-center hover:bg-brand-blue hover:text-white transition-colors"
              aria-label="Call +91 9870170922"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenDistributorModal}
              className="px-3 py-1.5 bg-brand-blue text-white font-bold text-xs rounded-lg shadow-sm"
            >
              Distributor
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-brand-blue rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-brand-sky hover:text-brand-blue transition-colors"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-slate-100 space-y-2.5">
              <a
                href="tel:+919870170922"
                className="w-full py-2.5 px-3 bg-brand-sky border border-brand-blue/30 text-brand-blue font-bold rounded-lg flex items-center justify-center gap-2 text-sm hover:bg-brand-blue hover:text-white transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline: +91 9870170922</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDistributorModal?.();
                }}
                className="w-full py-3 bg-brand-blue text-white text-center font-bold rounded-lg text-sm shadow-sm hover:bg-brand-darkblue transition-colors"
              >
                Become a Distributor
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
