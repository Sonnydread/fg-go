"use client";
import { motion, PanInfo, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import ModalHogar from "./modal-hogar";

export interface Project {
  // ← Agrega "export"
  id: number;
  title: string;
  subtitle: string;
  image: string;
  gallery: string[];
  description?: string;
}

const projects: Project[] = [
  { 
    id: 1, 
    title: "Cuadros", 
    subtitle: "Inmobiliaria", 
    image: "/img/hogar/cuadros.png",
    gallery: ["/img/brandeo/brandeo9.png", "/img/hogar/cuadro1.jpeg", "/img/hogar/cuadro2.jpeg"]
  },
  { 
    id: 2, 
    title: "Vinil Adhesivo", 
    subtitle: "Servicios Generales", 
    image: "/img/hogar/cocina.png",
    gallery: ["/img/hogar/vinilo2.jpeg", "/img/hogar/vinilo1.jpeg", "/img/hogar/vinilo3.jpeg"]
  },
  { 
    id: 3, 
    title: "Stickers", 
    subtitle: "Taller Automotriz", 
    image: "/img/hogar/vin5.jpeg",
    gallery: ["/img/hogar/stickers1.jpeg", "/img/hogar/stickers2.jpeg", "/img/hogar/stickers3.jpeg"]
  },
  { 
    id: 4, 
    title: "Letras Block", 
    subtitle: "Escuela de Buceo", 
    image: "/img/hogar/casados.jpg",
     gallery: ["/img/hogar/block1.jpeg", "/img/hogar/block2.jpeg", "/img/hogar/block3.jpeg"]
  },
  { 
    id: 5, 
    title: "Brandeo de paredes", 
    subtitle: "Servicios Generales", 
    image: "/img/hogar/avengers.jpg",
     gallery: ["/img/hogar/pared1.jpg", "/img/hogar/pared2.png", "/img/hogar/pared3.jpeg"]
  },
  { 
    id: 6, 
    title: "Brandeo vehicular", 
    subtitle: "Taller Automotriz", 
    image: "/img/hogar/camioneta.png",
     gallery: ["/img/hogar/brandeo2.jpeg", "/img/hogar/brandeo1.jpeg", "/img/hogar/brandeo3.jpeg"]
  },
  { 
    id: 7, 
    title: "Personalizados", 
    subtitle: "Escuela de Buceo", 
    image: "/img/hogar/letras-block.jpg",
     gallery: ["/img/hogar/personalizado3.jpeg", "/img/hogar/personalizado2.jpeg", "/img/hogar/personalizado1.png"]
  },
];

export default function Hogar() {
  const [current, setCurrent] = useState(2);
  const [direction, setDirection] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay
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

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const getRelativePosition = (index: number) => {
    let diff = index - current;
    if (diff > projects.length / 2) diff -= projects.length;
    if (diff < -projects.length / 2) diff += projects.length;
    return diff;
  };

  // ✅ Corregido aquí
  const handleDragEnd = (_: unknown, info: PanInfo) => {
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
    <section id="hogar" className="w-full min-h-screen flex items-center justify-center md:py-40 py-20 bg-linear-to-b from-blue-700 to-green-900 relative overflow-hidden">
      <div className="max-w-450 mx-auto relative w-full">

        {/* Título */}
        <div className="text-start md:px-30 px-6"> 
          <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter">
            Hogar y trabajos personalizados
          </h2>
          <p className="text-white/80 font-semibold tracking-tighter md:text-2xl text-base mt-4">
            Diseñamos piezas únicas y soluciones visuales personalizadas para hogares, oficinas y proyectos especiales, combinando creatividad, detalle y acabados de alta calidad para transformar cualquier espacio en algo cálido y original.
          </p>
        </div>

        {/* Carrusel */}
        <motion.div
          className="relative w-full md:h-155 h-100 flex items-center justify-center perspective-[2000px]"
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
                  initial={{ x: direction > 0 ? 800 : -800, opacity: 0, scale: 0.8 }}
                  animate={{
                    x: position * 380,
                    rotateY: position * -32,
                    scale: isCenter ? 1 : 0.8,
                    translateZ: isCenter ? 180 : -60,
                    opacity: 1,
                    zIndex: 30 - Math.abs(position) * 5,
                  }}
                  exit={{ x: direction > 0 ? -800 : 800, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute w-90 md:w-155 aspect-[16/10.5] rounded-3xl overflow-hidden border border-white/10 bg-white cursor-grab active:cursor-grabbing"
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
                      className="object-cover md:opacity-100 opacity-70 pointer-events-none"
                    />

                    <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-linear-to-t from-black/90 via-black/60 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                      <div className="flex items-end justify-between">
                        <div>
                         <h3 className="md:text-3xl text-lg font-black md:font-semibold leading-none">{project.title}</h3>
                        <p className="md:text-white/80 text-white md:text-lg md:block hidden text-base mt-2">{project.subtitle}</p>
                        </div>

                        <button 
                          onClick={() => handleOpenModal(project)}
                          className="pointer-events-auto md:px-8 px-2 md:py-3 py-1 cursor-pointer rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 md:flex hidden md:text-base text-sm text-nowrap font-medium items-center gap-2 z-20"
                        >
                          Ver <span className="text-xl">→</span>
                        </button>
                           <button 
                          onClick={() => handleOpenModal(project)}
                          className="pointer-events-auto md:hidden md:px-8 px-2 md:py-3 py-1 cursor-pointer rounded-md bg-white/10 backdrop-blur-md border border-white/30 md:text-base text-sm text-nowrap font-medium flex items-center gap-2 z-20"
                        >
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
                  ? "w-20 bg-[#36c37f] shadow-[0_0_20px_#00d4ff]"
                  : "w-3 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
  <ModalHogar 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        project={selectedProject} 
      />
    </section>
  );
}