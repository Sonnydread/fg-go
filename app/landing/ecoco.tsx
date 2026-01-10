"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EcoCommitment() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-40 text-white">
      {/* Imagen de fondo cover (pex.jpg) */}
      <Image
        src="/img/pex.jpg" // ← Tu imagen real
        alt="Compromiso ecológico - Publicidad sostenible"
        fill
        className="object-cover brightness-75"
        priority
      />

      {/* Overlay innovador: Scrim degradado + glassmorphism dinámico para máxima legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0033A0]/60 via-black/40 to-[#009846]/60" />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" /> {/* Blur sutil para profundidad */}

      {/* Ambient glows neon (verde y azul) */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-[#009846]/40 blur-[200px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1.4, 1.1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-[#0033A0]/40 blur-[180px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
            <p className="text-red-700 font-bold">Sección Compromiso ambiental</p>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm backdrop-blur-md">
            🌱 Compromiso ambiental
          </span>

          <h2 className="bg-linear-to-r mt-6 text-6xl font-black from-[#0033A0] via-[#37b672] to-[#009846] bg-clip-text text-transparent">
            Publicidad responsable con el medio ambiente
          </h2>

         <p className="mt-8 text-xl text-white/90">
  En{" "}
  <span className="font-bold text-blue-500">FG</span>{" "}
  <span className="font-bold text-green-500">GO</span>{" "}
  <span className="font-bold text-white">
    PUBLICIDAD S.A.C.
  </span>{" "}
  apostamos por una producción visual de alto impacto que respeta el entorno.
  Utilizamos <strong>tintas ecológicas</strong> y procesos responsables que
  reducen el impacto ambiental sin sacrificar calidad ni durabilidad.
</p>

        </motion.div>

        {/* Content grid */}
        <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* LEFT – Media (con glassmorphism sobre el fondo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl">
              {/* Imagen secundaria o video (opcional) */}
              <Image
                src="/img/vinilcar.jpg" // ← Puedes mantener una imagen destacada aquí si quieres
                alt="Ejemplo de publicidad ecológica"
                fill
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating badge con neon glow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -right-8 rounded-2xl border border-[#009846]/50 bg-black/70 px-8 py-6 backdrop-blur-xl shadow-2xl ring-2 ring-[#009846]/30"
            >
              <p className="text-lg font-bold text-[#009846] drop-shadow-lg">
                Tintas ecológicas certificadas
              </p>
              <p className="mt-1 text-sm text-white/80">
                Menor impacto · Alta durabilidad
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT – Valores ecológicos (cards con glassmorphism) */}
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 * i + 0.2 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-[#009846] drop-shadow-md">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg text-white/90">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-32 text-center"
        >
          <p className="mx-auto max-w-4xl text-2xl md:text-3xl font-medium text-white/95 drop-shadow-2xl">
            Elegir FG GO es elegir una marca que cuida su imagen,
            <span className="block mt-4 text-[#009846] font-bold">
              sin dejar huella negativa en el planeta.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}