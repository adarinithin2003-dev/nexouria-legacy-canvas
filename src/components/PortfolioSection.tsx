import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import fretAlchemyLogo from "@/assets/fretalchemy-logo.jpeg";

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-32 md:py-40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight uppercase text-gradient-hero">
            Portfolio
          </h2>
        </motion.div>

        {/* Single Featured Project - Centered */}
        <div className="flex justify-center">
          <motion.a
            href="https://www.fretalchemy.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative max-w-xl w-full"
          >
            {/* Card */}
            <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-1">
              {/* Logo Container */}
              <div className="p-12 md:p-16 flex items-center justify-center bg-background/50">
                <img
                  src={fretAlchemyLogo}
                  alt="FretAlchemy Logo"
                  loading="lazy"
                  className="w-48 h-48 md:w-64 md:h-64 object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Hover overlay with button */}
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-lg shadow-primary/30"
                >
                  Visit Live Site
                  <ExternalLink className="w-4 h-4" />
                </motion.span>
              </div>
            </div>

            {/* Project info */}
            <div className="mt-8 text-center">
              <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                Web Design • Media Streaming • Brand Identity
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-3">
                FretAlchemy
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                A digital stage for sonic artistry. We engineered a high-performance platform featuring custom media player integration, immersive galleries, and a responsive layout designed to showcase musical craftsmanship.
              </p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
