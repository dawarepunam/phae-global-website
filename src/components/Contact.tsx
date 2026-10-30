"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  Sparkles 
} from "lucide-react";
import { COMPANY_INFO } from "@/data/polyhubData";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1128] tracking-tight mt-4">
            We&apos;re Here to Help You Build a Better Tomorrow
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Connect with our agricultural engineers for detailed design discussions, subsidy eligibility checks, and turnkey structural quotes.
          </p>
        </div>

        {/* 3-Column Layout Matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Contact Details */}
          <div className="lg:col-span-4 bg-[#F0F4F8] rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-black text-[#0A1128] border-b border-slate-200 pb-3 mb-6">
                Contact Details
              </h3>

              <div className="space-y-6 text-xs text-slate-600">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#004B87] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-4 h-4 text-[#1a7a4a]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A1128] text-xs uppercase tracking-wider">Corporate Office (Punjab)</h4>
                    <p className="mt-1 leading-relaxed text-slate-600">
                      {COMPANY_INFO.contacts.corporateOffice}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#004B87] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <MapPin className="w-4 h-4 text-[#1a7a4a]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A1128] text-xs uppercase tracking-wider">Sales Office (Maharashtra)</h4>
                    <p className="mt-1 leading-relaxed text-slate-600">
                      {COMPANY_INFO.contacts.salesOffice}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#004B87] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Mail className="w-4 h-4 text-[#1a7a4a]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A1128] text-xs uppercase tracking-wider">Email</h4>
                    <p className="mt-1 text-slate-800 font-semibold">
                      {COMPANY_INFO.contacts.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#004B87] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Phone className="w-4 h-4 text-[#1a7a4a]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A1128] text-xs uppercase tracking-wider">Phone / WhatsApp</h4>
                    <p className="mt-1 text-slate-800 font-bold">
                      {COMPANY_INFO.contacts.phoneDisplay}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <a
                href={`https://wa.me/${COMPANY_INFO.contacts.whatsapp}?text=Hello%20PHAE Global%20Agro%20Engineers,%20I%20am%20interested%20in%20a%20Polyhouse%20Quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

          {/* Column 2: Send Us a Message Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl">
            <h3 className="text-lg font-black text-[#0A1128] border-b border-slate-100 pb-3 mb-6">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-[#0056B3] border border-blue-200 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-[#0A1128]">Inquiry Sent Successfully!</h4>
                <p className="text-xs text-slate-500">
                  Our greenhouse technical manager will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="form-input"
                  />
                </div>

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
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="form-input"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your land area, location, or crop requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="form-input"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-gold py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 mt-2"
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/80 to-transparent" />
            <div className="relative z-10 text-white space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1a7a4a] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#1a7a4a]" />
                Partnership
              </span>
              <h4 className="text-3xl font-black font-serif italic text-white leading-tight">
                Let&apos;s Grow Together
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Start your profitable greenhouse journey with India&apos;s trusted agro structural engineering team.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

