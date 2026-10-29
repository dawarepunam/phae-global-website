"use client";

import React, { useState, useEffect } from "react";
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
  Compass,
  Users2,
  Handshake,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award
} from "lucide-react";
import { COMPANY_INFO } from "@/data/polyhubData";

// Partnership slider stories (featuring agri engineers & farming partners)
const partnershipSlides = [
  {
    image: "https://images.unsplash.com/photo-1592417817098-8f3d69104a49?auto=format&fit=crop&w=1200&q=80",
    title: "Engineering Innovation with Farmers",
    subtitle: "Turnkey Agro Collaboration",
    desc: "Our on-site structural engineers work side-by-side with progressive farmers to build climate-resilient, high-yield polyhouses tailored to regional wind loads and soil conditions."
  },
  {
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=1200&q=80",
    title: "End-to-End Agronomy & DPR Assistance",
    subtitle: "Complete Project Lifecycle",
    desc: "From initial GPS topographical land survey and soil testing to bankable DPR preparation and government subsidy disbursement, our dedicated technical team supports you at every step."
  },
  {
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1200&q=80",
    title: "300+ Successful Commercial Installations",
    subtitle: "Trusted Pan-India Network",
    desc: "Join over 300+ successful farm entrepreneurs across 18+ Indian states cultivating premium export-quality Dutch Roses, Carnations, and exotic vegetables."
  }
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeOffice, setActiveOffice] = useState<"punjab" | "pune">("punjab");
  const [userLocation, setUserLocation] = useState("");
  const [mapMode, setMapMode] = useState<"location" | "directions">("location");
  const [currentPartnerSlide, setCurrentPartnerSlide] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    state: "",
    structureType: "Naturally Ventilated Polyhouse",
    farmArea: "1000 - 2000 sq. meters",
    message: ""
  });

  // Auto rotate partnership slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPartnerSlide((prev) => (prev + 1) % partnershipSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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

  const getMapUrl = () => {
    if (mapMode === "directions" && userLocation.trim()) {
      const origin = encodeURIComponent(userLocation.trim());
      const destination = encodeURIComponent(currentOffice.query);
      return `https://www.google.com/maps?saddr=${origin}&daddr=${destination}&output=embed`;
    }
    return `https://www.google.com/maps?q=${encodeURIComponent(currentOffice.query)}&t=m&z=15&output=embed&iwloc=near`;
  };

  const openDirectDirections = (origin?: string) => {
    const dest = encodeURIComponent(currentOffice.query);
    if (origin && origin.trim()) {
      window.open(`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin.trim())}&destination=${dest}`, "_blank");
    } else {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${dest}`, "_blank");
    }
  };

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
      
      {/* ── CINEMATIC CONTACT HERO SECTION ── */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#102C24] text-white">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=2000&q=85"
            alt="PolyHub Agro Greenhouse Engineering"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2419] via-[#102C24]/90 to-[#183F32]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102C24] via-transparent to-transparent" />
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#B5A16A]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183F32]/80 border border-[#B5A16A]/40 text-[#F5F2E9] text-[11px] font-bold tracking-widest uppercase backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#C5B27D] animate-ping" />
                <span>DIRECT AGRO ENGINEERING HELPLINE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Let&apos;s Build Your Next<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5B27D] via-[#D4C391] to-[#B5A16A]">
                  High-Yield Farm Project
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Connect with our certified greenhouse engineers for turn-key structural design, government subsidy DPR paperwork, and on-site topographic evaluations.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.contacts.whatsapp}?text=Hello%20PolyHub%20Agro%20Engineers,%20I%20am%20interested%20in%20a%20Polyhouse%20Quote.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.contacts.phone}`}
                  className="btn-forest-outline px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C5B27D]" />
                  <span>Call {COMPANY_INFO.contacts.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Trust Stats Strip */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-3.5">
              <div className="bg-[#183F32]/70 backdrop-blur-md border border-[#B5A16A]/25 rounded-2xl p-4 text-center">
                <Award className="w-5 h-5 text-[#C5B27D] mx-auto mb-1.5" />
                <div className="text-2xl font-black text-white">10+</div>
                <div className="text-[11px] text-slate-300 font-semibold">Years of Excellence</div>
              </div>
              <div className="bg-[#183F32]/70 backdrop-blur-md border border-[#B5A16A]/25 rounded-2xl p-4 text-center">
                <ShieldCheck className="w-5 h-5 text-[#C5B27D] mx-auto mb-1.5" />
                <div className="text-2xl font-black text-white">300+</div>
                <div className="text-[11px] text-slate-300 font-semibold">Projects Built</div>
              </div>
              <div className="bg-[#183F32]/70 backdrop-blur-md border border-[#B5A16A]/25 rounded-2xl p-4 text-center">
                <Building2 className="w-5 h-5 text-[#C5B27D] mx-auto mb-1.5" />
                <div className="text-2xl font-black text-white">18+</div>
                <div className="text-[11px] text-slate-300 font-semibold">Indian States</div>
              </div>
              <div className="bg-[#183F32]/70 backdrop-blur-md border border-[#B5A16A]/25 rounded-2xl p-4 text-center">
                <Sparkles className="w-5 h-5 text-[#C5B27D] mx-auto mb-1.5" />
                <div className="text-2xl font-black text-white">Up to 50%</div>
                <div className="text-[11px] text-slate-300 font-semibold">Subsidy Support</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Top 3 Quick Helpline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          
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

        {/* ── 3-COLUMN CONTACT SECTION WITH PARTNERSHIP SLIDER POSTER ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Column 1: Registered Office Cards */}
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

          {/* Column 3: INTERACTIVE PARTNERSHIP SLIDER POSTER (Featuring the 2 agro partners & farmers) */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden shadow-2xl relative min-h-[440px] flex flex-col justify-between p-6 sm:p-7 border-2 border-[#B5A16A]/40 group bg-[#102C24]">
            
            {/* Slider Background Images */}
            {partnershipSlides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  idx === currentPartnerSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D2419] via-[#102C24]/80 to-black/30" />
              </div>
            ))}

            {/* Top Badge & Slider Controls */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C5B27D] bg-[#102C24]/85 px-3 py-1 rounded-full border border-[#B5A16A]/40 flex items-center gap-1.5">
                <Handshake className="w-3.5 h-3.5 text-[#B5A16A]" />
                <span>Partner With Us</span>
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentPartnerSlide((prev) => (prev - 1 + partnershipSlides.length) % partnershipSlides.length)}
                  className="w-7 h-7 rounded-full bg-black/40 hover:bg-[#183F32] text-white flex items-center justify-center transition-colors border border-white/20"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentPartnerSlide((prev) => (prev + 1) % partnershipSlides.length)}
                  className="w-7 h-7 rounded-full bg-black/40 hover:bg-[#183F32] text-white flex items-center justify-center transition-colors border border-white/20"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Bottom Content with Slide details */}
            <div className="relative z-10 text-white space-y-2 mt-auto pt-6">
              <span className="text-[11px] font-bold text-[#C5B27D] tracking-wider uppercase block">
                {partnershipSlides[currentPartnerSlide].subtitle}
              </span>

              <h4 className="text-xl sm:text-2xl font-black font-serif italic text-white leading-tight">
                {partnershipSlides[currentPartnerSlide].title}
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                {partnershipSlides[currentPartnerSlide].desc}
              </p>

              {/* Slider Dots Indicator */}
              <div className="flex items-center gap-1.5 pt-2">
                {partnershipSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPartnerSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentPartnerSlide === i ? "w-6 bg-[#C5B27D]" : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
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
