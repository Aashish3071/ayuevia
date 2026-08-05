"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Award } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 relative overflow-hidden border-t border-white/10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info with Official Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="dark" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-white font-semibold">Pure By Nature. Safe By Choice.</strong> ASA Beverages delivers premium packaged drinking water purified using advanced 9-stage RO, UV, and Ozonization technology.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><a href="#hero" className="hover:text-brand-aqua transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-aqua transition-colors">About Us</a></li>
              <li><a href="#why-choose-us" className="hover:text-brand-aqua transition-colors">Why Choose Us</a></li>
              <li><a href="#process" className="hover:text-brand-aqua transition-colors">Purification Tech</a></li>
              <li><a href="#products" className="hover:text-brand-aqua transition-colors">Product Range</a></li>
            </ul>
          </div>

          {/* Business & Quality */}
          <div className="space-y-3">
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider">
              Commercial & Safety
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><a href="#quality" className="hover:text-brand-aqua transition-colors">Committed to Quality</a></li>
              <li><a href="#business" className="hover:text-brand-aqua transition-colors">Who We Serve</a></li>
              <li><a href="#faq" className="hover:text-brand-aqua transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-brand-aqua transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact & FSSAI Details */}
          <div className="space-y-3">
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider">
              Plant & FSSAI Lic.
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>Dist., Ghaziabad, Uttar Pradesh - 201002 (INDIA)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-aqua shrink-0" />
                <a href="tel:+919870170922" className="hover:text-white font-semibold">
                  +91 9870170922
                </a>
              </div>
              <div className="flex items-center gap-2 text-brand-gold font-semibold">
                <Award className="w-4 h-4 text-brand-gold shrink-0" />
                <span>FSSAI Lic. No. 22726696000236</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-slate-300">ASA BEVERAGES</strong>. All Rights Reserved. Drink Pure, Live Pure.
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-slate-400 cursor-pointer">FSSAI License: 22726696000236</span>
            <span>&bull;</span>
            <span className="hover:text-slate-400 cursor-pointer">Made In India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
