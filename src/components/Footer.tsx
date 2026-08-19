"use client";

import React from "react";
import { Phone, MapPin, Award } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-3">
            <Logo variant="dark" />
            <p className="text-sm text-slate-400 leading-relaxed">
              ASA Beverages makes Aquevia, clean and safe packaged drinking water purified through a 9-stage RO, UV, and ozone process.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#hero" onClick={(e) => handleLinkClick(e, "#hero")} className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, "#about")} className="hover:text-white transition-colors">About</a></li>
              <li><a href="#products" onClick={(e) => handleLinkClick(e, "#products")} className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#process" onClick={(e) => handleLinkClick(e, "#process")} className="hover:text-white transition-colors">Purification</a></li>
              <li><a href="#faq" onClick={(e) => handleLinkClick(e, "#faq")} className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* More */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#why-choose-us" onClick={(e) => handleLinkClick(e, "#why-choose-us")} className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#business" onClick={(e) => handleLinkClick(e, "#business")} className="hover:text-white transition-colors">Who We Serve</a></li>
              <li><a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">Contact</h4>
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>Dist., Ghaziabad, Uttar Pradesh - 201002 (INDIA)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <a href="tel:+919870170922" className="hover:text-white">+91 9870170922</a>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-gold shrink-0" />
                <span className="text-brand-gold text-xs font-medium">FSSAI Lic. 22726696000236</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} ASA Beverages. All rights reserved.</span>
          <span>FSSAI License: 22726696000236 &bull; Made in India</span>
        </div>
      </div>
    </footer>
  );
}
