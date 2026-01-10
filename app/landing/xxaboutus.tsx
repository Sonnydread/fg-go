'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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


  return (
    <section id="nosotros" className="py-20 lg:py-4 bg-zinc-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
      

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-10">
          {/* Columna Texto */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
             <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block rounded-full bg-[#009846]/10 px-5 py-2 text-sm font-medium text-[#009846]">
                ¿Quiénes somos? 
              </span>
 <p className="text-red-700 font-bold">Sección - ¿Quiénes somos?</p>
            
            </motion.div>
  <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-linear-to-r text-6xl font-black from-[#0033A0] via-[#37b672] to-[#009846] bg-clip-text text-transparent pb-20"
        >
          ¿Quiénes Somos?
        </motion.h2>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              <strong className="text-[#0033A0]">FG GO PUBLICIDAD S.A.C.</strong> es una empresa peruana con{' '}
              <span className="text-[#009846] font-bold">más de 25 años de experiencia</span> en el rubro de la publicidad interior y exterior.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-600">
              Nos distinguimos por ofrecer servicios con <strong>garantía, calidad y puntualidad</strong>, respaldados por maquinaria de última generación que asegura la más alta resolución visual del mercado.
            </motion.p>

          </motion.div>

          {/* Columna Visual - Overlapping Images (reemplaza con tus fotos/videos) */}
          <div className="relative h-[500px] lg:h-[800px]">
            {/* Imagen principal grande (ej: valla o letrero impactante) */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="absolute top-0 right-0 w-[80%] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                              src="/img/neon.jpg"
                              alt="Letrero volumétrico iluminado - FG GO Publicidad"
                              width={800}
                              height={600}
                              className="h-full w-full object-cover"
                            />
            </motion.div>

            {/* Imagen secundaria (ej: letras volumétricas) */}
            <motion.div
              initial={{ opacity: 0, x: -50, y: 100 }}
              animate={inView ? { opacity: 1, x: -50, y: 100 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="absolute bottom-40 left-0 w-3/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
               <Image
                              src="/img/vinilcar.jpg"
                              alt="Letrero volumétrico iluminado - FG GO Publicidad"
                              width={800}
                              height={600}
                              className="h-full w-full object-cover"
                            />
            </motion.div>

            {/* Imagen terciaria (ej: vehículo revestido o maquinaria) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute -top-16 left-100 w-[50%] rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
               <Image
                              src="/img/letnom.jpg"
                              alt="Letrero volumétrico iluminado - FG GO Publicidad"
                              width={800}
                              height={600}
                              className="h-full w-full object-cover"
                            />
            </motion.div>

            {/* Placeholder para VIDEO (ej: timelapse de instalación o maquinaria)
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 50 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              className="absolute bottom-20 right-10 w-3/5 rounded-3xl overflow-hidden shadow-2xl"
            >
              <video
                src="/vid/log-veg.mp4" // ← REEMPLAZA con tu video (autoplay muted loop)
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
}