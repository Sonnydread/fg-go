"use client";

import * as React from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Lista de tus imágenes reales (agrega o quita las que necesites)
const images = [
  "/img/4x4.png",
  "/img/allyouneed.png",
  "/img/letlum.jpg",
  "/img/pump.png",
  "/img/camioneta.png",
  "/img/neon.jpg",
  "/img/logofb.jpg",
  "/img/letre.png",
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
          speed: 1.5,              // Velocidad moderada (ajusta: más alto = más rápido)
          stopOnInteraction: false,
          stopOnMouseEnter: true,  // Pausa al pasar el mouse (mejora UX)
          direction: "forward",
        }),
      ]}
      className="w-full bg-[#013c1d] overflow-hidden"
    >
      <CarouselContent className="-ml-4 py-4">
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-xl group">
              <Image
                src={src}
                alt={`Proyecto FG GO Publicidad ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={index < 6} // Prioridad para las primeras imágenes visibles
              />

              {/* Overlay sutil en hover para efecto premium */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Texto opcional en hover (puedes quitarlo si prefieres solo imagen) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-sm font-medium">Proyecto destacado</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}