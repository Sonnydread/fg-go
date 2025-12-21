"use client";

import { motion } from "framer-motion";

export default function EcoCommitment() {
  return (
    <section className="relative overflow-hidden bg-gray-700 py-32 text-white">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-fgGreen/25 blur-[180px]" />
        <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-fgBlue/25 blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-sm text-white/80">
            🌱 Compromiso ambiental
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl xl:text-6xl">
            Publicidad responsable con el
            <span className="block bg-gradient-to-r from-fgGreen to-fgBlue bg-clip-text">
              medio ambiente
            </span>
          </h2>

          <p className="mt-6 text-lg text-white/70">
            En <strong>FG GO PUBLICIDAD S.A.C.</strong> apostamos por una producción
            visual de alto impacto que respeta el entorno. Utilizamos
            <strong> tintas ecológicas</strong> y procesos responsables que reducen
            el impacto ambiental sin sacrificar calidad ni durabilidad.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT – Media */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              {/* Reemplaza por imagen o video */}
              <div className="flex h-full w-full items-center justify-center text-sm text-white/40">
                Imagen / Video ecológico
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 rounded-2xl border border-white/10 bg-black/80 px-6 py-4 backdrop-blur-xl"
            >
              <p className="text-sm font-semibold text-fgGreen">
                Tintas ecológicas certificadas
              </p>
              <p className="text-xs text-white/60">
                Menor impacto · Alta durabilidad
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT – Eco values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            {[
              {
                title: "Tintas ecológicas",
                desc: "Reducen emisiones contaminantes y son seguras para el entorno urbano.",
              },
              {
                title: "Producción responsable",
                desc: "Optimizamos materiales y procesos para minimizar residuos.",
              },
              {
                title: "Calidad sostenible",
                desc: "La durabilidad y el color se mantienen sin comprometer el planeta.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * i }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                <h3 className="text-xl font-semibold text-fgGreen">
                  {item.title}
                </h3>
                <p className="mt-3 text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-28 text-center"
        >
          <p className="mx-auto max-w-3xl text-lg text-white/70">
            Elegir FG GO es elegir una marca que cuida su imagen,
            <span className="text-white"> sin dejar huella negativa en el planeta</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
