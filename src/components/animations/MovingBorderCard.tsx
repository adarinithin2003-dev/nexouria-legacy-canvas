import { useRef, type ReactNode } from "react";
import { motion } from "framer-motion";

interface MovingBorderCardProps {
  children: ReactNode;
  className?: string;
  borderColor?: string;
  duration?: number;
}

export const MovingBorderCard = ({ 
  children, 
  className = "",
  borderColor = "hsl(186 100% 50%)",
  duration = 4
}: MovingBorderCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={cardRef} className={`relative group ${className}`}>
      {/* Moving border gradient */}
      <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `conic-gradient(from 0deg, transparent 0deg, ${borderColor} 60deg, transparent 120deg)`,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Static glow on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${borderColor}20 0%, transparent 70%)`,
          }}
        />
      </div>
      
      {/* Inner content with background */}
      <div className="relative rounded-2xl bg-[#050505] h-full">
        {children}
      </div>
    </div>
  );
};
