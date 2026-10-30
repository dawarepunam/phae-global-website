import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Landmark } from "lucide-react";

export default function Subsidy() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">GOVERNMENT SCHEMES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1128] tracking-tight mt-4">
            Government Support for a Stronger Farming Future
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Avail 50% to 75% capital subsidy assistance under Central and State horticulture missions to significantly reduce your capital expenditure.
          </p>
        </div>

        {/* Main Subsidy Highlight Banner */}
        <div className="bg-[#F0F4F8] rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Schemes Overview */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#004B87] bg-[#90A4AE]/25 px-3 py-1 rounded-full border border-[#004B87]/10">
                CAPITAL ASSISTANCE
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-black text-[#0A1128] leading-tight">
                Government Schemes & Grants
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Polyhouse and shade net installations are heavily supported by national and state initiatives to foster climate-resilient agriculture:
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-[#004B87] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5B27D]" />
                  </div>
                  <span>National Horticulture Board (NHB) Commercial Projects</span>
                </div>
                
                <div className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-[#004B87] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5B27D]" />
                  </div>
                  <span>National Horticulture Mission (NHM / MIDH Schemes)</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <div className="w-5 h-5 rounded-full bg-[#004B87] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5B27D]" />
                  </div>
                  <span>State Horticulture Department Direct Capital Grants</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  href="/subsidy"
                  className="btn-gold inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-md"
                >
                  <span>Learn More & Apply</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Center: Up to 50% Big Badge */}
            <div className="lg:col-span-3 text-center">
              <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0A1128] to-[#004B87] text-white shadow-2xl border-2 border-[#B5A16A]/50 relative overflow-hidden group">
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-[#B5A16A]/20 rounded-full blur-xl" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#C5B27D]">
                  Up To
                </span>
                <div className="text-5xl sm:text-6xl font-black text-[#C5B27D] tracking-tight my-2">
                  50%
                </div>
                <span className="text-xs font-semibold text-slate-200 block leading-snug">
                  Subsidy Support on Eligible Project Cost
                </span>
              </div>
            </div>

            {/* Right: Images preview */}
            <div className="lg:col-span-4 space-y-4">
              <div className="h-36 sm:h-40 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80"
                  alt="Subsidy polyhouse 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-36 sm:h-40 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80"
                  alt="Subsidy polyhouse 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
