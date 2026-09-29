"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Copy, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

interface DemoCredentialsProps {
  email: string;
  password: string;
  role?: string;
}

export function DemoCredentials({ email, password, role }: DemoCredentialsProps) {
  const { t } = useLanguage();
  
  const [showPassword, setShowPassword] = useState(false);
  const [copiedField, setCopiedField] = useState<"email" | "password" | null>(null);

  const handleCopy = (text: string, field: "email" | "password") => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => {
        setCopiedField(null);
      }, 2000);
    });
  };

  return (
    <div className="mt-8 rounded-2xl bg-secondary/30 border border-border overflow-hidden">
      <div className="p-4 md:p-5 border-b border-border bg-secondary/50 flex flex-col gap-1">
        <h3 className="font-bold text-foreground flex items-center gap-2">
          {t("projects.demoAccount.title")}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t("projects.demoAccount.subtitle")}
        </p>
      </div>
      
      <div className="p-4 md:p-5 flex flex-col gap-4">
        {/* Email Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 py-2 border-b border-border/50 last:border-0">
          <div className="w-24 shrink-0 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {t("projects.demoAccount.email")}
          </div>
          <div className="flex-1 font-mono text-sm text-foreground truncate min-w-0">
            {email}
          </div>
          <button
            onClick={() => handleCopy(email, "email")}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground shrink-0 self-start sm:self-auto"
            aria-label={t("projects.demoAccount.copyEmail")}
          >
            {copiedField === "email" ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-500" />
                <span className="text-green-500">{t("projects.demoAccount.copied")}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{t("projects.demoAccount.copy")}</span>
              </>
            )}
          </button>
        </div>

        {/* Password Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 py-2 border-b border-border/50 last:border-0">
          <div className="w-24 shrink-0 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            {t("projects.demoAccount.password")}
          </div>
          <div className="flex-1 font-mono text-sm text-foreground flex items-center gap-3 truncate min-w-0">
            <span className="truncate">
              {showPassword ? password : "•".repeat(password.length)}
            </span>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors shrink-0"
              aria-label={showPassword ? t("projects.demoAccount.hidePassword") : t("projects.demoAccount.showPassword")}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <button
            onClick={() => handleCopy(password, "password")}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground shrink-0 self-start sm:self-auto"
            aria-label={t("projects.demoAccount.copyPassword")}
          >
            {copiedField === "password" ? (
              <>
                <Check className="w-3.5 h-3.5 text-green-500" />
                <span className="text-green-500">{t("projects.demoAccount.copied")}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{t("projects.demoAccount.copy")}</span>
              </>
            )}
          </button>
        </div>

        {/* Role Row */}
        {role && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 py-2 border-b border-border/50 last:border-0">
            <div className="w-24 shrink-0 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              {t("projects.demoAccount.role")}
            </div>
            <div className="flex-1 font-medium text-sm text-primary truncate min-w-0">
              {t(`projects.demoAccount.${role.toLowerCase()}`) || role}
            </div>
            <div className="px-3 py-1.5 opacity-0 pointer-events-none hidden sm:block shrink-0">
              {/* Spacer to align with copy buttons above */}
              <Copy className="w-3.5 h-3.5 inline mr-1" /> Copy
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
