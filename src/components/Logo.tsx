"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  showSubtext?: boolean;
  className?: string;
}

export default function Logo({ variant = "light", showSubtext = true, className = "" }: LogoProps) {
  const isDarkBg = variant === "dark";

  return (
    <Link href="/" className={`inline-flex items-center gap-3 group shrink-0 ${className}`}>
      {/* Official ASA Golden 'A' Emblem SVG */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-brand-gold/40 p-1.5 shadow-md group-hover:scale-105 group-hover:border-brand-gold transition-all duration-300 flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
          <defs>
            {/* Gold Gradient */}
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5D061" />
              <stop offset="50%" stopColor="#D8B15A" />
              <stop offset="100%" stopColor="#B38B32" />
            </linearGradient>

            {/* Cyan Droplet Gradient */}
            <linearGradient id="waterDropGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#25D0FF" />
              <stop offset="100%" stopColor="#0086FF" />
            </linearGradient>
          </defs>

          {/* Golden 'A' Frame */}
          <path
            d="M 50 10 L 85 75 L 72 75 L 50 32 L 28 75 L 15 75 Z"
            fill="url(#goldGrad)"
          />

          {/* Golden Wave Swosh */}
          <path
            d="M 22 62 C 38 52, 62 72, 82 58 C 75 66, 45 74, 22 62 Z"
            fill="url(#goldGrad)"
          />

          {/* Cyan Water Droplet inside 'A' */}
          <path
            d="M 50 22 C 50 22, 40 38, 40 44 C 40 49.5, 44.5 54, 50 54 C 55.5 54, 60 49.5, 60 44 C 60 38, 50 22, 50 22 Z"
            fill="url(#waterDropGrad)"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col whitespace-nowrap leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-display font-black text-lg sm:text-xl tracking-tight ${
              isDarkBg ? "text-white" : "text-slate-900"
            }`}
          >
            ASA <span className="text-gradient-gold">BEVERAGES</span>
          </span>
        </div>

        {showSubtext && (
          <span
            className={`text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase mt-1 ${
              isDarkBg ? "text-brand-aqua" : "text-brand-blue"
            }`}
          >
            Mfr. of Aquevia Mineral Water
          </span>
        )}
      </div>
    </Link>
  );
}
