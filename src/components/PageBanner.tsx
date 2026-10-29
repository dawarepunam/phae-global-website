import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";

interface PageBannerProps {
  title: string;
  subtitle: string;
  breadcrumbItems: {
    label: string;
    href?: string;
  }[];
  backgroundImage?: string;
}

export default function PageBanner({
  title,
  subtitle,
  breadcrumbItems,
  backgroundImage = "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1800&q=80"
}: PageBannerProps) {
  return (
    <div className="relative pt-28 pb-14 sm:pt-36 sm:pb-18 overflow-hidden bg-[#102C24] text-white">
      {/* Background with Dark Evergreen Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102C24] via-[#102C24]/90 to-[#183F32]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102C24] via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <div className="text-xs uppercase font-extrabold tracking-widest text-[#C5B27D] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B5A16A]" />
              {subtitle}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-sm">
              {title}
            </h1>
          </div>

          <div className="pt-2 md:pt-0">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

