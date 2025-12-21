'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContactSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="contacto" className="relative py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-[#0033A0]/20 via-white to-[#009846]/20">
      {/* Fondos 3D abstractos superpuestos para efecto profundidad */}
      <div className="absolute inset-0">
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          src="https://png.pngtree.com/thumb_back/fw800/background/20251117/pngtree-abstract-geometric-shapes-floating-in-a-minimalist-light-blue-environment-image_20303843.webp"
          alt="Formas geométricas flotantes 3D"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        />
        <motion.img
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
          src="https://thumbs.dreamstime.com/b/abstract-futuristic-background-blue-green-glowing-lines-bokeh-lights-data-transfer-concept-wallpaper-design-dynamic-energy-367383189.jpg"
          alt="Ondas futuristas azul verde"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* CTA Fuerte Central */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            <span className="text-[#0033A0]">Haz que tu marca</span>{' '}
            <span className="text-[#009846]">se vea</span>
          </h2>
          <p className="text-2xl md:text-4xl text-gray-800 mb-12">
            Nosotros nos encargamos del resto.
          </p>

          <motion.a
            href="#formulario"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-16 py-8 bg-[#009846] text-white text-3xl font-bold rounded-full shadow-2xl hover:bg-[#009846]/90 transition"
          >
            Solicitar cotización ahora
          </motion.a>
        </motion.div>

        {/* Grid Contacto + Formulario */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info Contacto con cards 3D */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <h3 className="text-4xl font-bold text-[#0033A0]">Contáctanos</h3>

            <motion.div
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-[#009846]/20"
            >
              <p className="text-lg text-gray-700 mb-4">
                <strong>Dirección:</strong>
              </p>
              <p className="text-xl">Av. República de Panamá N° 5527 Of. 406 – Surquillo, Lima</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-[#0033A0]/20"
            >
              <p className="text-lg text-gray-700 mb-4">
                <strong>Teléfono / WhatsApp:</strong>
              </p>
              <a href="tel:+51XXXXXXXXX" className="text-2xl text-[#009846] font-bold hover:underline">
                +51 [Tu número aquí]
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-[#009846]/20"
            >
              <p className="text-lg text-gray-700 mb-4">
                <strong>Email:</strong>
              </p>
              <a href="mailto:info@fggo.com.pe" className="text-2xl text-[#0033A0] font-bold hover:underline">
                [tu-email@fggo.com.pe]
              </a>
            </motion.div>

            {/* Imagen oficina (reemplaza con foto real de tu edificio) */}
            <motion.img
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              src="https://cdn-images.wework.com/images/BCC9F082-D4CD-11E9-9850-0A80A47AA582/bcc9f082-d4cd-11e9-9850-0a80a47aa582_0.jpg"
              alt="Oficina FG GO Publicidad"
              className="w-full rounded-3xl shadow-2xl"
            />
          </motion.div>

          {/* Formulario simple con efecto 3D glassmorphism */}
          <motion.div
            id="formulario"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-white/70 backdrop-blur-xl p-10 lg:p-16 rounded-3xl shadow-2xl border border-white/50"
            style={{ transform: 'perspective(1000px)', transformStyle: 'preserve-3d' }}
          >
            <h3 className="text-4xl font-bold text-[#0033A0] mb-10 text-center">Envíanos tu consulta</h3>

            <form className="space-y-8">
              <input
                type="text"
                placeholder="Tu nombre"
                required
                className="w-full px-6 py-5 text-lg rounded-2xl border border-gray-300 focus:border-[#009846] focus:outline-none transition"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-6 py-5 text-lg rounded-2xl border border-gray-300 focus:border-[#009846] focus:outline-none transition"
              />
              <input
                type="tel"
                placeholder="Teléfono / WhatsApp"
                className="w-full px-6 py-5 text-lg rounded-2xl border border-gray-300 focus:border-[#009846] focus:outline-none transition"
              />
              <textarea
                placeholder="Describe tu proyecto o consulta"
                rows={5}
                required
                className="w-full px-6 py-5 text-lg rounded-2xl border border-gray-300 focus:border-[#009846] focus:outline-none transition resize-none"
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-6 bg-[#0033A0] text-white text-2xl font-bold rounded-2xl shadow-xl hover:bg-[#0033A0]/90 transition"
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