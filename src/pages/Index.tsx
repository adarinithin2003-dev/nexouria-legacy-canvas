import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustTicker } from "@/components/TrustTicker";
import { TechMarquee } from "@/components/TechMarquee";
import { StatsSection } from "@/components/StatsSection";
import { BlueprintSection } from "@/components/BlueprintSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";

const Index = () => {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      {/* Aurora ambient gradients */}
      <div className="aurora-gradient aurora-top-right" />
      <div className="aurora-gradient aurora-bottom-left" />
      
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Main content */}
      <header>
        <Navbar />
      </header>
      
      <main>
        <HeroSection />
        <TrustTicker />
        <TechMarquee />
        <StatsSection />
        <BlueprintSection />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Floating Widgets */}
      <FloatingWidgets />
    </div>
  );
};

export default Index;
