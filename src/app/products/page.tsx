import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PRODUCTS_LIST } from "@/data/polyhubData";

export const metadata: Metadata = {
  title: "Products Catalogue | PolyHub Agro Engineers",
  description: "Browse commercial polyhouses, naturally ventilated greenhouses, fan and pad systems, shade net houses, and hydroponic structures manufactured by PolyHub Agro Engineers.",
};

export default function ProductsPage() {
  return (
    <div className="bg-[#F5F2E9] min-h-screen">
      <PageBanner
        title="Products Catalogue"
        subtitle="Innovative Structures for Modern Farming"
        breadcrumbItems={[{ label: "Products" }]}
        backgroundImage="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Intro */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#183F32] bg-[#A6B5A0]/20 px-3 py-1 rounded-full">
            Commercial Agri-Structures
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#102C24] mt-3">
            Engineered For Climate Resilience & Maximum Harvest
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Every structure engineered by PolyHub is fabricated using hot-dip galvanized steel pipes, multi-layered anti-drip polyfilms, and high-performance shade nettings conforming to BIS specifications.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_LIST.map((product) => (
            <div
              key={product.id}
              className="premium-agro-card overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className="absolute top-3 right-3 bg-[#102C24]/90 border border-[#B5A16A]/60 text-[#C5B27D] text-[10px] font-bold uppercase px-3 py-1 rounded-full shadow-md">
                      {product.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 left-3 bg-[#102C24]/80 backdrop-blur-md text-[#F5F2E9] text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#102C24] group-hover:text-[#183F32] transition-colors">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-100">
                    {product.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#183F32] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-6 pt-0">
                <Link
                  href={`/products/${product.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#183F32] text-[#183F32] hover:bg-[#183F32] hover:text-white font-bold text-xs transition-all active:scale-[0.98]"
                >
                  <span>View Specifications & Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

