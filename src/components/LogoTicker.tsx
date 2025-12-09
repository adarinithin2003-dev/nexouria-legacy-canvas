import { motion } from "framer-motion";

const logos = [
  "Vercel",
  "Stripe",
  "Notion",
  "Linear",
  "Figma",
  "Framer",
  "Webflow",
  "Supabase",
];

export const LogoTicker = () => {
  return (
    <section className="py-16 md:py-24 border-y border-border/50 overflow-hidden">
      <div className="container mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-medium text-muted-foreground tracking-wider uppercase"
        >
          Powering the Next Generation of Indian Brands
        </motion.p>
      </div>

      {/* Ticker */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-ticker-scroll">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-12 flex items-center justify-center"
            >
              <span className="text-2xl md:text-3xl font-semibold text-muted-foreground/40 tracking-tight whitespace-nowrap">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
