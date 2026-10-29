import React from "react";
import Link from "next/link";
import { Sprout, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO, PRODUCTS_LIST, SERVICES_LIST } from "@/data/polyhubData";

export default function Footer() {
  return (
    <footer className="bg-[#102C24] text-slate-300 pt-16 pb-12 border-t border-[#B5A16A]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#183F32] to-[#B5A16A] flex items-center justify-center text-white shadow-md">
                <Sprout className="w-5 h-5 text-[#F5F2E9]" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight flex items-center">
                  Poly<span className="text-[#C5B27D]">Hub</span>
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#A6B5A0] -mt-1">
                  Agro Engineers
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Established in {COMPANY_INFO.established}, PolyHub Agro Engineers is committed to advancing Indian agriculture through state-of-the-art greenhouse fabrication, climate-controlled farming setups, and government subsidy consultancy.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="text-[11px] text-[#A6B5A0] font-semibold">Connect with our engineers</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 text-[#C5B27D]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products Catalogue</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/economics" className="hover:text-white transition-colors">Crop Economics</Link></li>
              <li><Link href="/subsidy" className="hover:text-white transition-colors">Government Subsidies</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Project Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact & Inquiries</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 text-[#C5B27D]">
              Structures
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {PRODUCTS_LIST.map((p) => (
                <li key={p.id}>
                  <Link href={`/products/${p.slug}`} className="hover:text-white transition-colors line-clamp-1">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 text-[#C5B27D]">
              Contact Details
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B5A16A] shrink-0 mt-0.5" />
                <span><strong>Corporate Office:</strong> {COMPANY_INFO.contacts.corporateOffice}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B5A16A] shrink-0 mt-0.5" />
                <span><strong>Sales Office:</strong> {COMPANY_INFO.contacts.salesOffice}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B5A16A] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contacts.email}`} className="hover:text-white">
                  {COMPANY_INFO.contacts.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#B5A16A] shrink-0" />
                <a href={`tel:${COMPANY_INFO.contacts.phone}`} className="hover:text-white font-semibold">
                  {COMPANY_INFO.contacts.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>© 2026 PolyHub Agro Engineers. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>IS 1239 / IS 1161 Galvanized Standards</span>
            <span>•</span>
            <span>NHB / MIDH Technical Compliance</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
