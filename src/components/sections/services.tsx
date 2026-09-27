"use client";

import { Reveal } from "@/components/motion/reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { services } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 border-t border-border/50">
      <Reveal>
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">{t("services.subtitle")}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("services.title")}</h2>
        </div>
      </Reveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => {
          // simple map to json keys based on index
          const keys = ["frontend", "backend", "fullstack", "database", "deployment"];
          const k = keys[idx];
          return (
          <StaggerItem key={service.title}>
            <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors h-full flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:bg-primary/10 transition-colors" />
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mt-2">{t(`services.${k}`)}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(`services.${k}Desc`)}
              </p>
            </div>
          </StaggerItem>
        )})}
      </StaggerContainer>
    </section>
  );
}
