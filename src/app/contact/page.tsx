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
  ExternalLink,
  Route,
  Search,
  Compass
} from "lucide-react";
import { COMPANY_INFO } from "@/data/polyhubData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeOffice, setActiveOffice] = useState<"punjab" | "pune">("punjab");
  const [userLocation, setUserLocation] = useState("");
  const [mapMode, setMapMode] = useState<"location" | "directions">("location");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    structureType: "Naturally Ventilated Polyhouse",
    farmArea: "1000 - 2000 sq. meters",
    message: ""
  });

  const offices = {
    punjab: {
      name: "Punjab Corporate Office",
      address: COMPANY_INFO.contacts.corporateOffice,
      query: "Mini Secretariat, Patiala, Punjab 147001",
      city: "Patiala, Punjab",
      latLng: "30.3205,76.3814"
    },
    pune: {
      name: "Pune Sales Office",
      address: COMPANY_INFO.contacts.salesOffice,
      query: "104 Niche Facade, New Airport Road, Viman Nagar, Pune, Maharashtra 411014",
      city: "Pune, Maharashtra",
      latLng: "18.5623,73.9104"
    }
  };

  const currentOffice = offices[activeOffice];

  // Dynamic Google Maps Embed URL
  const getMapUrl = () => {
    if (mapMode === "directions" && userLocation.trim()) {
      // Directions from User Origin to Selected Office Destination
      const origin = encodeURIComponent(userLocation.trim());
      const destination = encodeURIComponent(currentOffice.query);
      return `https://www.google.com/maps?saddr=${origin}&daddr=${destination}&output=embed`;
    }
    // Standard Location View with full interactive controls
    return `https://www.google.com/maps?q=${encodeURIComponent(currentOffice.query)}&t=m&z=15&output=embed&iwloc=near`;
  };

  // Launch Directions in Google Maps Native App
  const openDirectDirections = (origin?: string) => {
    const dest = encodeURIComponent(currentOffice.query);
    if (origin && origin.trim()) {
      window.open(`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin.trim())}&destination=${dest}`, "_blank");
    } else {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${dest}`, "_blank");
    }
  };

  // Auto-detect GPS Current Location
  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = `${position.coords.latitude},${position.coords.longitude}`;
          setUserLocation("My Current Location (GPS)");
          setMapMode("directions");
          openDirectDirections(coords);
        },
        () => {
          openDirectDirections();
        }
      );
    } else {
      openDirectDirections();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        
        {/* Top 3 Quick Helpline Cards */}
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Column 1: Office Addresses */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="section-label">OUR PRESENCE</span>
                <h3 className="text-xl font-black text-[#102C24] mt-3">
                  Registered Offices
                </h3>
                <div className="section-divider mt-2" />
              </div>

              {/* Punjab Office Card */}
              <div 
                onClick={() => setActiveOffice("punjab")}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeOffice === "punjab" 
                    ? "bg-[#183F32]/10 border-[#183F32] shadow-sm" 
                    : "bg-[#F5F2E9] border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 className={`w-4 h-4 ${activeOffice === "punjab" ? "text-[#183F32]" : "text-slate-600"}`} />
                    <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#102C24]">
                      Corporate Office (Punjab)
                    </h4>
                  </div>
                  {activeOffice === "punjab" && (
                    <span className="text-[10px] bg-[#183F32] text-white px-2 py-0.5 rounded-full font-bold">
                      Selected
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed pl-6 mt-2">
                  {COMPANY_INFO.contacts.corporateOffice}
                </p>
                <div className="pl-6 pt-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#183F32]">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>View Location & Route Below ↓</span>
                  </span>
                </div>
              </div>

              {/* Pune Office Card */}
              <div 
                onClick={() => setActiveOffice("pune")}
                className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeOffice === "pune" 
                    ? "bg-[#183F32]/10 border-[#183F32] shadow-sm" 
                    : "bg-[#F5F2E9] border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 className={`w-4 h-4 ${activeOffice === "pune" ? "text-[#183F32]" : "text-slate-600"}`} />
                    <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#102C24]">
                      Sales Office (Maharashtra)
                    </h4>
                  </div>
                  {activeOffice === "pune" && (
                    <span className="text-[10px] bg-[#183F32] text-white px-2 py-0.5 rounded-full font-bold">
                      Selected
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed pl-6 mt-2">
                  {COMPANY_INFO.contacts.salesOffice}
                </p>
                <div className="pl-6 pt-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#183F32]">
                    <Navigation className="w-3.5 h-3.5" />
                    <span>View Location & Route Below ↓</span>
                  </span>
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

        {/* ── REAL-WORLD INTERACTIVE NAVIGATION & ROUTE MAP ── */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-2xl overflow-hidden">
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8 border-b border-slate-100 pb-6">
            <div>
              <span className="section-label">LIVE MAP & NAVIGATION</span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#102C24] mt-2">
                Real-World Direction & Search Map
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Enter your starting city/village or use your device GPS to get instant turn-by-turn directions to our offices.
              </p>
            </div>

            {/* Office Switcher Tabs */}
            <div className="flex items-center gap-2 bg-[#F5F2E9] p-1.5 rounded-2xl border border-slate-200 shrink-0">
              <button
                onClick={() => {
                  setActiveOffice("punjab");
                  setMapMode("location");
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeOffice === "punjab"
                    ? "bg-[#183F32] text-white shadow-md scale-105"
                    : "text-slate-700 hover:text-[#183F32]"
                }`}
              >
                Punjab (Corporate)
              </button>
              <button
                onClick={() => {
                  setActiveOffice("pune");
                  setMapMode("location");
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeOffice === "pune"
                    ? "bg-[#183F32] text-white shadow-md scale-105"
                    : "text-slate-700 hover:text-[#183F32]"
                }`}
              >
                Pune (Maharashtra)
              </button>
            </div>
          </div>

          {/* Interactive Route / Direction Planner Bar */}
          <div className="bg-[#F5F2E9] rounded-2xl p-4 sm:p-5 border border-slate-200 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-center">
              
              {/* Origin Search Input */}
              <div className="md:col-span-5 relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Search className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Enter your current city / village / pin code..."
                  value={userLocation}
                  onChange={(e) => setUserLocation(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && userLocation.trim()) {
                      setMapMode("directions");
                    }
                  }}
                  className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#183F32] bg-white font-medium"
                />
              </div>

              {/* Destination Readonly Badge */}
              <div className="md:col-span-4 flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-300 text-xs font-bold text-[#102C24]">
                <MapPin className="w-4 h-4 text-[#B5A16A] shrink-0" />
                <span className="truncate">Destination: {currentOffice.name}</span>
              </div>

              {/* Action Buttons */}
              <div className="md:col-span-3 flex items-center gap-2">
                <button
                  onClick={() => {
                    if (userLocation.trim()) {
                      setMapMode("directions");
                    } else {
                      handleUseCurrentLocation();
                    }
                  }}
                  className="btn-gold flex-1 py-3 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Route className="w-3.5 h-3.5" />
                  <span>Show Route</span>
                </button>

                <button
                  onClick={handleUseCurrentLocation}
                  title="Detect my current location with GPS"
                  className="p-3 rounded-xl bg-white border border-slate-300 text-[#183F32] hover:bg-[#183F32] hover:text-white transition-colors shadow-sm"
                >
                  <Compass className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Quick Suggestions */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
              <span className="font-bold text-slate-700">Popular routes:</span>
              {(activeOffice === "punjab" 
                ? ["Chandigarh", "Ludhiana", "Ambala", "Delhi"] 
                : ["Mumbai", "Nashik", "Satara", "Kolhapur", "Ahmednagar"]
              ).map((city) => (
                <button
                  key={city}
                  onClick={() => {
                    setUserLocation(city);
                    setMapMode("directions");
                  }}
                  className="px-2.5 py-1 rounded-full bg-white hover:bg-[#183F32] hover:text-white border border-slate-200 transition-colors font-medium"
                >
                  From {city}
                </button>
              ))}
            </div>
          </div>

          {/* Embedded Real Google Map Frame with Full Map Controls */}
          <div className="relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
            <iframe
              src={getMapUrl()}
              title={`Google Map - ${currentOffice.name}`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Footer Bar of Map */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600 gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                Destination: <strong className="text-[#102C24]">{currentOffice.address}</strong>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => openDirectDirections(userLocation)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#183F32] text-white font-bold hover:bg-[#102C24] transition-colors shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C5B27D]" />
                <span>Start Live Navigation in App</span>
                <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
