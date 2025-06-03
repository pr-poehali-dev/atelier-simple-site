import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesGrid />
      <FeaturesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
