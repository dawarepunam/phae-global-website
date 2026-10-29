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
    <div className="bg-[#F5F2E9] min-h-screen pb-24">
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
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#183F32] hover:text-[#B5A16A] mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Services</span>
        </Link>

        {/* Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Scope & Step-by-Step Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Overview Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-[#183F32] text-white flex items-center justify-center shadow-sm">
                  <IconComponent className="w-4 h-4 text-[#B5A16A]" />
                </div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#183F32] bg-[#A6B5A0]/20 px-3 py-1 rounded-full">
                  Official Service Scope
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#102C24]">
                {service.title}
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {service.fullDescription}
              </p>

              {/* Highlights */}
              <div className="pt-4 flex flex-wrap gap-2">
                {service.features.map((feat, idx) => (
                  <span key={idx} className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-[#F5F2E9] text-[#183F32] border border-slate-200">
                    ✓ {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Step-by-Step Execution Process (From Website) */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
              <h3 className="text-xl font-bold text-[#102C24] mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#B5A16A]" />
                Structured Engineering Workflow
              </h3>

              <div className="space-y-5">
                {service.processSteps.map((stepItem, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-[#F5F2E9]/60 border border-slate-200/60 hover:bg-[#F5F2E9] transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-[#183F32] text-[#B5A16A] flex items-center justify-center font-black text-xs shrink-0 shadow-sm">
                      {stepItem.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#102C24]">{stepItem.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{stepItem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Specific Deliverables Grid */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
              <h3 className="text-lg font-bold text-[#102C24] mb-4 flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-[#183F32]" />
                Comprehensive Key Deliverables
              </h3>
              <div className="space-y-3">
                {service.deliverables.map((item, idx) => {
                  const parts = item.split(':');
                  const label = parts[0];
                  const detail = parts.slice(1).join(':');
                  return (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed border-b border-slate-100 pb-2.5 last:border-0 last:pb-0">
                      <CheckCircle2 className="w-4 h-4 text-[#B5A16A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#102C24] font-bold">{label}{detail ? ':' : ''}</strong>
                        {detail && <span className="text-slate-600">{detail}</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Visual & Direct Contact Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <div className="h-64 sm:h-80 w-full overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-semibold">
                  Field Execution by PHAE Global
                </div>
              </div>
            </div>

            {/* Direct Consultation Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg space-y-4">
              <div className="flex items-center gap-2 text-[#183F32] font-black text-sm uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5 text-[#B5A16A]" />
                <span>On-Site Engineering Consultation</span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Connect with our certified greenhouse engineers for site soil evaluation, land contour surveying, customized CAD drawings, or assistance with NHB/MIDH 50% capital subsidies.
              </p>

              <div className="space-y-2 pt-2">
                <div className="p-3 rounded-xl bg-[#F5F2E9] text-xs font-medium text-slate-700 flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#183F32]" />
                  <span>Technical Helpline: <strong>+91 78149 10934</strong></span>
                </div>
                <div className="p-3 rounded-xl bg-[#F5F2E9] text-xs font-medium text-slate-700 flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#183F32]" />
                  <span>Turnkey Project DPR & Quotation Support</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="btn-gold w-full text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Engineering Proposal</span>
                </Link>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  Compliant with BIS IS 1239 / 1161 Standards & State Missions
                </p>
              </div>
            </div>

            {/* Other Services Navigation */}
            <div className="bg-[#102C24] rounded-3xl p-6 text-white shadow-lg space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#B5A16A]">
                Explore Other Services
              </h4>
              <div className="space-y-2">
                {SERVICES_LIST.filter(s => s.id !== service.id).map(other => (
                  <Link
                    key={other.id}
                    href={`/services/${other.slug}`}
                    className="block p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-xs font-semibold text-slate-200 hover:text-white"
                  >
                    → {other.title}
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
