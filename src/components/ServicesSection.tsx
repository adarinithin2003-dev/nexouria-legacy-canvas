import { motion } from "framer-motion";
import { Rocket, TrendingUp, Crown, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Launchpad",
    subtitle: "For Startups",
    description: "Get your MVP live fast with a stunning, conversion-focused website that scales with your growth.",
    features: ["Landing Page", "Mobile Responsive", "SEO Foundation", "Analytics Setup"],
  },
  {
    icon: TrendingUp,
    title: "Growth Engine",
    subtitle: "For Scaling Brands",
    description: "Advanced digital infrastructure with custom features, integrations, and performance optimization.",
    features: ["Custom Development", "API Integrations", "Performance Tuning", "Advanced Analytics"],
  },
  {
    icon: Crown,
    title: "Legacy Architect",
    subtitle: "For Enterprises",
    description: "Full-scale digital transformation with bespoke solutions, dedicated support, and ongoing evolution.",
    features: ["Enterprise Solutions", "Dedicated Team", "24/7 Support", "Continuous Evolution"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full glass text-xs font-medium tracking-wider text-muted-foreground uppercase mb-6">
            What We Build
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight">
            Digital <span className="text-gradient-accent">Architectures</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group glass card-glow rounded-2xl p-8 flex flex-col min-h-[450px]"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                {service.subtitle}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8 flex-grow">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-foreground/20 text-foreground font-medium text-sm transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground"
              >
                Inquire About This
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
