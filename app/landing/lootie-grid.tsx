"use client";

import { useState, useMemo } from "react";
import Lottie from "lottie-react";
import { Home, SquarePen, PiggyBank,Hourglass, Medal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const preColoredCards = useMemo(() => {
    return cards.map((card) => ({
      ...card,
      blueAnim: recolorLottie(card.animation, BLUE),
    }));
  }, []);

  return (
    <>
      <section className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-900 to-[#072566]">
        <div className="relative w-full max-w-7xl">
          <h1 className="text-white mb-6 text-5xl tracking-tighter font-semibold">Valor Agregado que Marca la Diferencia</h1>
          <p className="text-white/80 font-semibold tracking-tighter mb-14 text-2xl">
            Más que solo diseño, entregamos experiencias completas. Combinamos creatividad estratégica, ejecución impecable, respeto por los tiempos y atención personalizada para que cada proyecto supere sus expectativas. <br /> Nuestro valor agregado se ve desde la primera idea
            hasta el resultado final, cuidamos cada detalle para que tu espacio o marca no solo se vea bien, sino que realmente funcione, conecte y perdure en el tiempo.
          </p>
          {/* Línea */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-300 z-0" />

          <div className="flex gap-4 h-[500px] relative z-10">
            {preColoredCards.map((card, i) => {
              const isHovered = hovered === i;
              const Icon = card.icon;

              return (
                <motion.div
                  key={i}
                  layout
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative rounded-2xl bg-[#319b3c] overflow-hidden cursor-pointer flex flex-col justify-between p-6 shadow-sm hover:shadow-md"
                  animate={{
                    flex: isHovered ? 3 : 1,
                   filter: isHovered 
      ? "blur(0px) brightness(1)" 
      : hovered !== null 
        ? "blur(1.5px) brightness(0.85)" 
        : "blur(0px) brightness(1)",
  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  {/* 🔥 LOTTIE AREA */}
                  <div className="flex justify-center items-start h-[60%]">
                    <div className="w-[180px] h-[180px] md:w-[240px] md:h-[240px] flex items-center justify-center">
                      <AnimatePresence mode="wait">
                        {isHovered && (
                          <motion.div key={i} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.4 }} className="w-full h-full">
                            <Lottie animationData={card.blueAnim} loop autoplay className="w-full h-full" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* 🧠 TEXTO */}
                  <div className="flex flex-col items-center text-center gap-2">
                    {!isHovered && <Icon size={36} className="text-blue-800" />}

                    <motion.h3
                      layout
                      animate={{
                       fontSize: isHovered ? "1.6rem" : "1.25rem",
                      }}
                      transition={{ duration: 0.4 }}
                      className="font-medium mb-10 text-white"
                    >
                      {card.title}
                    </motion.h3>

                    <AnimatePresence>
                      {isHovered && (
                        <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} transition={{ duration: 0.35 }} className="text-lg font-semibold text-white mb-10 max-w-[400px]">
                          {card.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* 🎯 DOT */}
                  <div className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-950" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
