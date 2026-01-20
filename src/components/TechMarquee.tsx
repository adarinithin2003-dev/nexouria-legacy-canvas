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
    <section className="py-12 border-y border-border/30 overflow-hidden">
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
              className="flex items-center gap-3 px-12 grayscale-hover cursor-default"
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="text-lg font-medium whitespace-nowrap text-muted-foreground hover:text-foreground transition-colors">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
