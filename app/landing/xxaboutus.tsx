'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function XxAboutUs() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const highlights = [
    {
      title: '+25 Años de Experiencia',
      description: 'Líderes consolidados en publicidad interior y exterior en Perú',
      icon: '🗓️',
    },
    {
      title: 'Maquinaria de Última Generación',
      description: 'Impresión de alta resolución y acabados premium garantizados',
      icon: '🖨️',
    },
    {
      title: 'Asesoría Especializada',
      description: 'Equipo capacitado para guiarte en materiales y durabilidad óptima',
      icon: '💡',
    },
  ];

  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-center mb-16"
        >
          <span className="text-[#0033A0]">Quiénes</span>{' '}
          <span className="text-[#009846]">Somos</span>
        </motion.h2>

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Columna Texto */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              <strong className="text-[#0033A0]">FG GO PUBLICIDAD S.A.C.</strong> es una empresa peruana con{' '}
              <span className="text-[#009846] font-bold">más de 25 años de experiencia</span> en el rubro de la publicidad interior y exterior.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-600">
              Nos distinguimos por ofrecer servicios con <strong>garantía, calidad y puntualidad</strong>, respaldados por maquinaria de última generación que asegura la más alta resolución visual del mercado.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-600">
              Nuestro equipo altamente capacitado realiza implementación, control de calidad y brinda asesoramiento especializado en materiales para lograr el mejor acabado y la mayor durabilidad en cada proyecto.
            </motion.p>

            {/* Highlights Cards */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-3 gap-6 mt-12">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-center"
                >
                  <div className="text-4xl mb-4">{highlight.icon}</div>
                  <h4 className="font-bold text-[#0033A0] mb-2">{highlight.title}</h4>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Columna Visual - Overlapping Images (reemplaza con tus fotos/videos) */}
          <div className="relative h-[600px] lg:h-[800px]">
            {/* Imagen principal grande (ej: valla o letrero impactante) */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="absolute top-0 right-0 w-full md:w-4/5 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/tu-valla-principal.jpg" // ← REEMPLAZA con tu mejor foto de valla o letrero nocturno
                alt="Valla publicitaria impactante - FG GO"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Imagen secundaria (ej: letras volumétricas) */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 100 }}
              animate={inView ? { opacity: 1, x: -50, y: 100 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute bottom-0 left-0 w-3/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <img
                src="/images/tus-letras-volumetricas.jpg" // ← REEMPLAZA
                alt="Letras volumétricas iluminadas"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Imagen terciaria (ej: vehículo revestido o maquinaria) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute top-1/3 left-1/4 w-2/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <img
                src="/images/tu-revestimiento-bus.jpg" // ← REEMPLAZA
                alt="Revestimiento móvil en bus"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Placeholder para VIDEO (ej: timelapse de instalación o maquinaria) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 50 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              className="absolute bottom-20 right-10 w-3/5 rounded-3xl overflow-hidden shadow-2xl"
            >
              <video
                src="/videos/tu-video-maquinaria.mp4" // ← REEMPLAZA con tu video (autoplay muted loop)
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}