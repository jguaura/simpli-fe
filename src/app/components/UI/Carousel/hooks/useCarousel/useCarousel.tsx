'use client';
import { EmblaCarouselType } from 'embla-carousel-react';
import { useCallback, useState } from 'react';

export const useEnabledCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const onSelectCarousel = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext);
  }, []);

  return { selectedIndex, prevBtnEnabled, nextBtnEnabled, onSelectCarousel };
};
