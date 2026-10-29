import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { ArrowRight, TrendingUp, Sparkles, Sprout } from "lucide-react";
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
        backgroundImage="https://polyhubagro.com/wp-content/uploads/2024/07/ANTHURIUM-poly.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Intro */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#183F32] bg-[#A6B5A0]/20 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <Sprout className="w-3.5 h-3.5" /> High-Value Horticulture & Floriculture
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#102C24] mt-3">
            Commercial Return on Investment Under Protected Shelters
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Protected cultivation structures convert farming from a weather-vulnerable risk into a high-precision manufacturing industry. Explore bankable project costs, recurring cultivation economics, and annual net returns for high-value commercial crops.
          </p>
        </div>

        {/* Crops Grid with equal height cards and strict alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {CROPS_ECONOMICS_LIST.map((crop) => (
            <div
              key={crop.id}
              className="premium-agro-card overflow-hidden flex flex-col justify-between group h-full"
            >
              <div className="flex-1 flex flex-col">
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  
                  <span className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm ${
                    crop.type === "Flower" ? "bg-pink-700 text-white" : "bg-[#183F32] text-white"
                  }`}>
                    {crop.type}
                  </span>

                  {crop.costEconomics && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#B5A16A] text-white shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Full Cost DPR
                    </span>
                  )}

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-medium text-white/80 block">
                      Varieties: {crop.variety.split(',').slice(0, 2).join(', ')}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#102C24] group-hover:text-[#183F32] transition-colors">
                      {crop.name}
                    </h3>

                    {/* Summary with fixed min-height for uniform alignment */}
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed min-h-[4rem]">
                      {crop.shortSummary}
                    </p>
                  </div>

                  {/* Ideal Structure badge */}
                  <div className="mt-4 p-3 rounded-xl bg-[#F5F2E9] border border-slate-200/80 text-xs min-h-[4rem] flex flex-col justify-center">
                    <span className="font-bold text-[#183F32] block">Ideal Structure:</span>
                    <span className="text-slate-700 font-medium line-clamp-2">{crop.climateSuitability}</span>
                  </div>
                </div>
              </div>

              {/* Action Button at bottom */}
              <div className="p-6 pt-0 mt-auto">
                <Link
                  href={`/economics/${crop.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#183F32] text-[#183F32] hover:bg-[#183F32] hover:text-white font-bold text-xs transition-all shadow-sm group-hover:shadow"
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
