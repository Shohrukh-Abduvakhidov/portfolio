"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import Link from "next/link";
import { useRef, useState } from "react";

import { useLanguage } from "@/i18n/LanguageContext";
import { useSectionNavigation } from "@/hooks/use-section-navigation";

// Magnetic Button Wrapper
const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export default function Hero() {
  const { t } = useLanguage();
  const { scrollToSection } = useSectionNavigation();

  return (
    <section id="home" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 pb-16 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <StaggerContainer className="flex flex-col gap-6" delayChildren={0.1} staggerChildren={0.1}>
          <StaggerItem>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Shohrukh <br />
              Abduvakhidov
            </h1>
          </StaggerItem>

          <StaggerItem>
            <h2 className="text-2xl sm:text-3xl font-medium text-primary mt-2">
              {t("hero.role")}
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="text-lg text-muted-foreground max-w-lg mt-4 text-balance leading-relaxed">
              {t("hero.description")}
            </p>
          </StaggerItem>

          <StaggerItem className="flex flex-wrap gap-4 mt-8">
            <MagneticButton>
              <Button size="lg" className="rounded-full gap-2 group h-12 px-8" asChild>
                <a href="/#projects" onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}>
                  {t("hero.cta")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button size="lg" variant="outline" className="rounded-full gap-2 h-12 px-8 bg-background" asChild>
                <a href="https://github.com/Shohrukh-Abduvakhidov" target="_blank" rel="noopener noreferrer">
                  <Code className="w-4 h-4" /> GitHub
                </a>
              </Button>
            </MagneticButton>
          </StaggerItem>

          <StaggerItem className="flex flex-wrap items-center gap-8 md:gap-12 mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold">3+</span>
              <span className="text-sm text-muted-foreground font-medium">{t("metrics.projects").replace("3+ ", "")}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold">2+</span>
              <span className="text-sm text-muted-foreground font-medium">{t("metrics.experience").replace("2+ ", "")}</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-3xl font-bold">✓</span>
              </div>
              <span className="text-sm text-muted-foreground font-medium">{t("metrics.status")}</span>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Right Content - Premium Floating Workspace Visual */}
        <Reveal delay={0.3} width="100%">
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-black/[0.02] mask-image:linear-gradient(to_bottom,white,transparent)" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[100px] -z-10" />

            {/* Main Code Window */}
            <motion.div 
              initial={{ y: 20, opacity: 0, rotateX: 10 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="relative z-10 w-4/5 md:w-3/4 rounded-2xl bg-card border border-border shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="h-10 border-b border-border flex items-center px-4 justify-between bg-muted/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs text-muted-foreground font-mono">developer.ts</div>
                <div className="w-10" /> {/* Spacer for centering */}
              </div>
              <div className="flex-1 p-6 font-mono text-sm sm:text-base text-muted-foreground bg-[#0D1117] dark:bg-transparent">
                <div className="text-blue-400">const</div> <span className="text-blue-300">developer</span> = {"{"}
                <div className="pl-6 pt-2">
                  name: <span className="text-orange-300">"Shohrukh"</span>,
                </div>
                <div className="pl-6">
                  role: <span className="text-orange-300">"Full-Stack Developer"</span>,
                </div>
                <div className="pl-6">
                  frontend: [<span className="text-orange-300">"React"</span>, <span className="text-orange-300">"Next.js"</span>],
                </div>
                <div className="pl-6">
                  backend: [<span className="text-orange-300">"Node.js"</span>, <span className="text-orange-300">"Express"</span>],
                </div>
                <div className="pl-6">
                  database: <span className="text-orange-300">"PostgreSQL"</span>
                </div>
                <div className="pt-2">{"}"};</div>
                
                <div className="mt-6 text-blue-400">await</div> <span className="text-blue-300">developer</span>.<span className="text-yellow-200">buildProductionReadyApps</span>();
              </div>
            </motion.div>

            {/* Floating UI Card - Analytics/Stats */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -right-4 md:-right-8 top-1/4 p-4 rounded-xl bg-background/80 backdrop-blur-xl border border-border shadow-xl z-20 hidden sm:flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Code className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Clean Architecture</p>
                <p className="text-xs text-muted-foreground">Maintainable codebases</p>
              </div>
            </motion.div>

            {/* Floating UI Card - Terminal Fragment */}
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-4 md:-left-8 bottom-1/4 p-4 rounded-xl bg-[#0D1117] border border-border/50 shadow-xl z-20 hidden sm:block"
            >
              <p className="text-xs font-mono text-green-400">~ $ npm run deploy</p>
              <p className="text-xs font-mono text-muted-foreground mt-1">&gt; Deploying to production...</p>
              <p className="text-xs font-mono text-blue-400 mt-1">✓ Success! Live in 2.1s</p>
            </motion.div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
