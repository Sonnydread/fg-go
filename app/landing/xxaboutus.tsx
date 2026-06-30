"use client";

import { motion, useMotionValue, Variants, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { ScrollVelocityContainer, ScrollVelocityRow } from "../../components/ui/scroll-based-velocity";

export default function XxAboutUs() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
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

const statsContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const statItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

  return (
    <section
      id="nosotros"
      className="pt-30 pb-10 bg-gradient-to-b from-[#01274f] to-green-700 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* 🔹 COLUMNA TEXTO (igual) */}
          <motion.div
            variants={statItem}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-white text-6xl pt-20 font-black pb-20"
            >
              ¿Quiénes Somos?
            </motion.h2>

            <motion.p variants={statItem} className="text-xl md:text-2xl text-white">
              <strong>FG GO PUBLICIDAD S.A.C.</strong> es una empresa peruana con{" "}
              <span>más de 25 años de experiencia</span> en el rubro de la publicidad interior y exterior.
            </motion.p>

            <motion.p variants={statItem} className="text-2xl text-white">
              Nos distinguimos por ofrecer servicios con{" "}
              <strong>garantía, calidad y puntualidad</strong>, respaldados por maquinaria de última generación.
            </motion.p>

       <motion.div
  variants={statsContainer}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  className="mt-24 flex items-center gap-8 text-lg text-white"
>
  <motion.div variants={statItem}>
    <span className="block text-center text-5xl font-bold">25+</span>
    Años de experiencia
  </motion.div>

  <motion.div variants={statItem}>
    <span className="block text-center text-5xl font-bold">100%</span>
    Calidad garantizada
  </motion.div>

  <motion.div variants={statItem}>
    <span className="block text-center text-5xl font-bold">Alta</span>
    Resolución visual
  </motion.div>
</motion.div>
          </motion.div>

          {/* 🔥 NUEVA COLUMNA (REEMPLAZO TOTAL) */}
          <div className="relative h-[500px] md:h-[920px] flex items-center justify-center">
            
            {/* Imagen grande */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1, x: -150, y: -220 } : {}}
              transition={{ duration: 1.2 }}
              className="absolute z-20"
            >
              <motion.div className="h-[420px]" style={{ rotateX: rotateXLeft, rotateY: rotateYLeft }}>
                <Image
                  src="/img/logo/aboutt.png"
                  alt="branding publicitario"
                  width={420}
                  height={480}
                  className="rounded-3xl object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Imagen circular */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={inView ? { scale: 1.05, opacity: 1, x: 160, y: -240 } : {}}
              transition={{ duration: 1.1, delay: 0.2 }}
              className="absolute"
            >
              <motion.div style={{ rotateX: rotateXCenter, rotateY: rotateYCenter }}>
                <Image
                  src="/img/logo/about.jpeg"
                  alt="brandind publicidad"
                  width={330}
                  height={420}
                  className="rounded-2xl object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Video */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1, x: -40, y: 60 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="absolute z-40"
            >
              <motion.div style={{ rotateX: rotateXRight, rotateY: rotateYRight }}>
                <video
                  src="/vid/log-veg.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-[840px] h-[350px] object-cover rounded-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 🔹 SCROLL ROW (igual) */}
      <div>
        <h1 className="ml-30 pb-18 text-5xl text-white font-semibold">
          Nuestros Servicios Integrales
        </h1>

        <div className="relative">
          <ScrollVelocityContainer className="text-3xl md:text-5xl bg-transparent font-semibold text-black">
            <ScrollVelocityRow baseVelocity={-4}>
              <div className="flex gap-16 mx-auto text-6xl font-bold pl-2 pb-4 text-[#09b358] whitespace-nowrap">
                Letreros luminosos · Brandeo Vehicular · Banderolas · Viniles Adhesivos · Bastidores · Letras Block · Stickers · Acrílicos ·
              </div>
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>
      </div>
    </section>
  );
}