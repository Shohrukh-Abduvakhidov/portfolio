"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { Reveal } from "@/components/motion/reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { TechCard } from "@/components/ui/tech-card";
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiExpress, 
  SiPostgresql, 
  SiGit, 
  SiGithub, 
  SiLinux 
} from "react-icons/si";
import { Server, Layers } from "lucide-react"; // Fallbacks for REST API and shadcn/ui

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="w-4 h-4" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" /> },
      { name: "React", icon: <SiReact className="w-4 h-4" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4" /> },
      { name: "shadcn/ui", icon: <Layers className="w-4 h-4" /> },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4" /> },
      { name: "Express", icon: <SiExpress className="w-4 h-4" /> },
      { name: "REST API", icon: <Server className="w-4 h-4" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4" /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit className="w-4 h-4" /> },
      { name: "GitHub", icon: <SiGithub className="w-4 h-4" /> },
      { name: "Linux", icon: <SiLinux className="w-4 h-4" /> },
    ],
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 border-t border-border/50 scroll-mt-24">
      <Reveal>
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">{t("skills.subtitle")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("skills.title")}</h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {skillCategories.map((category, i) => {
          let k = "frontend";
          if (category.title.includes("Backend")) k = "backend";
          else if (category.title.includes("Tools")) k = "tools";
          
          return (
          <Reveal key={category.title} delay={i * 0.1}>
            <div className="flex flex-col gap-6">
              <h3 className="font-semibold text-lg text-foreground/90">{t(`skills.${k}`)}</h3>
              <StaggerContainer className="grid grid-cols-2 gap-4" delayChildren={0.1} staggerChildren={0.05}>
                {category.skills.map((skill) => (
                  <StaggerItem key={skill.name}>
                    <TechCard name={skill.name} icon={skill.icon} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </Reveal>
        )})}
      </div>
    </section>
  );
}
