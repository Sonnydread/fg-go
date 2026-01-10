'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface WatercolorSectionProps {
  title: string;
  logoSrc: string;
}

export default function WatercolorGPT({
  title,
  logoSrc,
}: WatercolorSectionProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 md:px-16 py-20">
      
      {/* COLUMNA IZQUIERDA – AQUARELA REAL */}
      <div className="relative w-full h-[360px] mt-30 flex items-center justify-center">

        {/* Aquarela real desde internet */}
        <motion.img
          src="https://png.pngtree.com/png-clipart/20240109/original/pngtree-blue-and-green-brush-strokes-ink-and-water-color-texture-png-image_14054071.png"
          alt="Watercolor background"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="
            absolute
            w-200
            max-w-full
            select-none
            drop-shadow-[0_45px_90px_rgba(0,0,0,0.45)]
          "
          style={{
            transform: 'perspective(900px) rotateY(-8deg) rotateX(3deg) scale(1.1)',
          }}
        />

        {/* LOGO */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="relative z-10"
        >
          <Image
            src="/img/publicidad.png"
            alt="Company Logo"
            width={300}
            height={300}
            className="drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)] rounded-[16px] ml-40"
          />
        </motion.div>
      </div>

      {/* COLUMNA DERECHA – TEXTO */}
      <div>
         <p className="text-red-700 font-bold">Sección imagen (prueba)</p>
        <h1 className="bg-linear-to-r text-6xl font-black from-[#0033A0] via-[#37b672] to-[#009846] bg-clip-text text-transparent pt-20">
          {title}
        </h1>
      </div>
    </section>
  );
}
