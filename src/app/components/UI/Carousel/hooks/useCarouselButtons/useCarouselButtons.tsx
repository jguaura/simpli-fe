"use client"
import { useCallback } from "react";

export const useCarouselControls = (emblaApi: any) => {
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return { scrollPrev, scrollNext };
};
