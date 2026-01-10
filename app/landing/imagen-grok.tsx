"use client";

// components/WatercolorSection.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { ReactNode } from 'react';

interface WatercolorSectionProps {
  title: string;
  logo?: string;           // ruta del logo (puedes usar también <Image>)
  children?: ReactNode;
  className?: string;
}

export default function WatercolorGrok({
  title,
  logo,
  children,
  className = '',
}: WatercolorSectionProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 ${className}`}>
      {/* Columna IZQUIERDA - Acuarela + efecto profundidad */}
      <div className="relative h-[380px] md:h-[480px] lg:h-full min-h-[380px] overflow-hidden rounded-2xl">
        {/* Capa base con gradiente sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-teal-900/20 to-blue-950/40" />

        {/* Capas de "pinceladas" de acuarela (varias para profundidad) */}
        <div className="absolute inset-0 opacity-70 mix-blend-soft-light">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.45)_0%,transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(45,212,191,0.38)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.32)_0%,transparent_55%)]" />
        </div>

        {/* Segunda pasada más difuminada y grande */}
        <div className="absolute inset-0 opacity-50 blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_30%,rgba(34,197,94,0.55)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(45,212,191,0.45)_0%,transparent_65%)]" />
        </div>

        {/* Sombra interna para dar sensación de profundidad */}
        <div className="absolute inset-0 shadow-[inset_0_0_60px_20px_rgba(0,0,0,0.6)] pointer-events-none" />

        {/* Logo con efecto flotante / 3D */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center p-8 md:p-12"
          initial={{ y: 40, opacity: 0.4, scale: 0.88 }}
          animate={{
            y: [0, -12, 0],
            opacity: 1,
            scale: 1,
          }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 5.5,
              ease: 'easeInOut',
            },
            opacity: { duration: 1.2 },
            scale: { duration: 1.4 },
          }}
        >
          {logo ? (
            <div className="relative w-4/5 max-w-[320px] aspect-square drop-shadow-[0_25px_35px_rgba(0,0,0,0.65)]">
              <Image
                src={logo}
                alt="Logo empresa"
                fill
                className="object-contain"
                priority
              />
              {/* Sombra extra debajo del logo para más profundidad */}
              <div className="absolute inset-x-10 bottom-0 h-20 bg-black/40 blur-2xl rounded-full -z-10" />
            </div>
          ) : (
            <div className="text-white/70 text-2xl font-light">
              [Logo aquí]
            </div>
          )}
        </motion.div>
      </div>

      {/* Columna DERECHA - Título + contenido */}
      <div className="flex flex-col justify-center py-8 lg:py-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-8">
          {title}
        </h2>

        <div className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}