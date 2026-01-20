import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import nexouriaLogo from "@/assets/nexouria-logo.jpeg";

const navLinks = [
  { name: "Work", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Services", href: "#services" },
  { name: "FAQ", href: "#faq" },
];

export const Navbar = () => {
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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
    >
      {/* Floating Glass Pill Navbar */}
      <div
        className={`flex items-center justify-between px-4 md:px-6 py-3 rounded-full glass-strong transition-all duration-500 ${
          isScrolled ? "shadow-lg shadow-black/20" : ""
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img src={nexouriaLogo} alt="Nexouria Digital" className="h-10 w-auto rounded-lg" />
        </a>

        {/* Center Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <motion.a
          href="https://forms.gle/yRr9S7CBdBNpra8c9"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded-full btn-gradient-purple text-white btn-shimmer btn-glow-purple"
        >
          INQUIRE
        </motion.a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glass-strong mt-2 mx-2 rounded-2xl overflow-hidden"
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
              <motion.a
                href="https://forms.gle/yRr9S7CBdBNpra8c9"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                whileTap={{ scale: 0.98 }}
                className="mt-2 px-5 py-3 text-center text-sm font-semibold rounded-full btn-gradient-purple text-white"
              >
                INQUIRE
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
