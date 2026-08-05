"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function EcoCommitment() {
  useEffect(() => {
    import("@dotlottie/player-component");
  }, []);
  return (
    <section className="relative overflow-hidden py-16 md:py-40 text-white">
      <Image
        src="/img/pex.jpg" // ← Tu imagen real
        alt="Compromiso ecológico - Publicidad sostenible"
        fill
        className="object-cover brightness-75"
        priority
      />
      <div className="pointer-events-none absolute inset-0">
        <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-40 left-1/4 h-150 w-150 rounded-full bg-[#009846]/40 blur-[200px]" />
        <motion.div animate={{ scale: [1.1, 1.4, 1.1], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-0 right-1/4 h-125 w-125 rounded-full bg-[#0033A0]/40 blur-[180px]" />
      </div>

      <div className="relative md:mx-20 max-w-full px-6 z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="w-full">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 md:px-8 px-4 py-2 md:py-5 font-semibold md:text-2xl text-md backdrop-blur-md">🌱 Compromiso Ambiental</span>

          <h2 className="text-[#009846] md:block hidden mt-6 md:text-6xl text-3xl font-bold tracking-tighter">Publicidad responsable con el medio ambiente</h2>

          <p className="mt-8 md:text-2xl text-base text-white font-semibold tracking-tighter">
            En <span className="font-bold text-blue-500">FG</span> <span className="font-bold text-green-500">GO</span> <span className="font-bold text-white">PUBLICIDAD S.A.C.</span> apostamos por una producción visual de alto impacto que respeta el entorno. Utilizamos{" "}
            <strong>tintas ecológicas</strong> y procesos responsables que reducen el impacto ambiental sin sacrificar calidad ni durabilidad en todos nuestros productos.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="md:mt-2 mt-6 grid grid-cols-1 md:gap-16 lg:grid-cols-2 lg:items-center">
          {/* LEFT – Media (con glassmorphism sobre el fondo) */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeOut" }} className="relative">
            <div className="relative aspect-5/5 overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl">
              {/* Imagen secundaria o video (opcional) */}
              <Image
                src="/img/cars/kar.jpg" // ← Puedes mantener una imagen destacada aquí si quieres
                alt="Ejemplo de publicidad ecológica"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating badge con neon glow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute md:-bottom-8 -bottom-2 md:-right-8 -right-2 rounded-2xl border border-white bg-[#009846] md:px-8 md:py-4 px-4 py-2 backdrop-blur-xl shadow-2xl ring-2 ring-[#009846]/30"
            >
              <p className="text-base md:text-lg font-bold text-white drop-shadow-lg">Tintas ecológicas certificadas</p>
              <p className="text-base md:text-lg text-white">Menor impacto · Alta durabilidad</p>
            </motion.div>
          </motion.div>

          {/* RIGHT – Valores ecológicos (cards con glassmorphism) */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex z-50 relative justify-center items-center md:mt-20">
            <div className="w-85 h-105 md:w-145 md:h-175">
              <DotLottieReact src="/lottie/earth.lottie" autoplay loop style={{ width: "100%", height: "100%" }} />
            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 1 }} className="md:mt-32 text-center">
          <p className="mx-auto md:block hidden max-w-7xl text-lg md:text-4xl font-semibold text-white drop-shadow-2xl">
            Elegir FG GO es elegir una marca que cuida su imagen,
            <span className="block mt-4 text-[#009846] font-bold">sin dejar huella negativa en el planeta.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
