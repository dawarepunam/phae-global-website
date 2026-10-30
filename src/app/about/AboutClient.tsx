"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Pause,
  X,
  ChevronLeft,
  ChevronRight,
  Sprout,
  Sparkles,
  Droplets,
  Activity,
  Target,
  ShieldCheck,
  Users2,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/polyhubData";

// Who We Are — Cinematic Image Reel Scenes (real polyhub CDN images)
const whoWeAreScenes = [
  {
    title: "Naturally Ventilated Polyhouse Engineering",
    category: "Structural Fabrication",
    image: "https://polyhubagro.com/wp-content/uploads/2020/04/WhatsApp-Image-2024-07-30-at-12.30.39-PM-1024x768.jpeg",
    description: "IS 1239 / 1161 compliant galvanized tubular steel framework with natural aerodynamic roof ventilation.",
  },
  {
    title: "Turnkey Field Installation & Farmer Handover",
    category: "On-Site Execution",
    image: "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-06-at-10.24.04_9cb01ebd-1.jpg",
    description: "Complete civil anchor grouting, motorized side winches, and automated drip fertigation commissioning.",
  },
  {
    title: "Multi-Dome Shade Net Architecture",
    category: "Microclimate Shading",
    image: "https://polyhubagro.com/wp-content/uploads/2024/08/Multi-dome-shade-net-1-1024x768.jpg",
    description: "Curved aerodynamic dome roofs offering 35%–75% UV-stabilized protection for high-value floriculture.",
  },
  {
    title: "Commercial Dutch Rose Floriculture Setup",
    category: "High-Value Yield",
    image: "https://polyhubagro.com/wp-content/uploads/2024/07/dutch-rose-1024x576.jpg",
    description: "High-density planting producing 6,00,000+ export quality cut stems annually with top misting.",
  },
  {
    title: "Climate-Controlled Fan & Pad Greenhouse",
    category: "Precision Agri-Tech",
    image: "https://polyhubagro.com/wp-content/uploads/2020/04/Fan-and-pad-1-1024x576.jpg",
    description: "Cellulose cooling pads and high-CFM exhaust fans maintaining optimum temperature regardless of 45°C heat.",
  },
  {
    title: "Hydroponic Commercial Greenhouse",
    category: "Soil-Free Agriculture",
    image: "https://polyhubagro.com/wp-content/uploads/2024/08/Hydroponic-Green-House-1-1024x576.jpg",
    description: "Nutrient film technique (NFT) channels and media-bed systems for ultra-high density crop production.",
  },
];

export default function AboutClient() {
  const [reelOpen, setReelOpen] = useState(false);
  const [reelIndex, setReelIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [whoIndex, setWhoIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-rotate WHO WE ARE background image
  useEffect(() => {
    const timer = setInterval(() => {
      setWhoIndex((prev) => (prev + 1) % whoWeAreScenes.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  // Reel auto-play
  useEffect(() => {
    if (!reelOpen || !isPlaying) return;
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) return 0;
        return p + 100 / (4500 / 80);
      });
    }, 80);
    const sceneInterval = setInterval(() => {
      setReelIndex((prev) => (prev + 1) % whoWeAreScenes.length);
      setProgress(0);
    }, 4500);
    return () => {
      clearInterval(progressInterval);
      clearInterval(sceneInterval);
    };
  }, [reelOpen, isPlaying, reelIndex]);

  // ESC to close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setReelOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const prevScene = (e: React.MouseEvent) => {
    e.stopPropagation();
    setReelIndex((prev) => (prev - 1 + whoWeAreScenes.length) % whoWeAreScenes.length);
    setProgress(0);
  };
  const nextScene = (e: React.MouseEvent) => {
    e.stopPropagation();
    setReelIndex((prev) => (prev + 1) % whoWeAreScenes.length);
    setProgress(0);
  };

  const currentScene = whoWeAreScenes[whoIndex];
  const reelScene = whoWeAreScenes[reelIndex];

  return (
    <div className="bg-[#F0F4F8] min-h-screen">

      {/* ══════════════════════════════════════════════
          SECTION 1 — WHO WE ARE  (Cinematic Reel)
      ══════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── Left: Text Content ── */}
          <div className="space-y-6 order-2 lg:order-1">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#0056B3] bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
              <Sprout className="w-3.5 h-3.5 shrink-0 text-[#0056B3]" />
              WHO WE ARE — PIONEERING SUSTAINABLE AGRICULTURE
            </span>

            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-[#0A1128] tracking-tight leading-tight">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0056B3] to-[#38BDF8]">
                PHAE Global
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              At PHAE Global, we stand at the forefront of agricultural innovation, driven by our commitment to sustainability and technological advancement. Our journey began in{" "}
              <strong className="text-[#0A1128]">{COMPANY_INFO.established}</strong>, with a vision to revolutionize farming practices worldwide.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              With major operational hubs in <strong>Patiala (Punjab)</strong> and{" "}
              <strong>Pune (Maharashtra)</strong>, we engineer, fabricate, and deliver turnkey protected structures conforming to Bureau of Indian Standards (BIS) and National Horticulture Board (NHB) specifications.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { val: "10+", label: "Years Experience" },
                { val: "300+", label: "Projects Completed" },
                { val: "9M+", label: "Sq. Mtrs Built" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="p-3 sm:p-4 rounded-2xl bg-white border border-[#0056B3]/10 shadow-sm text-center"
                >
                  <div className="text-xl sm:text-2xl font-black text-[#004B87]">{m.val}</div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-600 mt-1">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="btn-gold inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <button
                onClick={() => { setReelOpen(true); setReelIndex(0); setProgress(0); setIsPlaying(true); }}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl border-2 border-[#0056B3] text-[#004B87] text-xs sm:text-sm font-bold hover:bg-[#0056B3] hover:text-white transition-all"
              >
                <Play className="w-4 h-4 shrink-0 fill-current" />
                <span>Watch Project Reel</span>
              </button>
            </div>
          </div>

          {/* ── Right: Cinematic Auto-Rotating Image Reel Panel ── */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
              {/* Background images — cross-fade */}
              {whoWeAreScenes.map((scene, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    i === whoIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-[1.04] pointer-events-none"
                  }`}
                >
                  <img
                    src={scene.image}
                    alt={scene.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/90 via-black/20 to-transparent" />
                </div>
              ))}

              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                <span className="text-[10px] sm:text-xs uppercase font-bold text-[#C5B27D] tracking-wider block mb-1">
                  {currentScene.category}
                </span>
                <h3 className="font-bold text-base sm:text-xl text-white leading-tight">
                  {currentScene.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-300 mt-1 leading-relaxed line-clamp-2">
                  {currentScene.description}
                </p>
              </div>

              {/* Scene dots */}
              <div className="absolute top-4 left-0 right-0 flex justify-center gap-1.5 z-10">
                {whoWeAreScenes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setWhoIndex(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === whoIndex
                        ? "w-5 h-1.5 bg-[#C5B27D]"
                        : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              {/* Play button overlay */}
              <button
                onClick={() => { setReelOpen(true); setReelIndex(whoIndex); setProgress(0); setIsPlaying(true); }}
                className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 border-2 border-white/60 backdrop-blur-md flex items-center justify-center shadow-xl">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white ml-1" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2 — INNOVATIVE SOLUTIONS
      ══════════════════════════════════════════════ */}
      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="max-w-3xl mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004B87] bg-[#90A4AE]/20 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> CORE INNOVATION &amp; ENGINEERING
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0A1128] mt-3 leading-tight">
              Innovative Solutions for Modern Agriculture
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              At the heart of PHAE Global's offerings are our state-of-the-art products and engineering services designed to meet the evolving needs of commercial horticulture and precision farming.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Droplets,
                title: "Smart Irrigation Systems",
                desc: "Precision watering solutions and closed-loop fertigation manifolds that maximize water efficiency and minimize nutrient waste.",
              },
              {
                icon: Target,
                title: "Precision Farming Tools",
                desc: "Advanced structural technologies and aerodynamic airflow geometries for precise crop microclimate management, optimizing inputs for maximum harvest.",
              },
              {
                icon: Activity,
                title: "Environmental Monitoring",
                desc: "Real-time monitoring of temperature, relative humidity, and solar radiation, enabling proactive protected cultivation strategies.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#F0F4F8] p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#004B87]/10 flex items-center justify-center text-[#004B87] mb-5 shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0A1128]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 3 — LEADERSHIP SPOTLIGHT
      ══════════════════════════════════════════════ */}
      <section className="bg-[#0A1128]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B5A16A] bg-[#B5A16A]/10 px-3 py-1 rounded-full">
              Leadership &amp; Driving Vision
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-3 text-white">
              Pioneers Behind PHAE Global
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Guided by experienced technocrats committed to transforming commercial agriculture across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Randeep Singh",
                role: "Founder & Managing Partner",
                bio: "Steering structural engineering, pan-India commercial expansion, and technical execution.",
                img: "https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-02-at-5.55.18-PM-5-1-370x370.png",
              },
              {
                name: "Arvind Kumar Yadav",
                role: "Co-Founder & Agronomy Director",
                bio: "Overseeing protected cultivation agronomy, crop economics, and client success frameworks.",
                img: "https://polyhubagro.com/wp-content/uploads/2024/07/Group-1696-370x370.png",
              },
            ].map((leader) => (
              <div
                key={leader.name}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 sm:gap-5"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-white/10 shrink-0 border-2 border-[#B5A16A]/60 shadow-md">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">{leader.name}</h4>
                  <p className="text-xs text-[#B5A16A] font-semibold">{leader.role}</p>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 4 — MISSION & CUSTOMER APPROACH
      ══════════════════════════════════════════════ */}
      <section className="bg-[#F0F4F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                badge: "Customer-Centric Approach",
                title: "Tailored Solutions for Real Farm Success",
                body: "PHAE Global is committed to the success of our customers. We collaborate closely with farmers, understanding their unique challenges and tailoring engineering solutions that address their specific regional and crop requirements.",
                footer: "Dedicated On-Site Farmer Support & Training",
                FooterIcon: Users2,
              },
              {
                badge: "Our Mission & Values",
                title: "Integrity, Innovation & Stewardship",
                body: "Our mission is clear: to empower farmers with cutting-edge solutions that enhance productivity while preserving the environment. We believe in harnessing technology to optimize crop yields and promote sustainable practices that safeguard our planet for future generations.",
                footer: "Full Compliance with Central & State Horticulture Missions",
                FooterIcon: ShieldCheck,
              },
            ].map((card) => (
              <div
                key={card.badge}
                className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#004B87] bg-[#90A4AE]/20 px-3 py-1 rounded-full">
                    {card.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0A1128] mt-3">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">{card.body}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#004B87]">
                  <card.FooterIcon className="w-4 h-4 text-[#B5A16A] shrink-0" />
                  <span>{card.footer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CINEMATIC REEL MODAL (Fullscreen)
      ══════════════════════════════════════════════ */}
      {reelOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6"
          onClick={() => setReelOpen(false)}
        >
          {/* Modal Box */}
          <div
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Scene Image */}
            <div className="relative aspect-video sm:aspect-[16/9] bg-black">
              {whoWeAreScenes.map((scene, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    i === reelIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={scene.image}
                    alt={scene.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
              ))}

              {/* Progress Bar */}
              <div className="absolute top-0 left-0 right-0 flex gap-1 p-2 z-20">
                {whoWeAreScenes.map((_, i) => (
                  <div key={i} className="flex-1 h-0.5 bg-white/25 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-75 ${
                        i < reelIndex
                          ? "w-full bg-[#C5B27D]"
                          : i === reelIndex
                          ? "bg-[#C5B27D]"
                          : "w-0 bg-[#C5B27D]"
                      }`}
                      style={
                        i === reelIndex
                          ? { width: `${progress}%` }
                          : undefined
                      }
                    />
                  </div>
                ))}
              </div>

              {/* Close */}
              <button
                onClick={() => setReelOpen(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Left Arrow */}
              <button
                onClick={prevScene}
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextScene}
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Scene Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="text-[10px] sm:text-xs uppercase font-bold text-[#C5B27D] tracking-widest">
                      {reelScene.category}
                    </span>
                    <h3 className="text-base sm:text-xl font-bold text-white mt-0.5 leading-tight">
                      {reelScene.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 max-w-xl leading-relaxed hidden sm:block">
                      {reelScene.description}
                    </p>
                  </div>

                  {/* Play/Pause */}
                  <button
                    onClick={() => setIsPlaying((p) => !p)}
                    className="w-10 h-10 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-white hover:bg-white/25 transition shrink-0"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-white" />
                    ) : (
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    )}
                  </button>
                </div>

                {/* Chapter Dots */}
                <div className="flex gap-1.5 mt-3">
                  {whoWeAreScenes.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setReelIndex(i); setProgress(0); }}
                      className={`rounded-full transition-all duration-300 ${
                        i === reelIndex
                          ? "w-5 h-1.5 bg-[#C5B27D]"
                          : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

