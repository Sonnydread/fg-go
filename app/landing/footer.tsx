"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import ContactModal from "./contact-modal";
import { useState } from "react";
import ButtonRotatingGradient from "../../components/ui/but";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer id="footer" className="relative overflow-hidden bg-black text-white pt-16 pb-8">
      {/* Fondo opcional */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/img/boske.png"
          alt="Fondo"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-26 z-10">
        {/* Grid de 4 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Columna 1: Logo + Redes Sociales */}
          <div className="lg:col-span-4 space-y-6">
            <Image
              src="/img/logofb.jpg"
              alt="Logo FGGO Publicidad"
              width={180}
              height={80}
              className="object-contain"
            />
            
           
          </div>

          {/* Columna 2: Dirección, Teléfonos y Email */}
          <div className="lg:col-span-3 -ml-20 space-y-6">
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={22} className="mt-0.5 text-green-400" />
                <span>Av. República de Panamá N° 5527 Of. 406 – Surquillo</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={22} className="mt-0.5 text-green-400" />
                <div>
                  <strong>Teléfonos:</strong><br />
                  982 748 220 | 989 485 036
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={22} className="mt-0.5 text-green-400" />
                <div>
                  <strong>Email:</strong><br />
                  <a href="mailto:jgomez@fggopublicidad.com" className="hover:underline">
                    jgomez@fggopublicidad.com
                  </a><br />
                  <a href="mailto:nmontezao@fggopublicidad.com" className="hover:underline">
                    nmontezao@fggopublicidad.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

         
          <div className="ml-68 flex items-center justify-center w-full flex-col">
           <div className="flex gap-8">
              <a href="#" target="_blank" className="hover:text-green-400 transition-colors">
                <Facebook size={28} />
              </a>
              <a href="#" target="_blank" className="hover:text-green-400 transition-colors">
                <Instagram size={28} />
              </a>
              <a href="#" target="_blank" className="hover:text-green-400 transition-colors">
                <Youtube size={28} /> {/* Cambia a TikTok si prefieres un ícono específico */}
              </a>
            </div>
            <h4 className="text-2xl font-semibold pb-6 mt-6 text-nowrap">Consulta por una cotización:</h4>
        <ButtonRotatingGradient onClick={() => setOpen(true)} />
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/20 my-10" />

        {/* Copyright + Enlace */}
        <div className="flex flex-col md:flex-row justify-between items-center text-lg text-white/70">
          <p>© {new Date().getFullYear()} FGGO Publicidad. Todos los derechos reservados.</p>
          <p className="text-center md:text-lg text-xl font-semibold md:mx-0 mx-10 tracking-wide text-white  md:text-right">
    Desarrollado por:{" "}
    <a
      href="https://guillermoalvarado.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
     className="ml-4 transition-all duration-300 text-red-600 md:text-green-500 hover:text-blue-500 hover:scale-105 inline-block"
    >
      Impacto Digital Estratégico
    </a>
  </p>
        </div>
      </div>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </footer>
  );
}