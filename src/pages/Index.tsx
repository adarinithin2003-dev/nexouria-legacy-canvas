import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LogoTicker } from "@/components/LogoTicker";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Main content */}
      <Navbar />
      <main>
        <HeroSection />
        <LogoTicker />
        <ServicesSection />
        <ProcessSection />
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
