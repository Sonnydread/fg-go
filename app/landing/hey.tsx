"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { forwardRef } from "react";

export default function Hey() {
  return (
    <section className="bg-blue-700 p-4 md:px-28 md:pb-20">
      <h1 className="md:text-5xl text-3xl font-semibold text-white tracking-tighter text-start md:mb-16 mb-10">Descubre más sobre nosotros...</h1>
      <div className="flex flex-col gap-6 md:flex-row">
        {/* card candidates */}
        <Card
          image="/img/ramdom/vin24.jpeg"
          mobileImage="/img/brandeo/brandeo5.jpg"
          alt="Exteriores"
          title="Exteriores"
          description="Creamos soluciones publicitarias de alto impacto para exteriores: letreros luminosos, paneles, brandeo vehicular, banderolas, viniles y estructuras visuales diseñadas para maximizar la visibilidad de tu marca en cualquier entorno."
          bgColor="bg-green-700"
          logoSrc="/img/logofb.jpg"
          href="/blog"
        />
        {/* card companiies */}
        <Card
          image="/img/brandeo/brandeo5.jpg"
          mobileImage="/img/ramdom/vin24.jpeg"
          alt="Interiores"
          title="Interiores"
          description="Desarrollamos espacios visuales modernos para interiores, integrando branding corporativo, acrílicos, letras corpóreas, decoración comercial y acabados personalizados que fortalecen la identidad de tu negocio."
          logoSrc="/img/logofb.jpg"
          bgColor="bg-indigo-950"
          href="/experiencia"
        />
      </div>
    </section>
  );
}

interface CardProps {
  title: string;
  description: string;
  image: string;
  mobileImage?: string;
  alt: string;
  bgColor: string;
  logoSrc: string;
  href: string;
}

const MotionImage = motion(Image);

const Card = forwardRef<HTMLDivElement, CardProps>(({ title, description, image, alt, bgColor, mobileImage, logoSrc }, ref) => (
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
    <div className="relative h-80 md:h-[600px] overflow-hidden">
      <MotionImage
        src={image}
        fill
        sizes="(max-width: 768px) 0vw, 100vw"
        alt={alt}
        quality={90}
        variants={{
          initial: { opacity: 1 },
          hovered: { opacity: 0 },
        }}
      />

      {/* Mobile image */}
      {mobileImage && (
        <MotionImage
          src={mobileImage}
          fill
          sizes="(max-width: 768px) 100vw, 0vw"
          alt={alt}
          quality={90}
          className="object-cover object-center block md:hidden"
          variants={{
            initial: { opacity: 1 },
            hovered: { opacity: 0 },
          }}
        />
      )}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col justify-end p-8"
        variants={{
          initial: { opacity: 0 },
          hovered: { opacity: 1 },
        }}
      >
        <Image src={logoSrc} alt="logo" width={260} height={260} className="object-contain mb-10" />

        <h3 className="mb-4 text-5xl tracking-tighter font-semibold text-white">{title}</h3>
        <motion.p
          className="mb-6 text-xl font-medium text-justify tracking-tighter"
          variants={{
            initial: { opacity: 0, y: 20 },
            hovered: { opacity: 1, y: 0 },
          }}
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
    <div className={`${bgColor} px-4 md:py-6 py-4 md:hidden`}>
      <h3 className="text-[28px] md:block hidden leading-9 md:font-medium font-black text-white">{title}</h3>
      <p className="md:mt-2 md:max-w-[80%] md:text-xl text-base leading-6 text-justify flex font-semibold">{description}</p>
    </div>
  </motion.div>
));

Card.displayName = "Card";
