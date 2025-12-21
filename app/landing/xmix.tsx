"use client";

import { motion } from "framer-motion";

const services = [
  "Vallas",
  "Letreros",
  "Banderolas",
  "Viniles autoadhesivos",
  "Cajas de luz",
  "Letras volumétricas",
  "Revestimientos móviles",
];

export default function CoreServices() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-fgGreen/10 via-white to-fgBlue/10 py-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 h-[500px] w-[500px] rounded-full bg-fgGreen/20 blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-fgBlue/20 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="text-sm uppercase tracking-widest text-fgGreen">
            Nuestros servicios
          </span>
          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
            Soluciones visuales
            <span className="block bg-gradient-to-r from-fgGreen to-fgBlue bg-clip-text text-transparent">
              de alto impacto
            </span>
          </h2>
        </motion.div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-black/10 bg-white/70 p-6 text-center backdrop-blur-xl hover:-translate-y-1 hover:shadow-xl"
            >
              <p className="text-sm font-semibold">{service}</p>
            </motion.div>
          ))}
        </div>

        {/* EXTERIOR / INTERIOR */}
        <div className="mt-32 grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">

          {/* MEDIA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-black/10 bg-black/5">
              {/* Imagen o video */}
              <div className="flex h-full w-full items-center justify-center text-xs text-black/40">
                Imagen / Video Publicitario
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-xs font-semibold text-fgGreen">
                Impacto visual garantizado
              </p>
              <p className="text-[11px] text-black/60">
                Exterior · Interior
              </p>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold">Publicidad Exterior</h3>
              <p className="mt-2 text-sm text-black/60">
                Máxima visibilidad, resistencia y presencia urbana.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">Publicidad Interior</h3>
              <p className="mt-2 text-sm text-black/60">
                Diseño, precisión y acabados de alta calidad.
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-4 text-sm">
              <li>✔ Durabilidad</li>
              <li>✔ Alta resolución</li>
              <li>✔ Impacto visual</li>
              <li>✔ Visibilidad real</li>
            </ul>
          </motion.div>
        </div>

        {/* PROCESS + DIFFERENTIALS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 rounded-3xl bg-white/80 p-12 backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">

            {/* PROCESS */}
            <div>
              <h4 className="mb-6 text-lg font-bold text-fgGreen">
                Nuestro proceso
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  "Asesoría personalizada",
                  "Diseño y selección de materiales",
                  "Producción",
                  "Instalación",
                  "Control de calidad",
                ].map((step, i) => (
                  <li key={i}>→ {step}</li>
                ))}
              </ul>
            </div>

            {/* DIFFERENTIALS */}
            <div>
              <h4 className="mb-6 text-lg font-bold text-fgBlue">
                ¿Por qué elegirnos?
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  "Maquinaria de última generación",
                  "Alta resolución visual",
                  "Personal altamente capacitado",
                  "Materiales duraderos",
                  "Cumplimiento de tiempos",
                ].map((diff, i) => (
                  <li key={i}>✔ {diff}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
