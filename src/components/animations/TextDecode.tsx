import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface TextDecodeProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

const CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const TextDecode = ({ text, className = "", delay = 0, duration = 1000 }: TextDecodeProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isDecoding, setIsDecoding] = useState(false);
  const hasAnimated = useRef(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startDecode();
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startDecode = () => {
    setIsDecoding(true);
    
    setTimeout(() => {
      const iterations = 15;
      const iterationDuration = duration / iterations;
      let currentIteration = 0;

      const interval = setInterval(() => {
        currentIteration++;
        const progress = currentIteration / iterations;
        
        const newText = text
          .split("")
          .map((char, index) => {
            if (char === " " || char === "\n") return char;
            
            // Characters reveal progressively from left to right
            const charProgress = (index / text.length);
            if (charProgress < progress) {
              return char;
            }
            
            // Random scramble for unrevealed characters
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
        
        setDisplayText(newText);
        
        if (currentIteration >= iterations) {
          clearInterval(interval);
          setDisplayText(text);
          setIsDecoding(false);
        }
      }, iterationDuration);
    }, delay);
  };

  return (
    <motion.span
      ref={elementRef}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
    >
      {displayText.split("\n").map((line, i) => (
        <span key={i}>
          {line}
          {i < displayText.split("\n").length - 1 && <br />}
        </span>
      ))}
    </motion.span>
  );
};
