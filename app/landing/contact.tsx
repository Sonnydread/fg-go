'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function ContactSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="contacto" className="relative py-16 lg:py-24 overflow-hidden bg-gradient-to-br from-[#0033A0]/20 via-white to-[#009846]/20">
      {/* Fondo de respaldo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0033A0]/10 to-[#009846]/10" />

      {/* Fondo rotatorio */}
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
            src="/img/frondo3.png"
            alt="Ondas abstractas giratorias"
            fill
            className="object-cover opacity-90"
            priority
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* CTA Central */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-black mb-5 leading-tight">
            <span className="text-white drop-shadow-[0_0_10px_#0033A0] 
                             [text-shadow:3px_3px_0_#0033A0,-3px_3px_0_#0033A0,
                                          3px_-3px_0_#0033A0,-3px_-3px_0_#0033A0]">
              Haz que tu marca
            </span>{' '}
            <span className="text-[#009846] drop-shadow-[0_0_14px_#009846] 
                             [text-shadow:4px_4px_0_#0033A0,-4px_4px_0_#0033A0,
                                          4px_-4px_0_#0033A0,-4px_-4px_0_#0033A0]">
              se vea
            </span>
          </h2>

          <p className="text-lg md:text-4xl text-white/95 font-bold mb-10 drop-shadow-md">
            Nosotros nos encargamos del resto.
          </p>

          {/* <motion.a
            href="#formulario"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 bg-[#009846] text-white text-xl font-bold rounded-full shadow-2xl hover:bg-[#009846]/90 transition"
          >
            Solicitar cotización ahora
          </motion.a> */}
        </motion.div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Lado izquierdo: LOGO PRIORITARIO + Contacto compacto */}
          <div className="space-y-8 lg:space-y-10">
            {/* Logo de la empresa – completo y destacado */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="overflow-hidden rounded-3xl shadow-2xl border-4 border-white/30 bg-white/90 backdrop-blur-sm"
            >
              <Image
                src="/img/publicidad.png" // ← Tu logo de la empresa
                alt="Logo FG GO Publicidad"
                width={1200}
                height={800}
                className="w-full object-contain bg-white rounded-md"
                priority
              />
            </motion.div>

            {/* Información de contacto – ultra compacta (solo icono + dato) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-white/95 backdrop-blur-xl p-6 lg:p-8 rounded-3xl shadow-2xl border border-white/40"
            >
              <h3 className="text-xl font-bold text-[#0033A0] mb-6 text-center">
                Contáctanos
              </h3>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="text-[#0033A0]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-base text-gray-800">
                    Av. República de Panamá N° 5527 Of. 406 – Surquillo, Lima
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-[#009846]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:+51XXXXXXXXX" className="text-base text-[#009846] font-bold hover:underline">
                    +51 [Tu número aquí]
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-[#0033A0]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <a href="mailto:info@fggo.com.pe" className="text-base text-[#0033A0] font-bold hover:underline">
                    [tu-email@fggo.com.pe]
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Formulario */}
          <motion.div
            id="formulario"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/85 backdrop-blur-xl p-8 lg:p-12 rounded-3xl shadow-2xl border border-white/40"
          >
            <h3 className="text-2xl font-bold text-[#0033A0] mb-8 text-center">
              Envíanos tu consulta
            </h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Nombre"
                required
                className="w-full px-5 py-4 text-base rounded-xl border border-gray-300 focus:border-[#009846] focus:outline-none transition"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-5 py-4 text-base rounded-xl border border-gray-300 focus:border-[#009846] focus:outline-none transition"
              />
              <input
                type="tel"
                placeholder="Teléfono / WhatsApp"
                className="w-full px-5 py-4 text-base rounded-xl border border-gray-300 focus:border-[#009846] focus:outline-none transition"
              />
              <textarea
                placeholder="Describe tu proyecto o consulta"
                rows={4}
                required
                className="w-full px-5 py-4 text-base rounded-xl border border-gray-300 focus:border-[#009846] focus:outline-none transition resize-none"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full py-5 mt-12 bg-[#0033A0] text-white text-lg font-bold rounded-xl shadow-xl hover:bg-[#0033A0]/90 transition"
              >
                Enviar mensaje
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}