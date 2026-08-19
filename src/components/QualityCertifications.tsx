"use client";

import React from "react";
import { Award, ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react";

export default function QualityCertifications() {
  const certs = [
    { title: "FSSAI Licensed", detail: "Lic. No. 22726696000236", icon: Award },
    { title: "HACCP Compliant", detail: "Cleanroom bottling", icon: ShieldCheck },
    { title: "ISO Standards", detail: "Quality management", icon: FileCheck },
    { title: "BIS IS:14543", detail: "Packaged water spec", icon: CheckCircle2 },
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {certs.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="flex items-center gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100">
                <Icon className="w-6 h-6 text-brand-blue shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{c.title}</p>
                  <p className="text-xs text-slate-500">{c.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
