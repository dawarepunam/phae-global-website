"use client";

import React, { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Sparkles,
  Clock 
} from "lucide-react";
import { COMPANY_INFO } from "@/data/polyhubData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    structureType: "Naturally Ventilated Polyhouse",
    farmArea: "1000 - 2000 sq. meters",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F5F2E9] min-h-screen">
      <PageBanner
        title="Get In Touch"
        subtitle="We're here to help you build a better tomorrow"
        breadcrumbItems={[{ label: "Contact" }]}
        backgroundImage="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Contact Details & Direct Call */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-black text-[#102C24] border-b border-slate-100 pb-3">
                Corporate & Regional Offices
              </h3>

              <div className="space-y-5 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#183F32] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#102C24] text-xs uppercase tracking-wider">Corporate Office (Punjab)</h4>
                    <p className="mt-1 leading-relaxed text-slate-700">
                      {COMPANY_INFO.contacts.corporateOffice}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#183F32] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#102C24] text-xs uppercase tracking-wider">Sales Office (Maharashtra)</h4>
                    <p className="mt-1 leading-relaxed text-slate-700">
                      {COMPANY_INFO.contacts.salesOffice}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#183F32] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#102C24] text-xs uppercase tracking-wider">Official Email</h4>
                    <a href={`mailto:${COMPANY_INFO.contacts.email}`} className="mt-1 text-slate-700 font-medium block hover:text-[#183F32]">
                      {COMPANY_INFO.contacts.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#183F32] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#102C24] text-xs uppercase tracking-wider">Phone Helpline</h4>
                    <a href={`tel:${COMPANY_INFO.contacts.phone}`} className="mt-1 text-slate-800 font-bold block hover:text-[#183F32]">
                      {COMPANY_INFO.contacts.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#183F32] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#102C24] text-xs uppercase tracking-wider">Working Hours</h4>
                    <p className="mt-1 text-slate-700">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100">
              <a
                href={`https://wa.me/${COMPANY_INFO.contacts.whatsapp}?text=Hello%20PolyHub%20Agro%20Engineers,%20I%20am%20interested%20in%20a%20Polyhouse%20Quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

          {/* Column 2: Send Us a Message Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl">
            <h3 className="text-xl font-black text-[#102C24] border-b border-slate-100 pb-3 mb-6">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#183F32] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-[#102C24]">Inquiry Submitted Successfully!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Our greenhouse technical manager will review your farm requirements and connect with you at <strong className="text-[#183F32]">{formData.phone || "your number"}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#183F32]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 Mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#183F32]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#183F32]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Structure Type</label>
                    <select
                      value={formData.structureType}
                      onChange={(e) => setFormData({...formData, structureType: e.target.value})}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#183F32] bg-white"
                    >
                      <option>Naturally Ventilated Polyhouse</option>
                      <option>Fan and Pad Polyhouse</option>
                      <option>Shade Net House (Dome / Flat)</option>
                      <option>Tunnel Type Polyhouse</option>
                      <option>Hydroponic Greenhouse</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">State / Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Punjab, Maharashtra"
                      value={formData.state}
                      onChange={(e) => setFormData({...formData, state: e.target.value})}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#183F32]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message / Project Details</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your land area, targeted crop (e.g. Dutch Rose, Capsicum), or subsidy inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#183F32]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-gold py-3.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Technical Proposal Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Column 3: Let's Grow Together Poster */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-xl relative min-h-[360px] flex flex-col justify-end p-6 border border-[#B5A16A]/30 group">
            <img
              src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80"
              alt="Let's grow together"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102C24] via-[#102C24]/80 to-transparent" />
            <div className="relative z-10 text-white space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5B27D] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#B5A16A]" />
                Partnership
              </span>
              <h4 className="text-2xl font-black font-serif italic text-white leading-tight">
                Let&apos;s Grow Together
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Start your profitable protected greenhouse venture with India&apos;s trusted agro structural engineering team.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

