"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 pt-20 bg-blue-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-450/80 via-transparent to-green-800" />
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
                Letreros · Adhesivos · Paneles y más
              </p>
            </div>
          </div>
          <div>
            {/* <p className="text-red-700 font-bold">Sección portada</p> */}
            <h1 className="text-6xl font-black text-[#2edd80]">
              Transformamos tu marca con impacto visual
            </h1>

            <p className="mt-10 max-w-xl text-2xl text-white">
              Diseñamos, producimos e instalamos soluciones de publicidad de
              alto impacto visual. Precisión, calidad y presencia real en todos
              lados.
            </p>
            <a
              href="https://wa.me/51982748220?text=Hola!%20Quisiera%20más%20información%20sobre%20los%20servicios%20de%20FGGO!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="group relative px-12 py-8 mt-30 rounded-full 
                   bg-black text-white text-lg font-bold
                   shadow-[0_10px_10px_rgba(0,0,0,0.6)]
                   transition-all duration-300 hover:scale-[1.08]"
              >
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
                <div
                  className="absolute -inset-[6px] rounded-full opacity-70 blur-[10px] group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, #4ade80, #22c55e, #16a34a)",
                  }}
                />
                <div
                  className="absolute -inset-[14px] rounded-full opacity-50 blur-[35px] mix-blend-screen group-hover:opacity-80 transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, #4ade80, #22c55e, #16a34a)",
                  }}
                />
                <div
                  className="absolute -inset-[22px] rounded-full opacity-30 blur-[60px] mix-blend-screen"
                  style={{
                    background: "linear-gradient(90deg, #22c55e, #4ade80)",
                  }}
                />
                <div className="absolute inset-[3px] rounded-full bg-black" />
                <div className="absolute inset-[4px] rounded-full border border-black" />
                <span className="relative z-10 flex items-center gap-3">
                  <Leaf className="text-green-500" />
                  Consulta por una cotización
                </span>
              </button>
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
              className="absolute -right-12 bottom-70 text-8xl opacity-90"
            >
              <Image
                src="/img/leaf.png"
                alt="Logo de FG Go"
                width={100}
                height={100}
                className="h-auto w-auto object-contain"
              />
            </motion.div>
            {/* Trust indicators */}
            {/* <div className="mt-14 flex items-center gap-8 text-lg text-white">
              <div>
                <span className="block text-4xl text-center font-medium text-white">25+</span>
                Años de experiencia
              </div>
              <div>
                <span className="block text-4xl text-center font-medium text-white">
                  100%
                </span>
                Calidad garantizada
              </div>
              <div>
                <span className="block text-4xl text-center font-medium text-white">
                  Alta
                </span>
                Resolución visual
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
