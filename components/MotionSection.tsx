"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export default function MotionSection({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: MotionSectionProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 40 };
      case "down":
        return { opacity: 0, y: -40 };
      case "left":
        return { opacity: 0, x: -40 };
      case "right":
        return { opacity: 0, x: 40 };
      default:
        return { opacity: 0, y: 40 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.section
      initial={getInitialPosition()}
      animate={getAnimatePosition()}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        delay,
      }}
      className={`w-full ${className}`}
      whileInView={{
        opacity: 1,
        ...(direction === "up" || direction === "down" ? { y: 0 } : { x: 0 }),
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.section>
  );
}
