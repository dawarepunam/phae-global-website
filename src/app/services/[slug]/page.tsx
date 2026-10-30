import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { SERVICES_LIST } from "@/data/polyhubData";
import { 
  CheckCircle2, 
  ArrowLeft, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  PhoneCall, 
  Hammer, 
  Wrench, 
  DraftingCompass,
  FileCheck2
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES_LIST.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_LIST.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | PHAE Global",
    };
  }

  return {
    title: `${service.title} | PHAE Global`,
    description: service.shortDescription,
  };
}

const serviceIcons: Record<string, any> = {
  "construction-and-installation": Hammer,
  "maintenance-and-support": Wrench,
  "custom-polyhouse-design": DraftingCompass,
};

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_LIST.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const IconComponent = serviceIcons[service.id] || Hammer;

  return (
    <div className="bg-[#F0F4F8] min-h-screen pb-24">
      <PageBanner
        title={service.title}
        subtitle="Specialized Polyhouse Engineering Services"
        breadcrumbItems={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        backgroundImage={service.image}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004B87] hover:text-[#25D366] mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Services</span>
        </Link>

        {/* Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Scope & Step-by-Step Breakdown */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Overview Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-md space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-[#004B87] text-white flex items-center justify-center shadow-md">
                  <IconComponent className="w-4 h-4 text-[#25D366]" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0056B3] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                  Official Service Scope
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#0A1128] tracking-tight">
                {service.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {service.fullDescription}
              </p>

              {/* Highlights */}
              <div className="pt-3 flex flex-wrap gap-2.5">
                {service.features.map((feat, idx) => (
                  <span key={idx} className="text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-[#F0F4F8] text-[#004B87] border border-slate-200/80 shadow-sm flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Step-by-Step Execution Process */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-md">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0056B3]">
                    <Sparkles className="w-4 h-4 text-[#25D366]" />
                    <span>PHAE Global Engineering Methodology</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0A1128] mt-1">
                    Structured Workflow Process
                  </h3>
                </div>
                <span className="hidden sm:inline-block text-[11px] font-bold text-slate-500 bg-[#F0F4F8] px-3 py-1 rounded-full border border-slate-200">
                  {service.processSteps.length} Steps Turnkey
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.processSteps.map((stepItem, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#0056B3]/40 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0A1128] to-[#004B87] text-[#25D366] flex items-center justify-center font-black text-xs shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      {stepItem.step}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0A1128] group-hover:text-[#0056B3] transition-colors">
                        {stepItem.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-600 mt-1 leading-relaxed">
                        {stepItem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Visual & Direct Contact Box */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Field Execution by PHAE Global
                  </span>
                  <span className="text-[10px] text-white/80 bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full">
                    Certified Erection
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Consultation Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-[#0056B3] font-black text-sm uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5 text-[#25D366]" />
                <span>On-Site Engineering Consultation</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Connect with our certified greenhouse engineers for site soil evaluation, land contour surveying, customized CAD drawings, or assistance with NHB/MIDH 50% capital subsidies.
              </p>

              <div className="space-y-2 pt-1">
                <div className="p-3 rounded-xl bg-[#F0F4F8] text-xs font-medium text-slate-700 flex items-center gap-2 border border-slate-200/60">
                  <PhoneCall className="w-4 h-4 text-[#0056B3] shrink-0" />
                  <span>Technical Helpline: <strong>+91 78149 10934</strong></span>
                </div>
                <div className="p-3 rounded-xl bg-[#F0F4F8] text-xs font-medium text-slate-700 flex items-center gap-2 border border-slate-200/60">
                  <FileCheck2 className="w-4 h-4 text-[#0056B3] shrink-0" />
                  <span>Turnkey Project DPR & Quotation Support</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="btn-gold w-full text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] transition-transform"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Engineering Proposal</span>
                </Link>
                <p className="text-[10px] sm:text-[11px] text-center text-slate-500 mt-2">
                  Compliant with BIS IS 1239 / 1161 Standards & State Missions
                </p>
              </div>
            </div>

            {/* Other Services Navigation */}
            <div className="bg-gradient-to-br from-[#0A1128] to-[#0F1F3D] rounded-3xl p-6 text-white shadow-xl space-y-3 border border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#25D366] flex items-center gap-2">
                <span>Explore Other Services</span>
              </h4>
              <div className="space-y-2">
                {SERVICES_LIST.filter(s => s.id !== service.id).map(other => (
                  <Link
                    key={other.id}
                    href={`/services/${other.slug}`}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-xs font-semibold text-slate-200 hover:text-white"
                  >
                    <span>{other.title}</span>
                    <span className="text-[#25D366]">→</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* ── FULL WIDTH COMPREHENSIVE KEY DELIVERABLES (PREMIUM MULTI-COLUMN LUXURY GRID) ── */}
        <div className="mt-12 sm:mt-16 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/90 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#0056B3]">
                <FileCheck2 className="w-4 h-4 text-[#25D366]" />
                <span>Comprehensive Key Deliverables</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0A1128] mt-1">
                Everything Included in Your Turnkey Scope
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Every component is pre-engineered, rigorously quality-tested, and fully covered under our warranty contract.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <span className="px-4 py-2 rounded-xl bg-[#F0F4F8] border border-slate-200 text-xs font-bold text-[#004B87]">
                {service.deliverables.length} Quality Checklist Points
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {service.deliverables.map((item, idx) => {
              const parts = item.split(':');
              const label = parts[0];
              const detail = parts.slice(1).join(':').trim();
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-[#F0F4F8]/70 border border-slate-200/80 hover:bg-white hover:border-[#0056B3]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 text-[#0056B3] flex items-center justify-center shrink-0 group-hover:bg-[#004B87] group-hover:text-white transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 group-hover:text-[#0056B3]">
                        #{String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-[#0A1128] group-hover:text-[#0056B3] transition-colors leading-snug">
                      {label}
                    </h4>

                    {detail && (
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {detail}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-bold text-slate-400">
                    <span className="uppercase tracking-wider">Quality Verified</span>
                    <span className="text-[#0056B3]">100% Turnkey</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Trust Assurance Bar */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 bg-gradient-to-r from-[#F0F4F8] via-white to-[#F0F4F8] p-4 sm:p-6 rounded-2xl border border-slate-200/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A1128] to-[#004B87] text-[#25D366] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-[#0A1128] block text-sm">Govt. Norms & IS 1239 / 1161 Compliant Fabrication</strong>
                <span className="text-slate-500 text-[11px]">All steel frames are hot-dip galvanized with minimum 360-450 GSM zinc coating for maximum weather resistance.</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="btn-gold py-2.5 px-5 rounded-xl font-bold text-xs shrink-0 inline-flex items-center gap-1.5 shadow-sm"
            >
              <span>Get Custom Quotation</span>
              <Send className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
