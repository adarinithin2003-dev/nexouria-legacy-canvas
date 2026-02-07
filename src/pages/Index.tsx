import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { TrustTicker } from "@/components/TrustTicker";
import { TechMarquee } from "@/components/TechMarquee";
import { StatsSection } from "@/components/StatsSection";
import { ServiceEcosystem } from "@/components/ServiceEcosystem";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWidgets } from "@/components/FloatingWidgets";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { LoadingScreen } from "@/components/LoadingScreen";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="relative min-h-screen pb-32 scrollbar-hide" style={{ backgroundColor: '#050505' }}>
      <LoadingScreen />
      <ScrollProgress />
      <div className="noise-overlay" />
      
      <header>
        <Navbar />
      </header>
      
      <main>
        <HeroSection />
        <TrustTicker />
        <TechMarquee />
        <StatsSection />
        <ServiceEcosystem />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      
      <Footer />
      <FloatingWidgets />
      <ScrollToTop />
    </div>
  );
};

export default Index;
