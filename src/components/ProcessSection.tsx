import { motion } from "framer-motion";
import { Lightbulb, Palette, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Discovery",
    description: "Strategy & Research",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Wireframing & UI/UX",
  },
  {
    icon: Code,
    title: "Development",
    description: "React & Modern Code",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Deployment & Support",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight mb-4 text-gradient-hero">
            How We Build Legacies
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Neon connecting line - Desktop */}
          <div className="absolute top-[calc(50%-40px)] left-[10%] right-[10%] h-1 neon-line hidden lg:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center"
              >
                {/* Card */}
                <div className="glass rounded-2xl p-5 md:p-6 card-glow relative z-10 bg-background/80 h-full flex flex-col items-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                
                {/* Step number */}
                <div className="mt-4 text-2xl md:text-3xl font-serif text-gradient-accent font-bold">
                  0{index + 1}
                </div>

                {/* Neon dot on line - Desktop */}
                <div className="absolute top-[calc(50%-40px)] left-1/2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary hidden lg:block" style={{ boxShadow: '0 0 15px hsl(186 100% 50%), 0 0 30px hsl(186 100% 50% / 0.5)' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
