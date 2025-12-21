'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  { name: 'Vallas', img: 'https://www.shutterstock.com/shutterstock/videos/3771661451/thumb/1.jpg?ip=x480' }, // [image:5]
  { name: 'Letreros', img: 'https://i0.wp.com/lindosignage.com/wp-content/uploads/2022/03/3D-Letter-Board-Led-Illuminated-Channel-Letter-Sign-Rimless-Channel-Letters.jpg?fit=600%2C400&ssl=1' }, // [image:7]
  { name: 'Banderolas', img: 'https://i.ebayimg.com/images/g/1i4AAOSwfuBlONFF/s-l1200.jpg' }, // light box como proxy
  { name: 'Viniles Autoadhesivos', img: 'https://i0.wp.com/40visuals.com/wp-content/uploads/2022/06/positive.jpg?fit=1020%2C690&ssl=1' }, // [image:12]
  { name: 'Cajas de Luz', img: 'https://i.ebayimg.com/images/g/1i4AAOSwfuBlONFF/s-l1200.jpg' }, // [image:11]
  { name: 'Letras Volumétricas', img: 'https://dms-signs.com/wp-content/uploads/2021/01/ID.ME-McLeanVA-RGB-Illuminated-ChannelLetters-5-1080x675.jpg' }, // [image:8]
  { name: 'Revestimientos Móviles', img: 'https://www.pixelwraps.com/wp-content/uploads/2023/10/full-bus-wrap.jpg' }, // [image:9]
];

const steps = [
  'Asesoría personalizada',
  'Diseño y materiales',
  'Producción avanzada',
  'Instalación profesional',
  'Control de calidad',
];

const differentials = [
  'Maquinaria de última generación',
  'Alta resolución visual',
  'Equipo altamente capacitado',
  'Materiales duraderos',
  'Tiempos cumplidos',
];

export default function ServicesSection() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="servicios" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Fondo fresco y ecológico con ondas futuristas */}
      <div className="absolute inset-0">
        <img
          src="https://thumbs.dreamstime.com/b/abstract-green-tech-background-features-digital-waves-dynamic-particles-form-smooth-undulating-shapes-vibrant-hues-create-349410706.jpg" // [image:2] - Futurista verde/azul
          alt="Fondo ecológico fresco"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0033A0]/30 via-transparent to-[#009846]/40" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black text-center mb-16"
        >
          <span className="text-[#0033A0]">Nuestros</span>{' '}
          <span className="text-[#009846]">Servicios</span>
        </motion.h2>

        {/* Grid de Servicios - Cards dinámicas con hover futurista */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.1, y: -15, rotateY: 10 }}
              className="group relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-64 object-cover transition group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
                {service.name}
              </h3>
              <div className="absolute inset-0 border-4 border-[#009846]/0 group-hover:border-[#009846]/70 rounded-2xl transition" />
            </motion.div>
          ))}
        </motion.div>

        {/* Proceso - Línea de tiempo futurista */}
        <div className="mb-24">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0033A0]">
            Nuestro Proceso
          </h3>
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#009846] flex items-center justify-center text-2xl font-black text-white shadow-lg">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-800">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Diferenciales - Icons con glow futurista */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0033A0]">
            Por Qué Elegirnos
          </h3>
          <div className="grid md:grid-cols-5 gap-8">
            {differentials.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.15 }}
                className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl"
              >
                <div className="text-5xl mb-4 text-[#009846] filter drop-shadow-lg">✦</div>
                <p className="text-base text-gray-700 font-medium">{diff}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Beneficios rápidos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto">
            <strong className="text-[#009846]">Impacto visual máximo</strong> •{' '}
            <strong className="text-[#0033A0]">Durabilidad garantizada</strong> • Visibilidad 24/7
          </p>
        </motion.div>
      </div>
    </section>
  );
}