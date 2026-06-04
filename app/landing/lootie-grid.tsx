"use client";

import { useState, useMemo } from "react";
import { ChevronRight } from "lucide-react";
import Lottie from "lottie-react";
import {
  Megaphone,
  Brush,
  Palette,
  BarChart,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import setting from "@/lottie/setting.json";
import goal from "@/lottie/Goal.json";
import megaphoneAnim from "@/lottie/Megaphone.json";
import reload from "@/lottie/Reload.json";
import target from "@/lottie/Target.json";

type LottieColor = [number, number, number];

// 🎨 Recolor sin any
function recolorLottie(data: unknown, color: LottieColor) {
  const clone = JSON.parse(JSON.stringify(data)) as Record<string, unknown>;

  const walk = (obj: unknown) => {
    if (typeof obj !== "object" || obj === null) return;

    const record = obj as Record<string, unknown>;

    if (
      "c" in record &&
      typeof record.c === "object" &&
      record.c !== null
    ) {
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

const BLUE: LottieColor = [0.23, 0.51, 0.96];

const cards = [
  {
    title: "Publicidad Exterior",
    description: "Impacto visual en espacios estratégicos",
    icon: Megaphone,
    animation: megaphoneAnim,
  },
  {
    title: "Branding",
    description: "Construimos marcas memorables",
    icon: Brush,
    animation: goal,
  },
  {
    title: "Diseño Creativo",
    description: "Ideas que conectan con tu audiencia",
    icon: Palette,
    animation: setting,
  },
  {
    title: "Marketing Digital",
    description: "Impulsamos tu presencia online",
    icon: BarChart,
    animation: reload,
  },
  {
    title: "Expansión Global",
    description: "Llevamos tu marca al siguiente nivel",
    icon: Globe,
    animation: target,
  },
];

export default function LottieCardFlow() {
  const [activeIndex, setActiveIndex] = useState<number>(2);
 const [hovered, setHovered] = useState<number | null>(null);
  // 🎨 Preprocesar color una sola vez
  const preColoredCards = useMemo(() => {
    return cards.map((card) => ({
      ...card,
      blueAnim: recolorLottie(card.animation, BLUE),
    }));
  }, []);

  return (
    <>
    <section className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-900 to-[#072566] px-6">
      <div className="relative w-full max-w-[1400px]">

        {/* Línea */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-300 z-0" />

        <div className="flex gap-4 h-[500px] relative z-10">
          {preColoredCards.map((card, i) => {
            const isActive = activeIndex === i;
            const Icon = card.icon;

            return (
              <motion.div
                key={i}
                layout
                onClick={() => setActiveIndex(i)}
                className="relative rounded-2xl bg-white overflow-hidden cursor-pointer flex flex-col justify-between p-6 shadow-sm hover:shadow-md"
                animate={{
                  flex: isActive ? 3 : 1,
                  filter:
                    activeIndex !== i
                      ? "blur(1.5px) brightness(0.92)"
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
                      {isActive && (
                        <motion.div
                          key={i}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
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
                    </AnimatePresence>

                  </div>
                </div>

                {/* 🧠 TEXTO */}
                <div className="flex flex-col items-center text-center gap-2">
                  
                  {!isActive && (
                    <Icon size={36} className="text-gray-400" />
                  )}

                  <motion.h3
                    layout
                    animate={{
                      fontSize: isActive ? "1.5rem" : "1.25rem",
                      color: isActive ? "#3b82f6" : "#111827",
                    }}
                    transition={{ duration: 0.4 }}
                    className="font-medium"
                  >
                    {card.title}
                  </motion.h3>

                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.35 }}
                        className="text-xs text-gray-500 max-w-[220px]"
                      >
                        {card.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* 🎯 DOT */}
                <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500" />
              </motion.div>
            );
          })}
        </div>
      </div>

     {/* BOTÓN ALINEADO CORRECTAMENTE */}
<div className="w-full max-w-[1400px] mx-auto mt-10">
  <div className="max-w-[400px]">
    <motion.button
      onMouseEnter={() => setHovered(1)}
      onMouseLeave={() => setHovered(null)}
      className="group relative w-full h-[56px] rounded-2xl border border-gray-300 bg-white
                 flex items-center justify-center gap-2 overflow-hidden
                 text-gray-800 font-medium hover:border-gray-400 transition-colors"
    >
      <span className="relative z-10">Explore</span>

      <motion.span
        initial={{ opacity: 0, x: 20, scale: 0.8 }}
        animate={{
          opacity: hovered === 1 ? 1 : 0,
          x: hovered === 1 ? 0 : 20,
          scale: hovered === 1 ? 1 : 0.8,
        }}
        transition={{
          duration: 0.25,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="relative z-10"
      >
        <ChevronRight size={18} />
      </motion.span>

      <div className="absolute inset-0 bg-gray-100 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-2xl" />
    </motion.button>
  </div>
</div>

    </section>
</>
  );
}