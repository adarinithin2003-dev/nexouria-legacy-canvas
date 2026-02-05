import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


const featuredProject = {
  id: 0,
  name: "DigiPulse",
  link: "https://www.withdigipulse.com",
  tags: ["Web Design", "Digital Marketing", "Political Strategy"],
  description: "Digital Marketing & Political Strategy Platform. Delivered in just 4 days.",
  badge: "Delivered in 4 Days",
};

const projects = [
  {
    id: 1,
    name: "Fret Alchemy",
    initials: "FA",
    tags: ["Web Design", "Media Streaming", "Brand Identity"],
    description: "A digital stage for sonic artistry with custom media player integration and immersive music academy experience.",
    color: "from-primary/20 to-accent/20",
    link: "https://www.fretalchemy.com",
  },
  {
    id: 2,
    name: "Stuti Designer Boutique",
    initials: "SB",
    tags: ["E-commerce", "Brand Identity", "Product Photography"],
    description: "Premium fashion boutique with elegant product showcases, seamless checkout flow, and sophisticated brand presence.",
    color: "from-primary/15 to-accent/15",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-gradient-hero">
            Selected Concepts
          </h2>
        </motion.div>

        {/* DigiPulse Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <a
            href={featuredProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block max-w-xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden glass-card portfolio-card">
              <div className="p-10 md:p-14 lg:p-16 flex flex-col items-center justify-center bg-gradient-to-br from-primary/15 to-accent/15 min-h-[280px]">
                <span className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-foreground/90 mb-4">
                  DP
                </span>
                <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
                  {featuredProject.badge}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-primary-glow text-sm">
                  Visit Live Site
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </div>
            <div className="mt-5 md:mt-6 text-center">
              <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                {featuredProject.tags.join(" • ")}
              </p>
              <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-medium text-foreground mb-2">
                {featuredProject.name}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto">
                {featuredProject.description}
              </p>
            </div>
          </a>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-full flex flex-col"
                >
                  <div className="relative rounded-2xl overflow-hidden glass-card portfolio-card">
                    <div className={`p-10 md:p-12 lg:p-14 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                      <span className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground/80">
                        {project.initials}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-primary-glow text-sm">
                        Visit Live Site
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 md:mt-6 text-center flex-grow flex flex-col">
                    <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                      {project.tags.join(" • ")}
                    </p>
                    <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-medium text-foreground">
                      {project.name}
                    </h3>
                  </div>
                </a>
              ) : (
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer group h-full flex flex-col">
                      <div className="relative rounded-2xl overflow-hidden glass-card portfolio-card">
                        <div className={`p-10 md:p-12 lg:p-14 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                          <span className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-foreground/80">
                            {project.initials}
                          </span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-primary-glow text-sm">
                            View Project
                            <ExternalLink className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                      <div className="mt-5 md:mt-6 text-center flex-grow flex flex-col">
                        <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                          {project.tags.join(" • ")}
                        </p>
                        <h3 className="font-serif text-lg md:text-xl lg:text-2xl font-medium text-foreground">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="glass-strong border-white/10 max-w-lg mx-4 bg-[#0a0a0a]">
                    <DialogHeader>
                      <DialogTitle className="font-serif text-xl md:text-2xl text-foreground">
                        {project.name}
                      </DialogTitle>
                      <DialogDescription className="text-muted-foreground pt-4 leading-relaxed text-sm md:text-base">
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
