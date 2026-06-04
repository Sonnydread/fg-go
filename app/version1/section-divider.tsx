"use client";

import React from "react";

interface SectionDividerProps {
  children?: React.ReactNode;
  className?: string;
}

export default function SectionDivider({ children, className = "" }: SectionDividerProps) {
  return (
    <>
      {/* Sección superior - Fondo blanco */}
      <section className={`bg-white mt-20 relative pb-16 md:pb-24 ${className}`}>
        {children}

        {/* Divisor geométrico sutil (polígono minimalista) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-[80px] md:h-[100px] "
            preserveAspectRatio="none"
            fill="#1e40af"
          >
            <polygon points="0,180 0,90 360,40 1380,85 1440,55 1440,120" />
          </svg>
        </div>
      </section>

      {/* Sección inferior - Fondo azul */}
      <section className="bg-[#1e40af] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Cotiza tu nueva web <span className="text-yellow-400">aquí</span>!
              </h2>
              <p className="mt-4 text-lg opacity-90">
                Escríbenos y nos comunicaremos a la brevedad.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-lg">Contacto:</p>
              <a
                href="mailto:contacto@newmedia77.com"
                className="flex items-center gap-3 text-lg hover:text-yellow-400 transition-colors"
              >
                ✉️ contacto@newmedia77.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}