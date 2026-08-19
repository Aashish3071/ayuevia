"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface ProductSectionProps {
  onSelectProductForInquiry: (productName: string) => void;
}

export default function ProductSection({ onSelectProductForInquiry }: ProductSectionProps) {
  const products = [
    {
      id: "1l-hero",
      name: "Aquevia 1L",
      capacity: "1 Litre (Primary Size)",
      image: "/images/aquevia_bottle_1l.jpg",
      tagline: "Our everyday bottle.",
      features: ["Textured ribbed PET body", "Ergonomic grip", "Tamper-proof white cap", "Balanced pH 7.2-7.5"],
      packaging: "Case of 12",
    },
    {
      id: "20l-jar",
      name: "Aquevia 20L Jar",
      capacity: "20 Litre Dispenser",
      image: "/images/aquevia_jar_20l.jpg",
      tagline: "For offices and homes.",
      features: ["BPA-free heavy PET", "Spill-proof cap", "Side handle", "Reusable & recyclable"],
      packaging: "Individual unit",
    },
    {
      id: "range",
      name: "Full Range",
      capacity: "200ml · 500ml · 1L · 2L",
      image: "/images/aquevia_range.jpg",
      tagline: "A size for every occasion.",
      features: ["200ml: events & travel", "500ml: handy pack", "1L: daily use", "2L: family pack"],
      packaging: "Shrink-wrapped cases",
    },
  ];

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-10 sm:mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
            Our Products
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Packaged in food-grade ribbed PET bottles. Available in 200ml, 500ml, 1L, 2L, and 20L jars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="h-64 bg-slate-50 flex items-center justify-center p-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="max-h-56 w-auto object-contain"
                />
              </div>

              {/* Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-brand-blue mb-1">{product.capacity}</p>
                  <h3 className="font-bold text-lg text-slate-900">{product.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{product.tagline}</p>

                  <div className="mt-3 space-y-1.5">
                    {product.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <p className="text-[11px] text-slate-500 mb-2">Packaging: {product.packaging}</p>
                  <button
                    onClick={() => onSelectProductForInquiry(product.name)}
                    className="w-full py-2.5 bg-brand-blue hover:bg-brand-darkblue text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    Inquire Rates
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
