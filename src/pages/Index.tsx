import { useState, useCallback } from "react";
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
import { QuoteModal } from "@/components/QuoteModal";

const Index = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = useCallback((service?: string) => {
    setPreselectedService(service);
    setIsQuoteModalOpen(true);
  }, []);

  const handleCloseQuoteModal = useCallback(() => {
    setIsQuoteModalOpen(false);
    setPreselectedService(undefined);
  }, []);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#050505' }}>
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Main content */}
      <header>
        <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />
      </header>
      
      <main>
        <HeroSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
        <TrustTicker />
        <TechMarquee />
        <StatsSection />
        <ServiceEcosystem onOpenQuoteModal={handleOpenQuoteModal} />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Floating Widgets */}
      <FloatingWidgets />

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={handleCloseQuoteModal}
        preselectedService={preselectedService}
      />
    </div>
  );
};

export default Index;
