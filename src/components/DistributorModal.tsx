"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { X, Award, CheckCircle2, Send, AlertCircle, ShieldCheck, Phone, Building } from "lucide-react";

interface DistributorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DistributorModal({ isOpen, onClose }: DistributorModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    city: "",
    state: "Uttar Pradesh",
    expectedVolume: "500-1000 Cases/Month",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/distributor-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.5 },
          colors: ["#0086FF", "#25D0FF", "#D8B15A"],
        });
      } else {
        setError(data.error || "Application submission failed.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md overflow-y-auto">
        
        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-3xl max-w-2xl w-full border border-brand-blue/20 shadow-2xl overflow-hidden relative my-8"
        >
          {/* Header Banner */}
          <div className="p-6 bg-gradient-to-r from-slate-900 via-brand-darkblue to-slate-900 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/10 text-brand-aqua border border-white/20">
                <Award className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
                  ASA Beverages Dealership Application
                </h3>
                <p className="text-xs text-brand-aqua">
                  Exclusive Territory Distribution Rights for Aquevia Water
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {success ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-display font-extrabold text-2xl text-slate-900">
                  Application Received!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for applying to become an official distribution partner for <strong className="text-brand-blue">Aquevia Water by ASA Beverages</strong>. Our territory manager will review your city location and call you within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSuccess(false);
                      onClose();
                    }}
                    className="px-8 py-3 bg-brand-blue text-white font-bold text-sm rounded-full shadow-md hover:bg-brand-darkblue transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-xl bg-rose-50 text-rose-800 text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9870170922"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Business / Firm Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Aqua Logistics & Traders"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Target City / District *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ghaziabad / Meerut / Noida"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Expected Monthly Volume</label>
                    <select
                      value={formData.expectedVolume}
                      onChange={(e) => setFormData({ ...formData, expectedVolume: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-blue bg-white"
                    >
                      <option value="500-1000 Cases/Month">500 - 1,000 Cases/Month</option>
                      <option value="1000-3000 Cases/Month">1,000 - 3,000 Cases/Month</option>
                      <option value="3000-5000 Cases/Month">3,000 - 5,000 Cases/Month</option>
                      <option value="5000+ Cases/Month">5,000+ Cases (Super Stockist)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Email Address (Optional)</label>
                    <input
                      type="email"
                      placeholder="name@business.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Storage / Transport Infrastructure Notes</label>
                  <textarea
                    rows={2}
                    placeholder="Mention warehouse square footage, delivery vehicles available..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-blue"
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-4 bg-gradient-to-r from-brand-blue to-brand-aqua text-white font-extrabold text-sm rounded-xl shadow-md hover:shadow-lg disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Verifying Application...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Dealership Application</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
