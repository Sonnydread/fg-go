"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-100 text-white">
      <div className="relative mx-auto max-w-7xl px-6 mt-14 py-14 pb-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* LEFT CONTENT */}
         

          {/* RIGHT VISUAL */}
          <div className="relative">
            <div className="relative aspect-[5/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              {/* Imagen base */}
              <Image
                src="/img/boske.png"
                alt="Publicidad exterior"
                width={800}
                height={800}
                className="h-full w-full object-cover brightness-150"
              />

              {/* Video overlay */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <video
                  src="/vid/log-mov.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-3/4 rounded-2xl object-cover shadow-2xl"
                />
              </div>
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-[#009846] px-6 py-4">
              <p className="text-lg font-semibold text-center">
                Publicidad Exterior & Interior
              </p>
              <p className="text-base text-white">
                Vallas · Letreros · Adhesivos · Paneles
              </p>
            </div>
          </div>
           <div>
            <p className="text-red-700 font-bold">Sección portada</p>
            <h1 className="bg-linear-to-r text-6xl font-black from-[#0033A0] via-[#37b672] to-[#009846] bg-clip-text text-transparent">
            Transformamos tu marca con impacto visual 
            </h1>

            <p className="mt-6 max-w-xl text-lg text-black">
              Diseñamos, producimos e instalamos soluciones de publicidad de
              alto impacto visual. Precisión, calidad y presencia real en todos
              lados.
            </p>
 <a
          href="https://wa.me/51982748220?text=Hola!%20Quisiera%20más%20información%20sobre%20los%20servicios%20de%20FGGO!"
          target="_blank"
          rel="noopener noreferrer"
        >
            
              <button   className="rounded-full mt-8 cursor-pointer bg-gradient-to-r from-[#0033A0] to-[#009846] px-12 py-5 text-lg font-bold text-white shadow-2xl hover:opacity-90 transition">
                Solicitar cotización
              </button>

              {/* <button   className="rounded-full bg-gradient-to-r from-[#0033A0] to-[#009846] px-12 py-5 text-lg font-bold text-white shadow-2xl hover:opacity-90 transition">
                Ver servicios
              </button> */}
           
</a>
 <motion.div
  animate={{
    y: [0, -25, 0],
    scale: [1, 1.6, 1],
  }}
  transition={{
    repeat: Infinity,
    duration: 6,
    ease: "easeInOut",
  }}
  className="absolute right-2 bottom-18 text-8xl opacity-90"
>
  🌿
</motion.div>
            {/* Trust indicators */}
            <div className="mt-14 flex items-center gap-8 text-sm text-black">
              <div>
                <span className="block text-2xl font-bold text-black">25+</span>
                Años de experiencia
              </div>
              <div>
                <span className="block text-2xl font-bold text-black">
                  100%
                </span>
                Calidad garantizada
              </div>
              <div>
                <span className="block text-2xl font-bold text-black">
                  Alta
                </span>
                Resolución visual
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
