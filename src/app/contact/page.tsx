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
  Clock,
  Building2,
  Navigation,
  ExternalLink
} from "lucide-react";
import { COMPANY_INFO } from "@/data/polyhubData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeMapTab, setActiveMapTab] = useState<"punjab" | "pune">("punjab");
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

  const mapPunjab = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13778.679549348986!2d76.38137359999999!3d30.32049615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028a30e8c751d%3A0xb3638c11e6fa4f86!2sMini%20Secretariat%2C%20Patiala%2C%20Punjab%20147001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
  const mapPune = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.261317327889!2d73.91036347519266!3d18.562253982539958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdccd8e202562!2sViman%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <div className="bg-[#F5F2E9] min-h-screen">
      {/* Page Banner */}
      <PageBanner
        title="Get In Touch"
        subtitle="We're here to help you build a better tomorrow"
        breadcrumbItems={[{ label: "Contact" }]}
        backgroundImage="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1920&q=85"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Top 3-Card Summary (Phone, Email, Hours) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:border-[#B5A16A]/50 hover:shadow-xl transition-all duration-300 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#183F32] text-[#C5B27D] flex items-center justify-center shrink-0 shadow-md">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#183F32]">Quick Helpline</span>
              <h4 className="text-base font-extrabold text-[#102C24] mt-0.5">Call / WhatsApp</h4>
              <a 
                href={`tel:${COMPANY_INFO.contacts.phone}`} 
                className="text-sm font-black text-[#183F32] hover:text-[#B5A16A] block mt-1"
              >
                {COMPANY_INFO.contacts.phoneDisplay}
              </a>
              <span className="text-[11px] text-slate-500 block mt-0.5">Direct Greenhouse Advisory</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:border-[#B5A16A]/50 hover:shadow-xl transition-all duration-300 flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#183F32] text-[#C5B27D] flex items-center justify-center shrink-0 shadow-md">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#183F32]">Direct Email</span>
              <h4 className="text-base font-extrabold text-[#102C24] mt-0.5">Official Mail</h4>
              <a 
                href={`mailto:${COMPANY_INFO.contacts.email}`} 
                className="text-sm font-black text-[#183F32] hover:text-[#B5A16A] block mt-1 break-all"
              >
                {COMPANY_INFO.contacts.email}
              </a>
              <span className="text-[11px] text-slate-500 block mt-0.5">DPR & Estimation Inquiries</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md hover:border-[#B5A16A]/50 hover:shadow-xl transition-all duration-300 flex items-start gap-4 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-2xl bg-[#183F32] text-[#C5B27D] flex items-center justify-center shrink-0 shadow-md">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#183F32]">Working Hours</span>
              <h4 className="text-base font-extrabold text-[#102C24] mt-0.5">Mon – Sat</h4>
              <p className="text-sm font-bold text-slate-700 mt-1">9:00 AM – 7:00 PM</p>
              <span className="text-[11px] text-emerald-700 font-bold block mt-0.5">● Response within 24 Hours</span>
            </div>
          </div>

        </div>

        {/* 3-Column Layout: Offices Details + Form + Poster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Column 1: Detailed Office Addresses */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="section-label">OUR PRESENCE</span>
                <h3 className="text-xl font-black text-[#102C24] mt-3">
                  Registered Offices
                </h3>
                <div className="section-divider mt-2" />
              </div>

              {/* Corporate Office */}
              <div className="p-4 rounded-2xl bg-[#F5F2E9] border border-slate-200 space-y-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#183F32]" />
                  <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#102C24]">
                    Corporate Office (Punjab)
                  </h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed pl-6">
                  {COMPANY_INFO.contacts.corporateOffice}
                </p>
                <div className="pl-6 pt-1">
                  <button
                    onClick={() => setActiveMapTab("punjab")}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#183F32] hover:text-[#B5A16A]"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>View on Map Below ↓</span>
                  </button>
                </div>
              </div>

              {/* Sales Office */}
              <div className="p-4 rounded-2xl bg-[#F5F2E9] border border-slate-200 space-y-2">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#183F32]" />
                  <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#102C24]">
                    Sales Office (Maharashtra)
                  </h4>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed pl-6">
                  {COMPANY_INFO.contacts.salesOffice}
                </p>
                <div className="pl-6 pt-1">
                  <button
                    onClick={() => setActiveMapTab("pune")}
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#183F32] hover:text-[#B5A16A]"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>View on Map Below ↓</span>
                  </button>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-5 border-t border-slate-100">
              <a
                href={`https://wa.me/${COMPANY_INFO.contacts.whatsapp}?text=Hello%20PolyHub%20Agro%20Engineers,%20I%20am%20interested%20in%20a%20Polyhouse%20Quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

          {/* Column 2: Send Us a Message Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl">
            <h3 className="text-xl font-black text-[#102C24] border-b border-slate-100 pb-3 mb-6">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#183F32] flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="text-xl font-black text-[#102C24]">Inquiry Submitted Successfully!</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Our greenhouse project manager will review your farm requirements and contact you at <strong className="text-[#183F32]">{formData.phone || "your number"}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#102C24] text-white text-xs font-bold hover:bg-[#183F32] transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="form-input"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 Mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Structure Type</label>
                    <select
                      value={formData.structureType}
                      onChange={(e) => setFormData({...formData, structureType: e.target.value})}
                      className="form-input bg-white cursor-pointer"
                    >
                      <option>Naturally Ventilated Polyhouse</option>
                      <option>Fan and Pad Polyhouse</option>
                      <option>Shade Net House (Dome / Flat)</option>
                      <option>Tunnel Type Polyhouse</option>
                      <option>Hydroponic Greenhouse</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">State / Location</label>
                    <input
                      type="text"
                      placeholder="e.g. Punjab, Maharashtra"
                      value={formData.state}
                      onChange={(e) => setFormData({...formData, state: e.target.value})}
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Message / Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your land area, targeted crop (e.g. Dutch Rose, Capsicum), or subsidy inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="form-input"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-gold py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 mt-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Column 3: Let's Grow Together Poster */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-xl relative min-h-[380px] flex flex-col justify-end p-7 border-2 border-[#B5A16A]/30 group">
            <img
              src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80"
              alt="Let's grow together"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102C24] via-[#102C24]/80 to-transparent" />
            <div className="relative z-10 text-white space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5B27D] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#B5A16A]" />
                Partnership
              </span>
              <h4 className="text-3xl font-black font-serif italic text-white leading-tight">
                Let&apos;s Grow Together
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Start your profitable protected greenhouse venture with India&apos;s trusted agro structural engineering team.
              </p>
            </div>
          </div>

        </div>

        {/* Embedded Interactive Google Map Section (matching polyhubagro.com/contacts/) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <span className="section-label">GOOGLE MAP NAVIGATION</span>
              <h3 className="text-xl sm:text-2xl font-black text-[#102C24] mt-2">
                Locate Our Regional Offices
              </h3>
            </div>

            {/* Map Switcher Tabs */}
            <div className="flex items-center gap-2 bg-[#F5F2E9] p-1.5 rounded-2xl border border-slate-200">
              <button
                onClick={() => setActiveMapTab("punjab")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeMapTab === "punjab"
                    ? "bg-[#183F32] text-white shadow-md"
                    : "text-slate-600 hover:text-[#183F32]"
                }`}
              >
                Punjab (Corporate)
              </button>
              <button
                onClick={() => setActiveMapTab("pune")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeMapTab === "pune"
                    ? "bg-[#183F32] text-white shadow-md"
                    : "text-slate-600 hover:text-[#183F32]"
                }`}
              >
                Pune (Maharashtra)
              </button>
            </div>
          </div>

          {/* Embedded Google Map Iframe */}
          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
            <iframe
              src={activeMapTab === "punjab" ? mapPunjab : mapPune}
              title={activeMapTab === "punjab" ? "Punjab Corporate Office" : "Pune Sales Office"}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <span>
              📍 Currently showing: <strong className="text-[#183F32]">{activeMapTab === "punjab" ? COMPANY_INFO.contacts.corporateOffice : COMPANY_INFO.contacts.salesOffice}</strong>
            </span>
            <a
              href={activeMapTab === "punjab" ? "https://maps.google.com/?q=Mini+Secretariat+Patiala+Punjab" : "https://maps.google.com/?q=Viman+Nagar+Pune+Maharashtra"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#183F32] font-bold hover:text-[#B5A16A]"
            >
              <span>Open in Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
