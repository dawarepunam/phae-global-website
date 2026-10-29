import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { PRODUCTS_LIST } from "@/data/polyhubData";
import { Check, ShieldCheck, ArrowRight, ArrowLeft, Send } from "lucide-react";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS_LIST.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS_LIST.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | PolyHub Agro Engineers",
    };
  }

  return {
    title: `${product.title} | PolyHub Agro Engineers`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS_LIST.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[#F5F2E9] min-h-screen pb-24">
      <PageBanner
        title={product.title}
        subtitle={product.category}
        breadcrumbItems={[
          { label: "Products", href: "/products" },
          { label: product.title },
        ]}
        backgroundImage={product.bannerImage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Back Link */}
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#183F32] hover:text-[#B5A16A] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products Catalogue</span>
        </Link>

        {/* Product Overview Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image and Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
              <div className="h-80 sm:h-96 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {product.galleryImages && product.galleryImages.length > 0 && (
              <div className="grid grid-cols-4 gap-3">
                {product.galleryImages.map((imgUrl, i) => (
                  <div key={i} className="h-20 sm:h-24 rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                    <img src={imgUrl} alt={`${product.title} view ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                ))}
              </div>
            )}

            {/* Ideal Crops Callout */}
            <div className="p-6 rounded-2xl bg-white border border-[#183F32]/10 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#183F32] mb-1">
                Recommended Crops & Cultivation Suitability
              </h3>
              <p className="text-sm font-semibold text-[#102C24]">
                {product.idealFor}
              </p>
            </div>
          </div>

          {/* Right Column: Key Details & Quick CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg space-y-5">
              
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#183F32] bg-[#A6B5A0]/20 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                {product.badge && (
                  <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#B5A16A]/20 text-[#102C24]">
                    {product.badge}
                  </span>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#102C24]">
                {product.title}
              </h2>

              <p className="text-sm text-slate-700 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Engineering Highlights */}
              <div className="pt-3 border-t border-slate-100 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#183F32]">
                  Key Features:
                </h4>
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-[#183F32] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Inquiry Action Box */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="btn-gold w-full text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Custom Quotation & DPR</span>
                </Link>

                <div className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#183F32]" />
                  <span>Eligible for up to 50% NHB/MIDH Subsidy Support</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Detailed Technical Specifications Table */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-lg">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#183F32] bg-[#A6B5A0]/20 px-3 py-1 rounded-full">
              Engineering Compliance
            </span>
            <h3 className="text-2xl font-black text-[#102C24] mt-2">
              Technical Specifications & Structural Parameters
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Fabricated strictly according to IS 1239 / IS 1161 and National Horticulture Board guidelines.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#183F32]/20 bg-[#F5F2E9]">
                  <th className="py-3.5 px-4 font-bold text-[#102C24] w-1/3">Parameter</th>
                  <th className="py-3.5 px-4 font-bold text-[#102C24]">Engineering Standard / Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {product.specifications.map((spec, i) => (
                  <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-[#183F32]">{spec.label}</td>
                    <td className="py-3.5 px-4 text-slate-700">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

