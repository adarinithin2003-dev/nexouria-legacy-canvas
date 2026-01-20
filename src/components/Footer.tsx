import { motion } from "framer-motion";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import nexouriaLogo from "@/assets/nexouria-logo.jpeg";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/916302967060" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/nexouria.digital" },
  { name: "Email", icon: Mail, href: "mailto:nexouriadeveloper@gmail.com" },
];

export const Footer = () => {
  return (
    <footer className="py-16 md:py-20 lg:py-24 border-t border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mb-12 md:mb-16"
        >
          {/* Logo & Brand */}
          <div className="text-center md:text-left">
            <img src={nexouriaLogo} alt="Nexouria Digital" className="h-12 md:h-[50px] w-auto mb-4 rounded-lg mx-auto md:mx-0" />
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs mx-auto md:mx-0">
              Crafting digital legacies for visionary brands ready to dominate the global stage.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-semibold text-foreground mb-4 md:mb-6 text-xs md:text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2 md:gap-3" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold text-foreground mb-4 md:mb-6 text-xs md:text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex items-center justify-center md:justify-end gap-3 md:gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-6 md:pt-8 border-t border-white/5 text-center"
        >
          <p className="text-xs md:text-sm text-muted-foreground">
            © 2025 Nexouria Digital. Proudly Engineered in India 🇮🇳
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
