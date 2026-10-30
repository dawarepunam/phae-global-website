"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Maximize2, X } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/polyhubData";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // Take first 5 items to show on the preview section
  const previewItems = GALLERY_ITEMS.slice(0, 5);

  return (
    <section className="bg-[#F0F4F8] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">OUR GALLERY</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1128] tracking-tight mt-4">
            Real Projects. Real Results.
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            A visual showcase of commercial polyhouses, shade nets, and hi-tech horticulture setups engineered and constructed across India.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImg(item.image)}
              className="relative h-64 rounded-3xl overflow-hidden shadow-md group cursor-pointer border border-slate-200/80 bg-slate-900"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/90 via-[#0A1128]/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5B27D] bg-[#0A1128]/80 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-[#B5A16A]/30">
                  {item.category}
                </span>
                <h4 className="text-base font-bold mt-2 text-white leading-snug">
                  {item.title}
                </h4>
              </div>

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
          ))}

          {/* 6th Slot: View More Card Linking to /gallery */}
          <Link
            href="/gallery"
            className="relative h-64 rounded-3xl overflow-hidden bg-gradient-to-br from-[#0A1128] to-[#004B87] flex flex-col items-center justify-center text-white p-6 text-center border-2 border-[#B5A16A]/50 shadow-xl group hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-[#B5A16A]/10 rounded-full blur-2xl" />
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#C5B27D]">
              Complete Portfolio
            </span>
            <h4 className="text-2xl font-black mt-2 mb-4 text-white">
              View More Projects
            </h4>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C5B27D] to-[#B5A16A] text-[#0A1128] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <ArrowRight className="w-6 h-6" />
            </div>
          </Link>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 cursor-pointer"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute -top-12 right-0 text-white p-2 hover:text-[#C5B27D] transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImg} 
              alt="Project View" 
              className="max-w-full max-h-[80vh] rounded-2xl object-contain shadow-2xl border border-white/20" 
            />
          </div>
        </div>
      )}
    </section>
  );
}
