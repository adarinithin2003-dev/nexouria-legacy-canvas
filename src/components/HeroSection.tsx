import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20"
    >
      {/* Mesh Gradient Blobs - Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="mesh-gradient-blob mesh-blob-purple w-[800px] h-[800px] -top-40 -right-40"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="mesh-gradient-blob mesh-blob-cyan w-[600px] h-[600px] top-1/3 -left-40"
          animate={{
            x: [0, -40, 60, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="mesh-gradient-blob mesh-blob-purple w-[500px] h-[500px] bottom-0 left-1/3"
          animate={{
            x: [0, 30, -50, 0],
            y: [0, -60, 20, 0],
            scale: [1, 1.05, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full glass text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Premium Digital Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-tight text-gradient-hero max-w-4xl mx-auto"
        >
          Elevating Brands
          <br />
          through Digital Innovation.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-muted-foreground mb-12 leading-relaxed"
        >
          Nexouria Digital builds high-performance digital infrastructure.
          <br className="hidden md:block" />
          <span className="text-foreground/90 font-medium">Fast. Scalable. Timeless.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://forms.gle/yRr9S7CBdBNpra8c9"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full btn-gradient btn-shimmer btn-glow text-background font-semibold text-sm md:text-base w-full sm:w-auto justify-center"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="/brochure.png"
            download="Nexouria_Brochure.png"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass btn-outline-glow text-sm md:text-base w-full sm:w-auto justify-center"
          >
            <Download className="w-5 h-5" />
            Download Brochure
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};
