import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { SERVICES_LIST } from "@/data/polyhubData";
import { CheckCircle2, ArrowLeft, Send, Sparkles } from "lucide-react";

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
      title: "Service Not Found | PolyHub Agro Engineers",
    };
  }

  return {
    title: `${service.title} | PolyHub Agro Engineers`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_LIST.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-[#F5F2E9] min-h-screen pb-24">
      <PageBanner
        title={service.title}
        subtitle="Agri-Engineering Services"
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
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#183F32] hover:text-[#B5A16A] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>

        {/* Top Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md space-y-4">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#183F32] bg-[#A6B5A0]/20 px-3 py-1 rounded-full">
                Professional Engineering Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#102C24]">
                {service.title}
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Scope Deliverables */}
              <div className="pt-6 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#183F32] mb-3">
                  Scope of Work & Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#183F32] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step-by-Step Execution Process */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
              <h3 className="text-xl font-bold text-[#102C24] mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#B5A16A]" />
                Step-by-Step Execution Process
              </h3>

              <div className="space-y-6">
                {service.processSteps.map((stepItem, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#183F32] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-md">
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

          </div>

          {/* Right Column: Visual & Direct Contact Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <div className="h-64 sm:h-80 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg space-y-4">
              <h3 className="text-lg font-bold text-[#102C24]">
                Schedule an On-Site Consultation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect with our greenhouse technical engineers for site feasibility, soil analysis, structural auditing, or DPR preparation.
              </p>

              <Link
                href="/contact"
                className="btn-gold w-full text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Book Engineering Appointment</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

