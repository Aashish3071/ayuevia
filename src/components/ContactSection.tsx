"use client";

import React, { useState } from "react";
import {
  MapPin, Phone, MessageSquare, Send,
  CheckCircle2, AlertCircle, Clock,
} from "lucide-react";

interface ContactSectionProps {
  initialRequirement?: string;
}

export default function ContactSection({ initialRequirement = "" }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    city: "Ghaziabad",
    requirement: initialRequirement || "General Bulk Water Supply",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage(data.message);
        setFormData({
          name: "",
          phone: "",
          businessName: "",
          city: "Ghaziabad",
          requirement: "General Bulk Water Supply",
        });
      } else {
        setErrorMessage(data.error || "Failed to send message.");
      }
    } catch {
      setErrorMessage("Something went wrong. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-10 sm:mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Questions about supply, pricing, or distribution? Reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Left: Office Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-xl bg-slate-900 text-white space-y-5 shadow-sm">
              <div>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Manufacturing & HQ</p>
                <h3 className="font-bold text-xl text-white mt-1">ASA Beverages</h3>
                <p className="text-xs text-slate-400 mt-0.5">Manufacturer of Aquevia Packaged Drinking Water</p>
              </div>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span>Dist. Ghaziabad, Uttar Pradesh - 201002 (INDIA)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <a href="tel:+919870170922" className="text-white hover:underline font-medium">+91 9870170922</a>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:+919870170922"
                  className="py-2.5 rounded-lg bg-brand-blue hover:bg-brand-darkblue text-white font-semibold text-xs text-center transition-colors shadow-sm"
                >
                  Call Now
                </a>
                <a
                  href="https://wa.me/919870170922?text=Hello%20ASA%20Beverages%2C%20I%20am%20interested%20in%20Aquevia%20water%20supply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs text-center transition-colors shadow-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-slate-200 h-52 sm:h-60 shadow-sm">
              <iframe
                title="ASA Beverages Ghaziabad Location"
                src="https://maps.google.com/maps?q=Ghaziabad,%20Uttar%20Pradesh,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 space-y-5 shadow-sm">
              <div>
                <h3 className="font-bold text-xl text-slate-900">Send a Supply Inquiry</h3>
                <p className="text-sm text-slate-500 mt-1">Fill in your details for price quotes, samples, or delivery schedules.</p>
              </div>

              {successMessage && (
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-base sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="9870170922"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-base sm:text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">Business Name</label>
                    <input
                      type="text"
                      placeholder="Grand Hotel / Retail Store"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-base sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-700 block mb-1">City *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ghaziabad / Noida / Delhi"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-base sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-700 block mb-1">Requirement</label>
                  <textarea
                    rows={3}
                    placeholder="Bottle sizes needed, estimated quantity, or dealership inquiry..."
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-base sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-brand-blue hover:bg-brand-darkblue text-white font-semibold text-sm rounded-lg disabled:opacity-50 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  {loading ? "Submitting..." : (<><Send className="w-4 h-4" /> Submit Inquiry</>)}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
