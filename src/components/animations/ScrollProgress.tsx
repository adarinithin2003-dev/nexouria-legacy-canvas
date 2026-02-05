import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[9999] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, hsl(271 76% 53%) 0%, hsl(186 100% 50%) 100%)",
        boxShadow: "0 0 10px hsl(186 100% 50% / 0.5), 0 0 20px hsl(271 76% 53% / 0.3)",
      }}
    />
  );
};
