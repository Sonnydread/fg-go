"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMotionTemplate } from "framer-motion";

export default function RevealText() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 🎯 controla el reveal vertical
 
  const reveal = useTransform(scrollYProgress, [0, 1], [100, 0]);

const clipPath = useMotionTemplate`inset(${reveal}% 0% 0% 0%)`;

  return (
    <section ref={ref} className="h-[200vh]">
      
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        {/* 🟢 CAPA BASE (blanco) */}
        <div className="absolute inset-0 bg-white flex items-center justify-center">
          <h1 className="text-black text-5xl md:text-7xl font-semibold text-center px-6">
            Languages we support
          </h1>
        </div>

        {/* 🔴 CAPA REVEAL (negro) */}
       <motion.div
  style={{
    clipPath,
  }}
  className="absolute inset-0 bg-black flex items-center justify-center"
>
          <h1 className="text-white text-5xl md:text-7xl font-semibold text-center px-6">
            Languages we support
          </h1>
        </motion.div>

      </div>
    </section>
  );
}