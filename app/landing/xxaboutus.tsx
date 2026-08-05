"use client";

import { motion, useMotionValue, Variants, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { ScrollVelocityContainer, ScrollVelocityRow } from "../../components/ui/scroll-based-velocity";

export default function XxAboutUs() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  // Detect mobile para no alterar desktop
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
      className="md:pt-30 pb-10 bg-linear-to-b from-[#01274f] to-green-700 overflow-hidden"
    >
      <div className="md:mx-auto mx-6 max-w-7xl">
        <div ref={ref} className="grid lg:grid-cols-2 gap-8 md:gap-20">
          
          {/* 🔹 COLUMNA TEXTO (igual) */}
          <motion.div
            variants={statItem}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8 tracking-tighter"
          >
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-white md:text-5xl text-3xl pt-20 font-black md:pb-10"
            >
              ¿Quiénes Somos?
            </motion.h2>

            <motion.p variants={statItem} className="text-base md:text-2xl text-white">
              <strong>FG GO PUBLICIDAD S.A.C.</strong> es una empresa peruana con{" "}
              <span>más de 25 años de experiencia</span> en el rubro de la publicidad interior y exterior.
            </motion.p>

            <motion.p variants={statItem} className="md:text-2xl text-base text-white">
              Nos distinguimos por ofrecer servicios con{" "}
              <strong>garantía, calidad y puntualidad</strong>, respaldados por maquinaria de última generación.
            </motion.p>

            <motion.div
              variants={statsContainer}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-10 md:mt-24 grid grid-cols-3 gap-3 sm:gap-6 md:gap-4 max-w-5xl mx-auto"
            >
              {/* Columna 1 */}
              <motion.div 
                variants={statItem}
                className="flex flex-col items-center text-center"
              >
                <span className="block text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-2 md:mb-3">25+</span>
                <p className="text-xs sm:text-sm md:text-lg text-white/80 font-medium leading-tight">Años de experiencia</p>
              </motion.div>

              {/* Columna 2 */}
              <motion.div 
                variants={statItem}
                className="flex flex-col items-center text-center"
              >
                <span className="block text-3xl sm:text-4xl md:text-4xl font-bold text-white mb-2 md:mb-3">100%</span>
                <p className="text-xs sm:text-sm md:text-lg text-white/80 font-medium leading-tight">Calidad garantizada</p>
              </motion.div>

              {/* Columna 3 */}
              <motion.div 
                variants={statItem}
                className="flex flex-col items-center text-center"
              >
                <span className="block text-2xl md:pt-0 pt-1 md:text-4xl font-bold text-white mb-2 md:mb-3">Muy Alta</span>
                <p className="text-xs sm:text-sm md:text-lg text-white/80 font-medium leading-tight">Resolución visual</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* 🔥 COLUMNA VISUAL — desktop intacto, mobile adaptado */}
        {/* 🔥 COLUMNA VISUAL — desktop intacto / mobile en una sola columna */}
<div
  className={`
    relative w-full
    ${isMobile
      ? "flex flex-col items-center gap-6 py-4"
      : "h-195 flex items-center justify-center"}
    mt-6 md:mt-0
  `}
>
  {/* Imagen grande */}
  <motion.div
    initial={{ scale: 0.6, opacity: 0 }}
    animate={
      inView
        ? {
            scale: 1,
            opacity: 1,
            x: isMobile ? 0 : -150,
            y: isMobile ? 0 : -220,
          }
        : {}
    }
    transition={{ duration: 1.2 }}
    className={isMobile ? "relative z-10 w-full max-w-85" : "absolute z-20"}
  >
    <motion.div
      className={isMobile ? "w-full" : "h-105"}
      style={{ rotateX: rotateXLeft, rotateY: rotateYLeft }}
    >
      <Image
        src="/img/logo/aboutt.png"
        alt="branding publicitario"
        width={420}
        height={480}
        className={`
          object-cover shadow-xl
          ${isMobile
            ? "w-full h-auto rounded-2xl"
            : "w-105 h-full rounded-3xl"}
        `}
      />
    </motion.div>
  </motion.div>

  {/* Imagen secundaria */}
  <motion.div
    initial={{ scale: 0.7, opacity: 0 }}
    animate={
      inView
        ? {
            scale: isMobile ? 1 : 1.05,
            opacity: 1,
            x: isMobile ? 0 : 160,
            y: isMobile ? 0 : -240,
          }
        : {}
    }
    transition={{ duration: 1.1, delay: 0.2 }}
    className={isMobile ? "relative z-10 w-full max-w-75" : "absolute"}
  >
    <motion.div style={{ rotateX: rotateXCenter, rotateY: rotateYCenter }}>
      <Image
        src="/img/logo/about.jpeg"
        alt="branding publicidad"
        width={330}
        height={420}
        className={`
          object-cover shadow-xl md:block hidden
          ${isMobile
            ? "w-full h-auto rounded-2xl"
            : "w-82.5 h-auto rounded-2xl"}
        `}
      />
    </motion.div>
  </motion.div>

  {/* Video */}
  <motion.div
    initial={{ scale: 0.6, opacity: 0 }}
    animate={
      inView
        ? {
            scale: 1,
            opacity: 1,
            x: isMobile ? 0 : -40,
            y: isMobile ? 0 : 60,
          }
        : {}
    }
    transition={{ duration: 1.2, delay: 0.3 }}
    className={isMobile ? "relative z-10 w-full max-w-90" : "absolute z-40"}
  >
    <motion.div style={{ rotateX: rotateXRight, rotateY: rotateYRight }}>
      <video
        src="/vid/log-veg.mp4"
        autoPlay
        muted
        loop
        playsInline
        className={`
          object-cover shadow-xl
          ${isMobile
            ? "w-full h-50 rounded-2xl"
            : "w-210 h-87.5 rounded-2xl"}
        `}
      />
    </motion.div>
  </motion.div>
</div>
        </div>
      </div>

      {/* 🔹 SCROLL ROW */}
      <div className="mt-8 md:mt-0">
        <h1 className="px-6 md:px-30 pb-8 md:pb-18 text-3xl md:text-5xl tracking-tighter text-white font-semibold">
          Nuestros Servicios Integrales
        </h1>

        <div className="relative">
          <ScrollVelocityContainer className="text-3xl md:text-5xl bg-transparent font-semibold text-black">
            <ScrollVelocityRow baseVelocity={-4}>
              <div className="flex gap-10 md:gap-16 mx-auto text-xl md:text-6xl font-bold pl-2 pb-4 text-[#09b358] whitespace-nowrap">
                Letreros luminosos · Brandeo Vehicular · Banderolas · Viniles Adhesivos · Bastidores · Letras Block · Stickers · Acrílicos ·
              </div>
            </ScrollVelocityRow>
             <ScrollVelocityRow baseVelocity={4}>
              <div className="md:hidden flex gap-10 md:gap-16 mx-auto text-xl md:text-6xl font-bold pl-2 pb-4 text-[#09b358] whitespace-nowrap">
                Stickers · Viniles Adhesivos · Banderolas · Brandeo Vehicular Letras Block · Bastidores · Letreros Luminosos · Acrílicos ·
              </div>
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>
      </div>
    </section>
  );
}