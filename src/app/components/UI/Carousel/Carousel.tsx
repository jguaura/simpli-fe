'use client';

import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType
} from 'embla-carousel-react';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { useEnabledCarousel } from './hooks/useCarousel/useCarousel';
import Autoplay from 'embla-carousel-autoplay';

interface CarouselProps {
  options?: EmblaOptionsType;
  images: string[];
}

function Carousel({ options, images }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const { onSelectCarousel } =
    useEnabledCarousel();

  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const imageByIndex = (index: number): string => images[index % images.length];
  const slideCount = images.length;
  const slides = Array.from(Array(slideCount).keys());

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelectCarousel(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelectCarousel);
    emblaApi.on('select', onSelectCarousel);
  }, [emblaApi, onInit, onSelectCarousel]);

  return (
    <>
      <div className='embla relative'>
        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container'>
            {slides.map((index) => (
              <div className='embla__slide' key={index}>
                <div className='embla__slide__wrapper'>
                  <Image
                    className='embla__slide__img'
                    src={imageByIndex(index)}
                    alt='product image'
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
