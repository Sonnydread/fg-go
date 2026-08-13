"use client";

import { motion, PanInfo, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ModalCorporativo from "./modal-corporativo";

export interface Project {
  // ← Agrega "export"
  id: number;
  title: string;
  subtitle: string;
  image: string;
  gallery: string[];
  description?: string;
}

// interface Props {
//   isOpen: boolean;
//   onClose: () => void;
//   project: Project | null;
// }

const projects: Project[] = [
  {
    id: 1,
    title: "Letreros luminosos",
    subtitle: "Visibilidad impactante día y noche",

    image: "/img/corporativos/luminoso.png",

    gallery: ["/img/corporativos/lum111.jpeg", "/img/corporativos/lum31.jpeg", "/img/corporativos/lum112.jpeg", "/img/corporativos/lum3.jpeg"],

    description: "Descripción del proyecto...",
  },
  {
    id: 2,
    title: "Brandeo Vehicular Corporativo",
    subtitle: "Tu marca en movimiento",
    image: "/img/corporativos/brad-vehi.jpeg",
    gallery: ["/img/corporativos/carrovin2.png", "/img/corporativos/carrovi1.png", "/img/corporativos/carrovin3.png", "/img/corporativos/carrovin4.jpeg"],

    description: "Descripción del proyecto...",
  },
  {
    id: 3,
    title: "Plumas Publicitarias",
    subtitle: "Publicidad visible en exteriores",
    image: "/img/corporativos/banderola.png",
    gallery: ["/img/corporativos/banderol4.jpg", "/img/corporativos/banderol1.jpg", "/img/corporativos/banderol3.png", "/img/corporativos/banderol2.jpg"],
    description: "Descripción del proyecto...",
  },
  {
    id: 4,
    title: "Viniles Adhesivos",
    subtitle: "Gráficos personalizados para superficies",
    image: "/img/corporativos/vin.png",
    gallery: ["/img/corporativos/vin1.jpeg", "/img/corporativos/vin399.jpeg", "/img/corporativos/vin21.jpeg", "/img/corporativos/vin39.jpeg"],
    description: "Descripción del proyecto...",
  },
  { id: 5, title: "Bastidores", subtitle: "Estructuras resistentes para publicidad", image: "/img/corporativos/raspa.png", gallery: ["/img/corporativos/bast3.jpeg", "/img/corporativos/bast2.jpeg", "/img/corporativos/bast4.jpeg", "/img/corporativos/bast5.jpeg"], description: "Descripción del proyecto..." },
  { id: 6, title: "Letras block", subtitle: "Volúmen y presencia corporativa", image: "/img/corporativos/le-block.jpg", gallery: ["/img/corporativos/letra1.jpeg", "/img/corporativos/letra2.jpeg", "/img/corporativos/letra3.jpeg", "/img/corporativos/letra4.jpeg"], description: "Descripción del proyecto..." },
  { id: 7, title: "Stickers", subtitle: "Creativo para cualquier superficie", image: "/img/corporativos/vin19.jpeg", gallery: ["/img/corporativos/stick1.jpeg", "/img/corporativos/stick4.jpeg", "/img/corporativos/stick3.jpeg", "/img/corporativos/stick2.jpeg"], description: "Descripción del proyecto..." },
    {
    id: 8,
    title: "Brandeo Vehicular Personalizado",
    subtitle: "Personaliza tu marca",
    image: "/img/brandeo/brandeo1.png",
    gallery: ["/img/brandeo/brandeo10.jpeg", "/img/brandeo/brandeo3.jpg", "/img/brandeo/brandeo2.png", "/img/brandeo/brandeo8.jpg"],

    description: "Descripción del proyecto...",
  },
  { id: 9, title: "Acrílicos", subtitle: "Elegancia y acabado profesional", image: "/img/corporativos/acri.jpg", gallery: ["/img/corporativos/acri23.jpeg", "/img/corporativos/acri24.jpeg", "/img/corporativos/acri25.jpeg", "/img/corporativos/acri22.jpeg"], description: "Descripción del proyecto..." },
];

export default function Carousel() {
  const [current, setCurrent] = useState(2);
  const [direction, setDirection] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 🔁 Autoplay
  useEffect(() => {
    if (isDragging) return;

    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 2400);

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
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);

    const threshold = 80;

    if (info.offset.x < -threshold) {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % projects.length);
    } else if (info.offset.x > threshold) {
      setDirection(-1);
      setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    }
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="corporativos" className="w-full min-h-screen flex items-center justify-center md:pt-60 bg-green-700 relative overflow-hidden">
        <div className="max-w-450 mx-auto relative w-full">
          {/* Título */}
          <div className="text-start md:px-30 px-6">
            <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter">Proyectos Corporativos que Impulsan Marcas</h2>
            <p className="text-white/80 md:text-2xl text-base font-semibold mt-4 tracking-tighter">Diseñamos soluciones visuales de alto impacto para empresas que buscan destacar, conectar y fortalecer su presencia de marca en cada espacio.</p>
          </div>

          {/* 🖐️ DRAG CONTAINER */}
          <motion.div className="relative w-full md:h-155 h-100 flex items-center justify-center perspective-[2000px]" drag="x" dragConstraints={{ left: 0, right: 0 }} onDragStart={() => setIsDragging(true)} onDragEnd={handleDragEnd}>
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
                    className="absolute w-90 md:w-155 aspect-[16/10.5] rounded-3xl overflow-hidden border border-white/10 bg-white cursor-grab"
                    style={{
                      transformStyle: "preserve-3d",
                      filter: "drop-shadow(0 40px 60px rgba(0,0,0,0.6))",
                    }}
                  >
                    <div className="relative w-full h-full pointer-events-none">
                      <Image src={project.image} alt={project.title} fill className="object-cover md:opacity-100 opacity-70" />

                      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-linear-to-t from-black/90 via-black/60 to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                        <div className="flex items-end justify-between">
                          <div>
                            <h3 className="md:text-3xl text-lg font-black md:font-semibold leading-none">{project.title}</h3>
                            <p className="md:text-white/80 text-white md:text-lg md:block hidden text-base mt-2">{project.subtitle}</p>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openModal(project);
                            }}
                            className="pointer-events-auto md:px-8 px-2 md:py-3 py-1 cursor-pointer rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 md:flex hidden md:text-base text-sm text-nowrap font-medium items-center gap-2 z-20"
                          >
                            Ver más imágenes
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openModal(project);
                            }}
                            className="pointer-events-auto md:hidden md:px-8 px-2 md:py-3 py-1 cursor-pointer rounded-md bg-white/10 backdrop-blur-md border border-white/30 md:text-base text-sm text-nowrap font-medium flex items-center gap-2 z-20"
                          >
                            Ver más
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
          <div className="flex justify-center gap-3 mb-20">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`h-3 rounded-full transition-all duration-500 ${current === index ? "w-20 bg-[#36c37f] shadow-[0_0_20px_#00d4ff]" : "w-3 bg-white/30 hover:bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </section>
      <ModalCorporativo isOpen={isModalOpen} onClose={closeModal} project={selectedProject} />
    </>
  );
}
