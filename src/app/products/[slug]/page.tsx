import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { PRODUCTS_LIST } from "@/data/polyhubData";
import { ArrowLeft } from "lucide-react";
import ProductDetailClient from "./ProductDetailClient";

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
      title: "Product Not Found | PHAE Global",
    };
  }

  return {
    title: `${product.title} | PHAE Global`,
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
    <div className="bg-[#F0F4F8] min-h-screen pb-24">
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
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004B87] hover:text-[#B5A16A] mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Products Catalogue</span>
        </Link>

        {/* Interactive Client Component with Clickable Thumbnails and Lightbox Modal */}
        <ProductDetailClient product={product} />

        {/* Detailed Technical Specifications Table */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-lg">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004B87] bg-[#90A4AE]/20 px-3 py-1 rounded-full">
              Engineering Compliance
            </span>
            <h3 className="text-2xl font-black text-[#0A1128] mt-2">
              Technical Specifications & Structural Parameters
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Fabricated strictly according to IS 1239 / IS 1161 and National Horticulture Board guidelines.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-[#004B87]/20 bg-[#F0F4F8]">
                  <th className="py-3.5 px-4 font-bold text-[#0A1128] w-1/3">Parameter</th>
                  <th className="py-3.5 px-4 font-bold text-[#0A1128]">Engineering Standard / Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {product.specifications.map((spec, i) => (
                  <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-[#004B87]">{spec.label}</td>
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
