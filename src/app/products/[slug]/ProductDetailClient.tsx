"use client";

import React, { useState } from "react";
import { Check, ShieldCheck, Send, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { ProductItem } from "@/data/polyhubData";

interface ProductDetailClientProps {
  product: ProductItem;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const allImages = [
    product.image,
    ...(product.galleryImages || []).filter((img) => img !== product.image)
  ];

  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % allImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + allImages.length) % allImages.length);
    }
  };

  return (
    <>
      {/* Product Overview Layout - Aligned Flex Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Interactive Main Image + Clickable Thumbnails + Suitability */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Main Featured Image with Click to Zoom Lightbox */}
          <div 
            onClick={() => openLightbox(allImages.indexOf(activeImage))}
            className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white group cursor-pointer relative"
          >
            <div className="h-80 sm:h-[420px] w-full overflow-hidden relative">
              <img
                src={activeImage}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-[#102C24]/90 text-white text-xs font-bold px-4 py-2 rounded-xl backdrop-blur-md flex items-center gap-2 shadow-lg">
                  <ZoomIn className="w-4 h-4 text-[#B5A16A]" /> Click to Enlarge
                </span>
              </div>
            </div>
          </div>

          {/* Gallery Thumbnails (Clicking switches main image and lets you click to open modal) */}
          {allImages.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {allImages.map((imgUrl, i) => {
                const isActive = activeImage === imgUrl;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`h-20 sm:h-24 rounded-2xl overflow-hidden border-2 transition-all relative group bg-white shadow-sm ${
                      isActive 
                        ? "border-[#183F32] ring-2 ring-[#183F32]/20 scale-[0.98]" 
                        : "border-slate-200 hover:border-[#B5A16A] opacity-80 hover:opacity-100"
                    }`}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`${product.title} thumbnail ${i + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                    />
                    {isActive && (
                      <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-[#183F32] ring-2 ring-white" />
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* Recommended Crops Suitability Callout */}
          <div className="p-6 rounded-2xl bg-white border border-[#183F32]/10 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#183F32] mb-1.5">
              Recommended Crops & Cultivation Suitability
            </h3>
            <p className="text-sm font-semibold text-[#102C24] leading-relaxed">
              {product.idealFor}
            </p>
          </div>

        </div>

        {/* Right Column: Key Details & Quick CTA Action Box */}
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
                Key Engineering Features:
              </h4>
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-[#183F32] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>

            {/* Inquiry Action Box */}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Link
                href="/contact"
                className="btn-gold w-full text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
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

      {/* Full-Screen Image Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          {allImages.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Image Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl relative"
          >
            <img
              src={allImages[lightboxIndex]}
              alt={`${product.title} full view`}
              className="max-h-[85vh] w-auto max-w-full object-contain mx-auto"
            />
            <div className="absolute bottom-3 left-4 right-4 text-center text-xs text-white/80 bg-black/50 py-1.5 px-3 rounded-lg backdrop-blur-sm">
              {product.title} ({lightboxIndex + 1} of {allImages.length})
            </div>
          </div>

          {/* Right Arrow */}
          {allImages.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}
    </>
  );
}
