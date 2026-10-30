"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquare, Phone, ArrowUp } from "lucide-react";
import { COMPANY_INFO } from "@/data/polyhubData";

export default function MobileStickyBar() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-20 sm:bottom-6 right-5 z-40 p-3 rounded-full bg-[#0A1128]/90 text-white shadow-xl hover:bg-[#0056B3] transition-all hover:scale-105 active:scale-95 border border-[#B5A16A]/30"
        >
          <ArrowUp className="w-5 h-5 text-[#1a7a4a]" />
        </button>
      )}

      {/* Floating WhatsApp on Desktop */}
      <div className="hidden sm:block fixed bottom-6 left-6 z-40">
        <a
          href={`https://wa.me/${COMPANY_INFO.contacts.whatsapp}?text=Hello%20PHAE Global%20Agro%20Engineers,%20I%20would%20like%20to%20know%20more%20about%20polyhouse%20installation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-2xl transition-transform hover:scale-105 active:scale-95 border border-white/20"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      {/* Bottom Sticky Action Bar exclusively for iOS, Android, and mobile phones */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A1128]/95 backdrop-blur-lg border-t border-[#B5A16A]/30 px-4 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(0,0,0,0.15)] flex items-center justify-between gap-3">
        <a
          href={`tel:${COMPANY_INFO.contacts.phone}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/10 text-white font-bold text-xs active:bg-white/20 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#1a7a4a]" />
          <span>Call Us</span>
        </a>

        <a
          href={`https://wa.me/${COMPANY_INFO.contacts.whatsapp}?text=Hello%20PHAE Global%20Agro%20Engineers,%20I%20would%20like%20to%20know%20more%20about%20polyhouse%20installation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-700 text-white font-bold text-xs active:bg-emerald-800 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#1a7a4a] text-[#0A1128] font-bold text-xs active:bg-[#B5A16A] transition-colors"
        >
          <span>Quote</span>
        </Link>
      </div>
    </>
  );
}

