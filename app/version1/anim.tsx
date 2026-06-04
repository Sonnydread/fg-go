"use client";

import React from "react";

const ProButton = () => {
  return (
    <div className="bg-black min-h-screen flex gap-8 items-center justify-center p-8">
      <button
        className="group relative px-12 py-5 rounded-full 
                   bg-black text-white text-lg font-bold overflow-hidden
                   shadow-[0_10px_40px_rgba(0,0,0,0.85)]
                   transition-all duration-300 hover:scale-[1.04]"
      >
        {/* GLOW EXTERIOR */}
        <div className="absolute -inset-[9px] rounded-full 
                        bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#ff00cc] 
                        opacity-75 blur-2xl 
                        group-hover:opacity-90 transition-all duration-700" />

        <div className="absolute -inset-[14px] rounded-full 
                        bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#ff00cc] 
                        opacity-50 blur-3xl 
                        group-hover:opacity-70 transition-all duration-700" />

        <div className="absolute -inset-[22px] rounded-full 
                        bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#ff00cc] 
                        opacity-30 blur-[55px] 
                        group-hover:opacity-50 transition-all duration-700" />

        {/* BORDE GIRATORIO (FIX PRO - siempre visible) */}
        <div className="absolute -inset-[3.5px] rounded-full overflow-hidden">
          <div
            className="absolute -inset-48 rounded-full animate-[spin_3s_linear_infinite] group-hover:[animation-duration:2.5s]"
            style={{
              background: `conic-gradient(
                from 0deg,
                transparent 0deg,
                transparent 260deg,
                rgba(0,212,255,0.2) 280deg,
                #00d4ff 300deg,
                #7c3aed 320deg,
                #ff00cc 340deg,
                rgba(255,0,204,0.2) 355deg,
                transparent 360deg
              )`,
            }}
          />
        </div>

        {/* INNER BG */}
        <div className="absolute inset-[3px] rounded-full bg-black" />

        {/* CONTENT */}
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
          Collaborate on Profe
        </span>
      </button>

      
     <button
        className="group relative px-12 py-5 rounded-full 
                   bg-black text-white text-lg font-bold overflow-hidden
                   border border-black
                   shadow-[0_10px_40px_rgba(0,0,0,0.85)]
                   transition-all duration-300 hover:scale-[1.04]"
      >
        {/* GLOW SUTIL VERDE */}
        <div className="absolute -inset-[10px] rounded-full 
                        bg-green-500 
                        opacity-20 blur-2xl 
                        group-hover:opacity-40 transition-all duration-500" />

        {/* HIGHLIGHT GIRATORIO (green-500) */}
        <div className="absolute -inset-[2.5px] rounded-full overflow-hidden">
          <div
            className="absolute -inset-120 rounded-full animate-[spin_3s_linear_infinite]"
            style={{
              background: `conic-gradient(
                from 0deg,
                transparent 0deg,
                transparent 300deg,
                rgba(34,197,94,0.15) 320deg,
                #22c55e 340deg,
                rgba(34,197,94,0.15) 360deg
              )`,
            }}
          />
        </div>

        {/* INNER BG (crea el borde visible negro) */}
        <div className="absolute inset-[4px] rounded-full bg-black" />

        {/* CONTENT */}
        <span className="relative z-10 flex items-center gap-3">
          <svg
            className="w-5 h-5 text-green-400"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.75 0C3.95507 0 2.5 1.45507 2.5 3.25V3.75C2.5 5.54493 3.95507 7 5.75 7H6.25C8.04493 7 9.5 5.54493 9.5 3.75V3.25C9.5 1.45507 8.04493 0 6.25 0H5.75ZM4 3.25C4 2.2835 4.7835 1.5 5.75 1.5H6.25C7.2165 1.5 8 2.2835 8 3.25V3.75C8 4.7165 7.2165 5.5 6.25 5.5H5.75C4.7835 5.5 4 4.7165 4 3.75V3.25ZM12.25 7.25V9H13.75V7.25H15.5V5.75H13.75V4H12.25V5.75H10.5V7.25H12.25ZM1.5 13.1709V14.5H10.5V13.1709C9.68042 11.5377 8.00692 10.5 6.17055 10.5H5.82945C3.99308 10.5 2.31958 11.5377 1.5 13.1709ZM0.0690305 12.6857C1.10604 10.4388 3.35483 9 5.82945 9H6.17055C8.64517 9 10.894 10.4388 11.931 12.6857L12 12.8353V13V15.25V16H11.25H0.75H0V15.25V13V12.8353L0.0690305 12.6857Z"
            />
          </svg>
          Collaborate on Profe
        </span>
      </button>

  <button
        className="group relative px-12 py-5 rounded-full 
                   bg-black text-white text-lg font-bold
                   shadow-[0_10px_10px_rgba(0,0,0,0.6)]
                   transition-all duration-300 hover:scale-[1.08]"
      >
        {/* 🔄 HIGHLIGHT GIRATORIO VERDE */}
        <div className="absolute -inset-[0.1px] rounded-full overflow-hidden">
          <div
            className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite]"
            style={{ 
              background: `conic-gradient(
                from 0deg,
                transparent,
                rgba(34,197,94,0.2),
                #22c55e,
                #4ade80,
                transparent
              )`,
            }}
          />
        </div>

        {/* 🌈 GLOW MEDIO (neón cercano) */}
        <div
          className="absolute -inset-[6px] rounded-full opacity-70 blur-[10px] group-hover:opacity-100 transition-all duration-300"
          style={{
            background:
              "linear-gradient(90deg, #4ade80, #22c55e, #16a34a)",
          }}
        />

        {/* 🔥 GLOW EXTERNO (destello real) */}
        <div
          className="absolute -inset-[14px] rounded-full opacity-50 blur-[35px] mix-blend-screen group-hover:opacity-80 transition-all duration-300"
          style={{
            background:
              "linear-gradient(90deg, #4ade80, #22c55e, #16a34a)",
          }}
        />

        {/* ✨ MICRO GLOW EXTRA (detalle premium) */}
        <div
          className="absolute -inset-[22px] rounded-full opacity-30 blur-[60px] mix-blend-screen"
          style={{
            background:
              "linear-gradient(90deg, #22c55e, #4ade80)",
          }}
        />

        {/* MASK */}
        <div className="absolute inset-[3px] rounded-full bg-black" />

        {/* BORDE BASE NEGRO */}
        <div className="absolute inset-[4px] rounded-full border border-black" />

        {/* CONTENIDO */}
        <span className="relative z-10 flex items-center gap-3">
          <svg
            className="w-5 h-5 text-green-400"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.75 0C3.95507 0 2.5 1.45507 2.5 3.25V3.75C2.5 5.54493 3.95507 7 5.75 7H6.25C8.04493 7 9.5 5.54493 9.5 3.75V3.25C9.5 1.45507 8.04493 0 6.25 0H5.75ZM4 3.25C4 2.2835 4.7835 1.5 5.75 1.5H6.25C7.2165 1.5 8 2.2835 8 3.25V3.75C8 4.7165 7.2165 5.5 6.25 5.5H5.75C4.7835 5.5 4 4.7165 4 3.75V3.25ZM12.25 7.25V9H13.75V7.25H15.5V5.75H13.75V4H12.25V5.75H10.5V7.25H12.25ZM1.5 13.1709V14.5H10.5V13.1709C9.68042 11.5377 8.00692 10.5 6.17055 10.5H5.82945C3.99308 10.5 2.31958 11.5377 1.5 13.1709ZM0.0690305 12.6857C1.10604 10.4388 3.35483 9 5.82945 9H6.17055C8.64517 9 10.894 10.4388 11.931 12.6857L12 12.8353V13V15.25V16H11.25H0.75H0V15.25V13V12.8353L0.0690305 12.6857Z"
            />
          </svg>

          Collaborate on Profezx
        </span>
      </button>


    </div>
  );
};

export default ProButton;