import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { CROPS_ECONOMICS_LIST } from "@/data/polyhubData";

export const metadata: Metadata = {
  title: "Crop Economics & Profitability | PolyHub Agro Engineers",
  description: "Explore cultivation economics, yield advantages, market demand, and revenue viability for high-value flowers and vegetables grown under protected polyhouse conditions.",
};

export default function EconomicsPage() {
  return (
    <div className="bg-[#F5F2E9] min-h-screen">
      <PageBanner
        title="Crop Economics"
        subtitle="Know the Potential, Plan for a Profitable Future"
        breadcrumbItems={[{ label: "Economics" }]}
        backgroundImage="https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Intro */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#183F32] bg-[#A6B5A0]/20 px-3 py-1 rounded-full">
            High-Value Horticulture & Floriculture
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#102C24] mt-3">
            Commercial Return on Investment Under Protected Shelters
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Protected cultivation structures convert farming from a weather-vulnerable risk into a high-precision manufacturing industry. Below are the key crops that deliver optimal profitability in PolyHub polyhouses and shade nets.
          </p>
        </div>

        {/* Crops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CROPS_ECONOMICS_LIST.map((crop) => (
            <div
              key={crop.id}
              className="premium-agro-card overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                    crop.type === "Flower" ? "bg-pink-700 text-white" : "bg-[#183F32] text-white"
                  }`}>
                    {crop.type}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#102C24] group-hover:text-[#183F32] transition-colors">
                    {crop.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    Varieties: {crop.variety}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {crop.shortSummary}
                  </p>

                  <div className="mt-4 p-3 rounded-xl bg-[#F5F2E9] border border-slate-200/80 text-xs">
                    <span className="font-bold text-[#183F32] block">Ideal Structure:</span>
                    <span className="text-slate-700">{crop.climateSuitability}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/economics/${crop.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#183F32] text-[#183F32] hover:bg-[#183F32] hover:text-white font-bold text-xs transition-all"
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>View Economics & Yield Metrics</span>
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

