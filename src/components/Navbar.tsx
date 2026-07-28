"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Droplets, Phone, Menu, X, ChevronRight, Award, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenDistributorModal?: () => void;
}

export default function Navbar({ onOpenDistributorModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Sticky navbar threshold
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Purification Tech", href: "#process" },
    { name: "Products", href: "#products" },
    { name: "Quality & Safety", href: "#quality" },
    { name: "Who We Serve", href: "#business" },
    { name: "Distributor Partner", href: "#distributor" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-brand-sky z-50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-blue via-brand-aqua to-brand-gold transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-md shadow-md py-3 border-b border-brand-blue/10"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-brand-blue to-brand-aqua p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-brand-blue animate-pulse" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight flex items-center gap-1.5">
                  ASA <span className="text-brand-blue">BEVERAGES</span>
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-brand-gold uppercase flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-brand-gold" />
                  Mfr of Aquevia Mineral Water
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 hover:text-brand-blue transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+919870170922"
                className="flex items-center gap-2 text-sm font-semibold text-slate-800 hover:text-brand-blue transition-colors px-3 py-2 rounded-lg hover:bg-brand-sky/50"
              >
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>+91 9870170922</span>
              </a>

              <button
                onClick={onOpenDistributorModal}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white transition-all duration-300 bg-gradient-to-r from-brand-blue to-brand-aqua rounded-full shadow-md hover:shadow-lg hover:scale-105 active:scale-95 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Distribution
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href="tel:+919870170922"
                className="p-2 rounded-full bg-brand-sky text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
                aria-label="Call ASA Beverages"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-slate-700 hover:text-brand-blue rounded-lg bg-slate-100/80 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-brand-sky hover:text-brand-blue transition-colors flex items-center justify-between"
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDistributorModal?.();
                  }}
                  className="w-full py-3 px-4 bg-gradient-to-r from-brand-blue to-brand-aqua text-white text-center font-bold rounded-xl shadow-md flex items-center justify-center gap-2"
                >
                  Become a Distributor Partner
                  <ChevronRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+919870170922"
                  className="w-full py-3 px-4 bg-slate-100 text-slate-800 text-center font-semibold rounded-xl flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-brand-blue" />
                  Call Us: +91 9870170922
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
