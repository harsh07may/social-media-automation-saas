import FeaturesSection from "@/app/_sections/FeaturesSection";
import HeroSection from "@/app/_sections/HeroSection";
import PricingSection from "@/app/_sections/PricingSection";
import TemplatesSection from "@/app/_sections/TemplatesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <HeroSection />
      <FeaturesSection />
      <TemplatesSection />
      <PricingSection />
    </main>
  );
}
