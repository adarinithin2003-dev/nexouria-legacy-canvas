import { motion } from "framer-motion";
import { Monitor, Rocket, Fingerprint, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MovingBorderCard } from "@/components/animations/MovingBorderCard";

const whatsappMessages: Record<string, string> = {
  "Web Development": "Hi%20Nexouria%2C%20I%20need%20a%20Website.",
  "Digital Marketing": "Hi%20Nexouria%2C%20I%20need%20Marketing.",
  "Brand Identity": "Hi%20Nexouria%2C%20I%20need%20Branding.",
};

const services = [
  {
    icon: Monitor,
    title: "High-Performance Websites",
    description: "Custom React/Next.js builds. No templates. Fast & Scalable.",
    buttonText: "Get Web Quote",
    service: "Web Development",
    accentColor: "from-purple-500 to-violet-600",
    borderColor: "group-hover:border-purple-500/50",
    glowColor: "group-hover:shadow-purple-500/25",
    buttonClass: "bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40",
    isLarge: true,
  },
  {
    icon: Rocket,
    title: "Growth Engines",
    description: "SEO, Social Media, and Performance Ads that drive revenue.",
    buttonText: "Get Marketing Quote",
    service: "Digital Marketing",
    accentColor: "from-cyan-500 to-blue-600",
    borderColor: "group-hover:border-cyan-500/50",
    glowColor: "group-hover:shadow-cyan-500/25",
    buttonClass: "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40",
    isLarge: false,
  },
  {
    icon: Fingerprint,
    title: "Visual Identity",
    description: "Logos and visual systems that make you unforgettable.",
    buttonText: "Get Branding Quote",
    service: "Brand Identity",
    accentColor: "from-amber-500 to-orange-600",
    borderColor: "group-hover:border-amber-500/50",
    glowColor: "group-hover:shadow-amber-500/25",
    buttonClass: "border-2 border-amber-500/50 text-amber-400 hover:bg-amber-500/10 hover:border-amber-500 bg-transparent",
    isLarge: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
} as const;

export const ServiceEcosystem = () => {
  return (
    <section id="services" className="py-20 md:py-24 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 mb-6 text-xs font-medium tracking-widest uppercase border rounded-full border-primary/30 text-primary bg-primary/5"
          >
            Our Expertise
          </motion.span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 text-gradient-hero">
            The Service Ecosystem
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three pillars of digital excellence. Each engineered to elevate your brand.
          </p>
        </motion.div>

        {/* Bento Grid - 1 Large + 2 Smaller */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          {/* Large Card - Web Development with Moving Border */}
          <motion.div variants={cardVariants} className="lg:row-span-2">
            <MovingBorderCard 
              borderColor="hsl(186 100% 50%)"
              duration={4}
              className="h-full"
            >
              <article className="group relative p-8 md:p-10 h-full flex flex-col bg-white/5 backdrop-blur-xl rounded-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Icon container */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${services[0].accentColor} p-[1px]`}>
                    <div className="w-full h-full rounded-xl bg-background/90 flex items-center justify-center">
                      <Monitor className="w-10 h-10 text-foreground" />
                    </div>
                  </div>
                  <div className={`absolute inset-0 w-20 h-20 rounded-xl bg-gradient-to-br ${services[0].accentColor} opacity-0 group-hover:opacity-30 animate-ping`} style={{ animationDuration: '2s' }} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4 text-foreground">
                  {services[0].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow text-lg">
                  {services[0].description}
                </p>

                {/* CTA Button */}
                <Button
                  onClick={() => window.open(`https://wa.me/916302967060?text=${whatsappMessages[services[0].service]}`, "_blank", "noopener,noreferrer")}
                  className={`w-full inline-flex items-center justify-center gap-2 font-medium py-6 rounded-xl transition-all duration-300 group/btn ${services[0].buttonClass}`}
                >
                  {services[0].buttonText}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </article>
            </MovingBorderCard>
          </motion.div>

          {/* Smaller Cards with Moving Border */}
          {services.slice(1).map((service, index) => (
            <motion.div key={service.title} variants={cardVariants}>
              <MovingBorderCard 
                borderColor={index === 0 ? "hsl(186 100% 50%)" : "hsl(271 76% 53%)"}
                duration={5 + index}
                className="h-full"
              >
                <article className="group relative p-8 h-full flex flex-col bg-white/5 backdrop-blur-xl rounded-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.accentColor} p-[1px]`}>
                      <div className="w-full h-full rounded-xl bg-background/90 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-foreground" />
                      </div>
                    </div>
                    <div className={`absolute inset-0 w-14 h-14 rounded-xl bg-gradient-to-br ${service.accentColor} opacity-0 group-hover:opacity-30 animate-ping`} style={{ animationDuration: '2s' }} />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-xl md:text-2xl font-medium mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <Button
                    onClick={() => window.open(`https://wa.me/916302967060?text=${whatsappMessages[service.service]}`, "_blank", "noopener,noreferrer")}
                    className={`w-full inline-flex items-center justify-center gap-2 font-medium py-5 rounded-xl transition-all duration-300 group/btn ${service.buttonClass}`}
                  >
                    {service.buttonText}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </article>
              </MovingBorderCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground mt-12 text-sm"
        >
          All projects include dedicated support & 100% client ownership
        </motion.p>
      </div>
    </section>
  );
};
