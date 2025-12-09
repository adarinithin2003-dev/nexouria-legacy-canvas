import { motion } from "framer-motion";
import { Code2, Layers, Box, Zap } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Web Development",
    description: "Pixel-perfect, performant code tailored to your brand's unique requirements. No templates, no compromises.",
    size: "large",
  },
  {
    icon: Layers,
    title: "UI/UX Architecture",
    description: "Strategic design systems that scale with your growth.",
    size: "medium",
  },
  {
    icon: Box,
    title: "3D Web Experiences",
    description: "Immersive WebGL & Three.js.",
    size: "small",
  },
  {
    icon: Zap,
    title: "Speed Optimization",
    description: "Sub-second load times that convert visitors into customers.",
    size: "medium",
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
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight">
            Services Built for <span className="text-gradient-accent">Impact</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6"
        >
          {/* Large card - spans 2 cols */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:row-span-2 glass card-glow rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[300px] md:min-h-[400px]"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Code2 className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-4">
                {services[0].title}
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {services[0].description}
              </p>
            </div>
          </motion.div>

          {/* Medium card */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 glass card-glow rounded-2xl p-8 flex flex-col justify-between min-h-[200px]"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-2">
                {services[1].title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {services[1].description}
              </p>
            </div>
          </motion.div>

          {/* Small card */}
          <motion.div
            variants={itemVariants}
            className="glass card-glow rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[180px]"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Box className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-lg md:text-xl font-medium text-foreground mb-1">
                {services[2].title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {services[2].description}
              </p>
            </div>
          </motion.div>

          {/* Medium card */}
          <motion.div
            variants={itemVariants}
            className="glass card-glow rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[180px]"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-lg md:text-xl font-medium text-foreground mb-1">
                {services[3].title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {services[3].description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
