import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Users, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const projects = [
  {
    id: "velos",
    title: "Velos Architects",
    category: "Luxury Real Estate",
    description: "Premium architectural visualization platform",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80",
    client: "Velos Group",
    duration: "4 Weeks",
    team: "3 Designers",
    overview: "We redefined the brand identity for Velos Architects, creating a digital experience that matches their premium positioning in the luxury real estate market.",
    challenges: "The main challenge was to convey sophistication while maintaining fast load times for high-resolution architectural imagery.",
    results: "150% increase in qualified leads, 40% longer session duration, and a 25% boost in consultation bookings.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
    liveUrl: "#",
  },
  {
    id: "aura",
    title: "Aura Botanics",
    category: "D2C Skincare",
    description: "Elegant e-commerce experience",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop&q=80",
    client: "Aura Botanics",
    duration: "6 Weeks",
    team: "4 Designers",
    overview: "A complete brand transformation for Aura Botanics, focusing on organic aesthetics and seamless shopping experience.",
    challenges: "Balancing the organic brand feel with modern e-commerce functionality and complex inventory management.",
    results: "200% increase in online sales, 60% reduction in cart abandonment, and improved customer retention by 45%.",
    techStack: ["React", "Tailwind CSS", "Shopify", "GraphQL"],
    liveUrl: "#",
  },
  {
    id: "krypton",
    title: "Krypton Capital",
    category: "FinTech Dashboard",
    description: "Next-gen financial analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80",
    client: "Krypton Capital",
    duration: "8 Weeks",
    team: "5 Designers",
    overview: "A sophisticated financial dashboard that transforms complex data into actionable insights for investment professionals.",
    challenges: "Processing real-time financial data while maintaining a clean, intuitive interface for complex operations.",
    results: "35% faster decision making, 90% user satisfaction rate, and successful Series A funding presentation.",
    techStack: ["React", "TypeScript", "D3.js", "WebSocket"],
    liveUrl: "#",
  },
];

export const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight uppercase text-gradient-hero">
            Portfolio
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass card-glow">
                <div className="absolute inset-0 bg-secondary/50 p-3 md:p-4">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Hover overlay with button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.button
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass glow-primary text-foreground font-medium text-sm"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
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
                <p className="text-sm text-muted-foreground mt-1">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              {/* Meta Row */}
              <div className="flex flex-wrap gap-6 py-4 border-b border-border/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">{selectedProject.client}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {selectedProject.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  {selectedProject.team}
                </div>
              </div>

              {/* Body Content - 2 Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      Overview
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.overview}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      Challenges
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.challenges}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      Results
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.results}
                    </p>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-full glass text-xs font-medium text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base transition-all duration-300 shadow-lg shadow-primary/30"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live Site
                  </motion.a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
