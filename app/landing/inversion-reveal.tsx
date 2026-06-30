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

  const reveal = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPath = useMotionTemplate`inset(${reveal}% 0% 0% 0%)`;

  return (
    <section ref={ref} className="h-[120vh]">
      <div className="sticky top-0 h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-green-700 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-7xl font-semibold text-center px-6">
            Diseñamos espacios que inspiran
          </h1>
        </div>
        <motion.div
          style={{
            clipPath,
          }}
          className="absolute inset-0 bg-blue-700 flex items-center justify-center"
        >
          <h1 className="text-white text-5xl md:text-7xl font-semibold text-center px-6">
            Construimos marcas que perduran
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
