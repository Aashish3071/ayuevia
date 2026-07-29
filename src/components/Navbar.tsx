"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import Logo from "./Logo";

interface NavbarProps {
  onOpenDistributorModal?: () => void;
}

export default function Navbar({ onOpenDistributorModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Why Us", href: "#why-choose-us" },
    { name: "Purification", href: "#process" },
    { name: "Products", href: "#products" },
    { name: "Quality", href: "#quality" },
    { name: "Who We Serve", href: "#business" },
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
            ? "bg-white/90 backdrop-blur-md shadow-sm py-2.5 border-b border-brand-blue/10"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Official Brand Logo */}
            <Logo variant="light" />

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5 whitespace-nowrap">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors duration-200 whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3 shrink-0 whitespace-nowrap">
              <a
                href="tel:+919870170922"
                className="hidden xl:flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-brand-blue transition-colors px-3 py-2 rounded-xl bg-slate-100/70 hover:bg-brand-sky/60 whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                <span>+91 9870170922</span>
              </a>

              <button
                onClick={onOpenDistributorModal}
                className="relative inline-flex items-center justify-center px-4 py-2.5 text-xs font-extrabold text-white transition-all duration-300 bg-gradient-to-r from-brand-blue to-brand-aqua rounded-full shadow-sm hover:shadow-md hover:scale-105 active:scale-95 group overflow-hidden whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Get Distribution
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            </div>

            {/* Mobile & Tablet Toggle Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={onOpenDistributorModal}
                className="px-3 py-1.5 bg-gradient-to-r from-brand-blue to-brand-aqua text-white font-extrabold text-xs rounded-full shadow-sm"
              >
                Distributor
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-brand-blue rounded-xl bg-slate-100/80 focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile / Tablet Drawer Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-brand-sky hover:text-brand-blue transition-colors flex items-center justify-between"
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDistributorModal?.();
                  }}
                  className="w-full py-3 px-4 bg-gradient-to-r from-brand-blue to-brand-aqua text-white text-center font-bold rounded-xl shadow-md flex items-center justify-center gap-2 text-xs"
                >
                  Become a Distributor Partner
                  <ChevronRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+919870170922"
                  className="w-full py-2.5 px-4 bg-slate-100 text-slate-800 text-center font-semibold rounded-xl flex items-center justify-center gap-2 text-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  Call Hotline: +91 9870170922
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
