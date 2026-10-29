import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Economics from "@/components/Economics";
import Subsidy from "@/components/Subsidy";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* 1. Cinematic Hero Slider with Video Story */}
      <Hero />

      {/* 2. About Us preview with metrics & video */}
      <About />

      {/* 3. Products preview & Flagship Naturally Ventilated Polyhouse */}
      <Products />

      {/* 4. Services preview & Why Choose Us */}
      <Services />

      {/* 5. Crop Economics preview */}
      <Economics />

      {/* 6. Government Subsidy section */}
      <Subsidy />

      {/* 7. Gallery project preview */}
      <Gallery />

      {/* 8. Contact Us & Let's Grow Together Form */}
      <Contact />
    </>
  );
}
