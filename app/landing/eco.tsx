'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';

export default function EcoFriendly() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Partículas ecológicas (hojas y burbujas en verde/azul) para fondo animado sutil
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = canvas.offsetHeight;

    const particles: Array<{ x: number; y: number; size: number; speed: number; color: string; angle: number }> = [];

    // Crear partículas
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 2,
        speed: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? '#009846' : '#0033A0', // Priorizar verde y azul
        angle: Math.random() * Math.PI * 2,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.speed; // Movimiento hacia abajo (como hojas cayendo)
        p.x += Math.sin(p.angle) * 0.8; // Oscilación sutil

        if (p.y > canvas.height) {
          p.y = 0;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + '66'; // Transparencia para sutileza
        ctx.fill();

        p.angle += 0.01; // Rotación suave
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 1.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const waveVariants = {
    animate: {
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' },
    },
  };

  return (
    <section id="eco-friendly" ref={ref} className="relative py-24 lg:py-40 overflow-hidden bg-gradient-to-br from-[#0033A0]/10 to-[#009846]/10">
      {/* Canvas para partículas ecológicas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <p className="text-red-700 font-bold text-center">Sección Compromiso Ecológico</p>
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          className="bg-linear-to-r mt-6 text-6xl font-black from-[#0033A0] via-[#37b672] to-[#009846] bg-clip-text text-transparent pb-4 text-center"
        >
          Nuestro Compromiso Ecológico
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Columna de Texto - Animaciones escalonadas */}
          <div className="space-y-8">
            <motion.p
        
              className="text-xl md:text-2xl text-gray-800 leading-relaxed"
            >
              En <strong className="text-[#009846]">FG GO Publicidad</strong>, nos enorgullece ser una empresa ecológica que prioriza el cuidado del medio ambiente en cada proyecto.
            </motion.p>

            <motion.p
           
              className="text-lg text-gray-700"
            >
              Utilizamos <span className="font-bold text-[#0033A0]">tintas ecológicas de última generación</span>, libres de solventes tóxicos y con bajo impacto ambiental, asegurando impresiones vibrantes y duraderas sin comprometer el planeta.
            </motion.p>

            <motion.p
           
              className="text-lg text-gray-700 font-semibold"
            >
              Este enfoque sostenible no solo reduce emisiones y residuos, sino que también representa un <span className="text-[#009846]">plus diferenciador para nuestros clientes</span>, alineando sus marcas con valores ecológicos que resuenan en audiencias conscientes.
            </motion.p>

            {/* CTA sutil con animación de pulso */}
            <motion.a
    
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-[#009846] text-white text-xl font-semibold w-[70%] rounded-full shadow-lg hover:bg-[#009846]/90 transition"
            >
              Descubre cómo podemos hacer tu publicidad más verde
            </motion.a>
          </div>

          {/* Columna Visual - Elementos flotantes con ondas y overlaps */}
          <div className="relative h-[500px] lg:h-[700px]">
            {/* Fondo con onda animada ecológica */}
            <motion.div
             
              animate="animate"
              className="absolute inset-0 bg-gradient-to-r from-[#009846]/20 to-[#0033A0]/20 rounded-full blur-3xl opacity-50"
            />

           

            {/* Icono flotante 1: Hoja ecológica con rotación sutil */}
            <motion.div
              initial={{ opacity: 0, rotate: -2 }}
              animate={inView ? { opacity: 1, rotate: 10 } : {}}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="absolute bottom-10 left-10 text-9xl text-[#009846] opacity-30"
            >
              🍃
            </motion.div>

           

            {/* Video placeholder (reemplaza: video de impresión eco o animación naturaleza) */}
            <motion.div
           
              className="absolute top-1/6 w-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <video
                src="/vid/log-veg.mp4" // ← REEMPLAZA: Video de tintas eco en acción (autoplay muted loop)
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}