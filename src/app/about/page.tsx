import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Award, ArrowRight, Play } from "lucide-react";
import { COMPANY_INFO } from "@/data/polyhubData";

export const metadata: Metadata = {
  title: "About Us | PolyHub Agro Engineers",
  description: "Learn about PolyHub Agro Engineers - over a decade of excellence in modern agricultural infrastructure, greenhouse engineering, and sustainable polyhouse construction.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F5F2E9] min-h-screen">
      <PageBanner
        title="About Us"
        subtitle="Building a Greener Tomorrow"
        breadcrumbItems={[{ label: "About Us" }]}
        backgroundImage="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1800&q=80"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Main Company Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#183F32] bg-[#A6B5A0]/20 border border-[#183F32]/20 px-3 py-1 rounded-full">
              WHO WE ARE
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#102C24] tracking-tight leading-tight">
              Pioneering Sustainable Agricultural Infrastructure
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Established in {COMPANY_INFO.established}, PolyHub Agro Engineers is one of India&apos;s foremost agricultural engineering enterprises. We specialize in designing, fabricating, and erecting turnkey protected cultivation structures, including naturally ventilated polyhouses, climate-controlled fan and pad structures, shade net houses, and hydroponic greenhouses.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              With operational hubs in Patiala (Punjab) and Pune (Maharashtra), our mission is to empower farmers, agribusinesses, and corporate growers with aerodynamic, climate-adaptive structures that safeguard crops against extreme weather, reduce water consumption, and multiply yields per acre.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#183F32]/10 shadow-sm text-center">
                <div className="text-2xl font-black text-[#183F32]">10+</div>
                <div className="text-[11px] font-semibold text-slate-600 mt-1">Years Experience</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#183F32]/10 shadow-sm text-center">
                <div className="text-2xl font-black text-[#183F32]">300+</div>
                <div className="text-[11px] font-semibold text-slate-600 mt-1">Projects Completed</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#183F32]/10 shadow-sm text-center">
                <div className="text-2xl font-black text-[#183F32]">9M+</div>
                <div className="text-[11px] font-semibold text-slate-600 mt-1">Sq. Meters Built</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80"
                alt="PolyHub Agro Construction Site"
                className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102C24]/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold text-[#C5B27D] tracking-wider block">
                  Engineering Standards
                </span>
                <h3 className="font-serif italic text-2xl text-white mt-1">
                  Precision Greenhouse Fabrication
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Fabricated with ISI Standard Hot-Dip Galvanized Iron (GI) Pipes conforming to IS 1239 / IS 1161.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Core Principles */}
        <div className="mt-24 pt-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#183F32] bg-[#A6B5A0]/20 px-3 py-1 rounded-full">
              Why Growers Trust Us
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#102C24] mt-3">
              Uncompromising Quality in Protected Farming
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#183F32]/10 flex items-center justify-center text-[#183F32] mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#102C24]">130-150 km/h Wind Endurance</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Every structure is aerodynamically engineered with telescopic foundation footings grouted deep into the earth to resist severe monsoon storms and wind gusts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#183F32]/10 flex items-center justify-center text-[#183F32] mb-5">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#102C24]">NHB & MIDH Subsidy Compliance</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                All structural dimensions, gutter heights, cladding gauge, and irrigation components strictly adhere to National Horticulture Board standards for hassle-free subsidy claims.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#183F32]/10 flex items-center justify-center text-[#183F32] mb-5">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#102C24]">End-to-End Turnkey Agronomy</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                We don&apos;t just erect frames; our agronomists assist with crop selection, soil and water testing, bed preparation, and drip fertigation system calibration.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

