"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { COMPANY_INFO, PRODUCTS_LIST, SERVICES_LIST } from "@/data/polyhubData";

interface SubNavItem {
  name: string;
  href: string;
  badge?: string;
}

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  subItems?: SubNavItem[];
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  }, [pathname]);

  // Prevent body scrolling when mobile menu is open on iPhone and Android
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Products",
      href: "/products",
      hasDropdown: true,
      subItems: PRODUCTS_LIST.map((p) => ({
        name: p.title,
        href: `/products/${p.slug}`,
        badge: p.badge
      }))
    },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      subItems: SERVICES_LIST.map((s) => ({
        name: s.title,
        href: `/services/${s.slug}`
      }))
    },
    { name: "Economics", href: "/economics" },
    { name: "Subsidy", href: "/subsidy" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  // Identical borderless transparent-to-frosted dark glass styling across all pages
  const headerBgClass = scrolled
    ? "bg-[#0A1128]/95 backdrop-blur-2xl shadow-2xl py-2.5 sm:py-3 border-none"
    : "bg-[#0A1128]/85 backdrop-blur-xl shadow-lg py-3 sm:py-4 border-none";

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-none ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand Logo: PHAE Global */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white p-1 shadow-md flex items-center justify-center border border-white/20 group-hover:scale-105 transition-transform shrink-0 overflow-hidden">
            <img
              src="/phae-global-logo.png"
              alt="PHAE Global Business Private Limited"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center">
              PHAE <span className="text-[#1a7a4a] ml-1">Global</span>
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-[0.12em] text-[#90A4AE] -mt-0.5">
              Business Pvt Ltd
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13px] font-medium text-slate-200">
          {navLinks.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 py-2 transition-colors relative ${isActive ? "text-[#1a7a4a] font-bold" : "hover:text-white"
                    }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1a7a4a] rounded-full" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && item.subItems && (
                  <div className="absolute top-full left-0 w-72 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <div className="bg-[#0A1128]/95 backdrop-blur-xl border border-[#1a7a4a]/30 rounded-2xl p-2 shadow-2xl">
                      <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-[#1a7a4a] border-b border-white/10 mb-1 flex items-center justify-between">
                        <span>Explore {item.name}</span>
                        <Sparkles className="w-3 h-3 text-[#1a7a4a]" />
                      </div>
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="flex items-center justify-between px-3 py-2 text-xs text-slate-200 hover:text-white hover:bg-[#0056B3]/80 rounded-lg transition-colors"
                        >
                          <span className="line-clamp-1">{sub.name}</span>
                          {sub.badge && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#1a7a4a]/20 text-[#1a7a4a] font-bold shrink-0 ml-2">
                              {sub.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                      <div className="mt-1 pt-1 border-t border-white/10">
                        <Link
                          href={item.href}
                          className="block text-center px-3 py-1.5 text-[11px] font-bold text-[#1a7a4a] hover:underline"
                        >
                          View All {item.name} →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right CTA Button (Clean without phone number) */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="btn-gold py-2.5 px-5 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button (Clean without phone icon) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu - Fullscreen Solid Modal Above Everything */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 w-screen h-[100dvh] bg-[#0A1128] overflow-y-auto px-5 pt-20 pb-28 space-y-4 animate-fadeIn z-[9999] shadow-2xl">

          {/* Top Header inside fullscreen menu with Logo and Close button */}
          <div className="fixed top-0 left-0 right-0 h-16 bg-[#0A1128] border-b border-white/10 px-5 flex items-center justify-between z-[10000]">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center border border-white/20 shrink-0 overflow-hidden">
                <img
                  src="/phae-global-logo.png"
                  alt="PHAE Global Business Private Limited"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg text-white leading-tight">
                  PHAE <span className="text-[#1a7a4a]">Global</span>
                </span>
                <span className="text-[8px] uppercase font-bold tracking-wider text-[#90A4AE]">
                  Business Pvt Ltd
                </span>
              </div>
            </Link>
            <div className="flex items-center">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-white/15 text-white border border-white/20 hover:bg-white/25"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-1">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              const isSubOpen = mobileSubmenu === item.name;

              return (
                <div key={item.name} className="border-b border-white/5 py-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                      className={`text-base font-semibold py-2.5 flex-1 transition-colors ${isActive ? "text-[#1a7a4a]" : "text-white hover:text-[#1a7a4a]"
                        }`}
                    >
                      {item.name}
                    </Link>

                    {item.hasDropdown && (
                      <button
                        onClick={() => setMobileSubmenu(isSubOpen ? null : item.name)}
                        className="p-2 text-slate-300 hover:text-white"
                        aria-label={`Toggle ${item.name} Submenu`}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSubOpen ? "rotate-180 text-[#1a7a4a]" : ""}`} />
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown Submenu */}
                  {item.hasDropdown && isSubOpen && item.subItems && (
                    <div className="pl-3 pb-2 space-y-1.5 pt-1">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 px-3 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Helpline Box in Mobile Menu */}
          <div className="pt-4 space-y-3">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-[11px] font-bold text-[#1a7a4a] uppercase tracking-wider block">
                Direct Helpline
              </span>
              <a
                href={`tel:${COMPANY_INFO.contacts.phone}`}
                className="text-sm font-bold text-white flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#1a7a4a]" />
                <span>{COMPANY_INFO.contacts.phoneDisplay}</span>
              </a>
              <p className="text-[11px] text-slate-300">
                Talk to certified agricultural civil engineers for site surveys & DPR.
              </p>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold w-full text-center py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Request Free Project Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}

