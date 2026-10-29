"use client";

import React, { useState } from "react";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { 
  CheckCircle2, 
  Landmark, 
  FileText, 
  ArrowRight, 
  ShieldCheck, 
  Send, 
  Calculator, 
  DollarSign, 
  Sparkles,
  HelpCircle,
  Building,
  Check,
  Phone,
  MessageSquare
} from "lucide-react";
import { SUBSIDY_INFO, COMPANY_INFO } from "@/data/polyhubData";

export default function SubsidyPage() {
  // Interactive Subsidy Calculator States
  const [structureType, setStructureType] = useState<"naturally" | "fanpad" | "shadenet">("naturally");
  const [areaSqMtr, setAreaSqMtr] = useState<number>(2000); // 2000 sq mtr ~ 0.5 acre
  const [selectedScheme, setSelectedScheme] = useState<"nhb" | "nhm">("nhb");

  // Approximate baseline benchmark rates per sq. meter (Govt norms approx)
  const costPerSqMtrMap = {
    naturally: 935, // ₹935 / sq.m benchmark cost norm
    fanpad: 1465,   // ₹1465 / sq.m benchmark cost norm
    shadenet: 710   // ₹710 / sq.m benchmark cost norm
  };

  const estimatedTotalCost = areaSqMtr * costPerSqMtrMap[structureType];
  const estimatedSubsidy = estimatedTotalCost * 0.50; // 50% Subsidy
  const farmerContribution = estimatedTotalCost - estimatedSubsidy;

  const faqs = [
    {
      q: "सबसिडी मिळवण्यासाठी काय कागदपत्रे लागतात? (Required Documents)",
      a: "७/१२ उतारा, ८-अ, आधार कार्ड, पॅन कार्ड, बँक पासबुक / कन्सल्टंट डीपीआर (DPR), माती आणि पाणी तपासणी अहवाल (Soil & Water Test), आणि कोटेशन."
    },
    {
      q: "NHB आणि NHM यांमध्ये मुख्य फरक काय आहे?",
      a: "NHB (National Horticulture Board) मध्ये संपूर्ण प्रोजेक्ट कॉस्टवर (स्ट्रक्चर, ठिबक/फॉगर, प्लांटिंग मटेरियल व पॅकहॉस) ५०% सबसिडी मिळते. तर NHM मध्ये प्रामुख्याने स्ट्रक्चर व ठिबकवर राज्य शासनाच्या दरानुसार ५०% सबसिडी दिली जाते."
    },
    {
      q: "PolyHub Agro Engineers सबसिडीच्या प्रक्रियेत कशी मदत करते?",
      a: "आम्ही आर्किटेक्चरल ड्रॉईंग्ज, BIS (IS 1239/1161) मानकांनुसार स्ट्रक्चरल कोटेशन्स, बँक-मान्य डीपीआर (Bankable DPR) आणि प्रत्यक्ष सरकारी इन्स्पेक्शनपर्यंत सर्व टेक्निकल साह्य पुरवतो."
    }
  ];

  return (
    <div className="bg-[#F5F2E9] min-h-screen">
      <PageBanner
        title="Government Subsidies"
        subtitle="Up to 50% Financial Support for Protected Farming"
        breadcrumbItems={[{ label: "Subsidy" }]}
        backgroundImage="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1920&q=85"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        
        {/* Top Hero Highlight Card with 50% Badge */}
        <div className="bg-gradient-to-br from-[#102C24] via-[#14372D] to-[#183F32] rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-2xl relative overflow-hidden mb-16 border border-[#B5A16A]/30">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#B5A16A]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#C5B27D] text-xs font-bold uppercase tracking-wider border border-white/20">
                <Landmark className="w-3.5 h-3.5" />
                CENTRAL & STATE HORTICULTURE MISSIONS
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Government Support for a Stronger Farming Future
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                A subsidy is a form of financial aid extended to farmers to promote modern high-yield technology. Under National Horticulture Board (NHB) and National Horticulture Mission (NHM), eligible growers can avail up to <strong>50% capital subsidy</strong> on polyhouses, fan & pad units, and shade net houses.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#calculator"
                  className="btn-gold px-6 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Calculate Your Estimated Subsidy</span>
                </a>
                <Link
                  href="/contact"
                  className="btn-forest-outline px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold"
                >
                  Apply For Subsidy DPR
                </Link>
              </div>
            </div>

            {/* Right Big 50% Shield Badge */}
            <div className="lg:col-span-4 text-center">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0D2419]/80 border-2 border-[#B5A16A]/50 backdrop-blur-md shadow-2xl">
                <span className="text-xs font-black uppercase tracking-widest text-[#C5B27D]">
                  GOVERNMENT GRANT
                </span>
                <div className="text-6xl sm:text-7xl font-black text-[#C5B27D] tracking-tight my-2">
                  50%
                </div>
                <span className="text-sm font-bold text-white block">
                  Subsidy on Project Cost
                </span>
                <span className="text-xs text-slate-300 block mt-1">
                  Applicable across NHB & NHM Guidelines
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Primary Schemes (NHB vs NHM) Comparison Cards */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-label">THE 2 AUTHORITIES</span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#102C24] mt-2">
              Available Subsidy Frameworks
            </h3>
            <div className="section-divider mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Scheme 1: NHB (National Horticulture Board) */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="flex flex-col flex-1">
                {/* Header Tag & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#183F32] bg-[#A6B5A0]/25 px-3 py-1 rounded-full border border-[#183F32]/20">
                    AUTHORITY 01 • CENTRAL SCHEME
                  </span>
                  <span className="text-xs font-black text-[#183F32] bg-emerald-100 px-2.5 py-1 rounded-lg shrink-0">
                    Comprehensive 50%
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-2xl font-black text-[#102C24] min-h-[36px] flex items-center">
                  National Horticulture Board (NHB)
                </h4>

                {/* Fixed-height description for perfect visual alignment */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5 mb-5 min-h-[48px] flex items-center">
                  The client can get <strong>50% subsidy on the TOTAL project cost</strong>. Ideal for commercial, large-scale protected cultivation with full turnkey scope.
                </p>

                {/* Scope Coverage List Box */}
                <div className="p-5 rounded-2xl bg-[#F5F2E9] border border-slate-200/80 space-y-2.5 flex-1 flex flex-col justify-start">
                  <span className="text-xs font-bold text-[#183F32] uppercase tracking-wider block border-b border-slate-200/60 pb-2 mb-2">
                    Total Project Cost Includes:
                  </span>
                  {[
                    "Polyhouse civil structure & GI tubular erection",
                    "Drip irrigation, micro-sprinklers & automated fogging system",
                    "Bed preparation material & farm labor charges",
                    "Planting material cost (tissue culture, seedling rootstocks)",
                    "Basic infrastructure: Grading hall, packhouse & irrigation room"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#183F32] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="btn-gold w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] transition-transform"
                >
                  <span>Apply for NHB Project DPR</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Scheme 2: NHM (National Horticulture Mission) */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="flex flex-col flex-1">
                {/* Header Tag & Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#183F32] bg-[#A6B5A0]/25 px-3 py-1 rounded-full border border-[#183F32]/20">
                    AUTHORITY 02 • STATE MISSION
                  </span>
                  <span className="text-xs font-black text-[#183F32] bg-emerald-100 px-2.5 py-1 rounded-lg shrink-0">
                    State Norms 50%
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-2xl font-black text-[#102C24] min-h-[36px] flex items-center">
                  National Horticulture Mission (NHM / MIDH)
                </h4>

                {/* Fixed-height description for perfect visual alignment */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5 mb-5 min-h-[48px] flex items-center">
                  The client can get <strong>50% subsidy on polyhouse construction & drip/fogging</strong> according to rates determined by particular State Horticulture Departments.
                </p>

                {/* Scope Coverage List Box */}
                <div className="p-5 rounded-2xl bg-[#F5F2E9] border border-slate-200/80 space-y-2.5 flex-1 flex flex-col justify-start">
                  <span className="text-xs font-bold text-[#183F32] uppercase tracking-wider block border-b border-slate-200/60 pb-2 mb-2">
                    State Department Inclusions:
                  </span>
                  {[
                    "Polyhouse structural fabrication as per state cost norms",
                    "Drip & high-pressure fogging system integration",
                    "Anti-insect netting & 200-micron UV stabilized polyfilms",
                    "Optional plant subsidy: Dependent on state fund availability",
                    "Direct subsidy credit into farmer bank account upon verification"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#183F32] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="btn-gold w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] transition-transform"
                >
                  <span>Check State NHM Allocation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* ── INTERACTIVE ESTIMATED SUBSIDY CALCULATOR ── */}
        <div id="calculator" className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-2xl mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-label">ONLINE ESTIMATION TOOL</span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#102C24] mt-2">
              Polyhouse Subsidy Calculator
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Select your structure type and land area to calculate benchmark investment and 50% subsidy benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Structure Selection */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                  1. Select Structure Type:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "naturally", label: "Naturally Ventilated", rate: "₹935 / sq.m" },
                    { id: "fanpad", label: "Fan & Pad (Hi-Tech)", rate: "₹1,465 / sq.m" },
                    { id: "shadenet", label: "Shade Net House", rate: "₹710 / sq.m" }
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setStructureType(s.id as any)}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        structureType === s.id
                          ? "bg-[#183F32] text-white border-[#183F32] shadow-md"
                          : "bg-[#F5F2E9] text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <span className="text-xs font-bold block">{s.label}</span>
                      <span className={`text-[10px] block mt-0.5 ${structureType === s.id ? "text-[#C5B27D]" : "text-slate-500"}`}>
                        Benchmark: {s.rate}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                    2. Farm Area (Sq. Meters):
                  </label>
                  <span className="text-sm font-black text-[#183F32] bg-[#F5F2E9] px-3 py-1 rounded-lg border border-slate-200">
                    {areaSqMtr.toLocaleString("en-IN")} sq.m (~{(areaSqMtr / 4047).toFixed(2)} Acres)
                  </span>
                </div>
                <input
                  type="range"
                  min={500}
                  max={10000}
                  step={100}
                  value={areaSqMtr}
                  onChange={(e) => setAreaSqMtr(Number(e.target.value))}
                  className="w-full accent-[#183F32] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                  <span>500 sq.m</span>
                  <span>2,000 sq.m (0.5 Acre)</span>
                  <span>4,000 sq.m (1 Acre)</span>
                  <span>10,000 sq.m (2.5 Acres)</span>
                </div>
              </div>

              {/* Authority Preference */}
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                  3. Targeted Authority:
                </label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedScheme("nhb")}
                    className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                      selectedScheme === "nhb" ? "bg-[#183F32] text-white border-[#183F32]" : "bg-white text-slate-700 border-slate-200"
                    }`}
                  >
                    NHB (National Board)
                  </button>
                  <button
                    onClick={() => setSelectedScheme("nhm")}
                    className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                      selectedScheme === "nhm" ? "bg-[#183F32] text-white border-[#183F32]" : "bg-white text-slate-700 border-slate-200"
                    }`}
                  >
                    NHM (State Mission)
                  </button>
                </div>
              </div>

            </div>

            {/* Live Calculation Output Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#102C24] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-[#B5A16A]/40 space-y-5">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5B27D] block">
                  ESTIMATED FINANCIAL BREAKDOWN
                </span>

                <div className="space-y-3 pb-4 border-b border-white/10">
                  <div className="flex justify-between items-center text-xs text-slate-300">
                    <span>Estimated Total Project Cost:</span>
                    <span className="font-bold text-white text-sm">
                      ₹{estimatedTotalCost.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs text-emerald-400 font-semibold">
                    <span>Government Subsidy (50%):</span>
                    <span className="text-base font-black text-emerald-400">
                      - ₹{estimatedSubsidy.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* Farmer Net Investment */}
                <div>
                  <span className="text-xs text-slate-400 block">Farmer Effective Capital Contribution:</span>
                  <div className="text-3xl sm:text-4xl font-black text-[#C5B27D] tracking-tight mt-1">
                    ₹{farmerContribution.toLocaleString("en-IN")}*
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-1">
                    *Approximate cost as per national horticulture norms. Bank loans available up to 80-85%.
                  </span>
                </div>

                <Link
                  href="/contact"
                  className="btn-gold w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Official Subsidy Quotation</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* ── STEP-BY-STEP SUBSIDY PROCESS (Turnkey Support) ── */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-label">HOW WE WORK</span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#102C24] mt-2">
              PolyHub&apos;s Turnkey Subsidy Assistance
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Navigating government procedures can be challenging. We take complete responsibility from DPR preparation to final subsidy release.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Site Survey & Soil Test",
                desc: "GPS elevation survey, wind history analysis, and BIS structural feasibility study of your farm."
              },
              {
                step: "02",
                title: "Bankable DPR Creation",
                desc: "Certified agri-engineers prepare Detailed Project Reports conforming to NHB / MIDH templates."
              },
              {
                step: "03",
                title: "Online Portal Filing",
                desc: "In-principal approval (IPA) application filing with state horticulture office or NHB portal."
              },
              {
                step: "04",
                title: "Physical Inspection & Grant",
                desc: "Assisting during joint inspection team (JIT) visit until direct subsidy disbursement into bank account."
              }
            ].map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F5F2E9] border border-slate-200 text-center hover:border-[#B5A16A]/50 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#183F32] text-[#C5B27D] font-black text-sm flex items-center justify-center mx-auto mb-3">
                  {p.step}
                </div>
                <h4 className="text-sm font-bold text-[#102C24] mb-1.5">{p.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center pt-8 border-t border-slate-100">
            <span className="text-xs sm:text-sm text-slate-600 block mb-2 font-medium">
              Have specific queries regarding state grant limits or bank loan tie-ups?
            </span>
            <a
              href={`tel:${COMPANY_INFO.contacts.phone}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#183F32] hover:text-[#B5A16A]"
            >
              <Phone className="w-4 h-4 text-[#C5B27D]" />
              <span>Call our Subsidy Helpline: {COMPANY_INFO.contacts.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
