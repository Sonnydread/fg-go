"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  { name: "Vallas", img: "/img/logofb.jpg" },
  { name: "Letreros", img: "/img/camioneta.png" },
  { name: "Banderolas", img: "/img/logofb.jpg" },
  { name: "Viniles autoadhesivos", img: "/img/letlum.jpg" },
  { name: "Cajas de luz", img: "/img/logofb.jpg" },
  { name: "Letras volumétricas", img: "/img/letre.png" },
  { name: "Revestimientos móviles", img: "/img/letrr.png" },
  { name: "Paneles Publicitarios", img: "/img/vinilcar.jpg" },
];

const processSteps = [
  "Asesoría personalizada",
  "Diseño y materiales",
  "Producción avanzada",
  "Instalación profesional",
  "Control de calidad",
];

const differentials = [
  "Maquinaria de última generación",
  "Alta resolución visual",
  "Equipo altamente capacitado",
  "Materiales duraderos",
  "Tiempos cumplidos",
];

export default function CoreServices() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 via-white to-zinc-50 py-32 lg:py-40">
      {/* Fondo sutil con luz neon verde/azul */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#009846]/20 via-transparent to-[#0033A0]/20" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#009846] blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1.3, 1.1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#0033A0] blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER con efecto neon */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-[#009846]/10 px-6 py-2 text-sm font-medium uppercase tracking-wider text-[#009846]">
            Nuestros Servicios
          </span>
          <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
            Soluciones visuales
            <br />
            <span className="bg-gradient-to-r from-[#009846] via-[#009846] to-[#0033A0] bg-clip-text text-transparent drop-shadow-lg">
              de alto impacto
            </span>
          </h2>
        </motion.div>

        {/* GRID DE SERVICIOS DINÁMICO – Con imágenes reales y efecto neon hover */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -20, scale: 1.05 }}
              className="group relative overflow-hidden rounded-3xl shadow-xl"
            >
              <div className="aspect-square">
                <Image
                  src={service.img || "/img/letnom.jpg"} // ← Reemplaza con tus imágenes reales en /public/img/services/
                  alt={service.name}
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Texto con efecto neon */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="text-xl font-bold text-white drop-shadow-2xl">
                  {service.name}
                </p>
              </div>

              {/* Neon glow en hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 ring-4 ring-[#009846] blur-xl transition-opacity group-hover:opacity-100"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* EXTERIOR / INTERIOR – Layout asimétrico con overlapping y video */}
        <div className="mt-40 grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          {/* Visual flotante con profundidad */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotate: -8 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative order-2 lg:order-1"
          >
            {/* Video principal */}
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[#0033A0]/20">
               <Image
                  src="/img/letre.png" // ← Reemplaza con tus imágenes reales en /public/img/services/
                  alt="letrero"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition group-hover:scale-110"
                />
            </div>

            {/* Imagen superpuesta flotante */}
            <motion.div
              initial={{ opacity: 0, y: 100, rotate: 10 }}
              whileInView={{ opacity: 1, y: 0, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="absolute -bottom-12 -right-12 w-2/3 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white"
            >
              <Image
                src="/img/letrr.png"
                alt="Letrero iluminado nocturno"
                width={800}
                height={600}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#009846]/30 to-[#0033A0]/30" />
            </motion.div>
          </motion.div>

          {/* Texto con beneficios */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 space-y-10"
          >
            <div>
              <h3 className="text-4xl font-black text-[#0033A0]">Publicidad Exterior</h3>
              <p className="mt-4 text-lg text-black/70">Máxima visibilidad urbana, resistencia climática y presencia imponente 24/7.</p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-[#009846]">Publicidad Interior</h3>
              <p className="mt-4 text-lg text-black/70">Diseños elegantes, acabados premium y experiencias inmersivas en punto de venta.</p>
            </div>

            <div className="grid grid-cols-2 gap-6 text-lg">
              {["Durabilidad extrema", "Resolución 4K", "Impacto visual real", "Visibilidad nocturna"].map((benefit, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-2xl text-[#009846]">✦</span>
                  <span className="font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* PROCESO + DIFERENCIALES – Cards con neon glow */}
        <div className="mt-40 grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* Proceso */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-[#009846]/5 to-transparent p-10 ring-1 ring-[#009846]/20"
          >
            <h4 className="mb-8 text-2xl font-bold text-[#009846] drop-shadow-md">Nuestro Proceso</h4>
            <ol className="space-y-6">
              {processSteps.map((step, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-6 text-lg"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#009846] text-white font-black shadow-lg">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </motion.li>
              ))}
            </ol>
          </motion.div>

          {/* Diferenciales */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl bg-gradient-to-bl from-[#0033A0]/5 to-transparent p-10 ring-1 ring-[#0033A0]/20"
          >
            <h4 className="mb-8 text-2xl font-bold text-[#0033A0] drop-shadow-md">¿Por qué elegirnos?</h4>
            <ul className="space-y-6">
              {differentials.map((diff, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-center gap-6 text-lg"
                >
                  <span className="text-3xl text-[#0033A0]">✔</span>
                  <span>{diff}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}