"use client";

import React from "react";
import Link from "next/link";
import { Droplets, Phone, MapPin, Mail, ShieldCheck, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 relative overflow-hidden border-t border-white/10">
      {/* Background Water Subtle Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-blue to-brand-aqua p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-brand-aqua" />
                </div>
              </div>
              <div>
                <span className="font-display font-black text-2xl text-white tracking-tight">
                  ASA <span className="text-brand-blue">BEVERAGES</span>
                </span>
                <span className="text-[10px] font-bold text-brand-gold uppercase tracking-wider block">
                  Mfr. of Aquevia Packaged Water
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-white font-semibold">Pure By Nature. Safe By Choice.</strong> ASA Beverages delivers premium packaged drinking water purified using advanced 9-stage RO, UV, and Ozonization technology.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-brand-blue hover:text-white flex items-center justify-center text-slate-400 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-brand-blue hover:text-white flex items-center justify-center text-slate-400 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-brand-blue hover:text-white flex items-center justify-center text-slate-400 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-brand-blue hover:text-white flex items-center justify-center text-slate-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
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
              <li><a href="#distributor" className="hover:text-brand-aqua transition-colors">Become a Distributor</a></li>
              <li><a href="#faq" className="hover:text-brand-aqua transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-brand-aqua transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider">
              Plant & Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-aqua shrink-0 mt-0.5" />
                <span>Ghaziabad, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <a href="tel:+919870170922" className="hover:text-white font-semibold">
                  +91 9870170922
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>FSSAI Certified Manufacturing</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-slate-300">ASA Beverages</strong>. All Rights Reserved. Manufactured in Ghaziabad, UP.
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Supply</span>
            <span>&bull;</span>
            <span className="hover:text-slate-400 cursor-pointer">FSSAI Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
