"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ScrollVelocityContainer, ScrollVelocityRow } from "../../components/ui/scroll-based-velocity";

export default function XxAboutUs() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // 🔥 MOUSE TRACKING (nuevo)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);

      mouseX.set(Math.max(Math.min(x, 1), -1));
      mouseY.set(Math.max(Math.min(y, 1), -1));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // 🔥 ROTACIONES
  const rotateXLeft = useTransform(smoothY, [-1, 1], [28, -18]);
  const rotateYLeft = useTransform(smoothX, [-1, 1], [-32, 25]);

  const rotateXCenter = useTransform(smoothY, [-1, 1], [24, -20]);
  const rotateYCenter = useTransform(smoothX, [-1, 1], [-28, 26]);

  const rotateXRight = useTransform(smoothY, [-1, 1], [22, -22]);
  const rotateYRight = useTransform(smoothX, [-1, 1], [-25, 30]);

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
    <section
      id="nosotros"
      className="pt-60 pb-20 bg-gradient-to-b from-green-800 to-[#01274f] overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-10">
          
          {/* 🔹 COLUMNA TEXTO (igual) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white text-6xl font-black pb-20"
            >
              ¿Quiénes Somos?
            </motion.h2>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white">
              <strong>FG GO PUBLICIDAD S.A.C.</strong> es una empresa peruana con{" "}
              <span>más de 25 años de experiencia</span> en el rubro de la publicidad interior y exterior.
            </motion.p>

            <motion.p variants={itemVariants} className="text-2xl text-white">
              Nos distinguimos por ofrecer servicios con{" "}
              <strong>garantía, calidad y puntualidad</strong>, respaldados por maquinaria de última generación.
            </motion.p>

            <div className="mt-24 flex items-center gap-8 text-lg text-white">
              <div>
                <span className="block text-4xl text-center font-medium">25+</span>
                Años de experiencia
              </div>
              <div>
                <span className="block text-4xl text-center font-medium">100%</span>
                Calidad garantizada
              </div>
              <div>
                <span className="block text-4xl text-center font-medium">Alta</span>
                Resolución visual
              </div>
            </div>
          </motion.div>

          {/* 🔥 NUEVA COLUMNA (REEMPLAZO TOTAL) */}
          <div className="relative h-[500px] lg:h-[800px] flex items-center justify-center [perspective:1400px]">
            
            {/* Imagen grande */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1, x: -120, y: -280 } : {}}
              transition={{ duration: 1.2 }}
              className="absolute"
            >
              <motion.div style={{ rotateX: rotateXLeft, rotateY: rotateYLeft }}>
                <Image
                  src="/img/vin7.jpeg"
                  alt=""
                  width={450}
                  height={230}
                  className="rounded-3xl object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Imagen circular */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={inView ? { scale: 1.05, opacity: 1, x: 220, y: -260 } : {}}
              transition={{ duration: 1.1, delay: 0.2 }}
              className="absolute"
            >
              <motion.div style={{ rotateX: rotateXCenter, rotateY: rotateYCenter }}>
                <Image
                  src="/img/vinilcar.jpg"
                  alt=""
                  width={330}
                  height={320}
                  className="rounded-2xl object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Video */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1, x: -40, y: 120 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute z-20"
            >
              <motion.div style={{ rotateX: rotateXRight, rotateY: rotateYRight }}>
                <video
                  src="/vid/log-veg.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-[560px] h-[340px] object-cover rounded-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 🔹 SCROLL ROW (igual) */}
      <div>
        <h1 className="ml-34 pb-18 text-5xl text-white font-semibold">
          Nuestros Servicios Integrales
        </h1>

        <div className="relative">
          <ScrollVelocityContainer className="text-3xl md:text-5xl bg-transparent font-semibold text-black">
            <ScrollVelocityRow baseVelocity={-4}>
              <div className="flex gap-16 text-6xl font-bold pl-2 pb-4 text-[#009846] whitespace-nowrap">
                Letreros luminosos · Brandeo Vehicular · Banderolas · Viniles Adhesivos · Bastidores · Letras Block · Stickers · Acrílicos ·
              </div>
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>
      </div>
    </section>
  );
}