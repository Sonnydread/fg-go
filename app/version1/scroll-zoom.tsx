"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useMotionTemplate,
} from "framer-motion";

interface ImgItem {
  src: string;
  range: [number, number, number];
  className: string;
}

const images: ImgItem[] = [
  { src: "/img/cars/autoh2.jpeg", range: [0.0, 0.2, 0.4], className: "left-10 top-20" },
  { src: "/img/cars/autoh5.jpeg", range: [0.1, 0.3, 0.5], className: "right-20 top-32" },
  { src: "/img/cars/autoh20.jpeg", range: [0.2, 0.4, 0.6], className: "left-1/4 top-1/2" },
  { src: "/img/cars/autoh20.jpeg", range: [0.3, 0.5, 0.7], className: "right-10 bottom-20" },
  { src: "/img/cars/autoh20.jpeg", range: [0.4, 0.6, 0.8], className: "left-1/2 top-10" },
  { src: "/img/cars/autoh20.jpeg", range: [0.5, 0.7, 0.9], className: "right-1/3 bottom-10" },
  { src: "/img/cars/autoh20.jpeg", range: [0.6, 0.8, 1.0], className: "left-20 bottom-20" },
  { src: "/img/cars/autoh20.jpeg", range: [0.7, 0.9, 1.1], className: "right-10 top-10" },
  { src: "/img/cars/autoh20.jpeg", range: [0.8, 1.0, 1.2], className: "left-1/3 top-1/3" },
];

function AnimatedImage({
  src,
  progress,
  range,
  className,
  index,
}: {
  src: string;
  progress: MotionValue<number>;
  range: [number, number, number];
  className: string;
  index: number;
}) {
  // 🎬 Animación base
  const scale = useTransform(progress, range, [0.6, 1.2, 2]);
  const opacity = useTransform(progress, range, [0, 1, 0]);
  const y = useTransform(progress, range, [120, 0, -250]);

  // 💥 COLAPSO FINAL
  const collapseScale = useTransform(progress, [0.75, 1], [1, 0]);
  const collapseOpacity = useTransform(progress, [0.75, 1], [1, 0]);

  const blur = useTransform(progress, range, [10, 0, 10]);
  const filter = useMotionTemplate`blur(${blur}px)`;

  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        scale: collapseScale,
        opacity: collapseOpacity,
        y,
        zIndex: 10 + index,
        filter,
        willChange: "transform, opacity",
      }}
    >
      <motion.div style={{ scale, opacity }}>
        <div className="w-[220px] md:w-[300px] lg:w-[380px]">
          <Image
            src={src}
            alt="visual"
            width={400}
            height={400}
            className="w-full h-auto object-cover rounded-xl shadow-2xl"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ScrollZoomGallery() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 🎯 LOGO FINAL (cinematográfico)
  const textOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const textScale = useTransform(scrollYProgress, [0.8, 1], [0.6, 1]);
  const textY = useTransform(scrollYProgress, [0.8, 1], [100, 0]);

  return (
    <section ref={containerRef} className="h-[400vh] relative bg-white">
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* 🎬 IMÁGENES */}
        {images.map((img, i) => (
          <AnimatedImage
            key={i}
            src={img.src}
            progress={scrollYProgress}
            range={img.range}
            className={img.className}
            index={i}
          />
        ))}

        {/* 💥 REVEAL FINAL */}
        <motion.div
          style={{
            opacity: textOpacity,
            scale: textScale,
            y: textY,
          }}
          className="absolute inset-0 flex flex-col items-center justify-center z-[200]"
        >
          <Image
            src="/img/cars/logo.png"
            alt="logo"
            width={320}
            height={320}
            className="mb-6"
          />

          <h2 className="text-black text-3xl md:text-5xl lg:text-6xl font-bold text-center px-6 max-w-[900px]">
            Transformamos tu marca con impacto visual
          </h2>
        </motion.div>
      </div>
    </section>
  );
}