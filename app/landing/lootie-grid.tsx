"use client";

import { useState, useMemo, useEffect } from "react";
import Lottie from "lottie-react";
import { Home, SquarePen, PiggyBank, Hourglass, Medal } from "lucide-react";
import { motion } from "framer-motion";
import home from "@/lottie/Home.json";
import hour from "@/lottie/Hourglass.json";
import medal from "@/lottie/Medal.json";
import piggy from "@/lottie/Piggy Bank.json";
import pen from "@/lottie/Pen Icon.json";

type LottieColor = [number, number, number];

function recolorLottie(data: unknown, color: LottieColor) {
  const clone = JSON.parse(JSON.stringify(data)) as Record<string, unknown>;
  const walk = (obj: unknown) => {
    if (typeof obj !== "object" || obj === null) return;
    const record = obj as Record<string, unknown>;
    if ("c" in record && typeof record.c === "object" && record.c !== null) {
      const cObj = record.c as Record<string, unknown>;
      if (Array.isArray(cObj.k)) {
        cObj.k = [...color, 1];
      }
    }
    Object.values(record).forEach(walk);
  };
  walk(clone);
  return clone;
}

const BLUE: LottieColor = [0.11, 0.31, 0.85];

const cards = [
  {
    title: "Espacios que Inspiran",
    description: "Diseñamos interiores que no solo se ven bien, sino que mejoran tu calidad de vida y productividad.",
    icon: Home,
    animation: home,
  },
  {
    title: "Branding con Identidad",
    description: "Desarrollamos estilos visuales completas que transmiten y conectan los valores de tu marca.",
    icon: SquarePen,
    animation: pen,
  },
  {
    title: "Precios a tu alcance",
    description: "Productos de buen acabado, con precios justos y sin sacrificar la calidad de los mismos.",
    icon: PiggyBank,
    animation: piggy,
  },
  {
    title: "Respetamos los tiempos de entrega",
    description: "Somos responsables y profesionales, por eso terminamos cada producto en el plazo acordado.",
    icon: Hourglass,
    animation: hour,
  },
  {
    title: "Garantía en cada trabajo",
    description: "Ejecutamos un control riguroso en cada etapa para que tu inversión quede protegida y el resultado perdure en el tiempo.",
    icon: Medal,
    animation: medal,
  },
];

export default function LottieCardFlow() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const preColoredCards = useMemo(() => {
    return cards.map((card) => ({
      ...card,
      blueAnim: recolorLottie(card.animation, BLUE),
    }));
  }, []);

  return (
    <section className="w-full min-h-screen md:h-screen flex flex-col items-center justify-center bg-linear-to-b from-green-900 to-[#072566] py-16 md:py-0">
      <div className="relative w-full max-w-7xl px-6 md:px-0 md:pt-0">
        
        <h1 className="text-white mb-4 md:mb-6 text-3xl md:text-5xl tracking-tighter font-semibold">
          Valor Agregado que Marca la Diferencia
        </h1>
        
        <p className="text-white/80 font-semibold tracking-tighter mb-10 md:mb-14 text-base md:text-2xl text-justify leading-relaxed">
          Más que solo diseño, entregamos experiencias completas. Combinamos creatividad estratégica, ejecución impecable, respeto por los tiempos y atención personalizada para que cada proyecto supere sus expectativas.
          <br />
          Nuestro valor agregado se ve desde la primera idea hasta el resultado final, cuidamos cada detalle para que tu espacio o marca no solo se vea bien, sino que realmente funcione, conecte y perdure en el tiempo.
        </p>

        {/* Línea horizontal — solo desktop */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-300 z-0" />

        {/* Contenedor de cards */}
        <div className={`
          relative z-10
          ${isMobile 
            ? "flex flex-col gap-5" 
            : "flex gap-4 h-125"}
        `}>
          {preColoredCards.map((card, i) => {
            const isHovered = !isMobile && hovered === i;
            const Icon = card.icon;

            return (
              <motion.div
                key={i}
                layout
                onMouseEnter={() => !isMobile && setHovered(i)}
                onMouseLeave={() => !isMobile && setHovered(null)}
                className={`
                  relative rounded-2xl bg-[#319b3c] overflow-hidden cursor-pointer 
                  flex flex-col justify-between p-5 md:p-6 shadow-sm
                  ${isMobile ? "w-full" : ""}
                `}
                animate={
                  isMobile
                    ? {}
                    : {
                        flex: isHovered ? 3 : 1,
                        filter: isHovered
                          ? "blur(0px) brightness(1)"
                          : hovered !== null
                          ? "blur(1.5px) brightness(0.85)"
                          : "blur(0px) brightness(1)",
                      }
                }
                transition={{
                  duration: 0.5,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                {/* LOTTIE */}
                <div className={`
                  flex justify-center items-center
                  ${isMobile ? "h-35 mb-2" : "h-[60%]"}
                `}>
                  <div className={`
                    flex items-center justify-center
                    ${isMobile ? "w-32.5 h-32.5" : "w-45 h-45 md:w-60 md:h-60"}
                  `}>
                    {/* En mobile siempre mostramos el Lottie */}
                    {(isMobile || isHovered) && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full"
                      >
                        <Lottie
                          animationData={card.blueAnim}
                          loop
                          autoplay
                          className="w-full h-full"
                        />
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* TEXTO */}
                <div className="flex flex-col items-center text-center gap-2">
                  {/* Icono solo cuando no está hovered (desktop) o siempre en mobile si quieres */}
                  {!isHovered && !isMobile && (
                    <Icon size={36} className="text-blue-800" />
                  )}

                  <motion.h3
                    layout
                    animate={{
                      fontSize: isMobile ? "1.25rem" : isHovered ? "1.6rem" : "1.25rem",
                    }}
                    transition={{ duration: 0.4 }}
                    className="font-medium text-white"
                  >
                    {card.title}
                  </motion.h3>

                  {/* Descripción: siempre visible en mobile */}
                  {(isMobile || isHovered) && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className={`
                        text-white font-medium
                        ${isMobile ? "text-sm leading-relaxed mt-1 px-1" : "text-lg font-semibold mb-10 max-w-100"}
                      `}
                    >
                      {card.description}
                    </motion.p>
                  )}
                </div>

                {/* DOT — solo desktop */}
                {!isMobile && (
                  <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-950" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}