"use client";

import * as React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../../components/ui/carousel";
const images = [
  "/img/splinter/splinter1.jpeg",
  "/img/splinter/splinter2.jpeg",
  "/img/splinter/splinter3.jpeg",
  "/img/splinter/splinter4.jpeg",
  "/img/splinter/splinter5.jpeg",
  "/img/splinter/splinter6.jpeg",
  "/img/splinter/splinter7.jpeg",
  "/img/splinter/splinter8.jpeg",
  "/img/splinter/splinter3.jpeg",
  "/img/splinter/splinter1.jpeg",
  "/img/splinter/splinter9.jpeg",
  "/img/splinter/splinter4.jpeg",
  "/img/splinter/splinter10.jpeg",
  "/img/splinter/splinter11.jpeg",
  "/img/splinter/splinter12.jpeg",
  "/img/splinter/splinter2.jpeg",
];
export function SecondCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
      plugins={[
        AutoScroll({
          speed: 1.5,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
          direction: "backward",
        }),
      ]}
      className="w-full bg-[#041c0e] overflow-hidden"
    >
      <CarouselContent className="-ml-2 py-2">
        {images.map((src, index) => (
          <CarouselItem key={index} className="pl-2 basis-1/3 md:basis-1/4 lg:basis-[160px]">
            <div className="relative aspect-square overflow-hidden rounded-xl shadow-xl group">
              <Image src={src} alt={`Proyecto FG GO Publicidad ${index + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" priority={index < 6} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
