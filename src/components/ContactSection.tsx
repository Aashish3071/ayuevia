"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  MapPin,
  Phone,
  MessageSquare,
  Send,
  Building,
  CheckCircle2,
  AlertCircle,
  Clock,
  Mail,
  Sparkles,
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
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#0086FF", "#25D0FF", "#D8B15A"],
        });
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
    } catch (err) {
      setErrorMessage("Something went wrong. Please check your network connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Soft Background Radial */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-brand-sky/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-sky text-brand-blue font-bold text-xs uppercase tracking-wider">
            <Mail className="w-4 h-4 text-brand-gold" />
            Get In Touch
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Contact <span className="text-gradient-water">ASA Beverages</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Have questions about Aquevia water supply, corporate bulk orders, or retail dealership? Reach out to our Ghaziabad office today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Plant & Company Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-brand-darkblue to-slate-900 text-white shadow-xl space-y-6">
              <div>
                <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">
                  Manufacturing Facility & HQ
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white mt-1">
                  ASA Beverages
                </h3>
                <p className="text-xs text-brand-aqua mt-0.5">
                  Mfr. of Aquevia Packaged Drinking Water
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-aqua shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Plant Location</span>
                    <span>Ghaziabad, Uttar Pradesh, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Direct Phone / Hotline</span>
                    <a href="tel:+919870170922" className="text-brand-aqua hover:underline font-semibold">
                      +91 9870170922
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-aqua shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Operational Hours</span>
                    <span>Monday - Saturday: 8:00 AM - 8:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Instant Call & WhatsApp Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href="tel:+919870170922"
                  className="py-3 px-4 rounded-xl bg-brand-blue hover:bg-brand-darkblue text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://wa.me/919870170922?text=Hello%20ASA%20Beverages%2C%20I%20am%20interested%20in%20Aquevia%20water%20supply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Google Map Interactive Placeholder */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-64 relative bg-slate-100 flex items-center justify-center">
              <iframe
                title="ASA Beverages Ghaziabad Location"
                src="https://maps.google.com/maps?q=Ghaziabad,%20Uttar%20Pradesh,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                Ghaziabad Industrial Belt, UP
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-brand-blue/20 shadow-xl space-y-6">
              <div>
                <h3 className="font-display font-extrabold text-2xl text-slate-900">
                  Send Supply Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below to request price quotes, sample bottles, or delivery schedules.
                </p>
              </div>

              {/* Alert Feedback Messages */}
              {successMessage && (
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>{successMessage}</div>
                </div>
              )}

              {errorMessage && (
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>{errorMessage}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm text-slate-800"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9870170922"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Business Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Business / Store Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Grand Hotel / Retail Store"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm text-slate-800"
                    />
                  </div>

                  {/* City */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">City / Location *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ghaziabad / Noida / Delhi"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm text-slate-800"
                    />
                  </div>
                </div>

                {/* Requirement */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Requirement Details</label>
                  <textarea
                    rows={4}
                    placeholder="Specify bottle sizes needed (1L, 20L Jar, 500ml), estimated weekly quantity, or dealership inquiry..."
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue text-sm text-slate-800"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 bg-gradient-to-r from-brand-blue to-brand-aqua hover:from-brand-darkblue hover:to-brand-blue text-white font-extrabold text-sm rounded-xl shadow-md hover:shadow-lg disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Supply Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
