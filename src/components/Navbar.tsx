"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles,
  Sprout
} from "lucide-react";
import { PRODUCTS_LIST, SERVICES_LIST } from "@/data/polyhubData";

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
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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

  const headerBgClass = isHomePage
    ? (scrolled ? "header-scrolled py-3" : "header-transparent py-5")
    : "header-scrolled py-3";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo - clean without outer border */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#183F32] to-[#B5A16A] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <Sprout className="w-5 h-5 text-[#F5F2E9]" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-white flex items-center">
              Poly<span className="text-[#C5B27D]">Hub</span>
            </span>
            <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-[#A6B5A0] -mt-1">
              Agro Engineers
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[13px] font-medium text-slate-200">
          {navLinks.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 py-2 transition-colors relative ${
                    isActive ? "text-[#C5B27D] font-bold" : "hover:text-[#F5F2E9]"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.hasDropdown && item.subItems && (
                  <div className="absolute top-full left-0 w-72 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    <div className="bg-[#102C24]/95 backdrop-blur-xl border border-[#B5A16A]/30 rounded-2xl p-2 shadow-2xl">
                      <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-widest text-[#B5A16A] border-b border-white/10 mb-1">
                        Explore {item.name}
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

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/contact"
            className="btn-gold px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Request a Consultation</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/contact"
            className="btn-gold px-3 py-1.5 rounded-lg text-xs font-bold sm:hidden"
          >
            Consultation
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10"
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#102C24]/98 backdrop-blur-2xl border-b border-[#B5A16A]/30 px-6 py-6 space-y-3 shadow-2xl animate-fade-in max-h-[85vh] overflow-y-auto">
          {navLinks.map((item) => (
            <div key={item.name} className="border-b border-white/5 pb-2">
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm font-semibold text-slate-200 hover:text-[#C5B27D]"
              >
                {item.name}
              </Link>
              {item.hasDropdown && item.subItems && (
                <div className="pl-3 mt-1 space-y-1">
                  {item.subItems.slice(0, 4).map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-xs text-[#A6B5A0] hover:text-white"
                    >
                      • {sub.name}
                    </Link>
                  ))}
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-xs text-[#C5B27D] font-bold"
                  >
                    View All {item.name} →
                  </Link>
                </div>
              )}
            </div>
          ))}

          <div className="pt-3 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold text-center py-3 rounded-xl text-xs font-bold"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
