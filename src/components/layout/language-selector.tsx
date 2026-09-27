"use client";

import React, { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const languages = [
  { code: "en", name: "English", label: "EN" },
  { code: "ru", name: "Русский", label: "RU" },
  { code: "tj", name: "Тоҷикӣ", label: "TJ" }
] as const;

export function LanguageSelector({ mobile }: { mobile?: boolean }) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const selected = languages.find(l => l.code === language) || languages[0];

  if (mobile) {
    return (
      <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
        <span className="text-sm font-semibold text-muted-foreground px-4">Language</span>
        <div className="flex flex-col gap-1 px-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={cn(
                "flex items-center justify-between px-4 py-3 rounded-xl transition-colors text-left font-medium",
                language === lang.code ? "bg-secondary text-foreground" : "hover:bg-secondary/50 text-muted-foreground"
              )}
              onClick={() => {
                setLanguage(lang.code);
              }}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm">{lang.label}</span>
                <span>{lang.name}</span>
              </div>
              {language === lang.code && <Check className="w-4 h-4 text-primary" />}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={containerRef}>
      <Button
        variant="ghost"
        size="sm"
        className="h-9 px-3 gap-2 rounded-full border border-transparent hover:bg-secondary/80 data-[state=open]:bg-secondary transition-all"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
        data-state={isOpen ? "open" : "closed"}
      >
        <Globe className="w-4 h-4 text-muted-foreground" />
        <span className="font-semibold text-sm w-5">{selected.label}</span>
        <ChevronDown className={cn("w-3 h-3 text-muted-foreground transition-transform duration-200", isOpen && "rotate-180")} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 w-40 p-1.5 rounded-2xl bg-popover border border-border shadow-lg z-50 origin-top-right"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-colors hover:bg-secondary/80",
                  language === lang.code ? "bg-secondary text-foreground" : "text-muted-foreground"
                )}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
              >
                <span>{lang.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold opacity-60">{lang.label}</span>
                  {language === lang.code && <Check className="w-4 h-4 text-primary" />}
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
