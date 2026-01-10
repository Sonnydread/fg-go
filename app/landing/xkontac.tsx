'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FinalCTAContact() {
  return (
    <section className="relative overflow-hidden py-26 text-white">
      {/* Imagen de fondo completa (reemplaza con tu foto deseada) */}
      <div className="absolute inset-0">
      <motion.div
          animate={{ rotate: -360 }}
          transition={{
            rotate: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 180,
              ease: "linear",
            },
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] max-w-none"
        >
      <Image
        src="/img/bosque.png" // ← Coloca aquí tu imagen de fondo (en /public/img/)
        alt="Fondo publicitario impactante"
        fill
        className="object-cover brightness-50"
        priority
      />
</motion.div>
</div>
      {/* Overlay degradado para máxima legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0033A0]/70 via-black/50 to-[#009846]/70" />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        {/* CTA BLOCK */}
        <motion.div
          initial={{ opacity: 0, rotateX: 25, y: 80 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center perspective-[1000px]"
        >
          {/* <div className="rounded-3xl border border-white/20 bg-white/10 px-10 py-20 backdrop-blur-2xl shadow-2xl">
            <h2 className="text-4xl font-extrabold md:text-5xl xl:text-6xl">
              Haz que tu marca se vea,
              <span className="block bg-gradient-to-r from-[#009846] to-[#0033A0] bg-clip-text text-transparent drop-shadow-lg">
                nosotros nos encargamos del resto
              </span>
            </h2>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 rounded-full bg-gradient-to-r from-[#009846] to-[#0033A0] px-12 py-5 text-lg font-bold text-white shadow-2xl hover:opacity-90 transition"
            >
              Solicitar cotización ahora
            </motion.button>
          </div> */}
        </motion.div>

        {/* CONTACT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-6 grid grid-cols-1 gap-20 lg:grid-cols-2"
        >
          {/* INFO */}
          <div className="space-y-10">
              <p className="text-red-700 font-bold">Sección Pie de Página</p>
            <h3 className="text-3xl font-bold">
              Conversemos sobre tu proyecto
            </h3>

            <ul className="space-y-6 text-lg">
              <li className="flex items-start gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <strong>Dirección:</strong><br />
                  <span className="text-white/90">
                    Av. República de Panamá N° 5527 Of. 406 – Surquillo
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <strong>Teléfono / WhatsApp:</strong><br />
                  <a href="tel:+51XXXXXXXXX" className="text-white/90 hover:underline">
                    +51 XXX XXX XXX
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <strong>Email:</strong><br />
                  <a href="mailto:contacto@fggopublicidad.com" className="text-white/90 hover:underline">
                    contacto@fggopublicidad.com
                  </a>
                </div>
              </li>
            </ul>

            {/* Decorative card */}
            <div className="relative mt-10 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
              <p className="text-sm text-white/80 text-center">
                Respuesta rápida · Asesoría especializada · Cotización sin compromiso
              </p>
            </div>
          </div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, rotateY: -20 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.9 }}
            className="relative rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-2xl shadow-2xl"
          >
            <h4 className="mb-8 text-xl font-semibold text-center">
              Solicita tu cotización
            </h4>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Nombre"
                required
                className="w-full rounded-xl bg-white/20 px-5 py-4 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-[#009846]/50 transition"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full rounded-xl bg-white/20 px-5 py-4 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-[#009846]/50 transition"
              />
              <input
                type="tel"
                placeholder="Teléfono / WhatsApp"
                className="w-full rounded-xl bg-white/20 px-5 py-4 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-[#009846]/50 transition"
              />
              <textarea
                placeholder="Cuéntanos brevemente tu proyecto"
                rows={4}
                required
                className="w-full rounded-xl bg-white/20 px-5 py-4 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-[#009846]/50 transition resize-none"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full rounded-full bg-gradient-to-r from-[#009846] to-[#0033A0] py-5 font-bold text-white shadow-xl hover:opacity-90 transition"
              >
                Enviar mensaje
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}