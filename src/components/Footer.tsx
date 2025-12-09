import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#services" },
];

const socials = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "X", icon: Twitter, href: "#" },
];

export const Footer = () => {
  return (
    <footer id="contact" className="py-20 md:py-32 border-t border-border/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8"
        >
          {/* Brand */}
          <div className="lg:col-span-6">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground tracking-tight mb-6">
              Nexouria<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mb-8">
              Let's build something extraordinary together. Your vision, our expertise.
            </p>
            <a
              href="mailto:hello@nexouria.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-base glow-primary transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Navigate
            </h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Connect
            </h3>
            <ul className="space-y-4">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            Based in India. Designing for the World.
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 Nexouria. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
