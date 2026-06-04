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

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Reinicia y reproduce el video al cambiar
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [index]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Videos con transición suave */}
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
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido principal */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        <Image
          src="/img/cars/logo.png"
          alt="Publicidad exterior"
          width={400}
          height={400}
          className="mx-auto pt-[8%] md:pt-[2%] object-contain"
          priority
        />
        <h1 className="text-white text-4xl md:text-4xl font-bold mt-6 leading-tight">
          Presencia real <br /> por donde lo mires
        </h1>
      </div>

      {/* === DIVISOR GEOMÉTRICO SUTIL EN LA PARTE INFERIOR === */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[90px] md:h-[110px] lg:h-[120px]"
          preserveAspectRatio="none"
          fill="white"   // ← Color del siguiente fondo (cámbialo si tu siguiente sección es diferente)
        >
          <polygon points="0,120 0,65 360,92 720,48 1080,88 1440,60 1440,120" />
        </svg>
      </div>
    </section>
  );
}