"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, ArrowUp, Droplet } from "lucide-react";

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Right Action Stack */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        
        {/* WhatsApp Quick Chat */}
        <a
          href="https://wa.me/919870170922?text=Hello%20ASA%20Beverages%2C%20I%20am%20interested%20in%20Aquevia%20water%20supply"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-emerald-400/30"
          aria-label="Chat on WhatsApp with ASA Beverages"
        >
          <MessageSquare className="w-7 h-7" />
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>

        {/* Scroll To Top Drop Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-brand-blue hover:bg-brand-darkblue text-white shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Mobile Bottom Quick Call & WhatsApp Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl flex items-center justify-around gap-2">
        <a
          href="tel:+919870170922"
          className="flex-1 py-2.5 px-4 rounded-xl bg-brand-blue text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
        >
          <Phone className="w-4 h-4" />
          <span>Call: +91 9870170922</span>
        </a>

        <a
          href="https://wa.me/919870170922?text=Hello%20ASA%20Beverages%2C%20I%20am%20interested%20in%20Aquevia%20water%20supply"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Inquiry</span>
        </a>
      </div>
    </>
  );
}
