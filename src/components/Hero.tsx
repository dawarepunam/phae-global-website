"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Play,
  ArrowRight,
  TrendingUp,
  Leaf,
  Shield,
  X,
  ChevronDown,
  Sparkles
} from "lucide-react";

const slides = [
  {
    subtitle: "MODERN AGRICULTURE SOLUTIONS",
    title: "Harvesting the Future",
    highlight: "with Polyhouse",
    description:
      "Advanced polyhouse, greenhouse and shade net solutions for sustainable and high-yield farming.",
    bgImage:
      "https://polyhubagro.com/wp-content/uploads/2020/04/WhatsApp-Image-2024-07-30-at-12.30.39-PM-1024x768.jpeg",
    cta: "Explore Products",
    ctaLink: "/products",
  },
  {
    subtitle: "PROTECTED CULTIVATION ARCHITECTURE",
    title: "Precision Microclimate",
    highlight: "For Every Season",
    description:
      "Naturally ventilated & climate-controlled structures engineered to withstand extreme wind & harsh weather.",
    bgImage:
      "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-06-at-10.24.04_9cb01ebd-1.jpg",
    cta: "Our Services",
    ctaLink: "/services",
  },
  {
    subtitle: "TURNKEY AGRI-TECH PROJECTS",
    title: "Higher Yields,",
    highlight: "90% Less Water Loss",
    description:
      "Maximize your crop profitability with state-of-the-art GI tubular frames and automated fertigation systems.",
    bgImage:
      "https://polyhubagro.com/wp-content/uploads/2024/08/Multi-dome-shade-net-1-1024x768.jpg",
    cta: "Get Subsidy Info",
    ctaLink: "/subsidy",
  },
];

const featureCards = [
  {
    icon: TrendingUp,
    title: "Better Crop",
    subtitle: "Higher Yield Cultivation",
    color: "from-[#B5A16A]/20 to-[#B5A16A]/5",
  },
  {
    icon: Shield,
    title: "Optimized",
    subtitle: "Microclimate Resources",
    color: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    subtitle: "Organic & Precision Farming",
    color: "from-[#90A4AE]/20 to-[#90A4AE]/5",
  },
];

// Curated Project Showcase Slides for Cinematic Video Reel Simulation
const reelScenes = [
  {
    title: "Naturally Ventilated Polyhouse Engineering",
    category: "Structural Fabrication",
    image: "https://polyhubagro.com/wp-content/uploads/2020/04/WhatsApp-Image-2024-07-30-at-12.30.39-PM-1024x768.jpeg",
    description: "IS 1239 / 1161 compliant galvanized tubular steel framework with natural aerodynamic roof ventilation."
  },
  {
    title: "Multi-Dome Shade Net Architecture",
    category: "Microclimate Shading",
    image: "https://polyhubagro.com/wp-content/uploads/2024/08/Multi-dome-shade-net-1-1024x768.jpg",
    description: "Curved aerodynamic dome roofs offering 35% - 75% UV-stabilized protection for high-value floriculture."
  },
  {
    title: "Commercial Dutch Rose & Floriculture Setup",
    category: "High-Value Yield",
    image: "https://polyhubagro.com/wp-content/uploads/2024/07/dutch-rose-1024x576.jpg",
    description: "High-density planting producing 6,00,000+ export quality cut stems annually with top misting."
  },
  {
    title: "Turnkey Field Installation & Farmer Handover",
    category: "On-Site Execution",
    image: "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-06-at-10.24.04_9cb01ebd-1.jpg",
    description: "Complete civil anchor grouting, motorized side winches, and automated drip fertigation commissioning."
  },
  {
    title: "Climate-Controlled Fan & Pad Greenhouse",
    category: "Precision Agri-Tech",
    image: "https://polyhubagro.com/wp-content/uploads/2020/04/Fan-and-pad-1-1024x576.jpg",
    description: "Cellulose cooling pads and high-CFM exhaust fans maintaining optimum temperature regardless of 45°C heat."
  },
  {
    title: "Cucumber & High-Cash Crop Harvest",
    category: "Commercial Returns",
    image: "https://polyhubagro.com/wp-content/uploads/2024/07/fresh-cucumber-gathered-into-plastic-box-from-greenhouse-plants-1024x683.jpg",
    description: "30-day turnaround producing 1,00,000 kg fruit yield across dual crop cycles."
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [reelSceneIndex, setReelSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Video Reel Autoplay Simulation
  useEffect(() => {
    if (!videoModalOpen || !isPlaying) return;
    const interval = setInterval(() => {
      setReelSceneIndex((prev) => (prev + 1) % reelScenes.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [videoModalOpen, isPlaying]);

  // Close video modal on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoModalOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const active = slides[currentSlide];

  return (
    <>
      <section className="relative min-h-[95vh] sm:min-h-screen flex items-center overflow-hidden bg-[#0A1128] text-white">
        {/* ── Background Slides ── */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              i === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-[1.04] pointer-events-none"
            }`}
          >
            <img
              src={slide.bgImage}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Layered gradient overlays for cinematic depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E18]/96 via-[#0A1128]/80 to-[#0A1128]/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E18]/90 via-transparent to-black/30" />
          </div>
        ))}

        {/* ── Content Grid ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:py-36 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Headings & CTA */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-5 sm:space-y-6">
              
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#90A4AE]/20 border border-[#B5A16A]/40 text-[#C5B27D] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#C5B27D]" />
                <span>{active.subtitle}</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-white">
                {active.title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5B27D] via-[#E2D5B0] to-[#B5A16A]">
                  {active.highlight}
                </span>
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-200/90 max-w-2xl leading-relaxed font-normal">
                {active.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={active.ctaLink}
                  className="btn-gold px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all"
                >
                  <span>{active.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Watch Video Button that triggers Cinematic Reel Modal */}
                <button
                  onClick={() => {
                    setReelSceneIndex(0);
                    setIsPlaying(true);
                    setVideoModalOpen(true);
                  }}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-bold text-white transition-all group"
                >
                  <span className="w-8 h-8 rounded-full bg-[#B5A16A] text-[#0A1128] flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </span>
                  <span>Watch Field Project Video</span>
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex items-center gap-2 pt-6">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`flex items-center gap-1.5 text-xs font-bold transition-all ${
                      currentSlide === i
                        ? "text-[#C5B27D]"
                        : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    <div
                      className={`h-0.5 rounded-full transition-all duration-500 ${
                        currentSlide === i
                          ? "w-8 bg-[#C5B27D]"
                          : "w-4 bg-white/30"
                      }`}
                    />
                    <span>0{i + 1}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Feature Cards */}
            <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col gap-3">
              {featureCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className={`bg-gradient-to-br ${card.color} backdrop-blur-xl bg-[#0D2419]/60 border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-xl hover:border-[#B5A16A]/40 hover:bg-[#004B87]/50 transition-all duration-300 cursor-default`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#004B87] border border-[#B5A16A]/25 flex items-center justify-center text-[#C5B27D] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-0.5">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* Quick Stats */}
              <div className="mt-2 bg-[#0D2419]/70 backdrop-blur-xl border border-[#B5A16A]/20 rounded-2xl p-4 grid grid-cols-3 gap-3 text-center shadow-xl">
                {[
                  { val: "10+", label: "Years" },
                  { val: "300+", label: "Projects" },
                  { val: "9M+", label: "Sq. Mtrs" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-lg font-black text-[#C5B27D]">
                      {stat.val}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── Scroll Down Indicator ── */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 text-[11px] text-slate-400/80 z-20">
          <span className="uppercase tracking-widest text-[10px]">Scroll Down</span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-500/50 flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-[#C5B27D] rounded-full animate-bounce" />
          </div>
          <ChevronDown className="w-4 h-4 animate-bounce opacity-50" />
        </div>
      </section>

      {/* ── Cinematic Video Reel Modal (High-Res Real Project Imagery Simulation) ── */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0D2419] rounded-3xl overflow-hidden border border-[#B5A16A]/40 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 px-6 border-b border-white/10 bg-[#0A1128]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#C5B27D]">
                  PHAE Global Field Project Reel
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-semibold flex items-center gap-1.5 transition-colors"
                >
                  {isPlaying ? (
                    <><span>Pause</span></>
                  ) : (
                    <><span>Resume</span></>
                  )}
                </button>

                <button
                  onClick={() => setVideoModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
                  aria-label="Close Modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Simulated Cinematic Video Frame */}
            <div className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center">
              {reelScenes.map((scene, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    idx === reelSceneIndex 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-105 pointer-events-none"
                  }`}
                >
                  <img
                    src={scene.image}
                    alt={scene.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Cinematic Video Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40" />
                  
                  {/* On-screen Video Info Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md bg-[#B5A16A] text-[#0A1128]">
                      {scene.category} • Scene {idx + 1} of {reelScenes.length}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
                      {scene.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                      {scene.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Progress Bar along bottom */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-20">
                <div 
                  className="h-full bg-[#B5A16A] transition-all duration-500 ease-linear"
                  style={{ width: `${((reelSceneIndex + 1) / reelScenes.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Bottom Scene Selector Thumbnails */}
            <div className="p-4 bg-[#0A1E18] border-t border-white/10 flex items-center justify-between gap-3 overflow-x-auto">
              <span className="text-[11px] font-semibold text-slate-400 shrink-0">
                Jump to Chapter:
              </span>
              <div className="flex items-center gap-2 overflow-x-auto">
                {reelScenes.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setReelSceneIndex(idx);
                      setIsPlaying(true);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                      reelSceneIndex === idx
                        ? "bg-[#B5A16A] text-[#0A1128] shadow-md"
                        : "bg-white/5 hover:bg-white/10 text-slate-300"
                    }`}
                  >
                    0{idx + 1}. {s.category}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
