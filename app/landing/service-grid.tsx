"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const categories = [
  {
    id: 1,
    title: "Branding Estratégico",
    description: "Identidad visual completa, logotipos, manual de marca y estrategias de posicionamiento.",
    image: "/img/grid/fro21.jpeg",
  },
  {
    id: 2,
    title: "Diseño Interior",
    description: "Espacios residenciales y comerciales funcionales, elegantes y alineados con tu estilo de vida.",
    image: "/img/grid/fro41.jpeg",
  },
  {
    id: 3,
    title: "Diseño Exterior",
    description: "Fachadas, paisajismo y arquitectura exterior que generan impacto y armonía con el entorno.",
    image: "/img/grid/lum24.jpeg",
  },
  {
    id: 4,
    title: "Diseño de Hogar",
    description: "Transformamos tu casa en un espacio acogedor, moderno y perfectamente organizado.",
    image: "/img/grid/lum31.jpeg",
  },
  {
    id: 5,
    title: "Diseño para Empresas",
    description: "Oficinas, locales comerciales y entornos corporativos que reflejan la cultura de tu marca.",
    image: "/img/grid/raspadilla.jpeg",
  },
  {
    id: 6,
    title: "Experiencias & Retail",
    description: "Diseño de stands, tiendas y espacios experienciales que conectan con el cliente.",
    image: "/img/grid/vin19.jpeg",
  },
];

export default function ServicesGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-blue-700 to-green-900">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-start mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">    Hogar y trabajos personalizados</h2>
          <h2 className="text-4xl md:text-xl font-bold text-white leading-tight">
            Diseñamos piezas únicas y soluciones visuales personalizadas para hogares, oficinas y proyectos especiales, combinando creatividad, detalle y acabados de alta calidad para transformar cualquier espacio en algo auténtico y memorable.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              onHoverStart={() => setHoveredId(category.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              {/* Contenedor con overflow-hidden para evitar espacios vacíos */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: hoveredId === category.id ? 1.15 : 1.12,   // imagen siempre más grande que el contenedor
                    x: hoveredId === category.id ? 22 : 0,
                    y: hoveredId === category.id ? -22 : 0,
                  }}
                  transition={{ duration: 0.7, ease: [0.4, 0.0, 0.2, 1] }}
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              </div>

              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Bloque de texto */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <motion.div
                  className={`rounded-2xl p-6 transition-all duration-300 ${
                    hoveredId === category.id
                      ? "backdrop-blur-md bg-white/10 border border-white/20"
                      : "bg-transparent"
                  }`}
                  animate={{ y: hoveredId === category.id ? -12 : 0 }}
                >
                  <h3 className="text-white text-2xl md:text-3xl font-semibold leading-tight mb-3">
                    {category.title}
                  </h3>

                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredId === category.id ? 1 : 0,
                      height: hoveredId === category.id ? "auto" : 0,
                    }}
                    transition={{ duration: 0.45 }}
                    className="text-white/90 text-[15px] leading-relaxed overflow-hidden"
                  >
                    {category.description}
                  </motion.p>
                </motion.div>
              </div>

              {/* Brillo sutil */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}