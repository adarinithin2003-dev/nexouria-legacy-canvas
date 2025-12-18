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
    <section id="services" className="py-32 relative">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-gradient-hero">
            The Blueprint for Your Digital Legacy
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just build websites. We engineer digital infrastructures designed to scale.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card group p-8 rounded-2xl"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-medium mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-muted-foreground"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm md:text-base font-medium">{feature.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
