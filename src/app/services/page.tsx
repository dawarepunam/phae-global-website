import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES_LIST } from "@/data/polyhubData";

export const metadata: Metadata = {
  title: "Services | PolyHub Agro Engineers",
  description: "End-to-end greenhouse construction, installation, maintenance, repair, and custom polyhouse structural engineering across India.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#F5F2E9] min-h-screen">
      <PageBanner
        title="Our Services"
        subtitle="End-to-End Support for Your Farming Success"
        breadcrumbItems={[{ label: "Services" }]}
        backgroundImage="https://images.unsplash.com/photo-1592417817098-8f3d69104a49?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Intro */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#183F32] bg-[#A6B5A0]/20 px-3 py-1 rounded-full">
            Turnkey Engineering Execution
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#102C24] mt-3">
            From Blueprint Design to Successful Harvest
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Our certified structural engineers and agronomists work closely with you through site assessment, blueprint drafting, foundation grouting, and post-harvest maintenance.
          </p>
        </div>

        {/* 3 Main Services Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="premium-agro-card overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#102C24] group-hover:text-[#183F32] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#183F32] block">
                      Scope Deliverables:
                    </span>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#183F32] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/services/${service.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#183F32] text-[#183F32] hover:bg-[#183F32] hover:text-white font-bold text-xs transition-all"
                >
                  <span>Explore Full Process & Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Our Services Banner */}
        <div className="mt-20 bg-[#102C24] rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-[#B5A16A]/20">
          <h3 className="text-xl sm:text-3xl font-black text-center mb-8 text-[#C5B27D]">
            Why Choose PolyHub Engineering?
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-base font-bold text-white">Expert Team</h4>
              <p className="text-xs text-slate-300 mt-1">Certified Agricultural Structural Engineers</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-base font-bold text-white">Quality Materials</h4>
              <p className="text-xs text-slate-300 mt-1">275-350 GSM Galvanized GI Steel Members</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-base font-bold text-white">On-time Delivery</h4>
              <p className="text-xs text-slate-300 mt-1">Guaranteed Turnkey Milestone Scheduling</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-base font-bold text-white">After-Sales Support</h4>
              <p className="text-xs text-slate-300 mt-1">Annual Maintenance & Storm Damage Assistance</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

