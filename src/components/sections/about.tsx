"use client";

import { Reveal } from "@/components/motion/reveal";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 border-t border-border/50 scroll-mt-24">
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
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
                  Download CV <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-card border border-border shadow-lg group">
             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
             <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-full h-full border border-border/50 rounded-2xl bg-background/50 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between p-8">
                   <div className="flex justify-between items-start">
                     <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-border" />
                       <div className="w-3 h-3 rounded-full bg-border" />
                     </div>
                     <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                       Focus
                     </div>
                   </div>
                   
                   <div className="space-y-4">
                     <div className="inline-block p-3 rounded-xl bg-primary/20 text-primary">
                       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>
                     </div>
                     <h3 className="text-2xl font-bold text-foreground">Products that matter</h3>
                     <p className="text-muted-foreground">Building applications that solve real-world problems efficiently.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
