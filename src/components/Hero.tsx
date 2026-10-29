"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Play,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Leaf,
  Shield,
  X,
  ChevronDown
} from "lucide-react";

const slides = [
  {
    subtitle: "MODERN AGRICULTURE SOLUTIONS",
    title: "Harvesting the Future",
    highlight: "with Polyhouse",
    description:
      "Advanced polyhouse, greenhouse and shade net solutions for sustainable and high-yield farming.",
    bgImage:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1920&q=85",
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
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=1920&q=85",
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
      "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1920&q=85",
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
    color: "from-[#A6B5A0]/20 to-[#A6B5A0]/5",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 150);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(
    () => goToSlide((currentSlide + 1) % slides.length),
    [currentSlide, goToSlide]
  );

  const prevSlide = useCallback(
    () => goToSlide((currentSlide - 1 + slides.length) % slides.length),
    [currentSlide, goToSlide]
  );

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

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
      <section className="relative min-h-[95vh] sm:min-h-screen flex items-center overflow-hidden bg-[#102C24] text-white">
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
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1E18]/96 via-[#102C24]/80 to-[#102C24]/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E18]/90 via-transparent to-black/30" />
          </div>
        ))}

        {/* ── Ambient Glow ── */}
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-[#B5A16A]/8 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-emerald-900/20 rounded-full blur-[100px] pointer-events-none" />

        {/* ── Prev / Next Arrows ── */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-black/25 backdrop-blur-md items-center justify-center text-white/80 hover:text-white hover:border-[#B5A16A]/70 hover:bg-[#183F32]/70 transition-all duration-300 group"
        >
          <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 bg-black/25 backdrop-blur-md items-center justify-center text-white/80 hover:text-white hover:border-[#B5A16A]/70 hover:bg-[#183F32]/70 transition-all duration-300 group"
        >
          <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>

        {/* ── Main Content ── */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-20 py-28 sm:py-32 lg:py-36 w-full pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 xl:col-span-8">
              {/* Eyebrow Label */}
              <div
                key={`label-${currentSlide}`}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#183F32]/70 border border-[#B5A16A]/40 text-[#F5F2E9] text-[11px] font-bold tracking-[0.18em] uppercase mb-6 backdrop-blur-md animate-fade-in"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5B27D] animate-ping" />
                <span>{active.subtitle}</span>
              </div>

              {/* Headline */}
              <h1
                key={`h1-${currentSlide}`}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08] animate-fade-in delay-100"
              >
                {active.title}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5B27D] via-[#D4C391] to-[#B5A16A]">
                  {active.highlight}
                </span>
              </h1>

              {/* Description */}
              <p
                key={`desc-${currentSlide}`}
                className="mt-5 text-sm sm:text-base lg:text-lg text-slate-300/90 max-w-xl leading-relaxed animate-fade-in delay-200"
              >
                {active.description}
              </p>

              {/* CTA Buttons */}
              <div
                key={`cta-${currentSlide}`}
                className="mt-8 flex flex-wrap items-center gap-4 animate-fade-in delay-300"
              >
                <Link
                  href={active.ctaLink}
                  className="btn-gold px-7 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2.5"
                >
                  <span>{active.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="btn-forest-outline px-7 py-3.5 rounded-xl text-sm font-semibold"
                >
                  Contact Us
                </Link>

                {/* Watch Story */}
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="flex items-center gap-3 text-sm font-semibold text-white/85 hover:text-[#C5B27D] transition-colors group"
                >
                  <div className="relative w-12 h-12 rounded-full animate-pulse-glow">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C5B27D] to-[#B5A16A] opacity-25 blur-sm group-hover:opacity-50 transition-opacity" />
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#C5B27D] to-[#B5A16A] p-0.5">
                      <div className="w-full h-full bg-[#0D2419] rounded-full flex items-center justify-center text-[#C5B27D]">
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <span>Watch Our Story</span>
                </button>
              </div>

              {/* Slide Pagination */}
              <div className="mt-12 flex items-center gap-5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`flex items-center gap-2 text-xs font-bold transition-all duration-300 ${
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
                    className={`bg-gradient-to-br ${card.color} backdrop-blur-xl bg-[#0D2419]/60 border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-xl hover:border-[#B5A16A]/40 hover:bg-[#183F32]/50 transition-all duration-300 cursor-default animate-fade-in-right`}
                    style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#183F32] border border-[#B5A16A]/25 flex items-center justify-center text-[#C5B27D] shrink-0">
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

        {/* ── Scroll Down ── */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5 text-[11px] text-slate-400/80 z-20">
          <span className="uppercase tracking-widest text-[10px]">Scroll Down</span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-500/50 flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-[#C5B27D] rounded-full animate-bounce" />
          </div>
          <ChevronDown className="w-4 h-4 animate-bounce opacity-50" />
        </div>
      </section>

      {/* ── Video Modal ── */}
      {videoModalOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-lg p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0D2419] rounded-3xl overflow-hidden border border-[#B5A16A]/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-sm font-bold text-white">
                PolyHub Agro Engineers — Our Story
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&rel=0"
                title="PolyHub Agro Story"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
