"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const videos = [
  "/vid/vid1.mp4",
  "/vid/vid2.mp4",
  "/vid/vid3.mp4",
  "/vid/vid4.mp4",
  "/vid/vid5.mp4",
  "/vid/vid6.mp4",
  "/vid/vid7.mp4",
];

export default function VideoHero() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // ⏱️ Control de cambio cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // 🔄 Reinicia el video cada vez que cambia
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [index]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Videos */}
      <AnimatePresence mode="wait">
        <motion.video
          key={index}
          ref={videoRef}
          src={videos[index]}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay oscuro para contraste */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Contenido encima */}
      <div className="relative z-20 flex-col items-center justify-center h-full text-center px-6">
          <Image
                       src="/img/cars/logo.png"
                       alt="Publicidad exterior"
                       width={600}
                       height={600}
                       className="flex items-center mx-auto pt-[16%] justify-center object-cover"
                     />
        <h1 className="text-white text-4xl md:text-6xl font-bold">
         Presencia real <br /> por donde lo mires
        </h1>

      </div>
    </section>
  );
}