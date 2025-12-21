"use client";

import { motion } from "framer-motion";

export default function FinalCTAContact() {
  return (
    <section className="relative overflow-hidden bg-black py-36 text-white">
      {/* 3D ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full bg-fgGreen/30 blur-[200px]" />
        <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-fgBlue/30 blur-[200px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* CTA BLOCK */}
        <motion.div
          initial={{ opacity: 0, rotateX: 25, y: 80 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center perspective-[1200px]"
        >
          <div className="rounded-3xl border border-white/10 bg-white/5 px-10 py-20 backdrop-blur-xl shadow-2xl">
            <h2 className="text-4xl font-extrabold md:text-5xl xl:text-6xl">
              Haz que tu marca se vea,
              <span className="block bg-gradient-to-r from-fgGreen to-fgBlue bg-clip-text text-transparent">
                nosotros nos encargamos del resto
              </span>
            </h2>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 rounded-full bg-gradient-to-r from-fgGreen to-fgBlue px-12 py-5 text-sm font-bold text-black shadow-xl"
            >
              Solicitar cotización ahora
            </motion.button>
          </div>
        </motion.div>

        {/* CONTACT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-36 grid grid-cols-1 gap-20 lg:grid-cols-2"
        >
          {/* INFO */}
          <div className="space-y-10">
            <h3 className="text-3xl font-bold">
              Conversemos sobre tu proyecto
            </h3>

            <ul className="space-y-4 text-sm text-white/80">
              <li>
                📍 <strong>Dirección:</strong><br />
                Av. República de Panamá N° 5527 Of. 406 – Surquillo
              </li>
              <li>
                📞 <strong>Teléfono / WhatsApp:</strong><br />
                +51 XXX XXX XXX
              </li>
              <li>
                ✉️ <strong>Email:</strong><br />
                contacto@fggopublicidad.com
              </li>
            </ul>

            {/* Decorative card */}
            <div className="relative mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-xs text-white/60">
                Respuesta rápida · Asesoría especializada · Cotización sin compromiso
              </p>
            </div>
          </div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, rotateY: -20 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.9 }}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >
            <h4 className="mb-8 text-lg font-semibold">
              Solicita tu cotización
            </h4>

            <div className="space-y-6 text-sm">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full rounded-xl bg-black/40 px-4 py-3 outline-none placeholder:text-white/40"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl bg-black/40 px-4 py-3 outline-none placeholder:text-white/40"
              />
              <input
                type="tel"
                placeholder="Teléfono / WhatsApp"
                className="w-full rounded-xl bg-black/40 px-4 py-3 outline-none placeholder:text-white/40"
              />
              <textarea
                placeholder="Cuéntanos brevemente tu proyecto"
                rows={4}
                className="w-full rounded-xl bg-black/40 px-4 py-3 outline-none placeholder:text-white/40"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-fgGreen py-4 font-semibold text-black transition hover:bg-fgGreenDark"
              >
                Enviar mensaje
              </button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
