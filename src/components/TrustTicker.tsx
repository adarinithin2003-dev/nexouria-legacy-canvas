import { motion } from "framer-motion";

const tickerItems = [
  "PREMIUM WEB DESIGN",
  "SEO STRATEGY",
  "BRAND IDENTITY",
  "GLOBAL REACH",
  "DIGITAL INFRASTRUCTURE",
  "CONVERSION OPTIMIZATION",
];

export const TrustTicker = () => {
  return (
    <section className="relative py-6 overflow-hidden border-y border-white/5 bg-white/[0.02]">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex items-center gap-8 animate-ticker"
          style={{ willChange: "transform" }}
        >
          {/* Double the items for seamless loop */}
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-sm md:text-base font-semibold tracking-widest text-muted-foreground/70 uppercase">
                {item}
              </span>
              <span className="text-primary text-xl">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
