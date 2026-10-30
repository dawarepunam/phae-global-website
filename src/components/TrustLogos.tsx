"use client";

import React from "react";

export default function TrustLogos() {
  const partners = [
    { name: "TATA", badge: "Tata Projects" },
    { name: "L&T", badge: "Larsen & Toubro" },
    { name: "MAHINDRA", badge: "Mahindra Agri" },
    { name: "ADANI", badge: "Adani Agri Logistics" },
    { name: "RELIANCE", badge: "Reliance Retail Agri" },
    { name: "JSW", badge: "JSW Steel Infra" },
    { name: "AMUL", badge: "GCMMF Cooperative" },
    { name: "ITC", badge: "ITC e-Choupal" }
  ];

  return (
    <section className="bg-white py-12 sm:py-16 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0056B3] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block mb-3">
            INDUSTRY TRUST & COLLABORATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0A1128] tracking-tight">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Powering scalable protected agriculture infrastructure for leading corporate farms, cooperatives, and commercial growers.
          </p>
        </div>

        {/* Brand Logos Grid with clean corporate styling */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 items-center">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="group p-4 rounded-2xl bg-[#F0F4F8]/70 hover:bg-white border border-slate-200/70 hover:border-[#0056B3]/40 hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[85px] cursor-default"
            >
              <span className="text-sm sm:text-base font-black tracking-wider text-slate-700 group-hover:text-[#0056B3] transition-colors">
                {partner.name}
              </span>
              <span className="text-[9px] text-slate-400 font-semibold mt-0.5 line-clamp-1">
                {partner.badge}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

