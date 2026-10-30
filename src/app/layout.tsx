import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";

export const metadata: Metadata = {
  title: "PHAE Global | Commercial Polyhouses & Greenhouse Engineering",
  description: "PHAE Global (PHAE Global) - Premier agricultural infrastructure company in India. Specializing in naturally ventilated polyhouses, climate-controlled fan & pad setups, shade net houses, and government subsidy assistance (MIDH/NHB).",
  keywords: [
    "PHAE Global",
    "PHAE Global",
    "Polyhouse",
    "Greenhouse",
    "Naturally Ventilated Polyhouse",
    "Fan and Pad Polyhouse",
    "Shade Net House",
    "Hydroponics",
    "Agriculture Subsidy MIDH NHB"
  ],
  authors: [{ name: "PHAE Global (PHAE Global)" }],
  openGraph: {
    title: "PHAE Global | Commercial Polyhouses & Greenhouse Engineering",
    description: "Modernizing Indian agriculture with durable, wind-resistant polyhouses and shade nets.",
    url: "https://polyhubagro.com",
    siteName: "PHAE Global",
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A1128",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#004B87] selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
