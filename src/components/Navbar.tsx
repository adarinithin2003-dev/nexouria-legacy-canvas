import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import nexouriaLogo from "@/assets/nexouria-logo.jpeg";
import { MagneticButton } from "@/components/animations/MagneticButton";

const navLinks = [
  { name: "Work", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Services", href: "#services" },
  { name: "FAQ", href: "#faq" },
];

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar = ({ onOpenQuoteModal }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Glass Pill Navbar - Centered at top */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-7xl rounded-full border border-white/10 bg-black/50 backdrop-blur-md px-6 py-4 flex items-center justify-between transition-all duration-500 ${
          isScrolled ? "shadow-lg shadow-black/30 bg-black/70" : ""
        }`}
      >
        {/* Logo - Far Left (Transparent background) */}
        <div className="flex justify-start items-center bg-transparent">
          <a href="#home" className="bg-transparent">
            <img src={nexouriaLogo} alt="Nexouria Digital" className="h-10 w-auto rounded-lg bg-transparent" />
          </a>
        </div>

        {/* Center Navigation - Desktop (Absolutely Centered) */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button - Far Right (Desktop) with Magnetic Effect */}
        <div className="hidden md:flex justify-end">
          <MagneticButton
            onClick={onOpenQuoteModal}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-full btn-gradient-purple text-white btn-shimmer btn-glow-purple"
          >
            INQUIRE
          </MagneticButton>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-7xl md:hidden border border-white/10 bg-black/90 backdrop-blur-md rounded-2xl overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
              <img src={nexouriaLogo} alt="Nexouria Digital" className="h-10 w-auto mb-4 rounded-lg" />
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <motion.button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                whileTap={{ scale: 0.98 }}
                className="mt-2 px-5 py-3 text-center text-sm font-semibold rounded-full btn-gradient-purple text-white"
              >
                INQUIRE
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
