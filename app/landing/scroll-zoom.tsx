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
  { src: "/img/ramdom/gal3.png", range: [-0.06, 0.2, 0.4], className: "md:left-18 md:top-28 top-10 left-12" },
  { src: "/img/ramdom/gal5.jpeg", range: [-0.04, 0.3, 0.5], className: "md:right-20 md:top-32 right-2 top-33" },
  { src: "/img/ramdom/gal4.png", range: [-0.02, 0.4, 0.6], className: "md:left-1/4 md:top-1/2 left-10 top-66" },
  { src: "/img/ramdom/gal7.jpeg", range: [0.3, 0.5, 0.7], className: "right-10 bottom-20" },
  { src: "/img/ramdom/gal9.jpeg", range: [0.4, 0.6, 0.8], className: "left-1/2 top-10" },
  { src: "/img/ramdom/gal1.png", range: [0.5, 0.7, 0.9], className: "md:right-1/3 md:bottom-10 bottom-60 right-34" },
  { src: "/img/ramdom/autoh2.jpeg", range: [0.6, 0.8, 1.0], className: "left-20 bottom-20" },
  { src: "/img/ramdom/gal2.png", range: [0.7, 0.9, 1.1], className: "md:right-10 md:top-10 top-20 right-30" },
  
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
        <div className="w-55 md:w-75 lg:w-95">
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
    <section ref={containerRef} className="h-[400vh] relative bg-linear-to-b from-green-800 to-[#01274f]">
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
          className="absolute inset-0 flex flex-col items-center justify-center z-200"
        >
          <Image
            src="/img/logo/log-reveal.png"
            alt="logo"
            width={520}
            height={320}
            className="mb-6"
          />

          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center px-6 max-w-225">
            Transformamos tu marca con impacto visual
          </h2>
        </motion.div>
      </div>
    </section>
  );
}