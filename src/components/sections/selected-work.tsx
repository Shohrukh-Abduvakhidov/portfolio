"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

const ProjectCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    // Very subtle tilt (max 1.5 deg)
    const rotateX = ((y - box.height / 2) / (box.height / 2)) * -1.5;
    const rotateY = ((x - box.width / 2) / (box.width / 2)) * 1.5;

    setRotate({ x: rotateX, y: rotateY });
    setPosition({ x, y });
    setOpacity(1);
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setOpacity(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 30, mass: 0.5 }}
      style={{ perspective: 1500 }}
    >
      <div className="relative h-full w-full rounded-3xl overflow-hidden bg-card border border-border shadow-sm transition-all duration-500 hover:border-primary/40 hover:shadow-xl group flex flex-col">
        {/* Spotlight effect */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-30 mix-blend-soft-light"
          style={{
            opacity,
            background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent 40%)`,
          }}
        />
        
        {children}
      </div>
    </motion.div>
  );
};

import { useLanguage } from "@/i18n/LanguageContext";

export default function SelectedWork() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 border-t border-border/50 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <Reveal>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">{t("projects.featured")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("projects.sectionTitle")}</h2>
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} className="h-full block transform-gpu cursor-pointer">
            <div className="flex flex-col h-full relative z-10">
              {/* Main Card Link */}
              <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10" aria-label={`${t("projects.viewCaseStudy")} ${project.title}`} />
              
              {/* Content Section (Top) */}
              <div className="p-8 pb-0 flex flex-col gap-6 relative z-20 pointer-events-none">
                
                {/* Header Row */}
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground font-mono text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  
                  {project.status && (
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-xs font-semibold text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 group-hover:animate-pulse" />
                      {project.status === "Production" ? t("projects.educrm.type").split(" ")[0] : project.status}
                      {project.liveUrl && " • LIVE"}
                    </div>
                  )}
                </div>

                {/* Title & Type */}
                <div>
                  <h3 className="text-3xl font-bold text-foreground mb-1">{project.title}</h3>
                  <span className="text-primary text-sm font-bold uppercase tracking-wider">
                    {t(`projects.${project.translationKey || project.slug}.type`) || project.type}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {t(`projects.${project.translationKey || project.slug}.tagline`) || project.tagline}
                </p>

                {/* Stack Badges */}
                <div className="flex flex-wrap gap-2 mt-2 pointer-events-auto">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-secondary/80 text-secondary-foreground text-[11px] font-semibold border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <div className="relative group/tooltip flex items-center justify-center">
                      <span className="px-2.5 py-1 rounded-md bg-secondary/80 text-secondary-foreground text-[11px] font-semibold border border-border/30 cursor-help">
                        +{project.stack.length - 4}
                      </span>
                      <div className="absolute bottom-full mb-2 hidden group-hover/tooltip:flex flex-wrap gap-1 bg-popover text-popover-foreground border border-border shadow-md rounded-lg p-2 w-max max-w-[200px] z-50">
                        {project.stack.slice(4).map(tech => (
                          <span key={tech} className="px-2 py-0.5 bg-secondary/50 rounded text-[10px] font-medium">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions Row */}
                <div className="flex items-center justify-between mt-4 pb-6 border-b border-border/50 group-hover:border-border transition-colors pointer-events-auto">
                  <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                    {t("projects.viewCaseStudy")} <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  {project.liveUrl && (
                     <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors relative z-20">
                        {project.liveUrl.replace("https://", "")} <ExternalLink className="w-3.5 h-3.5" />
                     </a>
                  )}
                </div>
              </div>

              {/* Image Section (Bottom) */}
              <div className="relative mt-8 mx-8 mb-8 aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden bg-background/50 border border-border/50 shadow-inner group-hover:border-primary/20 transition-colors duration-500 flex items-center justify-center p-4">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-2 md:p-4 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  priority={index === 0}
                />
              </div>

            </div>
          </ProjectCard>
        ))}
      </div>
    </section>
  );
}
