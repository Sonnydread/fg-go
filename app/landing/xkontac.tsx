"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function FinalCTAContact() {
  return (
    <section className="relative overflow-hidden py-26 text-white">
      {/* Imagen de fondo completa (reemplaza con tu foto deseada) */}
      <div className="absolute inset-0">
        <motion.div
          transition={{
            rotate: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 180,
              ease: "linear",
            },
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-none"
        >
          <Image
            src="/img/boske.png" // ← Coloca aquí tu imagen de fondo (en /public/img/)
            alt="Fondo publicitario impactante"
            fill
            className="object-cover brightness-50"
            priority
          />
        </motion.div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <h3 className="text-3xl font-bold">
              Háblanos de tu proyecto..
            </h3>
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
            <Image
              src="/img/logofb.jpg"
              alt="logo"
              width={200}
              height={200}
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

          

            <ul className="space-y-6 text-lg">
              <li className="flex items-start gap-4">
                <MapPin size="30" />
                <div>
                  <span className="text-white/90">
                    Av. República de Panamá N° 5527 Of. 406 – Surquillo
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone size="30" />
                <div>
                  <strong>Teléfonos</strong>
                  <br />
                  <p className="text-white/90 hover:underline">982 748 220 | 989 485 036</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail size="30" />
                <div>
                  <strong>Email:</strong>
                  <br />
                  <p className="text-white/90 hover:underline">
                    jgomez@fggopublicidad.com
                  </p>
                  <p className="text-white/90 hover:underline">
                    nmontezao@fggopublicidad.com
                  </p>
                </div>
              </li>
            </ul>

            {/* Decorative card */}
            <div className="relative mt-10 rounded-2xl border border-white/20 bg-green-900/80 p-6 backdrop-blur-xl">
              <p className="text-sm text-white/80 text-center">
                Respuesta rápida · Asesoría especializada · Cotización sin
                compromiso
              </p>
            </div>
          </div>

          {/* FORM */}
          <motion.form
            initial={{ opacity: 0, rotateY: -20 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.9 }}
            className="relative rounded-3xl border border-white/20 bg-green-900/50 p-10 backdrop-blur-2xl shadow-2xl"
          >
            <h4 className="mb-8 text-xl font-semibold text-center">
              Solicita tu cotización
            </h4>

            <div className="space-y-6">
              <input
                type="text"
                placeholder="Nombre"
                required
                className="w-full rounded-xl bg-black px-5 py-4 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-[#009846]/50 transition"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full rounded-xl bg-black px-5 py-4 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-[#009846]/50 transition"
              />
              <input
                type="tel"
                placeholder="Teléfono / WhatsApp"
                className="w-full rounded-xl bg-black px-5 py-4 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-[#009846]/50 transition"
              />
              <textarea
                placeholder="Cuéntanos brevemente tu proyecto"
                rows={4}
                required
                className="w-full rounded-xl bg-black px-5 py-4 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-[#009846]/50 transition resize-none"
              />

              <a>
                <button
                  className="group relative px-6 py-4 w-[50%] rounded-full 
                   bg-black text-white text-lg font-bold
                   shadow-[0_10px_10px_rgba(0,0,0,0.6)]
                   transition-all duration-300 hover:scale-[1.08]"
                >
                  <div className="absolute -inset-[0.1px] rounded-full overflow-hidden">
                    <div
                      className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite]"
                      style={{
                        background: `conic-gradient(
                from 0deg,
                transparent,
                rgba(34,197,94,0.2),
                #22c55e,
                #4ade80,
                transparent
              )`,
                      }}
                    />
                  </div>
                  <div
                    className="absolute -inset-[6px] rounded-full opacity-70 blur-[10px] group-hover:opacity-100 transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(90deg, #4ade80, #22c55e, #16a34a)",
                    }}
                  />
                  <div
                    className="absolute -inset-[14px] rounded-full opacity-50 blur-[35px] mix-blend-screen group-hover:opacity-80 transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(90deg, #4ade80, #22c55e, #16a34a)",
                    }}
                  />
                  <div
                    className="absolute -inset-[22px] rounded-full opacity-30 blur-[60px] mix-blend-screen"
                    style={{
                      background: "linear-gradient(90deg, #22c55e, #4ade80)",
                    }}
                  />
                  <div className="absolute inset-[3px] rounded-3xl bg-black" />
                  <div className="absolute inset-[4px] rounded-full border border-black" />
                  <span className="relative text-xl z-10 mx-auto flex items-center gap-3">
                    Enviar mensaje
                  </span>
                </button>
              </a>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
