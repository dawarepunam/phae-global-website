import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";
import { 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Sprout, 
  Users2, 
  Sparkles, 
  Droplets, 
  Activity, 
  Target 
} from "lucide-react";
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
        subtitle="Pioneering Sustainable Agricultural Technology & Greenhouse Infrastructure"
        breadcrumbItems={[{ label: "About Us" }]}
        backgroundImage="https://polyhubagro.com/wp-content/uploads/2020/04/WhatsApp-Image-2024-07-30-at-12.30.39-PM-1024x768.jpeg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Section 1: Welcome to Polyhub Agro & Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#183F32] bg-[#A6B5A0]/20 border border-[#183F32]/20 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <Sprout className="w-3.5 h-3.5" /> PIONEERING SUSTAINABLE AGRICULTURE
            </span>

            <h2 className="text-2xl sm:text-4xl font-black text-[#102C24] tracking-tight leading-tight">
              Welcome to Polyhub Agro
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              At Polyhub Agro, we stand at the forefront of agricultural innovation, driven by our commitment to sustainability and technological advancement. Our journey began in {COMPANY_INFO.established}, with a vision to revolutionize farming practices worldwide. Over the years, we have grown into a trusted name in the agricultural technology sector, serving farmers across diverse landscapes and climates.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              With major operational hubs in Patiala (Punjab) and Pune (Maharashtra), we engineer, fabricate, and deliver turnkey protected structures conforming to Bureau of Indian Standards (BIS) and National Horticulture Board (NHB) specifications.
            </p>

            {/* Metrics Grid */}
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
                <div className="text-[11px] font-semibold text-slate-600 mt-1">Sq. Mtrs Built</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src="https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-06-at-10.24.04_9cb01ebd-1.jpg"
                alt="PolyHub Agro Construction Site"
                className="w-full h-80 sm:h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102C24]/90 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold text-[#C5B27D] tracking-wider block">
                  Turnkey Execution
                </span>
                <h3 className="font-serif italic text-2xl text-white mt-1">
                  Precision Greenhouse Fabrication
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Conforming strictly to IS 1239 / IS 1161 and National Horticulture Board standards.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Section 2: Innovative Solutions for Modern Agriculture (With Key Leaders & Solutions) */}
        <div className="mt-24 pt-16 border-t border-slate-200">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#183F32] bg-[#A6B5A0]/20 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> CORE INNOVATION & ENGINEERING
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#102C24] mt-3">
              Innovative Solutions for Modern Agriculture
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              At the heart of Polyhub Agro’s offerings are our state-of-the-art products and engineering services designed to meet the evolving needs of commercial horticulture and precision farming:
            </p>
          </div>

          {/* 3 Innovation Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#183F32]/10 flex items-center justify-center text-[#183F32] mb-5">
                <Droplets className="w-6 h-6 text-[#183F32]" />
              </div>
              <h3 className="text-lg font-bold text-[#102C24]">Smart Irrigation Systems</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Precision watering solutions and closed-loop fertigation manifolds that maximize water efficiency and minimize nutrient waste.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#183F32]/10 flex items-center justify-center text-[#183F32] mb-5">
                <Target className="w-6 h-6 text-[#183F32]" />
              </div>
              <h3 className="text-lg font-bold text-[#102C24]">Precision Farming Tools</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Advanced structural technologies and aerodynamic airflow geometries for precise crop microclimate management, optimizing inputs for maximum harvest.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#183F32]/10 flex items-center justify-center text-[#183F32] mb-5">
                <Activity className="w-6 h-6 text-[#183F32]" />
              </div>
              <h3 className="text-lg font-bold text-[#102C24]">Environmental Monitoring Devices</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Real-time monitoring of temperature, relative humidity, and solar radiation, enabling proactive protected cultivation strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Leadership Spotlight - Randeep Singh & Arvind Kumar Yadav */}
        <div className="mt-20 bg-[#102C24] rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-[#B5A16A]/20">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#B5A16A] bg-[#B5A16A]/10 px-3 py-1 rounded-full">
              Leadership & Driving Vision
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-3 text-white">
              Pioneers Behind PolyHub Agro Engineers
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Guided by experienced technocrats committed to transforming commercial agriculture across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Leader 1 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white/10 shrink-0 border-2 border-[#B5A16A]/60 shadow-md">
                <img
                  src="https://polyhubagro.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-02-at-5.55.18-PM-5-1-370x370.png"
                  alt="Randeep Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Randeep Singh</h4>
                <p className="text-xs text-[#B5A16A] font-semibold">Founder & Managing Partner</p>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Steering structural engineering, pan-India commercial expansion, and technical execution.
                </p>
              </div>
            </div>

            {/* Leader 2 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white/10 shrink-0 border-2 border-[#B5A16A]/60 shadow-md">
                <img
                  src="https://polyhubagro.com/wp-content/uploads/2024/07/Group-1696-370x370.png"
                  alt="Arvind Kumar Yadav"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Arvind Kumar Yadav</h4>
                <p className="text-xs text-[#B5A16A] font-semibold">Co-Founder & Agronomy Director</p>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Overseeing protected cultivation agronomy, crop economics, and client success frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Customer-Centric Approach, Mission & Values */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#183F32] bg-[#A6B5A0]/20 px-3 py-1 rounded-full">
                Customer-Centric Approach
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#102C24] mt-3">
                Tailored Solutions for Real Farm Success
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                Polyhub Agro is committed to the success of our customers. We collaborate closely with farmers, understanding their unique challenges and tailoring engineering solutions that address their specific regional and crop requirements. Our success stories underscore our dedication to delivering tangible results and driving positive change in agriculture.
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#183F32]">
              <Users2 className="w-4 h-4 text-[#B5A16A]" />
              <span>Dedicated On-Site Farmer Support & Training</span>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#183F32] bg-[#A6B5A0]/20 px-3 py-1 rounded-full">
                Our Mission & Values
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#102C24] mt-3">
                Integrity, Innovation & Stewardship
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                Our mission at Polyhub Agro is clear: to empower farmers with cutting-edge solutions that enhance productivity while preserving the environment. We believe in harnessing technology to optimize crop yields and promote sustainable practices that safeguard our planet for future generations.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#183F32]">
              <ShieldCheck className="w-4 h-4 text-[#B5A16A]" />
              <span>Full Compliance with Central & State Horticulture Missions</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
