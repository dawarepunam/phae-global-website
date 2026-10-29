"use client";

import React, { useState } from "react";
import PageBanner from "@/components/PageBanner";
import { GALLERY_ITEMS } from "@/data/polyhubData";
import { Maximize2, X, MapPin } from "lucide-react";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<{ src: string; title: string; location: string } | null>(null);

  const filters = ["All", "Polyhouses", "Greenhouse", "Shade Net House", "Farming", "Construction"];

  const filtered = activeFilter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-[#F5F2E9] min-h-screen">
      <PageBanner
        title="Project Gallery"
        subtitle="Real Projects. Real Results."
        breadcrumbItems={[{ label: "Gallery" }]}
        backgroundImage="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                activeFilter === f
                  ? "bg-[#183F32] text-white shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg({ src: item.image, title: item.title, location: item.location })}
              className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-md group cursor-pointer border border-slate-200/80 bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102C24]/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5B27D] bg-[#102C24]/80 px-2.5 py-0.5 rounded-full">
                  {item.category}
                </span>
                <h3 className="text-base font-bold mt-1.5">{item.title}</h3>
                <p className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#B5A16A]" />
                  <span>{item.location}</span>
                </p>
              </div>

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-pointer"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh]">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute -top-12 right-0 text-white p-2 hover:text-[#C5B27D]"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImg.src}
              alt={selectedImg.title}
              className="max-w-full max-h-[75vh] rounded-2xl object-contain shadow-2xl border border-white/20"
            />
            <div className="text-white text-center mt-3">
              <h4 className="text-lg font-bold">{selectedImg.title}</h4>
              <p className="text-xs text-slate-400">{selectedImg.location}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

