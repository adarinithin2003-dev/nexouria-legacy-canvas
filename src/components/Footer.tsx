import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const socials = [
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/nexouria.digital" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Nexouria Digital. Based in Visakhapatnam.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
