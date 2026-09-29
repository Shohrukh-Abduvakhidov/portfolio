"use client";

import React, { useEffect, useState } from "react";
import { Lottie } from "lottie-react";

export function DeveloperAnimation() {
  const [animationData, setAnimationData] = useState<unknown>(null);
  
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  useEffect(() => {
    fetch("/lottie/developer.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load Lottie animation", err));
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    
    // Add event listener (safari fallback support)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    } else {
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    }
  }, []);

  return (
    <div className="relative w-full max-w-[500px] mx-auto flex items-center justify-center p-4 md:p-8 rounded-3xl overflow-hidden group">
      {/* Subtle radial blue glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80%] h-[80%] bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-[60px] transition-opacity duration-700 opacity-70 group-hover:opacity-100" />
      </div>
      
      {/* Container with a very subtle border/background */}
      <div className="relative z-10 w-full h-full p-2 border border-border/40 bg-background/20 backdrop-blur-sm rounded-[2rem] shadow-sm">
        <div aria-hidden="true" className="w-full flex justify-center items-center">
          {animationData ? (
            <Lottie
              src={animationData}
              loop={!prefersReducedMotion}
              autoplay={!prefersReducedMotion}
              className="w-full h-auto drop-shadow-md"
            />
          ) : (
            <div className="w-full aspect-square flex items-center justify-center">
              {/* Optional skeleton or empty state while loading */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
