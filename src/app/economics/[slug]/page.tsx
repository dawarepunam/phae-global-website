import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { CROPS_ECONOMICS_LIST } from "@/data/polyhubData";
import { CheckCircle2, ArrowLeft, Send, TrendingUp, Sun, Sparkles } from "lucide-react";

interface CropPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CROPS_ECONOMICS_LIST.map((crop) => ({
    slug: crop.slug,
  }));
}

export async function generateMetadata({ params }: CropPageProps): Promise<Metadata> {
  const { slug } = await params;
  const crop = CROPS_ECONOMICS_LIST.find((c) => c.slug === slug);

  if (!crop) {
    return {
      title: "Crop Not Found | PolyHub Agro Engineers",
    };
  }

  return {
    title: `${crop.name} Polyhouse Cultivation Economics | PolyHub Agro Engineers`,
    description: crop.shortSummary,
  };
}

export default async function CropDetailPage({ params }: CropPageProps) {
  const { slug } = await params;
  const crop = CROPS_ECONOMICS_LIST.find((c) => c.slug === slug);

  if (!crop) {
    notFound();
  }

  return (
    <div className="bg-[#F5F2E9] min-h-screen pb-24">
      <PageBanner
        title={crop.name}
        subtitle={`${crop.type} Cultivation Economics`}
        breadcrumbItems={[
          { label: "Economics", href: "/economics" },
          { label: crop.name },
        ]}
        backgroundImage={crop.image}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Back Link */}
        <Link
          href="/economics"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#183F32] hover:text-[#B5A16A] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Crops Economics</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Crop Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md space-y-4">
              <div className="flex items-center gap-2">
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                  crop.type === "Flower" ? "bg-pink-700 text-white" : "bg-[#183F32] text-white"
                }`}>
                  {crop.type}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  Common Commercial Varieties: {crop.variety}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#102C24]">
                Cultivation Overview & Commercial Scope
              </h2>

              <p className="text-sm text-slate-700 leading-relaxed">
                {crop.overview}
              </p>

              {/* Key Benefits */}
              <div className="pt-6 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#183F32] mb-3">
                  Key Production & Market Advantages
                </h3>
                <div className="space-y-2.5">
                  {crop.keyBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#B5A16A] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cultivation Agronomy Tips */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
              <h3 className="text-xl font-bold text-[#102C24] mb-4 flex items-center gap-2">
                <Sun className="w-5 h-5 text-[#B5A16A]" />
                Agronomy & Microclimate Best Practices
              </h3>

              <div className="space-y-3">
                {crop.cultivationGuidelines.map((guide, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#F5F2E9] text-xs text-slate-700 font-medium">
                    {guide}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Economics Table & DPR Action */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <div className="h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={crop.image}
                  alt={crop.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Economics Metrics Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg space-y-4">
              <div className="flex items-center gap-2 text-[#183F32] font-black text-sm uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-[#B5A16A]" />
                <span>Production & Yield Benchmarks</span>
              </div>

              <div className="space-y-3 pt-2">
                {crop.economicsMetrics.map((metric, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-[#F5F2E9] border border-slate-200/80">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      {metric.label}
                    </span>
                    <span className="text-sm font-black text-[#102C24] mt-0.5 block">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="btn-gold w-full text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Full Crop DPR & Cost Sheet</span>
                </Link>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  DPR formulated to support bank loans and NHB subsidy applications
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

