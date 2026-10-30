"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, TrendingUp, Sparkles } from "lucide-react";
import { CROPS_ECONOMICS_LIST } from "@/data/polyhubData";

export default function Economics() {
  const [selectedCrop, setSelectedCrop] = useState(CROPS_ECONOMICS_LIST[0].name);

  const activeData =
    CROPS_ECONOMICS_LIST.find((c) => c.name === selectedCrop) ||
    CROPS_ECONOMICS_LIST[0];

  return (
    <section className="bg-[#F0F4F8] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-label">CROP ECONOMICS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1128] tracking-tight mt-4">
            Know the Potential, Plan for a Profitable Future
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            High-value floriculture and horticulture varieties engineered for exceptional yield returns and stable profitability under protected polyhouses.
          </p>
        </div>

        {/* Crop Selection Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {CROPS_ECONOMICS_LIST.map((crop) => (
            <button
              key={crop.name}
              onClick={() => setSelectedCrop(crop.name)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                selectedCrop === crop.name
                  ? "filter-tab-active"
                  : "filter-tab"
              }`}
            >
              {crop.name}
            </button>
          ))}
        </div>

        {/* Detailed Crop Economic Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Crop Image Card */}
            <div className="lg:col-span-4">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-lg bg-[#0A1128]/5 group flex items-center justify-center p-2 border border-slate-200">
                <img
                  src={activeData.image}
                  alt={activeData.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-[#0A1128]/90 backdrop-blur-md text-[#25D366] text-[10px] font-bold uppercase px-3 py-1 rounded-full border border-[#25D366]/30">
                    {activeData.type} Crop
                  </span>
                </div>
              </div>
            </div>

            {/* Center: Details */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004B87]/10 text-[#004B87] text-[11px] font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Commercial Polyhouse Cultivation</span>
              </div>

              <h3 className="text-3xl font-black text-[#0A1128] tracking-tight">
                {activeData.name}
              </h3>
              
              <div className="text-xs font-semibold text-slate-500">
                <span className="text-[#004B87]">Target Varieties:</span> {activeData.variety}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeData.shortSummary}
              </p>

              <div className="pt-2">
                <Link
                  href={`/economics/${activeData.slug}`}
                  className="btn-gold inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold shadow-md"
                >
                  <span>View Details & Economics</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Key Benefits Card */}
            <div className="lg:col-span-4 bg-[#F0F4F8] rounded-2xl p-6 sm:p-7 border border-[#25D366]/20">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-4 h-4 text-[#004B87]" />
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#004B87]">
                  Key Benefits & Potential
                </h4>
              </div>

              <div className="space-y-3.5">
                {activeData.keyBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                    <span className="leading-snug">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <span className="text-[11px] font-bold text-slate-500 block">
                  Detailed DPR & financial yield metrics available on detailed page.
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

