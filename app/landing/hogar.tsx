"use client";

import { motion, PanInfo, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const projects = [
  { id: 1, title: "Cuadros", subtitle: "Inmobiliaria", image: "/img/hogar/cuadros.png" },
  { id: 2, title: "Vinil Adhesivo", subtitle: "Servicios Generales", image: "/img/hogar/cocina.png" },
  { id: 3, title: "Stickers", subtitle: "Taller Automotriz", image: "/img/hogar/vin5.jpeg" },
  { id: 4, title: "Letras Block", subtitle: "Escuela de Buceo", image: "/img/hogar/casados.jpg" },
  { id: 5, title: "Brandeo de paredes", subtitle: "Servicios Generales", image: "/img/hogar/avengers.jpg" },
  { id: 6, title: "Brandeo vehicular", subtitle: "Taller Automotriz", image: "/img/hogar/camioneta.png" },
  { id: 7, title: "Personalizados", subtitle: "Escuela de Buceo", image: "/img/hogar/letras-block.jpg" },
]

export default function Hogar() {
  const [current, setCurrent] = useState(2);
  const [direction, setDirection] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 🔁 Autoplay
  useEffect(() => {
    if (isDragging) return;

    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 4800);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isDragging]);

  // 🧠 Posición relativa
  const getRelativePosition = (index: number) => {
    let diff = index - current;

    if (diff > projects.length / 2) diff -= projects.length;
    if (diff < -projects.length / 2) diff += projects.length;

    return diff;
  };

  // 🖐️ Drag handler
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false);

    const threshold = 80;

    if (info.offset.x < -threshold) {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % projects.length);
    } else if (info.offset.x > threshold) {
      setDirection(-1);
      setCurrent((prev) =>
        prev === 0 ? projects.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="hogar" className="w-full min-h-screen flex items-center justify-center py-40 bg-gradient-to-b from-blue-700 to-green-900 relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 relative w-full">

        {/* Título */}
        <div className="text-start max-w-[80%] ml-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
           Hogar y trabajos personalizados
          </h2>
          <p className="text-white/70 text-2xl mt-4">
           Diseñamos piezas únicas y soluciones visuales personalizadas para hogares, oficinas y proyectos especiales, combinando creatividad, detalle y acabados de alta calidad para transformar cualquier espacio en algo cálido y original.
          </p>
        </div>

        {/* 🖐️ DRAG CONTAINER */}
        <motion.div
          className="relative w-full h-[620px] flex items-center justify-center perspective-[2000px]"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
        >
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => {
              const position = getRelativePosition(index);

              if (Math.abs(position) > 2) return null;

              const isCenter = position === 0;

              return (
                <motion.div
                  key={project.id}
                  initial={{
                    x: direction > 0 ? 800 : -800,
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    x: position * 380,
                    rotateY: position * -32,
                    scale: isCenter ? 1 : 0.8,
                    translateZ: isCenter ? 180 : -60,
                    opacity: 1,
                    zIndex: 30 - Math.abs(position) * 5,
                  }}
                  exit={{
                    x: direction > 0 ? -800 : 800,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute w-[560px] md:w-[620px] aspect-[16/10.5] rounded-3xl overflow-hidden border border-white/10 bg-white cursor-grab active:cursor-grabbing"
                  style={{
                    transformStyle: "preserve-3d",
                    filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.6))",
                  }}
                >
                  <div className="relative w-full h-full pointer-events-none">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                      <div className="flex items-end justify-between">
                        <div>
                          <h3 className="text-3xl font-semibold leading-none">
                            {project.title}
                          </h3>
                          <p className="text-white/80 text-lg mt-2">
                            {project.subtitle}
                          </p>
                        </div>

                        <button className="px-8 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 text-base font-medium flex items-center gap-2">
                          Ver <span className="text-xl">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Indicadores */}
        <div className="flex justify-center gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`h-3 rounded-full transition-all duration-500 ${
                current === index
                  ? "w-10 bg-[#36c37f] shadow-[0_0_20px_#00d4ff]"
                  : "w-3 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}