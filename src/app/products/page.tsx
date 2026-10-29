import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import { PRODUCTS_LIST } from "@/data/polyhubData";

export const metadata: Metadata = {
  title: "Products Catalogue | PolyHub Agro Engineers",
  description: "Browse commercial polyhouses, naturally ventilated greenhouses, poly tunnels, shade net houses, and hydroponic structures manufactured by PolyHub Agro Engineers.",
};

export default function ProductsPage() {
  return (
    <div className="bg-[#F5F2E9] min-h-screen">
      <PageBanner
        title="Products Catalogue"
        subtitle="Engineered Commercial Agri-Structures for Modern Farming"
        breadcrumbItems={[{ label: "Products" }]}
        backgroundImage="https://polyhubagro.com/wp-content/uploads/2020/04/WhatsApp-Image-2024-07-30-at-12.30.39-PM-1024x768.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Intro */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#183F32] bg-[#A6B5A0]/20 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> High-Performance Agri-Structures
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#102C24] mt-3">
            Engineered For Climate Resilience & Maximum Harvest
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Every structure engineered by PolyHub is fabricated using hot-dip galvanized steel pipes conforming to IS 1239/1161, multi-layered anti-drip UV polyfilms, and high-performance shade nettings conforming to BIS specifications.
          </p>
        </div>

        {/* Product Cards Grid - Strictly Aligned & Equal Height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PRODUCTS_LIST.map((product) => (
            <div
              key={product.id}
              className="premium-agro-card overflow-hidden flex flex-col justify-between group h-full"
            >
              <div className="flex-1 flex flex-col">
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                  {product.badge && (
                    <span className="absolute top-3 right-3 bg-[#102C24]/90 border border-[#B5A16A]/60 text-[#C5B27D] text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-md">
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 left-3 bg-[#102C24]/80 backdrop-blur-md text-[#F5F2E9] text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                    {product.category}
                  </span>
                </div>

                {/* Content with fixed minimum heights for perfect alignment */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#102C24] group-hover:text-[#183F32] transition-colors line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed min-h-[4rem]">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="mt-4 space-y-2 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#183F32] block">
                      Engineering Highlights:
                    </span>
                    {product.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#B5A16A] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat.split(':')[0]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link at Bottom */}
              <div className="p-6 pt-0 mt-auto">
                <Link
                  href={`/products/${product.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#183F32] text-[#183F32] hover:bg-[#183F32] hover:text-white font-bold text-xs transition-all shadow-sm group-hover:shadow"
                >
                  <span>View Specifications & Details</span>
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Standards Bar */}
        <div className="mt-16 bg-[#102C24] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#B5A16A]/20">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#B5A16A]">
              Manufacturing & Civil Standard
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              Need a Custom Engineered Polyhouse Quotation?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              All structures qualify for up to 50% capital subsidies under National Horticulture Mission (MIDH) and National Horticulture Board (NHB).
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-gold whitespace-nowrap px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md shrink-0"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Get Project Estimate</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
