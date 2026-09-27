"use client";

import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({ className, size = "md" }: BrandLogoProps) {
  // Container sizes for desktop and mobile
  const containerSizes = {
    sm: "w-9 h-9 md:w-10 md:h-10 rounded-lg",
    md: "w-10 h-10 md:w-12 md:h-12 rounded-xl",
    lg: "w-12 h-12 md:w-14 md:h-14 rounded-xl",
  };

  // Font sizes for the monogram
  const fontSizes = {
    sm: "text-[26px] md:text-[30px]",
    md: "text-[31px] md:text-[36px]",
    lg: "text-[38px] md:text-[44px]",
  };

  const S_STYLES = {
    transform: "scale(0.85) translateY(5%)",
  };

  return (
    <div 
      className={cn(
        "relative flex items-center justify-center bg-foreground/[0.02] dark:bg-white/[0.02] transition-all duration-300 hover:scale-[1.04] group overflow-hidden border border-transparent hover:border-primary/10",
        containerSizes[size],
        className
      )}
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
      
      {/* BACKGROUND S (Full S, Behind A) */}
      <span 
        className={cn(
          "absolute font-black leading-none tracking-tighter text-transparent bg-clip-text select-none",
          "bg-gradient-to-br from-slate-700 via-blue-500 to-blue-700 dark:from-white dark:via-blue-400 dark:to-blue-600",
          fontSizes[size]
        )}
        style={S_STYLES}
      >
        S
      </span>

      {/* MIDDLE A (Full A) */}
      <span 
        className={cn(
          "absolute font-black leading-none tracking-tighter select-none",
          "text-slate-900 dark:text-slate-100",
          fontSizes[size]
        )}
      >
        A
      </span>

      {/* FOREGROUND S (Right half of S, In front of A) */}
      {/* This creates the weave effect: left half is behind A, right half is in front of A */}
      <span 
        className={cn(
          "absolute font-black leading-none tracking-tighter text-transparent bg-clip-text select-none",
          "bg-gradient-to-br from-slate-700 via-blue-500 to-blue-700 dark:from-white dark:via-blue-400 dark:to-blue-600",
          fontSizes[size]
        )}
        style={{
          ...S_STYLES,
          clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
        }}
      >
        S
      </span>
    </div>
  );
}
