"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import type { Project } from "./carousel-compo";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ModalHogar({ isOpen, onClose, project }: Props) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[99999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Centrado + padding (ya existía p-4, lo respetamos) */}
          <div className="absolute inset-0 flex items-center justify-center p-3 md:p-4">
            <motion.div
              initial={{ scale: 0.95, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 40 }}
              className="
                bg-white w-full max-w-6xl 
                rounded-2xl md:rounded-3xl 
                overflow-hidden shadow-2xl relative 
                max-h-[92vh] md:max-h-[95vh] 
                flex flex-col
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <button
                onClick={onClose}
                className="
                  absolute top-3 right-3 md:top-4 md:right-4 
                  z-50 flex h-9 w-9 md:h-10 md:w-10 
                  items-center justify-center rounded-full 
                  bg-black/70 text-white hover:bg-black/90 
                  transition-colors
                "
              >
                <X size={20} className="md:hidden" />
                <X size={24} className="hidden md:block" />
              </button>

              {/* Contenido scrolleable en mobile */}
              <div className="grid md:grid-cols-2 flex-1 min-h-0 overflow-y-auto">
                
                {/* Columna izquierda - Imagen principal */}
                <div className="relative h-[260px] sm:h-[320px] md:h-auto md:min-h-[600px] bg-black shrink-0">
                  <Image
                    src={project.gallery?.[0] || project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Columna derecha - Galería más compacta */}
                <div className="flex flex-col overflow-hidden">
                  <div className="grid grid-rows-2 flex-1 min-h-[360px] md:min-h-0">
                    {/* Imagen superior */}
                    <div className="relative overflow-hidden min-h-[180px] md:min-h-0">
                      <Image
                        src={project.gallery?.[1] || project.image}
                        alt={`${project.title} - vista 1`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Imagen inferior */}
                    <div className="relative overflow-hidden min-h-[180px] md:min-h-0">
                      <Image
                        src={project.gallery?.[2] || project.image}
                        alt={`${project.title} - vista 2`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}