"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { forwardRef } from "react"

export default function Hey() {
  return (
    <section className="bg-blue-700 p-4 md:px-28 md:pb-20">
      <h1 className="text-5xl font-semibold text-white text-start mb-16 uppercase">Descubre más sobre nosotros</h1>
      <div className="flex flex-col gap-6 md:flex-row">
        {/* card candidates */}
        <Card
          image="/img/grid/vin24.jpeg"
          alt="Exteriores"
          title="Exteriores"
          description="Creamos soluciones publicitarias de alto impacto para exteriores: letreros luminosos, paneles, brandeo vehicular, banderolas, viniles y estructuras visuales diseñadas para maximizar la visibilidad de tu marca en cualquier entorno."
          bgColor="bg-green-700"
          logoSrc="/img/logofb.jpg"
          href="/blog"
        />
        {/* card companiies */}
        <Card
          image="/img/grid/fro21.jpeg"
          alt="Interiores"
          title="Interiores"
          description="Desarrollamos espacios visuales modernos para interiores, integrando branding corporativo, acrílicos, letras corpóreas, decoración comercial y acabados personalizados que fortalecen la identidad de tu negocio."
          logoSrc="/img/logofb.jpg"
          bgColor="bg-indigo-950"
          href="/experiencia"
        />
      </div>
    </section>
  )
}

interface CardProps {
  title: string
  description: string
  image: string
  alt: string
  bgColor: string
  logoSrc: string
  href: string
}

const MotionImage = motion(Image)



const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, image, alt, bgColor, logoSrc }, ref) => (
    <motion.div
      className={`${bgColor} overflow-hidden rounded-2xl text-white`}
      initial={"initial"}
      whileHover={"hovered"}
      animate={"initial"}
      ref={ref}
      variants={{
        initial: { flexBasis: "140%" },
        hovered: { flexBasis: "150%" },
      }}
    >
      <div className="relative h-[208px] overflow-hidden md:h-[600px]">
        <MotionImage
          src={image}
          fill
          sizes="100vw"
          alt={alt}
          quality={100}
          priority
          className="z-10 object-cover object-center"
          variants={{
            initial: { opacity: 1 },
            hovered: { opacity: 0 },
          }}
        />
        <motion.div
          className="absolute inset-0 z-20 flex flex-col justify-end p-8"
          variants={{
            initial: { opacity: 0 },
            hovered: { opacity: 1 },
          }}
        >
          
            <Image src={logoSrc} alt="logo" width={260} height={260} className="object-contain mb-10" />
          
          <h3 className="mb-4 text-[54px] leading-[72px] font-medium text-white">
            {title}
          </h3>
          <motion.p
            className="mb-6 text-2xl font-normal"
            variants={{
              initial: { opacity: 0, y: 20 },
              hovered: { opacity: 1, y: 0 },
            }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
      <div className={`${bgColor} px-4 py-6 md:hidden`}>
        <h3 className="text-[28px] leading-9 font-medium text-white">
          {title}
        </h3>
        <p className="mt-2 max-w-[80%] text-xl leading-6 font-semibold">
          {description}
        </p>
      </div>
    </motion.div>
  )
)

Card.displayName = "Card"
