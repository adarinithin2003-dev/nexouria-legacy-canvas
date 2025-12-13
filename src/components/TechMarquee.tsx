import { motion } from "framer-motion";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Figma", icon: "🎯" },
  { name: "Shopify", icon: "🛒" },
  { name: "Vercel", icon: "▲" },
];

export const TechMarquee = () => {
  const items = [...techStack, ...techStack];

  return (
    <section className="py-12 border-y border-border/50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="flex animate-marquee">
          {items.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-12 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              <span className="text-2xl grayscale">{tech.icon}</span>
              <span className="text-lg font-medium whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
