"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageSelector } from "@/components/layout/language-selector";
import { useLanguage } from "@/i18n/LanguageContext";
import { useSectionNavigation } from "@/hooks/use-section-navigation";
import { BrandLogo } from "@/components/ui/brand-logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeHash, setActiveHash] = React.useState("");
  
  const pathname = usePathname();
  const { scrollToSection } = useSectionNavigation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for Active Section
  React.useEffect(() => {
    if (pathname !== "/") {
      // If on project page, set active to projects
      if (pathname.startsWith("/projects")) {
        setActiveHash("projects");
      } else {
        setActiveHash("");
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    const navLinks = ["home", "about", "projects", "experience", "skills", "contact"];
    navLinks.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const { t } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), id: "home" },
    { name: t("nav.about"), id: "about" },
    { name: t("nav.projects"), id: "projects" },
    { name: t("nav.experience"), id: "experience" },
    { name: t("nav.skills"), id: "skills" },
    { name: t("nav.contact"), id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    scrollToSection(id);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm"
          : "bg-transparent py-2"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, "home")} 
          aria-label="Shohrukh Abduvakhidov — Home"
          className="flex items-center gap-2"
        >
          <BrandLogo size="md" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center relative">
          {navLinks.map((link) => {
            const isActive = activeHash === link.id;
            
            return (
              <a
                key={link.name}
                href={`/#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-secondary rounded-full -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSelector />
          <ThemeToggle />
          <Button className="hidden md:inline-flex rounded-full px-6 font-semibold" asChild>
            <a href="/#contact" onClick={(e) => handleNavClick(e, "contact")}>{t("nav.letsTalk")}</a>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-background md:hidden flex flex-col overflow-y-auto"
          >
            <div className="flex items-center justify-between p-4 border-b border-border shrink-0">
              <a 
                href="/" 
                onClick={(e) => handleNavClick(e, "home")} 
                aria-label="Shohrukh Abduvakhidov — Home"
              >
                <BrandLogo size="sm" />
              </a>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            <nav className="flex flex-col p-4 gap-2 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`/#${link.id}`}
                  className="px-4 py-4 text-lg font-medium text-foreground rounded-xl hover:bg-secondary transition-colors"
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="mt-4 rounded-full w-full py-6 text-lg font-semibold" asChild>
                <a href="/#contact" onClick={(e) => handleNavClick(e, "contact")}>{t("nav.letsTalk")}</a>
              </Button>
              <LanguageSelector mobile />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
