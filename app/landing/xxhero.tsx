'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function XxHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculamos desplazamiento parallax basado en posición del mouse
  const parallaxOffset = (intensity: number) => ({
    x: (mousePosition.x - window.innerWidth / 2) * intensity,
    y: (mousePosition.y - window.innerHeight / 2) * intensity,
  });

  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      {/* Fondo con grid de imágenes parallax */}
      <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8 scale-110">
        {/* Imagen 1 - Valla nocturna */}
        <motion.div
          style={parallaxOffset(0.02)}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://thumbs.dreamstime.com/b/large-illuminated-billboard-emits-warm-glow-amid-rainy-urban-landscape-city-skyscrapers-loom-background-reflecting-358702892.jpg"
            alt="Valla publicitaria iluminada de noche"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Imagen 2 - Letras 3D */}
        <motion.div
          style={parallaxOffset(0.04)}
          className="relative rounded-2xl overflow-hidden shadow-2xl md:col-span-1 lg:row-span-2"
        >
          <img
            src="https://image360.com/assets/live/46/1079/6797/lacrosse_illuminated-channel-letters.jpg?autorotate=true&width=1200"
            alt="Letras volumétricas iluminadas"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Imagen 3 - Bus revestido */}
        <motion.div
          style={parallaxOffset(0.03)}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://contravision.com/wp-content/uploads/2019/11/Pepsi-Bus-WB-40-AUS-2-1024x685.jpg"
            alt="Revestimiento móvil en bus"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Imagen 4 - Publicidad creativa */}
        <motion.div
          style={parallaxOffset(0.05)}
          className="relative rounded-2xl overflow-hidden shadow-2xl lg:col-span-2"
        >
          <img
            src="https://assets.hongkiat.com/uploads/creative-billboard-advertisements/belt-up-lines-width-1500px.jpg"
            alt="Publicidad exterior creativa"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Más imágenes para llenar el grid (puedes agregar cuantas quieras) */}
        <motion.div
          style={parallaxOffset(0.02)}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://thumbs.dreamstime.com/b/neon-city-street-night-blank-digital-billboard-pink-blue-glowing-screen-urban-road-wet-asphalt-reflects-colorful-lights-408131119.jpg"
            alt="Billboard digital nocturno"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          style={parallaxOffset(0.06)}
          className="relative rounded-2xl overflow-hidden shadow-2xl md:row-span-2"
        >
          <img
            src="https://contravision.com/wp-content/uploads/2019/11/Pepsi-Bus-WB-40-AUS-1-1024x686.jpg"
            alt="Bus con publicidad full wrap"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Overlay degradado con tus colores corporativos */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-transparent to-green-950/80" />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Logo (reemplaza con tu logo real) */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight">
            <span className="text-[#0033A0]">FG</span>
            <span className="text-[#009846]"> Go!</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mt-2">Publicidad Exterior e Interior</p>
        </motion.div>

        {/* Texto principal animado */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Transformamos tu marca con{' '}
            <span className="text-[#009846] drop-shadow-lg">impacto visual</span> inolvidable
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mt-6">
            Más de 25 años creando vallas, letreros, cajas de luz y revestimientos móviles de máxima calidad
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#contacto"
            className="px-10 py-5 bg-[#009846] text-white text-xl font-semibold rounded-full hover:bg-[#009846]/90 transition shadow-2xl hover:scale-105"
          >
            Cotiza tu Proyecto Ahora
          </a>
          <a
            href="#servicios"
            className="px-10 py-5 border-4 border-white text-white text-xl font-semibold rounded-full hover:bg-white hover:text-[#0033A0] transition hover:scale-105"
          >
            Ver Nuestros Servicios
          </a>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <svg className="w-10 h-10 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}