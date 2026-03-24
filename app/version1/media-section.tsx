"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function MediaSection() {
  // Mouse tracking (efecto 3D)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 25, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

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

  // Transformaciones 3D
  const rotateXLeft = useTransform(smoothY, [-1, 1], [28, -18]);
  const rotateYLeft = useTransform(smoothX, [-1, 1], [-32, 25]);

  const rotateXCenter = useTransform(smoothY, [-1, 1], [24, -20]);
  const rotateYCenter = useTransform(smoothX, [-1, 1], [-28, 26]);

  const rotateXRight = useTransform(smoothY, [-1, 1], [22, -22]);
  const rotateYRight = useTransform(smoothX, [-1, 1], [-25, 30]);

  return (
    <section className="w-full bg-[#f5f5f5] py-4 overflow-hidden">
      <div className="mx-4 py-20 border bg-gray-200 rounded-md">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-[60%_40%] gap-12 items-start px-6 lg:px-10">
          
          {/* ====================== COLUMNA IZQUIERDA 60% ====================== */}
          <div className="relative h-[740px] flex items-center justify-center">

            {/* 1. Imagen GRANDE (izquierda - abajo) */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, x: -160, y: 70 }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              className="absolute"
              style={{
                perspective: "1400px",
                transformStyle: "preserve-3d",
                filter: "drop-shadow(40px 55px 90px rgba(0, 0, 0, 0.48))",
              }}
            >
              <motion.div style={{ rotateX: rotateXLeft, rotateY: rotateYLeft }}>
                <Image
                  src="/img/cars/es19.jpeg"
                  alt=""
                  width={480}
                  height={460}
                  className="rounded-3xl object-cover mr-20"
                  style={{ boxShadow: "inset 0 30px 60px -15px rgba(0,0,0,0.35)" }}
                />
              </motion.div>
            </motion.div>

            {/* 2. Imagen CIRCULAR (arriba y más a la izquierda) */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1.08, opacity: 1, x: -140, y: -140 }}
              transition={{ duration: 1.1, delay: 0.1, ease: "easeOut" }}
              className="absolute z-20 pb-40 ml-70"
              style={{ filter: "drop-shadow(0px 35px 70px rgba(0,0,0,0.4))" }}
            >
              <motion.div style={{ rotateX: rotateXCenter, rotateY: rotateYCenter }}>
                <Image
                  src="/img/cars/es52.jpeg"
                  alt=""
                  width={400}
                  height={300}
                  className="rounded-full object-cover shadow-xl"
                />
              </motion.div>
            </motion.div>

            {/* 3. VIDEO (abajo a la derecha) */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, x: 180, y: 110 }}
              transition={{ duration: 1.3, delay: 0.3, ease: "easeOut" }}
              className="absolute z-10 pt-80"
              style={{ filter: "drop-shadow(30px 45px 75px rgba(0,0,0,0.4))" }}
            >
              <motion.div style={{ rotateX: rotateXRight, rotateY: rotateYRight }}>
                <video
                  src="/vid/4x4.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-[440px] h-[300px] object-cover rounded-2xl"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* ====================== COLUMNA DERECHA 40% ====================== */}
          <div className="flex flex-col justify-center pt-8 md:pt-0">
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-r from-[#0033A0] via-[#37b672] to-[#009846] bg-clip-text text-transparent text-5xl md:text-6xl font-black leading-tight"
            >
              Transformamos tu marca con impacto visual
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="mt-6 max-w-xl text-lg text-black"
            >
              Diseñamos, producimos e instalamos soluciones de publicidad de
              alto impacto visual. Precisión, calidad y presencia real en todos
              lados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <a
                href="https://wa.me/51982748220?text=Hola!%20Quisiera%20más%20información%20sobre%20los%20servicios%20de%20FGGO!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="rounded-full mt-8 cursor-pointer bg-gradient-to-r from-[#0033A0] to-[#009846] px-12 py-5 text-lg font-bold text-white shadow-2xl hover:opacity-90 transition">
                  Solicitar cotización
                </button>
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
              className="mt-16 flex items-center gap-12 text-sm text-black"
            >
              <div>
                <span className="block text-4xl font-bold text-black">25+</span>
                Años de experiencia
              </div>
              <div>
                <span className="block text-4xl font-bold text-black">100%</span>
                Calidad garantizada
              </div>
              <div>
                <span className="block text-4xl font-bold text-black">Alta</span>
                Resolución visual
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}