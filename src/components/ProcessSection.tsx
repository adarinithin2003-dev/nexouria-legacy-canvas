import { motion } from "framer-motion";
import { Search, PenTool, Hammer, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We dive deep into your brand, audience, and goals to understand what success looks like.",
  },
  {
    icon: PenTool,
    title: "Blueprint",
    description: "Strategic wireframes and design systems that form the foundation of your digital presence.",
  },
  {
    icon: Hammer,
    title: "Build",
    description: "Pixel-perfect development with clean, scalable code that performs flawlessly.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Rigorous testing and seamless deployment to bring your vision to life.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description: "Ongoing optimization and support to ensure your platform grows with you.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full glass text-xs font-medium tracking-wider text-muted-foreground uppercase mb-6">
            How We Work
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight">
            A Process Built for <span className="text-gradient-accent">Excellence</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Glowing line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
            <div className="h-full timeline-line opacity-30" />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-start gap-6 md:gap-12 mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon bubble */}
              <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full glass-strong flex items-center justify-center glow-border">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <div className={`flex-1 pt-3 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
