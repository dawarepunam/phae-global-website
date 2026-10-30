"use client";

import React, { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { GALLERY_ITEMS } from "@/data/polyhubData";
import { Maximize2, X, MapPin, ChevronLeft, ChevronRight, Sparkles, Filter } from "lucide-react";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = ["All", "Polyhouses", "Greenhouse", "Shade Net House", "Construction", "Farming"];

  const filtered = activeFilter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
    }
  };

  return (
    <div className="bg-[#F0F4F8] min-h-screen">
      <PageBanner
        title="Project Gallery"
        subtitle="Real Projects. Real Results."
        breadcrumbItems={[{ label: "Gallery" }]}
        backgroundImage="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1920&q=85"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        
        {/* Section Intro with Total Photos Badge */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0056B3] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block">
              PHOTO ARCHIVE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0A1128] mt-2">
              Pan-India Execution Portfolio
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-slate-200/90 shadow-sm text-xs font-bold text-[#0056B3]">
            <Sparkles className="w-4 h-4 text-[#0056B3]" />
            <span>Showing {filtered.length} of {GALLERY_ITEMS.length} Certified Installations</span>
          </div>
        </div>

        {/* Filter Pills with Smooth Active State */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {filters.map((f) => {
            const count = f === "All" ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter(i => i.category === f).length;
            return (
              <button
                key={f}
                onClick={() => {
                  setActiveFilter(f);
                  setLightboxIndex(null);
                }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
                  activeFilter === f
                    ? "filter-tab-active"
                    : "filter-tab"
                }`}
              >
                <span>{f}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeFilter === f ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Premium Animated Masonry/Grid (with hover zoom, gold badge, smooth entry) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="premium-agro-card group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 bg-[#0A1128]"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Gradient Dark Veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-[#0A1128]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
              
              {/* Category Pill Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#0A1128]/90 backdrop-blur-md text-[#C5B27D] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full border border-[#B5A16A]/35 shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* View Icon Button on Hover */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-md">
                <Maximize2 className="w-4 h-4 text-[#C5B27D]" />
              </div>

              {/* Bottom Caption & Location */}
              <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                <h3 className="text-base font-bold leading-snug group-hover:text-[#C5B27D] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 flex items-center gap-1.5 mt-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5B27D] shrink-0" />
                  <span>{item.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal with Next/Prev Carousel Controls */}
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Slide Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-[#0056B3] text-white flex items-center justify-center border border-white/20 transition-all shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Slide Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-[#0056B3] text-white flex items-center justify-center border border-white/20 transition-all shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Image & Info */}
          <div 
            className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black">
              <img
                src={filtered[lightboxIndex].image}
                alt={filtered[lightboxIndex].title}
                className="max-w-full max-h-[75vh] object-contain mx-auto"
              />
            </div>

            <div className="mt-4 text-center text-white space-y-1">
              <div className="inline-block bg-[#004B87] text-[#C5B27D] text-[10px] font-bold uppercase px-3 py-0.5 rounded-full border border-[#B5A16A]/40 mb-1">
                {filtered[lightboxIndex].category} • Photo {lightboxIndex + 1} of {filtered.length}
              </div>
              <h4 className="text-lg font-bold text-white">
                {filtered[lightboxIndex].title}
              </h4>
              <p className="text-xs text-slate-300 flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C5B27D]" />
                <span>{filtered[lightboxIndex].location}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
