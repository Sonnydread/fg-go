"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-white py-28 text-black">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-fgGreen/10 blur-[120px]" />
        <div className="absolute right-0 top-20 h-[300px] w-[300px] rounded-full bg-fgBlue/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-center">
          
          {/* LEFT – TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block rounded-full border border-black/10 px-4 py-1 text-sm text-black/60">
              Quiénes Somos
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
              Publicidad que construye
              <span className="block bg-gradient-to-r from-fgGreen to-fgBlue bg-clip-text text-transparent">
                marcas visibles y memorables
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg text-black/70">
              <strong>FG GO PUBLICIDAD S.A.C.</strong> es una empresa con más de
              <strong> 25 años de experiencia</strong> en el rubro de la publicidad
              interior y exterior. Creamos soluciones visuales de alto impacto,
              combinando tecnología, diseño y precisión en cada proyecto.
            </p>

            <p className="mt-4 max-w-xl text-lg text-black/70">
              Nos caracterizamos por ofrecer <strong>garantía, calidad y
              puntualidad</strong>, respaldados por maquinaria de última
              generación y un equipo altamente capacitado.
            </p>
          </motion.div>

          {/* RIGHT – MEDIA MOCKUP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main media container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-black/10 bg-black/5">
              {/* 
                👉 Reemplaza esto por:
                - <Image />
                - <video />
              */}
              <div className="flex h-full w-full items-center justify-center text-sm text-black/40">
                Imagen / Video principal
              </div>
            </div>

            {/* Floating media card */}
            <div className="absolute -bottom-6 -left-6 w-64 rounded-2xl border border-black/10 bg-white p-4 shadow-xl">
              <div className="aspect-video rounded-lg bg-black/5 flex items-center justify-center text-xs text-black/40">
                Video / Imagen secundaria
              </div>
            </div>
          </motion.div>
        </div>

        {/* STATS / HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {[
            {
              value: "25+",
              title: "Años de experiencia",
              desc: "Trayectoria sólida en publicidad interior y exterior.",
            },
            {
              value: "Tecnología",
              title: "Maquinaria moderna",
              desc: "Equipos de última generación para máxima calidad visual.",
            },
            {
              value: "Asesoría",
              title: "Especializada",
              desc: "Acompañamiento experto en cada etapa del proyecto.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-3xl border border-black/10 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-4xl font-extrabold text-fgGreen">
                {item.value}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-black/60">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
