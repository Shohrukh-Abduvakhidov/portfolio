"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "./locales/en.json";
import ru from "./locales/ru.json";
import tj from "./locales/tj.json";

type Language = "en" | "ru" | "tj";

const translations = {
  en,
  ru,
  tj,
};

type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang") as Language;
    if (saved && ["en", "ru", "tj"].includes(saved)) {
      setLanguageState(saved);
    } else {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("ru")) setLanguageState("ru");
      else if (browserLang.startsWith("tg") || browserLang.startsWith("tj")) setLanguageState("tj");
      else setLanguageState("en");
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("portfolio_lang", language);
    // document lang code for tajik is tg
    document.documentElement.lang = language === "tj" ? "tg" : language;
  }, [language, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (path: string): string => {
    const keys = path.split(".");
    let current: any = translations[language] || translations["en"];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        // Fallback to english
        let fallback: any = translations["en"];
        for (const fKey of keys) {
          if (fallback[fKey] === undefined) {
            console.warn(`[i18n] Missing translation: ${path} (${language})`);
            return "";
          }
          fallback = fallback[fKey];
        }
        console.warn(`[i18n] Used English fallback for: ${path} (${language})`);
        return fallback as string;
      }
      current = current[key];
    }
    
    return current as string;
  };

  return (
    <LanguageContext.Provider value={{ language: mounted ? language : "en", setLanguage, t }}>
      <div style={{ visibility: mounted ? "visible" : "hidden" }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
