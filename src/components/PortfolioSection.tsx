import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "The Luxury Estate",
    category: "Real Estate Platform",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "FinTech Core",
    category: "Financial Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
  },
  {
    title: "Modern Retail",
    category: "E-Commerce Experience",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full glass text-xs font-medium tracking-wider text-muted-foreground uppercase mb-6">
            Our Work
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground tracking-tight">
            Selected <span className="text-gradient-accent">Projects</span>
          </h2>
        </motion.div>

        {/* Horizontal scroll container */}
        <div className="relative -mx-4 px-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 md:gap-8 pb-4 min-w-max md:min-w-0 md:grid md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative w-[300px] md:w-auto flex-shrink-0"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass card-glow">
                  {/* Laptop mockup frame */}
                  <div className="absolute inset-0 bg-secondary/50 p-3 md:p-4">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center gap-2 text-foreground">
                      <span className="text-sm font-medium">View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Project info */}
                <div className="mt-6">
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
