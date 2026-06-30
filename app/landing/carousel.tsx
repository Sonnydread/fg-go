"use client";

import * as React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
const images = [
  "/img/sliders/4x4.png",
  "/img/sliders/super-alva.png",
  "/img/sliders/bra14.jpeg",
 "/img/sliders/bra28.jpeg",
 "/img/sliders/roblox.png",
  "/img/sliders/branding.jpeg",
  "/img/sliders/letrero.jpeg",
  "/img/sliders/lum2.jpeg",
  "/img/sliders/mickey.jpeg",
  "/img/sliders/vin2.jpeg",
 "/img/sliders/vin7.jpeg",
  "/img/sliders/vin23.jpeg",
];
export function AutoScrollCarousel() {
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
          direction: "forward",
        }),
      ]}
      className="w-full bg-[#052914] overflow-hidden"
    >
    <CarouselContent className="-ml-2 py-2">
  {images.map((src, index) => (
    <CarouselItem
      key={index}
      className="pl-2 basis-1/3 md:basis-1/4 lg:basis-[160px]"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl shadow-xl group">
        <Image
          src={src}
          alt={`Proyecto FG GO Publicidad ${index + 1}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={index < 6}
        />
      </div>
    </CarouselItem>
  ))}
</CarouselContent>
    </Carousel>
  );
}