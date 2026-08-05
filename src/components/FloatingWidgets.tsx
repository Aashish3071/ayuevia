"use client";

import React, { useState, useEffect } from "react";
import { Phone, ArrowUp } from "lucide-react";

// Official WhatsApp SVG Logo Icon
function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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

  const whatsappUrl =
    "https://wa.me/919870170922?text=Hello%20ASA%20Beverages%2C%20I%20am%20interested%20in%20Aquevia%20water%20supply";

  return (
    <>
      {/* Desktop Floating Right Action Stack (Hidden on Mobile to avoid duplicate WhatsApp buttons) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        
        {/* Official Desktop WhatsApp Floating Widget (Hidden on mobile) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex group relative items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-[#25D366]/30"
          aria-label="Chat on WhatsApp (+91-9870170922)"
        >
          <WhatsAppIcon className="w-7 h-7 text-white" />
          <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            WhatsApp Us: +91 9870170922
          </span>
        </a>

        {/* Scroll To Top Drop Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-brand-blue hover:bg-brand-darkblue text-white shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 mb-14 lg:mb-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Mobile Bottom Bar (Call & WhatsApp Direct Side-by-Side) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-2xl flex items-center justify-around gap-2">
        <a
          href="tel:+919870170922"
          className="flex-1 py-2.5 px-3 rounded-xl bg-brand-blue text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
        >
          <Phone className="w-4 h-4 shrink-0" />
          <span>Call: +91 9870170922</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
        >
          <WhatsAppIcon className="w-4 h-4 shrink-0 text-white" />
          <span>WhatsApp Chat</span>
        </a>
      </div>
    </>
  );
}
