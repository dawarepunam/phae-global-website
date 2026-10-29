"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRODUCTS_LIST } from "@/data/polyhubData";
import { ArrowRight, Wind, Layers, Clock, DollarSign, ChevronRight } from "lucide-react";

const tabs = ["All", "Polyhouse", "Greenhouse", "Shade Net House", "Tunnel", "Others"];

function filterProducts(tab: string) {
  if (tab === "All") return PRODUCTS_LIST;
  return PRODUCTS_LIST.filter((p) => {
    if (tab === "Polyhouse") return p.category === "Polyhouses";
    if (tab === "Greenhouse") return p.category === "Precision Agri";
    if (tab === "Shade Net House") return p.category === "Shade Nets";
    if (tab === "Tunnel") return p.id.includes("tunnel");
    return true;
  });
}

export default function Products() {
  const [activeTab, setActiveTab] = useState("All");
  const filtered = filterProducts(activeTab);

  return (
    <section className="bg-[#F5F2E9] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Section Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="section-label">OUR PRODUCTS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102C24] tracking-tight leading-tight mt-4">
              Innovative Structures<br />
              <span className="text-[#183F32]">for Better Farming</span>
            </h2>
            <div className="section-divider mt-4" />
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Durable, high-yield structures engineered using hot-dip galvanized GI steel pipes and 200-micron anti-drip UV polyfilms.
            </p>
          </div>
          <Link
            href="/products"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-bold text-[#183F32] hover:text-[#B5A16A] transition-colors group"
          >
            <span>View All Products</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-250 ${
                activeTab === tab ? "filter-tab-active" : "filter-tab"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Products Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="premium-agro-card flex flex-col group animate-fade-in"
              style={{ animationDelay: `${idx * 0.06}s` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-[#E8EDE6]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600"
                  style={{ transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
                />
                {/* Category tag */}
                <div className="absolute top-3 left-3">
                  <span className="bg-[#102C24]/85 backdrop-blur-sm text-[#C5B27D] text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border border-[#B5A16A]/30">
                    {item.category}
                  </span>
                </div>
                {item.badge && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-[#B5A16A] text-[#102C24] text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102C24]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-base font-bold text-[#102C24] leading-snug group-hover:text-[#183F32] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2 flex-1">
                  {item.shortDescription}
                </p>

                {/* CTA */}
                <Link
                  href={`/products/${item.slug}`}
                  className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#183F32] hover:text-[#B5A16A] transition-colors group/link"
                >
                  <span>Learn More</span>
                  <div className="w-7 h-7 rounded-full bg-[#F5F2E9] group-hover/link:bg-[#183F32] group-hover/link:text-white flex items-center justify-center transition-all duration-250 border border-slate-200 group-hover/link:border-[#183F32]">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── Flagship Spotlight ── */}
        <div className="mt-20 bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center space-y-6">
              <div>
                <span className="section-label">FLAGSHIP STRUCTURE</span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#102C24] mt-4 leading-tight">
                  Naturally Ventilated<br />Polyhouse
                </h3>
                <div className="section-divider mt-3" />
              </div>

              <p className="text-sm text-slate-600 leading-relaxed max-w-md">
                Our Naturally Ventilated Polyhouse is engineered to provide optimal climatic conditions for healthy plant growth, with natural chimney-effect air circulation and efficient temperature control — without massive power expenses.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: Wind, label: "Natural Airflow" },
                  { icon: Layers, label: "UV Diffused Film" },
                  { icon: Clock, label: "15+ Yr GI Life" },
                  { icon: DollarSign, label: "Cost Effective" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-[#F5F2E9] border border-slate-100 text-center hover:border-[#B5A16A]/30 hover:shadow-sm transition-all">
                    <Icon className="w-5 h-5 text-[#183F32]" />
                    <span className="text-[11px] font-bold text-slate-700 leading-tight">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/products/naturally-ventilated-polyhouse"
                  className="btn-gold px-6 py-3 rounded-xl text-sm font-bold inline-flex items-center gap-2"
                >
                  View Full Details <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 bg-[#F5F2E9] hover:bg-slate-100 transition-colors border border-slate-200"
                >
                  Request Technical DPR
                </Link>
              </div>
            </div>

            {/* Images */}
            <div className="lg:col-span-5 bg-[#F5F2E9] p-6 flex flex-col gap-3">
              <div className="rounded-2xl overflow-hidden flex-1 min-h-[200px]">
                <img
                  src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80"
                  alt="Naturally Ventilated Polyhouse"
                  className="w-full h-full object-cover"
                  style={{ minHeight: "200px" }}
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=300&q=80",
                  "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=300&q=80",
                  "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=300&q=80",
                  "https://images.unsplash.com/photo-1592417817098-8f3d69104a49?auto=format&fit=crop&w=300&q=80",
                ].map((src, i) => (
                  <div key={i} className="h-16 rounded-xl overflow-hidden border-2 border-white shadow-sm">
                    <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
