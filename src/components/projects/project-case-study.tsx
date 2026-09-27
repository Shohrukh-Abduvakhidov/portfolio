"use client";

import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger";
import { ProjectGallery } from "@/components/projects/project-gallery";

import { useLanguage } from "@/i18n/LanguageContext";

interface ProjectCaseStudyProps {
  project: Project;
  nextProject: Project;
}

export function ProjectCaseStudy({ project, nextProject }: ProjectCaseStudyProps) {
  const { t } = useLanguage();
  
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      
      {/* Back to projects */}
      <Reveal>
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> {t("projects.backToProjects")}
        </Link>
      </Reveal>

      {/* Hero Header */}
      <Reveal delay={0.1}>
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">{project.title}</h1>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.status && (
              <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wider">
                {project.status === "Production" ? t("projects.educrm.type").split(" ")[0] : project.status}
              </span>
            )}
            {project.users && (
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider">
                {t(`projects.${project.translationKey || project.slug}.users`) || `Used by ${project.users}`}
              </span>
            )}
            {project.featured && (
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                {t(`projects.${project.translationKey || project.slug}.type`)}
              </span>
            )}
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mt-2">
            {t(`projects.${project.translationKey || project.slug}.tagline`) || project.tagline}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            {project.liveUrl && (
              <Button size="lg" className="rounded-full gap-2 px-8 font-bold" asChild>
                <Link href={project.liveUrl} target="_blank" rel="noreferrer">
                  {t("projects.liveSite")} <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            )}
            {project.githubUrl && project.githubUrl !== "private" && (
              <Button size="lg" variant="outline" className="rounded-full gap-2 px-8 font-bold" asChild>
                <Link href={project.githubUrl} target="_blank" rel="noreferrer">
                  {t("projects.sourceCode")} <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            )}
            {project.githubUrl === "private" && (
              <Button size="lg" variant="outline" className="rounded-full gap-2 px-8 font-bold" disabled>
                <Lock className="w-4 h-4" /> {t("projects.privateRepository")}
              </Button>
            )}
          </div>
        </div>
      </Reveal>

      {/* Compact Project Cover */}
      <Reveal delay={0.2} width="100%">
        <div className="relative w-full max-w-[1000px] aspect-[16/9] mx-auto rounded-3xl overflow-hidden bg-muted/20 border border-border/50 mb-24 shadow-sm p-4 md:p-8 flex items-center justify-center">
          <Image
            src={project.cover}
            alt={`${project.title} Cover`}
            fill
            sizes="(max-width: 1000px) 100vw, 1000px"
            className="object-contain p-4 md:p-8 drop-shadow-lg"
            priority
          />
        </div>
      </Reveal>

      {/* Main Content Sections */}
      <div className="flex flex-col gap-24 mb-32">
        
        {/* Overview */}
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">{t(`projects.${project.translationKey || project.slug}.overview`) || "Project Overview"}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t(`projects.${project.translationKey || project.slug}.description`) || project.description}
            </p>
          </div>
        </Reveal>

        {/* Problem & Solution (EduCRM Specific) */}
        {project.slug === "educrm" && (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
            <StaggerItem>
              <h3 className="text-2xl font-bold mb-4">{t("projects.educrm.problemTitle")}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("projects.educrm.problem")}
              </p>
            </StaggerItem>
            <StaggerItem>
              <h3 className="text-2xl font-bold mb-4">{t("projects.educrm.solutionTitle")}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("projects.educrm.solution")}
              </p>
            </StaggerItem>
          </StaggerContainer>
        )}

        {/* Features */}
        {project.featureGroups && project.featureGroups.length > 0 && (
          <Reveal>
            <div className="space-y-8 max-w-5xl">
              <h2 className="text-3xl font-bold">{t(`projects.${project.translationKey || project.slug}.keyCapabilities`) || "Key Capabilities"}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                {project.featureGroups.map((group, idx) => (
                  <div key={idx} className="p-8 rounded-3xl bg-secondary/20 border border-border hover:border-primary/20 transition-colors h-auto">
                    <h3 className="text-xl font-bold mb-6 text-foreground">
                      {group.id ? (t(`projects.${project.translationKey || project.slug}.featureGroups.${group.id}.title`) || group.groupName) : (t(`projects.${project.translationKey || project.slug}.features.${group.groupName}`) || group.groupName)}
                    </h3>
                    <ul className="space-y-4">
                      {group.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold block text-foreground/90">
                              {feature.id 
                                ? (t(`projects.${project.translationKey || project.slug}.features.${feature.id}.title`) || feature.title) 
                                : (t(`projects.${project.translationKey || project.slug}.features.${feature.title}`) || feature.title)}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {feature.id 
                                ? (t(`projects.${project.translationKey || project.slug}.features.${feature.id}.description`) || feature.description)
                                : (t(`projects.${project.translationKey || project.slug}.features.${feature.title.replace(/\s/g, "")}Desc`) || feature.description)}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* Product Gallery */}
        {project.images && project.images.length > 0 && (
          <Reveal width="100%">
            <div className="space-y-8 pt-8 border-t border-border/50">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold">{t(`projects.${project.translationKey || project.slug}.galleryTitle`) || "Product Gallery"}</h2>
                <p className="text-muted-foreground text-lg mt-2">{t(`projects.${project.translationKey || project.slug}.galleryDesc`) || "Explore the core interfaces and user experience."}</p>
              </div>
              <ProjectGallery images={project.images.map(img => ({
                ...img,
                label: t(`projects.${project.translationKey || project.slug}.gallery.${img.label}`) || img.label,
                description: t(`projects.${project.translationKey || project.slug}.gallery.${img.label.replace(/\s/g, "")}Desc`) || img.description
              }))} />
            </div>
          </Reveal>
        )}

        {/* Omuz AI Section (Ilm_Omuz Specific) */}
        {project.slug === "ilm-omuz" && (
          <Reveal>
            <div className="space-y-6 max-w-4xl pt-8 border-t border-border/50">
              <h2 className="text-3xl font-bold">{t("projects.ilmOmuz.omuzAi")}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t("projects.ilmOmuz.omuzAiDesc")}
              </p>
              <ul className="space-y-3 mt-4 text-muted-foreground list-disc pl-5">
                <li><strong className="text-foreground">{t("projects.ilmOmuz.aiPoints.learning")}</strong> {t("projects.ilmOmuz.aiPoints.learningDesc")}</li>
                <li><strong className="text-foreground">{t("projects.ilmOmuz.aiPoints.qa")}</strong> {t("projects.ilmOmuz.aiPoints.qaDesc")}</li>
                <li><strong className="text-foreground">{t("projects.ilmOmuz.aiPoints.conv")}</strong> {t("projects.ilmOmuz.aiPoints.convDesc")}</li>
                <li><strong className="text-foreground">{t("projects.ilmOmuz.aiPoints.ui")}</strong> {t("projects.ilmOmuz.aiPoints.uiDesc")}</li>
              </ul>
            </div>
          </Reveal>
        )}

        {/* Tech Stack & Challenges Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8 border-t border-border/50">
          
          {/* Tech Stack */}
          <Reveal>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">{t(`projects.${project.translationKey || project.slug}.techStack`) || "Architecture & Tech Stack"}</h2>
              
              {project.stackGroups && project.stackGroups.length > 0 ? (
                <div className="space-y-4">
                  {project.stackGroups.map((group, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{t(`skills.${group.groupName.toLowerCase()}`) || group.groupName}</span>
                      <div className="flex flex-wrap gap-2">
                        {group.technologies.map((tech) => (
                          <span key={tech} className="px-4 py-2 rounded-xl bg-card border border-border text-sm font-semibold shadow-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-4 py-2 rounded-xl bg-card border border-border text-sm font-semibold shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              <p className="text-muted-foreground leading-relaxed mt-4">
                {t(`projects.${project.translationKey || project.slug}.techDesc`)}
              </p>
            </div>
          </Reveal>

          {/* Technical Challenges */}
          {project.technicalChallenges && project.technicalChallenges.length > 0 && (
            <Reveal>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">{t(`projects.${project.translationKey || project.slug}.challengesTitle`) || t(`projects.${project.translationKey || project.slug}.challenges`) || "Engineering Challenges"}</h2>
                
                {/* Check if any challenge has an ID or challengeText to render detailed view */}
                {project.technicalChallenges.some(c => c.id || c.challengeText) ? (
                  <div className="space-y-6">
                    {project.technicalChallenges.map((challenge, idx) => (
                      <div key={idx} className="space-y-2 bg-secondary/10 p-5 rounded-2xl border border-border/50">
                        <h3 className="font-bold text-lg text-foreground">
                          {challenge.id 
                            ? t(`projects.${project.translationKey || project.slug}.challenges.${challenge.id}.title`)
                            : challenge.title}
                        </h3>
                        <div className="space-y-3 mt-3">
                          <div>
                            <span className="text-sm font-bold uppercase tracking-wider text-primary block mb-1">{t("projects.challenge") || "Challenge"}</span>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {challenge.id 
                                ? t(`projects.${project.translationKey || project.slug}.challenges.${challenge.id}.challenge`)
                                : challenge.challengeText}
                            </p>
                          </div>
                          <div>
                            <span className="text-sm font-bold uppercase tracking-wider text-green-500 block mb-1">{t("projects.solution") || "Solution"}</span>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                              {challenge.id 
                                ? t(`projects.${project.translationKey || project.slug}.challenges.${challenge.id}.solution`)
                                : challenge.solutionText}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-3">
                    {project.technicalChallenges.map((challenge, idx) => (
                      <div key={idx} className="px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm font-medium text-foreground">
                        {challenge.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Reveal>
          )}

        </div>

      </div>

      {/* Footer CTA */}
      <Reveal width="100%">
         <div className="py-24 border-y border-border/50 flex flex-col items-center justify-center text-center gap-6 bg-secondary/10 rounded-3xl mb-24">
            <h2 className="text-3xl md:text-5xl font-bold">{t("projects.readyToSee")}</h2>
            {project.liveUrl && (
              <Button size="lg" className="rounded-full gap-2 mt-4 font-bold px-8" asChild>
                <Link href={project.liveUrl} target="_blank" rel="noreferrer">
                  {t("projects.visit")} {project.title} <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            )}
         </div>
      </Reveal>

      {/* Next Project Nav */}
      <Reveal width="100%">
         <div className="flex flex-col items-center justify-center text-center gap-6">
            <p className="text-muted-foreground uppercase tracking-wider text-sm font-bold">{t("projects.upNext")}</p>
            <h2 className="text-4xl md:text-5xl font-bold">{nextProject.title}</h2>
            <Button size="lg" variant="outline" className="rounded-full gap-2 mt-2 font-bold px-8" asChild>
              <Link href={`/projects/${nextProject.slug}`}>
                {t("projects.viewCaseStudy")} <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
         </div>
      </Reveal>
    </div>
  );
}
