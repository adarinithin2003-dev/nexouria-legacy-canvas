import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "300%", label: "Avg ROI Increase" },
  { value: "24/7", label: "Support Team" },
];

export const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 border-y border-border/30">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`text-center ${
                index < stats.length - 1 ? "md:border-r md:border-border/30" : ""
              }`}
            >
              <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
