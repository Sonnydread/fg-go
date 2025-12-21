"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-zinc-100 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* LEFT – TEXT CONTENT */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block rounded-full bg-[#009846]/10 px-5 py-2 text-sm font-medium text-[#009846]">
                Quiénes Somos
              </span>

              <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl lg:text-7xl">
                Publicidad que construye
                <br />
                <span className="bg-gradient-to-r from-[#009846] via-[#009846] to-[#0033A0] bg-clip-text text-transparent">
                  marcas visibles y memorables
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 space-y-6 text-lg text-black/70"
            >
              <p>
                <strong className="text-black">FG GO PUBLICIDAD S.A.C.</strong> cuenta con{" "}
                <strong className="text-[#0033A0]">más de 25 años de experiencia</strong> creando soluciones de publicidad interior y exterior de alto impacto.
              </p>
              <p>
                Nos distinguimos por nuestra <strong className="text-[#009846]">garantía, calidad y puntualidad</strong>, respaldadas por maquinaria de última generación y un equipo altamente capacitado.
              </p>
            </motion.div>
          </div>

          {/* RIGHT – VISUAL MEDIA (con overlapping flotante y animaciones 3D) */}
          <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px]">
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {/* Video principal (fondo) */}
              <div className="absolute left-0 top-10 w-full max-w-lg overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
                <video
                  src="/vid/4x4.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Imagen flotante superpuesta (delante del video) */}
              <motion.div
                initial={{ opacity: 0, y: 80, rotate: 8 }}
                whileInView={{ opacity: 1, y: 0, rotate: 3 }}
                viewport={{ once: false }}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="absolute -bottom-4 right-0 w-full max-w-md overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/10"
              >
                <Image
                  src="/img/letrr.png"
                  alt="Letrero volumétrico iluminado - FG GO Publicidad"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
                {/* Overlay sutil para profundidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              {/* Elemento decorativo flotante (opcional: hoja eco o forma abstracta) */}
              <motion.div
                animate={{ y: [0, -25, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="absolute -left-28 bottom-10 text-8xl opacity-70"
              >
                🌿
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* STATS / HIGHLIGHTS – Modernos y animados */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-32 grid grid-cols-1 gap-10 md:grid-cols-3"
        >
          {[
            {
              value: "25+",
              title: "Años de experiencia",
              desc: "Trayectoria consolidada en publicidad de alto impacto.",
            },
            {
              value: "Tecnología",
              title: "de punta",
              desc: "Maquinaria de última generación para resultados premium.",
            },
            {
              value: "Asesoría",
              title: "personalizada",
              desc: "Acompañamiento experto desde el diseño hasta la instalación.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group rounded-3xl bg-white p-10 text-center shadow-lg ring-1 ring-black/5 transition-all hover:shadow-2xl"
            >
              <div className="text-5xl font-black text-[#009846] group-hover:text-[#0033A0] transition-colors">
                {item.value}
              </div>
              <h3 className="mt-6 text-2xl font-bold text-black">{item.title}</h3>
              <p className="mt-4 text-black/60">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}