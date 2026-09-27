"use client";

import { Reveal } from "@/components/motion/reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { experience } from "@/data/experience";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 border-t border-border/50 scroll-mt-24">
      <Reveal>
        <div className="flex flex-col gap-2 mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">{t("experience.subtitle")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("experience.title")}</h2>
        </div>
      </Reveal>

      <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-12 pb-4">
        <StaggerContainer delayChildren={0.2} staggerChildren={0.2}>
          {experience.map((item, index) => {
            const isSoftclub = item.title.includes("SoftClub");
            const kTitle = isSoftclub ? "softclubTitle" : "rtsuTitle";
            const kDesc = isSoftclub ? "softclubDesc" : "rtsuDesc";
            
            return (
            <StaggerItem key={index} className="relative pl-8 md:pl-12">
              <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-primary border-4 border-background" />
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium w-fit">
                  {item.period === "Current" ? t("experience.present") : item.period}
                </span>
              </div>
              <h4 className="text-primary font-medium mb-3">{t(`experience.${kTitle}`)}</h4>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">
                {t(`experience.${kDesc}`)}
              </p>
            </StaggerItem>
          )})}
        </StaggerContainer>
      </div>
    </section>
  );
}
