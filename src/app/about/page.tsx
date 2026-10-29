import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | PHAE Global",
  description: "Learn about PHAE Global - over a decade of excellence in modern agricultural infrastructure, greenhouse engineering, and sustainable polyhouse construction.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Pioneering Sustainable Agricultural Technology & Greenhouse Infrastructure"
        breadcrumbItems={[{ label: "About Us" }]}
        backgroundImage="https://polyhubagro.com/wp-content/uploads/2020/04/WhatsApp-Image-2024-07-30-at-12.30.39-PM-1024x768.jpeg"
      />
      <AboutClient />
    </>
  );
}
