"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function LottieShowcase() {
  useEffect(() => {
    import("@dotlottie/player-component");
  }, []);

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* 🧠 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[620px]"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-green-600 mb-4 bg-white/10 px-5 py-2 text-xl backdrop-blur-md">
            🌱 Compromiso ambiental
          </span>

          <h2 className="text-3xl md:text-6xl font-bold text-green-600 leading-tight">
            Publicidad responsable con el medio ambiente
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Creamos experiencias visuales que capturan la atención, generan
            recordación y elevan tu presencia en el mercado. Desde publicidad
            exterior hasta estrategias digitales completas.
          </p>
        </motion.div>

        {/* 🎬 RIGHT LOTTIE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <div className="w-[280px] md:w-[480px]">
            {/* <dotlottie-player
              src="/lottie/earth.lottie"
              autoplay
              loop
              style={{ width: "100%", height: "100%" }}
            /> */}
          </div>
        </motion.div>

      </div>
    </section>
  );
}