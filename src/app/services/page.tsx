import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench, Hammer, DraftingCompass, Clock, Award } from "lucide-react";
import { SERVICES_LIST } from "@/data/polyhubData";

export const metadata: Metadata = {
  title: "Services | PHAE Global",
  description: "End-to-end greenhouse construction, installation, maintenance, repair, and custom polyhouse structural engineering across India.",
};

const serviceIcons: Record<string, any> = {
  "construction-and-installation": Hammer,
  "maintenance-and-support": Wrench,
  "custom-polyhouse-design": DraftingCompass,
};

export default function ServicesPage() {
  return (
    <div className="bg-[#F0F4F8] min-h-screen">
      <PageBanner
        title="Our Services"
        subtitle="End-to-End Engineering Support for Commercial Cultivation"
        breadcrumbItems={[{ label: "Services" }]}
        backgroundImage="https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-06-at-10.24.04_9cb01ebd-1.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Intro */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#004B87] bg-[#90A4AE]/20 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" /> Turnkey Agri-Engineering Execution
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0A1128] mt-3">
            From Blueprint Design to Successful Commercial Harvest
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            At PHAE Global, we pride ourselves on delivering top-tier engineering, civil fabrication, and lifecycle support for greenhouse and polyhouse structures. Explore our 3 specialized service pillars below.
          </p>
        </div>

        {/* 3 Main Services Detailed Cards - Strictly Aligned & Equal Height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SERVICES_LIST.map((service) => {
            const IconComponent = serviceIcons[service.id] || Hammer;
            return (
              <div
                key={service.id}
                className="premium-agro-card overflow-hidden flex flex-col justify-between group h-full"
              >
                <div className="flex-1 flex flex-col">
                  <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
                    <div className="absolute top-3 left-3 bg-[#004B87] text-white p-2.5 rounded-2xl shadow-md flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-[#B5A16A]" />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#0A1128] group-hover:text-[#0056B3] transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed min-h-[4rem] line-clamp-3">
                        {service.shortDescription}
                      </p>
                    </div>

                    <div className="mt-5 space-y-2.5 pt-4 border-t border-slate-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#004B87] block">
                        Key Service Deliverables:
                      </span>
                      {service.deliverables.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B5A16A] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item.split(':')[0]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <Link
                    href={`/services/${service.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#0056B3] text-[#004B87] hover:bg-[#0056B3] hover:text-white font-bold text-xs transition-all shadow-sm group-hover:shadow"
                  >
                    <span>Explore Full Process & Scope</span>
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Our Services Banner */}
        <div className="mt-20 bg-[#0A1128] rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-[#B5A16A]/20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B5A16A] bg-[#B5A16A]/10 px-3 py-1 rounded-full">
              PHAE Global Engineering Assurance
            </span>
            <h3 className="text-xl sm:text-3xl font-black mt-3 text-white">
              Why Growers Nationwide Trust PHAE Global
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every project is backed by structural safety certifications conforming to Indian Standards (IS), genuine hot-dip galvanized steel components, and end-to-end subsidy liaison support with State Horticulture Departments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <ShieldCheck className="w-8 h-8 text-[#B5A16A] mx-auto mb-3" />
              <h4 className="font-bold text-sm text-white">Certified Materials</h4>
              <p className="text-xs text-slate-300 mt-1">IS 1239 / IS 1161 compliant GI tubular frames and multi-layer UV film.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <Clock className="w-8 h-8 text-[#B5A16A] mx-auto mb-3" />
              <h4 className="font-bold text-sm text-white">Timely Execution</h4>
              <p className="text-xs text-slate-300 mt-1">Strict adherence to milestones ensuring crops can be planted on schedule.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
              <Award className="w-8 h-8 text-[#B5A16A] mx-auto mb-3" />
              <h4 className="font-bold text-sm text-white">Subsidy Guarantee</h4>
              <p className="text-xs text-slate-300 mt-1">Bankable DPR formulation guaranteeing maximum 50% NHB/MIDH eligibility.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
