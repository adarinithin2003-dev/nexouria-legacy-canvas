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
import fretAlchemyLogo from "@/assets/fretalchemy-logo.jpeg";

const projects = [
  {
    id: 1,
    name: "Velos Architects",
    initials: "VA",
    tags: ["Brand Identity", "Web Design", "3D Visualization"],
    description: "A bold architectural firm demanding a digital presence as striking as their structures. We crafted a minimalist website with dynamic project galleries and immersive 3D walkthroughs.",
    color: "from-cyan-500/20 to-blue-600/20",
  },
  {
    id: 2,
    name: "Aura Botanics",
    initials: "AB",
    tags: ["E-commerce", "Brand Identity", "Product Photography"],
    description: "Premium organic skincare brand seeking to establish luxury credentials online. We designed an elegant storefront with sophisticated product showcases and seamless checkout flow.",
    color: "from-green-500/20 to-emerald-600/20",
  },
  {
    id: 3,
    name: "Krypton Capital",
    initials: "KC",
    tags: ["Web App", "Dashboard Design", "Data Visualization"],
    description: "Fintech startup requiring a powerful dashboard for portfolio management. We engineered a real-time data platform with intuitive charts and secure authentication.",
    color: "from-purple-500/20 to-violet-600/20",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-32 md:py-40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gradient-hero">
            Selected Concepts
          </h2>
        </motion.div>

        {/* FretAlchemy Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <a
            href="https://www.fretalchemy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block max-w-xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden glass-card portfolio-card">
              <div className="p-12 md:p-16 flex items-center justify-center bg-gradient-to-br from-amber-500/10 to-orange-600/10">
                <img
                  src={fretAlchemyLogo}
                  alt="FretAlchemy Logo"
                  loading="lazy"
                  className="w-48 h-48 md:w-64 md:h-64 object-contain"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full btn-primary-glow text-sm">
                  Visit Live Site
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                Web Design • Media Streaming • Brand Identity
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-2">
                FretAlchemy
              </h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                A digital stage for sonic artistry with custom media player integration.
              </p>
            </div>
          </a>
        </motion.div>

        {/* Concept Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <div className="cursor-pointer group">
                    <div className="relative rounded-2xl overflow-hidden glass-card portfolio-card">
                      <div className={`p-12 md:p-16 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                        <span className="font-serif text-5xl md:text-6xl font-medium text-foreground/80">
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
                    <div className="mt-6 text-center">
                      <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                        {project.tags.join(" • ")}
                      </p>
                      <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground">
                        {project.name}
                      </h3>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="glass-strong border-white/10 max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-2xl text-foreground">
                      {project.name}
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground pt-4 leading-relaxed">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
