"use client";

import * as React from "react";
import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function AutoScrollCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        AutoScroll({
          speed: 1.5,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        {[...Array(10)].map((_, i) => (
          <CarouselItem key={i} className="basis-1/3">
            <div className="h-40 bg-zinc-200 flex items-center justify-center rounded-xl">
              Item {i + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
