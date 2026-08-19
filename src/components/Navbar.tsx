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
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-brand-blue transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 9870170922
            </a>

            <button
              onClick={onOpenDistributorModal}
              className="px-5 py-2.5 text-xs font-bold text-white bg-brand-blue rounded-lg hover:bg-brand-darkblue transition-colors"
            >
              Get Distribution
            </button>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenDistributorModal}
              className="px-3 py-1.5 bg-brand-blue text-white font-bold text-xs rounded-lg"
            >
              Distributor
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 rounded-lg"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDistributorModal?.();
                }}
                className="w-full py-3 bg-brand-blue text-white text-center font-bold rounded-lg text-sm"
              >
                Become a Distributor
              </button>
              <a
                href="tel:+919870170922"
                className="w-full py-2.5 bg-slate-50 text-slate-800 text-center font-medium rounded-lg flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                +91 9870170922
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
