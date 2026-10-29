"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, X, Award, Users, MapPin } from "lucide-react";
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

export default function About() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #183F32 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Content ── */}
          <div className="space-y-7">
            <div>
              <span className="section-label">WHO WE ARE</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#102C24] tracking-tight leading-tight mt-4">
                PolyHub Agro<br />
                <span className="text-[#183F32]">Engineers</span>
              </h2>
              <div className="section-divider mt-4" />
            </div>

            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              We are a leading provider of modern agricultural infrastructure solutions, specializing in polyhouse, greenhouse, and shade net structures. With {COMPANY_INFO.established} foundation and 10+ years of experience, we are committed to helping farmers achieve higher productivity and sustainable growth.
            </p>

            {/* 3 Principles */}
            <div className="space-y-4 pt-1">
              {principles.map((p, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#183F32] text-white text-[11px] font-black flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#102C24]">{p.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 3 Stats */}
            <div className="grid grid-cols-3 gap-4 pt-3">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="bg-[#F5F2E9] rounded-2xl p-4 text-center border border-slate-200/80 hover:border-[#B5A16A]/40 hover:shadow-md transition-all">
                    <Icon className="w-5 h-5 text-[#B5A16A] mx-auto mb-2" />
                    <div className="text-2xl font-black text-[#183F32]">{stat.value}</div>
                    <div className="text-[11px] font-semibold text-slate-500 mt-0.5 leading-tight">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/about"
              className="btn-gold inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ── Right: Image with Play Button ── */}
          <div className="relative">
            {/* Main image */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={() => setVideoOpen(true)}
            >
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80"
                alt="PolyHub Agro Farm Construction"
                className="w-full h-80 sm:h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102C24]/85 via-[#102C24]/20 to-transparent" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-18 h-18 relative">
                  <div className="absolute inset-0 rounded-full bg-[#C5B27D]/30 animate-ping" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#C5B27D] to-[#B5A16A] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-7 h-7 fill-current text-[#102C24] ml-1" />
                  </div>
                </div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <span className="font-black italic text-2xl text-[#C5B27D] font-serif">Sustainable Farming</span>
                  <p className="text-xs text-slate-300 mt-0.5">Patiala, Punjab & Pune, Maharashtra Operations</p>
                </div>
              </div>
            </div>

            {/* Floating badge card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-2xl border border-[#B5A16A]/20 p-4 flex items-center gap-3 w-52">
              <div className="w-10 h-10 rounded-xl bg-[#183F32] flex items-center justify-center text-[#C5B27D] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-black text-[#102C24]">NHB / MIDH</div>
                <div className="text-[11px] text-slate-500 leading-tight">Government Certified Structures</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0D2419] rounded-3xl overflow-hidden border border-[#B5A16A]/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-sm font-bold text-white">PolyHub Agro Engineers — Farm Tour</span>
              <button
                onClick={() => setVideoOpen(false)}
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
    </section>
  );
}
