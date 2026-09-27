"use client";

import { motion } from "framer-motion";
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

const technologies = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Linux", icon: SiLinux },
];

export default function TechStrip() {
  // Duplicate for seamless loop
  const marqueeItems = [...technologies, ...technologies, ...technologies];

  return (
    <section className="w-full py-10 border-y border-border/50 bg-secondary/20 overflow-hidden flex flex-col gap-4">
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider text-center">
        Powered by modern technologies
      </p>
      
      <div className="relative w-full flex overflow-hidden mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)">
        <motion.div
          animate={{ x: [0, -1035] }} // Approximated width to loop seamlessly based on icon spacing
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap items-center gap-16 py-4 px-8"
        >
          {marqueeItems.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
              <tech.icon className="w-6 h-6" />
              <span className="font-medium text-lg text-foreground">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
