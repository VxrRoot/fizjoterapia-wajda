import AboutMeSection from "@/sections/AboutMeSection";
import ContactSection from "@/sections/ContactSection";
import FAQSection from "@/sections/FAQSection";
import HeroSection from "@/sections/HeroSection";
import OpinionsSection from "@/sections/OpinionsSection";
import ServicesSection from "@/sections/ServicesSection";
import TreatmentProcessSection from "@/sections/TreatmentProcessSection";
import WhyWorkWithMe from "@/sections/WhyWorkWithMe";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <TreatmentProcessSection />
      <AboutMeSection />
      <WhyWorkWithMe />
      <OpinionsSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}
