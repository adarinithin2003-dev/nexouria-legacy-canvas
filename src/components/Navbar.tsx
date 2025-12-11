import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-serif text-xl font-bold tracking-tight text-foreground uppercase">
          NEXOURIA DIGITAL
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
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:inline-flex items-center px-6 py-2.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground transition-all duration-300 shadow-lg shadow-primary/30"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong mt-4 mx-4 rounded-2xl overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4">
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
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                whileTap={{ scale: 0.98 }}
                className="mt-2 px-5 py-3 text-center text-sm font-semibold rounded-full bg-primary text-primary-foreground"
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
