import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
}

export const MagneticButton = ({ 
  children, 
  className = "", 
  onClick,
  strength = 0.3 
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.button
      ref={buttonRef}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ x, y }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.span
        className="inline-flex items-center gap-2 w-full justify-center"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};
