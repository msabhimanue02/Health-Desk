// app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NutritionSlider from "@/components/NutritionSlider";
import BestSellers from "@/components/BestSellers";
import BrandTrust from "@/components/BrandTrust";
import InfoSections from "@/components/InfoSections";
import Charity from "@/components/Charity";
import Testimonials from "@/components/Testimonials";
import ContactStrip from "@/components/ContactStrip";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <NutritionSlider />
      <BestSellers />
      <BrandTrust />
      <InfoSections />
      <Charity />
      <Testimonials />
      <ContactStrip />
      <Footer />
    </main>
  );
}
