"use client";

import React from "react";

const ProButton = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col gap-20 items-center justify-center p-8 relative isolate">
      <button
        className="group relative px-12 py-5 rounded-full 
                   bg-black text-white text-lg font-bold
                   shadow-[0_10px_10px_rgba(0,0,0,0.6)]
                   transition-all duration-300 hover:scale-[1.10]"
      >
        {/* GLOW 1 - cercano (definición limpia) */}
        <div
          className="absolute -inset-[6px] rounded-full 
                     bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#ff00cc] 
                     opacity-70 blur-[8px]"
        />

        {/* GLOW 2 - medio (empieza a brillar) */}
        <div
          className="absolute -inset-[5px] rounded-full 
                     bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#ff00cc] 
                     opacity-60 blur-[2px] mix-blend-screen"
        />

        {/* GLOW 3 - lejano (halo potente 🔥) */}
        <div
          className="absolute -inset-[10px] rounded-full 
                     bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#ff00cc] 
                     opacity-50 blur-[20px] mix-blend-screen"
        />

        {/* BORDE MULTICOLOR */}
        <div className="absolute -inset-[1px] pointer-events-none rounded-full overflow-hidden">
          <div
            className="absolute inset-0 rounded-full 
                       bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#ff00cc]"
          />
        </div>

        {/* FONDO NEGRO */}
        <div className="absolute inset-[3px] rounded-full bg-black" />

        {/* BORDE INTERNO */}
        <div className="absolute inset-[4px] rounded-full border border-white/10" />

        {/* CONTENIDO */}
        <span className="relative z-10 flex items-center gap-3">
          <svg
            className="w-5 h-5"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.75 0C3.95507 0 2.5 1.45507 2.5 3.25V3.75C2.5 5.54493 3.95507 7 5.75 7H6.25C8.04493 7 9.5 5.54493 9.5 3.75V3.25C9.5 1.45507 8.04493 0 6.25 0H5.75ZM4 3.25C4 2.2835 4.7835 1.5 5.75 1.5H6.25C7.2165 1.5 8 2.2835 8 3.25V3.75C8 4.7165 7.2165 5.5 6.25 5.5H5.75C4.7835 5.5 4 4.7165 4 3.75V3.25ZM12.25 7.25V9H13.75V7.25H15.5V5.75H13.75V4H12.25V5.75H10.5V7.25H12.25ZM1.5 13.1709V14.5H10.5V13.1709C9.68042 11.5377 8.00692 10.5 6.17055 10.5H5.82945C3.99308 10.5 2.31958 11.5377 1.5 13.1709ZM0.0690305 12.6857C1.10604 10.4388 3.35483 9 5.82945 9H6.17055C8.64517 9 10.894 10.4388 11.931 12.6857L12 12.8353V13V15.25V16H11.25H0.75H0V15.25V13V12.8353L0.0690305 12.6857Z"
            />
          </svg>

          Collaborate on Pro
        </span>
      </button>
          <button
        className="group relative px-12 py-5 rounded-full 
                   bg-black text-white text-lg font-bold overflow-hidden
                   transition-all duration-300 hover:scale-[1.03]"
      >
        {/* GLOW 1 - Principal (más fuerte y visible) */}
        <div className="absolute -inset-[12px] rounded-full 
                        bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#ff00cc] 
                        opacity-75 blur-2xl 
                        group-hover:opacity-90 transition-all duration-300" />

        {/* GLOW 2 - Más amplio y suave (profundidad) */}
        <div className="absolute -inset-[12px] rounded-full 
                        bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#ff00cc] 
                        opacity-50 blur-3xl 
                        group-hover:opacity-70 transition-all duration-300" />

        {/* GLOW 3 - Muy suave y grande (halo exterior) */}
        <div className="absolute -inset-[80px] rounded-full 
                        bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#ff00cc] 
                        opacity-30 blur-[80px] 
                        group-hover:opacity-45 transition-all duration-300" />

        {/* BORDE MULTICOLOR */}
        <div className="absolute -inset-[2px] pointer-events-none rounded-full overflow-hidden">
          <div className="absolute inset-0 rounded-full 
                          bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#ff00cc]" />
        </div>

        {/* FONDO NEGRO SÓLIDO */}
        <div className="absolute inset-[3px] rounded-full bg-black" />

        {/* Borde interno sutil */}
        <div className="absolute inset-[4px] rounded-full border border-white/10" />

        {/* CONTENIDO */}
        <span className="relative z-10 flex items-center gap-3">
          <svg
            className="w-5 h-5"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.75 0C3.95507 0 2.5 1.45507 2.5 3.25V3.75C2.5 5.54493 3.95507 7 5.75 7H6.25C8.04493 7 9.5 5.54493 9.5 3.75V3.25C9.5 1.45507 8.04493 0 6.25 0H5.75ZM4 3.25C4 2.2835 4.7835 1.5 5.75 1.5H6.25C7.2165 1.5 8 2.2835 8 3.25V3.75C8 4.7165 7.2165 5.5 6.25 5.5H5.75C4.7835 5.5 4 4.7165 4 3.75V3.25ZM12.25 7.25V9H13.75V7.25H15.5V5.75H13.75V4H12.25V5.75H10.5V7.25H12.25ZM1.5 13.1709V14.5H10.5V13.1709C9.68042 11.5377 8.00692 10.5 6.17055 10.5H5.82945C3.99308 10.5 2.31958 11.5377 1.5 13.1709ZM0.0690305 12.6857C1.10604 10.4388 3.35483 9 5.82945 9H6.17055C8.64517 9 10.894 10.4388 11.931 12.6857L12 12.8353V13V15.25V16H11.25H0.75H0V15.25V13V12.8353L0.0690305 12.6857Z"
            />
          </svg>
          Collaborate on Pro
        </span>
      </button>

<button
        className="group relative px-12 py-5 rounded-full 
                   bg-black text-white text-lg font-bold
                   shadow-[0_10px_10px_rgba(0,0,0,0.6)]
                   transition-all duration-300 hover:scale-[1.08]"
      >
        {/* 🔄 BORDE ANIMADO */}
        <div className="absolute -inset-[0.1px] rounded-full overflow-hidden">
          <div
            className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite]"
            style={{ 
              background: `conic-gradient(
                from 0deg,
                transparent,
                #00d4ff,
                #7c3aed,
                #ff00cc,
                transparent
              )`,
            }}
          />
        </div>

        {/* 🌈 GLOW MEDIO */}
        <div
          className="absolute -inset-[6px] rounded-full opacity-70 blur-[10px]"
          style={{
            background:
              "linear-gradient(90deg, #00d4ff, #7c3aed, #ff00cc)",
          }}
        />

        {/* 🔥 GLOW EXTERNO */}
        <div
          className="absolute -inset-[12px] rounded-full opacity-50 blur-[30px] mix-blend-screen"
          style={{
            background:
              "linear-gradient(90deg, #00d4ff, #7c3aed, #ff00cc)",
          }}
        />

        {/* MASK */}
        <div className="absolute inset-[3px] rounded-full bg-black" />

        {/* BORDE INTERNO */}
        <div className="absolute inset-[4px] rounded-full border border-white/10" />

        {/* CONTENIDO */}
        <span className="relative z-10 flex items-center gap-3">
          <svg className="w-5 h-5" viewBox="0 0 16 16" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.75 0C3.95507 0 2.5 1.45507 2.5 3.25V3.75C2.5 5.54493 3.95507 7 5.75 7H6.25C8.04493 7 9.5 5.54493 9.5 3.75V3.25C9.5 1.45507 8.04493 0 6.25 0H5.75ZM4 3.25C4 2.2835 4.7835 1.5 5.75 1.5H6.25C7.2165 1.5 8 2.2835 8 3.25V3.75C8 4.7165 7.2165 5.5 6.25 5.5H5.75C4.7835 5.5 4 4.7165 4 3.75V3.25ZM12.25 7.25V9H13.75V7.25H15.5V5.75H13.75V4H12.25V5.75H10.5V7.25H12.25ZM1.5 13.1709V14.5H10.5V13.1709C9.68042 11.5377 8.00692 10.5 6.17055 10.5H5.82945C3.99308 10.5 2.31958 11.5377 1.5 13.1709ZM0.0690305 12.6857C1.10604 10.4388 3.35483 9 5.82945 9H6.17055C8.64517 9 10.894 10.4388 11.931 12.6857L12 12.8353V13V15.25V16H11.25H0.75H0V15.25V13V12.8353L0.0690305 12.6857Z"
            />
          </svg>

          Collaborate on Pro
        </span>
      </button>

      
    </div>
  );
};

export default ProButton;