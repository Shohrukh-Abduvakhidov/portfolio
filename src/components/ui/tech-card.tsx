"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TechCardProps {
  name: string;
  icon: ReactNode;
  className?: string;
}

export function TechCard({ name, icon, className }: TechCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      className={cn(
        "group relative flex items-center gap-3 p-4 rounded-xl border border-border bg-card overflow-hidden",
        "hover:border-primary/50 transition-colors",
        className
      )}
    >
      {/* Subtle hover glow */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-md bg-muted text-foreground group-hover:text-primary transition-colors">
        {icon}
      </div>
      <span className="relative z-10 font-medium text-sm text-foreground/80 group-hover:text-foreground transition-colors">
        {name}
      </span>
    </motion.div>
  );
}
