import { motion } from "framer-motion";
import { Monitor, TrendingUp, Diamond, Zap, Smartphone, Shield } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "High-Performance Web Architecture",
    description:
      "We move beyond templates. We engineer custom, responsive websites tailored to your brand identity. Built for speed, mobile-first, and designed to convert visitors into clients.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven SEO & Visibility",
    description:
      "Visibility is currency. We implement deep on-page SEO foundations and strategic indexing to ensure your business cuts through the noise and dominates local search results.",
  },
  {
    icon: Diamond,
    title: "Brand Identity & Visual Legacy",
    description:
      "A logo is not a brand. We craft a cohesive visual language—from typography to color psychology—that positions your agency as the undeniable authority in your niche.",
  },
];

const features = [
  { icon: Zap, text: "Rapid Deployment (Weeks, not months)" },
  { icon: Smartphone, text: "Mobile-First Core" },
  { icon: Shield, text: "100% Client Ownership" },
];

export const BlueprintSection = () => {
  return (
    <section id="services" className="py-20 md:py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-6 text-gradient-hero">
            The Blueprint for Your Digital Legacy
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just build websites. We engineer digital infrastructures designed to scale.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card group p-6 md:p-8 lg:p-10 rounded-2xl h-full flex flex-col"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                <service.icon className="w-7 h-7 md:w-8 md:h-8 text-primary icon-pulse" />
              </div>
              <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-medium mb-3 md:mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-grow">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-muted-foreground"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <span className="text-sm md:text-base font-medium">{feature.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
