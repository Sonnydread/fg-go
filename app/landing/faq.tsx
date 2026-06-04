"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/ui/accordion";

export default function Faqs() {
  const faqs = [
    {
      question: "¿Qué servicios de publicidad ofrecen?",
      answer:
        "Brindamos servicios integrales de publicidad e impresión, incluyendo viniles publicitarios, stickers, gigantografías, material POP, impresiones digitales, rotulación comercial y piezas promocionales personalizadas para empresas y particulares.",
    },
    {
      question: "¿Atienden a empresas y a clientes particulares?",
      answer:
        "Sí, trabajamos tanto con empresas, marcas y negocios como con clientes particulares. Nos adaptamos a cada necesidad, ya sea para campañas publicitarias, eventos, emprendimientos o proyectos personales.",
    },
    {
      question: "¿Pueden personalizar los diseños y materiales?",
      answer:
        "Por supuesto. Todos nuestros productos pueden personalizarse en tamaño, colores, acabados y diseño. También ofrecemos asesoría gráfica para garantizar un resultado visual atractivo y profesional.",
    },
    {
      question: "¿Cuáles son los tiempos de entrega?",
      answer:
        "Los tiempos varían según el tipo de material y la cantidad solicitada. En general, los pedidos estándar se entregan entre 2 y 5 días hábiles. Para trabajos urgentes, contamos con opciones de entrega rápida.",
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer:
        "Aceptamos transferencias bancarias, Yape, Plin y pagos en efectivo. Para pedidos empresariales o grandes volúmenes, también ofrecemos opciones de pago coordinadas previamente.",
    },
    {
      question: "¿Realizan envíos o instalaciones?",
      answer:
        "Sí, realizamos envíos y, en el caso de viniles y rotulación, ofrecemos servicio de instalación para asegurar un acabado profesional y duradero.",
    },
  ];

  return (
    <section className="relative py-32 px-6 md:px-12 text-white overflow-hidden
      bg-gradient-to-b from-[#072566] to-[#032c16]">

      {/* Luces de fondo */}
      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_25%_40%,rgba(56,189,248,0.18),transparent_30%)] 
        pointer-events-none" />

      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_75%_60%,rgba(16,185,129,0.15),transparent_30%)] 
        pointer-events-none" />

      {/* Header */}
      <div className="relative max-w-4xl mx-auto text-center mb-16">
          <p className="text-red-700 font-bold">Sección FAQS</p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-linear-to-r text-6xl font-black from-[#0033A0] via-[#37b672] to-[#009846] pb-4 bg-clip-text text-transparent">
          Preguntas Frecuentes
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto"
        >
          Resuelve tus dudas y conoce cómo podemos ayudarte con soluciones
          publicitarias profesionales y personalizadas.
        </motion.p>
      </div>

      {/* Accordion */}
      <div className="relative max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                  hover:border-green-500
                  transition-all
                "
              >
                <AccordionTrigger
                  className="
                    px-6 py-5 text-left text-lg font-medium text-white
                    hover:text-green-500 transition-colors
                  "
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="px-6 pb-5 text-white/70 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>

      {/* CTA */}
      <div className="relative z-10 flex justify-center mt-16">
          <a
              href="https://wa.me/51982748220?text=Hola!%20Quisiera%20más%20información%20sobre%20los%20servicios%20de%20FGGO!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="group relative px-12 py-8 mt-30 rounded-full 
                   bg-black text-white text-lg font-bold
                   shadow-[0_10px_10px_rgba(0,0,0,0.6)]
                   transition-all duration-300 hover:scale-[1.08]"
              >
                <div className="absolute -inset-[0.1px] rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite]"
                    style={{
                      background: `conic-gradient(
                from 0deg,
                transparent,
                rgba(34,197,94,0.2),
                #22c55e,
                #4ade80,
                transparent
              )`,
                    }}
                  />
                </div>
                <div
                  className="absolute -inset-[6px] rounded-full opacity-70 blur-[10px] group-hover:opacity-100 transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, #4ade80, #22c55e, #16a34a)",
                  }}
                />
                <div
                  className="absolute -inset-[14px] rounded-full opacity-50 blur-[35px] mix-blend-screen group-hover:opacity-80 transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, #4ade80, #22c55e, #16a34a)",
                  }}
                />
                <div
                  className="absolute -inset-[22px] rounded-full opacity-30 blur-[60px] mix-blend-screen"
                  style={{
                    background: "linear-gradient(90deg, #22c55e, #4ade80)",
                  }}
                />
                <div className="absolute inset-[3px] rounded-full bg-black" />
                <div className="absolute inset-[4px] rounded-full border border-black" />
                <span className="relative z-10 flex items-center gap-3">
                  <MessageCircle className="text-green-500" />
                  Escríbenos al WhatsApp
                </span>
              </button>
            </a>

      </div>
    </section>
  );
}
