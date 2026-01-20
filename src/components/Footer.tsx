import { motion } from "framer-motion";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import nexouriaLogo from "@/assets/nexouria-logo.jpeg";

const socials = [
  { 
    name: "WhatsApp", 
    icon: MessageCircle, 
    href: "https://wa.me/916302967060",
    className: "hover:bg-[#25D366]/20 hover:text-[#25D366] hover:border-[#25D366]/50"
  },
  { 
    name: "Instagram", 
    icon: Instagram, 
    href: "https://www.instagram.com/nexouria.digital",
    className: "hover:bg-[#E1306C]/20 hover:text-[#E1306C] hover:border-[#E1306C]/50"
  },
  { 
    name: "Email", 
    icon: Mail, 
    href: "mailto:nexouriadeveloper@gmail.com",
    className: "hover:bg-primary/20 hover:text-primary hover:border-primary/50"
  },
];

export const Footer = () => {
  return (
    <footer className="py-12 md:py-16 border-t border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo & Brand */}
          <div className="flex items-center gap-4">
            <img 
              src={nexouriaLogo} 
              alt="Nexouria Digital" 
              className="h-12 w-auto rounded-lg" 
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-11 h-11 rounded-full glass flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.className}`}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-8 mt-8 border-t border-white/5 text-center"
        >
          <p className="text-sm text-muted-foreground">
            © 2025 Nexouria Digital. Proudly Engineered in India 🇮🇳
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
