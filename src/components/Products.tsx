"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRODUCTS_LIST } from "@/data/polyhubData";
import { ArrowRight, Wind, Layers, Clock, DollarSign, ChevronRight, ZoomIn, X, ChevronLeft } from "lucide-react";

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

// Real polyhub flagship images (NV Polyhouse)
const flagshipGallery = [
  "https://polyhubagro.com/wp-content/uploads/2020/04/WhatsApp-Image-2024-07-30-at-12.30.39-PM-1024x768.jpeg",
  "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-06-at-10.24.04_9cb01ebd-1.jpg",
  "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-15.54.00_2ba3d33c.jpg",
  "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-15.54.03_3c367041.jpg",
];

export default function Products() {
  const [activeTab, setActiveTab] = useState("All");
  const filtered = filterProducts(activeTab);

  // Interactive Flagship Gallery State
  const [activeMainImg, setActiveMainImg] = useState<string>(flagshipGallery[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const nextLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % flagshipGallery.length);
  };

  const prevLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + flagshipGallery.length) % flagshipGallery.length);
  };

  return (
    <section className="bg-[#F0F4F8] py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="section-label">OUR PRODUCTS</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1128] tracking-tight leading-tight mt-4">
              Innovative Structures<br />
              <span className="text-[#004B87]">for Better Farming</span>
            </h2>
            <div className="section-divider mt-4" />
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Durable, high-yield structures engineered using hot-dip galvanized GI steel pipes and 200-micron anti-drip UV polyfilms.
            </p>
          </div>
          <Link
            href="/products"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-bold text-[#004B87] hover:text-[#1a7a4a] transition-colors group"
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
                  <span className="bg-[#0A1128]/85 backdrop-blur-sm text-[#1a7a4a] text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border border-[#B5A16A]/30">
                    {item.category}
                  </span>
                </div>
                {item.badge && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-[#1a7a4a] text-[#0A1128] text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-base font-bold text-[#0A1128] leading-snug group-hover:text-[#0056B3] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2 flex-1">
                  {item.shortDescription}
                </p>

                {/* CTA */}
                <Link
                  href={`/products/${item.slug}`}
                  className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#004B87] hover:text-[#1a7a4a] transition-colors group/link"
                >
                  <span>Learn More</span>
                  <div className="w-7 h-7 rounded-full bg-[#F0F4F8] group-hover/link:bg-[#004B87] group-hover/link:text-white flex items-center justify-center transition-all duration-250 border border-slate-200 group-hover/link:border-[#0056B3]">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── Flagship Spotlight (Interactive Gallery & Real PHAE Global Images) ── */}
        <div className="mt-16 sm:mt-24 bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* Content */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6">
              <div>
                <span className="section-label">FLAGSHIP STRUCTURE</span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1128] mt-3 leading-tight">
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
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-[#F0F4F8] border border-slate-100 text-center hover:border-[#B5A16A]/30 hover:shadow-sm transition-all"
                  >
                    <Icon className="w-5 h-5 text-[#004B87]" />
                    <span className="text-[11px] font-bold text-slate-700 leading-tight">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/products/naturally-ventilated-polyhouse"
                  className="btn-gold px-6 py-3 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <span>View Full Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-[#F0F4F8] hover:bg-slate-100 transition-colors border border-slate-200"
                >
                  Request Technical DPR
                </Link>
              </div>
            </div>

            {/* Interactive Image Gallery */}
            <div className="lg:col-span-5 bg-[#F0F4F8] p-5 sm:p-7 flex flex-col gap-3 justify-center">
              
              {/* Main Image with Zoom Trigger */}
              <div
                onClick={() => openLightbox(flagshipGallery.indexOf(activeMainImg))}
                className="rounded-2xl overflow-hidden flex-1 min-h-[240px] sm:min-h-[300px] relative group cursor-pointer border-2 border-white shadow-md bg-white"
              >
                <img
                  src={activeMainImg}
                  alt="Naturally Ventilated Polyhouse"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-[#0A1128]/90 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                    <ZoomIn className="w-4 h-4 text-[#1a7a4a]" /> Click to Enlarge
                  </span>
                </div>
              </div>

              {/* 4 Interactive Thumbnails (Click switches main image) */}
              <div className="grid grid-cols-4 gap-2">
                {flagshipGallery.map((src, i) => {
                  const isActive = activeMainImg === src;
                  return (
                    <button
                      key={i}
                      onClick={() => setActiveMainImg(src)}
                      className={`h-16 sm:h-20 rounded-xl overflow-hidden border-2 transition-all relative group bg-white shadow-sm ${
                        isActive
                          ? "border-[#0056B3] ring-2 ring-[#004B87]/30 scale-[0.98]"
                          : "border-white hover:border-[#B5A16A] opacity-75 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={src}
                        alt={`Flagship view ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {isActive && (
                        <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#004B87] ring-1 ring-white" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* ── Fullscreen Lightbox Modal ── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevLightbox}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={flagshipGallery[lightboxIndex]}
              alt="Naturally Ventilated Polyhouse"
              className="max-h-[85vh] w-auto max-w-full object-contain mx-auto"
            />
            <div className="absolute bottom-3 left-4 right-4 text-center text-xs text-white/90 bg-black/60 py-1.5 px-3 rounded-lg backdrop-blur-sm">
              Naturally Ventilated Polyhouse ({lightboxIndex + 1} of {flagshipGallery.length})
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextLightbox}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}

