"use client";

import Image from "next/image";
import Link from "next/link";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactModal from "./contact-modal";
import { useState } from "react";
import ButtonRotatingGradient from "../../components/ui/but";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer id="footer" className="relative overflow-hidden bg-black text-white pt-16 pb-8">
      {/* Fondo */}
      <div className="absolute inset-0 opacity-40">
        <Image src="/img/logo/boske.png" alt="Fondo" fill className="object-cover" priority={false} />
      </div>

      <div className="relative z-10 mx-6 md:mx-12 lg:mx-20 xl:mx-28">
        {/* === CONTENIDO PRINCIPAL === */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16">
          {/* COLUMNA IZQUIERDA: Logo + Contacto */}
          <div className="flex flex-col items-center lg:items-start space-y-8 max-w-xl">
            {/* En mobile se apila verticalmente | En desktop se mantiene lado a lado */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 w-full">
              <Image src="/img/logofb.jpg" alt="Logo FGGO Publicidad" width={240} height={80} className="object-contain" />

              <div className="w-full">
                <h4 className="text-2xl font-semibold text-center lg:text-left">Contacto</h4>

                <ul className="space-y-6 lg:space-y-10 mt-6 lg:mt-8 text-base">
                  <li className="flex items-start gap-3 justify-center lg:justify-start">
                    <MapPin size={22} className="mt-0.5 text-green-400 shrink-0" />
                    <span className="text-center md:block hidden lg:text-left lg:text-nowrap">Av. República de Panamá N° 5527 Of. 406 – Surquillo</span>
                    <span className="text-center md:hidden lg:text-left lg:text-nowrap">
                      Av. República de Panamá N° 5527 <br /> Of. 406 – Surquillo
                    </span>
                  </li>

                  <li className="flex items-start gap-3 justify-center lg:justify-start">
                    <Phone size={22} className="mt-0.5 text-green-400 shrink-0" />
                    <div>
                      <span className="flex items-center gap-3 whitespace-nowrap">
                        <span>982 748 220</span>
                        <span>/</span>
                        <span>989 485 036</span>
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-3 justify-center lg:justify-start">
                    <Mail size={22} className="mt-0.5 text-green-400 shrink-0" />
                    <div className="text-center lg:text-left">
                      <a href="mailto:jgomez@fggopublicidad.com" className="hover:underline break-all">
                        jgomez@fggopublicidad.com
                      </a>
                      <br />
                      <a href="mailto:nmonteza@fggopublicidad.com" className="hover:underline break-all">
                        nmonteza@fggopublicidad.com
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: CTA + Redes */}
          <div className="flex flex-col items-center lg:items-end justify-center space-y-8">
            <div className="text-center lg:text-right">
              <h4 className="text-2xl font-semibold mb-6">Consulta por una cotización:</h4>
              <ButtonRotatingGradient onClick={() => setOpen(true)} />
            </div>

            <div className="flex gap-8">
              <Link href="https://www.facebook.com/p/FG-go-Publicidad-Interior-y-Exterior-100048656033581/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <SiFacebook size={28} className="text-white transition-transform duration-300 hover:scale-125" />
              </Link>
              <Link href="https://www.instagram.com/fg_go_publicidad_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <SiInstagram size={28} className="text-white transition-transform duration-300 hover:scale-125" />
              </Link>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-white/20 my-10" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-base text-white/70">
          <p className="md:block hidden text-center md:text-left">© {new Date().getFullYear()} FGGO Publicidad. Todos los derechos reservados.</p>
          <p className="md:hidden text-center md:text-left">
            © {new Date().getFullYear()} FGGO Publicidad. <br /> Todos los derechos reservados.
          </p>

          <p className="md:block hidden text-center md:text-right font-semibold tracking-wide text-white">
            Desarrollado por:{" "}
            <a href="https://digital-strategy-kappa.vercel.app/" target="_blank" rel="noopener noreferrer" className="ml-1 transition-all duration-300 text-red-500 md:text-green-500 hover:text-blue-400 hover:scale-105 inline-block">
              Impacto Digital Estratégico
            </a>
          </p>
          <p className="md:hidden text-center md:text-right pb-10 font-semibold tracking-wide text-white">
            Desarrollado por: <br />
            <a href="https://digital-strategy-kappa.vercel.app/" target="_blank" rel="noopener noreferrer" className="ml-1 transition-all text-xl font-black duration-300 text-red-500 md:text-green-500 hover:text-blue-400 hover:scale-105 inline-block">
              Impacto Digital Estratégico
            </a>
          </p>
        </div>
      </div>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </footer>
  );
}
