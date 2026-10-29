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
    ? "bg-[#102C24]/95 backdrop-blur-2xl shadow-2xl py-2.5 sm:py-3 border-none" 
    : "bg-[#102C24]/85 backdrop-blur-xl shadow-lg py-3 sm:py-4 border-none";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-none ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Official Website Emblem */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-white p-1 shadow-md flex items-center justify-center border-none group-hover:scale-105 transition-transform shrink-0">
            <img
              src="https://polyhubagro.com/wp-content/uploads/2024/06/cropped-Poly-Hub-Agro-Engineers-Logo_Final-1.png"
              alt="Poly Hub Agro Engineers Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center">
              Poly<span className="text-[#C5B27D]">Hub</span>
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#A6B5A0] -mt-1">
              Agro Engineers
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
                  className={`flex items-center gap-1 py-2 transition-colors relative ${
                    isActive ? "text-[#C5B27D] font-bold" : "hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5B27D] rounded-full" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && item.subItems && (
                  <div className="absolute top-full left-0 w-72 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <div className="bg-[#102C24]/95 backdrop-blur-xl border border-[#B5A16A]/30 rounded-2xl p-2 shadow-2xl">
                      <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-[#B5A16A] border-b border-white/10 mb-1 flex items-center justify-between">
                        <span>Explore {item.name}</span>
                        <Sparkles className="w-3 h-3 text-[#B5A16A]" />
                      </div>
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="flex items-center justify-between px-3 py-2 text-xs text-slate-200 hover:text-white hover:bg-[#183F32]/80 rounded-lg transition-colors"
                        >
                          <span className="line-clamp-1">{sub.name}</span>
                          {sub.badge && (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#B5A16A]/20 text-[#C5B27D] font-bold shrink-0 ml-2">
                              {sub.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                      <div className="mt-1 pt-1 border-t border-white/10">
                        <Link
                          href={item.href}
                          className="block text-center px-3 py-1.5 text-[11px] font-bold text-[#C5B27D] hover:underline"
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

        {/* Right CTA Button & Phone */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${COMPANY_INFO.contacts.phone}`}
            className="flex items-center gap-1.5 text-xs text-white/90 hover:text-[#C5B27D] font-semibold transition-colors px-2 py-1"
          >
            <Phone className="w-3.5 h-3.5 text-[#B5A16A]" />
            <span>{COMPANY_INFO.contacts.phoneDisplay}</span>
          </a>

          <Link
            href="/contact"
            className="btn-gold py-2.5 px-4 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
          >
            <span>Get Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={`tel:${COMPANY_INFO.contacts.phone}`}
            className="p-2 rounded-xl bg-white/10 text-[#C5B27D] border border-white/10"
            aria-label="Call PolyHub"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/10 text-white border border-white/10 hover:bg-white/20 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[68px] bottom-0 bg-[#102C24]/98 backdrop-blur-2xl border-t border-white/10 overflow-y-auto px-5 py-6 pb-24 space-y-4 animate-fadeIn z-50">
          
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
                      className={`text-base font-semibold py-2.5 flex-1 transition-colors ${
                        isActive ? "text-[#C5B27D]" : "text-white hover:text-[#C5B27D]"
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
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isSubOpen ? "rotate-180 text-[#C5B27D]" : ""}`} />
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
              <span className="text-[11px] font-bold text-[#B5A16A] uppercase tracking-wider block">
                Direct Helpline
              </span>
              <a
                href={`tel:${COMPANY_INFO.contacts.phone}`}
                className="text-sm font-bold text-white flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#B5A16A]" />
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
