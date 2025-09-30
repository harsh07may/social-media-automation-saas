import FeaturesSection from "@/_sections/FeaturesSection";
import HeroSection from "@/_sections/HeroSection";
import PricingSection from "@/_sections/PricingSection";
import TemplatesSection from "@/_sections/TemplatesSection";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <HeroSection />
      <FeaturesSection />
      <TemplatesSection />
      <PricingSection />
      {/* <Footer /> */}
    </div>
  );
}
