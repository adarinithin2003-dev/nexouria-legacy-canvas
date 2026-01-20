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
    <section id="process" className="py-32 md:py-40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 text-gradient-hero">
            How We Build Legacies
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Neon connecting line - Desktop */}
          <div className="absolute top-1/2 left-0 right-0 h-1 neon-line hidden md:block" style={{ transform: 'translateY(-50%)' }} />

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-4 md:gap-8 relative">
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
                <div className="glass rounded-2xl p-6 card-glow relative z-10 bg-background/80">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                
                {/* Step number */}
                <div className="mt-4 text-3xl font-serif text-gradient-accent font-bold">
                  0{index + 1}
                </div>

                {/* Neon dot on line - Desktop */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary hidden md:block" style={{ boxShadow: '0 0 15px hsl(186 100% 50%), 0 0 30px hsl(186 100% 50% / 0.5)' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
