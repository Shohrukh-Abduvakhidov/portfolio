"use client";

import Link from "next/link";
import { Code, MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useSectionNavigation } from "@/hooks/use-section-navigation";
import { BrandLogo } from "@/components/ui/brand-logo";

export default function Footer() {
  const { t } = useLanguage();
  const { scrollToSection } = useSectionNavigation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <BrandLogo size="sm" />
          <span className="text-sm font-semibold text-foreground">Shohrukh Abduvakhidov</span>
        </div>
        
        <nav className="flex gap-6 text-sm font-medium text-muted-foreground">
          <a href="/" onClick={(e) => handleNavClick(e, "home")} className="hover:text-foreground transition-colors">{t("nav.home")}</a>
          <a href="/#about" onClick={(e) => handleNavClick(e, "about")} className="hover:text-foreground transition-colors">{t("nav.about")}</a>
          <a href="/#projects" onClick={(e) => handleNavClick(e, "projects")} className="hover:text-foreground transition-colors">{t("nav.projects")}</a>
          <a href="/#contact" onClick={(e) => handleNavClick(e, "contact")} className="hover:text-foreground transition-colors">{t("nav.contact")}</a>
        </nav>

        <div className="flex gap-4">
          <a href="https://github.com/Shohrukh-Abduvakhidov" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Code className="w-4 h-4" />
          </a>
          <a href="https://t.me/SHOHRUKH_011" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <MessageCircle className="w-4 h-4" />
          </a>
          <a href="mailto:vaxidov011@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
