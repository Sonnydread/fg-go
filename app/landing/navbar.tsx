"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
// import ContactModal from "@/components/contact-modal"
import { SiTiktok, SiInstagram, SiFacebook } from "react-icons/si"
import { usePathname } from "next/navigation"
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  Variants,
} from "framer-motion"
import { Menu, X, Play } from "lucide-react"
import { Button } from "../../components/ui/button"

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Corporativos", href: "/tienda" },
  { name: "Hogar", href: "/sedes" },
  { name: "Nosotros", href: "/blog" },
  { name: "Faq´s", href: "/experiencia" },
  { name: "Contáctanos", href: "/blogs" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isFirstRender, setIsFirstRender] = useState(true)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (previous !== undefined) {
      if (latest > previous && latest > 50) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    }
  })

  const variants: Variants = {
    visible: {
      y: 0,
      transition: {
        duration: isFirstRender ? 0.5 : 0.3,
        ease: isFirstRender ? "easeInOut" : "easeOut",
      },
      opacity: 1,
    },
    hidden: {
      opacity: 1,
      y: "-100%",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  const onPageChange = () => {
    setTimeout(() => {
      setMenuOpen(false)
    }, 200)
  }

  return (
    <>
      {/* Desktop Navbar */}
      <motion.div
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        initial="visible"
        onAnimationComplete={() => setIsFirstRender(false)}
        className="fixed top-0 left-0 z-50 hidden w-full items-center border-b border-gray-800 bg-black/40 py-1 backdrop-blur-sm md:flex"
      >
        <div className="mx-6 flex w-full max-w-[1920px] items-center justify-between">
          <div className="flex">
              <Image
                src="/img/fggo.png"
                alt="Logo black"
                width={110}
                height={28}
                className="object-contain"
              />
              
          </div>

          <div className="flex flex-1 justify-center space-x-20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-xl font-semibold uppercase transition hover:text-gray-300 ${
                  pathname === item.href ? "text-white" : "text-white"
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-orange-700" />
                )}
              </Link>
            ))}
          </div>
          <div className="mr-4 flex flex-shrink-0 flex-row gap-6">
            <Link href="https://www.tiktok.com/@huellayaroma" target="_blank">
              <SiTiktok
                size={22}
                className="cursor-pointer text-white transition hover:scale-125"
              />
            </Link>
            <Link
              href="https://www.instagram.com/huellayaroma/"
              target="_blank"
            >
              <SiInstagram
                size={22}
                className="cursor-pointer text-white transition hover:scale-125"
              />
            </Link>
            <Link
              href="https://www.facebook.com/Huella-y-Aroma-100091759881419/"
              target="_blank"
            >
              <SiFacebook
                size={22}
                className="cursor-pointer text-white transition hover:scale-125"
              />
            </Link>
          </div>
         

          {/* <ContactModal open={open} onClose={() => setOpen(false)} /> */}
        </div>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        initial="visible"
        onAnimationComplete={() => setIsFirstRender(false)}
        className="fixed top-0 left-0 z-50 w-full bg-black px-4 py-4 md:hidden"
      >
        <div className="flex w-full items-center justify-between">
          <Link href="/">
            <Image
              src="/img/navbar/Xolide-white.svg"
              alt="Navbar logo"
              width={123}
              height={16}
              className="object-cover"
            />
          </Link>

          <Button
            className="h-10 gap-2 rounded-xl bg-black/80 px-3 text-white backdrop-blur-md"
            variant="outline"
            onClick={() => setMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="size-5 text-white/60" />
            ) : (
              <Menu className="size-5 text-white/60" />
            )}
            <span>{isMenuOpen ? "Close" : "Menu"}</span>
          </Button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu"
            className="fixed top-0 left-0 z-50 flex h-screen w-full items-center bg-black/95 px-6"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4">
              {navItems.map((item, i) => (
                <MenuItem
                  key={item.name}
                  href={item.href}
                  label={item.name.toUpperCase()}
                  isActive={pathname === item.href}
                  delay={0.2 + i * 0.1}
                  onClick={onPageChange}
                />
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Link href="/contact" onClick={onPageChange}>
                  <Button
                    variant="link"
                    className="font-space-grotesk px-0 text-3xl font-bold text-[#FF5F2A]"
                  >
                    Contáctanos
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

interface MenuItemProps {
  href: string
  label: string
  isActive: boolean
  delay: number
  onClick?: () => void
  className?: string
}

function MenuItem({
  href,
  label,
  isActive,
  delay,
  onClick,
  className,
}: MenuItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <Link href={href} className="relative block" onClick={onClick}>
        {isActive && (
          <Play className="absolute top-1/2 -left-6 size-5 -translate-y-1/2 text-[#FF5F2A]" />
        )}
        <Button
          variant="link"
          className={`font-space-grotesk px-0 text-3xl font-bold text-white ${className}`}
        >
          {label}
        </Button>
      </Link>
    </motion.div>
  )
}
