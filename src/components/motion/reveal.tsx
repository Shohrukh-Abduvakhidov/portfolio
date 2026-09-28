"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const Reveal = ({ children, width = "fit-content", delay = 0, direction = "up" }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const getVariants = () => {
    switch (direction) {
      case "up": return { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } };
      case "down": return { hidden: { opacity: 0, y: -25 }, visible: { opacity: 1, y: 0 } };
      case "left": return { hidden: { opacity: 0, x: 25 }, visible: { opacity: 1, x: 0 } };
      case "right": return { hidden: { opacity: 0, x: -25 }, visible: { opacity: 1, x: 0 } };
      default: return { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } };
    }
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
