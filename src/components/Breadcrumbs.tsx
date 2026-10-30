import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export default function Breadcrumbs({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-300">
      <Link href="/" className="hover:text-[#1a7a4a] transition-colors flex items-center gap-1">
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>
      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
          {item.href ? (
            <Link href={item.href} className="hover:text-[#1a7a4a] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#1a7a4a] font-semibold">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}


