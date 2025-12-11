import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="gradient-blob w-[600px] h-[600px] bg-primary/30 -top-40 -left-40"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="gradient-blob w-[500px] h-[500px] bg-glow-cyan/20 top-1/3 -right-40"
          animate={{
            x: [0, -40, 60, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="gradient-blob w-[400px] h-[400px] bg-primary/20 bottom-0 left-1/3"
          animate={{
            x: [0, 30, -50, 0],
            y: [0, -60, 20, 0],
            scale: [1, 1.05, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full glass text-xs font-medium tracking-wider text-muted-foreground uppercase">
            Nexouria Digital
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground mb-8 leading-[1.1]"
        >
          Elevating Brands through
          <br />
          <span className="text-gradient-accent">Digital Innovation.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed"
        >
          Nexouria Digital builds high-performance digital infrastructure for brands ready to dominate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base transition-all duration-300 shadow-lg shadow-primary/30"
          >
            Inquire
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--foreground))", color: "hsl(var(--background))" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-foreground/30 text-foreground font-medium text-base transition-all duration-300 hover:border-foreground"
          >
            <Play className="w-4 h-4" />
            Watch Our Work
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
