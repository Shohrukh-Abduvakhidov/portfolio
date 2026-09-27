"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  label: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Embla for thumbnails
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
  }, [selectedIndex]);

  const scrollNext = useCallback(() => {
    if (selectedIndex < images.length - 1) setSelectedIndex(selectedIndex + 1);
  }, [selectedIndex, images.length]);

  const onThumbClick = useCallback(
    (index: number) => {
      setSelectedIndex(index);
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (emblaApi) emblaApi.scrollTo(selectedIndex);
  }, [selectedIndex, emblaApi]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
      if (e.key === "Escape") setIsFullscreen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollPrev, scrollNext]);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Header / Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold">{images[selectedIndex].label}</h3>
          <p className="text-sm text-muted-foreground font-mono">
            {String(selectedIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            disabled={selectedIndex === 0}
            className="rounded-full"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            disabled={selectedIndex === images.length - 1}
            className="rounded-full"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-2xl md:rounded-[2rem] overflow-hidden border border-border shadow-lg bg-muted/30">
          {/* Browser Chrome */}
          <div className="absolute top-0 w-full h-8 md:h-10 bg-background/50 border-b border-border/50 flex items-center px-4 md:px-6 gap-2 backdrop-blur-md z-20">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-destructive/80" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80" />
          </div>

          <div className="absolute inset-0 top-8 md:top-10 bg-secondary/10 flex items-center justify-center p-2 sm:p-4 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full cursor-zoom-in"
                onClick={() => setIsFullscreen(true)}
              >
                <Image
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].label}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-contain drop-shadow-sm"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Maximize Button */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute bottom-4 right-4 z-30 rounded-full opacity-70 hover:opacity-100 shadow-md"
            onClick={() => setIsFullscreen(true)}
          >
            <Maximize2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Thumbnails (Embla Carousel) */}
      <div className="w-full max-w-[1200px] mx-auto overflow-hidden mt-2" ref={emblaRef}>
        <div className="flex gap-3 px-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onThumbClick(idx)}
              className={cn(
                "relative flex-shrink-0 basis-[45%] sm:basis-[30%] md:basis-[20%] lg:basis-[15%] aspect-video rounded-xl overflow-hidden border-2 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                selectedIndex === idx
                  ? "border-primary shadow-sm"
                  : "border-border/40 opacity-60 hover:opacity-100 hover:border-border/80"
              )}
            >
              <Image src={img.src} alt={img.label} fill sizes="300px" className="object-cover" />
              <div
                className={cn(
                  "absolute inset-0 bg-background/90 flex items-center justify-center p-2 text-center text-xs font-medium transition-colors backdrop-blur-sm",
                  selectedIndex === idx ? "bg-transparent/0 opacity-0" : "opacity-100"
                )}
              >
                {img.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Dialog */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8"
          >
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-[110] rounded-full bg-background"
              onClick={() => setIsFullscreen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
            
            <div className="absolute top-1/2 left-4 -translate-y-1/2 z-[110]">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                disabled={selectedIndex === 0}
                className="rounded-full bg-background"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="absolute top-1/2 right-4 -translate-y-1/2 z-[110]">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                disabled={selectedIndex === images.length - 1}
                className="rounded-full bg-background"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-[90vw] h-full max-h-[90vh]"
            >
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].label}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full border border-border shadow-lg">
              <span className="text-sm font-semibold">{images[selectedIndex].label}</span>
              <span className="mx-2 text-border">|</span>
              <span className="text-sm text-muted-foreground">
                {selectedIndex + 1} of {images.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
