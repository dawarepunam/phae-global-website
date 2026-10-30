"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Play, Pause, X, ChevronLeft, ChevronRight, Award, Users, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/polyhubData";

const stats = [
  { value: "10+", label: "Years of Experience", icon: Award },
  { value: "300+", label: "Projects Completed", icon: Users },
  { value: "9M+", label: "Sq. Meters Area", icon: MapPin },
];

const principles = [
  {
    title: "Quality Engineering",
    description: "IS 1239 & IS 1161 certified hot-dip galvanized GI structures built to last 15+ years.",
  },
  {
    title: "End-to-End Support",
    description: "From site survey to subsidy paperwork — we handle the complete project lifecycle.",
  },
  {
    title: "Farmer-First Approach",
    description: "Customized designs for every soil type, crop, and climate zone across India.",
  },
];

// Curated Real PHAE Global High-Resolution Construction & Structure Images
const projectReelImages = [
  "https://polyhubagro.com/wp-content/uploads/2020/04/WhatsApp-Image-2024-07-30-at-12.30.39-PM-1024x768.jpeg",
  "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-06-at-10.24.04_9cb01ebd-1.jpg",
  "https://polyhubagro.com/wp-content/uploads/2024/08/Multi-dome-shade-net-1-1024x768.jpg",
  "https://polyhubagro.com/wp-content/uploads/2024/07/dutch-rose-1024x576.jpg",
  "https://polyhubagro.com/wp-content/uploads/2020/04/Fan-and-pad-1-1024x576.jpg",
  "https://polyhubagro.com/wp-content/uploads/2024/08/Hydroponic-Green-House-1-1024x576.jpg",
  "https://polyhubagro.com/wp-content/uploads/2024/07/fresh-cucumber-gathered-into-plastic-box-from-greenhouse-plants-1024x683.jpg",
  "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-12-at-15.54.04_b82e64ab.jpg",
];

export default function About() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIdx, setModalIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Fast 2-second auto-transition for seamless cinematic video effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % projectReelImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Modal autoplay (2 seconds)
  useEffect(() => {
    if (!modalOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setModalIdx((prev) => (prev + 1) % projectReelImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [modalOpen, isPlaying]);

  // ESC key to close modal
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const openModal = () => {
    setModalIdx(currentIdx);
    setIsPlaying(true);
    setModalOpen(true);
  };

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIdx((prev) => (prev + 1) % projectReelImages.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIdx((prev) => (prev - 1 + projectReelImages.length) % projectReelImages.length);
  };

  return (
    <section className="relative bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #004B87 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Content ── */}
          <div className="space-y-6 sm:space-y-7 order-2 lg:order-1">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0056B3] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-block">
                ABOUT US
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1128] tracking-tight leading-tight mt-3">
                PHAE Global<br />
                <span className="text-[#0056B3]">Engineers</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              PHAE GLOBAL Business Private Limited is committed to facilitating international trade and business collaborations. We bridge markets, create opportunities, and deliver sustainable growth through trust, integrity, and excellence.
            </p>

            {/* 4 Brand Pillars (Matching Reference Image) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              {[
                { title: "Global Network", icon: "🌐" },
                { title: "Trusted Partnerships", icon: "🤝" },
                { title: "Quality Assurance", icon: "🛡️" },
                { title: "Sustainable Growth", icon: "🌱" }
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-[#F0F4F8] border border-slate-200/80 text-center hover:border-blue-400/40 hover:bg-white transition-all">
                  <div className="text-xl mb-1">{item.icon}</div>
                  <span className="text-xs font-bold text-[#0A1128] block leading-tight">{item.title}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/about"
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-[#0056B3] hover:bg-[#004B87] text-white inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                <span>More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* 3 Stats (Matching Reference Image) */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-slate-200/80">
              {[
                { value: "10+", label: "Countries" },
                { value: "300+", label: "Partners" },
                { value: "500+", label: "Projects" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-[#0056B3]">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Smooth 2-Second Cinematic Image Video Reel (No Text/Titles) ── */}
          <div className="relative order-1 lg:order-2">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group aspect-[4/3] sm:aspect-video lg:aspect-[4/3] bg-black border-4 border-white"
              onClick={openModal}
            >
              {/* Stacked Images with 2-second crossfade */}
              {projectReelImages.map((imgUrl, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    i === currentIdx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt="PHAE Global Project"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                </div>
              ))}

              {/* Progress Bar (2 seconds loop) */}
              <div className="absolute top-3 left-4 right-4 flex gap-1 z-20">
                {projectReelImages.map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm"
                  >
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        i === currentIdx ? "w-full bg-[#25D366]" : "w-0"
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Clean Play Button without bottom titles */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 relative">
                  <div className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#25D366] to-[#25D366] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-[#0A1128] ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating NHB badge card */}
            <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white rounded-2xl shadow-xl border border-[#25D366]/20 p-3 sm:p-4 flex items-center gap-3 w-48 sm:w-56 z-20">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#004B87] flex items-center justify-center text-[#25D366] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-black text-[#0A1128]">NHB / MIDH</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 leading-tight">
                  Government Certified Structures
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Fullscreen Interactive Cinematic Video Reel Modal ── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-3 sm:p-6"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Controls */}
            <div className="flex items-center justify-between p-3.5 sm:p-4 bg-black/80 border-b border-white/10 z-30">
              <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                PHAE Global — Field Projects ({modalIdx + 1} of {projectReelImages.length})
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying((p) => !p)}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-white" />
                  ) : (
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  )}
                </button>
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Video Canvas */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              {projectReelImages.map((imgUrl, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    i === modalIdx ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt="PHAE Global Project"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Prev / Next Buttons */}
              <button
                onClick={prevImg}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center hover:bg-black/75 transition"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextImg}
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 border border-white/20 text-white flex items-center justify-center hover:bg-black/75 transition"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Progress bar in modal */}
              <div className="absolute bottom-3 left-4 right-4 flex gap-1 z-20">
                {projectReelImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setModalIdx(i)}
                    className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden hover:h-1.5 transition-all"
                  >
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        i === modalIdx ? "w-full bg-[#25D366]" : "w-0"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

