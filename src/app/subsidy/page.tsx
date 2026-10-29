import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { CheckCircle2, Landmark, FileText, ArrowRight, ShieldCheck, Send } from "lucide-react";
import { SUBSIDY_INFO } from "@/data/polyhubData";

export const metadata: Metadata = {
  title: "Government Subsidies (NHB & MIDH) | PolyHub Agro Engineers",
  description: "Comprehensive guide to government subsidies for polyhouses, shade nets, and greenhouses in India under National Horticulture Board (NHB) and MIDH missions.",
};

export default function SubsidyPage() {
  return (
    <div className="bg-[#F5F2E9] min-h-screen">
      <PageBanner
        title="Government Subsidies"
        subtitle="Financial Support for Protected Agriculture"
        breadcrumbItems={[{ label: "Subsidy" }]}
        backgroundImage="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Top Banner Box */}
        <div className="bg-gradient-to-br from-[#102C24] to-[#183F32] rounded-3xl p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden mb-16">
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#C5B27D] text-xs font-bold uppercase tracking-wider border border-white/20">
              <Landmark className="w-3.5 h-3.5" />
              National & State Missions
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {SUBSIDY_INFO.tagline}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {SUBSIDY_INFO.description}
            </p>
          </div>
        </div>

        {/* 2 Primary Schemes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {SUBSIDY_INFO.authorities.map((scheme, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#183F32] bg-[#A6B5A0]/20 px-3 py-1 rounded-full">
                  {scheme.scope}
                </span>

                <h3 className="text-xl sm:text-2xl font-black text-[#102C24] mt-4 mb-2">
                  {scheme.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {scheme.details}
                </p>

                <div className="p-4 rounded-2xl bg-[#F5F2E9] border border-slate-200/80 mb-6">
                  <span className="text-xs font-bold text-[#183F32] uppercase tracking-wider block">Financial Grant:</span>
                  <span className="text-base font-extrabold text-[#102C24]">{scheme.subsidyRate}</span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Eligible Infrastructure Components:
                  </span>
                  {scheme.eligibleComponents.map((comp, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#183F32] shrink-0 mt-0.5" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#183F32] text-[#183F32] hover:bg-[#183F32] hover:text-white font-bold text-xs transition-all"
                >
                  <span>Check Eligibility for this Scheme</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* How PolyHub Assists */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#183F32]">
                <FileText className="w-4 h-4" />
                <span>Our Turnkey Assistance</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#102C24]">
                Seamless Subsidy Documentation & Approval
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Navigating government norms requires meticulous adherence to BIS material standards and structural blueprints. PolyHub handles the paperwork so you can focus on farming.
              </p>

              <div className="space-y-3 pt-3">
                {SUBSIDY_INFO.supportProvided.map((point, index) => (
                  <div key={index} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <ShieldCheck className="w-5 h-5 text-[#B5A16A] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F5F2E9] rounded-2xl p-6 sm:p-8 text-center space-y-4 border border-slate-200">
              <h4 className="text-lg font-bold text-[#102C24]">Have Questions on State Grants?</h4>
              <p className="text-xs text-slate-600">
                Talk directly with our government subsidy coordinator for Punjab, Maharashtra, Haryana, and other state departments.
              </p>
              <Link
                href="/contact"
                className="btn-gold w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold"
              >
                <Send className="w-4 h-4" />
                <span>Book Free Subsidy Guidance Call</span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

