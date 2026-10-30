import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { CROPS_ECONOMICS_LIST } from "@/data/polyhubData";
import { 
  CheckCircle2, 
  ArrowLeft, 
  Send, 
  TrendingUp, 
  Sun, 
  Calculator, 
  Coins, 
  FileText, 
  IndianRupee, 
  ShieldCheck,
  Building
} from "lucide-react";

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
      title: "Crop Not Found | PHAE Global",
    };
  }

  return {
    title: `${crop.name} Polyhouse Cultivation Economics | PHAE Global`,
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
    <div className="bg-[#F0F4F8] min-h-screen pb-24">
      <PageBanner
        title={crop.name}
        subtitle={`${crop.type} Cultivation Economics & Financial Viability`}
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
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004B87] hover:text-[#25D366] mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Crops Economics</span>
        </Link>

        {/* Top Split: Left Content, Right Media & Quick Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Crop Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                  crop.type === "Flower" ? "bg-pink-700 text-white" : "bg-[#004B87] text-white"
                }`}>
                  {crop.type}
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  Commercial Varieties: {crop.variety}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#0A1128]">
                Cultivation Overview & Commercial Scope
              </h2>

              <p className="text-sm text-slate-700 leading-relaxed">
                {crop.overview}
              </p>

              {/* Key Benefits */}
              <div className="pt-6 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#004B87] mb-3">
                  Key Production & Market Advantages
                </h3>
                <div className="space-y-2.5">
                  {crop.keyBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cultivation Agronomy Tips */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
              <h3 className="text-xl font-bold text-[#0A1128] mb-4 flex items-center gap-2">
                <Sun className="w-5 h-5 text-[#25D366]" />
                Agronomy & Microclimate Best Practices
              </h3>

              <div className="space-y-3">
                {crop.cultivationGuidelines.map((guide, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-[#F0F4F8] text-xs text-slate-700 font-medium border border-slate-200/50">
                    {guide}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Image & Quick Metrics */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white">
              <div className="h-64 sm:h-80 w-full overflow-hidden relative bg-[#0A1128]/5 flex items-center justify-center p-3">
                <img
                  src={crop.image}
                  alt={crop.name}
                  className="w-full h-full object-contain"
                />
                <div className="absolute top-3 right-3 bg-[#0A1128]/80 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-semibold border border-white/20">
                  {crop.name} Cultivation
                </div>
              </div>
            </div>

            {/* Economics Metrics Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg space-y-4">
              <div className="flex items-center gap-2 text-[#004B87] font-black text-sm uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-[#25D366]" />
                <span>Production & Yield Benchmarks</span>
              </div>

              <div className="space-y-3 pt-2">
                {crop.economicsMetrics.map((metric, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-[#F0F4F8] border border-slate-200/80">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                      {metric.label}
                    </span>
                    <span className="text-sm font-black text-[#0A1128] mt-0.5 block">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="btn-gold w-full text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Full Crop DPR & Cost Sheet</span>
                </Link>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  DPR formulated to support bank loans and NHB / MIDH subsidies
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Detailed Financial & Cost Economics Table (If Available, e.g. for Anthurium) */}
        {crop.costEconomics && (
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-xl space-y-8">
            <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 px-3 py-1 rounded-full">
                  Detailed Project Economics Report
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0A1128] mt-2">
                  Commercial Cost & Return Analysis (1.0 Acre / {crop.costEconomics.area})
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Structure: <span className="font-bold text-[#004B87]">{crop.costEconomics.structureType}</span> | Conforming to NHB & MIDH Norms
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/subsidy"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#004B87]/10 text-[#004B87] hover:bg-[#0056B3] hover:text-white text-xs font-bold transition-colors"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Check 50% Subsidy</span>
                </Link>
                <Link
                  href="/contact"
                  className="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5"
                >
                  <FileText className="w-4 h-4" />
                  <span>Get Official DPR</span>
                </Link>
              </div>
            </div>

            {/* Section A: Capital Investment */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building className="w-5 h-5 text-[#004B87]" />
                <h4 className="text-lg font-bold text-[#0A1128]">
                  Part A: Capital Investment & Polyhouse Infrastructure
                </h4>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#004B87] text-white">
                    <tr>
                      <th className="py-3 px-4 font-bold">Particulars / Component</th>
                      <th className="py-3 px-4 font-bold text-right">Investment (INR)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {crop.costEconomics.capitalInvestment.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F0F4F8]/40"}>
                        <td className="py-3 px-4 text-slate-700 font-medium">{item.particular}</td>
                        <td className="py-3 px-4 text-slate-900 font-bold text-right">{item.cost}</td>
                      </tr>
                    ))}
                    <tr className="bg-[#004B87]/10 font-black text-sm text-[#0A1128]">
                      <td className="py-3.5 px-4">TOTAL CAPITAL INVESTMENT (A)</td>
                      <td className="py-3.5 px-4 text-right text-[#004B87] text-base">{crop.costEconomics.totalInvestment}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section B: Annual Operational Cost */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="w-5 h-5 text-[#004B87]" />
                <h4 className="text-lg font-bold text-[#0A1128]">
                  Part B: Annual Cultivation & Operational Costs
                </h4>
              </div>
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#0A1128] text-white">
                    <tr>
                      <th className="py-3 px-4 font-bold">Cost Component</th>
                      <th className="py-3 px-4 font-bold text-right">Estimated Cost / Year</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {crop.costEconomics.annualOperationalCost.map((item, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F0F4F8]/40"}>
                        <td className="py-3 px-4 text-slate-700 font-medium">{item.particular}</td>
                        <td className="py-3 px-4 text-slate-900 font-bold text-right">{item.cost}</td>
                      </tr>
                    ))}
                    <tr className="bg-[#004B87]/10 font-black text-sm text-[#0A1128]">
                      <td className="py-3.5 px-4">TOTAL ANNUAL OPERATING COST (B)</td>
                      <td className="py-3.5 px-4 text-right text-[#004B87] text-base">{crop.costEconomics.totalOperationalCost}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section C: Net Revenue & Returns */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <IndianRupee className="w-5 h-5 text-[#25D366]" />
                <h4 className="text-lg font-bold text-[#0A1128]">
                  Part C: Projected Commercial Returns & Net Profitability
                </h4>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-[#F0F4F8] border border-slate-200">
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Average Yield</span>
                  <span className="text-sm font-black text-[#0A1128] mt-1 block">
                    {crop.costEconomics.returnsAndProfitability.yieldBenchmark}
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-[#F0F4F8] border border-slate-200">
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Selling Price</span>
                  <span className="text-sm font-black text-[#0A1128] mt-1 block">
                    {crop.costEconomics.returnsAndProfitability.sellingPrice}
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-[#F0F4F8] border border-slate-200">
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">Gross Revenue / Year</span>
                  <span className="text-base font-black text-[#004B87] mt-1 block">
                    {crop.costEconomics.returnsAndProfitability.grossRevenue}
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-[#004B87] text-white shadow-md">
                  <span className="text-xs text-[#25D366] font-bold uppercase tracking-wider block">Net Return / Year</span>
                  <span className="text-xl font-black text-white mt-1 block">
                    {crop.costEconomics.returnsAndProfitability.netReturnPerYear}
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 mt-3 italic">
                * Note: The financial projections above are indicative models based on standard agronomic practices and prevailing Indian market prices. Actual figures vary depending on management proficiency, region, and festive price surges.
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
