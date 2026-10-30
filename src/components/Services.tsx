import React from "react";
import Link from "next/link";
import { ArrowRight, Wrench, ShieldCheck, Clock, Award, Hammer, Headphones } from "lucide-react";
import { SERVICES_LIST } from "@/data/polyhubData";

const whyChooseItems = [
  { icon: Award, title: "Expert Team", desc: "Qualified Agri-Engineers with 10+ yrs field expertise" },
  { icon: ShieldCheck, title: "Quality Materials", desc: "IS 1239 / IS 1161 Hot-Dip Galvanized GI pipes" },
  { icon: Clock, title: "On-time Delivery", desc: "Strict turnkey milestones & project execution" },
  { icon: Headphones, title: "After-Sales Support", desc: "Maintenance, agronomy guidance & warranty" },
];

export default function Services() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">OUR SERVICES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1128] tracking-tight mt-4">
            End-to-End Support for Your Farming Success
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Professional civil construction, greenhouse maintenance, and custom agronomic design tailored to your land, microclimate, and business goals.
          </p>
        </div>

        {/* 3 Main Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, idx) => (
            <div
              key={service.id}
              className="premium-agro-card flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-[#B5A16A] text-[#0A1128] text-[10px] font-black uppercase px-2.5 py-1 rounded-full">
                      Service 0{idx + 1}
                    </span>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold text-[#0A1128] group-hover:text-[#004B87] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              <div className="p-7 pt-0 border-t border-slate-100 mt-2">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#004B87] group-hover:text-[#B5A16A] transition-colors py-2"
                >
                  <span>Learn More & Scope Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Our Services Strip */}
        <div className="mt-20 bg-gradient-to-br from-[#0A1128] via-[#14372D] to-[#004B87] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-[#B5A16A]/30 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#B5A16A]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C5B27D]">
              UNCOMPROMISING QUALITY
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-2 text-white">
              Why Choose Our Services?
            </h3>
            <div className="w-12 h-0.5 bg-[#B5A16A] mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {whyChooseItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#B5A16A]/40 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#004B87] border border-[#B5A16A]/30 flex items-center justify-center text-[#C5B27D] mx-auto mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-wide">{item.title}</h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
