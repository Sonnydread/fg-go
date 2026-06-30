"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import CtaButton from "../../components/ui/cta-button";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden py-20 pt-20 bg-blue-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-450/80 via-transparent to-green-800" />
      <div className="relative mx-auto max-w-7xl px-6 mt-14 py-14 pb-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="relative aspect-[5/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <Image src="/img/logo/boske.png" alt="Publicidad exterior" width={800} height={800} className="h-full w-full object-cover brightness-110" />
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <motion.div
                  className="absolute inset-0 rounded-full bg-green-500/20 blur-[80px]"
                  animate={{
                    scale: [0.5, 1.0, 0.5],
                    opacity: [0.15, 0.35, 0.15],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: [0.9, 1, 0.9],
                    scale: [1, 1.23, 1],
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image src="/img/logo/logo-hero.png" alt="Logo FGGO" width={460} height={460} priority className="relative z-10 object-contain brightness-140" />
                </motion.div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white bg-[#0e7b41] px-6 py-4">
              <p className="text-lg font-semibold text-center">Publicidad Exterior & Interior</p>
              <p className="text-base text-white">Letreros · Adhesivos · Paneles y más</p>
            </div>
          </div>
          <div>
            <h1 className="text-6xl font-black text-white">Transformamos <br /> tu marca con <br /> impacto visual</h1>
            <p className="mt-10 max-w-xl text-2xl pb-26 text-white">Diseñamos, producimos e instalamos <br /> soluciones de publicidad de alto impacto visual. <br /> Precisión, calidad y presencia real en todos lados.</p>
           
         
             <a href="https://wa.me/51982748220?text=Hola!%20Quisiera%20más%20información%20sobre%20los%20servicios%20de%20FGGO!" target="_blank" rel="noopener noreferrer">
            <CtaButton />
            </a>
            <motion.div
              animate={{
                y: [0, -25, 0],
                scale: [1, 1.6, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
              }}
              className="absolute right-50 bottom-60 text-8xl opacity-90"
            >
              <Image src="/img/logo/leaf.png" alt="Logo de FG Go" width={100} height={100} className="h-auto w-auto rotate-10 object-contain" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
