"use client";

import { Reveal } from "@/components/motion/reveal";
import { ArrowRight, Code, Mail, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 scroll-mt-24">
      <Reveal width="100%">
        <div className="relative rounded-3xl overflow-hidden bg-card border border-border shadow-sm p-8 md:p-16 text-center flex flex-col items-center justify-center gap-6">
          {/* Background subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 opacity-30 pointer-events-none" />
          
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">{t("contact.subtitle")}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            {t("contact.title")}
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl text-balance">
            {t("contact.description")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full max-w-3xl text-left">
            
            {/* Email */}
            <a 
              href="mailto:vaxidov011@gmail.com" 
              className="flex items-center justify-between p-6 rounded-2xl border border-border bg-background hover:border-primary/50 hover:bg-secondary/20 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{t("contact.email")}</div>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{t("contact.emailMe")}</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </a>

            {/* Telegram */}
            <a 
              href="https://t.me/SHOHRUKH_011" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 rounded-2xl border border-border bg-background hover:border-primary/50 hover:bg-secondary/20 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#2AABEE]/10 flex items-center justify-center text-[#2AABEE] group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{t("contact.telegram")}</div>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">@SHOHRUKH_011</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all -rotate-45" />
            </a>

            {/* Phone */}
            <a 
              href="tel:+992911170039" 
              className="flex items-center justify-between p-6 rounded-2xl border border-border bg-background hover:border-primary/50 hover:bg-secondary/20 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{t("contact.phone")}</div>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{t("contact.callMe")}</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/Shohrukh-Abduvakhidov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 rounded-2xl border border-border bg-background hover:border-primary/50 hover:bg-secondary/20 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">{t("contact.github")}</div>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{t("contact.viewProfile")}</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all -rotate-45" />
            </a>

          </div>
        </div>
      </Reveal>
    </section>
  );
}
