"use client";

import { Reveal } from "@/components/motion/reveal";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { DeveloperAnimation } from "@/components/ui/developer-animation";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 border-t border-border/50 scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column - Text Content */}
        <Reveal direction="up" width="100%">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">{t("nav.about")}</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{t("about.title")}</h2>
            
            <div className="text-lg text-muted-foreground leading-relaxed flex flex-col gap-4">
              <p>{t("about.description1")}</p>
              <p>{t("about.description2")}</p>
            </div>

            <div className="mt-4">
              <Button className="rounded-full gap-2" asChild>
                <Link href="/cv/Abduvakhidov_Shohrukh_CV.pdf" target="_blank" rel="noreferrer">
                  {t("about.downloadCv") || "Download CV"} <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Right Column - Lottie Animation */}
        <Reveal direction="left" width="100%">
          <DeveloperAnimation />
        </Reveal>
        
      </div>
    </section>
  );
}
